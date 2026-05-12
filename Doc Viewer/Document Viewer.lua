-- Documentation viewer UI for a single web-served document.
-- Pulls Markdown content via GET from GitHub raw URLs and renders it inside a printer-paper-sized panel.

LOG_ENABLED = false
local GITHUB_RAW_BASE = "https://raw.githubusercontent.com/zkzeroxvirus/MTGR-Rules/main/"
local DOC_KEYS_IN_ORDER = {"rules", "host", "player"}
local DOC_SOURCES = {
	rules = { name = "Rules", path = "CORE-RULES.md", customUrl = nil },
	host = { name = "Host Cheat Sheet", path = "HOSTING/HOST-CHEAT-SHEET-V2.0.md", customUrl = nil },
	player = { name = "Player Cheat Sheet", path = "HOSTING/PLAYER-CHEAT-SHEET-V2.0.md", customUrl = nil }
}
REFRESH_SECONDS = nil -- background refresh cadence; set to nil to disable auto-refresh
USE_FAKE_DATA = false -- set true to bypass WebRequest and show dummy text for UI testing

local uiVisible = false
local lastRequestId = 0
local fullDocText = ""
local fullDocPages = {}
local currentPage = 1
local currentDocKey = DOC_KEYS_IN_ORDER[1]
local docCache = {}
local statusVersion = 0
local EST_CHARS_PER_LINE = 92 -- approximation for 14pt text inside 840px body width
local MAX_VISUAL_LINES_PER_PAGE = 56 -- approximation for 980px body height at 14pt

local function wrapLineToWidth(line, maxChars)
	if line == "" then return {""} end
	local out = {}
	local remaining = line
	while #remaining > maxChars do
		local breakAt = nil
		for i = maxChars, 1, -1 do
			if remaining:sub(i, i) == " " then
				breakAt = i
				break
			end
		end
		if not breakAt then breakAt = maxChars end
		out[#out + 1] = remaining:sub(1, breakAt)
		remaining = remaining:sub(breakAt + 1)
		remaining = remaining:gsub("^%s+", "")
	end
	out[#out + 1] = remaining
	return out
end

local function getDocUrl(key)
	local doc = DOC_SOURCES[key]
	if not doc then return nil end
	if doc.customUrl and doc.customUrl ~= "" then return doc.customUrl end
	if doc.path and doc.path ~= "" then
		return GITHUB_RAW_BASE .. doc.path
	end
	return nil
end

local function log(msg)
	if LOG_ENABLED then print("[DocUI] " .. msg) end
end

-- Keep text raw; TTS Text supports plain text. If you see markup issues, re-enable escaping.
local function escapeText(s)
	return s or ""
end

local function getTotalPages()
	if #fullDocPages == 0 then return 1 end
	return #fullDocPages
end

local function getCurrentPageText()
	if #fullDocPages == 0 then return "" end
	return fullDocPages[currentPage] or ""
end

local function updatePageDisplay()
	if not self or not self.UI then return end
	local pageText = getCurrentPageText()
	self.UI.setAttribute("doc_body", "text", pageText)
	local totalPages = getTotalPages()
	self.UI.setAttribute("page_info", "text", "Page " .. currentPage .. " / " .. totalPages)
	-- Enable/disable prev/next buttons
	self.UI.setAttribute("btn_prev_page", "interactable", currentPage > 1 and "true" or "false")
	self.UI.setAttribute("btn_next_page", "interactable", currentPage < totalPages and "true" or "false")
	log("updatePageDisplay: page " .. currentPage .. " / " .. totalPages .. ", showing " .. #pageText .. " chars")
end

local function setDocText(text)
	if not self or not self.UI then
		log("setDocText: UI not available")
		return
	end
	log("setDocText: setting text of length " .. tostring(text and #text or 0))
	fullDocText = text or ""
	fullDocPages = {}

	-- Build pages by estimated wrapped visual lines so each page fits the panel.
	local clean = fullDocText:gsub("\r", "")
	local wrappedLines = {}
	for rawLine in (clean .. "\n"):gmatch("([^\n]*)\n") do
		local chunks = wrapLineToWidth(rawLine, EST_CHARS_PER_LINE)
		for _, c in ipairs(chunks) do
			wrappedLines[#wrappedLines + 1] = c
		end
	end

	local pageLines = {}
	local visualCount = 0
	for _, line in ipairs(wrappedLines) do
		if visualCount >= MAX_VISUAL_LINES_PER_PAGE then
			fullDocPages[#fullDocPages + 1] = table.concat(pageLines, "\n")
			pageLines = {}
			visualCount = 0
		end
		pageLines[#pageLines + 1] = line
		visualCount = visualCount + 1
	end
	if #pageLines > 0 then
		fullDocPages[#fullDocPages + 1] = table.concat(pageLines, "\n")
	end
	if #fullDocPages == 0 then fullDocPages = {""} end

	currentPage = 1
	updatePageDisplay()
end

local function setStatus(text)
	if not self or not self.UI then
		log("setStatus: UI not available")
		return
	end
	log("setStatus: " .. tostring(text))
	statusVersion = statusVersion + 1
	local myStatusVersion = statusVersion
	self.UI.setAttribute("doc_status", "text", text or "")
	if text and text ~= "" then
		-- Fade away status after 2 seconds, but only if no newer status has replaced it.
		Wait.time(function()
			if self and self.UI and myStatusVersion == statusVersion then
				self.UI.setAttribute("doc_status", "text", "")
			end
		end, 2.0)
	end
end

local function setCachedDocText(key, text)
	if not key then return end
	docCache[key] = { text = text or "" }
end

local function getCachedDocText(key)
	local entry = key and docCache[key] or nil
	if entry and type(entry.text) == "string" then
		return entry.text
	end
	return nil
end

local function setVisible(isVisible)
	uiVisible = isVisible
	log("setVisible: " .. tostring(isVisible))
	if not self or not self.UI then
		log("setVisible: UI not available")
		return
	end
	-- Toggle the doc_panel active state and update button text
	self.UI.setAttribute("doc_panel", "active", isVisible and "true" or "false")
	self.UI.setAttribute("btn_toggle_doc", "text", isVisible and "Hide Document" or "Show Document")
end

local function updateTabHighlight()
	if not self or not self.UI then return end
	for _, key in ipairs(DOC_KEYS_IN_ORDER) do
		local doc = DOC_SOURCES[key]
		local btnId = "tab_" .. key
		local isActive = key == currentDocKey
		local colors = isActive and "#4CAF50|#6AD16E|#3B8E41|#6AD16E" or "#505050|#606060|#404040|#606060"
		local label = doc.name .. (isActive and " ✓" or "")
		self.UI.setAttribute(btnId, "colors", colors)
		self.UI.setAttribute(btnId, "text", label)
	end
end

local function fetchDocument(isManual)
	local requestedKey = currentDocKey
	local doc = DOC_SOURCES[requestedKey]
	if not doc then
		log("fetchDocument: unknown doc key " .. tostring(requestedKey))
		return
	end
	local url = getDocUrl(requestedKey)
	if not url then
		log("fetchDocument: no URL for key " .. tostring(requestedKey))
		return
	end
	lastRequestId = lastRequestId + 1
	local reqId = lastRequestId
	log("fetchDocument: starting fetch key=" .. tostring(requestedKey) .. " (manual=" .. tostring(isManual) .. ") from " .. tostring(url))
	setStatus((isManual and "Refreshing " or "Loading ") .. doc.name .. "...")

	-- For UI testing: skip WebRequest and show fake content
	if USE_FAKE_DATA then
		local words = {"alpha","beta","gamma","delta","omega","lorem","ipsum","dolor","sit","amet"}
		local out = {}
		for i = 1, 400 do
			local w = words[(i - 1) % #words + 1]
			out[#out + 1] = w
		end
		local fake = table.concat(out, " ")
		log("fetchDocument: using fake data length " .. #fake)
		setCachedDocText(requestedKey, fake)
		if requestedKey == currentDocKey then
			setDocText(fake)
			setStatus("Using test data")
		end
		return
	end

	WebRequest.get(url, function(req)
		if reqId ~= lastRequestId then
			log("fetchDocument: stale response, ignoring")
			return
		end

		if req.is_error then
			if requestedKey == currentDocKey then
				setStatus("Error loading document")
			end
			log("WebRequest error: " .. tostring(req.error))
			return
		end

		local body = req.text or ""
		log("fetchDocument: received text of length " .. tostring(#body))
		local escaped = escapeText(body)
		setCachedDocText(requestedKey, escaped)
		if requestedKey == currentDocKey then
			setDocText(escaped)
			local pages = getTotalPages()
			setStatus(doc.name .. " updated (" .. tostring(#body) .. " chars, " .. tostring(pages) .. " pages)")
		end
	end)
end

local function setCurrentDoc(key, isManual)
	if DOC_SOURCES[key] == nil then
		log("setCurrentDoc: unknown key " .. tostring(key))
		return
	end
	currentDocKey = key
	local doc = DOC_SOURCES[currentDocKey]
	updateTabHighlight()

	local cached = getCachedDocText(currentDocKey)
	if cached ~= nil then
		log("setCurrentDoc: showing cached content for " .. tostring(currentDocKey))
		setDocText(cached)
		if isManual then
			fetchDocument(true)
		else
			setStatus("Showing cached " .. doc.name)
		end
		return
	end

	setDocText("Loading " .. doc.name .. "...")
	fetchDocument(isManual)
end

function ui_toggle_doc(_, _)
	log("ui_toggle_doc: toggling doc panel")
	setVisible(not uiVisible)
end

function ui_refresh_doc(_, _)
	log("ui_refresh_doc: manual refresh")
	fetchDocument(true)
end

function ui_doc_rules(_, _)
	log("ui_doc_rules: switching to Rules")
	setCurrentDoc("rules", false)
end

function ui_doc_host(_, _)
	log("ui_doc_host: switching to Host Cheat Sheet")
	setCurrentDoc("host", false)
end

function ui_doc_player(_, _)
	log("ui_doc_player: switching to Player Cheat Sheet")
	setCurrentDoc("player", false)
end

function ui_prev_page(_, _)
	log("ui_prev_page: going to previous page")
	if currentPage > 1 then
		currentPage = currentPage - 1
		updatePageDisplay()
	end
end

function ui_next_page(_, _)
	log("ui_next_page: going to next page")
	if currentPage < getTotalPages() then
		currentPage = currentPage + 1
		updatePageDisplay()
	end
end

function onLoad()
	log("onLoad: initializing Documentation UI")
	setVisible(false) -- start hidden; user can show with button
	setStatus("")
	updateTabHighlight()
	setCurrentDoc(currentDocKey, false)

	if REFRESH_SECONDS and REFRESH_SECONDS > 0 then
		log("onLoad: setting up auto-refresh every " .. tostring(REFRESH_SECONDS) .. " seconds")
		Wait.time(function() fetchDocument(false) end, REFRESH_SECONDS, -1)
	end
end

-- optional helper for manual scripting use (e.g., /setDocUrl <url>)
function setDocUrl(url)
	log("setDocUrl: " .. tostring(url))
	if type(url) ~= "string" or url == "" then return end
	local doc = DOC_SOURCES[currentDocKey]
	DOC_SOURCES[currentDocKey] = { name = doc and doc.name or "Custom", customUrl = url }
	docCache[currentDocKey] = nil
	updateTabHighlight()
	fetchDocument(true)
end
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "rulebook-manifest.json");
const notebookPath = path.join(root, "NOTEBOOK-MANIFEST.json");
const platformContractsPath = path.join(root, "PLATFORM-SURFACE-CONTRACTS.json");
const progressionContractsPath = path.join(root, "PROGRESSION-CONTRACTS.json");

const normalizeHeading = (value) => String(value || "")
  .replace(/\\([!+*#_`])/g, "$1")
  .replace(/[*_`#]/g, "")
  .replace(/[–—]/g, "-")
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const displayHeading = (value) => String(value || "")
  .replace(/\\([!+*#_`])/g, "$1")
  .replace(/[*_`]/g, "")
  .trim();

const headingFromLine = (line) => {
  const match = String(line || "").match(/^(#{1,6})\s+(.+?)\s*$/);
  return match ? { level: match[1].length, text: displayHeading(match[2]) } : null;
};

const fail = (message) => { throw new Error(`Rule contract validation failed: ${message}`); };
const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const manifest = await readJson(manifestPath);
const notebook = await readJson(notebookPath);
const platformContracts = await readJson(platformContractsPath);
const progressionContracts = await readJson(progressionContractsPath);

if (manifest.schemaVersion !== 2) fail("rulebook-manifest.json must use schemaVersion 2");
if (manifest.$schema !== "contracts/rulebook.schema.json") fail("rulebook-manifest.json must declare contracts/rulebook.schema.json");
if (!Array.isArray(manifest.rules) || !manifest.rules.length) fail("manifest must contain rules");
if (platformContracts.schemaVersion !== 1 || !Array.isArray(platformContracts.rules) || !platformContracts.rules.length) {
  fail("PLATFORM-SURFACE-CONTRACTS.json must define schemaVersion 1 rules");
}
if (progressionContracts.schemaVersion !== 2 || !progressionContracts.categories) {
  fail("PROGRESSION-CONTRACTS.json must define schemaVersion 2 file-per-entry categories");
}

const allowedPhases = new Set(["before-run", "encounter-loop", "between-encounters", "crypt", "between-runs"]);
const allowedAudience = new Set(["player", "host"]);
const allowedSurfaces = new Set(["web", "notebook", "host", "tts-document"]);
const allowedProgressionCategories = new Set(["crypt_buff", "ticket", "brand", "achievement"]);
const expectedProgressionCounts = { crypt_buff: 21, ticket: 8, brand: 10, achievement: 28 };
const ruleIds = new Set();
const ruleMap = new Map();
const canonicalSources = new Set();
const sourceCache = new Map();

const sourceText = async (source) => {
  if (typeof source !== "string" || !source || source.includes("..")) fail(`invalid source path: ${source}`);
  if (!sourceCache.has(source)) {
    const fullPath = path.join(root, source);
    if (!fullPath.startsWith(root + path.sep)) fail(`source escapes repository root: ${source}`);
    sourceCache.set(source, readFile(fullPath, "utf8").catch((error) => {
      if (error.code === "ENOENT") fail(`missing source file: ${source}`);
      throw error;
    }));
  }
  return sourceCache.get(source);
};

const validateRule = async (rule, context, { platform = false } = {}) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(rule.id || "")) fail(`${context} has invalid rule id: ${rule.id}`);
  if (ruleIds.has(rule.id)) fail(`duplicate rule id across contracts: ${rule.id}`);
  ruleIds.add(rule.id);
  ruleMap.set(rule.id, rule);
  if (!rule.title || !rule.source || !rule.content) fail(`${rule.id} is missing required metadata`);
  if (!allowedPhases.has(rule.phase)) fail(`${rule.id} has invalid phase ${rule.phase}`);
  if (!Array.isArray(rule.audience) || !rule.audience.length || rule.audience.some((item) => !allowedAudience.has(item))) fail(`${rule.id} has invalid audience`);
  if (rule.content.kind !== "document") fail(`${rule.id} must use a dedicated document source`);
  if ("heading" in rule || "wholeDocument" in rule || "match" in rule) fail(`${rule.id} uses a legacy extraction field`);
  if (Array.isArray(rule.surfaces) && rule.surfaces.some((surface) => !allowedSurfaces.has(surface))) fail(`${rule.id} has an invalid surface`);
  if (platform && (!Array.isArray(rule.surfaces) || !rule.surfaces.length)) fail(`${rule.id} must declare surfaces`);

  if (platform) {
    const validPlatformSource = rule.source.startsWith("rules/") || rule.source.startsWith("generated/") || rule.source === "RULEBOOK.md";
    if (!validPlatformSource) fail(`${rule.id} points at a legacy Platform source: ${rule.source}`);
  } else {
    if (!rule.source.startsWith("rules/") || rule.source === "rules/README.md") fail(`${rule.id} must point at a canonical rules/ unit`);
    if (canonicalSources.has(rule.source)) fail(`multiple semantic rules share canonical source ${rule.source}`);
    canonicalSources.add(rule.source);
  }

  const markdown = await sourceText(rule.source);
  if (!markdown.trim()) fail(`${rule.id} document source is empty`);
  const firstHeading = markdown.replace(/\r\n?/g, "\n").split("\n").map(headingFromLine).find(Boolean);
  if (!firstHeading || firstHeading.level !== 1) fail(`${rule.id} canonical document must begin with an H1-level rule heading`);
};

for (const rule of manifest.rules) await validateRule(rule, "rulebook");
for (const rule of platformContracts.rules) await validateRule(rule, "platform surface contract", { platform: true });

const assertRuleRef = (id, context) => { if (!ruleMap.has(id)) fail(`${context} references missing rule ${id}`); };
for (const rule of manifest.rules) for (const related of rule.related || []) assertRuleRef(related, `${rule.id}.related`);
for (const chapter of manifest.learnPath || []) {
  for (const id of chapter.rules || []) {
    assertRuleRef(id, `learnPath.${chapter.id}`);
    const surfaces = ruleMap.get(id).surfaces || ["web", "notebook", "host"];
    if (!surfaces.includes("web")) fail(`learnPath.${chapter.id} references non-web rule ${id}`);
  }
}
for (const guide of manifest.guides || []) {
  for (const step of guide.steps || []) {
    if (step.rule) assertRuleRef(step.rule, `guide.${guide.id}`);
    for (const id of step.choices || []) assertRuleRef(id, `guide.${guide.id}`);
  }
}

if (notebook.schemaVersion !== 2 || !Array.isArray(notebook.tabs) || notebook.tabs.length !== 5) fail("NOTEBOOK-MANIFEST.json must define exactly five schemaVersion 2 tabs");
const expectedTitles = ["Rules - Overview", "Rules - Addendum", "Banned & Restricted", "📦 SUPPLY DROPS", "🌀 Wild Magic"];
notebook.tabs.forEach((tab, index) => {
  if (tab.title !== expectedTitles[index]) fail(`Notebook tab ${index + 1} must be "${expectedTitles[index]}"`);
  if (!Array.isArray(tab.rules) || !tab.rules.length) fail(`Notebook tab ${tab.title} must reference at least one rule`);
  for (const id of tab.rules) {
    assertRuleRef(id, `Notebook tab ${tab.title}`);
    const surfaces = ruleMap.get(id).surfaces || ["web", "notebook", "host"];
    if (!surfaces.includes("notebook")) fail(`Notebook tab ${tab.title} references rule ${id} without notebook surface`);
  }
});

const platformIds = new Set(platformContracts.rules.map((rule) => rule.id));
for (const required of ["host-health-table", "host-base-xp-table", "host-affix-structure", "core-rules-document", "host-cheat-sheet-document", "player-cheat-sheet-document"]) {
  if (!platformIds.has(required)) fail(`missing required Platform surface contract ${required}`);
}

const progressionIds = new Set();
let progressionCount = 0;
for (const [category, entries] of Object.entries(progressionContracts.categories || {})) {
  if (!allowedProgressionCategories.has(category)) fail(`progression contract has invalid category ${category}`);
  if (!entries || typeof entries !== "object" || Array.isArray(entries)) fail(`progression category ${category} must be an object`);
  for (const [id, entry] of Object.entries(entries)) {
    progressionCount += 1;
    if (!/^[a-z0-9]+(?:_[a-z0-9]+)*$/.test(id)) fail(`progression contract has invalid catalog id ${id}`);
    if (progressionIds.has(id)) fail(`duplicate progression catalog id ${id}`);
    progressionIds.add(id);
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) fail(`progression contract ${id} must be an object`);
    if (typeof entry.title !== "string" || !entry.title.trim()) fail(`progression contract ${id} is missing a title`);
    if (typeof entry.source !== "string" || !entry.source.startsWith("rules/progression/") || !entry.source.endsWith(".md")) fail(`progression contract ${id} must point at rules/progression/*.md`);
    const markdown = await sourceText(entry.source);
    if (!markdown.trim()) fail(`progression contract ${id} source is empty`);
    const firstHeading = markdown.replace(/\r\n?/g, "\n").split("\n").map(headingFromLine).find(Boolean);
    if (!firstHeading || firstHeading.level !== 1 || normalizeHeading(firstHeading.text) !== normalizeHeading(entry.title)) {
      fail(`progression contract ${id} H1 must match canonical title "${entry.title}"`);
    }
    if (!/^\*\*Effect\*\*\s*$/mi.test(markdown)) fail(`progression contract ${id} is missing an Effect block`);
  }
}
for (const [category, expected] of Object.entries(expectedProgressionCounts)) {
  const actual = Object.keys(progressionContracts.categories?.[category] || {}).length;
  if (actual !== expected) fail(`progression category ${category} must contain ${expected} entries; found ${actual}`);
}
if (Object.keys(progressionContracts.categories || {}).length !== allowedProgressionCategories.size) fail("progression contracts must define exactly crypt_buff, ticket, brand, and achievement categories");

for (const document of manifest.documents || []) {
  if (!document.source || !["RULEBOOK.md", "generated/PLAYER-REFERENCE.md", "generated/HOST-REFERENCE.md"].includes(document.source)) fail(`manifest document ${document.id} must be generated from canonical rules`);
  if (!(await sourceText(document.source)).trim()) fail(`manifest document ${document.id} is empty`);
}

console.log(`Validated ${manifest.rules.length} canonical rule units, ${platformContracts.rules.length} Platform contracts, ${progressionCount} progression units, and ${notebook.tabs.length} Notebook tabs.`);

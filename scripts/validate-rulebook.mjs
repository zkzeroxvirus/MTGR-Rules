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

const fail = (message) => {
  throw new Error(`Rule contract validation failed: ${message}`);
};

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
if (progressionContracts.schemaVersion !== 1 || !progressionContracts.source || !progressionContracts.categories) {
  fail("PROGRESSION-CONTRACTS.json must define schemaVersion 1, source, and categories");
}

const allowedPhases = new Set(["before-run", "encounter-loop", "between-encounters", "crypt", "between-runs"]);
const allowedAudience = new Set(["player", "host"]);
const allowedKinds = new Set(["document", "section", "range"]);
const allowedSurfaces = new Set(["web", "notebook", "host", "tts-document"]);
const allowedProgressionCategories = new Set(["crypt_buff", "ticket", "brand", "achievement"]);
const expectedProgressionCounts = { crypt_buff: 21, ticket: 8, brand: 10, achievement: 28 };
const ruleIds = new Set();
const ruleMap = new Map();
const documentCache = new Map();

const sourceText = async (source) => {
  if (!documentCache.has(source)) {
    const fullPath = path.join(root, source);
    if (!fullPath.startsWith(root + path.sep)) fail(`source escapes repository root: ${source}`);
    documentCache.set(source, await readFile(fullPath, "utf8"));
  }
  return documentCache.get(source);
};

const splitLines = (markdown) => String(markdown || "").replace(/\r\n?/g, "\n").split("\n");

const findHeadings = (lines, wanted, afterIndex = -1) => {
  const normalized = normalizeHeading(wanted);
  return lines
    .map((line, index) => ({ heading: headingFromLine(line), index }))
    .filter(({ heading, index }) => index > afterIndex && heading && normalizeHeading(heading.text) === normalized);
};

// Older documents sometimes use a decorative H1 immediately followed by the
// same H2 with no body between them. Treat only that empty nested wrapper as one
// logical heading. Any real duplicate remains an error.
const resolveHeading = (lines, wanted, afterIndex = -1) => {
  const matches = findHeadings(lines, wanted, afterIndex);
  if (matches.length <= 1) return { match: matches[0] || null, count: matches.length };

  for (let index = 1; index < matches.length; index += 1) {
    const previous = matches[index - 1];
    const current = matches[index];
    if (current.heading.level <= previous.heading.level) return { match: null, count: matches.length };
    const between = lines.slice(previous.index + 1, current.index);
    if (between.some((line) => line.trim() !== "")) return { match: null, count: matches.length };
  }

  return { match: matches.at(-1), count: matches.length, decorativeWrapper: true };
};

const validateRule = async (rule, context, { requireSurface = false } = {}) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(rule.id || "")) fail(`${context} has invalid rule id: ${rule.id}`);
  if (ruleIds.has(rule.id)) fail(`duplicate rule id across contracts: ${rule.id}`);
  ruleIds.add(rule.id);
  ruleMap.set(rule.id, rule);
  if (!rule.title || !rule.source || !rule.content) fail(`${rule.id} is missing required metadata`);
  if (!allowedPhases.has(rule.phase)) fail(`${rule.id} has invalid phase ${rule.phase}`);
  if (!Array.isArray(rule.audience) || !rule.audience.length || rule.audience.some((item) => !allowedAudience.has(item))) {
    fail(`${rule.id} has invalid audience`);
  }
  if ("heading" in rule || "wholeDocument" in rule || "match" in rule) fail(`${rule.id} uses a legacy extraction field; use content`);
  if (!allowedKinds.has(rule.content.kind)) fail(`${rule.id} has invalid content kind ${rule.content.kind}`);
  if (requireSurface && (!Array.isArray(rule.surfaces) || !rule.surfaces.length)) fail(`${rule.id} must declare surfaces`);
  if (Array.isArray(rule.surfaces) && rule.surfaces.some((surface) => !allowedSurfaces.has(surface))) {
    fail(`${rule.id} has an invalid surface`);
  }

  const markdown = await sourceText(rule.source);
  if (rule.content.kind === "document") {
    if (!markdown.trim()) fail(`${rule.id} document source is empty`);
    return;
  }
  const lines = splitLines(markdown);
  const start = resolveHeading(lines, rule.content.heading);
  if (!start.match) fail(`${rule.id} start heading "${rule.content.heading}" must resolve uniquely in ${rule.source}; found ${start.count}`);
  if (rule.content.kind === "range") {
    const end = resolveHeading(lines, rule.content.endHeading, start.match.index);
    if (!end.match) fail(`${rule.id} end heading "${rule.content.endHeading}" must resolve uniquely after the start in ${rule.source}; found ${end.count}`);
  }
};

for (const rule of manifest.rules) await validateRule(rule, "rulebook");
for (const rule of platformContracts.rules) await validateRule(rule, "platform surface contract", { requireSurface: true });

const assertRuleRef = (id, context) => {
  if (!ruleMap.has(id)) fail(`${context} references missing rule ${id}`);
};
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
for (const required of [
  "host-health-table",
  "host-base-xp-table",
  "host-affix-structure",
  "core-rules-document",
  "host-cheat-sheet-document",
  "player-cheat-sheet-document",
]) {
  if (!platformIds.has(required)) fail(`missing required Platform surface contract ${required}`);
}

const progressionLines = splitLines(await sourceText(progressionContracts.source));
const progressionIds = new Set();
let progressionCount = 0;
for (const [category, entries] of Object.entries(progressionContracts.categories || {})) {
  if (!allowedProgressionCategories.has(category)) fail(`progression contract has invalid category ${category}`);
  if (!entries || typeof entries !== "object" || Array.isArray(entries)) fail(`progression category ${category} must be an object`);
  for (const [id, title] of Object.entries(entries)) {
    progressionCount += 1;
    if (!/^[a-z0-9]+(?:_[a-z0-9]+)*$/.test(id)) fail(`progression contract has invalid catalog id ${id}`);
    if (progressionIds.has(id)) fail(`duplicate progression catalog id ${id}`);
    progressionIds.add(id);
    if (typeof title !== "string" || !title.trim()) fail(`progression contract ${id} is missing a title`);
    const heading = resolveHeading(progressionLines, title);
    if (!heading.match) fail(`progression contract ${id} heading "${title}" must resolve uniquely in ${progressionContracts.source}; found ${heading.count}`);
  }
}
for (const [category, expected] of Object.entries(expectedProgressionCounts)) {
  const actual = Object.keys(progressionContracts.categories?.[category] || {}).length;
  if (actual !== expected) fail(`progression category ${category} must contain ${expected} entries; found ${actual}`);
}
if (Object.keys(progressionContracts.categories || {}).length !== allowedProgressionCategories.size) {
  fail("progression contracts must define exactly crypt_buff, ticket, brand, and achievement categories");
}

console.log(`Validated ${manifest.rules.length} rulebook contracts, ${platformContracts.rules.length} Platform surface contracts, ${progressionCount} progression contracts, and ${notebook.tabs.length} Notebook tabs.`);

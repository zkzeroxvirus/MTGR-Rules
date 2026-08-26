import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRulebook } from "./build-rulebook.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "rulebook-manifest.json");
const platformPath = path.join(root, "PLATFORM-SURFACE-CONTRACTS.json");
const progressionPath = path.join(root, "PROGRESSION-CONTRACTS.json");

const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const writeJson = async (file, value) => writeFile(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
const normalize = (value) => String(value || "").replace(/\r\n?/g, "\n").trimEnd() + "\n";

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

const findHeadings = (lines, wanted, afterIndex = -1) => {
  const normalized = normalizeHeading(wanted);
  return lines
    .map((line, index) => ({ heading: headingFromLine(line), index }))
    .filter(({ heading, index }) => index > afterIndex && heading && normalizeHeading(heading.text) === normalized);
};

const resolveHeading = (lines, wanted, afterIndex = -1) => {
  const matches = findHeadings(lines, wanted, afterIndex);
  if (matches.length <= 1) return matches[0] || null;
  for (let index = 1; index < matches.length; index += 1) {
    const previous = matches[index - 1];
    const current = matches[index];
    if (current.heading.level <= previous.heading.level) return null;
    if (lines.slice(previous.index + 1, current.index).some((line) => line.trim() !== "")) return null;
  }
  return matches.at(-1);
};

const extract = (markdown, content) => {
  const text = normalize(markdown);
  if (content.kind === "document") return text;
  const lines = text.split("\n");
  const start = resolveHeading(lines, content.heading);
  if (!start) throw new Error(`Unable to resolve start heading ${content.heading}`);
  let endIndex = lines.length;
  if (content.kind === "range") {
    const end = resolveHeading(lines, content.endHeading, start.index);
    if (!end) throw new Error(`Unable to resolve end heading ${content.endHeading}`);
    endIndex = end.index;
  } else {
    for (let index = start.index + 1; index < lines.length; index += 1) {
      const heading = headingFromLine(lines[index]);
      if (heading && heading.level <= start.heading.level) {
        endIndex = index;
        break;
      }
    }
  }
  return normalize(lines.slice(start.index, endIndex).join("\n"));
};

const promoteRootHeading = (markdown, fallbackTitle) => {
  const lines = normalize(markdown).split("\n");
  const firstIndex = lines.findIndex((line) => headingFromLine(line));
  if (firstIndex < 0) return normalize(`# ${fallbackTitle}\n\n${markdown}`);
  const first = headingFromLine(lines[firstIndex]);
  const shift = Math.max(0, first.level - 1);
  if (!shift) return normalize(lines.join("\n"));
  return normalize(lines.map((line) => {
    const heading = headingFromLine(line);
    if (!heading) return line;
    const match = line.match(/^(#{1,6})(\s+.*)$/);
    return `${"#".repeat(Math.max(1, match[1].length - shift))}${match[2]}`;
  }).join("\n"));
};

const writeUnit = async (relativePath, markdown, title) => {
  const file = path.join(root, relativePath);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, promoteRootHeading(markdown, title), "utf8");
};

const sourceCache = new Map();
const sourceText = async (source) => {
  if (!sourceCache.has(source)) sourceCache.set(source, readFile(path.join(root, source), "utf8"));
  return sourceCache.get(source);
};

const rewardIds = new Set(["reward-timing", "xp-system", "cashout-system", "loot-pool", "reward-eligibility", "crypt-reward-eligibility", "crypt-completion-rewards", "run-end-essence-rewards"]);
const hostPrefixes = ["authority", "doom", "affix", "always-on", "host-"];

const directoryForRule = (rule) => {
  if (rewardIds.has(rule.id)) return "rewards";
  if (hostPrefixes.some((prefix) => rule.id.startsWith(prefix))) return "host";
  if (rule.id.startsWith("town-")) return "town";
  if (rule.id.startsWith("stay-out") || rule.id.startsWith("supply-drop") || rule.id.startsWith("event-")) return "between-encounters";
  if (rule.phase === "before-run") return "getting-started";
  if (rule.phase === "crypt") return "crypt";
  if (rule.phase === "between-runs") return "progression";
  return "encounters";
};

const progressionDirectory = new Map([
  ["crypt_buff", "crypt-buffs"],
  ["ticket", "tickets"],
  ["brand", "brands"],
  ["achievement", "achievements"],
]);

const main = async () => {
  const manifest = await readJson(manifestPath);
  const platform = await readJson(platformPath);
  const progression = await readJson(progressionPath);

  const alreadyMaterialized = manifest.rules.every((rule) => rule.source.startsWith("rules/") && rule.content?.kind === "document")
    && platform.rules.every((rule) => (rule.source.startsWith("rules/") || rule.source === "RULEBOOK.md" || rule.source.startsWith("generated/")) && rule.content?.kind === "document")
    && progression.schemaVersion === 2;
  if (alreadyMaterialized) {
    await buildRulebook();
    console.log("Canonical rule sources are already materialized; regenerated player-facing compilations.");
    return;
  }

  for (const rule of manifest.rules) {
    const markdown = extract(await sourceText(rule.source), rule.content);
    const target = `rules/${directoryForRule(rule)}/${rule.id}.md`;
    await writeUnit(target, markdown, rule.title);
    rule.source = target;
    rule.content = { kind: "document" };
  }

  for (const rule of platform.rules) {
    if (["core-rules-document", "host-cheat-sheet-document", "player-cheat-sheet-document"].includes(rule.id)) continue;
    const markdown = extract(await sourceText(rule.source), rule.content);
    const target = `rules/platform/${rule.id}.md`;
    await writeUnit(target, markdown, rule.title);
    rule.source = target;
    rule.content = { kind: "document" };
  }

  const source = await sourceText(progression.source);
  const progressionV2 = { schemaVersion: 2, categories: {} };
  for (const [category, entries] of Object.entries(progression.categories || {})) {
    progressionV2.categories[category] = {};
    for (const [id, title] of Object.entries(entries)) {
      const markdown = extract(source, { kind: "section", heading: title });
      const target = `rules/progression/${progressionDirectory.get(category)}/${id.replaceAll("_", "-")}.md`;
      await writeUnit(target, markdown, title);
      progressionV2.categories[category][id] = { title, source: target };
    }
  }

  manifest.description = "Stable rule contracts for MTGR consumers. Canonical gameplay wording lives in dedicated Markdown units under rules/; generated compilations provide continuous player and Host reading.";
  manifest.documents = [
    { id: "full-rulebook", title: "Complete Rulebook", source: "RULEBOOK.md", audience: ["player", "host"] },
    { id: "player-reference", title: "Player Reference", source: "generated/PLAYER-REFERENCE.md", audience: ["player"] },
    { id: "host-reference", title: "Host Reference", source: "generated/HOST-REFERENCE.md", audience: ["host"] },
  ];

  const coreDoc = platform.rules.find((rule) => rule.id === "core-rules-document");
  if (coreDoc) { coreDoc.source = "RULEBOOK.md"; coreDoc.content = { kind: "document" }; }
  const hostDoc = platform.rules.find((rule) => rule.id === "host-cheat-sheet-document");
  if (hostDoc) { hostDoc.source = "generated/HOST-REFERENCE.md"; hostDoc.content = { kind: "document" }; }
  const playerDoc = platform.rules.find((rule) => rule.id === "player-cheat-sheet-document");
  if (playerDoc) { playerDoc.source = "generated/PLAYER-REFERENCE.md"; playerDoc.content = { kind: "document" }; }

  await writeJson(manifestPath, manifest);
  await writeJson(platformPath, platform);
  await writeJson(progressionPath, progressionV2);
  await buildRulebook();
  console.log(`Materialized ${manifest.rules.length} rulebook units, ${platform.rules.length - 3} Platform units, and ${Object.values(progressionV2.categories).reduce((sum, entries) => sum + Object.keys(entries).length, 0)} progression units.`);
};

await main();

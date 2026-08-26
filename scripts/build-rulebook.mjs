import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "rulebook-manifest.json");
const progressionPath = path.join(root, "PROGRESSION-CONTRACTS.json");
const platformPath = path.join(root, "PLATFORM-SURFACE-CONTRACTS.json");

const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const normalize = (value) => String(value || "").replace(/\r\n?/g, "\n").trimEnd() + "\n";

const phaseLabels = new Map([
  ["before-run", "Before the Run"],
  ["encounter-loop", "Encounter Loop"],
  ["between-encounters", "Between Encounters"],
  ["crypt", "The Crypt"],
  ["between-runs", "Between Runs"],
]);

const progressionLabels = new Map([
  ["crypt_buff", "Crypt Buffs"],
  ["ticket", "Tickets"],
  ["brand", "Brands"],
  ["achievement", "Achievements"],
]);

const demoteHeadings = (markdown, amount) => normalize(markdown)
  .replace(/^(#{1,6})(\s+)/gm, (_, hashes, spacing) => `${"#".repeat(Math.min(6, hashes.length + amount))}${spacing}`);

const readRule = async (rule, headingDepth = 2) => demoteHeadings(
  await readFile(path.join(root, rule.source), "utf8"),
  headingDepth,
);

const header = (title, subtitle) => `# ${title}\n\n> ${subtitle}\n\n`;

const appendPlatformReferenceData = async (chunks, platformContracts, { audience = null } = {}) => {
  const rules = (platformContracts?.rules || []).filter((rule) => (
    rule.source?.startsWith("rules/")
    && rule.surfaces?.includes("host")
    && (!audience || rule.audience?.includes(audience))
  ));
  if (!rules.length) return;
  chunks.push("## Host Reference Data\n\n");
  for (const rule of rules) {
    chunks.push(`<!-- platform-rule:${rule.id} -->\n${await readRule(rule, 2)}\n`);
  }
};

const appendProgression = async (chunks, progression, { audience = null } = {}) => {
  if (progression?.schemaVersion !== 2 || audience === "host") return;
  chunks.push("## Permanent Progression Catalog\n\n");
  for (const [category, label] of progressionLabels) {
    const entries = Object.entries(progression.categories?.[category] || {});
    if (!entries.length) continue;
    chunks.push(`### ${label}\n\n`);
    for (const [id, entry] of entries) {
      const markdown = demoteHeadings(await readFile(path.join(root, entry.source), "utf8"), 3);
      chunks.push(`<!-- progression:${id} -->\n${markdown}\n`);
    }
  }
};

const buildReference = async (manifest, progression, platformContracts, { title, audience = null }) => {
  const chunks = [header(title, "Generated from canonical rule units under `rules/`. Edit the source units, not this compilation.")];
  for (const [phase, label] of phaseLabels) {
    const rules = manifest.rules.filter((rule) => rule.phase === phase && (!audience || rule.audience.includes(audience)));
    if (!rules.length) continue;
    chunks.push(`## ${label}\n\n`);
    for (const rule of rules) {
      chunks.push(`<!-- rule:${rule.id} -->\n${await readRule(rule, 2)}\n`);
    }
  }
  await appendPlatformReferenceData(chunks, platformContracts, { audience });
  await appendProgression(chunks, progression, { audience });
  return normalize(chunks.join(""));
};

const relativeLink = (fromDir, target) => path.relative(fromDir, target).split(path.sep).join("/");

const buildRulesIndex = (manifest, progression, platformContracts) => {
  const chunks = [
    "# Canonical MTGR Rule Units\n\n",
    "This directory is the authoritative gameplay source for MTG Roguelike. Each linked file is one stable semantic rule unit consumed directly by MTGR Platform.\n\n",
    "For continuous reading, use [`../RULEBOOK.md`](../RULEBOOK.md). Platform consumers should use stable contract IDs from `rulebook-manifest.json`, `PROGRESSION-CONTRACTS.json`, and `PLATFORM-SURFACE-CONTRACTS.json`.\n\n",
  ];

  for (const [phase, label] of phaseLabels) {
    const rules = manifest.rules.filter((rule) => rule.phase === phase);
    if (!rules.length) continue;
    chunks.push(`## ${label}\n\n`);
    for (const rule of rules) chunks.push(`- [${rule.title}](${relativeLink("rules", rule.source)}) — \`${rule.id}\`\n`);
    chunks.push("\n");
  }

  const platformRules = (platformContracts?.rules || []).filter((rule) => rule.source?.startsWith("rules/"));
  if (platformRules.length) {
    chunks.push("## Platform / Host Reference Data\n\n");
    for (const rule of platformRules) chunks.push(`- [${rule.title}](${relativeLink("rules", rule.source)}) — \`${rule.id}\`\n`);
    chunks.push("\n");
  }

  if (progression?.schemaVersion === 2) {
    chunks.push("## Permanent Progression\n\n");
    for (const [category, label] of progressionLabels) {
      const entries = Object.entries(progression.categories?.[category] || {});
      if (!entries.length) continue;
      chunks.push(`### ${label}\n\n`);
      for (const [id, entry] of entries) chunks.push(`- [${entry.title}](${relativeLink("rules", entry.source)}) — \`${id}\`\n`);
      chunks.push("\n");
    }
  }

  return normalize(chunks.join(""));
};

const outputsFor = async () => {
  const manifest = await readJson(manifestPath);
  const progression = await readJson(progressionPath);
  const platformContracts = await readJson(platformPath);
  return new Map([
    ["RULEBOOK.md", await buildReference(manifest, progression, platformContracts, { title: "MTG Roguelike — Complete Rulebook" })],
    ["generated/PLAYER-REFERENCE.md", await buildReference(manifest, progression, platformContracts, { title: "MTG Roguelike — Player Reference", audience: "player" })],
    ["generated/HOST-REFERENCE.md", await buildReference(manifest, progression, platformContracts, { title: "MTG Roguelike — Host Reference", audience: "host" })],
    ["rules/README.md", buildRulesIndex(manifest, progression, platformContracts)],
  ]);
};

export const buildRulebook = async ({ check = false } = {}) => {
  const outputs = await outputsFor();
  const stale = [];
  for (const [relativePath, expected] of outputs) {
    const file = path.join(root, relativePath);
    if (check) {
      let actual = null;
      try { actual = normalize(await readFile(file, "utf8")); } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      if (actual !== expected) stale.push(relativePath);
      continue;
    }
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, expected, "utf8");
  }
  if (stale.length) throw new Error(`Generated rulebook files are stale: ${stale.join(", ")}`);
  return outputs.size;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes("--check");
  const count = await buildRulebook({ check });
  console.log(check ? `Verified ${count} generated rulebook files.` : `Generated ${count} rulebook files.`);
}

import { access, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRulebook } from "./build-rulebook.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "rulebook-manifest.json");

const exists = async (file) => {
  try { await access(file); return true; } catch { return false; }
};

const write = async (relative, content) => {
  const file = path.join(root, relative);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content.trimEnd() + "\n", "utf8");
};

const moveIfPresent = async (from, to) => {
  const source = path.join(root, from);
  const target = path.join(root, to);
  if (!(await exists(source))) return;
  if (await exists(target)) {
    await rm(source, { recursive: true, force: true });
    return;
  }
  await mkdir(path.dirname(target), { recursive: true });
  await rename(source, target);
};

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
if (!manifest.rules.some((rule) => rule.id === "crypt-fight-choice")) {
  await write("rules/crypt/crypt-fight-choice.md", `# Crypt Fight Choice

The Crypt Fight Choice is an ultra-rare Cashout used immediately before the Crypt encounter begins.

When redeemed, the party collectively chooses which Crypt to fight from the standard Crypt pool instead of determining the Crypt randomly.

## Rules

- Only one Crypt Fight Choice may be used per run.
- Additional copies presented during the same run are discarded unused.
- If it is not used before the Crypt encounter begins, it expires and is discarded.
- Resolve this choice before the Crypt encounter would otherwise be selected.
`);
  manifest.rules.push({
    id: "crypt-fight-choice",
    title: "Crypt Fight Choice",
    source: "rules/crypt/crypt-fight-choice.md",
    phase: "crypt",
    audience: ["player", "host"],
    aliases: ["crypt fight cashout", "choose crypt", "crypt choice cashout"],
    related: ["cashout-system", "crypt"],
    content: { kind: "document" },
  });
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
}

await write("README.md", `# MTG Roguelike — Rules Repository

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U0D81ZUOGR)

MTG Roguelike is a cooperative Commander roguelike where a party progresses through Host-controlled encounters, improves its decks during the run, and ultimately faces the Crypt.

## Read the Rules

For normal play, start with the generated references:

1. [Complete Rulebook](RULEBOOK.md) — full current rules in one continuous document.
2. [Player Reference](generated/PLAYER-REFERENCE.md) — player-facing rules and permanent progression.
3. [Host Reference](generated/HOST-REFERENCE.md) — Host-facing rules, scaling tables, and encounter references.

The generated documents are reading surfaces. Do not edit them directly.

## Canonical Source of Truth

Canonical gameplay wording lives in small semantic Markdown units under [rules/](rules/README.md). Each unit owns one stable rule concept such as \`town-flow\`, \`doom-card-no\`, \`trinket-tent\`, or \`crypt-fight-choice\`.

MTGR Platform consumes those units through stable contracts:

- [rulebook-manifest.json](rulebook-manifest.json) — gameplay rule IDs and navigation.
- [PROGRESSION-CONTRACTS.json](PROGRESSION-CONTRACTS.json) — file-per-entry Crypt Buffs, Tickets, Brands, and Achievements.
- [PLATFORM-SURFACE-CONTRACTS.json](PLATFORM-SURFACE-CONTRACTS.json) — Host/TTS surfaces not used by normal rule navigation.
- [NOTEBOOK-MANIFEST.json](NOTEBOOK-MANIFEST.json) — exact managed Tabletop Simulator Notebook composition.

Consumers use IDs; they do not scrape headings or choose Markdown section boundaries.

## Run Flow

\`Deckbuild → Event + Trinket → Encounter → Rewards → Town or Stay Out → Events → Next Encounter → Crypt → Postgame Progression\`

Standard mode uses three scheduled encounters before the Crypt. Variant mode uses four.

## Repository Layout

\`rules/\` is authoritative gameplay text. \`generated/\` and \`RULEBOOK.md\` are derived reading documents. \`docs/\` contains non-normative tooling/architecture documentation. \`experiments/\` contains proposals that are not part of the active ruleset. \`archive/\` preserves pre-contract monoliths and old generated snapshots for history only.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for ownership and update rules.

## Making a Rule Change

Edit the smallest canonical file under \`rules/\` that owns the mechanic. If a new mechanic needs its own stable concept, add a new rule unit and register its ID in the appropriate contract. Then run:

\`npm run build\`

\`npm run check\`

Generated documents must be committed with their canonical source changes.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.
`);

await write("CONTRIBUTING.md", `# Contributing to MTG Roguelike Rules

Rule changes are made against semantic source units, not generated rulebooks or archived monoliths.

## Find the Owning Rule

Use [rules/README.md](rules/README.md) or the stable IDs in [rulebook-manifest.json](rulebook-manifest.json) and [PROGRESSION-CONTRACTS.json](PROGRESSION-CONTRACTS.json).

When changing an existing mechanic, edit the smallest canonical file that already owns it. Do not copy the same rule wording into another source file.

## Add New Mechanics

A new independently addressable mechanic should normally receive:

1. one canonical Markdown file under the appropriate \`rules/\` area;
2. one stable kebab-case rule ID in \`rulebook-manifest.json\`, or a stable catalog ID in \`PROGRESSION-CONTRACTS.json\`;
3. aliases/relationships when they improve discovery;
4. Notebook or Platform surface registration only when that surface actually needs the rule.

Do not add heading selectors, ranges, fuzzy matching, or consumer-specific Markdown parsing. Canonical contracts use dedicated document sources.

## Generated Files

Do not hand-edit:

- \`RULEBOOK.md\`
- \`generated/PLAYER-REFERENCE.md\`
- \`generated/HOST-REFERENCE.md\`
- \`rules/README.md\`

Regenerate them with:

\`npm run build\`

Validate the complete contract graph with:

\`npm run check\`

CI runs the same check on pull requests.

## Non-Canonical Material

- \`docs/\` — implementation/tooling documentation; not gameplay authority.
- \`experiments/\` — proposals and experimental systems; not active unless promoted into \`rules/\`.
- \`archive/\` — historical source snapshots; never use as a current rule source.

## Issues and Review

For a bug, conflict, balance concern, or new-content proposal, open the matching GitHub Issue template when available. Reference the stable rule ID and canonical source path rather than an archived document heading.

A mechanical change should explain the current behavior, proposed behavior, affected rule IDs, and any Platform/TTS surface that must change with it.
`);

await write("docs/ARCHITECTURE.md", `# MTGR Rules Source Architecture

## Authority Model

The repository has one gameplay-authority layer: semantic Markdown units under \`rules/\`.

A canonical unit should own one mechanic or one tightly coupled rules concept. Stable IDs in the JSON contracts are the interface between the Rules repository and MTGR Platform.

Generated documents are projections of canonical units; they are not independent sources of truth.

## Contract Layers

### Rulebook contract

\`rulebook-manifest.json\` maps stable kebab-case IDs to dedicated rule documents. Normal rule units must use \`content.kind = "document"\` and a source below \`rules/\`.

### Progression contract

\`PROGRESSION-CONTRACTS.json\` maps permanent progression catalog IDs to individual files under \`rules/progression/\`. Crypt Buffs, Tickets, Brands, and Achievements are file-per-entry so game tools can consume one definition without parsing the full progression catalog.

### Platform surface contract

\`PLATFORM-SURFACE-CONTRACTS.json\` exposes rules or generated documents used by Host/TTS surfaces that are intentionally outside normal web navigation. Platform-only operational registries may remain Platform-owned when their contents change independently from rules wording.

### Notebook contract

\`NOTEBOOK-MANIFEST.json\` composes the five managed TTS Notebook tabs from stable rule IDs. Notebook consumers do not scrape Markdown headings.

## Human Reading Surfaces

\`scripts/build-rulebook.mjs\` generates:

- \`RULEBOOK.md\` — complete reading document;
- \`generated/PLAYER-REFERENCE.md\` — player-facing projection plus progression catalog;
- \`generated/HOST-REFERENCE.md\` — Host-facing projection plus Host Platform tables;
- \`rules/README.md\` — canonical-unit index.

The build is deterministic. \`npm run check\` fails when generated output is stale.

## Content Classes

\`rules/\` — active canonical gameplay rules.

\`docs/\` — implementation and architecture documentation; informative, not normative gameplay text.

\`experiments/\` — unpromoted experimental material. Promotion requires creating/updating canonical units and contracts.

\`archive/\` — historical monoliths, old cheat sheets, and communications. Archived files must never be referenced by live contracts.

## Change Procedure

1. Identify the stable rule/catalog ID that owns the mechanic.
2. Edit that canonical file only.
3. Add or update relationships/surface composition when required.
4. Run \`npm run build\`.
5. Run \`npm run check\`.
6. Commit source and generated projections together.

If two canonical files need identical rules wording, that is usually a signal that ownership should be consolidated rather than duplicated.
`);

await write("archive/README.md", `# Archive

These files preserve pre-semantic-contract Rules sources, old generated Host/player snapshots, and historical communications.

They are retained for history and migration auditing only. They are not active gameplay authority and must not be referenced by live rule, progression, Notebook, or Platform contracts.
`);

const legacyRoot = [
  "AFFIXES-V1.0.md",
  "BRANDS-SYSTEM-V1.0.md",
  "CARD-GAME-RULINGS-SPIRITUAL-GUIDANCE.md",
  "CORE-GAME-STRUCTURE-V1.0.md",
  "CORE-RULES.md",
  "DECKBUILDING-RULES-V2.1.md",
  "DEMON-GENERALS-V2.0.md",
  "DOOM-SYSTEM-V1.0.md",
  "ENCOUNTER-SYSTEM-V1.0.md",
  "ESSENCE-COUNTER-FUNCTIONALITY.md",
  "EVENT-SYSTEM-V1.0.md",
  "HOST-AUTHORITY-SYSTEM-V1.0.md",
  "NOTEBOOK-RULES-ADDENDUM.md",
  "PERMANENT-PROGRESSION.md",
  "REWARD-SYSTEM-V1.0.md",
  "RULEBOOK-MANIFEST.md",
  "SHOPS.md",
  "STAY-OUT-SYSTEM-V1.0.md",
  "SUPPLY-DROP-SYSTEM.md",
  "TOWN-SYSTEM-V2.0.md",
  "TRAVELERS-V1.0.md",
  "TRINKET-SYSTEM-V1.0.md",
  "WANDERERS-V1.0.md",
];
for (const file of legacyRoot) await moveIfPresent(file, `archive/legacy-sources/${file}`);
await moveIfPresent("DISCORD-POSTS-V1.0.md", "archive/communications/DISCORD-POSTS-V1.0.md");

for (const file of [
  "CORE-RULES-AND-SYSTEMS-OVERVIEW-V2.0.md",
  "HOST-CHEAT-SHEET-V2.0.md",
  "PLAYER-CHEAT-SHEET-V2.0.md",
]) {
  await moveIfPresent(`HOSTING/${file}`, `archive/hosting-snapshots/${file}`);
}

await moveIfPresent("EXPERIMENTAL", "experiments");

const pkgPath = path.join(root, "package.json");
const pkg = JSON.parse(await readFile(pkgPath, "utf8"));
pkg.scripts = {
  build: "node scripts/build-rulebook.mjs",
  check: "node scripts/build-rulebook.mjs --check && node scripts/validate-rulebook.mjs",
};
await writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");

await buildRulebook();

for (const file of [
  "scripts/materialize-rule-sources.mjs",
  "scripts/materialize-live-systems.mjs",
  "scripts/materialize-contract-gaps.mjs",
  "scripts/audit-source-layout.mjs",
  ".github/workflows/materialize-rule-sources.yml",
]) {
  await rm(path.join(root, file), { force: true, recursive: true });
}

await rm(fileURLToPath(import.meta.url), { force: true });
console.log("Finalized semantic Rules repository layout.");

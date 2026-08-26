import { readFile, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = (relative) => path.join(root, relative);
const read = (relative) => readFile(file(relative), "utf8");
const write = (relative, content) => writeFile(file(relative), String(content).replace(/\r\n?/g, "\n").trimEnd() + "\n", "utf8");

const manifest = JSON.parse(await read("rulebook-manifest.json"));

for (const chapter of manifest.learnPath || []) {
  chapter.rules = (chapter.rules || []).filter((id) => id !== "pregame-shop");
}
manifest.rules = (manifest.rules || []).filter((rule) => rule.id !== "pregame-shop");
for (const rule of manifest.rules) {
  if (Array.isArray(rule.related)) rule.related = rule.related.filter((id) => id !== "pregame-shop");
}

const stayOut = manifest.rules.find((rule) => rule.id === "stay-out-flow");
if (!stayOut) throw new Error("Missing stay-out-flow rule");
stayOut.related = [...new Set([
  ...(stayOut.related || []),
  "stay-out-xp",
  "stay-out-mystery-packs",
  "stay-out-event-modifier",
  "stay-out-restrictions",
  "supply-drop-resolution",
  "wanderers-system",
])];

const stayingOutGuide = (manifest.guides || []).find((guide) => guide.id === "staying-out");
if (stayingOutGuide) {
  const labels = [
    "Gain Stay Out XP: 10 XP, +5 for each consecutive Stay Out",
    "Gain 2 Mystery Packs per player",
    "Resolve a Supply Drop and Wanderer",
    "Resolve Events: 2, +1 for each consecutive Stay Out",
  ];
  (stayingOutGuide.steps || []).forEach((step, index) => {
    if (labels[index]) step.label = labels[index];
  });
}

await write("rulebook-manifest.json", JSON.stringify(manifest, null, 2));

try {
  await unlink(file("rules/getting-started/pregame-shop.md"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

await write("rules/between-encounters/stay-out-flow.md", `# ⚙️ STAY OUT FLOW

When the party chooses to **Stay Out**, resolve the following before the next encounter.

## Immediate state

- All players **fully heal and reset to their current maximum HP**.
- Players **do not access Town buildings** and do not gain free Town-building effects.
- The party's consecutive Stay Out count is used for both XP and Event scaling.

## Resolution order

1. **Gain Stay Out XP.** Each player gains **10 XP** on the first Stay Out. Each consecutive Stay Out adds **+5 XP**.
2. **Gain Mystery Packs.** Each player gains **2 Mystery Packs**. Mystery Packs do not scale with the streak.
3. **Resolve a Supply Drop.** Resolve it outside the encounter battlefield state.
4. **Resolve a Wanderer.** Each player may interact with the revealed Wanderer as allowed by that Wanderer.
5. **Resolve Events.** The first Stay Out resolves **2 Events**. Each consecutive Stay Out adds **+1 Event**. Resolve multiple Events one at a time, in order.
6. **Proceed to the next encounter.**

## Consecutive Stay Out scaling

| Consecutive Stay Out | XP per player | Events |
|---|---:|---:|
| 1st | 10 XP | 2 |
| 2nd | 15 XP | 3 |
| 3rd | 20 XP | 4 |
| 4th | 25 XP | 5 |

Returning to **Town resets the consecutive Stay Out count**. The next Stay Out after a Town visit starts again at **10 XP and 2 Events**.

Detailed pack, Event, Supply Drop, Wanderer, and restriction rules remain in their dedicated rule entries.
`);

await write("rules/town/town-flow.md", `# ⚙️ TOWN FLOW

When the party returns to **Town**, resolve the following before Event resolution:

1. **Fully heal all players** to their current maximum HP.
2. **Reset the consecutive Stay Out count.** The next Stay Out starts again at **10 XP and 2 Events**.
3. **Resolve Town building usage.** Limited-use buildings reset their uses on each return to Town; unlimited buildings may be used as allowed by their own rules.
4. **Proceed to Event resolution.**

## Full heal

Entering Town restores each player's current life total to their current maximum HP.

- “Gain life” and “lose life” change current life only.
- A permanent health change must explicitly change **Max HP/Life**.

Town provides controlled between-encounter progression; players cannot use Town buildings while resolving the Stay Out path.
`);

await write("rules/progression/progression-shop.md", `# 💠 PROGRESSION SHOP

The **Progression Shop is MTGR's persistent Essence shop**. It is available **before a run begins** and **after a run ends**.

All purchases use **Essence**.

**Slot Limit:** Players have **4 slots** for inventory items, shared between:

* Crypt Buffs
* Tickets
* Achievements
* Captures

**Brands:** Brands are a separate progression layer. Each Brand has **Ranks** and may be purchased multiple times. Each time you purchase a Brand, its Rank increases by 1. The cost to purchase a Brand is equal to its **base value × its current Rank**.

*Example: A 1000 Essence Brand costs 1000 for Rank 1, 2000 for Rank 2, 3000 for Rank 3, and so on.*

## After-run Progression Options

After a run ends, players may use the Progression Shop options below.

---

## Sell Buffs — 250 Essence

Sell a **Crypt Buff** back to the Host in exchange for 250 Essence.

**Rules:**

* If Crypt completion awards a Crypt Buff you already have unlocked, that duplicate buff is immediately sold for +250 Essence.
* You may sell a Crypt Buff after the run ends.

---

## Capture Non-Commander — 500 Essence* (base cost)

Save 1 card from your deck in your collection.

**Rules:**

* A card with a **Scryfall decal**, or a card already treated as Scryfalled by another MTGR rule, **cannot be captured**.
* Captured cards may be used in future deck builds.
* A card granted through the Capture system is **treated as Scryfalled** when used in a run.
* A captured card therefore cannot be traded, captured again, or used as part of any combo.
* Captured cards count against your deck's 39 cards; they do not have a free allocation.
* **Stacking cost:** For each capture after the first, the cost increases by 250 Essence:
  * 1st: 500 Essence
  * 2nd: 750 Essence
  * 3rd: 1000 Essence
  * and so on.
* Each capture occupies 1 slot.
`);

await write("rules/progression/brands-system.md", `# Brands System

## 🛒 PURCHASE TIMING

Brands are purchased from the **Progression Shop**. The Progression Shop is available:

* **before a run begins**;
* **after a run ends**.

---

## ⚙️ CORE RULES

* Brand effects are persistent across runs.
* Brands affect deckbuilding, Commander generation, or pack resolution as written.
* Brand effects are stackable — there is no hard cap on how many times a Brand can be purchased.
* Each Brand has **Ranks**. Each time you purchase a Brand, its Rank increases by 1. The cost to purchase a Brand is equal to its **base value × its current Rank**.

**Stacking cost example (Brand of the Cartographer — 500 Essence base):**

| Rank | Cost |
| :--- | :--- |
| Rank 1 | 500 (base × 1) |
| Rank 2 | 1000 (base × 2) |
| Rank 3 | 1500 (base × 3) |

---

## 🧠 DESIGN INTENT

Brands are intended to sit between one-run setup choices and long-term account unlocks.

They let players shape how they draft and build without replacing the normal encounter progression systems.
`);

let trinket = await read("rules/getting-started/trinket-system.md");
trinket = trinket.replace(/## SOURCE OF TRUTH[\s\S]*?\n---\s*$/m, `## RELATED RULES

- Pre-first-encounter timing: \`pre-encounter-setup\`
- Core run flow: \`game-loop\`
- Persistent Ticket and account progression: \`progression-reference\`
- Persistent Essence purchases: \`progression-shop\`

---`);
await write("rules/getting-started/trinket-system.md", trinket);

const replaceStayOutCheatSection = (markdown) => markdown.replace(
  /### Stay Out\n\n1\. Gain XP\.\n2\. Gain Mystery Packs\.\n3\. Resolve a Supply Drop\.\n4\. Resolve a Wanderer\.\n5\. Resolve Event\(s\)\.\n6\. Begin the next encounter\./,
  `### Stay Out

1. Fully heal all players to current max HP.
2. Gain **10 XP per player**, plus **+5 XP for each consecutive Stay Out**.
3. Gain **2 Mystery Packs per player**.
4. Resolve a Supply Drop.
5. Resolve a Wanderer.
6. Resolve **2 Events**, plus **+1 Event for each consecutive Stay Out**.
7. Begin the next encounter.

Returning to **Town resets the Stay Out streak**. Players cannot use Town buildings while Staying Out.`,
).replace(
  /### Town\n\n1\. Fully heal all players\.\n2\. (?:Resolve|Use) Town building usage\.\n3\. Resolve Event\(s\)\./,
  `### Town

1. Fully heal all players.
2. Reset the consecutive Stay Out streak.
3. Use Town buildings.
4. Resolve Event(s).`,
);

for (const relative of ["generated/TTS-HOST-CHEAT-SHEET.md", "generated/TTS-PLAYER-CHEAT-SHEET.md"]) {
  const before = await read(relative);
  const after = replaceStayOutCheatSection(before);
  if (after === before) throw new Error(`Could not update Stay Out cheat-sheet section in ${relative}`);
  await write(relative, after);
}

await write("scripts/validate-content-regressions.mjs", `import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relative) => readFile(path.join(root, relative), "utf8");
const manifest = JSON.parse(await read("rulebook-manifest.json"));
const ruleMap = new Map((manifest.rules || []).map((rule) => [rule.id, rule]));
const fail = (message) => { throw new Error(\`Content regression validation failed: \${message}\`); };

if (ruleMap.has("pregame-shop")) fail("deprecated pre-run shop contract returned to the active manifest");
for (const chapter of manifest.learnPath || []) {
  if ((chapter.rules || []).includes("pregame-shop")) fail(\`learnPath.\${chapter.id} references the deprecated pre-run shop\`);
}

const forbiddenShopTerms = [
  /\\bpregame shop\\b/i,
  /\\bpre-game shop\\b/i,
  /\\bpostgame shop\\b/i,
  /\\bpost-game shop\\b/i,
  /end-of-game essence shop/i,
];
for (const rule of manifest.rules || []) {
  const markdown = await read(rule.source);
  for (const pattern of forbiddenShopTerms) {
    if (pattern.test(markdown)) fail(\`\${rule.id} contains deprecated shop terminology: \${pattern}\`);
  }
}

const stayOutRule = ruleMap.get("stay-out-flow");
if (!stayOutRule) fail("stay-out-flow is missing");
const stayOut = await read(stayOutRule.source);
for (const [label, pattern] of [
  ["10 XP base", /10 XP/i],
  ["+5 XP streak", /\\+5 XP/i],
  ["2 Mystery Packs", /2 Mystery Packs/i],
  ["2 Event base", /2 Events/i],
  ["+1 Event streak", /\\+1 Event/i],
  ["full heal", /fully heal/i],
  ["Town lockout", /do not access Town buildings/i],
  ["Town reset", /Town resets the consecutive Stay Out count/i],
]) {
  if (!pattern.test(stayOut)) fail(\`stay-out-flow lost table-critical value: \${label}\`);
}

for (const relative of ["generated/TTS-HOST-CHEAT-SHEET.md", "generated/TTS-PLAYER-CHEAT-SHEET.md"]) {
  const text = await read(relative);
  if (!/10 XP per player/i.test(text) || !/\\+5 XP/i.test(text) || !/2 Mystery Packs per player/i.test(text) || !/\\+1 Event/i.test(text)) {
    fail(\`\${relative} lost compact Stay Out scaling\`);
  }
}

console.log("Validated shop deprecation and table-critical Stay Out content.");
`);

const pkg = JSON.parse(await read("package.json"));
pkg.scripts.check = "node scripts/build-rulebook.mjs --check && node scripts/validate-rulebook.mjs && node scripts/validate-content-regressions.mjs";
await write("package.json", JSON.stringify(pkg, null, 2));

await write("docs/CONTENT-MIGRATION-AUDIT.md", `# Rules Content Migration Audit

The semantic-rule migration intentionally split large system documents into stable targeted units. This audit records where that split can make table-critical information disappear from the primary flow even when a child unit still contains it.

## Classification

- **Superseded:** old mechanics that must not return to active rules.
- **Preserved in child unit:** detailed text survived, but the parent flow may need a compact summary.
- **Missing from table-facing parent:** critical procedure or numeric values are not visible from the primary flow/guide.
- **Preserved:** the semantic split retained the necessary information and navigation.

## Confirmed findings

### Persistent shops

Status: **Superseded / corrected**.

The old dedicated pre-run and after-run shop concepts are no longer active systems. The **Progression Shop** is the single persistent Essence shop and is available before a run begins and after a run ends. The old pre-run shop contract is removed from active navigation and canonical rules.

### Stay Out

Status: **Preserved in child units, but missing from table-facing parent / corrected**.

The migration preserved the detailed XP, Mystery Pack, Event-scaling, and restriction units, but reduced \`stay-out-flow\` to a six-line sequence. That hid critical values from the Rules Overview, Host Reference guide, Notebook Overview, and compact TTS references.

The parent flow now includes:

- full healing and Town-building lockout;
- 10 XP base and +5 XP per consecutive Stay Out;
- 2 Mystery Packs per player;
- Supply Drop and Wanderer sequence;
- 2 Events base and +1 Event per consecutive Stay Out;
- Town resetting the streak.

The dedicated child units remain authoritative for deeper detail.

### Town

Status: **Mostly preserved / parent context restored**.

Town building details survived in \`town-buildings\`, but \`town-flow\` had been reduced to only three steps. The parent flow now includes the full-heal semantics and the fact that returning to Town resets Stay Out scaling.

### Deckbuilding

Status: **Preserved** in the current audit sample.

The current deckbuilding clarification unit remains detailed and retains Commander generation, pool generation, lands, Free Choice, Scryfall, combo, silence, deck minimum, Sideboard, color-identity, pack, and Guild rules.

## Rule for future semantic splitting

A primary **flow** rule must remain table-complete: it should contain the procedure and values needed to execute that flow without opening sibling documents. Child units may hold examples, edge cases, tables, and subsystem detail, but they must not be the only place where core costs, rewards, counts, resets, or restrictions are stated.

Legacy documents under \`archive/\` are migration evidence only. They are not automatically-current rules and must be reconciled against later canonical changes before anything is restored.
`);

console.log("Applied one-shot rules content recovery migration.");

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relative) => readFile(path.join(root, relative), "utf8");
const manifest = JSON.parse(await read("rulebook-manifest.json"));
const ruleMap = new Map((manifest.rules || []).map((rule) => [rule.id, rule]));
const fail = (message) => { throw new Error(`Content regression validation failed: ${message}`); };

const ruleText = async (id) => {
  const rule = ruleMap.get(id);
  if (!rule) fail(`${id} is missing from the active manifest`);
  return read(rule.source);
};

const requireRulePatterns = async (id, checks) => {
  const text = await ruleText(id);
  for (const [label, pattern] of checks) {
    if (!pattern.test(text)) fail(`${id} lost table-critical content: ${label}`);
  }
  return text;
};

if (ruleMap.has("pregame-shop")) fail("deprecated pre-run shop contract returned to the active manifest");
for (const chapter of manifest.learnPath || []) {
  if ((chapter.rules || []).includes("pregame-shop")) fail(`learnPath.${chapter.id} references the deprecated pre-run shop`);
}

const forbiddenCanonicalTerms = [
  ["deprecated Pregame Shop", /\bpregame shop\b/i],
  ["deprecated pre-game shop", /\bpre-game shop\b/i],
  ["deprecated Postgame Shop", /\bpostgame shop\b/i],
  ["deprecated post-game shop", /\bpost-game shop\b/i],
  ["deprecated End-of-Game Essence Shop", /end-of-game essence shop/i],
  ["legacy Google Sheet storage", /Google Sheet/i],
];
for (const rule of manifest.rules || []) {
  const markdown = await read(rule.source);
  for (const [label, pattern] of forbiddenCanonicalTerms) {
    if (pattern.test(markdown)) fail(`${rule.id} contains ${label}`);
  }
}

await requireRulePatterns("stay-out-flow", [
  ["10 XP base", /10 XP/i],
  ["+5 XP streak", /\+5 XP/i],
  ["2 Mystery Packs", /2 Mystery Packs/i],
  ["2 Event base", /2 Events/i],
  ["+1 Event streak", /\+1 Event/i],
  ["full heal", /fully heal/i],
  ["Town lockout", /do not access Town buildings/i],
  ["Town reset", /Town resets the consecutive Stay Out count/i],
]);

await requireRulePatterns("town-flow", [
  ["full heal", /fully heal/i],
  ["Stay Out reset", /reset the consecutive Stay Out count/i],
  ["Town buildings", /Town building/i],
  ["Event continuation", /Event resolution/i],
]);

await requireRulePatterns("reward-timing", [
  ["XP reward", /XP/],
  ["Cashout reward", /Cashout/i],
  ["Loot Pool reward", /Loot Pool/i],
  ["Town or Stay Out transition", /Town or Stay Out/i],
]);

await requireRulePatterns("xp-system", [
  ["Standard Encounter 1 XP", /Encounter 1\s*\|\s*30/],
  ["Standard Encounter 3 XP", /Encounter 3\s*\|\s*50/],
  ["Variant Encounter 1 XP", /Encounter 1\s*\|\s*10/],
  ["failed encounter grants no XP", /Failed encounters grant \*\*no XP\*\*/i],
  ["Affix bonus XP", /Affix Bonus XP/i],
]);

await requireRulePatterns("cashout-system", [
  ["players plus one reveal", /number of players \+1/i],
  ["free claim", /free to claim/i],
  ["tradable", /tradable between players/i],
  ["retained until used", /retained until used/i],
]);

await requireRulePatterns("loot-pool", [
  ["seven nonland cards", /7 random nonland cards/i],
  ["shared Loot Pool", /shared Loot Pool/i],
  ["normal deckbuilding rules", /normal deckbuilding rules/i],
]);

await requireRulePatterns("event-frequency", [
  ["Town one Event", /Return to Town:\*\* Resolve \*\*1 Event/i],
  ["Stay Out two Events", /Stay Out:\*\* Resolve \*\*2 Events/i],
  ["+1 Event streak", /\+1 Event/i],
  ["Town reset", /resets when the party returns to Town/i],
  ["one-at-a-time resolution", /one at a time/i],
]);

await requireRulePatterns("event-resolution", [
  ["immediate instructions", /immediate instructions/i],
  ["continuing effects", /continuing effect/i],
  ["printed Event card source of truth", /printed Event card is the source of truth/i],
]);

await requireRulePatterns("encounter-flow", [
  ["encounter type", /Determine Encounter Type/i],
  ["setup", /Resolve Setup/i],
  ["Affixes", /Apply Affixes/i],
  ["Host Health", /Set Host Health/i],
  ["play encounter", /Play the Encounter/i],
]);

await requireRulePatterns("encounter-types", [
  ["availability gate", /defeated at least one encounter/i],
  ["Tribal bonus XP", /Tribal Warfare[\s\S]*additional \*\*25 XP\*\*/i],
  ["Story extra life", /Story Fight[\s\S]*\*\*50% additional life\*\*/i],
  ["Wildcard no Affixes", /Wildcard Fight[\s\S]*No Affixes are used/i],
]);

await requireRulePatterns("doom-setup", [
  ["1-2 players get zero Doom", /1[–-]2\s*\|\s*0/],
  ["3-4 players get one Doom", /3[–-]4\s*\|\s*1/],
  ["5 players get two Doom", /5\s*\|\s*2/],
  ["6 players get three Doom", /6\s*\|\s*3/],
]);

await requireRulePatterns("doom-rules", [
  ["one face-up Doom each turn", /1 Doom card face up each turn/i],
  ["special action", /special action/i],
  ["triggered ability", /triggered ability/i],
]);

await requireRulePatterns("doom-reroll", [
  ["once per Host turn", /Once per Host turn/i],
  ["any number face-down", /any number of face-down Doom cards/i],
  ["before or after reveal", /before or after/i],
]);

await requireRulePatterns("authority-level", [
  ["1-2 Authority I", /1[–-]2\s*\|\s*I/],
  ["3 Authority II", /3\s*\|\s*II/],
  ["4 Authority III", /4\s*\|\s*III/],
  ["5 Authority IV", /5\s*\|\s*IV/],
  ["6 Authority V", /6\s*\|\s*V/],
]);

await requireRulePatterns("authority-effects", [
  ["Authority I", /Authority I/],
  ["Authority II Not Today", /Authority II[\s\S]*Not Today/],
  ["Authority III draw-or-land choice", /Authority III[\s\S]*additional card[\s\S]*additional land/i],
  ["Authority IV Disallow", /Authority IV[\s\S]*Disallow/i],
  ["Authority V Absolute Command", /Authority V[\s\S]*Absolute Command/i],
]);

await requireRulePatterns("always-on-scaling", [
  ["Demonic Persistence", /DEMONIC PERSISTENCE/i],
  ["Treasure reclamation", /creates a Treasure token/i],
  ["Arcane Suppression", /ARCANE SUPPRESSION/i],
  ["counterspell tax", /cost \{1\} more/i],
]);

await requireRulePatterns("supply-drop-resolution", [
  ["d10 roll", /Roll 1d10/i],
  ["party-wide default", /each Party Member unless otherwise stated/i],
]);

const supplyTable = await ruleText("supply-drop-table");
for (let result = 1; result <= 10; result += 1) {
  if (!new RegExp(`### \\*\\*${result} [—-]`).test(supplyTable)) {
    fail(`supply-drop-table is missing result ${result}`);
  }
}

await requireRulePatterns("progression-reference", [
  ["Crypt Buff acquisition", /Crypt Buffs.*Crypt victories/i],
  ["Achievements acquisition", /Achievements.*gameplay milestones/i],
  ["Tickets acquisition", /Tickets.*Essence/i],
  ["Brands acquisition", /Brands.*Essence/i],
  ["Captures acquisition", /Captures.*Essence/i],
  ["default once per encounter", /once per encounter/i],
]);

await requireRulePatterns("run-success", [
  ["500 Essence", /500 Essence/i],
  ["duplicate Buff 250 Essence", /\+250 Essence/i],
  ["run-end Essence", /run-end Essence rewards/i],
  ["persistent MTGR profile", /persistent MTGR profile/i],
]);

for (const relative of ["generated/TTS-HOST-CHEAT-SHEET.md", "generated/TTS-PLAYER-CHEAT-SHEET.md"]) {
  const text = await read(relative);
  if (!/10 XP per player/i.test(text) || !/\+5 XP/i.test(text) || !/2 Mystery Packs per player/i.test(text) || !/\+1 Event/i.test(text)) {
    fail(`${relative} lost compact Stay Out scaling`);
  }
}

console.log("Validated audited table-critical rules and deprecated content guards.");

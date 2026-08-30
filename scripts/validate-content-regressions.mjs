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

const requireFilePatterns = async (relative, checks) => {
  const text = await read(relative);
  for (const [label, pattern] of checks) {
    if (!pattern.test(text)) fail(`${relative} lost recovered content: ${label}`);
  }
  return text;
};

const requireRuleIds = (group, ids) => {
  for (const id of ids) {
    if (!ruleMap.has(id)) fail(`${group} lost canonical entry: ${id}`);
  }
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

await requireRulePatterns("game-overview", [
  ["Encounters system connection", /Encounters.*main gameplay challenge/i],
  ["Rewards system connection", /Rewards.*XP, Cashouts, and cards/i],
  ["Town and Stay Out distinction", /Town.*controlled[\s\S]*Stay Out.*increasing Event variance/i],
  ["Crypt objective", /Crypt.*final challenge/i],
  ["Host adjudication", /Hosts may customize encounters and adjudicate unclear interactions/i],
  ["core structure preservation", /core run structure.*should remain consistent/i],
]);

await requireRulePatterns("pre-encounter-setup", [
  ["pregame finalization", /All pregame effects must be finalized before Encounter 1/i],
  ["Event then Trinket order", /Event[\s\S]*Trinket/i],
]);

await requireRulePatterns("town-buildings", [
  ["Bank six-card movement", /BANK[\s\S]*up to \*\*6 cards\*\*/i],
  ["Blacksmith Upgrade 25 XP", /Upgrade \| 25 XP/i],
  ["Blacksmith Augment 50 XP", /Augment \| 50 XP/i],
  ["Bazaar one outbound trade", /1 outbound trade per player per Town/i],
  ["Bazaar unlimited inbound trades", /unlimited inbound trades/i],
  ["Cashout sale 10 XP", /Cashout Sale[\s\S]*\*\*10 XP\*\*/i],
  ["Cathedral double mana value Essence", /Essence equal to 2× its mana value/i],
  ["Guild 10 XP plus d6", /Cost:\*\* 10 XP \+ roll a d6/i],
  ["Guild roll plus two", /roll \+ 2/i],
  ["Merchant 15-card base pack", /15-card base pack/i],
  ["Merchant keep one", /keep \*\*1 card\*\*/i],
  ["Mystic 5 XP", /MYSTIC[\s\S]*Cost:\*\* 5 XP/i],
  ["Portal 15 XP cap", /PORTAL[\s\S]*Up to 15 XP/i],
  ["Portal Temporal cards", /All generated cards are \*\*Temporal\*\*/i],
  ["Tavern option A", /Remove 0[–-]2 cards[\s\S]*Add 0[–-]4 basic lands/i],
  ["Tavern option B", /Remove 3[–-]5 basic lands[\s\S]*Add 0[–-]2 dual lands/i],
]);

await requireRulePatterns("travelers-system", [
  ["Town appearance", /appear in Town/i],
  ["no Town Action cost", /do NOT cost a Town Action/i],
]);

requireRuleIds("Travelers", [
  "traveler-bearded-grunt",
  "traveler-bullywug-royal",
  "traveler-card-copier",
  "traveler-card-eating-ogre",
  "traveler-cats-in-a-coat",
  "traveler-centaur-scouter",
  "traveler-centepoid-warrior",
  "traveler-commander-mimic",
  "traveler-dwarven-artificer",
  "traveler-elven-demonologist",
  "traveler-fungal-lich",
  "traveler-giff-bandito",
  "traveler-giant-ice-toad",
  "traveler-hell-s-librarian",
  "traveler-hollyphant",
  "traveler-kimi-the-cat",
  "traveler-silly-the-jester",
  "traveler-the-trader",
  "traveler-vanguard-mercenaries",
  "traveler-wandering-card-merchant",
  "traveler-zorbo",
]);

await requireRulePatterns("wanderers-system", [
  ["Stay Out context", /when the party Stays Out/i],
  ["one random Wanderer", /Reveal \*\*1 random Wanderer\*\*/i],
  ["once per player", /Each player may interact with (?:a|that) Wanderer \*\*once\*\*/i],
  ["XP cost", /Pay the XP cost/i],
  ["outside encounters", /occur outside encounters/i],
  ["no building uses", /do \*{0,2}not\*{0,2} consume (?:Town )?building uses/i],
]);

requireRuleIds("Wanderers", [
  "wanderer-wandering-merchant",
  "wanderer-rift-vendor",
  "wanderer-quartermaster",
  "wanderer-traveling-smith",
  "wanderer-road-gambler",
  "wanderer-wayfarer",
  "wanderer-hedge-mystic",
  "wanderer-essence-broker",
  "wanderer-cartographer",
  "wanderer-field-surgeon",
  "wanderer-masked-courier",
  "wanderer-relic-hunter",
  "wanderer-shadow-broker",
  "wanderer-veiled-trinket-broker",
  "wanderer-wandering-bard",
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
  ["turn order", /Determine Turn Order/i],
  ["Host and party d20", /Host and party each roll a d20/i],
  ["winner chooses first turn", /winner chooses who takes the first turn/i],
  ["Crypt turn-order override", /Crypt overrides this procedure/i],
  ["play encounter", /Play the Encounter/i],
]);

await requireRulePatterns("encounter-types", [
  ["availability gate", /defeated at least one encounter/i],
  ["Tribal bonus XP", /Tribal Warfare[\s\S]*additional \*\*25 XP\*\*/i],
  ["Story extra life", /Story Fight[\s\S]*\*\*50% additional life\*\*/i],
  ["Wildcard no Affixes", /Wildcard Fight[\s\S]*No Affixes are used/i],
]);

await requireRulePatterns("crypt", [
  ["no Affixes", /No Affixes are applied/i],
  ["Host first turn", /Host takes the first turn/i],
  ["no Events", /No Events are resolved/i],
]);

await requireRulePatterns("crypt-reward-eligibility", [
  ["leaving during Crypt remains eligible", /leaves during the Crypt encounter[\s\S]*still receives/i],
  ["departing before Crypt is ineligible", /departs before the Crypt encounter begins[\s\S]*do not qualify/i],
]);

await requireRulePatterns("crypt-completion-rewards", [
  ["500 Essence", /500 Essence/i],
  ["Crypt boss Buff", /Crypt boss Buff/i],
  ["duplicate Buff 250 Essence", /250 Essence/i],
]);

await requireRulePatterns("run-end-essence-rewards", [
  ["win or lose", /win or lose/i],
  ["Deck plus Sideboard CMC", /Deck CMC \+ Sideboard CMC/i],
  ["unspent XP", /unspent XP/i],
]);

await requireRulePatterns("doom-setup", [
  ["1-2 players get zero Doom", /1[–-]2\s*\|\s*0/],
  ["3-4 players get one Doom", /3[–-]4\s*\|\s*1/],
  ["5 players get two Doom", /5\s*\|\s*2/],
  ["6 players get three Doom", /6\s*\|\s*3/],
]);

await requireRulePatterns("doom-rules", [
  ["Host Scaling Power layer", /Host Scaling Power layer/i],
  ["one face-up Doom each turn", /1 Doom card face up each turn/i],
  ["special action", /special action/i],
  ["triggered ability", /triggered ability/i],
  ["respond through stack", /uses the stack and players may respond/i],
]);

await requireRulePatterns("doom-reroll", [
  ["once per Host turn", /Once per Host turn/i],
  ["any number face-down", /any number of face-down Doom cards/i],
  ["before or after reveal", /before or after/i],
]);

await requireRulePatterns("authority-level", [
  ["complete scaling layer", /Passive Host Scaling[\s\S]*Authority[\s\S]*Doom[\s\S]*Demonic Persistence[\s\S]*Arcane Suppression/i],
  ["shared run resource", /one shared run resource/i],
  ["player-count scaling", /Starting Authority, Command Slots, and Doom scale/i],
  ["always-active powers", /Demonic Persistence and Arcane Suppression are always active/i],
  ["six-player Authority", /6\s*\|\s*3\s*\|\s*8/],
  ["legacy no-double-dip", /do not also create legacy[\s\S]*Not Today/i],
]);

await requireRulePatterns("authority-effects", [
  ["passive scaling", /Passive Host Scaling/i],
  ["cost reduction", /first spell[\s\S]*costs \{1\} less/i],
  ["four-player draw-or-land choice", /4\s*\|[\s\S]*draw one additional card[\s\S]*additional land/i],
  ["legacy active effects superseded", /Not Today[\s\S]*free Disallow[\s\S]*superseded/i],
]);

await requireRulePatterns("host-profile-progression", [
  ["verified run HXP", /100 Host XP/i],
  ["six Talent Points", /six total at Rank 10/i],
  ["no raw scaling", /do not increase Host life[\s\S]*Starting Authority/i],
]);

await requireRulePatterns("host-skill-tree", [
  ["three branches", /Dominion[\s\S]*Torment[\s\S]*Control/i],
  ["free playtest respec", /refund and reallocate all points at no cost/i],
  ["Tier III inactive", /Tier III nodes[\s\S]*inactive/i],
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
  ["outside encounters", /occur outside encounters/i],
  ["immediate resolution", /Resolve their effects immediately/i],
  ["no active battlefield interaction", /do not interact with an active encounter battlefield state/i],
]);

await requireFilePatterns("rules/progression/tickets/trinket-ticket.md", [
  ["three random options", /3 random options/i],
  ["once-per-session options", /only once per session/i],
  ["decline option", /may decline/i],
  ["fresh Cashout options", /another Trinket Ticket from a Cashout/i],
  ["persists across runs", /persists across runs/i],
  ["per-player slot ownership", /slot use are per player/i],
]);

for (const [relative, label] of [
  ["rules/progression/tickets/vanguard-ticket.md", "Vanguard"],
  ["rules/progression/tickets/conspiracy-ticket.md", "Conspiracy"],
  ["rules/progression/tickets/emblem-ticket.md", "Emblem"],
]) {
  await requireFilePatterns(relative, [
    ["Legal pool", new RegExp(`Legal.*${label} pool|Legal.*pool`, "i")],
    ["decline rule", /If you decline/i],
    ["persists across runs", /persists across runs/i],
  ]);
}

for (const relative of [
  "rules/progression/tickets/arcane-signet-ticket.md",
  "rules/progression/tickets/sol-ring-ticket.md",
  "rules/progression/tickets/leyline-ticket.md",
]) {
  await requireFilePatterns(relative, [
    ["Scryfall classification", /treated as \*\*Scryfalled\*\*/i],
    ["trade restriction", /cannot be traded/i],
    ["capture restriction", /captured/i],
    ["combo restriction", /cannot be used as part of a combo/i],
    ["persists across runs", /persists across runs/i],
  ]);
}

const supplyTable = await ruleText("supply-drop-table");
for (let result = 1; result <= 10; result += 1) {
  if (!new RegExp(`### \\*\\*${result} [—-]`).test(supplyTable)) {
    fail(`supply-drop-table is missing result ${result}`);
  }
}

await requireRulePatterns("starting-land-balance", [
  ["matching Wastes", /Host creates that many \*\*Wastes\*\*/i],
  ["start of game", /enter the battlefield at the start of the game/i],
]);

await requireRulePatterns("storm-modification", [
  ["player spells count", /That player/i],
  ["Host spells count", /The Host/i],
]);

await requireRulePatterns("extra-turns", [
  ["controller-only extra turn", /Only the controller of the effect takes the extra turn/i],
]);

await requireRulePatterns("card-acquisition", [
  ["Deck or Sideboard", /Deck or Sideboard/i],
  ["unlimited Sideboard", /Sideboard has \*\*no size limit\*\*/i],
  ["color identity not general restriction", /do not have to remain within their Commander's color identity during gameplay/i],
]);

await requireRulePatterns("death-rules", [
  ["death not permanent", /Death is not permanent/i],
  ["future encounters", /return in future encounters/i],
  ["no XP penalty", /No XP penalty/i],
]);

await requireRulePatterns("player-departure", [
  ["individual scoop sorcery speed", /Scoop at Sorcery Speed/i],
  ["party concession instant speed", /full-party encounter concession.*Instant speed/i],
  ["party may pilot departing deck", /rest of the party may pilot that player's deck/i],
]);

await requireRulePatterns("reward-eligibility", [
  ["participation requirement", /only from encounters they participated in/i],
  ["join during encounter eligible", /joins during an encounter[\s\S]*qualify for that encounter/i],
]);

await requireRulePatterns("global-limits", [
  ["one Commander", /1 Commander/i],
  ["modified deck minimum", /modified deck minimum/i],
  ["unlimited Sideboard", /unlimited-size Sideboard/i],
  ["four Buff Slots", /4 Buff Slots/i],
  ["one Trinket", /1 Trinket/i],
]);

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

console.log("Validated audited table-critical rules, catalog coverage, and deprecated content guards.");

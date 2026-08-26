import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relative) => readFile(path.join(root, relative), "utf8");
const manifest = JSON.parse(await read("rulebook-manifest.json"));
const ruleMap = new Map((manifest.rules || []).map((rule) => [rule.id, rule]));
const fail = (message) => { throw new Error(`Content regression validation failed: ${message}`); };

if (ruleMap.has("pregame-shop")) fail("deprecated pre-run shop contract returned to the active manifest");
for (const chapter of manifest.learnPath || []) {
  if ((chapter.rules || []).includes("pregame-shop")) fail(`learnPath.${chapter.id} references the deprecated pre-run shop`);
}

const forbiddenShopTerms = [
  /\bpregame shop\b/i,
  /\bpre-game shop\b/i,
  /\bpostgame shop\b/i,
  /\bpost-game shop\b/i,
  /end-of-game essence shop/i,
];
for (const rule of manifest.rules || []) {
  const markdown = await read(rule.source);
  for (const pattern of forbiddenShopTerms) {
    if (pattern.test(markdown)) fail(`${rule.id} contains deprecated shop terminology: ${pattern}`);
  }
}

const stayOutRule = ruleMap.get("stay-out-flow");
if (!stayOutRule) fail("stay-out-flow is missing");
const stayOut = await read(stayOutRule.source);
for (const [label, pattern] of [
  ["10 XP base", /10 XP/i],
  ["+5 XP streak", /\+5 XP/i],
  ["2 Mystery Packs", /2 Mystery Packs/i],
  ["2 Event base", /2 Events/i],
  ["+1 Event streak", /\+1 Event/i],
  ["full heal", /fully heal/i],
  ["Town lockout", /do not access Town buildings/i],
  ["Town reset", /Town resets the consecutive Stay Out count/i],
]) {
  if (!pattern.test(stayOut)) fail(`stay-out-flow lost table-critical value: ${label}`);
}

for (const relative of ["generated/TTS-HOST-CHEAT-SHEET.md", "generated/TTS-PLAYER-CHEAT-SHEET.md"]) {
  const text = await read(relative);
  if (!/10 XP per player/i.test(text) || !/\+5 XP/i.test(text) || !/2 Mystery Packs per player/i.test(text) || !/\+1 Event/i.test(text)) {
    fail(`${relative} lost compact Stay Out scaling`);
  }
}

console.log("Validated shop deprecation and table-critical Stay Out content.");

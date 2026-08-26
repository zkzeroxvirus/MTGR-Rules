import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRulebook } from "./build-rulebook.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "rulebook-manifest.json");
const normalize = (value) => String(value || "").replace(/\r\n?/g, "\n").trim().concat("\n");
const strip = (value) => String(value || "").replace(/\\([!+*#_`])/g, "$1").replace(/[*_`]/g, "").trim();
const slug = (value) => strip(value).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const heading = (line) => {
  const match = String(line || "").match(/^(#{1,6})\s+(.+?)\s*$/);
  return match ? { level: match[1].length, title: strip(match[2]) } : null;
};

const source = async (name) => readFile(path.join(root, name), "utf8");
const writeJson = async (file, value) => writeFile(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");

const section = (markdown, title, endTitle = null) => {
  const lines = normalize(markdown).split("\n");
  const wanted = slug(title);
  const start = lines.findIndex((line) => heading(line) && slug(heading(line).title) === wanted);
  if (start < 0) throw new Error(`Missing section ${title}`);
  const startHeading = heading(lines[start]);
  let end = lines.length;
  if (endTitle) {
    end = lines.findIndex((line, index) => index > start && heading(line) && slug(heading(line).title) === slug(endTitle));
    if (end < 0) throw new Error(`Missing end section ${endTitle}`);
  } else {
    for (let index = start + 1; index < lines.length; index += 1) {
      const current = heading(lines[index]);
      if (current && current.level <= startHeading.level) { end = index; break; }
    }
  }
  return normalize(lines.slice(start, end).join("\n"));
};

const promote = (markdown, fallback) => {
  const lines = normalize(markdown).split("\n");
  const firstIndex = lines.findIndex((line) => heading(line));
  if (firstIndex < 0) return normalize(`# ${fallback}\n\n${markdown}`);
  const shift = Math.max(0, heading(lines[firstIndex]).level - 1);
  return normalize(lines.map((line) => {
    const match = line.match(/^(#{1,6})(\s+.*)$/);
    if (!match) return line;
    return `${"#".repeat(Math.max(1, match[1].length - shift))}${match[2]}`;
  }).join("\n"));
};

const writeUnit = async (sourcePath, markdown, title) => {
  const file = path.join(root, sourcePath);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, promote(markdown, title), "utf8");
};

const add = async (manifest, { id, title, source: sourcePath, markdown, phase, audience = ["player", "host"], aliases = [], related = [] }) => {
  if (manifest.rules.some((rule) => rule.id === id)) return false;
  await writeUnit(sourcePath, markdown, title);
  manifest.rules.push({ id, title, source: sourcePath, phase, audience, ...(aliases.length ? { aliases } : {}), ...(related.length ? { related } : {}), content: { kind: "document" } });
  return true;
};

const concatSections = (title, ...sections) => normalize(`# ${title}\n\n${sections.join("\n")}`);

const childSections = (markdown, collectionTitle, level) => {
  const lines = normalize(markdown).split("\n");
  const collection = lines.findIndex((line) => heading(line) && slug(heading(line).title) === slug(collectionTitle));
  if (collection < 0) throw new Error(`Missing collection ${collectionTitle}`);
  const items = [];
  for (let index = collection + 1; index < lines.length; index += 1) {
    const current = heading(lines[index]);
    if (!current || current.level !== level) continue;
    let end = lines.length;
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const next = heading(lines[cursor]);
      if (next && next.level <= level) { end = cursor; break; }
    }
    items.push({ title: current.title, markdown: normalize(lines.slice(index, end).join("\n")) });
  }
  return items;
};

const main = async () => {
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  let changed = false;

  const coreStructure = await source("CORE-GAME-STRUCTURE-V1.0.md");
  changed = await add(manifest, {
    id: "run-structure", title: "Run Structure", source: "rules/getting-started/run-structure.md", phase: "before-run",
    aliases: ["run overview", "player count", "between encounter reset"], related: ["game-loop", "crypt", "player-health"],
    markdown: concatSections("Run Structure",
      section(coreStructure, "RUN OVERVIEW"),
      section(coreStructure, "PLAYER COUNT"),
      section(coreStructure, "OBJECTIVE"),
      section(coreStructure, "BETWEEN-ENCOUNTER RESET"),
    ),
  }) || changed;

  const authority = await source("HOST-AUTHORITY-SYSTEM-V1.0.md");
  changed = await add(manifest, {
    id: "authority-effects", title: "Authority Effects", source: "rules/host/authority-effects.md", phase: "encounter-loop",
    aliases: ["authority i", "authority ii", "authority iii", "authority iv", "authority v", "absolute command"], related: ["authority-level", "always-on-scaling"],
    markdown: section(authority, "AUTHORITY EFFECTS", "ALWAYS-ON SCALING POWERS"),
  }) || changed;
  changed = await add(manifest, {
    id: "authority-interactions", title: "Authority Interaction Rules", source: "rules/host/authority-interactions.md", phase: "encounter-loop",
    aliases: ["authority counterspell", "disallow", "not today", "authority targets"], related: ["authority-effects"],
    markdown: section(authority, "INTERACTION RULES"),
  }) || changed;

  const doom = await source("DOOM-SYSTEM-V1.0.md");
  changed = await add(manifest, {
    id: "doom-triggering", title: "Triggering a Doom Card", source: "rules/host/doom-triggering.md", phase: "encounter-loop",
    aliases: ["flip doom", "doom triggered ability", "doom stack"], related: ["doom-rules", "doom-reroll"],
    markdown: section(doom, "TRIGGERING A DOOM CARD"),
  }) || changed;
  changed = await add(manifest, {
    id: "doom-timing", title: "Doom Timing", source: "rules/host/doom-timing.md", phase: "encounter-loop",
    aliases: ["doom special action", "respond to doom"], related: ["doom-triggering"],
    markdown: section(doom, "TIMING"),
  }) || changed;
  for (const item of childSections(doom, "DOOM CARDS", 3)) {
    const itemSlug = slug(item.title);
    changed = await add(manifest, {
      id: `doom-card-${itemSlug}`, title: item.title, source: `rules/host/doom-cards/${itemSlug}.md`, phase: "encounter-loop",
      audience: ["host", "player"], related: ["doom-rules", "doom-triggering"], markdown: item.markdown,
    }) || changed;
  }

  const events = await source("EVENT-SYSTEM-V1.0.md");
  for (const [id, title, sourcePath, aliases] of [
    ["event-timing", "Event Timing", "rules/between-encounters/event-timing.md", ["when events happen", "starting event"]],
    ["event-frequency", "Event Frequency", "rules/between-encounters/event-frequency.md", ["stay out event count", "consecutive events"]],
    ["event-design-rules", "Event Rules", "rules/between-encounters/event-design-rules.md", ["event persistent effects", "event duration"]],
    ["event-classifications", "Event Classifications", "rules/between-encounters/event-classifications.md", ["good event", "neutral event", "bad event", "ambush"]],
    ["event-scaling", "Event Scaling", "rules/between-encounters/event-scaling.md", ["optional event scaling"]],
    ["event-restrictions", "Event Restrictions", "rules/between-encounters/event-restrictions.md", ["no events during crypt", "bad starting event"]],
  ]) {
    const headingTitle = ({"event-timing":"EVENT TIMING","event-frequency":"EVENT FREQUENCY","event-design-rules":"EVENT DESIGN RULES","event-classifications":"PRINTED EVENT CLASSIFICATIONS","event-scaling":"EVENT SCALING (Optional System Layer)","event-restrictions":"RESTRICTIONS"})[id];
    changed = await add(manifest, { id, title, source: sourcePath, phase: "between-encounters", aliases, related: ["event-resolution"], markdown: section(events, headingTitle) }) || changed;
  }

  const rewards = await source("REWARD-SYSTEM-V1.0.md");
  changed = await add(manifest, {
    id: "reward-scaling", title: "Reward Scaling", source: "rules/rewards/reward-scaling.md", phase: "encounter-loop",
    aliases: ["base xp scaling", "affix bonus xp"], related: ["xp-system", "affixes-reference"], markdown: section(rewards, "REWARD SCALING"),
  }) || changed;
  const cashoutMarkdown = section(rewards, "Cashout Pool");
  changed = await add(manifest, {
    id: "cashout-pool", title: "Cashout Pool", source: "rules/rewards/cashout-pool.md", phase: "encounter-loop",
    aliases: ["cashout weights", "cashout tiers", "crypt fight cashout", "bonus building cashout"], related: ["cashout-system"], markdown: cashoutMarkdown,
  }) || changed;

  const stayOut = await source("STAY-OUT-SYSTEM-V1.0.md");
  for (const [id, headingTitle, title, sourcePath, aliases] of [
    ["stay-out-timing", "WHEN STAY OUT OCCURS", "When Stay Out Occurs", "rules/between-encounters/stay-out-timing.md", ["choose stay out"]],
    ["stay-out-xp", "XP REWARD", "Stay Out XP", "rules/between-encounters/stay-out-xp.md", ["consecutive stay out xp"]],
    ["stay-out-mystery-packs", "MYSTERY PACKS", "Stay Out Mystery Packs", "rules/between-encounters/stay-out-mystery-packs.md", ["stay out packs"]],
    ["stay-out-event-modifier", "EVENT MODIFIER", "Stay Out Event Modifier", "rules/between-encounters/stay-out-event-modifier.md", ["stay out events"]],
    ["stay-out-restrictions", "RESTRICTIONS", "Stay Out Restrictions", "rules/between-encounters/stay-out-restrictions.md", ["stay out no town"]],
  ]) {
    changed = await add(manifest, { id, title, source: sourcePath, phase: "between-encounters", aliases, related: ["stay-out-flow"], markdown: section(stayOut, headingTitle) }) || changed;
  }

  const town = await source("TOWN-SYSTEM-V2.0.md");
  for (const [id, headingTitle, title, sourcePath, aliases] of [
    ["town-timing", "WHEN TOWN OCCURS", "When Town Occurs", "rules/town/town-timing.md", ["choose town"]],
    ["town-full-heal", "FULL HEAL", "Town Full Heal", "rules/town/town-full-heal.md", ["town healing"]],
    ["town-building-system", "BUILDING SYSTEM", "Town Building System", "rules/town/town-building-system.md", ["limited use buildings", "unlimited buildings"]],
  ]) {
    changed = await add(manifest, { id, title, source: sourcePath, phase: "between-encounters", aliases, related: ["town-flow", "town-buildings"], markdown: section(town, headingTitle) }) || changed;
  }

  const core = await source("CORE-RULES.md");
  for (const [id, headingTitle, title, sourcePath, phase, aliases, related] of [
    ["death-rules", "DEATH RULES", "Death Rules", "rules/encounters/death-rules.md", "encounter-loop", ["player death", "no xp death penalty"], ["failed-encounter"]],
    ["player-vs-player-combat", "PLAYER VS PLAYER COMBAT", "Player vs Player Combat", "rules/encounters/player-vs-player-combat.md", "encounter-loop", ["pvp", "attack players"], ["turn-structure"]],
    ["storm-modification", "STORM RULE MODIFICATION", "Storm Rule Modification", "rules/encounters/storm-modification.md", "encounter-loop", ["storm count", "storm spells"], ["turn-structure"]],
    ["extra-turns", "EXTRA TURNS", "Extra Turns", "rules/encounters/extra-turns.md", "encounter-loop", ["extra turn controller"], ["turn-structure"]],
    ["card-acquisition", "CARD ACQUISITION RULE", "Card Acquisition", "rules/encounters/card-acquisition.md", "encounter-loop", ["deck or sideboard", "gain card", "color identity during run"], ["deckbuilding"]],
    ["progression-slot-rules", "BUFF SYSTEM", "Progression Slot Rules", "rules/progression/progression-slot-rules.md", "between-runs", ["buff slots", "slot costs", "four slots"], ["progression-reference"]],
    ["starting-land-balance", "STARTING LAND BALANCE RULE", "Starting Land Balance", "rules/getting-started/starting-land-balance.md", "before-run", ["lands in play", "host wastes"], ["deckbuilding"]],
    ["pack-rules", "PACK RULES", "Pack Rules", "rules/rewards/pack-rules.md", "encounter-loop", ["pack size", "brand open hand", "pro pool", "mythic pool", "otag pool"], ["cashout-system", "town-buildings"]],
    ["global-limits", "GLOBAL LIMITS", "Global Limits", "rules/getting-started/global-limits.md", "before-run", ["commander limit", "sideboard limit", "trinket limit", "companion limit"], ["deckbuilding", "progression-slot-rules"]],
  ]) {
    let markdown = section(core, headingTitle);
    if (id === "progression-slot-rules") {
      markdown = section(core, "BUFF SYSTEM", "Current Crypt Buffs (Season 1)");
    }
    changed = await add(manifest, { id, title, source: sourcePath, phase, aliases, related, markdown }) || changed;
  }

  if (changed) {
    const learn = new Map((manifest.learnPath || []).map((chapter) => [chapter.id, chapter]));
    const addLearn = (chapter, ids) => {
      const target = learn.get(chapter);
      if (!target) return;
      for (const id of ids) if (!target.rules.includes(id)) target.rules.push(id);
    };
    addLearn("before-run", ["run-structure", "pregame-shop", "trinket-system", "global-limits"]);
    addLearn("encounter-loop", ["death-rules"]);
    addLearn("between-encounters", ["travelers-system", "wanderers-system", "event-timing", "event-frequency"]);
    addLearn("between-runs", ["progression-shop", "brands-system", "progression-slot-rules"]);
    await writeJson(manifestPath, manifest);
  }
  await buildRulebook();
  console.log(changed ? "Materialized remaining contracted gameplay gaps." : "Gameplay contract gaps already materialized.");
};

await main();

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRulebook } from "./build-rulebook.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "rulebook-manifest.json");
const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const writeJson = async (file, value) => writeFile(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
const normalize = (value) => String(value || "").replace(/\r\n?/g, "\n").trim().concat("\n");
const stripMarkup = (value) => String(value || "").replace(/\\([!+*#_`])/g, "$1").replace(/[*_`]/g, "").trim();
const slug = (value) => stripMarkup(value)
  .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const heading = (line) => {
  const match = String(line || "").match(/^(#{1,6})\s+(.+?)\s*$/);
  return match ? { level: match[1].length, title: stripMarkup(match[2]) } : null;
};

const promote = (markdown, fallback) => {
  const lines = normalize(markdown).split("\n");
  const firstIndex = lines.findIndex((line) => heading(line));
  if (firstIndex < 0) return normalize(`# ${fallback}\n\n${markdown}`);
  const first = heading(lines[firstIndex]);
  const shift = Math.max(0, first.level - 1);
  return normalize(lines.map((line) => {
    const match = line.match(/^(#{1,6})(\s+.*)$/);
    if (!match) return line;
    return `${"#".repeat(Math.max(1, match[1].length - shift))}${match[2]}`;
  }).join("\n"));
};

const splitAtHeading = (markdown, title) => {
  const lines = normalize(markdown).split("\n");
  const wanted = slug(title);
  const index = lines.findIndex((line) => heading(line) && slug(heading(line).title) === wanted);
  if (index < 0) throw new Error(`Missing heading ${title}`);
  return [normalize(lines.slice(0, index).join("\n")), normalize(lines.slice(index).join("\n"))];
};

const section = (markdown, title, endTitle = null) => {
  const lines = normalize(markdown).split("\n");
  const wanted = slug(title);
  const start = lines.findIndex((line) => heading(line) && slug(heading(line).title) === wanted);
  if (start < 0) throw new Error(`Missing section ${title}`);
  const startHeading = heading(lines[start]);
  let end = lines.length;
  if (endTitle) {
    const wantedEnd = slug(endTitle);
    end = lines.findIndex((line, index) => index > start && heading(line) && slug(heading(line).title) === wantedEnd);
    if (end < 0) throw new Error(`Missing end section ${endTitle}`);
  } else {
    for (let index = start + 1; index < lines.length; index += 1) {
      const current = heading(lines[index]);
      if (current && current.level <= startHeading.level) { end = index; break; }
    }
  }
  return normalize(lines.slice(start, end).join("\n"));
};

const splitChildren = (markdown, { startTitle, childLevel, prefix, directory, phase, audience, related = [] }) => {
  const lines = normalize(markdown).split("\n");
  const startIndex = lines.findIndex((line) => heading(line) && slug(heading(line).title) === slug(startTitle));
  if (startIndex < 0) throw new Error(`Missing child collection heading ${startTitle}`);
  const starts = [];
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const current = heading(lines[index]);
    if (current?.level === childLevel) starts.push({ index, title: current.title });
  }
  return starts.map((entry, position) => {
    const next = starts[position + 1]?.index ?? lines.length;
    const itemSlug = slug(entry.title);
    return {
      id: `${prefix}-${itemSlug}`,
      title: entry.title,
      source: `rules/${directory}/${itemSlug}.md`,
      phase,
      audience,
      related,
      content: { kind: "document" },
      markdown: normalize(lines.slice(entry.index, next).join("\n")),
    };
  });
};

const writeUnit = async (source, markdown, title) => {
  const file = path.join(root, source);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, promote(markdown, title), "utf8");
};

const addRule = (manifest, rule) => {
  if (manifest.rules.some((existing) => existing.id === rule.id)) return false;
  const { markdown, ...contract } = rule;
  manifest.rules.push(contract);
  return true;
};

const main = async () => {
  const manifest = await readJson(manifestPath);
  let changed = false;

  const demon = await readFile(path.join(root, "DEMON-GENERALS-V2.0.md"), "utf8");
  const [demonSystem] = splitAtHeading(demon, "GENERALS");
  const demonSystemRule = {
    id: "demon-generals-system", title: "Demon Generals", source: "rules/host/demon-generals-system.md",
    phase: "encounter-loop", audience: ["host", "player"], aliases: ["tyrants", "master fight generals", "signature moves"],
    related: ["encounter-types"], content: { kind: "document" }, markdown: demonSystem,
  };
  if (addRule(manifest, demonSystemRule)) { await writeUnit(demonSystemRule.source, demonSystemRule.markdown, demonSystemRule.title); changed = true; }
  for (const rule of splitChildren(demon, { startTitle: "GENERALS", childLevel: 2, prefix: "demon-general", directory: "host/demon-generals", phase: "encounter-loop", audience: ["host", "player"], related: ["demon-generals-system"] })) {
    if (addRule(manifest, rule)) { await writeUnit(rule.source, rule.markdown, rule.title); changed = true; }
  }

  const travelers = await readFile(path.join(root, "TRAVELERS-V1.0.md"), "utf8");
  const firstTravelerTitle = "Bearded Grunt";
  const [travelersSystem] = splitAtHeading(travelers, firstTravelerTitle);
  const travelersSystemRule = {
    id: "travelers-system", title: "Travelers", source: "rules/town/travelers-system.md",
    phase: "between-encounters", audience: ["player", "host"], aliases: ["town travelers", "town visitors"], related: ["town-flow", "town-buildings"],
    content: { kind: "document" }, markdown: travelersSystem,
  };
  if (addRule(manifest, travelersSystemRule)) { await writeUnit(travelersSystemRule.source, travelersSystemRule.markdown, travelersSystemRule.title); changed = true; }
  const travelerWrapped = `# Travelers\n\n## ${travelers.split(/\n##\s+\*\*🧔 Bearded Grunt\*\*/)[1] ? "**🧔 Bearded Grunt**" : "Bearded Grunt"}${travelers.substring(travelers.indexOf("\n## **🧔 Bearded Grunt**") + "\n## **🧔 Bearded Grunt**".length)}`;
  for (const rule of splitChildren(travelerWrapped, { startTitle: "Travelers", childLevel: 2, prefix: "traveler", directory: "town/travelers", phase: "between-encounters", audience: ["player", "host"], related: ["travelers-system"] })) {
    if (addRule(manifest, rule)) { await writeUnit(rule.source, rule.markdown, rule.title); changed = true; }
  }

  const wanderers = await readFile(path.join(root, "WANDERERS-V1.0.md"), "utf8");
  const [wanderersSystem] = splitAtHeading(wanderers, "Wandering Merchant");
  const wanderersSystemRule = {
    id: "wanderers-system", title: "Wanderers", source: "rules/between-encounters/wanderers-system.md",
    phase: "between-encounters", audience: ["player", "host"], aliases: ["stay out wanderers", "wanderer encounter"], related: ["stay-out-flow"],
    content: { kind: "document" }, markdown: wanderersSystem,
  };
  if (addRule(manifest, wanderersSystemRule)) { await writeUnit(wanderersSystemRule.source, wanderersSystemRule.markdown, wanderersSystemRule.title); changed = true; }
  const wandererWrapped = `# Wanderers${wanderers.substring(wanderers.indexOf("\n## **🛍️ Wandering Merchant**"))}`;
  for (const rule of splitChildren(wandererWrapped, { startTitle: "Wanderers", childLevel: 2, prefix: "wanderer", directory: "between-encounters/wanderers", phase: "between-encounters", audience: ["player", "host"], related: ["wanderers-system"] })) {
    if (addRule(manifest, rule)) { await writeUnit(rule.source, rule.markdown, rule.title); changed = true; }
  }

  const trinkets = await readFile(path.join(root, "TRINKET-SYSTEM-V1.0.md"), "utf8");
  const [trinketSystem] = splitAtHeading(trinkets, "TRINKET POOL");
  const trinketSystemRule = {
    id: "trinket-system", title: "Trinket System", source: "rules/getting-started/trinket-system.md",
    phase: "before-run", audience: ["player", "host"], aliases: ["trinket selection", "trinket ticket", "party trinket"], related: ["pre-encounter-setup"],
    content: { kind: "document" }, markdown: trinketSystem,
  };
  if (addRule(manifest, trinketSystemRule)) { await writeUnit(trinketSystemRule.source, trinketSystemRule.markdown, trinketSystemRule.title); changed = true; }
  for (const rule of splitChildren(trinkets, { startTitle: "TRINKET POOL", childLevel: 3, prefix: "trinket", directory: "getting-started/trinkets", phase: "before-run", audience: ["player", "host"], related: ["trinket-system"] })) {
    if (addRule(manifest, rule)) { await writeUnit(rule.source, rule.markdown, rule.title); changed = true; }
  }

  const brands = await readFile(path.join(root, "BRANDS-SYSTEM-V1.0.md"), "utf8");
  const brandsCore = section(brands, "CORE RULES", "CURRENT BRAND POOL");
  const brandsTiming = section(brands, "PURCHASE TIMING", "CORE RULES");
  const brandsIntent = section(brands, "DESIGN INTENT");
  const brandsSystemRule = {
    id: "brands-system", title: "Brands System", source: "rules/progression/brands-system.md",
    phase: "between-runs", audience: ["player"], aliases: ["brand ranks", "brand cost", "buy brands"], related: ["progression-reference"],
    content: { kind: "document" }, markdown: `# Brands System\n\n${brandsTiming}\n${brandsCore}\n${brandsIntent}`,
  };
  if (addRule(manifest, brandsSystemRule)) { await writeUnit(brandsSystemRule.source, brandsSystemRule.markdown, brandsSystemRule.title); changed = true; }

  const shops = await readFile(path.join(root, "SHOPS.md"), "utf8");
  const pregame = section(shops, "PREGAME SHOP", "PROGRESSION SHOP");
  const progressionShop = section(shops, "PROGRESSION SHOP", "🔥 BRANDS");
  const pregameRule = {
    id: "pregame-shop", title: "Pregame Shop", source: "rules/getting-started/pregame-shop.md",
    phase: "before-run", audience: ["player", "host"], aliases: ["commander gamble", "land replacement", "commander mulligan"], related: ["deckbuilding"],
    content: { kind: "document" }, markdown: pregame,
  };
  if (addRule(manifest, pregameRule)) { await writeUnit(pregameRule.source, pregameRule.markdown, pregameRule.title); changed = true; }
  const progressionShopRule = {
    id: "progression-shop", title: "Progression Shop", source: "rules/progression/progression-shop.md",
    phase: "between-runs", audience: ["player"], aliases: ["sell buffs", "capture non commander", "essence shop"], related: ["progression-reference", "brands-system"],
    content: { kind: "document" }, markdown: progressionShop,
  };
  if (addRule(manifest, progressionShopRule)) { await writeUnit(progressionShopRule.source, progressionShopRule.markdown, progressionShopRule.title); changed = true; }

  if (changed) await writeJson(manifestPath, manifest);
  await buildRulebook();
  console.log(changed ? "Materialized previously uncovered live gameplay systems." : "Live gameplay systems already materialized.");
};

await main();

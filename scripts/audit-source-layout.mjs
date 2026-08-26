import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirs = new Set([".git", "node_modules", "rules", "generated", "docs"]);
const ignoredFiles = new Set(["README.md", "CONTRIBUTING.md", "RULEBOOK.md"]);

const walk = async (dir, relative = "") => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const rel = relative ? `${relative}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (ignoredDirs.has(entry.name) || rel.startsWith(".github/")) continue;
      files.push(...await walk(path.join(dir, entry.name), rel));
    } else if (entry.name.endsWith(".md") && !ignoredFiles.has(rel)) {
      files.push(rel);
    }
  }
  return files;
};

const files = (await walk(root)).sort();
console.log(`Markdown sources outside canonical/generated/docs layout: ${files.length}`);
for (const file of files) console.log(`- ${file}`);

const liveSourceCandidates = files.filter((file) => (
  !file.startsWith("EXPERIMENTAL/")
  && !file.startsWith("HOSTING/")
  && !["DISCORD-POSTS-V1.0.md", "RULEBOOK-MANIFEST.md"].includes(file)
));

console.log("\nHeading outlines for remaining live-source candidates:");
for (const file of liveSourceCandidates) {
  const text = await readFile(path.join(root, file), "utf8");
  const headings = text.replace(/\r\n?/g, "\n").split("\n")
    .filter((line) => /^#{1,6}\s+/.test(line))
    .map((line) => line.replace(/\*\*/g, "").trim());
  console.log(`\n[${file}]`);
  for (const heading of headings) console.log(heading);
}

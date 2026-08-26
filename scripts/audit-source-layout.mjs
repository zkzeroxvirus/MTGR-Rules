import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirs = new Set([".git", "node_modules", "rules", "generated"]);
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
console.log(`Markdown sources outside canonical/generated layout: ${files.length}`);
for (const file of files) console.log(`- ${file}`);

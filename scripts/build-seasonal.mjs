import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const root = new URL('../', import.meta.url);
const read = async p => (await readFile(new URL(p, root), 'utf8')).replace(/\r\n/g, '\n');
const manifest = JSON.parse(await read('rulebook-manifest.json'));
const progression = JSON.parse(await read('PROGRESSION-CONTRACTS.json'));
const contract = JSON.parse(await read('SEASONAL-CONTRACTS.json'));
if (contract.schemaVersion !== 1) throw new Error('Unsupported seasonal contract');
const rules = new Map(manifest.rules.map(r => [r.id, r]));
const documents = {};
for (const season of Object.values(contract.seasons)) {
  if (!rules.has(season.overviewRuleId)) throw new Error('Missing season overview');
  for (const entries of Object.values(season.pools)) {
    const ids = new Set();
    for (const entry of entries) {
      if (ids.has(entry.itemId)) throw new Error('Duplicate seasonal item: ' + entry.itemId);
      ids.add(entry.itemId);
      if (Boolean(entry.ruleId) === Boolean(entry.progressionId)) throw new Error('Expected exactly one canonical reference');
      const id = entry.ruleId || entry.progressionId;
      const owner = entry.ruleId ? rules.get(id) : progression.categories.crypt_buff[id];
      if (!owner || !/^rules\/.+\.md$/.test(owner.source) || owner.source.includes('..')) throw new Error('Invalid seasonal reference: ' + id);
      const markdown = await read(owner.source);
      if (!markdown.startsWith('# ')) throw new Error('Missing document title: ' + id);
      // Export the complete document body, never a heading-selected subsection.
      const description = markdown.slice(markdown.indexOf('\n') + 1).trim();
      const plainText = description.replace(/^#{1,6} /gm, '').replace(/\*\*/g, '').replace(/^---+\s*$/gm, '').replace(/[ \t]+$/gm, '').trim();
      documents[id] = { source: owner.source, sha256: createHash('sha256').update(markdown).digest('hex'), markdown, description, plainText };
    }
  }
}
const output = JSON.stringify({ ...contract, documents }, null, 2) + '\n';
if (process.argv.includes('--check')) {
  if (await read('generated/seasonal-rules.json') !== output) throw new Error('Stale seasonal export; run npm run build');
} else await writeFile(new URL('generated/seasonal-rules.json', root), output);
console.log(`Validated and exported ${Object.keys(documents).length} seasonal rule references.`);

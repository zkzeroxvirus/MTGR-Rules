# MTGR Rules Source Architecture

## Authority Model

The repository has one gameplay-authority layer: semantic Markdown units under `rules/`.

A canonical unit should own one mechanic or one tightly coupled rules concept. Stable IDs in the JSON contracts are the interface between the Rules repository and MTGR Platform.

Generated documents are projections of canonical units; they are not independent sources of truth.

## Contract Layers

### Rulebook contract

`rulebook-manifest.json` maps stable kebab-case IDs to dedicated rule documents. Normal rule units must use `content.kind = "document"` and a source below `rules/`.

### Progression contract

`PROGRESSION-CONTRACTS.json` maps permanent progression catalog IDs to individual files under `rules/progression/`. Crypt Buffs, Tickets, Brands, and Achievements are file-per-entry so game tools can consume one definition without parsing the full progression catalog.

### Platform surface contract

`PLATFORM-SURFACE-CONTRACTS.json` exposes rules or generated documents used by Host/TTS surfaces that are intentionally outside normal web navigation. Platform-only operational registries may remain Platform-owned when their contents change independently from rules wording.

### Notebook contract

`NOTEBOOK-MANIFEST.json` composes the five managed TTS Notebook tabs from stable rule IDs. Notebook consumers do not scrape Markdown headings.

## Human Reading Surfaces

`scripts/build-rulebook.mjs` generates:

- `RULEBOOK.md` — complete reading document;
- `generated/PLAYER-REFERENCE.md` — player-facing projection plus progression catalog;
- `generated/HOST-REFERENCE.md` — Host-facing projection plus Host Platform tables;
- `rules/README.md` — canonical-unit index.

The build is deterministic. `npm run check` fails when generated output is stale.

## Content Classes

`rules/` — active canonical gameplay rules.

`docs/` — implementation and architecture documentation; informative, not normative gameplay text.

`experiments/` — unpromoted experimental material. Promotion requires creating/updating canonical units and contracts.

`archive/` — historical monoliths, old cheat sheets, and communications. Archived files must never be referenced by live contracts.

## Rollout Safety

When a contract schema changes, deploy consumer compatibility before merging the producer-side Rules change to `main`. MTGR Platform should accept both the currently deployed contract and the incoming contract during the migration window. After Rules is merged and deployed, legacy parsing can be removed in a later cleanup.

This keeps Rules changes independently readable while preventing a repository merge from breaking the live Platform API, Notebook feed, Host Reference, or progression clients.

## Change Procedure

1. Identify the stable rule/catalog ID that owns the mechanic.
2. Edit that canonical file only.
3. Add or update relationships/surface composition when required.
4. Run `npm run build`.
5. Run `npm run check`.
6. Commit source and generated projections together.

If two canonical files need identical rules wording, that is usually a signal that ownership should be consolidated rather than duplicated.

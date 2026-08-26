# MTG Roguelike — Rules Repository

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U0D81ZUOGR)

MTG Roguelike is a cooperative Commander roguelike where a party progresses through Host-controlled encounters, improves its decks during the run, and ultimately faces the Crypt.

## Read the Rules

For normal play, start with the generated references:

1. [Complete Rulebook](RULEBOOK.md) — full current rules in one continuous document.
2. [Player Reference](generated/PLAYER-REFERENCE.md) — player-facing rules and permanent progression.
3. [Host Reference](generated/HOST-REFERENCE.md) — Host-facing rules, scaling tables, and encounter references.

The generated documents are reading surfaces. Do not edit them directly.

## Canonical Source of Truth

Canonical gameplay wording lives in small semantic Markdown units under [rules/](rules/README.md). Each unit owns one stable rule concept such as `town-flow`, `doom-card-no`, `trinket-tent`, or `crypt-fight-choice`.

MTGR Platform consumes those units through stable contracts:

- [rulebook-manifest.json](rulebook-manifest.json) — gameplay rule IDs and navigation.
- [PROGRESSION-CONTRACTS.json](PROGRESSION-CONTRACTS.json) — file-per-entry Crypt Buffs, Tickets, Brands, and Achievements.
- [PLATFORM-SURFACE-CONTRACTS.json](PLATFORM-SURFACE-CONTRACTS.json) — Host/TTS surfaces not used by normal rule navigation.
- [NOTEBOOK-MANIFEST.json](NOTEBOOK-MANIFEST.json) — exact managed Tabletop Simulator Notebook composition.

Consumers use IDs; they do not scrape headings or choose Markdown section boundaries.

## Run Flow

`Deckbuild → Event + Trinket → Encounter → Rewards → Town or Stay Out → Events → Next Encounter → Crypt → Postgame Progression`

Standard mode uses three scheduled encounters before the Crypt. Variant mode uses four.

## Repository Layout

`rules/` is authoritative gameplay text. `generated/` and `RULEBOOK.md` are derived reading documents. `docs/` contains non-normative tooling/architecture documentation. `experiments/` contains proposals that are not part of the active ruleset. `archive/` preserves pre-contract monoliths and old generated snapshots for history only.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for ownership and update rules.

## Making a Rule Change

Edit the smallest canonical file under `rules/` that owns the mechanic. If a new mechanic needs its own stable concept, add a new rule unit and register its ID in the appropriate contract. Then run:

`npm run build`

`npm run check`

Generated documents must be committed with their canonical source changes.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

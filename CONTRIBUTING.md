# Contributing to MTG Roguelike Rules

Rule changes are made against semantic source units, not generated rulebooks or archived monoliths.

## Find the Owning Rule

Use [rules/README.md](rules/README.md) or the stable IDs in [rulebook-manifest.json](rulebook-manifest.json) and [PROGRESSION-CONTRACTS.json](PROGRESSION-CONTRACTS.json).

When changing an existing mechanic, edit the smallest canonical file that already owns it. Do not copy the same rule wording into another source file.

## Add New Mechanics

A new independently addressable mechanic should normally receive:

1. one canonical Markdown file under the appropriate `rules/` area;
2. one stable kebab-case rule ID in `rulebook-manifest.json`, or a stable catalog ID in `PROGRESSION-CONTRACTS.json`;
3. aliases/relationships when they improve discovery;
4. Notebook or Platform surface registration only when that surface actually needs the rule.

Do not add heading selectors, ranges, fuzzy matching, or consumer-specific Markdown parsing. Canonical contracts use dedicated document sources.

## Generated Files

Do not hand-edit:

- `RULEBOOK.md`
- `generated/PLAYER-REFERENCE.md`
- `generated/HOST-REFERENCE.md`
- `rules/README.md`

Regenerate them with:

`npm run build`

Validate the complete contract graph with:

`npm run check`

CI runs the same check on pull requests.

## Non-Canonical Material

- `docs/` — implementation/tooling documentation; not gameplay authority.
- `experiments/` — proposals and experimental systems; not active unless promoted into `rules/`.
- `archive/` — historical source snapshots; never use as a current rule source.

## Issues and Review

For a bug, conflict, balance concern, or new-content proposal, open the matching GitHub Issue template when available. Reference the stable rule ID and canonical source path rather than an archived document heading.

A mechanical change should explain the current behavior, proposed behavior, affected rule IDs, and any Platform/TTS surface that must change with it.

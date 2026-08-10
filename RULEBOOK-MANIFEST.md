# Interactive Rulebook Manifest

`rulebook-manifest.json` is navigation metadata for consumers such as the MTGR Platform interactive rulebook.

## Source-of-truth rule

The manifest does **not** contain authoritative rule wording. Canonical wording stays in the Markdown rule documents in this repository.

Each manifest rule points to:

- a stable public `id`
- the canonical Markdown `source`
- the canonical section `heading`
- search aliases
- lifecycle phase and audience metadata
- related-rule links

This allows URLs such as `/rules.html#failed-encounter` to remain stable even if a source document is renamed or versioned later.

## When a rule changes

If wording or mechanics change but the canonical heading remains the same, update only the rule Markdown as normal. Interactive consumers will receive the current text from the source document.

Update `rulebook-manifest.json` when any of these change:

1. A canonical section heading is renamed or moved to another document.
2. A new rule should become directly searchable or linkable.
3. A useful search alias should be added.
4. A rule changes lifecycle phase, audience, or related-rule relationships.
5. A guided ruling needs a new canonical step.

## Stable IDs

Treat rule IDs as public API identifiers. Prefer keeping an existing ID even when a title, heading, or source filename changes.

Examples:

- `failed-encounter`
- `town-flow`
- `stay-out-flow`
- `authority-level`
- `doom-rules`

## Canonical ownership

Some rule concepts are summarized in more than one document for readability. The manifest should point each searchable rule entry to one canonical owner rather than exposing duplicate competing entries.

For example, failed-encounter behavior appears in multiple documents, but the interactive rulebook points `failed-encounter` to `CORE-GAME-STRUCTURE-V1.0.md > FAILED ENCOUNTER TRANSITION`.

## Designer-only content

Design notes and design constraints can remain in the Markdown source without becoming player-facing rule entries. Only add them to the manifest if a consumer should intentionally expose them.

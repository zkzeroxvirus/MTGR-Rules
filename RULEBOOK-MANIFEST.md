# Interactive Rulebook Contract

`rulebook-manifest.json` is the stable contract used by MTGR Platform surfaces.

## Source-of-truth rule

Canonical mechanical wording remains in the Markdown rule documents in this repository. The contract does not duplicate that wording. Instead, each stable rule ID declares an exact content selector:

- `document` — expose the document body intentionally.
- `section` — expose one exact Markdown heading subtree.
- `range` — expose content from one exact heading up to, but not including, another exact heading.

Fuzzy heading matching is not allowed. Legacy `match` and `wholeDocument` extraction flags are not allowed.

## Why the contract exists

Consumers must never decide rule boundaries themselves. The website, TTS Notebook, Host Reference, and future clients consume stable rule IDs and compiled payloads. If a Markdown heading moves or changes, validation fails before the change can silently leak adjacent rules into another surface.

## Stable IDs

Treat rule IDs as public API identifiers. Titles, source files, and heading text may change; IDs should not.

Examples:

- `failed-encounter`
- `town-flow`
- `stay-out-flow`
- `authority-level`
- `doom-rules`

## Surface ownership

`surfaces` may restrict a rule to `web`, `notebook`, or `host`. When omitted, a rule is available to all three surfaces.

Navigation summaries may be written by a consumer, but canonical mechanical wording must originate from a contracted Markdown source in this repository.

## Change workflow

When a mechanical rule changes:

1. Update the canonical Markdown wording here first.
2. Update the contract only if the source, heading boundary, metadata, or stable links changed.
3. Run `npm run check`.
4. Update MTGR-Platform runtime behavior to match the canonical rule.
5. Do not add a Platform-only wording override as a substitute for updating MTGR-Rules.

## Notebook contract

`NOTEBOOK-MANIFEST.json` schema v2 composes tabs from rule IDs. It no longer defines its own source headings. This prevents Notebook extraction rules from drifting away from the website contract.

# Notebook Addendum Accuracy Review

Reviewed on October 7, 2026. This is an implementation review, not a separate gameplay authority. Active wording remains in the canonical units under `rules/`.

## Findings and corrections

| Topic | Canonical references | Review result |
| --- | --- | --- |
| Combat targeting | `player-vs-player-combat`, `turn-structure` | Retained player-versus-player attacks; clarified adjacent blocking without allowing a player to block their own attacker. |
| Party timing | `turn-structure`, `player-health`, `extra-turns` | Replaced the misleading "No teams are used" summary with shared timing and priority, individual life and control, and controller-only extra turns. Other Two-Headed Giant rules are not imported. |
| Concessions | `player-departure` | Individual scoops remain at sorcery speed; full-party encounter concession remains at instant speed. |
| Loot Pool | `loot-pool` | Corrected the basic-land-only wording: every land, including nonbasics, is rerolled when generating the seven nonland victory cards. |
| Ticket pools | `rules/progression/tickets/emblem-ticket.md`, `vanguard-ticket.md`, `conspiracy-ticket.md` | Confirmed the corresponding Legal pools and clarified their explicit MTGR eligibility exceptions. |
| Pack diversity | `pack-rules`, `town-buildings`, `deckbuilding` | Corrected 45/30/15 as minimum distinct eligible search results, not cards opened per pack. Kept pack size, keep limit, and Brand of the Open Hand separate. |
| Card legality | `notebook-addendum`, `banned-restricted`, `deckbuilding` | Preserved paper-only eligibility, Commander legality except explicit MTGR exceptions, and no Alchemy-only cards. Explicitly retained MTGR bans and restrictions. |
| Color identity | `deckbuilding`, `card-acquisition`, `town-buildings` | Confirmed the initial pool's color restriction and the eligibility of later off-color cards from unrestricted effects. |
| Initial pool validation | `deckbuilding` | Confirmed 100 cards, a 22-card draft, no basic lands, replacement of invalid individual cards, and no whole-pool reroll. |
| Pre-Con Draft | `notebook-addendum` | Retained its disabled status; the current starting deck procedure uses the 100-card pool. |
| Combos and infinites | `combo-restrictions`, `deckbuilding` | Added minimum-required-card counting across zones, the recurring-protection distinction, and both disputed examples while retaining the existing win-combo bans and restricted-loop limits. |

## Shared combo wording

`combo-restrictions` owns the complete combo rules and examples. `deckbuilding` links to that unit. `NOTEBOOK-MANIFEST.json` includes it directly in Rules - Addendum, so the Notebook feed and generated rulebooks consume the same wording without a second copy in the addendum source.

The Staff/Metalworker positive-mana example counts five cards: the two permanents and three required artifacts in hand. With two artifacts in hand it is a four-card, zero-net-mana loop. Any Scryfalled card actually used in a loop still invokes the one-iteration-per-turn restriction, even if that card is additional to the minimum required set.

## Verification

- Rules `npm run build` and `npm run check` passed: 361 canonical rule units, 6 Platform contracts, 69 progression units, and 5 Notebook tabs.
- Rendered the five managed Notebook tabs through Platform's `createNotebookFeedService` using the local Rules checkout, and inspected the complete Addendum body and both examples. The combo definitions appear once in that tab.
- Platform `npm run check` passed its content and TTS validation.
- Platform `npm run test:api` passed all 781 tests with normal isolated workers. Sandbox child-process restrictions required running this read-only test command outside the sandbox; no Platform source changes were needed.

The live Notebook feed reads the published MTGR-Rules `main` branch. Local verification does not publish these changes or update an already open TTS table.

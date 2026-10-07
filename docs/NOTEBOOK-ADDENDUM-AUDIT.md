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
| Deck minimum and Town removals | `deck-minimum`, `town-buildings`, `town-flow`, `global-limits` | Incorporated the supplied Host clarification: 40 cards including Commander(s), modified by applicable effects; temporary Town shortages must be repaired through permitted actions before leaving. Added the Tavern 40→38 and 42→40 examples. |
| Cathedral access | `town-buildings`, `notebook-addendum` | Confirmed the active Town → Cathedral button in `tts/src/objects/player-profile-token.lua`; a separate building is not needed to submit the request. |
| Crypt decklists | `crypt`, `notebook-addendum` | Clarified designated final-boss decks and Archidekt decklist access. No complete Crypt index or arbitrary-deck substitution is promised. |
| End Session counting | `run-end-essence-rewards`, `player-quick-start`, `host-run-procedure` | Checked `handleEndSessionDeck`: the token credits one submitted stack and returns to the shop. Instructions require Deck and Sideboard together, use the Player Profile, and do not claim automatic counting of cards elsewhere on the table. |
| Current progression profiles | `host-types-profiles`, `progression-reference`, `host-role-table-philosophy` | Removed the unsupported active Verified/Unverified split. Steam-based Player Profile saving does not require website sign-in or Discord membership. Documented the supplied full-release reset announcement as planned, without resetting data. |
| Hosting reward | `host-types-profiles` | Retained the supplied Discord-hosting scope and confirmed the 750 Essence amount and listed-player verification requirement in the Host Toolkit and Community run reward flow. |

## Shared combo wording

`combo-restrictions` owns the complete combo rules and examples. `deckbuilding` links to that unit. `NOTEBOOK-MANIFEST.json` includes it directly in Rules - Addendum, so the Notebook feed and generated rulebooks consume the same wording without a second copy in the addendum source.

The Staff/Metalworker positive-mana example counts five cards: the two permanents and three required artifacts in hand. With two artifacts in hand it is a four-card, zero-net-mana loop. Any Scryfalled card actually used in a loop still invokes the one-iteration-per-turn restriction, even if that card is additional to the minimum required set.

## Shared player guidance

`deck-minimum` owns the deck-size floor and Town restoration deadline. Existing deckbuilding, Town, and Host procedures link to it. The Addendum includes `deck-minimum`, `run-end-essence-rewards`, and `host-types-profiles` directly so their complete guidance also comes from the owning units.

The supplied Jade/Sirin exchange is the authority for the planned progression split and full-release reset announcement. Current table behavior was cross-checked against Platform's Player Profile and Host Toolkit source, Steam-keyed profile creation, and Community run verification. This review does not implement the future split or release reset.

## Verification

- Rules `npm run build` and `npm run check` passed: 362 canonical rule units, 6 Platform contracts, 69 progression units, and 5 Notebook tabs.
- Rendered the five managed Notebook tabs through Platform's `createNotebookFeedService` using the local Rules checkout, and inspected the complete Addendum body, both combo examples, Town deadline, Cathedral access, Crypt decklist guidance, End Session instructions, and profile/release guidance. The final Addendum is 14,316 characters; all five tabs retain Grey presentation.
- Platform `npm run check` passed its content and TTS validation.
- During the preceding combo review, Platform `npm run test:api` passed all 781 tests with normal isolated workers. Sandbox child-process restrictions required running this read-only test command outside the sandbox. This follow-up changed only Rules documents and composition; no Platform source changes were needed.

The live Notebook feed reads the published MTGR-Rules `main` branch. Local verification does not publish these changes or update an already open TTS table.

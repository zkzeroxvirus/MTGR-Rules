# Player Profile Functionality

> Tooling reference. Canonical player instructions live in [Host Types and Progression Profiles](../../rules/host/host-types-profiles.md) and [Run-End Essence Rewards](../../rules/rewards/run-end-essence-rewards.md).

## Supported table controller

The supported table uses the **Player Profile token** to track Essence, XP, progression inventory, equipped rewards, and Town actions. Its source is `MTGR-Platform/tts/src/objects/player-profile-token.lua`.

Claiming the token resolves the player's Steam identity. Allow profile loading to finish before deckbuilding modifiers or progression actions are used.

## Profile persistence

The token saves local object state and synchronizes the player's profile through the MTGR Platform game API. Server profile creation is keyed by Steam identity; Discord linking and website sign-in are not required for ordinary table play or profile saving.

The current table has one persistent player progression profile. It does not select a separate Verified or Unverified progression profile based on the Host or table ruleset. The planned release split and reset are documented in the canonical Host Types and Progression Profiles rule.

Check the token's sync status after progression changes and before closing the table. Local state alone is not confirmation that a server update succeeded.

## Town services

Open Town on the Player Profile to use its supported services. **Town → Cathedral** submits an active Cathedral request. Host-resolved offers use the Host Town Actions workflow.

Card removals follow the canonical Deck Minimum and Town Removals rule. The token's controls do not grant additional card gains or Sideboard moves beyond the applicable service rules.

## Run-end counting

End Session converts unspent XP to Essence, then prompts for a physical Deck or Card object. `handleEndSessionDeck` sums the submitted object's card CMC labels, adds the result to Essence, and returns to the shop after that submission.

Submit the Deck and Sideboard in one combined stack. Cards elsewhere on the table are not included automatically. The separate CMC Counter is not required. Missing or incorrect card metadata requires a Host check of the total.

## Legacy counter material

Older Essence Counter and Combo Counter scripts describe historical controls and synchronization. Their counter labels, Google Apps Script behavior, and two-profile descriptions are not the supported Player Profile workflow. Use the canonical rules and current Player Profile source when documenting player actions.

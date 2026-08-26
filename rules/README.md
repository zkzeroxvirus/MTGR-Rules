# Canonical MTGR Rule Units

This directory is the authoritative gameplay source for MTG Roguelike. Each linked file is one stable semantic rule unit consumed directly by MTGR Platform.

For continuous reading, use [`../RULEBOOK.md`](../RULEBOOK.md). Platform consumers should use stable contract IDs from `rulebook-manifest.json`, `PROGRESSION-CONTRACTS.json`, and `PLATFORM-SURFACE-CONTRACTS.json`.

## Before the Run

- [Game Overview](getting-started/game-overview.md) — `game-overview`
- [Player Structure](getting-started/player-structure.md) — `player-structure`
- [Deckbuilding Clarifications](getting-started/deckbuilding.md) — `deckbuilding`
- [Banned & Restricted](getting-started/banned-restricted.md) — `banned-restricted`
- [Pre-Encounter Setup](getting-started/pre-encounter-setup.md) — `pre-encounter-setup`

## Encounter Loop

- [Player Health, Healing, and Max HP](encounters/player-health.md) — `player-health`
- [Game Loop](encounters/game-loop.md) — `game-loop`
- [Party Combat Interactions](encounters/party-combat-interactions.md) — `party-combat-interactions`
- [Failed Encounter Transition](encounters/failed-encounter.md) — `failed-encounter`
- [Encounter Flow](encounters/encounter-flow.md) — `encounter-flow`
- [Encounter Types](encounters/encounter-types.md) — `encounter-types`
- [Wild Magic Table](encounters/wild-magic-table.md) — `wild-magic-table`
- [Reward Timing](rewards/reward-timing.md) — `reward-timing`
- [XP System](rewards/xp-system.md) — `xp-system`
- [Cashout System](rewards/cashout-system.md) — `cashout-system`
- [Loot Pool System](rewards/loot-pool.md) — `loot-pool`
- [Authority Component — Level](host/authority-level.md) — `authority-level`
- [Always-On Scaling Powers](host/always-on-scaling.md) — `always-on-scaling`
- [Doom Setup](host/doom-setup.md) — `doom-setup`
- [Doom Rules](host/doom-rules.md) — `doom-rules`
- [Doom Reroll](host/doom-reroll.md) — `doom-reroll`
- [Affixes](host/affixes-reference.md) — `affixes-reference`
- [Turn Structure](encounters/turn-structure.md) — `turn-structure`
- [Death Rules](encounters/death-rules.md) — `death-rules`
- [Player Departure](encounters/player-departure.md) — `player-departure`
- [Reward Eligibility](rewards/reward-eligibility.md) — `reward-eligibility`

## Between Encounters

- [Post-Encounter Choice](encounters/post-encounter-choice.md) — `post-encounter-choice`
- [Town Flow](town/town-flow.md) — `town-flow`
- [Town Buildings](town/town-buildings.md) — `town-buildings`
- [Stay Out Flow](between-encounters/stay-out-flow.md) — `stay-out-flow`
- [Supply Drop Resolution](between-encounters/supply-drop-resolution.md) — `supply-drop-resolution`
- [Supply Drop Table](between-encounters/supply-drop-table.md) — `supply-drop-table`
- [Event Resolution](between-encounters/event-resolution.md) — `event-resolution`

## The Crypt

- [Run Failure](crypt/run-failure.md) — `run-failure`
- [Run Success](crypt/run-success.md) — `run-success`
- [Final Boss — The Crypt](crypt/crypt.md) — `crypt`
- [Crypt Reward Eligibility](rewards/crypt-reward-eligibility.md) — `crypt-reward-eligibility`
- [Crypt Completion Rewards](rewards/crypt-completion-rewards.md) — `crypt-completion-rewards`
- [Run-End Essence Rewards](rewards/run-end-essence-rewards.md) — `run-end-essence-rewards`

## Between Runs

- [Host Types and Progression Profiles](host/host-types-profiles.md) — `host-types-profiles`
- [Permanent Progression](progression/progression-reference.md) — `progression-reference`
- [Rules Addendum](progression/notebook-addendum.md) — `notebook-addendum`

## Permanent Progression

### Crypt Buffs

- [Quick Spell](progression/crypt-buffs/quick-spell.md) — `quick_spell`
- [Spiritual Guidance](progression/crypt-buffs/spiritual-guidance.md) — `spiritual_guidance`
- [The God Tree's Blessing](progression/crypt-buffs/the-god-trees-blessing.md) — `the_god_trees_blessing`
- [Momentum Engine](progression/crypt-buffs/momentum-engine.md) — `momentum_engine`
- [Eternal Servitude](progression/crypt-buffs/eternal-servitude.md) — `eternal_servitude`
- [Unearthly Reach](progression/crypt-buffs/unearthly-reach.md) — `unearthly_reach`
- [Respited Gift](progression/crypt-buffs/respited-gift.md) — `respited_gift`
- [Fickle Duplicant](progression/crypt-buffs/fickle-duplicant.md) — `fickle_duplicant`
- [Might of Okaun](progression/crypt-buffs/might-of-okaun.md) — `might_of_okaun`
- [Finders Keepers](progression/crypt-buffs/finders-keepers.md) — `finders_keepers`
- [Flame of Progress](progression/crypt-buffs/flame-of-progress.md) — `flame_of_progress`
- [Shapeshifter](progression/crypt-buffs/shapeshifter.md) — `shapeshifter`
- [Artificial Undeath](progression/crypt-buffs/undying-legionary.md) — `undying_legionary`
- [Treasure Pirate](progression/crypt-buffs/treasure-pirate.md) — `treasure_pirate`
- [Dark Beginnings](progression/crypt-buffs/dark-beginnings.md) — `dark_beginnings`
- [The Chosen Path](progression/crypt-buffs/the-chosen-path.md) — `the_chosen_path`
- [Paragon Adornments](progression/crypt-buffs/paragon-adornments.md) — `paragon_adornments`
- [Upgrades, People, Upgrades](progression/crypt-buffs/upgrades-people-upgrades.md) — `upgrades_people_upgrades`
- [Spoils of War](progression/crypt-buffs/lucky-pull.md) — `lucky_pull`
- [Leftovers](progression/crypt-buffs/leftovers.md) — `leftovers`
- [Scent of Death](progression/crypt-buffs/scent-of-death.md) — `scent_of_death`

### Tickets

- [Arcane Signet Ticket](progression/tickets/arcane-signet-ticket.md) — `arcane_signet_ticket`
- [Sol Ring Ticket](progression/tickets/sol-ring-ticket.md) — `sol_ring_ticket`
- [Leyline Ticket](progression/tickets/leyline-ticket.md) — `leyline_ticket`
- [Color Combo Ticket](progression/tickets/color-combo-ticket.md) — `color_combo_ticket`
- [Trinket Ticket](progression/tickets/trinket-ticket.md) — `trinket_ticket`
- [Conspiracy Ticket](progression/tickets/conspiracy-ticket.md) — `conspiracy_ticket`
- [Vanguard Ticket](progression/tickets/vanguard-ticket.md) — `vanguard_ticket`
- [Emblem Ticket](progression/tickets/emblem-ticket.md) — `emblem_ticket`

### Brands

- [Brand of the Cartographer](progression/brands/brand-of-the-cartographer.md) — `brand_of_the_cartographer`
- [Brand of the Conclave](progression/brands/brand-of-the-conclave.md) — `brand_of_the_conclave`
- [Brand of Recurrence](progression/brands/brand-of-recurrence.md) — `brand_of_recurrence`
- [Brand of the Open Hand](progression/brands/brand-of-the-open-hand.md) — `brand_of_the_open_hand`
- [Brand of the Blinded Eye](progression/brands/brand-of-the-blinded-eye.md) — `brand_of_the_blinded_eye`
- [Brand of the Infinite Void](progression/brands/brand-of-the-infinite-void.md) — `brand_of_the_infinite_void`
- [Brand of Foresight](progression/brands/brand-of-foresight.md) — `brand_of_foresight`
- [Brand of Ascension](progression/brands/brand-of-ascension.md) — `brand_of_ascension`
- [Brand of Divergent Paths](progression/brands/brand-of-divergent-paths.md) — `brand_of_divergent_paths`
- [Brand of Possibilities](progression/brands/brand-of-possibilities.md) — `brand_of_possibilities`

### Achievements

- [Chaos](progression/achievements/chaos.md) — `chaos`
- [Victory Lap](progression/achievements/victory-lap.md) — `victory_lap`
- [One with Death](progression/achievements/one-with-death.md) — `one_with_death`
- [Dog's Best Friend](progression/achievements/dog-s-best-friend.md) — `dog_s_best_friend`
- [Compelling Madness](progression/achievements/compelling-madness.md) — `compelling_madness`
- [Gamblers Never Quit](progression/achievements/gamblers-never-quit.md) — `gamblers_never_quit`
- [Stick It To Me](progression/achievements/stick-it-to-me.md) — `stick_it_to_me`
- [Happy Fun Land](progression/achievements/happy-fun-land.md) — `happy_fun_land`
- [Nature's Blessing](progression/achievements/nature-s-blessing.md) — `nature_s_blessing`
- [Back to Basics](progression/achievements/back-to-basics.md) — `back_to_basics`
- [I'm Feeling Targeted](progression/achievements/im-feeling-targeted.md) — `im_feeling_targeted`
- [Changeling's Land Form](progression/achievements/changeling-s-land-form.md) — `changeling_s_land_form`
- [Construct's Salvation](progression/achievements/construct-s-salvation.md) — `construct_s_salvation`
- [Horse's Gallop](progression/achievements/horse-s-gallop.md) — `horse_s_gallop`
- [Raccoon's Rage](progression/achievements/raccoon-s-rage.md) — `raccoon_s_rage`
- [Scorpion's Nest](progression/achievements/scorpion-s-nest.md) — `scorpion_s_nest`
- [Fish Pond](progression/achievements/fish-pond.md) — `fish_pond`
- [Dawn of Crabs](progression/achievements/dawn-of-crabs.md) — `dawn_of_crabs`
- [Simic — Adaptive Pattern](progression/achievements/simic-identity-buff-adaptive-pattern.md) — `simic_identity_buff_adaptive_pattern`
- [Selesnya — Harmony's Bloom](progression/achievements/selesnya-identity-buff-harmony-s-bloom.md) — `selesnya_identity_buff_harmony_s_bloom`
- [Rakdos — Showstopper's Encore](progression/achievements/rakdos-identity-buff-showstopper-s-encore.md) — `rakdos_identity_buff_showstopper_s_encore`
- [Orzhov — Tithe and Toil](progression/achievements/orzhov-identity-buff-tithe-and-toil.md) — `orzhov_identity_buff_tithe_and_toil`
- [Izzet — Experimental Sparks](progression/achievements/izzet-identity-buff-experimental-sparks.md) — `izzet_identity_buff_experimental_sparks`
- [Gruul — Primal Fury](progression/achievements/gruul-identity-buff-primal-fury.md) — `gruul_identity_buff_primal_fury`
- [Golgari — Cycle of Rot](progression/achievements/golgari-identity-buff-cycle-of-rot.md) — `golgari_identity_buff_cycle_of_rot`
- [Dimir — Whisper Network](progression/achievements/dimir-identity-buff-whisper-network.md) — `dimir_identity_buff_whisper_network`
- [Boros — Charge of Conviction](progression/achievements/boros-identity-buff-charge-of-conviction.md) — `boros_identity_buff_charge_of_conviction`
- [Azorius — Law of Efficiency](progression/achievements/azorius-identity-buff-law-of-efficiency.md) — `azorius_identity_buff_law_of_efficiency`

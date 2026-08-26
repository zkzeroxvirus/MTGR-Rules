# Canonical MTGR Rule Units

This directory is the authoritative gameplay source for MTG Roguelike. Each linked file is one stable semantic rule unit consumed directly by MTGR Platform.

For continuous reading, use [`../RULEBOOK.md`](../RULEBOOK.md). Platform consumers should use stable contract IDs from `rulebook-manifest.json`, `PROGRESSION-CONTRACTS.json`, and `PLATFORM-SURFACE-CONTRACTS.json`.

## Before the Run

- [Game Overview](getting-started/game-overview.md) — `game-overview`
- [Player Structure](getting-started/player-structure.md) — `player-structure`
- [Deckbuilding Clarifications](getting-started/deckbuilding.md) — `deckbuilding`
- [Banned & Restricted](getting-started/banned-restricted.md) — `banned-restricted`
- [Pre-Encounter Setup](getting-started/pre-encounter-setup.md) — `pre-encounter-setup`
- [Trinket System](getting-started/trinket-system.md) — `trinket-system`
- [🔧 THE DEVICE](getting-started/trinkets/the-device.md) — `trinket-the-device`
- [🪓 GARRUK'S CLIPPER](getting-started/trinkets/garruk-s-clipper.md) — `trinket-garruk-s-clipper`
- [🔥 TORCH](getting-started/trinkets/torch.md) — `trinket-torch`
- [✨ STAFF OF LIGHT](getting-started/trinkets/staff-of-light.md) — `trinket-staff-of-light`
- [🍷 JAR OF WINE](getting-started/trinkets/jar-of-wine.md) — `trinket-jar-of-wine`
- [🍯 JAR OF HONEY](getting-started/trinkets/jar-of-honey.md) — `trinket-jar-of-honey`
- [⛺ TENT](getting-started/trinkets/tent.md) — `trinket-tent`
- [🪓 THIRSTING AXE](getting-started/trinkets/thirsting-axe.md) — `trinket-thirsting-axe`
- [👹 ASPECT OF MALFEGOR](getting-started/trinkets/aspect-of-malfegor.md) — `trinket-aspect-of-malfegor`
- [💣 BOMB](getting-started/trinkets/bomb.md) — `trinket-bomb`
- [💥 BIG BOMB](getting-started/trinkets/big-bomb.md) — `trinket-big-bomb`
- [☢️ BIGGER BOMB](getting-started/trinkets/bigger-bomb.md) — `trinket-bigger-bomb`
- [🛡️ MIRROR SHIELD](getting-started/trinkets/mirror-shield.md) — `trinket-mirror-shield`
- [🧨 EXPLOSIVE BARREL](getting-started/trinkets/explosive-barrel.md) — `trinket-explosive-barrel`
- [🐱 MITSY, ABANDONED](getting-started/trinkets/mitsy-abandoned.md) — `trinket-mitsy-abandoned`
- [⚪ MARBLES](getting-started/trinkets/marbles.md) — `trinket-marbles`
- [🛒 CROSSROADS CART](getting-started/trinkets/crossroads-cart.md) — `trinket-crossroads-cart`
- [⚔️ VOGAR, BOUND FOR DEATH](getting-started/trinkets/vogar-bound-for-death.md) — `trinket-vogar-bound-for-death`
- [🗡️ SAL BIDARD, GLORY REFORGED](getting-started/trinkets/sal-bidard-glory-reforged.md) — `trinket-sal-bidard-glory-reforged`
- [🔥 CAMPFIRE](getting-started/trinkets/campfire.md) — `trinket-campfire`
- [☠️ ARMAMENT OF DEATH](getting-started/trinkets/armament-of-death.md) — `trinket-armament-of-death`
- [🛡️ LOCH SHIELD](getting-started/trinkets/loch-shield.md) — `trinket-loch-shield`
- [🐉 AEGIS OF VERIX](getting-started/trinkets/aegis-of-verix.md) — `trinket-aegis-of-verix`
- [👁️ WATCHER'S EYE](getting-started/trinkets/watcher-s-eye.md) — `trinket-watcher-s-eye`
- [⚡ TONITRUS, SKULLDUSTER](getting-started/trinkets/tonitrus-skullduster.md) — `trinket-tonitrus-skullduster`
- [🐉 DRAGOVOKIA](getting-started/trinkets/dragovokia.md) — `trinket-dragovokia`
- [⚔️ GIDEON'S TRAINING SABER](getting-started/trinkets/gideon-s-training-saber.md) — `trinket-gideon-s-training-saber`
- [🗡️ PIKEMAN](getting-started/trinkets/pikeman.md) — `trinket-pikeman`
- [🔦 ASHMOUTH LANTERN](getting-started/trinkets/ashmouth-lantern.md) — `trinket-ashmouth-lantern`
- [⚔️ PARASITE BLADE](getting-started/trinkets/parasite-blade.md) — `trinket-parasite-blade`
- [📖 BLADE OF THE ARCHMAGUS](getting-started/trinkets/blade-of-the-archmagus.md) — `trinket-blade-of-the-archmagus`
- [🎃 CURSED PUMPKINS](getting-started/trinkets/cursed-pumpkins.md) — `trinket-cursed-pumpkins`
- [🧙 HU-BLOW, THE GOOD](getting-started/trinkets/hu-blow-the-good.md) — `trinket-hu-blow-the-good`
- [👑 RUSTED CROWN](getting-started/trinkets/rusted-crown.md) — `trinket-rusted-crown`
- [💎 TREASURE](getting-started/trinkets/treasure.md) — `trinket-treasure`
- [💰 HUGE TREASURE](getting-started/trinkets/huge-treasure.md) — `trinket-huge-treasure`
- [🔔 GRAVEBELL](getting-started/trinkets/gravebell.md) — `trinket-gravebell`
- [🔊 SHOVEL PILE](getting-started/trinkets/shovel-pile.md) — `trinket-shovel-pile`
- [⚱️ SAINT'S ASH](getting-started/trinkets/saint-s-ash.md) — `trinket-saint-s-ash`
- [🔫 CANNON](getting-started/trinkets/cannon.md) — `trinket-cannon`
- [🌾 BAG OF GRAIN](getting-started/trinkets/bag-of-grain.md) — `trinket-bag-of-grain`
- [🛍️ CELESTINE, HAMA'S LIGHT](getting-started/trinkets/celestine-hama-s-light.md) — `trinket-celestine-hama-s-light`
- [🏺 GUILD CHEST](getting-started/trinkets/guild-chest.md) — `trinket-guild-chest`
- [🍶 JAR OF OIL](getting-started/trinkets/jar-of-oil.md) — `trinket-jar-of-oil`
- [💧 JAR OF WATER](getting-started/trinkets/jar-of-water.md) — `trinket-jar-of-water`
- [⊡ VOID LANTERN](getting-started/trinkets/void-lantern.md) — `trinket-void-lantern`
- [🌊 LANTERN OF THE DEEP](getting-started/trinkets/lantern-of-the-deep.md) — `trinket-lantern-of-the-deep`
- [☀️ THE SUNFORGED SLICER](getting-started/trinkets/the-sunforged-slicer.md) — `trinket-the-sunforged-slicer`
- [🎭 AGGRESSIVE SKELETON // OPPRESSIVE SKELETON](getting-started/trinkets/aggressive-skeleton-oppressive-skeleton.md) — `trinket-aggressive-skeleton-oppressive-skeleton`
- [👢 IRON BOOTS](getting-started/trinkets/iron-boots.md) — `trinket-iron-boots`
- [🎃 JACK-O-LANTERN](getting-started/trinkets/jack-o-lantern.md) — `trinket-jack-o-lantern`
- [🦷 MIMIC TOOTH](getting-started/trinkets/mimic-tooth.md) — `trinket-mimic-tooth`
- [💪 GREAT THWACK](getting-started/trinkets/great-thwack.md) — `trinket-great-thwack`
- [💰 GOLD BAG](getting-started/trinkets/gold-bag.md) — `trinket-gold-bag`
- [🪬 TRIBAL TOTEM](getting-started/trinkets/tribal-totem.md) — `trinket-tribal-totem`
- [🧟 WALKING CORPSE](getting-started/trinkets/walking-corpse.md) — `trinket-walking-corpse`
- [🍽️ HUNGRY IDOL](getting-started/trinkets/hungry-idol.md) — `trinket-hungry-idol`
- [Pregame Shop](getting-started/pregame-shop.md) — `pregame-shop`
- [Run Structure](getting-started/run-structure.md) — `run-structure`
- [Starting Land Balance](getting-started/starting-land-balance.md) — `starting-land-balance`
- [Global Limits](getting-started/global-limits.md) — `global-limits`

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
- [Demon Generals](host/demon-generals-system.md) — `demon-generals-system`
- [🔥 EMBER TYRANT — GENERAL OF ASH](host/demon-generals/ember-tyrant-general-of-ash.md) — `demon-general-ember-tyrant-general-of-ash`
- [❄️ WINTER TYRANT — GENERAL OF FROST](host/demon-generals/winter-tyrant-general-of-frost.md) — `demon-general-winter-tyrant-general-of-frost`
- [☠️ PLAGUE TYRANT — GENERAL OF ROT](host/demon-generals/plague-tyrant-general-of-rot.md) — `demon-general-plague-tyrant-general-of-rot`
- [⚡ STORM TYRANT — GENERAL OF RUIN](host/demon-generals/storm-tyrant-general-of-ruin.md) — `demon-general-storm-tyrant-general-of-ruin`
- [💀 GRAVE TYRANT — GENERAL OF NECROMANCY](host/demon-generals/grave-tyrant-general-of-necromancy.md) — `demon-general-grave-tyrant-general-of-necromancy`
- [🩸 BLOOD TYRANT — GENERAL OF SACRIFICE](host/demon-generals/blood-tyrant-general-of-sacrifice.md) — `demon-general-blood-tyrant-general-of-sacrifice`
- [🪨 STONE TYRANT — GENERAL OF FORTIFICATION](host/demon-generals/stone-tyrant-general-of-fortification.md) — `demon-general-stone-tyrant-general-of-fortification`
- [🌀 VOID TYRANT — GENERAL OF THE ABYSS](host/demon-generals/void-tyrant-general-of-the-abyss.md) — `demon-general-void-tyrant-general-of-the-abyss`
- [⚔️ WAR TYRANT — GENERAL OF CONQUEST](host/demon-generals/war-tyrant-general-of-conquest.md) — `demon-general-war-tyrant-general-of-conquest`
- [🪙 GOLD TYRANT — GENERAL OF GREED](host/demon-generals/gold-tyrant-general-of-greed.md) — `demon-general-gold-tyrant-general-of-greed`
- [🌙 DREAM TYRANT — GENERAL OF MADNESS](host/demon-generals/dream-tyrant-general-of-madness.md) — `demon-general-dream-tyrant-general-of-madness`
- [Authority Effects](host/authority-effects.md) — `authority-effects`
- [Authority Interaction Rules](host/authority-interactions.md) — `authority-interactions`
- [Triggering a Doom Card](host/doom-triggering.md) — `doom-triggering`
- [Doom Timing](host/doom-timing.md) — `doom-timing`
- [💠 I’m Just Getting Started](host/doom-cards/i-m-just-getting-started.md) — `doom-card-i-m-just-getting-started`
- [🧠 A Bit of Artificial Insight](host/doom-cards/a-bit-of-artificial-insight.md) — `doom-card-a-bit-of-artificial-insight`
- [👁 I Will Witness Your Downfall](host/doom-cards/i-will-witness-your-downfall.md) — `doom-card-i-will-witness-your-downfall`
- [🔍 I’ve Seen What Breaks You](host/doom-cards/i-ve-seen-what-breaks-you.md) — `doom-card-i-ve-seen-what-breaks-you`
- [🌌 Welcome to My Reality](host/doom-cards/welcome-to-my-reality.md) — `doom-card-welcome-to-my-reality`
- [🔮 I Can Do That Too!](host/doom-cards/i-can-do-that-too.md) — `doom-card-i-can-do-that-too`
- [💕 Oooooh, I Like You](host/doom-cards/oooooh-i-like-you.md) — `doom-card-oooooh-i-like-you`
- [❌ No](host/doom-cards/no.md) — `doom-card-no`
- [😒 You Are Annoying Me](host/doom-cards/you-are-annoying-me.md) — `doom-card-you-are-annoying-me`
- [🛡 I Am Inevitable](host/doom-cards/i-am-inevitable.md) — `doom-card-i-am-inevitable`
- [🧱 Minions! Protect Me!](host/doom-cards/minions-protect-me.md) — `doom-card-minions-protect-me`
- [🔄 How Do You Like It?](host/doom-cards/how-do-you-like-it.md) — `doom-card-how-do-you-like-it`
- [💀 Death Is Inevitable](host/doom-cards/death-is-inevitable.md) — `doom-card-death-is-inevitable`
- [☠ Death Comes for Us All](host/doom-cards/death-comes-for-us-all.md) — `doom-card-death-comes-for-us-all`
- [🚫 You’ve Outlived Your Usefulness](host/doom-cards/you-ve-outlived-your-usefulness.md) — `doom-card-you-ve-outlived-your-usefulness`
- [⛓ Offer Tribute](host/doom-cards/offer-tribute.md) — `doom-card-offer-tribute`
- [😈 Did That Sting?](host/doom-cards/did-that-sting.md) — `doom-card-did-that-sting`
- [🔥 I’ll Show You True Pain](host/doom-cards/i-ll-show-you-true-pain.md) — `doom-card-i-ll-show-you-true-pain`
- [🔥 My Fury Burns](host/doom-cards/my-fury-burns.md) — `doom-card-my-fury-burns`
- [🧠 Madness Ensues](host/doom-cards/madness-ensues.md) — `doom-card-madness-ensues`
- [⏳ I Need You to Stop](host/doom-cards/i-need-you-to-stop.md) — `doom-card-i-need-you-to-stop`
- [🌱 Even Nature Cannot Resist](host/doom-cards/even-nature-cannot-resist.md) — `doom-card-even-nature-cannot-resist`
- [🌍 Reality Bends to My Will](host/doom-cards/reality-bends-to-my-will.md) — `doom-card-reality-bends-to-my-will`
- [🕵 I Will Put This to Good Use](host/doom-cards/i-will-put-this-to-good-use.md) — `doom-card-i-will-put-this-to-good-use`
- [🌀 You Bear the Mark! You Are Cursed!](host/doom-cards/you-bear-the-mark-you-are-cursed.md) — `doom-card-you-bear-the-mark-you-are-cursed`
- [Reward Scaling](rewards/reward-scaling.md) — `reward-scaling`
- [Cashout Pool](rewards/cashout-pool.md) — `cashout-pool`
- [Player vs Player Combat](encounters/player-vs-player-combat.md) — `player-vs-player-combat`
- [Storm Rule Modification](encounters/storm-modification.md) — `storm-modification`
- [Extra Turns](encounters/extra-turns.md) — `extra-turns`
- [Card Acquisition](encounters/card-acquisition.md) — `card-acquisition`
- [Pack Rules](rewards/pack-rules.md) — `pack-rules`

## Between Encounters

- [Post-Encounter Choice](encounters/post-encounter-choice.md) — `post-encounter-choice`
- [Town Flow](town/town-flow.md) — `town-flow`
- [Town Buildings](town/town-buildings.md) — `town-buildings`
- [Stay Out Flow](between-encounters/stay-out-flow.md) — `stay-out-flow`
- [Supply Drop Resolution](between-encounters/supply-drop-resolution.md) — `supply-drop-resolution`
- [Supply Drop Table](between-encounters/supply-drop-table.md) — `supply-drop-table`
- [Event Resolution](between-encounters/event-resolution.md) — `event-resolution`
- [Travelers](town/travelers-system.md) — `travelers-system`
- [🧔 Bearded Grunt](town/travelers/bearded-grunt.md) — `traveler-bearded-grunt`
- [🐸 Bullywug Royal](town/travelers/bullywug-royal.md) — `traveler-bullywug-royal`
- [🃏 Card Copier](town/travelers/card-copier.md) — `traveler-card-copier`
- [👹 Card-Eating Ogre](town/travelers/card-eating-ogre.md) — `traveler-card-eating-ogre`
- [🐱 Cats in a Coat](town/travelers/cats-in-a-coat.md) — `traveler-cats-in-a-coat`
- [🐎 Centaur Scouter](town/travelers/centaur-scouter.md) — `traveler-centaur-scouter`
- [🪳 Centepoid Warrior](town/travelers/centepoid-warrior.md) — `traveler-centepoid-warrior`
- [🧰 Commander Mimic](town/travelers/commander-mimic.md) — `traveler-commander-mimic`
- [⚒️ Dwarven Artificer](town/travelers/dwarven-artificer.md) — `traveler-dwarven-artificer`
- [👹 Elven Demonologist](town/travelers/elven-demonologist.md) — `traveler-elven-demonologist`
- [🍄 Fungal Lich](town/travelers/fungal-lich.md) — `traveler-fungal-lich`
- [🦒 Giff Bandito](town/travelers/giff-bandito.md) — `traveler-giff-bandito`
- [� Giant Ice Toad](town/travelers/giant-ice-toad.md) — `traveler-giant-ice-toad`
- [�📚 Hell's Librarian](town/travelers/hell-s-librarian.md) — `traveler-hell-s-librarian`
- [🕊️ Hollyphant](town/travelers/hollyphant.md) — `traveler-hollyphant`
- [😺 Kimi the Cat](town/travelers/kimi-the-cat.md) — `traveler-kimi-the-cat`
- [🤡 Silly, the Jester](town/travelers/silly-the-jester.md) — `traveler-silly-the-jester`
- [💰 The Trader](town/travelers/the-trader.md) — `traveler-the-trader`
- [⚔️ Vanguard Mercenaries](town/travelers/vanguard-mercenaries.md) — `traveler-vanguard-mercenaries`
- [🛍️ Wandering Card Merchant](town/travelers/wandering-card-merchant.md) — `traveler-wandering-card-merchant`
- [🎩 Zorbo](town/travelers/zorbo.md) — `traveler-zorbo`
- [Wanderers](between-encounters/wanderers-system.md) — `wanderers-system`
- [🛍️ Wandering Merchant](between-encounters/wanderers/wandering-merchant.md) — `wanderer-wandering-merchant`
- [🌀 Rift Vendor](between-encounters/wanderers/rift-vendor.md) — `wanderer-rift-vendor`
- [🎒 Quartermaster](between-encounters/wanderers/quartermaster.md) — `wanderer-quartermaster`
- [⚒️ Traveling Smith](between-encounters/wanderers/traveling-smith.md) — `wanderer-traveling-smith`
- [🎲 Road Gambler](between-encounters/wanderers/road-gambler.md) — `wanderer-road-gambler`
- [🚶 Wayfarer](between-encounters/wanderers/wayfarer.md) — `wanderer-wayfarer`
- [🔮 Hedge Mystic](between-encounters/wanderers/hedge-mystic.md) — `wanderer-hedge-mystic`
- [💎 Essence Broker](between-encounters/wanderers/essence-broker.md) — `wanderer-essence-broker`
- [🗺️ Cartographer](between-encounters/wanderers/cartographer.md) — `wanderer-cartographer`
- [🩹 Field Surgeon](between-encounters/wanderers/field-surgeon.md) — `wanderer-field-surgeon`
- [🎭 Masked Courier](between-encounters/wanderers/masked-courier.md) — `wanderer-masked-courier`
- [⚙️ Relic Hunter](between-encounters/wanderers/relic-hunter.md) — `wanderer-relic-hunter`
- [🌑 Shadow Broker](between-encounters/wanderers/shadow-broker.md) — `wanderer-shadow-broker`
- [🕯️ Veiled Trinket Broker](between-encounters/wanderers/veiled-trinket-broker.md) — `wanderer-veiled-trinket-broker`
- [🎵 Wandering Bard](between-encounters/wanderers/wandering-bard.md) — `wanderer-wandering-bard`
- [Event Timing](between-encounters/event-timing.md) — `event-timing`
- [Event Frequency](between-encounters/event-frequency.md) — `event-frequency`
- [Event Rules](between-encounters/event-design-rules.md) — `event-design-rules`
- [Event Classifications](between-encounters/event-classifications.md) — `event-classifications`
- [Event Scaling](between-encounters/event-scaling.md) — `event-scaling`
- [Event Restrictions](between-encounters/event-restrictions.md) — `event-restrictions`
- [When Stay Out Occurs](between-encounters/stay-out-timing.md) — `stay-out-timing`
- [Stay Out XP](between-encounters/stay-out-xp.md) — `stay-out-xp`
- [Stay Out Mystery Packs](between-encounters/stay-out-mystery-packs.md) — `stay-out-mystery-packs`
- [Stay Out Event Modifier](between-encounters/stay-out-event-modifier.md) — `stay-out-event-modifier`
- [Stay Out Restrictions](between-encounters/stay-out-restrictions.md) — `stay-out-restrictions`
- [When Town Occurs](town/town-timing.md) — `town-timing`
- [Town Full Heal](town/town-full-heal.md) — `town-full-heal`
- [Town Building System](town/town-building-system.md) — `town-building-system`

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
- [Brands System](progression/brands-system.md) — `brands-system`
- [Progression Shop](progression/progression-shop.md) — `progression-shop`
- [Progression Slot Rules](progression/progression-slot-rules.md) — `progression-slot-rules`

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

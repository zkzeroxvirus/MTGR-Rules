# TRINKET SYSTEM V1.0

The Trinket System defines how Trinkets are selected and applied in a run.

A Trinket is a pre-encounter run modifier chosen before Encounter 1.

---

## PURPOSE

Trinkets provide an early strategic boost and increase run variety.

Trinkets are part of pre-encounter setup and are not resolved mid-encounter.

---

## TIMING

Trinkets are resolved in the pre-first-encounter setup step after the starting Event is resolved.

Starting setup order:

- Event (cannot be a Bad Stuff Event)
- Trinket

Seat-swap window:

- After deckbuilding and before Encounter 1 begins, players may make one seat-swap adjustment
- After Encounter 1 begins, seat swapping is no longer allowed

---

## STANDARD SELECTION FLOW

When using the normal table flow:

1. Present 3 random Trinkets from the Trinket pool
2. Players vote on one Trinket
3. Apply that Trinket for the run

---

## TRINKET TICKET OVERRIDE

If a player has an active Trinket Ticket:

1. Present 3 random Trinkets from the same normal Trinket pool
2. That player chooses 1 Trinket (no table vote required)
3. Apply the chosen Trinket for the run

This occurs during pre-game setup before Encounter 1.

Ticket slot limits are per player, not per party.

---

## RULES CONSTRAINTS

- A player may have at most 1 Trinket at a time
- Trinket effects apply only as written on that Trinket
- If a Trinket would conflict with a core rule, the Host resolves the conflict using normal host adjudication
- The party is not capped at one total Trinket by this rule; this is a per-player limit

Unless otherwise specified on the Trinket, any party member may use that Trinket.

Normal Trinkets are party property for the duration of the run.

If a Trinket was created by a player's Trinket Ticket, that Trinket is tied to that player for session ownership purposes. If that player leaves the session, the Trinket is removed at the end of the current encounter.

If that player leaves during an encounter, the rest of the party may pilot that player's deck until the encounter ends. The Trinket remains active for the rest of that encounter, then is removed.

---

## INTERACTION WITH EVENTS

The pre-first-encounter step resolves Event and Trinket, in that order.

The starting Event cannot be a Bad Stuff Event.

After Encounter 1 begins, Event timing follows the normal Town/Stay Out/Event systems.

---

## SOURCE OF TRUTH

- Core loop timing: CORE-RULES.md
- Run flow overview: CORE-GAME-STRUCTURE-V1.0.md
- Ticket unlock behavior: SHOPS.md and PERMANENT-PROGRESSION.md

---

## TRINKET POOL

The following Trinkets make up the current pool.

---

### 🔧 THE DEVICE

> *Once per encounter, a party member may counter a spell they control. If they do, conjure 3 random spells. That player may cast 1 of those spells without paying its mana cost. Exile the rest.*

**Timing:** In response to a spell a party member controls.  
**Limit:** Once per encounter.  
**Resolution:** Counter target spell a party member controls. Conjure 3 random spells face-up. The activating player may cast 1 of those spells without paying its mana cost. Exile the remaining spells.

---

### 🪓 GARRUK'S CLIPPER

> *At the beginning of the party's upkeep, target creature the party controls gets +2/+0 and gains deathtouch and "Whenever this creature deals combat damage to a player, draw a card" until end of turn.*

**Timing:** Triggered at the beginning of the party's upkeep.  
**Limit:** Once per party upkeep.  
**Resolution:** Choose target creature the party controls. It gets +2/+0 and gains deathtouch. It also gains "Whenever this creature deals combat damage to a player, draw a card" until end of turn.

---

### 🔥 TORCH

> *At the beginning of the party's upkeep, choose a party member. That player ventures into the dungeon.*

**Timing:** Triggered at the beginning of each party upkeep.  
**Limit:** No per-encounter or per-turn activation limit.  
**Resolution:** Choose a party member as the ability resolves. That player ventures into the dungeon.

---

### ✨ STAFF OF LIGHT

> *Exile Staff of Light: Counter target Doom card as it is being played. This ability can't be countered.*

**Timing:** In response to a Doom card being played.  
**Limit:** Once per run.  
**Resolution:** Counter the Doom card as it is being played. This Trinket ability cannot be countered. After it resolves, exile this Trinket.

---

### 🍷 JAR OF WINE

> *This Trinket enters with 3 wine counters on it. A party member may remove a wine counter at sorcery speed. If they do, they gain 7 life, then discard a card at random. If a card is discarded this way, they draw a card. When no wine counters remain on this Trinket, exile it.*

**Timing:** Sorcery speed.  
**Limit:** No per-turn limit beyond available counters.  
**Resolution:** Remove 1 wine counter. The activating player gains 7 life, then discards a card at random. If they discarded a card this way, they draw a card. If this Trinket has no wine counters on it, exile it.

---

### 🍯 JAR OF HONEY

> *This Trinket enters with 2 honey counters on it. A party member may remove a honey counter at sorcery speed. If they do, they gain 9 life and remove all poison counters from themselves. When no honey counters remain on this Trinket, exile it.*

**Timing:** Sorcery speed.  
**Limit:** No per-turn limit beyond available counters.  
**Resolution:** Remove 1 honey counter. The activating player gains 9 life and removes all poison counters from themselves. If this Trinket has no honey counters on it, exile it.

---

### ⛺ TENT

> *Tent modifies Stay Out. Whenever the party chooses Stay Out, resolve normal Stay Out effects, then each party member may make up to 2 trades, remove up to 2 cards from their deck, and move up to 6 cards between their deck and sideboard.*

**Timing:** During Stay Out resolution after choosing Stay Out.  
**Limit:** No additional limit beyond normal path selection timing.  
**Resolution:** Apply normal Stay Out rewards and Event scaling first. Then each party member may resolve all listed Tent actions within those limits.

---

### 🪓 THIRSTING AXE

> *At the beginning of combat on the party's turn, target creature the party controls gains "Whenever this creature attacks, it deals 1 damage to up to one target creature the Host controls. If that creature dies this turn, put a +1/+1 counter on this creature" until end of turn.*

**Timing:** Once each combat on the party's turn (triggered at the beginning of combat).  
**Limit:** Once each combat on the party's turn.  
**Resolution:** Choose target creature the party controls. It gains the listed attack-triggered ability until end of turn.

---

### 👹 ASPECT OF MALFEGOR

> *Once per encounter, a party member may sacrifice a nontoken permanent. Choose one based on the sacrificed permanent's type:*
>
> *• Land — That player searches their library for up to two basic land cards, puts them onto the battlefield tapped, then shuffles.*
>
> *• Creature — That player creates a 4/5 green Spirit creature token.*
>
> *• Noncreature, nonland permanent — That player exiles cards from the top of their library until they exile a nonland card with mana value less than or equal to the sacrificed permanent's mana value. They may cast that card without paying its mana cost. Put the rest on the bottom of that library in a random order.*

**Timing:** Any time the activating player could cast a sorcery, unless a separate effect allows otherwise.  
**Limit:** Once per encounter.  
**Resolution:** The activating player sacrifices a nontoken permanent they control, then resolves the matching mode for that permanent type.

---

### 💣 BOMB

> *Exile Bomb: Bomb deals 10 damage to any target.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once per run.  
**Resolution:** Choose any target. Bomb deals 10 damage to that target. After it resolves, exile this Trinket.

---

### 💥 BIG BOMB

> *Exile Big Bomb: Big Bomb deals 15 damage to any target.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once per run.  
**Resolution:** Choose any target. Big Bomb deals 15 damage to that target. After it resolves, exile this Trinket.

---

### ☢️ BIGGER BOMB

> *Exile Bigger Bomb: Bigger Bomb deals 20 damage to any target.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once per run.  
**Resolution:** Choose any target. Bigger Bomb deals 20 damage to that target. After it resolves, exile this Trinket.

---

### 🛡️ MIRROR SHIELD

> *At the beginning of each encounter, choose a party member's commander. It gets +0/+5 and gains "Whenever this creature is dealt combat damage, it deals that much damage to target opponent."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter (triggered).  
**Resolution:** Choose a party member's commander as the ability resolves. That commander gets +0/+5 and gains the listed triggered ability.

---

### 🧨 EXPLOSIVE BARREL

> *Once per encounter, if a party member would deal 3 or more noncombat damage, they may instead have it deal 5 damage to each creature target opponent controls.*

**Timing:** Replacement effect applied to a qualifying noncombat damage event.  
**Limit:** Once per encounter.  
**Resolution:** When a party member would deal 3 or more noncombat damage, they may replace that event with "deal 5 damage to each creature target opponent controls."

---

### 🐱 MITSY, ABANDONED

> *At the beginning of each encounter, a party member may begin the game with Marauder's Axe on the battlefield under their control.*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter (triggered).  
**Resolution:** As the ability resolves, a party member may put Marauder's Axe onto the battlefield under their control for that encounter.

---

### ⚪ MARBLES

> *Whenever a party member casts an instant or sorcery spell during their turn, that player creates one token at random: a 1/1 white Bird creature token with flying, a 1/1 black Rat creature token with deathtouch, or a 1/1 blue Fish creature token.*

**Timing:** Triggered whenever a party member casts an instant or sorcery spell during their turn.  
**Limit:** No additional activation limit.  
**Resolution:** Determine one of the three listed token outcomes at random, then create that token under that player's control.

---

### 🛒 CROSSROADS CART

> *When visiting Town, the party chooses two Travelers and resolves one of those two.*

**Timing:** During Town, when Travelers are determined.  
**Limit:** No additional activation limit beyond normal Town timing.  
**Resolution:** Instead of using a single Traveler option, present two Traveler options. The party chooses one to resolve.

---

### ⚔️ VOGAR, BOUND FOR DEATH

> *Once each party turn, party members may sacrifice any number of creatures. For each three creatures sacrificed this way, target party member creates a 6/5 black Zombie creature token with trample.*

**Timing:** Any time during the party turn that the party could cast a sorcery.  
**Limit:** Once each party turn.  
**Resolution:** Party members may sacrifice creatures they control. Count creatures sacrificed this way. For each full group of three, choose a party member to create one 6/5 black Zombie creature token with trample.

---

### 🗡️ SAL BIDARD, GLORY REFORGED

> *At the beginning of each combat, choose one until end of turn:*
>
> *• Sal Bidard — A party Target commander gains indestructible.*
>
> *• Ludwig — A party Target commander gains hexproof.*

**Timing:** Once each combat (triggered at the beginning of combat).  
**Limit:** Once each combat.  
**Resolution:** As the ability resolves, choose one mode and choose a commander. The chosen commander gains the chosen ability until end of turn.

---

### 🔥 CAMPFIRE

> *At the beginning of the party's end step, choose a party member. That player may choose one or both — They gain 2 life. They discard a card. If they do, they draw a card.*

**Timing:** Triggered at the beginning of the party's end step.  
**Limit:** Once each party end step (triggered).  
**Resolution:** Choose one party member. They may choose one or both: gain 2 life, or discard a card (and if they do, draw a card).

---

### ☠️ ARMAMENT OF DEATH

> *Once each turn, target creature gains "Whenever a creature dies, this creature gets a +1/+1 counter. This ability triggers only once each turn" until end of turn.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once each turn.  
**Resolution:** Choose target creature. It gains the listed triggered ability until end of turn.

---

### 🛡️ LOCH SHIELD

> *At the beginning of each encounter, choose a commander. That commander gains "This permanent enters the battlefield with two shield counters on it."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter (triggered).  
**Resolution:** Choose a commander as the ability resolves. That commander gains the listed static ability for the encounter.

---

### 🐉 AEGIS OF VERIX

> *At the beginning of each encounter, choose a party member's commander. That commander gains "Whenever this creature blocks, you may instead conjure a 4/4 red Dragon creature token with flying to block that creature instead. When you do, this creature loses this ability for the rest of this encounter."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered), with one replacement use per encounter on that commander.  
**Resolution:** Choose a party member's commander as the ability resolves. It gains the listed block-triggered ability for the encounter.

---

### 👁️ WATCHER'S EYE

> *The first two spells the party casts each turn cost {1} less to cast.*

**Timing:** Continuous cost reduction effect.  
**Limit:** Applies to the first two party-cast spells each turn.  
**Resolution:** Track spells cast by party members each turn. Apply {1} generic cost reduction to the first two such spells that turn.

---

### ⚡ TONITRUS, SKULLDUSTER

> *At the beginning of the party's upkeep, target creature the party controls with power 4 or greater gets +3/+0 and gains trample until end of turn.*

**Timing:** Triggered at the beginning of the party's upkeep.  
**Limit:** Once each party upkeep (triggered).  
**Resolution:** Choose target creature the party controls with power 4 or greater. It gets +3/+0 and gains trample until end of turn.

---

### 🐉 DRAGOVOKIA

> *Town actions that cost XP cost {5} less to activate. This reduction can't reduce a cost below {5}.*

**Timing:** Continuous cost reduction effect while this Trinket is active.  
**Limit:** Applies to eligible Town XP costs only.  
**Resolution:** When determining an XP cost for a Town action, reduce that cost by 5. If the resulting cost would be less than 5, it becomes 5 instead.

---

### ⚔️ GIDEON'S TRAINING SABER

> *At the start of each encounter, choose a party member's commander.*
>
> *That commander gets +1/+0 and vigilance.*
>
> *Whenever the chosen commander attacks or blocks, put a training counter on Gideon's Training Saber.*
>
> *As long as Gideon's Training Saber has six or more training counters, the chosen commander gets +1/+0 and first strike.*
>
> *As long as Gideon's Training Saber has twelve or more training counters, the chosen commander gets +1/+0 and indestructible during its owner's turn.*
>
> *Training counters on Gideon's Training Saber persist between encounters.*

**Timing:** Triggered at the start of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander for that encounter. That commander gets +1/+0 and vigilance. Track training counters on Gideon's Training Saber whenever that chosen commander attacks or blocks. If the Saber has six or more training counters, that chosen commander also gets +1/+0 and first strike. If the Saber has twelve or more training counters, that chosen commander also gets +1/+0 and indestructible during its owner's turn. Training counters persist between encounters.

---

### 🗡️ PIKEMAN

> *Once each combat: Target creature gains first strike until end of turn.*

**Timing:** Any time during combat phase, at instant speed.  
**Limit:** Once each combat.  
**Resolution:** Choose target creature. It gains first strike until end of turn.

---

### 🔦 ASHMOUTH LANTERN

> *At the beginning of each encounter, choose a party member. The first time that player loses life each encounter, they create a Treasure token and draw a card. Then Ashmouth Lantern deals 1 damage to that player.*

**Timing:** Triggered at the beginning of each encounter and each time the chosen player loses life for the first time that encounter.  
**Limit:** Once each encounter per chosen player.  
**Resolution:** At the start of each encounter, choose a party member. The first time that player loses life, they create a Treasure token, draw a card, and Ashmouth Lantern deals 1 damage to that player.

---

### ⚔️ PARASITE BLADE

> *At the beginning of each encounter, choose a party member's commander. The chosen commander gains "Whenever this creature deals combat damage to a player, you lose 1 life and draw a card."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander. It gains the listed triggered ability for the encounter.

---

### 📖 BLADE OF THE ARCHMAGUS

> *At the beginning of each encounter, choose a party member's commander. The chosen commander gains "Whenever you cast a noncreature spell that targets an opponent or a permanent an opponent controls, this creature deals 2 damage to any target."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander. It gains the listed triggered ability for the encounter.

---

### 🎃 CURSED PUMPKINS

> *Each pack from the Merchant is once per town for each player. The party can't visit the Cathedral, Upgrade, or Augment. XP gains are increased by 100%. This bonus is additive.*

**Timing:** Continuous effect while this Trinket is active.  
**Limit:** Applies to all eligible Town actions and pack generations throughout the run.  
**Resolution:** Limit Merchant pack generation to once per town per player. Prevent the party from visiting Cathedral, Upgrade, or Augment. Double all XP gains (this bonus stacks with other XP multipliers).

---

### 🧙 HU-BLOW, THE GOOD

> *Once each turn, a party member may cast a creature spell as though it had flash.*

**Timing:** Any time a party member could cast a spell.  
**Limit:** Once each turn.  
**Resolution:** Choose one creature spell a party member intends to cast. That spell may be cast at instant speed (as though it had flash).

---

### 👑 RUSTED CROWN

> *Party members begin each encounter with 5 additional maximum HP. Whenever a party member loses the game during an encounter, that player loses 5 maximum HP.*

**Timing:** Continuous effect while this Trinket is active, with loss trigger on player elimination.  
**Limit:** +5 max HP to each party member each encounter; −5 max HP for each player eliminated during an encounter.  
**Resolution:** Each party member starts each encounter with 5 additional maximum HP. If a party member loses the game during an encounter, they permanently lose 5 maximum HP (carried to the next encounter).

---

### 💎 TREASURE

> *When the party claims Treasure, each party member gains 25 XP and a Tier 1 Ticket. Then exile Treasure.*

**Timing:** When Treasure is resolved as a Town action or Cash Out reward.  
**Limit:** Once per run.  
**Resolution:** Each party member gains 25 XP and receives one Tier 1 Ticket. Then remove Treasure from play (exile it).

---

### 💰 HUGE TREASURE

> *When the party claims Huge Treasure, each party member gains 40 XP and three Tier 1 Tickets. Then exile Huge Treasure.*

**Timing:** When Huge Treasure is resolved as a Town action or Cash Out reward.  
**Limit:** Once per run.  
**Resolution:** Each party member gains 40 XP and receives three Tier 1 Tickets. Then remove Huge Treasure from play (exile it).

---

### 🔔 GRAVEBELL

> *Once each encounter, choose target nontoken creature the party controls. When that creature dies this turn, return it to the battlefield tapped under its owner's control at the beginning of the next end step. It's a black Zombie in addition to its other colors and types.*

**Timing:** Any time the party could cast a sorcery.  
**Limit:** Once each encounter.  
**Resolution:** Choose target nontoken creature the party controls. If that creature dies this turn, return it to the battlefield tapped at the beginning of the next end step as a black Zombie in addition to its other types and colors.

---

### 🔊 SHOVEL PILE

> *Once each town, the party chooses one — Shallow Dig: The party gains 15 XP. Deep Dig: Roll a d20. 1–9: The party gains 10 XP. 10–17: The party gains 25 XP. 18–20: The party gains 40 XP.*

**Timing:** During Town resolution, when Town actions are chosen.  
**Limit:** Once each town.  
**Resolution:** The party chooses one of two modes. Shallow Dig grants 15 XP. Deep Dig requires rolling a d20: 1–9 grants 10 XP, 10–17 grants 25 XP, 18–20 grants 40 XP.

---

### ⚱️ SAINT'S ASH

> *Once each encounter: If a party member would lose the game, the party may choose for that player's life total to become 1 instead.*

**Timing:** In response to a party member being dealt lethal damage or other elimination event.  
**Limit:** Once each encounter.  
**Resolution:** When a party member would lose the game, you may prevent that loss. Instead, set that player's life total to 1.

---

### 🔫 CANNON

> *Cannon enters the run with two powder counters on it. Once each party turn, a party member may remove any number of powder counters from Cannon. When they do, Cannon deals 3 damage to any target for each powder counter removed this way. Any player may pay {3} as a sorcery to put a powder counter on Cannon. Cannon can't have more than three powder counters on it.*

**Timing:** Any time the party could cast a sorcery or as part of a party turn.  
**Limit:** Once each party turn for removal; any time for adding counters.  
**Resolution:** Cannon starts with two powder counters. Once per party turn, remove any number of powder counters and deal 3 damage to any target for each removed. Anyone may pay {3} to add one powder counter (max three total).

---

### 🌾 BAG OF GRAIN

> *When the party claims Bag of Grain, each party member gains 4 maximum HP. Then exile Bag of Grain.*

**Timing:** When Bag of Grain is resolved as a reward or Town action.  
**Limit:** Once per run.  
**Resolution:** Each party member gains 4 maximum HP. Then remove Bag of Grain from play (exile it).

---

### 🛍️ CELESTINE, HAMA'S LIGHT

> *At the beginning of each encounter, choose a party member's commander. The chosen commander gains lifelink and "Noncreature spells you cast that target permanents you control cost {2} less to cast."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander. It gains lifelink and the listed cost-reduction ability for the encounter.

---

### 🏺 GUILD CHEST

> *Each party member may trade two additional times each town.*

**Timing:** Continuous effect while this Trinket is active, applied during Town visits.  
**Limit:** +2 additional trades per party member per town.  
**Resolution:** When visiting Town, each party member gains 2 additional trades beyond normal Town limits.

---

### 🍶 JAR OF OIL

> *Jar of Oil enters the run with three oil counters on it. Remove an oil counter from Jar of Oil: You gain 2 life. The next time you cast a red spell this encounter, that spell deals 3 damage to any target. Only a party member may activate this ability. When the last oil counter is removed from Jar of Oil, exile it.*

**Timing:** Sorcery speed.  
**Limit:** No per-turn limit beyond available counters.  
**Resolution:** Remove 1 oil counter. Gain 2 life. The next red spell you cast this encounter deals 3 damage to any target. When Jar of Oil has no oil counters, exile it.

---

### 💧 JAR OF WATER

> *Jar of Water enters the run with three water counters on it. Remove a water counter from Jar of Water: You gain 4 life. Only a party member may activate this ability. When the last water counter is removed from Jar of Water, exile it.*

**Timing:** Sorcery speed.  
**Limit:** No per-turn limit beyond available counters.  
**Resolution:** Remove 1 water counter and gain 4 life. When Jar of Water has no water counters, exile it.

---

### ⊡ VOID LANTERN

> *At the beginning of each encounter, exile the top card of each party member's library. Party members may play cards exiled with Void Lantern. Spells cast this way cost {1} less to cast.*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter (triggered).  
**Resolution:** Exile the top card of each party member's library face-up. Party members may play (but not cast as spells) cards exiled with Void Lantern, with {1} cost reduction applied to spells cast this way.

---

### 🌊 LANTERN OF THE DEEP

> *Whenever a party member ventures into the dungeon, each party member surveils 1. The first time the party completes a dungeon each encounter, each party member gains 20 XP.*

**Timing:** Triggered whenever a party member ventures and when a dungeon is completed.  
**Limit:** Survey triggers per venture; 20 XP bonus once per encounter when a dungeon is completed.  
**Resolution:** Each party member surveils 1 whenever any party member ventures. When the party completes a dungeon, each party member gains 20 XP (once per encounter).

---

### ☀️ THE SUNFORGED SLICER

> *At the beginning of each encounter, choose a party member's commander. The chosen commander gains "Whenever this creature deals combat damage to a player, you may discard up to two cards. Draw a card for each card discarded this way."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander. It gains the listed combat-damage triggered ability for the encounter.

---

### 🎭 AGGRESSIVE SKELETON // OPPRESSIVE SKELETON

> *At the beginning of the party's first upkeep each encounter, choose a party member. That player chooses one —*
>
> *• Oppressive Skeleton — Create a 1/1 black Skeleton creature token with "{1}: Regenerate this creature."*
>
> *• Aggressive Skeleton — Create a 4/1 black Skeleton creature token with menace and haste. Sacrifice it at the beginning of the next end step.*

**Timing:** Triggered at the beginning of the party's first upkeep each encounter.  
**Limit:** Once per encounter (first upkeep only).  
**Resolution:** Choose a party member. They choose one mode. Oppressive Skeleton creates a 1/1 black Skeleton with regeneration. Aggressive Skeleton creates a 4/1 black Skeleton with menace and haste that's sacrificed at the next end step.

---

### 👢 IRON BOOTS

> *Party commanders enter the battlefield tapped. Commanders the party controls have ward {2}.*

**Timing:** Continuous effect while this Trinket is active.  
**Limit:** Applies to all party commanders.  
**Resolution:** Party commanders enter tapped. All party commanders have ward {2}.

---

### 🎃 JACK-O-LANTERN

> *The party can't visit the Cathedral. XP gains are increased by 40%. This bonus is additive.*

**Timing:** Continuous effect while this Trinket is active.  
**Limit:** Prevents Cathedral visits; applies +40% XP multiplier.  
**Resolution:** The party cannot visit the Cathedral. Increase all XP gains by 40% (this bonus stacks with other XP multipliers).

---

### 🦷 MIMIC TOOTH

> *At the beginning of a party member's upkeep, target creature gains "Whenever this creature deals combat damage to an opponent, create a token that's a copy of that creature except it's a 1/1 Horror."*

**Timing:** Triggered at the beginning of each party member's upkeep.  
**Limit:** Once per upkeep.  
**Resolution:** Choose target creature. It gains the listed triggered ability until end of turn.

---

### 💪 GREAT THWACK

> *Once each combat: target creature gets +2/+2 and gains trample until end of turn.*

**Timing:** Any time during combat phase, at instant speed.  
**Limit:** Once each combat.  
**Resolution:** Choose target creature. It gets +2/+2 and gains trample until end of turn.

---

### 💰 GOLD BAG

> *When the party claims Gold Bag, each party member gains 10 XP. Then exile Gold Bag.*

**Timing:** When Gold Bag is resolved as a reward or Town action.  
**Limit:** Once per run.  
**Resolution:** Each party member gains 10 XP. Then remove Gold Bag from play (exile it).

---

### 🪬 TRIBAL TOTEM

> *At the beginning of each encounter, choose a creature type. Creatures of the chosen type the party controls get +1/+0. Whenever a creature of the chosen type dies, its controller gains 1 life.*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once per encounter type choice.  
**Resolution:** Choose a creature type. Party creatures of that type get +1/+0. Whenever such a creature dies, its controller gains 1 life.

---

### 🧟 WALKING CORPSE

> *At the beginning of each encounter, choose a party member. That player creates a 2/2 black Zombie creature token with menace. For that encounter, whenever a Zombie the chosen player controls dies, if it didn't have decayed, that player creates a 2/2 black Zombie creature token with decayed.*

**Timing:** Triggered at the beginning of each encounter and each time an eligible Zombie dies.  
**Limit:** Once per encounter for initial token; unlimited Zombie deaths per encounter.  
**Resolution:** Choose a party member. They create a 2/2 black Zombie with menace. For that encounter, when a Zombie they control dies without decayed, they create another 2/2 black Zombie with decayed.

---

### 🍽️ HUNGRY IDOL

> *At the beginning of each town, each party member removes a permanent card from their deck and gains 15 XP.*

**Timing:** Triggered at the beginning of each town visit.  
**Limit:** Once per town.  
**Resolution:** Each party member removes one permanent card from their deck and gains 15 XP.

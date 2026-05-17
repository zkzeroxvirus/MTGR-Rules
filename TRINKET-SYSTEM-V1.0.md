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

---

## RULES CONSTRAINTS

- A player may have at most 1 Trinket at a time
- Trinkets use the same global slot system as other persistent effect categories
- Trinket effects apply only as written on that Trinket
- If a Trinket would conflict with a core rule, the Host resolves the conflict using normal host adjudication

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

> *Once each combat, target creature gets +2/+0 and gains deathtouch until end of turn. Whenever that creature deals combat damage to a player this turn, draw a card.*

**Timing:** Once each combat, during combat, at any time a party member could cast an instant.  
**Limit:** Once each combat.  
**Resolution:** Choose target creature. It gets +2/+0 and gains deathtouch until end of turn. If that creature deals combat damage to a player this turn, its controller draws a card.

---

### 🔥 TORCH

> *At the beginning of the party's upkeep, choose a party member. That player ventures into the dungeon.*

**Timing:** Triggered at the beginning of each party upkeep.  
**Limit:** No per-encounter or per-turn activation limit.  
**Resolution:** Choose a party member as the ability resolves. That player ventures into the dungeon.

---

### ✨ STAFF OF LIGHT

> *Once each session, when a Doom card is played, counter that card. This ability can't be countered. Exile this Trinket.*

**Timing:** In response to a Doom card being played.  
**Limit:** Once each session.  
**Resolution:** Counter the Doom card. This Trinket ability cannot be countered. After it resolves, exile this Trinket.

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

> *Once each session, Bomb deals 10 damage to any target. Exile this Trinket.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once each session.  
**Resolution:** Choose any target. Bomb deals 10 damage to that target. After it resolves, exile this Trinket.

---

### 💥 BIG BOMB

> *Once each session, Big Bomb deals 15 damage to any target. Exile this Trinket.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once each session.  
**Resolution:** Choose any target. Big Bomb deals 15 damage to that target. After it resolves, exile this Trinket.

---

### ☢️ BIGGER BOMB

> *Once each session, Bigger Bomb deals 20 damage to any target. Exile this Trinket.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once each session.  
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

> *At the beginning of the party's end step, one party member may gain 2 life and discard a card. If they do, they draw a card.*

**Timing:** Triggered at the beginning of the party's end step.  
**Limit:** Once each party end step (triggered).  
**Resolution:** Choose one party member. That player may gain 2 life and discard a card. If they do, they draw a card.

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

# MTG Roguelike — Host Reference

> Generated from canonical rule units under `rules/`. Edit the source units, not this compilation.

## Before the Run

<!-- rule:game-overview -->
### **🎯 GAME OVERVIEW**

MTG Roguelike is a cooperative, run-based Commander variant where players form a party and face a Host-controlled series of encounters.

Each run progresses through escalating encounters, culminating in a final boss fight known as the **Crypt**.

Players must balance survival, progression, and risk as they push deeper into the run.

---

<!-- rule:player-structure -->
### **👥 PLAYER STRUCTURE**

 • Players form a party and act as a unified team  
 • The Host controls all encounters and opposing forces  
 • Players cooperate, but are not restricted from interacting with each other

---

<!-- rule:deckbuilding -->
### Magic: The Gathering Roguelike — Deckbuilding Clarifications V2.1

This document is the current source of truth for MTGR deck construction and deck interaction rules when older summaries conflict.

#### Commander generation and mulligans

Base deckbuilding Commander generation presents **5 random legal Commander cards** and the player chooses 1.

- **Brand of the Conclave:** +1 Commander option per Rank whenever Commander cards are generated during deckbuilding or by The Guild.
- **Brand of Recurrence:** +1 free Commander reroll per Rank during deckbuilding and when using The Guild.
- Each player otherwise begins with a base of **4 Commander Mulligans** before Encounter 1.

Other progression effects may further modify Commander generation or mulligans when their text explicitly says so.

#### Initial 100-card pool

Each player generates a personal **100-card pool** within their starting Commander's color identity, then drafts **22 cards** from that pool.

- Basic lands are not included in this generated pool.
- Stickers, Attractions, and Contraptions are rerolled and replaced.
- The whole 100-card pool cannot be rerolled.
- If one generated card is invalid or illegal for use, replace only that card.

This color-identity restriction applies to the **initial generated pool**. It is not a general restriction on cards a player may use during the run.

#### Starting lands

Initial deckbuilding uses **16 lands total** unless another effect changes that number.

Base dual-land allocation:

| Commander colors | Base dual lands |
|---|---:|
| 1 | 0 |
| 2 | 2 |
| 3 | 4 |
| 4 | 6 |
| 5 | 8 |

Fill the remaining land slots with basics.

**Brand of the Cartographer** modifies this allocation. Each Rank lets the player replace **2 additional basic lands** with dual lands or triomes during deckbuilding. This changes land quality, not the total starting land count.

#### Free Choice Card

Each player receives **1 Free Choice Card** during initial deckbuilding unless another effect grants more.

The Free Choice Card:

- **May be outside the player's Commander color identity.**
- Must otherwise be legal for use in Commander.
- Cannot be Sol Ring.
- Cannot be a Gamechanger unless another effect explicitly allows it.
- Receives the Scryfall decal after selection.

##### Initial-deckbuilding Scryfall duplicate restriction

This duplicate restriction applies **only while resolving initial deckbuilding**.

A card that was naturally drafted from the player's initial 100-card pool **may be selected once by a Scryfall-based free-card effect**, creating one duplicate copy of that drafted card. The spawned duplicate receives the **Scryfall decal** and is then treated as a Scryfall-spawned card.

After a card name has been spawned through a Scryfall-based free-card effect, that player may not use another Scryfall-based free-card effect during initial deckbuilding to create an additional copy of that same card.

This restriction applies to:

- the normal **Free Choice Card**;
- the additional free card granted by **One with Death**;
- the free Scryfall creature granted by **Fickle Duplicant**.

Examples:

- If a player drafts **Card A** from the 100-card pool, they may use their Free Choice Card to spawn a second **Card A**. That spawned copy is Scryfall-stamped.
- That player may not then use **One with Death** or **Fickle Duplicant** to spawn a third **Card A** during initial deckbuilding.
- If a card was not already drafted, a Scryfall-based free-card effect may spawn it normally, but another such effect may not spawn another copy of that same card during initial deckbuilding.

This rule does not by itself restrict cards gained later during the run. Later card acquisition follows the rule or effect that grants the card.

#### Scryfall status, trading, and captures

A card with a **Scryfall decal** is bound to the player who owns that card for the run.

- A Scryfall-stamped card **cannot be traded to another player**.
- A Scryfall-stamped card **cannot be captured**.
- A card granted through the **Capture system is treated as Scryfalled** for these restrictions, even if its physical decal or other marker is different.
- A card granted by a **card-producing Ticket** is also treated as Scryfalled. This includes cards such as **Sol Ring Ticket**, **Arcane Signet Ticket**, and **Leyline Ticket** cards.

Being treated as Scryfalled means the card follows all MTGR Scryfall restrictions that apply to cards, including the combo restriction below and the no-trading/no-capture rules above.

This classification does not mean that every Ticket, Capture, or progression effect is itself a card. It applies when that progression effect places or grants an actual Magic card for the player's run.

#### Combo, infinite, and Scryfall restrictions

- A **two-card combo that wins the game using only those two cards is banned**.
- A **two-card infinite is banned**, whether or not the infinite immediately wins the game.
- **Combos using three or more cards are allowed**, subject to all other MTGR restrictions.
- A card with a **Scryfall decal, or a card treated as Scryfalled by another MTGR rule, cannot be used as part of any combo**, regardless of how many cards the combo uses.

These restrictions apply to run decks for both Players and the Host unless another rule explicitly says otherwise.

#### Silence-effect restrictions

MTGR distinguishes a **full-turn silence** from a **conditional or partial silence**.

##### Banned: full-turn silence

A card or effect is banned if it can be used on the Host's turn **before the Host has a normal opportunity to cast a spell** and, once it resolves, prevents the Host from casting **all spells for the rest of that turn**.

Current banned examples:

- **Silence**
- **Orim's Chant**

The list is illustrative rather than exhaustive: a future card with the same practical effect is also banned even if it is not named here.

##### Allowed: conditional or partial silence

Silence-style interaction is allowed when it does **not** fully shut the Host out of casting spells for their entire turn. This includes effects that restrict only certain spell types, require a meaningful condition before the restriction applies, or can only be used after the Host has already had a normal opportunity to cast spells.

Allowed examples include:

- **Hope of Ghirapur** — prevents only noncreature spells and requires combat damage before its ability can target that player.
- **Ranger-Captain of Eos** — prevents only noncreature spells.
- **Mandate of Peace** — can only be cast during combat, after the Host has already had a normal precombat opportunity to cast spells.
- **Render Silent** — requires a spell to be cast first and only prevents additional spells for the remainder of that turn.

The deciding question is whether the effect can **fully deny the Host all spellcasting for the Host's turn before the Host gets to play that turn normally**. If yes, it is banned. If the restriction is conditional, partial, or begins only after the Host has already had a normal opportunity to cast spells, it is allowed unless another MTGR rule bans that card.

#### Deck minimum

The base deck minimum is **40 total cards: 1 Commander plus at least 39 cards in the library**.

**Brand of the Infinite Void** reduces the minimum library requirement by **1 card per Rank**.

Starting construction normally creates Commander + 39 before minimum-reducing effects are applied. During the run, cards may be added above the starting size; players are not required to return to exactly 39 library cards.

An effect that removes cards from the Deck must leave that player's library at or above their current modified minimum unless the effect explicitly overrides that minimum.

#### Sideboard

The Sideboard has **no size limit**.

When a player gains a card, they may normally place it into their Deck or Sideboard unless the effect says otherwise.

Moving existing cards between Deck and Sideboard is controlled by the effect that permits the move. The standard Town Bank allows up to **6 cards** to move between Deck and Sideboard during that Town visit.

#### Commander color identity during gameplay

Players **do not have to keep their Deck or Sideboard within their Commander's color identity during gameplay**.

Commander color identity applies only when a rule or effect explicitly uses it, including:

- the initial 100-card generated pool;
- Merchant **ID Pack** generation;
- another effect that specifically says its search or generation follows the current Commander color identity.

Merchant **Mystery, Pro, Mythic, and OTAG Packs are not restricted by Commander color identity**. Pro, Mythic, and OTAG still use their normal search-parameter requirements; those search parameters do not impose a color restriction.

Cards gained from unrestricted sources may be outside color identity and may remain in the Deck or Sideboard.

Changing Commander through The Guild does not make existing off-color cards illegal. The new Commander's identity is used for later effects that explicitly reference the player's current Commander color identity.

#### Pack quantity

A pack's printed or system-defined card count is its **base pack size**.

**Brand of the Open Hand** adds **+1 card per Rank** whenever that player opens a pack.

This increases the number of cards shown. It does **not** increase the number of cards kept unless another effect explicitly increases the keep limit.

For example, the Merchant normally opens a 15-card base pack and keeps 1 card. Brand of the Open Hand increases the number of cards shown while the normal keep-1 rule remains unchanged.

#### The Guild

The Guild's base Commander generation is **d6 + 2 Commander options** in the declared color combination.

Apply Brand modifiers after determining that base amount:

- Brand of the Conclave: +1 option per Rank.
- Brand of Recurrence: +1 free Commander reroll per Rank.

The old Commander may move to the player's Deck or Sideboard. Existing cards do not need to be removed for color-identity reasons after the Commander changes.

<!-- rule:banned-restricted -->
### **🚫 BANNED & RESTRICTED (MTGR)**

#### **🚫 FULL BAN**

• Show and Tell  
• **Full-turn silence effects:** effects that can be used before the Host has a normal opportunity to cast a spell and then prevent the Host from casting all spells for the rest of that turn. Current examples include **Silence** and **Orim's Chant**  
• Collective Voyage  
• Mana Abundance  
• Time Vault  
• Hermit Druid Avatar  
• Braids, Conjurer Adept Avatar  
• Staying Power  
• Rules Lawyer  
• Summoner's Bond  
• Richard Garfield, Ph.D.  
• Double Stroke  
• Veteran Explorer  
• Sovereign's Realm  
• Ocelot Pride  
• Cheering Crowd

**Silence clarification:** Conditional or partial silence-style effects are allowed when they do not fully deny the Host spellcasting for essentially the entire Host turn. Current allowed examples include **Hope of Ghirapur**, **Ranger-Captain of Eos**, **Mandate of Peace**, and **Render Silent**.

#### **⚠️ RESTRICTED**

• Extraplanar Lens: Cannot be obtained via Scryfall or targeted search  
• Join Forces (keyword): Cannot be obtained via Scryfall or targeted search  
• Oath of Lieges: Cannot be obtained via Scryfall or targeted search  
• Scholarship Sponsor: Cannot be obtained via Scryfall or targeted search  
• Ward of Bones: Cannot be obtained via Scryfall or targeted search  
• Zur's Weirding: Cannot be obtained via Scryfall or targeted search  
• Tree of Perdition: Cannot be used with Balloon effects  

Applies to all MTGR runs unless overridden by the Host.

---

<!-- rule:pre-encounter-setup -->
### **1 — Event and Trinket**

Before the First Encounter  
Resolve both in this order:  
 • Event (cannot be a Bad Stuff Event)  
 • Trinket

Seat swap window (one-time):
 • After deckbuilding is complete and before Encounter 1 begins, players may swap seats to a table configuration that works best for them
 • After Encounter 1 begins, seat swapping is no longer allowed
 • Planned future seat-change options tied to a Building or Trinket are not active yet

Resolve the Event using the Event System flow, then resolve the Trinket using the Trinket System flow.

Then before every encounter thereafter resolve Event(s) based on Town/Stay Out rules.

---

<!-- rule:trinket-system -->
### TRINKET SYSTEM V1.0

The Trinket System defines how Trinkets are selected and applied in a run.

A Trinket is a pre-encounter run modifier chosen before Encounter 1.

---

#### PURPOSE

Trinkets provide an early strategic boost and increase run variety.

Trinkets are part of pre-encounter setup and are not resolved mid-encounter.

---

#### TIMING

Trinkets are resolved in the pre-first-encounter setup step after the starting Event is resolved.

Starting setup order:

- Event (cannot be Bad; Ambush counts as Bad)
- Trinket

Seat-swap window:

- After deckbuilding and before Encounter 1 begins, players may make one seat-swap adjustment
- After Encounter 1 begins, seat swapping is no longer allowed

---

#### STANDARD SELECTION FLOW

When using the normal table flow:

1. Present 3 random Trinkets from the Trinket pool
2. Players vote on one Trinket
3. Apply that Trinket for the run

---

#### TRINKET TICKET OVERRIDE

If a player has an active Trinket Ticket:

1. Present 3 random Trinkets from the same normal Trinket pool
2. That player chooses 1 Trinket (no table vote required)
3. Apply the chosen Trinket for the run

This occurs during pre-game setup before Encounter 1.

Ticket slot limits are per player, not per party.

---

#### RULES CONSTRAINTS

- A player may have at most 1 Trinket at a time
- Trinket effects apply only as written on that Trinket
- If a Trinket would conflict with a core rule, the Host resolves the conflict using normal host adjudication
- The party is not capped at one total Trinket by this rule; this is a per-player limit

Unless otherwise specified on the Trinket, any party member may use that Trinket.

Normal Trinkets are party property for the duration of the run.

If a Trinket was created by a player's Trinket Ticket, that Trinket is tied to that player for session ownership purposes. If that player leaves the session, the Trinket is removed at the end of the current encounter.

If that player leaves during an encounter, the rest of the party may pilot that player's deck until the encounter ends. The Trinket remains active for the rest of that encounter, then is removed.

---

#### INTERACTION WITH EVENTS

The pre-first-encounter step resolves Event and Trinket, in that order.

The starting Event cannot be Bad. Ambush counts as Bad and is also excluded.

After Encounter 1 begins, Event timing follows the normal Town/Stay Out/Event systems.

---

#### RELATED RULES

- Pre-first-encounter timing: `pre-encounter-setup`
- Core run flow: `game-loop`
- Persistent Ticket and account progression: `progression-reference`
- Persistent Essence purchases: `progression-shop`

---

<!-- rule:trinket-the-device -->
### 🔧 THE DEVICE

> *Once per encounter, a party member may counter a spell they control. If they do, conjure 3 random spells. That player may cast 1 of those spells without paying its mana cost. Exile the rest.*

**Timing:** In response to a spell a party member controls.  
**Limit:** Once per encounter.  
**Resolution:** Counter target spell a party member controls. Conjure 3 random spells face-up. The activating player may cast 1 of those spells without paying its mana cost. Exile the remaining spells.

---

<!-- rule:trinket-garruk-s-clipper -->
### 🪓 GARRUK'S CLIPPER

> *At the beginning of the party's upkeep, target creature the party controls gets +2/+0 and gains deathtouch and "Whenever this creature deals combat damage to a player, draw a card" until end of turn.*

**Timing:** Triggered at the beginning of the party's upkeep.  
**Limit:** Once per party upkeep.  
**Resolution:** Choose target creature the party controls. It gets +2/+0 and gains deathtouch. It also gains "Whenever this creature deals combat damage to a player, draw a card" until end of turn.

---

<!-- rule:trinket-torch -->
### 🔥 TORCH

> *At the beginning of the party's upkeep, choose a party member. That player ventures into the dungeon.*

**Timing:** Triggered at the beginning of each party upkeep.  
**Limit:** No per-encounter or per-turn activation limit.  
**Resolution:** Choose a party member as the ability resolves. That player ventures into the dungeon.

---

<!-- rule:trinket-staff-of-light -->
### ✨ STAFF OF LIGHT

> *Exile Staff of Light: Counter target Doom triggered ability. This ability can't be countered.*

**Timing:** In response to a Doom card's triggered ability after the Doom card is turned face up.  
**Limit:** Once per run.  
**Resolution:** Counter the Doom triggered ability. This Trinket ability cannot be countered. After it resolves, exile this Trinket.

---

<!-- rule:trinket-jar-of-wine -->
### 🍷 JAR OF WINE

> *This Trinket enters with 3 wine counters on it. A party member may remove a wine counter at sorcery speed. If they do, they gain 7 life, then discard a card at random. If a card is discarded this way, they draw a card. When no wine counters remain on this Trinket, exile it.*

**Timing:** Sorcery speed.  
**Limit:** No per-turn limit beyond available counters.  
**Resolution:** Remove 1 wine counter. The activating player gains 7 life, then discards a card at random. If they discarded a card this way, they draw a card. If this Trinket has no wine counters on it, exile it.

---

<!-- rule:trinket-jar-of-honey -->
### 🍯 JAR OF HONEY

> *This Trinket enters with 2 honey counters on it. A party member may remove a honey counter at sorcery speed. If they do, they gain 9 life and remove all poison counters from themselves. When no honey counters remain on this Trinket, exile it.*

**Timing:** Sorcery speed.  
**Limit:** No per-turn limit beyond available counters.  
**Resolution:** Remove 1 honey counter. The activating player gains 9 life and removes all poison counters from themselves. If this Trinket has no honey counters on it, exile it.

---

<!-- rule:trinket-tent -->
### ⛺ TENT

> *Tent modifies Stay Out. Whenever the party chooses Stay Out, resolve normal Stay Out effects, then each party member may make up to 2 trades, remove up to 2 cards from their deck, and move up to 6 cards between their deck and sideboard.*

**Timing:** During Stay Out resolution after choosing Stay Out.  
**Limit:** No additional limit beyond normal path selection timing.  
**Resolution:** Apply normal Stay Out rewards and Event scaling first. Then each party member may resolve all listed Tent actions within those limits.

---

<!-- rule:trinket-thirsting-axe -->
### 🪓 THIRSTING AXE

> *At the beginning of combat on the party's turn, target creature the party controls gains "Whenever this creature attacks, it deals 1 damage to up to one target creature the Host controls. If that creature dies this turn, put a +1/+1 counter on this creature" until end of turn.*

**Timing:** Once each combat on the party's turn (triggered at the beginning of combat).  
**Limit:** Once each combat on the party's turn.  
**Resolution:** Choose target creature the party controls. It gains the listed attack-triggered ability until end of turn.

---

<!-- rule:trinket-aspect-of-malfegor -->
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

<!-- rule:trinket-bomb -->
### 💣 BOMB

> *Exile Bomb: Bomb deals 10 damage to any target.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once per run.  
**Resolution:** Choose any target. Bomb deals 10 damage to that target. After it resolves, exile this Trinket.

---

<!-- rule:trinket-big-bomb -->
### 💥 BIG BOMB

> *Exile Big Bomb: Big Bomb deals 15 damage to any target.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once per run.  
**Resolution:** Choose any target. Big Bomb deals 15 damage to that target. After it resolves, exile this Trinket.

---

<!-- rule:trinket-bigger-bomb -->
### ☢️ BIGGER BOMB

> *Exile Bigger Bomb: Bigger Bomb deals 20 damage to any target.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once per run.  
**Resolution:** Choose any target. Bigger Bomb deals 20 damage to that target. After it resolves, exile this Trinket.

---

<!-- rule:trinket-mirror-shield -->
### 🛡️ MIRROR SHIELD

> *At the beginning of each encounter, choose a party member's commander. It gets +0/+5 and gains "Whenever this creature is dealt combat damage, it deals that much damage to target opponent."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter (triggered).  
**Resolution:** Choose a party member's commander as the ability resolves. That commander gets +0/+5 and gains the listed triggered ability.

---

<!-- rule:trinket-explosive-barrel -->
### 🧨 EXPLOSIVE BARREL

> *Once per encounter, if a party member would deal 3 or more noncombat damage, they may instead have it deal 5 damage to each creature target opponent controls.*

**Timing:** Replacement effect applied to a qualifying noncombat damage event.  
**Limit:** Once per encounter.  
**Resolution:** When a party member would deal 3 or more noncombat damage, they may replace that event with "deal 5 damage to each creature target opponent controls."

---

<!-- rule:trinket-mitsy-abandoned -->
### 🐱 MITSY, ABANDONED

> *At the beginning of each encounter, a party member may begin the game with Marauder's Axe on the battlefield under their control.*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter (triggered).  
**Resolution:** As the ability resolves, a party member may put Marauder's Axe onto the battlefield under their control for that encounter.

---

<!-- rule:trinket-marbles -->
### ⚪ MARBLES

> *Whenever a party member casts an instant or sorcery spell during their turn, that player creates one token at random: a 1/1 white Bird creature token with flying, a 1/1 black Rat creature token with deathtouch, or a 1/1 blue Fish creature token.*

**Timing:** Triggered whenever a party member casts an instant or sorcery spell during their turn.  
**Limit:** No additional activation limit.  
**Resolution:** Determine one of the three listed token outcomes at random, then create that token under that player's control.

---

<!-- rule:trinket-crossroads-cart -->
### 🛒 CROSSROADS CART

> *When visiting Town, the party chooses two Travelers and resolves one of those two.*

**Timing:** During Town, when Travelers are determined.  
**Limit:** No additional activation limit beyond normal Town timing.  
**Resolution:** Instead of using a single Traveler option, present two Traveler options. The party chooses one to resolve.

---

<!-- rule:trinket-vogar-bound-for-death -->
### ⚔️ VOGAR, BOUND FOR DEATH

> *Once each party turn, party members may sacrifice any number of creatures. For each three creatures sacrificed this way, target party member creates a 6/5 black Zombie creature token with trample.*

**Timing:** Any time during the party turn that the party could cast a sorcery.  
**Limit:** Once each party turn.  
**Resolution:** Party members may sacrifice creatures they control. Count creatures sacrificed this way. For each full group of three, choose a party member to create one 6/5 black Zombie creature token with trample.

---

<!-- rule:trinket-sal-bidard-glory-reforged -->
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

<!-- rule:trinket-campfire -->
### 🔥 CAMPFIRE

> *At the beginning of the party's end step, choose a party member. That player may choose one or both — They gain 2 life. They discard a card. If they do, they draw a card.*

**Timing:** Triggered at the beginning of the party's end step.  
**Limit:** Once each party end step (triggered).  
**Resolution:** Choose one party member. They may choose one or both: gain 2 life, or discard a card (and if they do, draw a card).

---

<!-- rule:trinket-armament-of-death -->
### ☠️ ARMAMENT OF DEATH

> *Once each turn, target creature gains "Whenever a creature dies, this creature gets a +1/+1 counter. This ability triggers only once each turn" until end of turn.*

**Timing:** Any time the party could cast an instant.  
**Limit:** Once each turn.  
**Resolution:** Choose target creature. It gains the listed triggered ability until end of turn.

---

<!-- rule:trinket-loch-shield -->
### 🛡️ LOCH SHIELD

> *At the beginning of each encounter, choose a commander. That commander gains "This permanent enters the battlefield with two shield counters on it."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter (triggered).  
**Resolution:** Choose a commander as the ability resolves. That commander gains the listed static ability for the encounter.

---

<!-- rule:trinket-aegis-of-verix -->
### 🐉 AEGIS OF VERIX

> *At the beginning of each encounter, choose a party member's commander. That commander gains "Whenever this creature blocks, you may instead conjure a 4/4 red Dragon creature token with flying to block that creature instead. When you do, this creature loses this ability for the rest of this encounter."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered), with one replacement use per encounter on that commander.  
**Resolution:** Choose a party member's commander as the ability resolves. It gains the listed block-triggered ability for the encounter.

---

<!-- rule:trinket-watcher-s-eye -->
### 👁️ WATCHER'S EYE

> *The first two spells the party casts each turn cost {1} less to cast.*

**Timing:** Continuous cost reduction effect.  
**Limit:** Applies to the first two party-cast spells each turn.  
**Resolution:** Track spells cast by party members each turn. Apply {1} generic cost reduction to the first two such spells that turn.

---

<!-- rule:trinket-tonitrus-skullduster -->
### ⚡ TONITRUS, SKULLDUSTER

> *At the beginning of the party's upkeep, target creature the party controls with power 4 or greater gets +3/+0 and gains trample until end of turn.*

**Timing:** Triggered at the beginning of the party's upkeep.  
**Limit:** Once each party upkeep (triggered).  
**Resolution:** Choose target creature the party controls with power 4 or greater. It gets +3/+0 and gains trample until end of turn.

---

<!-- rule:trinket-dragovokia -->
### 🐉 DRAGOVOKIA

> *Town actions that cost XP cost {5} less to activate. This reduction can't reduce a cost below {5}.*

**Timing:** Continuous cost reduction effect while this Trinket is active.  
**Limit:** Applies to eligible Town XP costs only.  
**Resolution:** When determining an XP cost for a Town action, reduce that cost by 5. If the resulting cost would be less than 5, it becomes 5 instead.

---

<!-- rule:trinket-gideon-s-training-saber -->
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

<!-- rule:trinket-pikeman -->
### 🗡️ PIKEMAN

> *Once each combat: Target creature gains first strike until end of turn.*

**Timing:** Any time during combat phase, at instant speed.  
**Limit:** Once each combat.  
**Resolution:** Choose target creature. It gains first strike until end of turn.

---

<!-- rule:trinket-ashmouth-lantern -->
### 🔦 ASHMOUTH LANTERN

> *At the beginning of each encounter, choose a party member. The first time that player loses life each encounter, they create a Treasure token and draw a card. Then Ashmouth Lantern deals 1 damage to that player.*

**Timing:** Triggered at the beginning of each encounter and each time the chosen player loses life for the first time that encounter.  
**Limit:** Once each encounter per chosen player.  
**Resolution:** At the start of each encounter, choose a party member. The first time that player loses life, they create a Treasure token, draw a card, and Ashmouth Lantern deals 1 damage to that player.

---

<!-- rule:trinket-parasite-blade -->
### ⚔️ PARASITE BLADE

> *At the beginning of each encounter, choose a party member's commander. The chosen commander gains "Whenever this creature deals combat damage to a player, you lose 1 life and draw a card."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander. It gains the listed triggered ability for the encounter.

---

<!-- rule:trinket-blade-of-the-archmagus -->
### 📖 BLADE OF THE ARCHMAGUS

> *At the beginning of each encounter, choose a party member's commander. The chosen commander gains "Whenever you cast a noncreature spell that targets an opponent or a permanent an opponent controls, this creature deals 2 damage to any target."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander. It gains the listed triggered ability for the encounter.

---

<!-- rule:trinket-cursed-pumpkins -->
### 🎃 CURSED PUMPKINS

> *Each pack from the Merchant is once per town for each player. The party can't visit the Cathedral, Upgrade, or Augment. XP gains are increased by 100%. This bonus is additive.*

**Timing:** Continuous effect while this Trinket is active.  
**Limit:** Applies to all eligible Town actions and pack generations throughout the run.  
**Resolution:** Limit Merchant pack generation to once per town per player. Prevent the party from visiting Cathedral, Upgrade, or Augment. Double all XP gains (this bonus stacks with other XP multipliers).

---

<!-- rule:trinket-hu-blow-the-good -->
### 🧙 HU-BLOW, THE GOOD

> *Once each turn, a party member may cast a creature spell as though it had flash.*

**Timing:** Any time a party member could cast a spell.  
**Limit:** Once each turn.  
**Resolution:** Choose one creature spell a party member intends to cast. That spell may be cast at instant speed (as though it had flash).

---

<!-- rule:trinket-rusted-crown -->
### 👑 RUSTED CROWN

> *Party members begin each encounter with 5 additional maximum HP. Whenever a party member loses the game during an encounter, that player loses 5 maximum HP.*

**Timing:** Continuous effect while this Trinket is active, with loss trigger on player elimination.  
**Limit:** +5 max HP to each party member each encounter; −5 max HP for each player eliminated during an encounter.  
**Resolution:** Each party member starts each encounter with 5 additional maximum HP. If a party member loses the game during an encounter, they permanently lose 5 maximum HP (carried to the next encounter).

---

<!-- rule:trinket-treasure -->
### 💎 TREASURE

> *When the party claims Treasure, each party member gains 25 XP and a Tier 1 Ticket. Then exile Treasure.*

**Timing:** When Treasure is resolved as a Town action or Cash Out reward.  
**Limit:** Once per run.  
**Resolution:** Each party member gains 25 XP and receives one Tier 1 Ticket. Then remove Treasure from play (exile it).

---

<!-- rule:trinket-huge-treasure -->
### 💰 HUGE TREASURE

> *When the party claims Huge Treasure, each party member gains 40 XP and three Tier 1 Tickets. Then exile Huge Treasure.*

**Timing:** When Huge Treasure is resolved as a Town action or Cash Out reward.  
**Limit:** Once per run.  
**Resolution:** Each party member gains 40 XP and receives three Tier 1 Tickets. Then remove Huge Treasure from play (exile it).

---

<!-- rule:trinket-gravebell -->
### 🔔 GRAVEBELL

> *Once each encounter, choose target nontoken creature the party controls. When that creature dies this turn, return it to the battlefield tapped under its owner's control at the beginning of the next end step. It's a black Zombie in addition to its other colors and types.*

**Timing:** Any time the party could cast a sorcery.  
**Limit:** Once each encounter.  
**Resolution:** Choose target nontoken creature the party controls. If that creature dies this turn, return it to the battlefield tapped at the beginning of the next end step as a black Zombie in addition to its other types and colors.

---

<!-- rule:trinket-shovel-pile -->
### 🔊 SHOVEL PILE

> *Once each town, the party chooses one — Shallow Dig: The party gains 15 XP. Deep Dig: Roll a d20. 1–9: The party gains 10 XP. 10–17: The party gains 25 XP. 18–20: The party gains 40 XP.*

**Timing:** During Town resolution, when Town actions are chosen.  
**Limit:** Once each town.  
**Resolution:** The party chooses one of two modes. Shallow Dig grants 15 XP. Deep Dig requires rolling a d20: 1–9 grants 10 XP, 10–17 grants 25 XP, 18–20 grants 40 XP.

---

<!-- rule:trinket-saint-s-ash -->
### ⚱️ SAINT'S ASH

> *Once each encounter: If a party member would lose the game, the party may choose for that player's life total to become 1 instead.*

**Timing:** In response to a party member being dealt lethal damage or other elimination event.  
**Limit:** Once each encounter.  
**Resolution:** When a party member would lose the game, you may prevent that loss. Instead, set that player's life total to 1.

---

<!-- rule:trinket-cannon -->
### 🔫 CANNON

> *Cannon enters the run with two powder counters on it. Once each party turn, a party member may remove any number of powder counters from Cannon. When they do, Cannon deals 3 damage to any target for each powder counter removed this way. Any player may pay {3} as a sorcery to put a powder counter on Cannon. Cannon can't have more than three powder counters on it.*

**Timing:** Any time the party could cast a sorcery or as part of a party turn.  
**Limit:** Once each party turn for removal; any time for adding counters.  
**Resolution:** Cannon starts with two powder counters. Once per party turn, remove any number of powder counters and deal 3 damage to any target for each removed. Anyone may pay {3} to add one powder counter (max three total).

---

<!-- rule:trinket-bag-of-grain -->
### 🌾 BAG OF GRAIN

> *When the party claims Bag of Grain, each party member gains 4 maximum HP. Then exile Bag of Grain.*

**Timing:** When Bag of Grain is resolved as a reward or Town action.  
**Limit:** Once per run.  
**Resolution:** Each party member gains 4 maximum HP. Then remove Bag of Grain from play (exile it).

---

<!-- rule:trinket-celestine-hama-s-light -->
### 🛍️ CELESTINE, HAMA'S LIGHT

> *At the beginning of each encounter, choose a party member's commander. The chosen commander gains lifelink and "Noncreature spells you cast that target permanents you control cost {2} less to cast."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander. It gains lifelink and the listed cost-reduction ability for the encounter.

---

<!-- rule:trinket-guild-chest -->
### 🏺 GUILD CHEST

> *Each party member may trade two additional times each town.*

**Timing:** Continuous effect while this Trinket is active, applied during Town visits.  
**Limit:** +2 additional trades per party member per town.  
**Resolution:** When visiting Town, each party member gains 2 additional trades beyond normal Town limits.

---

<!-- rule:trinket-jar-of-oil -->
### 🍶 JAR OF OIL

> *Jar of Oil enters the run with three oil counters on it. Remove an oil counter from Jar of Oil: You gain 2 life. The next time you cast a red spell this encounter, that spell deals 3 damage to any target. Only a party member may activate this ability. When the last oil counter is removed from Jar of Oil, exile it.*

**Timing:** Sorcery speed.  
**Limit:** No per-turn limit beyond available counters.  
**Resolution:** Remove 1 oil counter. Gain 2 life. The next red spell you cast this encounter deals 3 damage to any target. When Jar of Oil has no oil counters, exile it.

---

<!-- rule:trinket-jar-of-water -->
### 💧 JAR OF WATER

> *Jar of Water enters the run with three water counters on it. Remove a water counter from Jar of Water: You gain 4 life. Only a party member may activate this ability. When the last water counter is removed from Jar of Water, exile it.*

**Timing:** Sorcery speed.  
**Limit:** No per-turn limit beyond available counters.  
**Resolution:** Remove 1 water counter and gain 4 life. When Jar of Water has no water counters, exile it.

---

<!-- rule:trinket-void-lantern -->
### ⊡ VOID LANTERN

> *At the beginning of each encounter, exile the top card of each party member's library. Party members may play cards exiled with Void Lantern. Spells cast this way cost {1} less to cast.*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter (triggered).  
**Resolution:** Exile the top card of each party member's library face-up. Party members may play (but not cast as spells) cards exiled with Void Lantern, with {1} cost reduction applied to spells cast this way.

---

<!-- rule:trinket-lantern-of-the-deep -->
### 🌊 LANTERN OF THE DEEP

> *Whenever a party member ventures into the dungeon, each party member surveils 1. The first time the party completes a dungeon each encounter, each party member gains 20 XP.*

**Timing:** Triggered whenever a party member ventures and when a dungeon is completed.  
**Limit:** Survey triggers per venture; 20 XP bonus once per encounter when a dungeon is completed.  
**Resolution:** Each party member surveils 1 whenever any party member ventures. When the party completes a dungeon, each party member gains 20 XP (once per encounter).

---

<!-- rule:trinket-the-sunforged-slicer -->
### ☀️ THE SUNFORGED SLICER

> *At the beginning of each encounter, choose a party member's commander. The chosen commander gains "Whenever this creature deals combat damage to a player, you may discard up to two cards. Draw a card for each card discarded this way."*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once each encounter choice (triggered).  
**Resolution:** Choose a party member's commander. It gains the listed combat-damage triggered ability for the encounter.

---

<!-- rule:trinket-aggressive-skeleton-oppressive-skeleton -->
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

<!-- rule:trinket-iron-boots -->
### 👢 IRON BOOTS

> *Party commanders enter the battlefield tapped. Commanders the party controls have ward {2}.*

**Timing:** Continuous effect while this Trinket is active.  
**Limit:** Applies to all party commanders.  
**Resolution:** Party commanders enter tapped. All party commanders have ward {2}.

---

<!-- rule:trinket-jack-o-lantern -->
### 🎃 JACK-O-LANTERN

> *The party can't visit the Cathedral. XP gains are increased by 40%. This bonus is additive.*

**Timing:** Continuous effect while this Trinket is active.  
**Limit:** Prevents Cathedral visits; applies +40% XP multiplier.  
**Resolution:** The party cannot visit the Cathedral. Increase all XP gains by 40% (this bonus stacks with other XP multipliers).

---

<!-- rule:trinket-mimic-tooth -->
### 🦷 MIMIC TOOTH

> *At the beginning of a party member's upkeep, target creature gains "Whenever this creature deals combat damage to an opponent, create a token that's a copy of that creature except it's a 1/1 Horror."*

**Timing:** Triggered at the beginning of each party member's upkeep.  
**Limit:** Once per upkeep.  
**Resolution:** Choose target creature. It gains the listed triggered ability until end of turn.

---

<!-- rule:trinket-great-thwack -->
### 💪 GREAT THWACK

> *Once per Turn during Combat:*
>
> *Target creature gets +2/+2 and gains trample until end of turn.*

**Timing:** During combat, at instant speed.  
**Limit:** Once per turn.  
**Resolution:** Choose target creature. It gets +2/+2 and gains trample until end of turn.

---

<!-- rule:trinket-gold-bag -->
### 💰 GOLD BAG

> *When the party claims Gold Bag, each party member gains 10 XP. Then exile Gold Bag.*

**Timing:** When Gold Bag is resolved as a reward or Town action.  
**Limit:** Once per run.  
**Resolution:** Each party member gains 10 XP. Then remove Gold Bag from play (exile it).

---

<!-- rule:trinket-tribal-totem -->
### 🪬 TRIBAL TOTEM

> *At the beginning of each encounter, choose a creature type. Creatures of the chosen type the party controls get +1/+0. Whenever a creature of the chosen type dies, its controller gains 1 life.*

**Timing:** Triggered at the beginning of each encounter.  
**Limit:** Once per encounter type choice.  
**Resolution:** Choose a creature type. Party creatures of that type get +1/+0. Whenever such a creature dies, its controller gains 1 life.

---

<!-- rule:trinket-walking-corpse -->
### 🧟 WALKING CORPSE

> *At the beginning of each encounter, choose a party member. That player creates a 2/2 black Zombie creature token with menace. For that encounter, whenever a Zombie the chosen player controls dies, if it didn't have decayed, that player creates a 2/2 black Zombie creature token with decayed.*

**Timing:** Triggered at the beginning of each encounter and each time an eligible Zombie dies.  
**Limit:** Once per encounter for initial token; unlimited Zombie deaths per encounter.  
**Resolution:** Choose a party member. They create a 2/2 black Zombie with menace. For that encounter, when a Zombie they control dies without decayed, they create another 2/2 black Zombie with decayed.

---

<!-- rule:trinket-hungry-idol -->
### 🍽️ HUNGRY IDOL

> *At the beginning of each town, each party member removes a permanent card from their deck and gains 15 XP.*

**Timing:** Triggered at the beginning of each town visit.  
**Limit:** Once per town.  
**Resolution:** Each party member removes one permanent card from their deck and gains 15 XP.

<!-- rule:run-structure -->
### Run Structure

#### **🔁 RUN OVERVIEW**

A run is a sequence of encounters culminating in a final boss.

Standard run structure:

1. **Encounter 1**  
2. **Encounter 2**  
3. **Encounter 3**  
4. **Final Boss (Crypt Fight)**

Variant run structure:

1. **Encounter 1**  
2. **Encounter 2**  
3. **Encounter 3**  
4. **Encounter 4**  
5. **Final Boss (Crypt Fight)**

After each victorious encounter, players gain rewards and choose how to proceed before continuing.

---

#### **👥 PLAYER COUNT**

* The game supports **1–6 players**  
* Many systems scale based on player count, including:  
  * Host Health  
  * Rewards  
  * Encounter difficulty
  * The Authority and Doom components of the **Host Scaling Power layer (Host Authority)**
* The complete Host Scaling Power layer is **Authority + Doom + Demonic Persistence + Arcane Suppression**
* Demonic Persistence and Arcane Suppression are always active regardless of player count

---

#### **🎯 OBJECTIVE**

The goal of a run is to defeat the **Final Boss (Crypt)**.

To reach the Crypt, players must successfully defeat all prior encounters.

---

#### **❤️ BETWEEN-ENCOUNTER RESET**

After each encounter, players reset to full HP before the next encounter path resolves.

Health wording reminder: "lose/gain X life" affects current life only. Permanent health changes must explicitly say **"Max HP/Life"**.

This full reset applies whether the party chooses:

* Town  
* Stay Out

---

<!-- rule:starting-land-balance -->
### **⚖️ STARTING LAND BALANCE RULE**

If a player starts with lands in play:

• The Host creates that many **Wastes**  
 • They enter the battlefield at the start of the game

---

<!-- rule:global-limits -->
### **⚖️ GLOBAL LIMITS**

Each player must have:  
 • 1 Commander  
 • A library at or above their **modified deck minimum** — base minimum is 39 non-Commander cards, reduced by **Brand of the Infinite Void** by 1 per Rank

Each player may have:  
 • An **unlimited-size Sideboard**  
 • 4 Buff Slots (Includes Crypt Buffs, Achievements, Tickets and Captures.)  
 • 1 Partner  
 • 1 Background  
 • 1 Conspiracy  
 • 1 Vanguard  
 • 1 Emblem  
 • 1 Trinket
 • 1 Companion

---

## Encounter Loop

<!-- rule:player-health -->
### **❤️ PLAYER HEALTH, HEALING, AND MAX HP**

• Each player's max health starts at **20**, unless an effect (for example, a Crypt buff) increases their **Max HP/Life**
• Players heal up to their current max health
• "Lose X life" and "gain X life" change current life only unless stated otherwise
• Permanent health changes are only effects that explicitly say **"Max HP/Life"**

Terminology rule:
• If an effect does not say **"Max HP/Life"**, it is not a permanent max health change

---

<!-- rule:game-loop -->
### **🔄 GAME LOOP**

The core gameplay loop is as follows:

#### Encounter → Rewards (Victory) → Choice → Events → Next Encounter

1. Resolve an **Encounter**  
2. Gain **Rewards** if victorious (XP, Loot, Cash Outs) — skipped on a loss  
3. Choose:  
   * **Return to Town**  
   * **Stay Out**  
4. Resolve **Event(s)**  
5. Begin the next **Encounter**

This loop repeats until the Crypt is reached.

Before Encounter 1, resolve the pre-run setup step from the core rules (Event and Trinket, in that order). The starting Event cannot be a Bad Stuff Event. After deckbuilding and before Encounter 1 begins, players may make one seat-swap adjustment; no seat swapping is allowed after Encounter 1 begins.

---

<!-- rule:party-combat-interactions -->
### **⚔️ PARTY COMBAT INTERACTIONS**

The party shares one combat step and declares all attackers simultaneously, but each player remains the controller of their own creatures.

#### Attacking alone and controller-local checks

For effects that care whether a creature **attacks alone**, or otherwise ask how many creatures **that player controls** attacked, evaluate each player's attackers separately.

Example:

* Player A attacks with exactly one creature.
* Player B also attacks with exactly one creature during the same party combat.
* Player A's creature is considered to have **attacked alone** for Player A.
* Player B's creature is considered to have **attacked alone** for Player B.
* Both players may therefore satisfy effects such as **Exalted** at the same time.

If Player A attacks with two creatures, Player A does not satisfy an "attacks alone" condition, even if every other ally attacks with only one creature.

#### Shared attacking-creature checks

All creatures declared as attackers by the party are still part of the **same combat**. Effects that refer to attacking creatures without limiting them to creatures a particular player controls can see and affect allied attackers as normal.

Example:

* Player A attacks with one creature that has **Battle Cry**.
* Player B attacks with one creature in the same combat.
* Battle Cry treats Player B's creature as another attacking creature, so it receives the Battle Cry bonus.

#### Adjacent blocking and blocking requirements

When a Host creature attacks a player, that player's adjacent allies may block for them under the normal adjacent-blocking rule. Creatures controlled by those adjacent allies count as blockers of that attacking creature for purposes of satisfying blocking requirements and restrictions.

Example:

* A Host creature with **Menace** attacks Player A.
* Player A controls only one creature that can block.
* An adjacent Player B may block the same attacking creature with one of their creatures.
* Player A's blocker and Player B's adjacent blocker together satisfy Menace's requirement that the creature be blocked by two or more creatures.

This same principle applies to other effects that care about how many creatures are blocking an attacker, unless the effect specifically restricts which player must control those blockers.

#### General interpretation rule

Use the card's controller wording to decide which view applies:

* **"Attacks alone," "you attack," or "creatures you control attack"** → evaluate only that player's creatures unless the effect explicitly says otherwise.
* **"Attacking creature," "other attacking creatures," or another combat-wide reference without a controller restriction** → evaluate all applicable attacking creatures across the party's shared combat.
* The phrase **"you control"** always remains controller-specific; the shared party turn does not make allies' permanents count as permanents you control.
* Blocking requirements and restrictions are evaluated using all creatures legally blocking that attacker, including legal adjacent blockers, unless the effect explicitly requires blockers controlled by a specific player.

This interpretation applies to Exalted, Battle Cry, Menace, and other attack- or block-related effects with equivalent wording.

---

<!-- rule:failed-encounter -->
### **🧭 FAILED ENCOUNTER TRANSITION**

If players lose an encounter, use this transition:

1. Skip encounter rewards (no XP, no Cash Out, no Loot Pool)
2. The party must proceed to **Post-Encounter Choice** (Town or Stay Out)
3. Reset all players to full HP before the next encounter begins

Missing Rewards (XP, Cash Out, and Loot Pool) is the only penalty — Town/Stay Out and Event resolution still occur normally.

---

<!-- rule:encounter-flow -->
### **🧠 ENCOUNTER FLOW**

Each encounter follows this sequence:

1. **Determine Encounter Type**  
2. **Resolve Setup**  
3. **Apply Affixes** (if applicable)  
4. **Set Host Health**  
5. **Determine Turn Order** — for non-Crypt encounters, the Host and party each roll a d20; the winner chooses who takes the first turn. The Crypt overrides this procedure and the Host takes the first turn.  
6. **Play the Encounter**

If the Host reaches 0 life, the encounter is defeated.

<!-- rule:encounter-types -->
### **🎲 ENCOUNTER TYPES**

Encounters are chosen randomly from the currently available encounter types.

The current encounter pool is:

* **Precon Battle**
* **Master Fight**
* **Tribal Warfare**
* **Plane Fight (Experimental)**
* **Story Fight (Experimental)**
* **Villain Fight (Experimental)**
* **Wildcard Fight (Experimental)**

Each type defines how the Host deck is selected and what additional rules apply.

#### **🔒 ENCOUNTER AVAILABILITY**

The following encounter types cannot be played until the party has defeated at least one encounter in the current run:

* **Tribal Warfare**
* **Plane Fight (Experimental)**
* **Story Fight (Experimental)**
* **Wildcard Fight (Experimental)**

If one of these is rolled before the party has defeated an encounter, reroll the encounter type.

#### **📦 PRECON BATTLE**

**Setup:**

* Generate 2 random Precons
* Players choose between the 2 generated Precons
* The Host pilots the selected deck

#### **🧠 MASTER FIGHT**

**Setup:**

* Reveal 3 random Tyrants
* Players vote to eliminate 1
* The Host chooses 1 of the remaining Tyrants
* Randomly choose 3 Commander decks from the Masters pool
* Players eliminate 1
* The Host chooses 1 of the remaining decks to pilot

#### **⚔️ TRIBAL WARFARE**

**Setup:**

* The Host gets one fewer Affix of the highest tier for this encounter
* Randomly choose 3 Tribes
* Players choose 1 to eliminate
* The Host chooses 1 of the remaining Tribes
* The Host begins the game with the Tribal Warfare emblem
* This encounter grants an additional **25 XP**

**Tribal Warfare Emblem:**

**Tribal Warfare**  
At the beginning of your end step, conjure and cast a random creature of the chosen tribe with mana value less than or equal to the number of lands you control.

#### **🌍 PLANE FIGHT *(Experimental)***

**Setup:**

* Reveal 3 Planes
* Players eliminate 1
* The Host plays a random deck from the corresponding Plane

#### **📖 STORY FIGHT *(Experimental)***

**Setup:**

* Reveal 3 Stories
* Players eliminate 1
* The Host chooses 1 of the remaining Stories to pilot
* The Host starts the encounter with **50% additional life**, rounded up
* The Host gets one fewer Affix of the highest tier for this encounter
* This encounter grants an additional **25 XP**

##### **Phase Transition**

If the Host would lose the game, a player would win the game, or the Host's life total becomes half or less of its starting life total:

* The Host's life total becomes half of their starting life total, rounded up
* The Host and all permanents they control phase out
* The Host may shuffle their graveyard and/or exile into their library
* Remove all damage from permanents the Host controls
* The Host loses all poison counters
* The turn continues without the Host

At the beginning of the Host's next turn, they phase in.

##### **Phase Two Bonus**

When the Host phases in, they gain the Story's Phase Two bonus:

* Emblem
* Vanguard
* Story ability

#### **🦹 VILLAIN FIGHT *(Experimental)***

**Setup:**

* Reveal 5 random Commanders
* Players eliminate 1
* Choose 1 of the remaining Commanders
* Build or spawn a high-power deck (**Bracket 3 or higher**) using that Commander

#### **🌪 WILDCARD FIGHT *(Experimental)***

**Setup:**

* The Host may use any legal deck (**Suggested Bracket 3**)
* The Host gains:

**Wild Magic Surge —**  
{0}: Roll a d20 and resolve a random effect. Activate only once each turn.

* No Affixes are used for this encounter
* This encounter grants an additional **25 XP**

<!-- rule:wild-magic-table -->
### **🌀 WILDCARD FIGHT — WILD MAGIC TABLE**

**Roll a d20 and resolve the result.**

**1 — Reality Collapse**  
Exile all nonland permanents.

**2 — Unstable Portal**  
Each player creates a 1/1 colorless Eldrazi Spawn creature token with “Sacrifice this creature: Add {C}.”

**3 — Temporal Flux**  
Each player draws a card.

**4 — Mana Flare**  
Until end of turn, if a land would produce mana, it produces an additional mana of any type that land produced.

**5 — Mind Fracture**  
Each player discards their hand, then draws that many cards minus one.

**6 — Chaotic Growth**  
Put a \+1/+1 counter on each creature.

**7 — Aether Slip**  
Exile all creatures, then return them to the battlefield under their owners’ control at the beginning of the next end step.

**8 — Reality Warp**  
Each player shuffles a permanent they control into their library, then reveals cards from the top of their library until they reveal a permanent card and puts it onto the battlefield.

**9 — Arcane Overload**  
The next spell the Host casts this turn has cascade.

**10 — Infernal Surge**  
Creatures the Host controls get \+2/+0 and gain haste until end of turn.

**11 — Verdant Explosion**  
The Host creates a 1/1 green Saproling creature token for each land they control.

**12 — Planar Distortion**  
Each opponent returns a nonland permanent they control to its owner’s hand.

**13 — Agonizing Madness**  
Each opponent discards a card.

**14 — Wild Growth**  
The Host searches their library for a land card with a basic land type, puts it onto the battlefield tapped, then shuffles.

**15 — Necrotic Drain**  
Each opponent loses 2 life. The Host gains life equal to the life lost this way.

**16 — Purifying Light**  
Destroy all enchantments the Host does not control.

**17 — Meltdown Wave**  
Destroy all artifacts the Host does not control.

**18 — Sudden Wealth**  
Create three Treasure tokens.

**19 — Sudden Insight**  
The Host draws three cards.

**20 — Arcane Roulette**  
Each player reveals the top card of their library. If it’s a nonland card, the Host may cast it without paying its mana cost.

*Wild Magic effects are controlled by the Host.*

<!-- rule:reward-timing -->
### **🎯 REWARD TIMING**

Rewards are resolved immediately after an encounter is defeated.

All three rewards must be resolved — **XP**, **Cashout**, and **Loot Pool** — but there is no required order between them.

After all rewards are resolved, proceed to the post-encounter choice (**Town or Stay Out**).

---

<!-- rule:xp-system -->
### **💠 XP SYSTEM**

Players gain XP based on encounter progression mode, with additional XP granted from Affixes and bonuses.

---

#### **📊 BASE XP BY ENCOUNTER MODE**

**Standard Mode — 3 Encounters**

| Encounter | Base XP |
| ----- | ----- |
| Encounter 1 | 30 |
| Encounter 2 | 40 |
| Encounter 3 | 50 |

**Variant Mode — 4 Encounters**

| Encounter | Base XP |
| ----- | ----- |
| Encounter 1 | 10 |
| Encounter 2 | 20 |
| Encounter 3 | 30 |
| Encounter 4 | 40 |

* Base XP is gained **per player**  
* Base XP is always awarded upon victory
* Failed encounters grant **no XP**

---

#### **🧩 AFFIX BONUS XP**

Affixes grant additional XP when an encounter is defeated.

* Each Affix provides bonus XP based on its tier  
* Bonus XP is **added on top of base XP**

*(Affix XP values are defined in the Affix System document.)*

---

#### **🔢 TOTAL XP**

**Total XP \= Base XP \+ Affix Bonus XP**

---

#### **💸 XP USAGE**

XP is used for:

* Town buildings  
* Wanderer 

---

<!-- rule:cashout-system -->
### **🎁 CASHOUT SYSTEM**

Cashouts represent immediate reward choices gained after an encounter.

**Resolution:**

* The Host reveals a number of Cashouts equal to the number of players +1  
* Each player selects one reward unless otherwise stated
* Any unselected Cashouts are removed from play

**Rules:**

* Cashouts are **free to claim**  
* Cashouts are **tradable between players**  
* Cashouts are **retained until used** (typically in Town)

#### **Cash Out color and type restrictions**

A Cash Out that specifies a **color, color identity, or card type** keeps that restriction when it is redeemed.

* A named mono-color reward is locked to that color. For example, a **Mono Red Pro Pack** resolves as a red Pro Pack.
* A type-specific reward is locked to that type. For example, **Artifact**, **Enchantment**, or **Planeswalker** packs continue to require that card type.
* If a Cash Out specifies both a type and another restriction, both restrictions apply unless the reward or another MTGR effect explicitly changes one of them.
* Generic Cash Outs that do not specify a color or type use their normal pack-selection rules.

An effect that explicitly changes a Cash Out may override the part of the restriction it says it changes. **The God Tree's Blessing** may change the color or colors of a Cash Out reward, so its chosen colors replace the Cash Out's normal color restriction while any type restriction remains in place. If The God Tree's Blessing replaces a Cash Out with a **Pro Pack**, that replacement is the generic Pro Pack granted by the buff and is not bound to the original Cash Out's color or type.

---

<!-- rule:loot-pool -->
### **🧾 LOOT POOL SYSTEM**

The Loot Pool allows players to extract cards from defeated encounter decks.

**Resolution after each encounter victory:**

* Shuffle the defeated deck  
* Reveal **7 random nonland cards**  
* If a land is revealed while generating those 7 cards, reroll it until 7 nonland cards have been generated  
* Add those 7 cards to the shared Loot Pool

**Rules:**

* Each victory adds **7 nonland cards** to the Loot Pool, regardless of player count  
* The Loot Pool may contain **more than 7 cards** if cards remain from previous rewards or other effects  
* Players may take cards freely from the Loot Pool  
* Cards taken this way follow all normal deckbuilding rules  

---

<!-- rule:authority-level -->
### **⚖️ AUTHORITY COMPONENT — LEVEL**

At the beginning of each encounter, determine the Host’s Authority Level based on the number of players.

| Players | Authority Level |
| ----- | ----- |
| 1–2 | I |
| 3 | II |
| 4 | III |
| 5 | IV |
| 6 | V |

---

<!-- rule:always-on-scaling -->
### **⚙️ ALWAYS-ON SCALING POWERS**

These effects apply during all encounters regardless of Authority Level.

---

#### **💰 DEMONIC PERSISTENCE — Tempo Reclamation**

Once each turn, whenever:

* A spell the Host casts is countered, or  
* A permanent the Host controls leaves the battlefield due to an opponent’s spell or ability

→ The Host creates a Treasure token.

---

#### **🚫 ARCANE SUPPRESSION**

* At the beginning of each encounter, choose a player.  
* Whenever a player casts a counterspell, if that player is not the chosen player, each other player gets an Arcane Suppression counter.  
* Spells that players cast cost {1} more to cast for each Arcane Suppression counter they have.

---

<!-- rule:doom-setup -->
### **🎯 DOOM SETUP**

At the beginning of each encounter, the Host receives a number of Doom cards based on player count:

| Players | Doom Cards |
| ----- | ----- |
| 1–2 | 0 |
| 3–4 | 1 |
| 5 | 2 |
| 6 | 3 |

* Doom cards are drawn from the **Doom Pool**  
* Each Doom card is unique unless otherwise specified

---

<!-- rule:doom-rules -->
### **⚙️ DOOM RULES**

* Doom cards are placed face down on the battlefield in the Host's Doom area
* Doom cards represent **triggered abilities** controlled by the Host  
* The Host may turn **1 Doom card face up each turn** unless otherwise specified (1 on a player turn and 1 on the Host turn)
* Turning a Doom card face up is a **special action**. It does not use the stack and cannot be responded to directly
* Turning a Doom card face up causes that Doom card's triggered ability to trigger

---

<!-- rule:doom-reroll -->
### **🔁 DOOM REROLL**

Once per Host turn, the Host may reroll any number of face-down Doom cards:

1.  Draw new Doom cards from the pool
2.  Return the same amount of Doom cards to the pool 

Rerolled cards re-enter the pool and can be drawn again. **Rerolling is not the same as turning a Doom card face up** — rerolled cards are not removed.

The Host may reroll **before or after** turning a Doom card face up, but only once per Host turn.

---

<!-- rule:affixes-reference -->
### **🧩 AFFIXES — FULL LIST**

Affixes are global modifiers that enhance the Host during encounters.

---

### **🟦 TIER 1 — (+5 XP)**

**Role:** Early combat pressure, simple stat/keyword modifiers

* **\+1/+1 Counters** — Host creatures enter with a \+1/+1 counter  
* **Life Gain** — Whenever the Host casts a spell, they gain 1 life  
* **Prismatic** — Lands the Host controls have “{T}: Add one mana of any color”  
* **Reach** — Host creatures have Reach  
* **Scry 1** — At the beginning of the Host’s upkeep, they scry 1  
* **Token Generator** — At the beginning of the Host’s end step, create a 1/1 Servo artifact creature token  
* **Vigilance** — Host creatures have Vigilance  
* **Trample** — Host creatures have Trample  

---

### **🟧 TIER 2 — (+10 XP)**

**Role:** Moderate advantage, stronger combat \+ setup effects

* **First Strike** — Host creatures have First Strike  
* **Ward 1** — Host permanents have Ward {1}  
* **Flying** — Host creatures have Flying  
* **Hero Power** — The Host gains 1 of 3 random Hero cards  
* **Lifelink** — Host creatures have Lifelink  
* **Mana Ramp** — At the beginning of the Host's precombat main phase, add {C}  
* **Menace** — Host creatures have Menace  
* **Pack Back Up** — Each upkeep, open a Mystery Booster and exile one card face down; Host may cast it  
* **Setup Battle** — Before the game begins, reveal cards until:  
  * a land, and  
  * a nonland permanent with MV ≤4  
     are found; they enter the battlefield  

---

### **🟥 TIER 3 — (+15 XP)**

**Role:** Engine effects, powerful synergies, game-warping value

* **Aether Anomaly** — Once each turn when the Host casts a spell, they may cast a random card with the same mana value for free  
* **Cascade** — The first spell the Host casts each turn has Cascade  
* **Deathtouch** — Host creatures have Deathtouch  
* **Demonstrate** — Host spells have Demonstrate  
* **Emblem Battle** — The Host gains 1 of 3 random Emblems  
* **Flashback** — Instants and sorceries in the Host’s graveyard gain Flashback  
* **Free Spell** — Once per turn, the Host may cast a spell with MV ≤3 for free  
* **Rebound** — Spells cast from hand are exiled and recast next upkeep  
* **Training Grounds** — Activated abilities cost {2} less (min 1\)  
* **Twice the Power** — Triggered abilities of Host permanents trigger an additional time  
  *(Cannot be paired with Annihilator 1 Affix)*  
* **Vanguard Battlements** — The Host gains 1 of 3 random Vanguards  
* **Vorpal** — Whenever one or more creatures the Host controls deal combat damage to a player, that player sacrifices a permanent

---

### **🟪 TIER 4 — (+20 XP)**

**Role:** Run-defining, high-impact, boss-level modifiers

* **Annihilator 1** — Non-Token creatures the Host controls have Annihilator 1  
* **Arcane Mastery** — The first spell the Host casts each turn is copied  
   *(Permanent spells create token copies)*  
* **Double Mana** — Lands the Host controls produce double mana  
* **Double Strike** — Host creatures have Double Strike  
* **Endless Reinforcements** — At end step, create a token copy of target creature (legend rule ignored)  
* **Hexproof** — Host permanents have Hexproof  
* **Indestructible** — Host permanents are Indestructible  
* **Overwhelming Presence** — Host draws an extra card and may play an additional land each turn  
* **Tyrant’s Arsenal** — At upkeep, create three Treasure tokens  
* **War Preparations** — Before the game begins, reveal:  
  * a land  
  * a creature  
  * a noncreature permanent  
     → they enter the battlefield

---

### **🧠 QUICK SUMMARY**

| Tier | Count | Identity |
| ----- | ----- | ----- |
| Tier 1 | 8 | Combat basics |
| Tier 2 | 9 | Mid-level advantages |
| Tier 3 | 12 | Engine effects |
| Tier 4 | 10 | Game-defining |

<!-- rule:turn-structure -->
### **🧠 TURN STRUCTURE**

#### **🛡️ PARTY TURN**

All players act as a single player for the shared turn structure, but each player remains the controller of their own cards and permanents.

• One Untap, Upkeep, Draw  
 • One Main Phase, Combat, End Step

---

#### **⚔️ PARTY COMBAT**

 • All attackers are declared simultaneously  
 • Host blocks after full declaration  
 • Effects that care whether a creature **attacks alone**, or otherwise count creatures that player controls attacking, are evaluated separately for each player  
 • Example: if two allies each attack with exactly one creature, both creatures count as having attacked alone for effects such as **Exalted**  
 • Effects that refer to attacking creatures without a controller restriction use the shared combat and may affect allied attackers; **Battle Cry** can therefore benefit another player's attacking creature

---

#### **👹 HOST TURN**

The Host plays normally.

---

#### **⚔️ HOST COMBAT**

 • Host chooses attack targets  
 • Adjacent players may block for each other when an adjacent ally is attacked  
 • Legal adjacent blockers count toward blocking requirements and restrictions for that attacker  
 • Example: if a Host creature with **Menace** attacks a player who has one blocker, an adjacent ally may provide the second blocker and together they satisfy Menace  
 • If a Player attacks an Adjacent player, they may not block their own creature with the adjacent blocking rule.

For equivalent edge cases, controller-specific wording remains controller-specific, while combat-wide wording uses all applicable creatures in the shared combat.

---

#### **👑 MONARCH CLARIFICATION**

• If multiple players deal combat damage to the Host at the same time, choose one of the players who dealt damage to become the Monarch

---

<!-- rule:death-rules -->
### **💀 DEATH RULES**

• Death is not permanent  
 • Players return in future encounters

**No XP penalty is applied when a player dies.**

---

<!-- rule:player-departure -->
### **🚪 PLAYER DEPARTURE**

Players may only Scoop at Sorcery Speed; full-party encounter concession may be declared at Instant speed.

If a player leaves during an encounter, the rest of the party may pilot that player's deck until that encounter ends.

After that encounter:

• The leaving player is removed from the party  
• Future systems use the new player count  
• Any Trinket tied to that player's Trinket Ticket is removed at the end of that encounter

<!-- rule:reward-eligibility -->
### **🏆 REWARD ELIGIBILITY**

A player qualifies for rewards only from encounters they participated in.

If a player leaves during an encounter and the party completes that encounter, that player still qualifies for that encounter's rewards.

If a player leaves before a later encounter begins, they do not qualify for rewards from that later encounter.

If a player joins during an encounter, they qualify for that encounter's rewards if the party completes it, but they do not qualify for rewards from any previous encounter in that run.

<!-- rule:demon-generals-system -->
### **👑 MTG ROGUELIKE — DEMON GENERALS V2.0**

---

#### **🎯 OVERVIEW**

During Master Fight encounters, the Host represents one of the Demon King’s Generals.

Each General grants the Host:

* A **Passive Aura** that affects the battlefield  
* A **Signature Move** representing the General’s most powerful technique

Signature Moves create powerful battlefield effects and define the encounter’s identity.

Unless otherwise stated:

* General abilities do not use the stack  
* Signature Moves have a cooldown of 3 Host turns after use
* Saving Roll: roll a d20; 10 or higher is a pass, 9 or lower is a fail

Status used by this document:

* Burned: At party upkeep, each Burned player makes a Saving Roll. On a failed save, they take 2 damage. On a passed save, Burned is removed.
* Frozen: Permanents you control don't untap during your untap step. At the beginning of your upkeep, make a Saving Roll. On a passed save, remove Frozen.
* Corrupted: Creatures you control get -1/-1. At the beginning of your upkeep, make a Saving Roll. On a passed save, remove Corrupted.
* Petrified: The creature is tapped and does not untap during its controller's untap step. It loses all abilities. At the beginning of its controller's upkeep, they may make a Saving Roll. On a passed save, remove Petrified.


---

#### **🎲 GENERAL SELECTION**

When a Master Fight is selected:

* Reveal 3 random Tyrants  
* Players vote to eliminate 1  
* The Host chooses 1 of the remaining Tyrants

This determines the Tyrant used for that Master Fight encounter.

| Tyrants |
| ----- |
| Ember Tyrant — General of Ash |
| Winter Tyrant — General of Frost |
| Plague Tyrant — General of Rot |
| Storm Tyrant — General of Ruin |
| Grave Tyrant — General of Necromancy |
| Blood Tyrant — General of Sacrifice |
| Stone Tyrant — General of Fortification |
| Void Tyrant — General of the Abyss |
| War Tyrant — General of Conquest |
| Gold Tyrant — General of Greed |
| Dream Tyrant — General of Madness |

---

<!-- rule:demon-general-ember-tyrant-general-of-ash -->
### **🔥 EMBER TYRANT — GENERAL OF ASH**

The battlefield burns with infernal flame.

**Passive — Scorched Earth**  
 At the beginning of each player’s end step, if that player cast two or more spells this turn, Ember Tyrant deals 2 damage to that player.

**Signature Move — Inferno Surge**  
 At the beginning of the Host’s combat step, the Host may unleash Inferno Surge.

Each player makes a Saving Roll.

On a failed save:

* Inferno Surge deals 4 damage to that player  
* That player gains Burned

Burned: At party upkeep, each Burned player makes a Saving Roll. On a failed save, they take 2 damage. On a passed save, Burned is removed.
---

<!-- rule:demon-general-winter-tyrant-general-of-frost -->
### **❄️ WINTER TYRANT — GENERAL OF FROST**

A supernatural blizzard grips the battlefield.

**Passive — Bitter Cold**  
 Creatures opponents control enter the battlefield tapped.

**Signature Move — Frost Nova**  
 At the beginning of the Host’s combat step, the Host may unleash Frost Nova.

Each player makes a Saving Roll.

On a failed save:

* That player gains Frozen

Frozen: Permanents you control don't untap during your untap step. At the beginning of your upkeep, make a Saving Roll. On a passed save, remove Frozen.
---

<!-- rule:demon-general-plague-tyrant-general-of-rot -->
### **☠️ PLAGUE TYRANT — GENERAL OF ROT**

A creeping corruption spreads across the battlefield.

**Passive — Creeping Blight**  
 At the beginning of each player’s upkeep, that player mills two cards.

**Signature Move — Plague Burst**  
 At the beginning of the Host’s combat step, the Host may unleash Plague Burst.

Each player makes a Saving Roll.

On a failed save:

* That player gains Corrupted

Corrupted: Creatures you control get -1/-1. At the beginning of your upkeep, make a Saving Roll. On a passed save, remove Corrupted.
---

<!-- rule:demon-general-storm-tyrant-general-of-ruin -->
### **⚡ STORM TYRANT — GENERAL OF RUIN**

Chaotic lightning tears through the battlefield.

**Passive — Static Charge**  
 At the beginning of each player’s end step, that player gains a Charge counter for each spell they cast this turn.

**Signature Move — Cataclysmic Discharge**  
 At the beginning of the Host’s combat step, the Host may unleash Cataclysmic Discharge.

Each player makes a Saving Roll.

On a failed save:

* Storm Tyrant deals damage to that player equal to twice the number of Charge counters they have.

Then remove all Charge counters from all players.

---

<!-- rule:demon-general-grave-tyrant-general-of-necromancy -->
### **💀 GRAVE TYRANT — GENERAL OF NECROMANCY**

The battlefield answers the call of the dead.

**Passive — Endless Graves**  
 Whenever a creature dies, its controller mills a card.

**Signature Move — Rise the Fallen**  
 At the beginning of the Host’s combat step, the Host may unleash Rise the Fallen.

Each player makes a Saving Roll.

On a failed save:

* Create a 2/2 black Zombie creature token under the Host’s control for each creature card in that player’s graveyard.  
 (Maximum 2 tokens per player.)

---

<!-- rule:demon-general-blood-tyrant-general-of-sacrifice -->
### **🩸 BLOOD TYRANT — GENERAL OF SACRIFICE**

The battlefield demands blood.

**Passive — Blood Price**  
 Whenever a creature dies, its controller loses 1 life and the Host gains 1 life.

**Signature Move — Blood Offering**  
 At the beginning of the Host’s combat step, the Host may unleash Blood Offering.

Each player makes a Saving Roll.

On a failed save:

* That player reveals their hand  
* For each card revealed this way, that player chooses one:
  * Exile that card  
  * Or lose 1 life and the Host gains 1 life

---

<!-- rule:demon-general-stone-tyrant-general-of-fortification -->
### **🪨 STONE TYRANT — GENERAL OF FORTIFICATION**

Unbreakable defenses rise from the earth.

**Passive — Impenetrable Bulwark**  
 Creatures the Host controls have +0/+2.

**Signature Move — Stone Prison**  
 At the beginning of the Host’s combat step, the Host may unleash Stone Prison.

Choose two creatures controlled by different players.  
 Those creatures gain Petrified.

Petrified: The creature is tapped and does not untap during its controller's untap step. It loses all abilities. At the beginning of its controller's upkeep, they may make a Saving Roll. On a passed save, remove Petrified.

---

<!-- rule:demon-general-void-tyrant-general-of-the-abyss -->
### **🌀 VOID TYRANT — GENERAL OF THE ABYSS**

Reality fractures around the battlefield.

**Passive — Warp the Mind**  
 At the beginning of each player’s upkeep, that player exiles a card at random from their hand.  
 Until the end of their next turn, they may cast that card.  
 Spells cast this way cost {2} more to cast.

**Signature Move — Fractured Reality**  
 At the beginning of the Host’s combat step, the Host may unleash Fractured Reality.

Each player makes a Saving Roll.

On a failed save:

* Exile the top card of that player’s library.

The Host may cast any number of those cards without paying their mana costs.

---

<!-- rule:demon-general-war-tyrant-general-of-conquest -->
### **⚔️ WAR TYRANT — GENERAL OF CONQUEST**

Battlefields bend to relentless assault.

**Passive — March of War**  
 Creatures the Host controls gain +1/+0.

**Signature Move — War Cry**  
 At the beginning of the Host’s combat step, the Host may unleash War Cry.

Creatures the Host controls gain:

* +2/+0  
* Trample

until end of turn.

---

<!-- rule:demon-general-gold-tyrant-general-of-greed -->
### **🪙 GOLD TYRANT — GENERAL OF GREED**

Wealth corrupts the battlefield.

**Passive — Greed’s Toll**  
 Whenever a player draws their second card each turn, they lose 3 life.

**Signature Move — Hoard Explosion**  
 At the beginning of the Host’s combat step, the Host may unleash Hoard Explosion.

Each player makes a Saving Roll.

On a failed save:

* For each nonland permanent that player controls beyond the fourth, that player chooses one:
  * Sacrifice that permanent  
  * Or lose 2 life

---

<!-- rule:demon-general-dream-tyrant-general-of-madness -->
### **🌙 DREAM TYRANT — GENERAL OF MADNESS**

Nightmares invade the minds of the living.

**Passive — Unstable Thoughts**  
 At the beginning of each player’s upkeep, that player discards a card at random, then draws a card.

**Signature Move — Nightmare Deluge**  
 At the beginning of the Host’s combat step, the Host may unleash Nightmare Deluge.

The Host exiles cards from the top of their library until the total mana value of cards exiled this way is 10 or greater. Then they may cast a spell from among the exiled cards without paying its mana cost.

<!-- rule:authority-effects -->
### **🔥 AUTHORITY EFFECTS**

---

#### **👑 Authority I — Minor Influence**

*(1–2 players)*

* The first spell the Host casts each turn costs {1} less to cast.

---

#### **👑 Authority II — Infernal Momentum**

*(3 players)*

* The first spell the Host casts each turn costs {1} less to cast.
* At the beginning of the encounter, the Host creates a blue enchantment token named **Not Today** with "Sacrifice this enchantment: Counter target spell, activated ability, or triggered ability."

---

#### **👑 Authority III — Demonic Pressure**

*(4 players)*

* The first spell the Host casts each turn costs {1} less to cast.
* At the beginning of the encounter, the Host creates a blue enchantment token named **Not Today** with "Sacrifice this enchantment: Counter target spell, activated ability, or triggered ability."

At the end of the Host's draw step, the Host chooses one —

* Draw an additional card.
* The Host may play an additional land this turn.

---

#### **👑 Authority IV — Overwhelming Presence**

*(5 players)*

* The first spell the Host casts each turn costs {1} less to cast.
* **Once per encounter**, the Host may cast a copy of Disallow without paying its mana cost.
* The Host may play one additional land.
* The Host draws an additional card during each of their draw steps.

---

#### **👑 Authority V — Absolute Command**

*(6 players)*

* The first spell the Host casts each turn costs {1} less to cast.
* At the beginning of the encounter, the Host creates a blue enchantment token named **Not Today** with "Sacrifice this enchantment: Counter target spell, activated ability, or triggered ability."
* **Once per encounter**, the Host may cast a copy of Disallow without paying its mana cost.
* The Host may play one additional land.
* The Host draws an additional card during each of their draw steps.

---

<!-- rule:authority-interactions -->
### **⚖️ INTERACTION RULES**

---

#### **🔒 COUNTERSPELL STANDARD**

When an Authority effect grants the Host a free counter, it does so by casting a copy of Disallow without paying its mana cost.

The **Not Today** enchantment token (Authority II, III, V) is a separate mechanic — it is sacrificed to counter a spell, activated ability, or triggered ability and does not use the Disallow copy.

---

#### **📜 RULES CLARIFICATION**

* Authority levels are not additive cost reduction by tier. Authority V is not {5} cheaper.
* At each player count, use the full effect package listed for that Authority level.

* The free copy of *Disallow*:
  * Is cast normally
  * Uses the stack
  * May be responded to
  * May be countered

---

#### **🎯 VALID TARGETS**

The Host may use *Disallow* to counter:

* A spell  
* An activated ability  
* A triggered ability

<!-- rule:doom-triggering -->
### **⚡ TRIGGERING A DOOM CARD**

When the Host turns a Doom card face up:

* The Doom card's triggered ability is put onto the stack
* Players may respond to that triggered ability as normal
* Resolve the triggered ability if it is not countered or otherwise removed from the stack
* That Doom card is **physically set aside** and removed from the pool for the remainder of the encounter  
* Used Doom cards rejoin the pool at the start of the next encounter

---

<!-- rule:doom-timing -->
### **⏱ TIMING**

* Turning a Doom card face up is a special action
* The special action does not use the stack
* The Doom card's triggered ability uses the stack and can be responded to

---

<!-- rule:doom-card-i-m-just-getting-started -->
### **💠 I’m Just Getting Started**

Add {4}.

---

<!-- rule:doom-card-a-bit-of-artificial-insight -->
### **🧠 A Bit of Artificial Insight**

Draw two cards. Artifact spells you cast this turn cost {2} less to cast.

---

<!-- rule:doom-card-i-will-witness-your-downfall -->
### **👁 I Will Witness Your Downfall**

Draw four cards.

---

<!-- rule:doom-card-i-ve-seen-what-breaks-you -->
### **🔍 I’ve Seen What Breaks You**

Search your library for a card, put it into your hand, then shuffle.

---

<!-- rule:doom-card-welcome-to-my-reality -->
### **🌌 Welcome to My Reality**

Choose any number of players. Each chosen player shuffles their hand and graveyard into their library, then draws that many cards.

If the Host is not among the chosen players, the Host draws cards until they have seven cards in hand.

---

---

<!-- rule:doom-card-i-can-do-that-too -->
### **🔮 I Can Do That Too\!**

Copy target noncreature spell. You may choose new targets for the copy.

---

<!-- rule:doom-card-oooooh-i-like-you -->
### **💕 Oooooh, I Like You**

Copy target creature spell. You may choose new targets for the copy.

---

<!-- rule:doom-card-no -->
### **❌ No**

Counter target spell.

---

---

<!-- rule:doom-card-you-are-annoying-me -->
### **😒 You Are Annoying Me**

Choose a player.  
 Creatures that player controls can’t attack you or planeswalkers you control this turn.  
 Spells that player controls can’t target you or permanents you control this turn.

---

<!-- rule:doom-card-i-am-inevitable -->
### **🛡 I Am Inevitable**

Target permanent gains hexproof and indestructible until end of turn.

---

<!-- rule:doom-card-minions-protect-me -->
### **🧱 Minions\! Protect Me\!**

Create a 3/3 black Horror creature token.  
 Prevent all damage that would be dealt to creatures you control this turn.

---

<!-- rule:doom-card-how-do-you-like-it -->
### **🔄 How Do You Like It?**

The next time a source of your choice would deal damage to you this turn, prevent that damage.  
 If damage is prevented this way, it deals that much damage to any target instead.

---

---

<!-- rule:doom-card-death-is-inevitable -->
### **💀 Death Is Inevitable**

Destroy up to two target creatures an opponent controls.

---

<!-- rule:doom-card-death-comes-for-us-all -->
### **☠ Death Comes for Us All**

Destroy all creatures. They can’t be regenerated.

---

<!-- rule:doom-card-you-ve-outlived-your-usefulness -->
### **🚫 You’ve Outlived Your Usefulness**

Exile target nonland permanent.

---

<!-- rule:doom-card-offer-tribute -->
### **⛓ Offer Tribute**

Each opponent sacrifices a permanent.

---

---

<!-- rule:doom-card-did-that-sting -->
### **😈 Did That Sting?**

Deal 4 damage to each opponent.

---

<!-- rule:doom-card-i-ll-show-you-true-pain -->
### **🔥 I’ll Show You True Pain**

Choose the opponent with the highest life total.  
 That player loses 7 life.

---

<!-- rule:doom-card-my-fury-burns -->
### **🔥 My Fury Burns**

Until end of turn, if a source you control would deal damage to an opponent or a creature you don’t control, it deals that much damage plus 2 instead.  
 Create a 1/1 red Devil creature token with  
 “When this creature dies, it deals 1 damage to any target.”

---

---

<!-- rule:doom-card-madness-ensues -->
### **🧠 Madness Ensues**

Each opponent discards two cards.

---

<!-- rule:doom-card-i-need-you-to-stop -->
### **⏳ I Need You to Stop**

Target player skips their next beginning phase.

---

---

<!-- rule:doom-card-even-nature-cannot-resist -->
### **🌱 Even Nature Cannot Resist**

Search your library for up to two basic land cards, put them onto the battlefield tapped, then shuffle.

---

<!-- rule:doom-card-reality-bends-to-my-will -->
### **🌍 Reality Bends to My Will**

Choose one:

* You may play two additional lands this turn  
* You may cast an instant or sorcery spell from your hand without paying its mana cost

---

---

<!-- rule:doom-card-i-will-put-this-to-good-use -->
### **🕵 I Will Put This to Good Use**

Search target opponent’s library for a card, exile it face down, then that player shuffles.  
 You may look at and cast that card for as long as it remains exiled, and you may spend mana as though it were mana of any color to cast it.

---

---

<!-- rule:doom-card-you-bear-the-mark-you-are-cursed -->
### **🌀 You Bear the Mark\! You Are Cursed\!**

Each opponent becomes enchanted by a random Curse with mana value 4 or less that cannot benefit them or their allies.

<!-- rule:reward-scaling -->
### **📈 REWARD SCALING**

Rewards scale through systems tied to mode and encounter difficulty:

* **Encounter Progression** → determines Base XP  
* **Affixes** → provide additional bonus XP

This ensures rewards increase with both difficulty and run progression.

---

<!-- rule:cashout-pool -->
### Cashout Pool

Cashouts are post-encounter rewards drawn from the active Cashout Pool. Exact pool membership, weights, and availability are operational balance data maintained by MTGR Platform and are intentionally not duplicated in this rule document.

#### Cashout Tiers

Cashouts use three functional tiers:

- **T1 — Core rewards:** common, straightforward pack rewards.
- **T2 — Advanced rewards:** specialty packs, Pro/Mythic-style packs, and Bonus Building Usage rewards.
- **T3 — Manual/special rewards:** rewards that require Host or system-specific resolution rather than normal automatic pack redemption.

A Cashout's current tier and active status are determined by the Platform Cashout registry.

#### General Rules

- Cashouts are free to claim when awarded.
- Cashouts may be traded between players unless another rule says otherwise.
- Cashouts may be retained until used unless the Cashout itself has an expiration condition.
- A Cashout that names a color, color identity, card type, or other generation restriction keeps that restriction when redeemed unless an MTGR effect explicitly changes it.
- Manual/special Cashouts are presented to the Host or resolved through their named system rather than being treated as ordinary pack rewards.

#### Bonus Building Usage

A Bonus Building Cashout grants one additional use of the named building according to that building's normal rules.

**Bonus Bazaar:** grants the Cashout holder **one additional outbound Bazaar trade during that Town**. The receiving player does not spend a Bazaar use merely for accepting the inbound trade.

Bonus Building Cashouts do not replace or reset the building's normal usage state; they add the granted bonus use.

#### Blacksmith Service Cashouts

Free Upgrade and Free Augment Cashouts grant the corresponding Blacksmith service without charging its normal XP cost. All normal Blacksmith targeting and modification restrictions still apply.

#### Ticket Cashouts

A Ticket Cashout grants the named Ticket. The Ticket then follows its own canonical Ticket rules, including slot use, persistence, and any per-session selection restrictions.

#### Pool Data Boundary

The Rules repository owns the gameplay meaning of Cashout categories and reward types. MTGR Platform owns the live registry fields used to deliver them, including active inventory, tier assignment, redemption implementation, and balancing metadata. This prevents a static rulebook table from becoming stale when the live Cashout pool changes.

<!-- rule:player-vs-player-combat -->
### **⚔️ PLAYER VS PLAYER COMBAT**

• Players may attack other players freely

---

<!-- rule:storm-modification -->
### **🌩️ STORM RULE MODIFICATION**

When a player casts a spell with Storm:

• Count only spells cast this turn by:  
 – That player  
 – The Host

---

<!-- rule:extra-turns -->
### **⏩ EXTRA TURNS**

• Only the controller of the effect takes the extra turn

---

<!-- rule:card-acquisition -->
### **📦 CARD ACQUISITION RULE**

Whenever a player would gain a card:

• They may put it into their **Deck or Sideboard**, unless otherwise stated  
• The Sideboard has **no size limit**  
• Players **do not have to remain within their Commander's color identity during gameplay**  
• Color identity applies only when a card-generation, search, or other effect explicitly says it is restricted by color identity

Applies to:  
 • Events, Town, Cash Outs, Travelers, Packs, Rewards

Override:  
 • Effects that explicitly bypass placement or impose their own restrictions

---

<!-- rule:pack-rules -->
### **📦 PACK RULES**

• Pack card quantity uses the pack's normal base size  
• **Brand of the Open Hand** adds **+1 card per Rank** whenever that player opens a pack  
• Brand-added cards increase the number of cards seen; they do **not** increase a pack's keep limit unless another effect explicitly says so  
• Pro Pack → 45+ results  
• Mythic Pack → 30+ results  
• OTAG Pack → 15+ results

Invalid packs must be rerolled or adjusted.

---

## Between Encounters

<!-- rule:post-encounter-choice -->
### **🏘️ BETWEEN ENCOUNTERS**

After an encounter is defeated and rewards are resolved, the party must choose one:

• Return to Town
• Stay Out

<!-- rule:town-flow -->
### ⚙️ TOWN FLOW

When the party returns to **Town**, resolve the following before Event resolution:

1. **Fully heal all players** to their current maximum HP.
2. **Reset the consecutive Stay Out count.** The next Stay Out starts again at **10 XP and 2 Events**.
3. **Resolve Town building usage.** Limited-use buildings reset their uses on each return to Town; unlimited buildings may be used as allowed by their own rules.
4. **Proceed to Event resolution.**

#### Full heal

Entering Town restores each player's current life total to their current maximum HP.

- “Gain life” and “lose life” change current life only.
- A permanent health change must explicitly change **Max HP/Life**.

Town provides controlled between-encounter progression; players cannot use Town buildings while resolving the Stay Out path.

<!-- rule:town-buildings -->
### 🏛️ BUILDINGS

Town buildings fall into two categories:

**Limited Use** — usable a set number of times per Town visit. Uses reset on each return to Town.

**Unlimited** — usable any number of times while in Town, provided their XP cost is paid.

---

#### 🏦 BANK *(1 use per Town)*

Move up to **6 cards** between your deck and sideboard.

##### Rules

Bank interactions only happen while in Town.

The **Sideboard has no size limit**. The Bank limits how many cards may be moved between Deck and Sideboard during that Town visit; it does not limit Sideboard capacity.

---

#### ⚒️ BLACKSMITH *(Unlimited)*

Enhance **1 card** in your deck.

| Option | Cost | Effect |
| :--- | :--- | :--- |
| Upgrade | 25 XP | Modify a card's stats, keywords, or costs |
| Augment | 50 XP | Add or modify rules text or abilities |

**Rules:** A card may only receive one Blacksmith modification.

---

#### 🛍️ BAZAAR *(1 outbound trade per player per Town + unlimited inbound trades + unlimited Cashout Sales)*

Two things happen here — player trading and Cashout selling. Each player may initiate **1 outbound trade per Town**. Accepting a trade initiated by another player does not consume your outbound trade, and a player may receive any number of inbound trades during the same Town. Cashout Sales remain completely separate.

---

##### 🤝 PLAYER TRADES *(1 outbound initiation per player per Town)*

Each completed trade is one of the following exchanges:

* Card ↔ Card
* Card ↔ Essence (2× the card's mana value)
* Cashout ↔ Cashout
* Cashout ↔ Card

**Trade limits:**

* Each player may initiate **1 completed outbound trade per Town**.
* Accepting an inbound trade does **not** consume the receiving player's outbound trade.
* A player may accept any number of inbound trades during that Town.
* The initiator's outbound use is consumed only when the trade successfully completes.
* Cancelled or declined trades do not consume the initiator's outbound use.
* A player who has already used their outbound trade may still receive and complete inbound trades.
* Players may trade with each other reciprocally if each player chooses to spend their own outbound initiation on the other.

If a player uses Bonus Bazaar, it grants **one additional outbound Bazaar trade** during that Town. The receiving player still spends no Bazaar use.

---

##### 💰 CASHOUT SALE *(Free — Unlimited)*

Sell any number of Cashouts to the Host for **10 XP** each. Cashout Sales do not consume an outbound Bazaar trade and may be done any number of times.

---

#### ⛪ CATHEDRAL *(1 use per Town)*

Each player may describe a card request. The Host provides a real, usable card.

Then choose:

* Add it to your deck, or
* Destroy it for **Essence equal to 2× its mana value**

**Rules:** The description cannot force one specific card. The Host interprets the request.

Cards gained from Cathedral are not restricted by Commander color identity unless the effect or request specifically imposes that restriction.

---

#### ⚔️ THE GUILD *(Unlimited)*

Change your Commander.

**Cost:** 10 XP + roll a d6

**Effect:** Receive **(roll + 2)** random Commanders in a color combination of your choice. You may swap your Commander with one of them.

Your old Commander goes to your **deck or sideboard**.

**Brand modifiers:**

* **Brand of the Conclave** adds **+1 Commander option per Rank** to the generated Guild choices.
* **Brand of Recurrence** grants **+1 free Commander reroll per Rank** when using The Guild.

**Rules:**

* Declare color combination **before rolling**.
* Generated Commanders must follow normal Commander legality rules.
* Changing Commander does **not** force existing cards in your Deck or Sideboard to match the new Commander's color identity.
* The new Commander's color identity is used only by later effects that explicitly generate or search within your current Commander color identity.

---

#### 🛒 MERCHANT *(Unlimited)*

Open a **15-card base pack**, then keep **1 card**.

**Brand of the Open Hand:** Each Rank adds **+1 card** to every pack you open. This increases the number of cards you see, not the number you keep.

> You always keep only 1 card per pack. This limit applies regardless of Brands or other effects. The only exception is a specific Traveler that explicitly grants additional keeps.

| Cost | Pack | Rules |
| :--- | :--- | :--- |
| 5 XP | Mystery Pack | Any color; no color-identity restriction |
| 10 XP | ID Pack | **Must be within your current Commander's color identity** |
| 20 XP | Pro Pack | Any color + 1 search parameter |
| 50 XP | Mythic Pack | Any color + 2 search parameters |
| 75 XP | OTAG Pack | Any color + OTAG search |

**Search parameters:** supertype, type, subtype, keyword, mana value.

**Rules:** Only the **ID Pack** is restricted to your current Commander's color identity. Mystery, Pro, Mythic, and OTAG Packs may contain cards of any color. Pro, Mythic, and OTAG still use their listed search requirements. Commander color identity is not a general gameplay deck restriction: cards already owned or gained from unrestricted sources may remain in your Deck or Sideboard regardless of color identity.

---

#### 🔮 MYSTIC *(Unlimited)*

**Cost:** 5 XP

Destroy a **nonland card** from your deck. Gain **Essence equal to twice its mana value**.

**Rules:** Mystic is used for deck pruning and resource conversion.

Your Deck must remain at or above your current modified deck-size minimum after pruning. The base minimum may be reduced by **Brand of the Infinite Void**.

---

#### 🌀 PORTAL *(1 use per Town)*

**Cost:** Up to 15 XP

Generate a randomized pack using type or keyword search criteria. **Base pack size equals XP spent.**

**Brand of the Open Hand** adds **+1 generated card per Rank** when you open the Portal pack.

All generated cards are **Temporal**.

**Rules:**

* Temporal cards must remain in your deck
* Cannot be traded, sideboarded, or sacrificed to Town or Traveler effects
* Temporal cards cease to exist at the end of the encounter where they were used

---

#### 🍺 TAVERN *(1 use per Town)*

Choose one mana-fixing option:

**Option A**

* Remove 0–2 cards from your deck
* Add 0–4 basic lands of your choice

**Option B**

* Remove 3–5 basic lands
* Add 0–2 dual lands of your choice

**Rules:** Tavern is for deck smoothing and mana fixing only.

Your Deck must remain at or above your current modified deck-size minimum after removals.

<!-- rule:stay-out-flow -->
### ⚙️ STAY OUT FLOW

When the party chooses to **Stay Out**, resolve the following before the next encounter.

#### Immediate state

- All players **fully heal and reset to their current maximum HP**.
- Players **do not access Town buildings** and do not gain free Town-building effects.
- The party's consecutive Stay Out count is used for both XP and Event scaling.

#### Resolution order

1. **Gain Stay Out XP.** Each player gains **10 XP** on the first Stay Out. Each consecutive Stay Out adds **+5 XP**.
2. **Gain Mystery Packs.** Each player gains **2 Mystery Packs**. Mystery Packs do not scale with the streak.
3. **Resolve a Supply Drop.** Resolve it outside the encounter battlefield state.
4. **Resolve a Wanderer.** Each player may interact with the revealed Wanderer as allowed by that Wanderer.
5. **Resolve Events.** The first Stay Out resolves **2 Events**. Each consecutive Stay Out adds **+1 Event**. Resolve multiple Events one at a time, in order.
6. **Proceed to the next encounter.**

#### Consecutive Stay Out scaling

| Consecutive Stay Out | XP per player | Events |
|---|---:|---:|
| 1st | 10 XP | 2 |
| 2nd | 15 XP | 3 |
| 3rd | 20 XP | 4 |
| 4th | 25 XP | 5 |

Returning to **Town resets the consecutive Stay Out count**. The next Stay Out after a Town visit starts again at **10 XP and 2 Events**.

Detailed pack, Event, Supply Drop, Wanderer, and restriction rules remain in their dedicated rule entries.

<!-- rule:supply-drop-resolution -->
### **🎁 SUPPLY DROP RESOLUTION**

When a Supply Drop is triggered:

 • Roll 1d10  
 • Resolve the corresponding result from the table below

Supplies affect each Party Member unless otherwise stated.

---

<!-- rule:supply-drop-table -->
### **🎲 SUPPLY DROP TABLE**

##### **1 — Lost Coin Purse**

A fallen adventurer’s pouch is discovered along the road.  
 The party gains 10 XP and may reroll this result once. *(Must keep the second result.)*

---

##### **2 — Traveling Provisions**

Old rations and supplies are found in an abandoned wagon.  
 Each player gains 4 HP.

Players may have life above their maximum this way. This excess life lasts only until the next encounter.

---

##### **3 — Battlefield Salvage**

Among the debris of the previous battle, useful gear is recovered.  
 Reveal five nonland cards at random from the defeated deck.

The party chooses one. Add it to the Loot Pool.

---

##### **4 — Forgotten Satchel**

A small satchel containing useful notes and tools is discovered.  
 Each player gains one Mystery Pack.

---

##### **5 — Hidden Cache**

The party uncovers a hidden stash left behind by previous explorers.  
 Reveal five random nonland cards within the party’s color identities.

The party chooses one. Add it to the Loot Pool.

---

##### **6 — Wandering Scholar**

A traveling historian recognizes the party’s mission and offers curated knowledge of ancient magic.

Each player chooses one:  
 • Identity Pack  
 • Artifact Pack  
 • Utility Land Pack

---

##### **7 — Village Tribute**

A nearby settlement offers supplies to aid the party against the coming threat.  
 Each player gains one Identity Pack.

---

##### **8 — Abandoned Armory**

A cache of reliable equipment is uncovered.  
 Each player gains an Arcane Signet.

---

##### **9 — Heirloom Relic**

A grateful traveler offers a treasured heirloom so the party may survive what lies ahead.  
 The party gains two Cash Outs.

---

##### **10 — Legendary Find**

Buried beneath the ruins lies a powerful relic from a forgotten age.  
 Each player gains one OTAG Pack.

---

*Supply Drops occur after choosing Stay Out.*

---

<!-- rule:event-resolution -->
### **🎲 EVENT FLOW**

To resolve an Event:

1. Draw or roll for a random Event  
2. Carry out the Event's immediate instructions  
3. Record or apply any duration, delayed trigger, Town upgrade, next-encounter effect, or run-long effect created by that Event  
4. If multiple Events are to be resolved, repeat the process

An Event does **not** need to stop affecting the run before the next Event can be drawn. Once its immediate instructions are complete and any continuing effect is established, proceed to the next Event.

The printed Event card is the source of truth for that Event's specific effect and duration.

---

<!-- rule:travelers-system -->
### **🌟 TRAVELERS**

Travelers are special visitors that appear in Town whenever players choose to visit.

They provide unique benefits that can aid deckbuilding and progression.

> **Note:** Travelers do NOT cost a Town Action.

---

<!-- rule:traveler-bearded-grunt -->
### **🧔 Bearded Grunt**

Once per Town.

The party votes on one:  
• Each player gains 15 XP  
• Each player may use one additional building this Town beyond its normal limit  
• Each player may add up to 2 basic lands to their deck

---

<!-- rule:traveler-bullywug-royal -->
### **🐸 Bullywug Royal**

Once per Town.

Pay 50 XP and sacrifice any number of creature cards.

Choose a creature type.  
Gain that many creature cards of the chosen type.  
(The amount you sacrificed)

---

<!-- rule:traveler-card-copier -->
### **🃏 Card Copier**

Once per Town.

Pay 25 XP  
Create a permanent copy of a card in your deck.

---

<!-- rule:traveler-card-eating-ogre -->
### **👹 Card-Eating Ogre**

Once per Town.

Pay 35 XP and destroy a card in your deck.  
 If you do, gain 5 random cards that match the destroyed card’s:  
 • Color(s)  
 • Mana value  
 • Card type(s)

---

<!-- rule:traveler-cats-in-a-coat -->
### **🐱 Cats in a Coat**

Until the end of this Town, whenever a player uses the Castle, treat the result as a 6\.

---

<!-- rule:traveler-centaur-scouter -->
### **🐎 Centaur Scouter**

Once per Town.

Pay 35 XP   
A creature card in your deck gains your choice of trample or haste.

Additionally, when you next use the Tavern this Town, you may add up to 2 additional lands.

---

<!-- rule:traveler-centepoid-warrior -->
### **🪳 Centepoid Warrior**

Once per Town.

Pay 25 XP.   
A creature card in your deck has its base power and toughness doubled.

---

<!-- rule:traveler-commander-mimic -->
### **🧰 Commander Mimic**

Once per Town.

Pay 25 XP.   
Swap a card in your deck with your commander.  
(The chosen card must be a legal commander.)

---

<!-- rule:traveler-dwarven-artificer -->
### **⚒️ Dwarven Artificer**

Reveal 15 random artifacts within the players’ color identities.  
Each player may choose one.

---

<!-- rule:traveler-elven-demonologist -->
### **👹 Elven Demonologist**

Once per Town.

Pay 25 XP   
Gain a background of your choice in your commander's color identity.

---

<!-- rule:traveler-fungal-lich -->
### **🍄 Fungal Lich**

Once per Town.

Remove “Temporal” from a card you own.

Additionally, until the end of this Town, when you use Portal, you may spend up to 20 XP instead of 15\.

---

<!-- rule:traveler-giff-bandito -->
### **🦒 Giff Bandito**

Once per Town.

Pay 15 XP.  
Sacrifice up to 2 lands.  
Gain that many land cards that share a color with your commander.

---

<!-- rule:traveler-giant-ice-toad -->
### **� Giant Ice Toad**

You may pay any amount of XP to gain three times that amount as Essence.

---

<!-- rule:traveler-hell-s-librarian -->
### **�📚 Hell's Librarian**

Once per Town.

Pay 50 XP and lose 5 maximum HP for the rest of the run.  
Choose a card in your deck.  
That card begins the game in your opening hand.  
(It counts toward your starting hand size.)

---

<!-- rule:traveler-hollyphant -->
### **🕊️ Hollyphant**

You may use the Cathedral one additional time this Town.

---

<!-- rule:traveler-kimi-the-cat -->
### **😺 Kimi the Cat**

Once per Town.

Choose one:  
• The next time you Upgrade a card this Town, it gains an additional keyword  
• The next time you Augment a card this Town, it gains an additional augment

---

<!-- rule:traveler-silly-the-jester -->
### **🤡 Silly, the Jester**

Until the end of Town, Merchant packs cost 50% less.  
Round the final cost down to the nearest multiple of 5 (minimum 5 XP).

---

<!-- rule:traveler-the-trader -->
### **💰 The Trader**

Once per Town.

The party chooses one:  
 • Each player may make 2 additional trades this Town.  
 • Each player may sell up to two cards for XP equal to twice each card’s mana value.

---

<!-- rule:traveler-vanguard-mercenaries -->
### **⚔️ Vanguard Mercenaries**

Once per Town.

Pay 50 XP.   
Reveal 3 random Vanguards, then choose one.  
(You lose the Vanguard if you die)

---

<!-- rule:traveler-wandering-card-merchant -->
### **🛍️ Wandering Card Merchant**

When buying a pack from the Merchant, you may keep 2 cards instead of 1\.

---

<!-- rule:traveler-zorbo -->
### **🎩 Zorbo**

Once per Town.

Pay 50 XP.  
Reveal 2 random Trinkets, then choose one.

<!-- rule:wanderers-system -->
### **🛤️ WANDERERS**

Wanderers are mysterious figures, merchants, and survivors encountered between battles when the party Stays Out.

They provide lower-impact benefits focused on deck smoothing, minor upgrades, and resource exchange.

> **Note:** Each player may interact with a Wanderer **once**. Wanderers do NOT consume building uses.

---

<!-- rule:wanderer-wandering-merchant -->
### **🛍️ Wandering Merchant**

*Once per Wanderer encounter.*

Pay 5 XP.

Scryfall 5 random cards within your commander's color identity.
Choose one. Add it to your deck or sideboard.

---

<!-- rule:wanderer-rift-vendor -->
### **🌀 Rift Vendor**

*Once per Wanderer encounter.*

Pay 5 XP.

Choose one:
• Create three Temporal cards matching a chosen keyword or type. Shuffle them into your deck.
• Choose an instant or sorcery card in your deck. Create a Temporal copy of it and shuffle it into your deck.

> *(Temporal cards follow Portal rules.)*

---

<!-- rule:wanderer-quartermaster -->
### **🎒 Quartermaster**

*Once per Wanderer encounter.*

Pay 5 XP.

Move up to three cards between your deck and sideboard.
Then you may destroy one card from your deck.

---

<!-- rule:wanderer-traveling-smith -->
### **⚒️ Traveling Smith**

*Once per Wanderer encounter.*

Pay 5 XP.

Choose a creature card in your deck.
Choose one:
• That creature gets +1/+1.
• That creature gains your choice of: Flying, Lifelink, or Ward 1.

> *(This does not count as a Blacksmith modification.)*

---

<!-- rule:wanderer-road-gambler -->
### **🎲 Road Gambler**

*Once per Wanderer encounter.*

Pay 5 XP.

Sacrifice a card from your deck.
Roll a d6.

Choose a card type.
Gain a random card of that type that shares a color with the sacrificed card, with rarity based on the roll:

| Roll | Result |
|------|--------|
| 1–2 | Random Common |
| 3–4 | Random Uncommon |
| 5 | Random Rare |
| 6 | Random Mythic |

---

<!-- rule:wanderer-wayfarer -->
### **🚶 Wayfarer**

*Once per Wanderer encounter.*

Destroy a card from your deck.
Gain 5 XP.

---

<!-- rule:wanderer-hedge-mystic -->
### **🔮 Hedge Mystic**

*Once per Wanderer encounter.*

Pay 5 XP.

Destroy a card from your deck.
Scryfall 5 random cards within your commander's color identity.
Choose one and add it to your deck or sideboard.

---

<!-- rule:wanderer-essence-broker -->
### **💎 Essence Broker**

*Once per Wanderer encounter.*

Pay 5 XP.

Gain 10 Essence.

---

<!-- rule:wanderer-cartographer -->
### **🗺️ Cartographer**

*Once per Wanderer encounter.*

Pay 5 XP.

Choose one:
• Scryfall a land card of your choice within your commander's color identity. Add it to your deck or sideboard.
• Replace up to 2 basic lands in your deck with that many dual lands and/or triomes within your commander's color identity.

---

<!-- rule:wanderer-field-surgeon -->
### **🩹 Field Surgeon**

*Once per Wanderer encounter.*

Pay 5 XP.

You gain 5 life.

> *(You may exceed your maximum life this way. This excess life lasts only for the next encounter.)*

---

<!-- rule:wanderer-masked-courier -->
### **🎭 Masked Courier**

*Once per Wanderer encounter.*

Pay 5 XP.

Scryfall 3 random cards within your commander's color identity.
You may swap one card in your deck with one of the revealed cards.

---

<!-- rule:wanderer-relic-hunter -->
### **⚙️ Relic Hunter**

*Once per Wanderer encounter.*

Pay 5 XP.

Scryfall a random artifact card of Uncommon rarity or greater within your commander's color identity.
Add it to your deck or sideboard.

---

<!-- rule:wanderer-shadow-broker -->
### **🌑 Shadow Broker**

*Once per Wanderer encounter.*

Pay 5 XP.

Scryfall 2 random Rare cards within your commander's color identity.
Choose one and add it to your sideboard.

---

<!-- rule:wanderer-veiled-trinket-broker -->
### **🕯️ Veiled Trinket Broker**

*Once per Wanderer encounter.*

Pay 40 XP.

Reveal 2 random Trinkets.
Choose one and add it to your party's Trinkets.

> *(If the party already has a Trinket, the old one is replaced.)*

---

<!-- rule:wanderer-wandering-bard -->
### **🎵 Wandering Bard**

*Once per Wanderer encounter.*

Free.

Each player in the party gains 5 XP.

<!-- rule:event-timing -->
### **🎯 EVENT TIMING**

Events are drawn and resolved **after the post-encounter phase** and before the next encounter begins.

Pre-first-encounter note: The starting Event resolved before Encounter 1 cannot be a **Bad Event**. **Ambush counts as Bad**, so Ambush Events are also excluded from the starting Event. After deckbuilding and before Encounter 1 begins, players may make one seat-swap adjustment; after Encounter 1 begins, seat swapping is no longer allowed.

**Order of Operations:**

1. Encounter is defeated  
2. Rewards are resolved  
3. Players choose:  
   * Return to Town  
   * Stay Out  
4. Resolve Town or Stay Out effects  
5. **Resolve Event(s)**  
6. Begin next encounter

---

<!-- rule:event-frequency -->
### **🔢 EVENT FREQUENCY**

The number of Events resolved depends on the players’ choice:

* **Return to Town:** Resolve **1 Event**  
* **Stay Out:** Resolve **2 Events**, then add **+1 Event** for each consecutive Stay Out

Example:

* First consecutive Stay Out: 2 Events  
* Second consecutive Stay Out: 3 Events  
* Third consecutive Stay Out: 4 Events

Event scaling resets when the party returns to Town.

Events are drawn and handled **one at a time**, in the order they are drawn.

---

<!-- rule:event-design-rules -->
### **🧱 EVENT DESIGN RULES**

Events follow these constraints:

* Events are normally **drawn outside of combat**.  
* An Event may create an effect that applies to the **next encounter**, a later phase, Town, or the **rest of the run** when the card explicitly says so.  
* Events may reference or modify established systems such as Town, Stay Out, Crypt setup, rewards, Trinkets, Vanguards, Cash Outs, Scryfall generation, upgrades, and other run systems. Follow the referenced system's normal rules unless the Event overrides them.  
* If an Event creates a persistent or delayed effect, that effect remains active for the duration printed on the card.  
* Apply the Event to the players or game elements specified by the card; Events are not assumed to affect every player equally.  
* Life wording convention: **"lose/gain X life"** changes current life only. Permanent health changes must explicitly say **"Max HP"** or **"Max Life"**.

---

<!-- rule:event-classifications -->
### **📊 PRINTED EVENT CLASSIFICATIONS**

Current Event cards use the following printed classifications:

* **Good** — Primarily beneficial Events that provide resources, cards, upgrades, choices, or other advantages.  
* **Neutral** — Mixed, situational, tradeoff-driven, or low-risk Events that are not classified as Bad.  
* **Bad** — Harmful or dangerous Events that impose penalties, restrictions, losses, or significant risk.  
* **Ambush** — A distinct printed Event label for hostile surprise Events. **Ambush counts as Bad for all protections, restrictions, rerolls, and eligibility checks.**  
* **Town Upgrade** — Events that add or modify Town functionality, usually for the rest of the run unless the card specifies another duration.

These classifications determine Event-pool routing and rule checks. They do not replace the rules text printed on the Event card.

**Legacy terminology:** Any older rule text that says **"Bad Stuff Event"** means a **Bad Event** under this system. Because Ambush counts as Bad, Ambush is included in that legacy restriction.

---

<!-- rule:event-scaling -->
### **⚖️ EVENT SCALING *(Optional System Layer)***

Events may scale based on encounter progression when a card or Event pool specifically says so.

Possible scaling approaches include:

* Tiered Event Pools (similar to Affixes)  
* Increasing reward/value per encounter  
* Increasing risk or complexity at later stages

*(Defined in a separate Event Pool document if used.)*

---

<!-- rule:event-restrictions -->
### **🚫 RESTRICTIONS**

* Events are not normally drawn **during an active encounter** unless a card or system specifically instructs otherwise.  
* Events do **not occur during the Crypt**.  
* **No Event is drawn immediately before the Crypt.**  
* The starting Event before Encounter 1 cannot be **Bad**; because Ambush counts as Bad, it cannot be an **Ambush** either.  
* Continuing Event effects may overlap with Town, encounter setup, rewards, or other systems when the Event explicitly creates that overlap.

---

<!-- rule:stay-out-timing -->
### **🎯 WHEN STAY OUT OCCURS**

After an encounter is resolved, players must choose one:

• Return to Town  
 • Stay Out

If players choose to Stay Out, resolve the Stay Out sequence before proceeding to Events.

---

<!-- rule:stay-out-xp -->
### **⚡ XP REWARD**

Each player gains XP when choosing to Stay Out.

#### **📈 BASE XP**

* Each player gains \+10 XP

#### **📈 SCALING XP**

Each consecutive Stay Out increases XP gained by \+5.

Example:

* First Stay Out → \+10 XP  
* Second → \+15 XP  
* Third → \+20 XP  
* Fourth → \+25 XP

Scaling resets when the party returns to Town.

---

<!-- rule:stay-out-mystery-packs -->
### **📚 MYSTERY PACKS**

Each player gains **2 Mystery Packs** when Staying Out.

#### **⚡ SCALING**

Mystery Packs do not scale with consecutive Stay Outs.

#### **⚖️ RULES**

* Mystery Packs are opened immediately  
* Each player keeps **1 card** per pack — this limit applies regardless of Brands or other effects  
* The only exception is a specific Traveler interaction available in Town  

*(See Merchant in the Town System for full Mystery Pack rules)*

---

<!-- rule:stay-out-event-modifier -->
### **🎲 EVENT MODIFIER**

Staying Out increases Event frequency and scales with consecutive Stay Outs.

After resolving all Stay Out effects:

* **Base:** Resolve **2 Events** instead of 1  
* **Scaling:** Each consecutive Stay Out adds **\+1 additional Event**

Example:

* First Stay Out → 2 Events  
* Second → 3 Events  
* Third → 4 Events  
* Fourth → 5 Events

Scaling resets when the party returns to Town.

Events are resolved **one at a time, in order drawn**. Each Event must fully resolve before the next begins.

---

<!-- rule:stay-out-restrictions -->
### **❌ RESTRICTIONS**

While Staying Out:

• Players fully heal and reset to max HP  
 • "Lose/gain X life" affects current life only; permanent health changes must explicitly say **"Max HP/Life"**  
 • Players do not access Town buildings  
 • Players do not gain free building effects

---

<!-- rule:town-timing -->
### 🎯 **WHEN TOWN OCCURS**

After an encounter is defeated and rewards are resolved, players may choose to:

* Return to Town  
* Stay Out

If players choose to return, resolve Town before proceeding to Events.

<!-- rule:town-full-heal -->
### ❤️ **FULL HEAL**

All players are fully healed upon entering Town.

* Life totals are restored to current maximum HP
* "Lose/gain X life" affects current life only; permanent health changes must explicitly say **"Max HP/Life"**

<!-- rule:town-building-system -->
### **🏪 BUILDING SYSTEM**

Town does not use actions.

## The Crypt

<!-- rule:run-failure -->
### **❌ FAILURE**

If players lose an encounter:

* The party gains no XP from that encounter  
* No Cash Out or Loot Pool is resolved  
* The party must proceed to Post-Encounter Choice (Town or Stay Out)
* Missing Rewards (XP, Cash Out, and Loot Pool) is the only penalty

If players fail to defeat the Crypt, the run ends.

When the run ends (win or lose), each eligible player gains:

* **Essence equal to Deck CMC + Sideboard CMC**
* **Essence equal to any unspent XP**

---

<!-- rule:run-success -->
### **🏆 SUCCESS**

If players defeat the Crypt:

* The run is completed successfully  
* Players receive:  
  * **500 Essence**  
  * **Crypt Buff(s)** (if the awarded Buff is already unlocked, it is sold for **+250 Essence**)  
  * Additional progression rewards
* Run-end Essence rewards still apply (Deck CMC + Sideboard CMC, plus any unspent XP converted to Essence)

Progression rewards are recorded on each eligible player's persistent MTGR profile.

---

<!-- rule:crypt -->
### **👑 FINAL BOSS — THE CRYPT**

After the final scheduled encounter in the active mode, players face the Crypt.

**Rules:**

* No Affixes are applied  
* The Host takes the first turn  
* No Events are resolved

The Crypt represents the final and most difficult encounter of the run.

<!-- rule:crypt-reward-eligibility -->
### **👑 CRYPT REWARD ELIGIBILITY**

If a player leaves during the Crypt encounter and the party wins that same Crypt encounter, that player still receives the normal Crypt completion rewards.

If a player departs before the Crypt encounter begins, they do not qualify for Crypt completion rewards.

<!-- rule:crypt-completion-rewards -->
### **💎 CRYPT COMPLETION REWARDS**

On Crypt victory, each eligible player receives all of the following:

 • 500 Essence  
 • The awarded Crypt boss Buff

If the awarded Crypt boss Buff is already unlocked, that Buff is immediately sold for an additional 250 Essence.

<!-- rule:run-end-essence-rewards -->
### **🔁 RUN-END ESSENCE REWARDS (WIN OR LOSE)**

When the run ends — whether in victory or defeat — each eligible player receives all of the following:

 • Essence equal to their Deck CMC + Sideboard CMC  
 • Essence equal to any unspent XP

---

<!-- rule:crypt-fight-choice -->
### Crypt Fight Choice

The Crypt Fight Choice is an ultra-rare Cashout used immediately before the Crypt encounter begins.

When redeemed, the party collectively chooses which Crypt to fight from the standard Crypt pool instead of determining the Crypt randomly.

#### Rules

- Only one Crypt Fight Choice may be used per run.
- Additional copies presented during the same run are discarded unused.
- If it is not used before the Crypt encounter begins, it expires and is discarded.
- Resolve this choice before the Crypt encounter would otherwise be selected.

## Between Runs

<!-- rule:host-types-profiles -->
### **🏠 HOST TYPES AND PROGRESSION PROFILES**

There are two types of Hosts, each associated with a separate progression profile:

- **Verified Hosts** are trusted individuals who run the **Base table** — the game as it is intended to be played. Players who participate in Verified Host sessions share a unified progression profile. Crypt Buffs, Tickets, Brands, Captures, Achievements, and stored Essence earned here carry over between any Verified Host's table.

- **Regular Hosts** may run sessions using the Unverified Essence Counter, which supports custom game modes and alternate styles of play. Progress from these sessions is tracked on a separate profile and does not mix with a player's Verified progression.

Players maintain two independent profiles — one per Host type.

---

<!-- rule:notebook-addendum -->
### MTGRL RULES Addendum

#### ⚔️ GAMEPLAY CHANGES

##### Combat Targeting

- Players may attack any player regardless of Ally/Opponent status.

##### Teams

- No teams are used.

##### Scooping

- Individual scoops are Sorcery speed only.
- Full-party encounter concession may be declared at Instant speed.

#### 🎟️ REWARDS & TICKETS

##### Loot Pool Basic Lands

- Reroll any basic lands revealed while generating Loot Pool cards until the required number of nonland cards has been generated.

##### Ticket Pools

- Emblem tickets use the Legal pool.
- Vanguard tickets use the Legal pool.
- Conspiracy tickets use the Legal pool.

#### 🧱 DECKBUILDING & CARD POOL

##### Pack Diversity Minimum

- Pro Packs must contain at least 45 unique cards.
- Mythic Packs must contain at least 30 unique cards.
- OTAG Packs must contain at least 15 unique cards.

##### Card Legality

- Only cards legal in `game:paper` may be used.
- Only cards legal in `format:commander` may be used unless an MTGR effect explicitly provides an exception.
- No Alchemy-only cards.
- The initial generated 100-card pool follows the starting Commander's color identity; cards gained later from unrestricted effects may be outside that identity unless the effect says otherwise.

##### Deck Generation Validation

- Stickers, Attractions, and Contraptions are rerolled and replaced.
- A 100-card pool is not rerolled as a whole; replace only invalid or illegal individual cards.

#### 🗃️ LEGACY / DISABLED

##### Pre-Con Draft Option

- Disabled.

<!-- rule:progression-slot-rules -->
### **🧩 BUFF SYSTEM**

#### **🔒 Buff Limit**

• Maximum **4 Buff Slots**

---

#### **🧾 Counts As Buff**

• Buffs, Achievements, Tickets, Captures

---

#### **⚖️ Slot Costs**

 • Standard → 1  
 • Vanguard Ticket → 2  
 • Emblem Ticket → 3

---

## Host Reference Data

<!-- platform-rule:host-health-table -->
### **❤️ HOST HEALTH**

Host scaling is mode-dependent.

#### **Standard Mode — 3 Encounters**

* Tier 4 Affixes are not used

| Players | Encounter 1 | Encounter 2 | Encounter 3 | Crypt |
| ----- | ----- | ----- | ----- | ----- |
| 1–2 | 20 | 30 | 40 | **50** |
| 3 | 25 | 40 | 55 | **70** |
| 4 | 30 | 50 | 70 | **90** |
| 5 | 35 | 60 | 85 | **110** |
| 6 | 40 | 70 | 100 | **130** |

#### **Variant Mode — 4 Encounters**

* Tier 4 Affixes are used

| Players | Encounter 1 | Encounter 2 | Encounter 3 | Encounter 4 | Crypt |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 1–2 | 20 | 30 | 40 | 50 | **60** |
| 3 | 25 | 40 | 55 | 70 | **80** |
| 4 | 30 | 50 | 70 | 90 | **100** |
| 5 | 35 | 60 | 85 | 110 | **120** |
| 6 | 40 | 70 | 100 | 130 | **140** |

<!-- platform-rule:host-base-xp-table -->
### **📊 BASE XP BY ENCOUNTER MODE**

**Standard Mode — 3 Encounters**

| Encounter | Base XP |
| ----- | ----- |
| Encounter 1 | 30 |
| Encounter 2 | 40 |
| Encounter 3 | 50 |

**Variant Mode — 4 Encounters**

| Encounter | Base XP |
| ----- | ----- |
| Encounter 1 | 10 |
| Encounter 2 | 20 |
| Encounter 3 | 30 |
| Encounter 4 | 40 |

* Base XP is gained **per player**  
* Base XP is always awarded upon victory
* Failed encounters grant **no XP**

---

<!-- platform-rule:host-affix-structure -->
### **⚔️ AFFIX STRUCTURE**

#### **Standard Mode — 3 Encounters**

| Encounter | Affixes Applied |
| ----- | ----- |
| Encounter 1 | Tier 1 |
| Encounter 2 | Tier 1 \+ Tier 2 |
| Encounter 3 | Tier 1 \+ Tier 2 \+ Tier 3 |

#### **Variant Mode — 4 Encounters**

| Encounter | Affixes Applied |
| ----- | ----- |
| Encounter 1 | Tier 1 |
| Encounter 2 | Tier 1 \+ Tier 2 |
| Encounter 3 | Tier 1 \+ Tier 2 \+ Tier 3 |
| Encounter 4 | Tier 1 \+ Tier 2 \+ Tier 3 \+ Tier 4 |

* Affixes are rerolled each encounter  
* If combinations are game-breaking, reroll the highest tier

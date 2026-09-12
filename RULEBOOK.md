# MTG Roguelite — Complete Rulebook

> Generated from canonical rule units under `rules/`. Edit the source units, not this compilation.

## Before the Run

<!-- rule:game-overview -->
### **🎯 GAME OVERVIEW**

MTG Roguelite is a cooperative, run-based Commander variant where players form a party and face a Host-controlled series of encounters.

Each run progresses through escalating encounters, culminating in a final boss fight known as the **Crypt**.

Players must balance survival, progression, and risk as they push deeper into the run.

#### How the systems connect

- **Encounters** are the main gameplay challenge.
- **Rewards** provide XP, Cashouts, and cards after victories.
- **Town** provides controlled recovery and deck progression.
- **Stay Out** provides immediate resources with increasing Event variance.
- **Events** introduce between-encounter choices, effects, and complications.
- **The Crypt** is the final challenge that determines run success or failure.

The normal run sequence and its values remain governed by the dedicated Run Structure, Game Loop, reward, Town, Stay Out, Event, and Crypt rules.

#### Host adjudication

The Host is the party's competitive opponent during encounters and the run's fair, good-faith facilitator outside them. The dedicated Host Role and Table Philosophy rules govern this distinction.

Base tables follow the canonical rules. Custom tables may use clearly announced house rules or alternate modes, tracked through the appropriate progression profile.

Hosts may customize encounters and adjudicate unclear interactions within the active ruleset. The core run structure and the canonical rules for rewards, progression, and system limits should remain consistent unless a Custom table explicitly announces otherwise.

---

<!-- rule:player-quick-start -->
### Player Quick Start

Use this flow when playing on the supported MTGR Tabletop Simulator table. Detailed rules in the linked systems control any edge cases.

#### 1. Take a seat and claim a profile

1. Sit at an available player color.
2. Pick up and claim the **Player Profile** at that seat. The profile carries permanent progression and provides access to Town actions.
3. Before Encounter 1 begins, equip up to **4 total slots** of Crypt Buffs, Achievements, Tickets, and Captures. Brands use their own progression layer and do not occupy these slots.
4. Purchase Tickets and Brands, if desired. The Progression Shop is available before a run begins and after it ends.

The Player Profile must finish loading before the Start Token can use its progression modifiers.

#### 2. Build the starting deck

1. Take the **Start Token** and generate **5 random legal Commanders**, plus any extra options granted by progression. Choose 1 and place it in the command zone.
2. Select the colors in that Commander's color identity and generate the personal **100-card pool**.
3. Replace each invalid result individually. Stickers, Attractions, and Contraptions are invalid starting-pool results and are replaced. Do not reroll the entire pool.
4. Draft **22 cards** from the pool.
5. Add **16 lands**, adjusted only by an effect that explicitly changes that number. Use the normal dual-land allocation and fill the remaining land slots with basics.
6. Choose the **Free Choice Card** and stamp it with the Scryfall decal. It may be outside the Commander's color identity, but it must otherwise be Commander-legal and cannot be Sol Ring or a Gamechanger unless another rule allows it.
7. Resolve all equipped progression that grants starting cards or otherwise changes deckbuilding.
8. Put any additional cards into the Deck or Sideboard as their effects allow. Confirm that the library contains at least **39 cards**, reduced only by Brand of the Infinite Void. The Commander is the 40th card.

Cards spawned directly through Scryfall-based choices, card-producing Tickets, or Captures are treated as Scryfalled and follow the Deckbuilding restrictions. A progression item that does not grant a Magic card is not itself a Scryfalled card.

#### 3. Mark ready and finish pregame setup

1. Flip the **Ready Token** beside the Commander after deckbuilding and all pregame progression are complete.
2. Before Encounter 1 begins, players may make one seat adjustment. Seats cannot be changed after Encounter 1 begins unless an active rule explicitly allows it.
3. Use a figure or another clearly identified marker for party votes.
4. Resolve the starting **Good Event** and the Trinket selection in either order.
5. For the Trinket selection, reveal **3 random Trinkets**, vote for 1, and apply it for the run. Trinkets granted by player Tickets are additional to this voted Trinket.

Both steps must be complete before Encounter 1 begins, but neither must happen first.

#### 4. Play the run

During encounters, the party shares turn timing but each player controls their own cards, permanents, life total, mana, and game decisions. Follow Turn Structure for priority, attacks, triggers, and adjacent blocking.

After each scheduled encounter:

- On a win, resolve XP, Cashout, and Loot Pool rewards in any order.
- On a loss, skip those rewards.
- Win or lose, advance the scheduled encounter number. Do not replay a failed encounter.
- Before another scheduled encounter, vote for **Town** or **Stay Out**, then resolve that path and its Events.
- After the final scheduled encounter, Town is mandatory and no Event is drawn before the Crypt.

#### 5. End the run

The run ends when the party defeats or fails to defeat the Crypt. Use **End Session** on the Player Profile and include both the Deck and Sideboard when calculating run-end Essence.

Each eligible player receives Essence equal to:

- the Deck's total mana value plus the Sideboard's total mana value; and
- any unspent XP.

On a Crypt victory, each eligible player also receives **500 Essence** and the awarded Crypt Buff. If that Buff is already unlocked, it is sold automatically for an additional **250 Essence**.

When a player earns an Achievement, resolve it through the supported Player Profile workflow so it is recorded on that player's persistent profile.

---

<!-- rule:host-run-procedure -->
### Host Run Procedure

Use this procedure when hosting on the supported MTGR Tabletop Simulator table. The Host is the party's opponent during encounters and its fair facilitator outside them.

#### 1. Prepare the table

1. Sit in the **White** Host seat.
2. Locate the Encounter, Affix, Event, Doom, Traveler, Wanderer, Loot Pool, XP Master, Host Toolkit, and Host Town Actions objects.
3. Confirm that every player has claimed a Player Profile and that each profile has finished loading.
4. Confirm the active run mode. Standard mode has **3 scheduled encounters**; Variant mode has **4**.
5. If using a Custom table or house rules, announce every change before deckbuilding finishes.
6. Give players time to draft and resolve any progression choices that require Host assistance.

#### 2. Prepare Encounter 1

1. Count the active players. Use that count to determine the Host's Authority level, Doom count, health, and other player-count scaling.
2. Determine the encounter's Base XP and applicable Affix bonus XP.
3. Allow the one-time seat adjustment before Encounter 1.
4. Confirm that every player has flipped their Ready Token.
5. Resolve the starting Good Event and Trinket selection in either order.
   - For the Event, reveal cards until a **Good Event** is revealed. Resolve it and shuffle the other revealed cards back into the Event deck.
   - For the Trinket, reveal **3 random Trinkets**. The party votes for 1; apply that Trinket for the run. Resolve additional Trinkets granted by player Tickets under their own rules.
7. Select the encounter. Before the party has won an encounter, reroll any encounter type whose availability rule requires a previous victory.
8. Resolve encounter setup, Affixes, Host health, and turn order. The Host and party roll a d20 for non-Crypt encounters; the winner chooses who takes the first turn.

Both pregame steps must be complete before Encounter 1 begins, but neither must happen first.

#### 3. Resolve a scheduled encounter

If the party wins:

1. Award Base XP and Affix bonus XP through the XP Master.
2. Provide the Cashout selection through the Host Toolkit.
3. Shuffle the defeated encounter deck and reveal cards until **7 nonland cards** have been revealed. Add those cards to the shared Loot Pool.
4. Finish all three reward systems before the next path begins. They may be completed in any order.

If the party loses:

1. Award no encounter XP, Cashout, or Loot Pool.
2. Advance the scheduled encounter number. Do not replay the failed encounter.

After either result, reset players to their current maximum HP and continue to the post-encounter path. Encounter types gated by a prior victory remain unavailable until the party has actually won an encounter.

#### 4. Resolve Town or Stay Out

Before another scheduled encounter, the party votes for one path.

##### Town

1. Fully heal all players and reset the consecutive Stay Out count.
2. Reveal **1 random Traveler** from the Travelers bag. If Crossroads Cart is active, reveal 2 and the party chooses 1.
3. Ready the Host Town Actions tool and assist with Cathedral, Blacksmith, and other Host-resolved requests.
4. Allow players to use buildings and the available Traveler.
5. When the party is finished, return the Traveler to its bag.
6. Resolve **1 Event**, then prepare the next scheduled encounter.

##### Stay Out

1. Fully heal all players.
2. Award **10 XP per player**, plus 5 XP for each consecutive Stay Out after the first.
3. Give each player **2 Mystery Packs** to open immediately; each player keeps 1 card from each pack unless a specific effect says otherwise.
4. Roll **1d10** and resolve the corresponding Supply Drop from the Notebook.
5. Reveal **1 random Wanderer** and place it on the Wanderer podium. Each player may interact with it once unless its rule says otherwise.
6. Resolve **2 Events**, plus 1 for each consecutive Stay Out after the first. Resolve them one at a time.
7. Prepare the next scheduled encounter.

Players cannot use Town buildings while Staying Out. Returning to Town resets both Stay Out XP and Event scaling.

#### 5. Prepare the Crypt

After the final scheduled encounter, Town is mandatory whether the party won or lost. Resolve the normal Town visit, including its Traveler and buildings, but do not draw an Event. Stay Out is unavailable.

The Crypt receives no Affixes, and the Host takes the first turn.

#### 6. Finish the run

The run ends after the Crypt, whether the party wins or loses.

1. Have each eligible player collect their Deck and Sideboard and use **End Session** on their Player Profile.
2. Confirm that each eligible player receives run-end Essence for Deck mana value, Sideboard mana value, and unspent XP.
3. On a victory, award each eligible player **500 Essence** and the Crypt's Buff through the Player Profile. A duplicate unlocked Buff grants an additional **250 Essence** instead.
4. If an Achievement was earned, provide its token and have the player resolve it through their Player Profile.

Additional Crypt encounters are a Custom-table rule. Announce their rewards, failure consequences, and progression eligibility before using them; they are not part of the base run procedure.

---

<!-- rule:host-role-table-philosophy -->
### Host Role and Table Philosophy

The Host is both the party's opponent during encounters and the facilitator of the run.

#### During encounters

The Host should play with the intent to defeat the party using the legal tools available to them. The Host is not expected to intentionally play poorly, avoid vulnerable players, or spare the party merely to appear friendly.

Competitive encounter play is part of the Host's role. Every player should understand that attacking, disrupting, and eliminating players during an encounter are legitimate when they advance the Host's game plan.

#### Outside encounters

When administering setup, Town services, rewards, rules questions, takebacks, and other run systems, the Host must act fairly and in good faith. The Host must not use administrative authority to weaken a particular player or improve the Host's position in a later encounter.

Hosts should:

- explain consequential rulings and apply them consistently;
- make a genuine effort to provide the benefit promised by a Host-curated effect or service;
- distinguish a rules ruling from a table preference or house rule; and
- resolve mistakes and reasonable takeback requests with the shared goal of a fair, enjoyable run.

Players should treat the Host as another participant, not as an adversarial rules engine. Disagreements and misunderstandings should be handled in good faith, without treating competitive encounter play as evidence of biased adjudication.

#### Ruleset expectations

At a Base table run by a Verified Host, adjudication and granted cards or effects must follow the canonical MTGR rules unless a rule explicitly authorizes an exception.

At a Custom table using an Unverified profile, the Host may announce house rules, alternate modes, or legality overrides. Those changes must be disclosed before they become relevant, apply only to that Custom table, and do not change the Base rules.

---

<!-- rule:player-structure -->
### **👥 PLAYER STRUCTURE**

 • Players form a party and act as a unified team  
 • The Host controls all encounters and opposing forces  
 • Players cooperate, but are not restricted from interacting with each other

---

<!-- rule:deckbuilding -->
### Magic: The Gathering Roguelite — Deckbuilding Clarifications V2.1

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

##### Any-number exception

A card whose own rules text says **“A deck can have any number of cards named [that card]”** is exempt from this initial-deckbuilding duplicate restriction. A player may use separate Scryfall-based card-granting effects to spawn multiple copies of that card, provided each effect can legally select it and grants its own card.

Each spawned copy is still treated as Scryfalled. The exception changes only how many copies with that name may be spawned; it does not remove the Scryfall decal, trading, capture, combo, infinite-loop, or other deckbuilding restrictions.

This restriction applies to:

- the normal **Free Choice Card**;
- the additional free card granted by **One with Death**;
- the free Scryfall creature granted by **Fickle Duplicant**.

Examples:

- If a player drafts **Card A** from the 100-card pool, they may use their Free Choice Card to spawn a second **Card A**. That spawned copy is Scryfall-stamped.
- That player may not then use **One with Death** or **Fickle Duplicant** to spawn a third **Card A** during initial deckbuilding.
- If a card was not already drafted, a Scryfall-based free-card effect may spawn it normally, but another such effect may not spawn another copy of that same card during initial deckbuilding.
- If a card says a deck may contain any number of cards with its name, separate eligible Scryfall-based effects may each spawn a copy of it.

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

##### Non-infinite combos

A **non-infinite two-card combo** is any two cards alone causing an effect that wins you the game. These combos are banned. **Thassa's Oracle + Demonic Consultation** is an example. Ordinary synergy that does not meet this definition is not a banned two-card win combo.

Non-infinite combos using three or more cards are allowed, subject to other MTGR restrictions. A card with a Scryfall decal, or treated as Scryfalled, cannot be used as part of a non-infinite winning combo.

##### Infinite loops

If a loop involving two or fewer cards, or a loop involving a Scryfalled card, can be repeated infinitely, whether automatically or through repeated player choices, that loop may resolve no more than once per turn. Permanents or other game objects created during that resolution do not allow the same loop to resolve again that turn. An extra turn created by such a loop cannot be used to resolve the same loop again for the purpose of creating another extra turn.

Here, resolving a loop once means performing one iteration, not choosing an arbitrarily large number of repetitions. Cards treated as Scryfalled follow the same limit. Infinite loops involving three or more cards and no Scryfalled cards are not limited by this rule.

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

Finish deckbuilding and resolve all active pregame progression effects before this sequence. All pregame effects must be finalized before Encounter 1 begins.

Before the First Encounter:

Resolve both in either order:

 • Good Event (only the Good classification is eligible)
 • Trinket

Seat swap window (one-time):
 • After deckbuilding is complete and before Encounter 1 begins, players may swap seats to a table configuration that works best for them
 • After Encounter 1 begins, seat swapping is no longer allowed
 • Planned future seat-change options tied to a Building or Trinket are not active yet

Resolve the Event using the Event System flow and the Trinket using the Trinket System flow. Both must be complete before Encounter 1 begins, but neither must happen first.

Before later scheduled encounters, resolve Event(s) based on Town/Stay Out rules. Before the Crypt, Town is mandatory and no Events are drawn.

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

Trinkets are resolved during the pre-first-encounter setup step. The starting Good Event and Trinket selection may be resolved in either order.

Starting setup requirements:

- Good Event (only the Good classification is eligible)
- Trinket

Both must be complete before Encounter 1 begins, but neither must happen first.

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

#### ADDITIONAL TRINKETS FROM TICKETS

If a player has an active Trinket Ticket:

1. Present 3 random Trinkets from the same normal Trinket pool
2. That player chooses 1 Trinket (no table vote required)
3. Add the chosen Trinket to the party for the run, in addition to the normal voted Trinket

This occurs during pre-game setup before Encounter 1.

Ticket slot limits are per player, not per party.

---

#### RULES CONSTRAINTS

- A player may have at most 1 personal Ticket Trinket at a time; the normal voted party Trinket does not occupy that personal limit
- Trinket effects apply only as written on that Trinket
- If a Trinket would conflict with a core rule, the Host resolves the conflict using normal host adjudication
- The party is not capped at one total Trinket by this rule; this is a per-player limit

Unless otherwise specified on the Trinket, any party member may use that Trinket.

Normal Trinkets are party property for the duration of the run.

If a Trinket was created by a player's Trinket Ticket, that Trinket is tied to that player for session ownership purposes. If that player leaves the session, the Trinket is removed at the end of the current encounter.

If that player leaves during an encounter, the rest of the party may pilot that player's deck until the encounter ends. The Trinket remains active for the rest of that encounter, then is removed.

---

#### INTERACTION WITH EVENTS

The pre-first-encounter step resolves both the Good Event and Trinket selection in either order.

The starting Event must be classified Good. Follow Event Restrictions for selection eligibility.

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

> *When visiting Town, reveal two random Travelers from the Travelers bag. The party chooses one of those two to access during that Town visit.*

**Timing:** During Town, when Travelers are determined.  
**Limit:** No additional activation limit beyond normal Town timing.  
**Resolution:** Reveal two random Travelers from the Travelers bag instead of one. The party chooses one; only the chosen Traveler is available during that Town visit.

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

A win or loss advances the scheduled encounter number. Failed encounters are not replayed. After the final scheduled encounter, the party must visit Town, then face the Crypt.

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
 • 1 Trinket tied to their Ticket, in addition to the normal voted party Trinket
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

Before Encounter 1, resolve the pre-run Event and Trinket setup in either order. The starting Event must be classified Good. Both pregame steps must be complete before the encounter begins. After deckbuilding and before Encounter 1 begins, players may make one seat-swap adjustment; no seat swapping is allowed after Encounter 1 begins.

---

**Final scheduled encounter exception:** Follow Post-Encounter Choice: Town is mandatory after the final scheduled encounter, win or lose. Stay Out is unavailable, and no Events are drawn before the Crypt.

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

#### Myriad

When a creature controlled by a party member attacks the Host and its **Myriad** ability triggers, create **one** token copy. That token enters attacking the Host. Exile the token at end of combat as Myriad normally requires.

The party's shared turn does not create one Myriad token for each party member. For this ruling, the attacked Host is the single attacked opponent.

When a creature controlled by the Host attacks with Myriad, resolve Myriad normally. Create a token for each other opponent the Host creature could attack, and have each token attack the corresponding opponent or an eligible planeswalker they control, following the normal Myriad rules.

#### General interpretation rule

Use the card's controller wording to decide which view applies:

* **"Attacks alone," "you attack," or "creatures you control attack"** → evaluate only that player's creatures unless the effect explicitly says otherwise.
* **"Attacking creature," "other attacking creatures," or another combat-wide reference without a controller restriction** → evaluate all applicable attacking creatures across the party's shared combat.
* The phrase **"you control"** always remains controller-specific; the shared party turn does not make allies' permanents count as permanents you control.
* Blocking requirements and restrictions are evaluated using all creatures legally blocking that attacker, including legal adjacent blockers, unless the effect explicitly requires blockers controlled by a specific player.

This interpretation applies to Exalted, Battle Cry, Menace, Myriad, and other attack- or block-related effects with equivalent wording, subject to the specific Myriad ruling above.

---

<!-- rule:failed-encounter -->
### **🧭 FAILED ENCOUNTER TRANSITION**

If players lose an encounter, use this transition:

1. Skip encounter rewards (no XP, no Cash Out, no Loot Pool)
2. Advance the scheduled encounter number and proceed to **Post-Encounter Choice** (Town or Stay Out; Town is mandatory before the Crypt)
3. Reset all players to full HP before the next encounter begins

Missing Rewards (XP, Cash Out, and Loot Pool) is the only penalty. Continue the normal between-encounter flow without replaying the failed encounter. After the final scheduled encounter, visit Town and skip Events before the Crypt. A Crypt loss ends the run.

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

**Final scheduled encounter exception:** Follow Post-Encounter Choice: Town is mandatory after the final scheduled encounter, win or lose. Stay Out is unavailable, and no Events are drawn before the Crypt.

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

#### Host Scaling Power layer

Every encounter uses the complete Host Scaling Power layer:

1. **Authority**
2. **Doom**
3. **Demonic Persistence**
4. **Arcane Suppression**

Authority and Doom scale with the number of players. Demonic Persistence and Arcane Suppression are always active regardless of player count. Apply all four components during each encounter unless a more specific encounter rule explicitly changes one of them.

Authority supplies the Host's player-count-based control and tempo effects. Doom supplies the Host's player-count-based pool of triggered abilities. Their detailed effects and timing remain in their dedicated rule entries.

#### Authority Level

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

**Doom** is the triggered-ability component of the Host Scaling Power layer. Determine the Host's Doom count from the Doom Setup rule at the beginning of each encounter, then use the cards under the rules below.

* Doom cards are placed face down on the battlefield in the Host's Doom area
* Doom cards represent **triggered abilities** controlled by the Host  
* The Host may turn **1 Doom card face up each turn** unless otherwise specified (1 on a player turn and 1 on the Host turn)
* Turning a Doom card face up is a **special action**. It does not use the stack and cannot be responded to directly
* Turning a Doom card face up causes that Doom card's triggered ability to trigger
* Unless a Doom card says otherwise, its triggered ability uses the stack and players may respond to it

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

The party shares a turn: untap, upkeep, draw, precombat main, combat, postcombat main, end, and cleanup. Each member retains control of their own cards and permanents.

#### Shared timing

Use [Magic Comprehensive Rules](https://magic.wizards.com/en/rules) 805.4–805.7 and 805.9 for shared timing, treating the Host as the other team:

- Each member draws individually and has their own land-play allowance.
- Priority belongs to the team. Members act in an agreed order, following normal timing restrictions. The party passes only when all members are done acting. Consecutive passes by both sides resolve the top stack object, or advance an empty-stack step; afterward the active side receives priority.
- For simultaneous choices and triggers, the active side orders its choices or triggers first, then the other side. Follow 805.6a for multi-player draws and 805.4d for step/phase triggers referring to individual players.

This adopts timing only. MTGR retains individual health and death, controller-only extra turns, its Storm modification, player-versus-player attacks, adjacent blocking, and its attacks-alone interpretation. Other Two-Headed Giant rules are not imported.

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
### **👑 MTG ROGUELITE — DEMON GENERALS V2.0**

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

After a scheduled encounter ends, resolve rewards on a win or skip them on a loss. Before another scheduled encounter, the party must choose one:

• Return to Town
• Stay Out

After the final scheduled encounter, **Town is mandatory** whether the party won or lost. Stay Out is unavailable. Resolve Town normally, then begin the Crypt without drawing Events.

<!-- rule:town-flow -->
### ⚙️ TOWN FLOW

When the party returns to **Town**, resolve the following before Event resolution:

1. **Fully heal all players** to their current maximum HP.
2. **Reset the consecutive Stay Out count.** The next Stay Out starts again at **10 XP and 2 Events**.
3. **Reveal the Town Traveler** using the Travelers System.
4. **Resolve Town building usage and Traveler interactions.** Limited-use buildings reset their uses on each return to Town; unlimited buildings may be used as allowed by their own rules.
5. **Proceed to Event resolution**, except before the Crypt: begin the Crypt without drawing Events.

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

Before work begins, the player describes the direction or purpose of the modification. The Host proposes a modification that is usable under the active ruleset and provides a meaningful positive benefit appropriate to the purchased service. It cannot be negligible, unrelated, secretly detrimental, or a joke modification.

The player must approve the final modification before XP, a Cashout, or the building use is consumed. If the player rejects the first proposal, the Host may revise it once. If the revision is not accepted, cancel the request without cost and leave the card unchanged.

##### Upgrade standards

A standard Upgrade may provide one of the following:

- +1/+1 to a creature;
- +2 power;
- +2 toughness;
- reduce an appropriate generic mana cost by {1};
- reduce an appropriate activated-ability cost by {1}, normally to a minimum of {1};
- add one appropriate evergreen keyword;
- meaningfully color-shift the card; or
- provide another practical benefit at least comparable to one of these standards.

These are minimum expected values, not an exhaustive menu.

##### Augment standards

An Augment must add a new functional ability, meaningfully expand an existing ability, or otherwise change the card's rules text beyond the normal scope of an Upgrade. A small stat increase, one basic keyword, a basic color shift, or a {1} cost reduction alone does not qualify as an Augment.

The Host may refuse a modification that would be unhealthy, illegal, or inappropriate for the active ruleset. A refused request may be revised under the normal approval process or cancelled without cost.

##### Color shifting

Color shifting is a normal Blacksmith modification. When appropriate, it may change a card's color, colored mana symbols, color words, color identity characteristics, or other color-linked characteristics. It is not restricted to the player's current Commander color identity and does not override unrelated MTGR restrictions.

**Rules:** A card may only receive one Blacksmith modification unless another MTGR effect explicitly says otherwise.

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

Each player may describe the type of card, function, strategy, or effect they want. The request may include reasonable characteristics such as card type, theme, color, mana value, keyword, or intended role, but it cannot require one specific named card. When submitting the request, the player also records their current Commander's color identity and chooses one supported **Fallback Category** that represents its main function. Both are locked for this Cathedral use.

The Host provides one Good-Faith Offer. At a Base table, that card must be legal under the current Base rules, usable by the player, meaningfully related to the request, and a genuine attempt to support or improve the player's deck. It cannot be a deliberately weak, dead, unrelated, or joke selection.

The player may accept the offer or explain why it does not meaningfully satisfy the request. If rejected, the Host may make one revised Good-Faith Offer. If the revision is also declined, Host selection ends and the player uses the neutral fallback.

##### Neutral fallback

Generate five random, distinct cards from the locked Fallback Category within the recorded Commander's color identity. Replace only results that are invalid under the active ruleset, then the player chooses one of the five valid cards. The Host cannot choose, replace, or reroll a valid result because they dislike it.

Fallback Categories and their card-search mappings are maintained by MTGR. Players and Hosts choose from the supported categories and do not supply raw search queries.

Then choose:

* Add the accepted card to your deck or sideboard as normal, or
* Destroy it for **Essence equal to 2× its mana value**

All cards acquired from Cathedral are treated as **Scryfalled** and follow the normal MTGR Scryfall restrictions.

Host-offered Cathedral cards are not restricted by Commander color identity unless the request or another effect imposes that restriction. Neutral fallback cards must be within the Commander's color identity recorded when the request was submitted.

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

**Final scheduled encounter exception:** Follow Post-Encounter Choice: Town is mandatory after the final scheduled encounter, win or lose. Stay Out is unavailable, and no Events are drawn before the Crypt.

<!-- rule:supply-drop-resolution -->
### **🎁 SUPPLY DROP RESOLUTION**

When a Supply Drop is triggered:

 • Roll 1d10  
 • Resolve the corresponding result from the Supply Drop Table

Supplies affect each Party Member unless otherwise stated.

Supply Drops occur outside encounters. Resolve their effects immediately; they do not interact with an active encounter battlefield state unless the rolled result explicitly says otherwise.

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

Players may have life above their maximum this way. Carry that life into the next encounter; it may remain above maximum throughout that encounter. After the encounter ends, win or lose, remove any remaining excess as part of the normal reset to maximum HP. This does not increase Max HP.

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

#### Selection

Whenever the party arrives in Town, reveal **1 random Traveler from the Travelers bag**. That Traveler is available to the party during that Town visit. Resolve interactions according to its printed effect and limits.

If the party has **Crossroads Cart**, use that Trinket's selection procedure instead.

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
### **Giant Ice Toad**

You may pay any amount of XP to gain three times that amount as Essence.

---

<!-- rule:traveler-hell-s-librarian -->
### **📚 Hell's Librarian**

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

When the Stay Out flow calls for a Wanderer:

1. Reveal **1 random Wanderer**.
2. Each player may interact with that Wanderer **once**.
3. Pay the XP cost and resolve the effect printed in that Wanderer's rule entry.

Wanderers occur outside encounters and do not directly use or modify an active encounter battlefield state unless their own effect explicitly says otherwise. They do **not** consume Town building uses.

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

Pre-first-encounter note: The starting Event resolved before Encounter 1 must be classified **Good**. After deckbuilding and before Encounter 1 begins, players may make one seat-swap adjustment; after Encounter 1 begins, seat swapping is no longer allowed.

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

**Final scheduled encounter exception:** Follow Post-Encounter Choice: Town is mandatory after the final scheduled encounter, win or lose. Stay Out is unavailable, and no Events are drawn before the Crypt.

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

**Final scheduled encounter exception:** Follow Post-Encounter Choice: Town is mandatory after the final scheduled encounter, win or lose. Stay Out is unavailable, and no Events are drawn before the Crypt.

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
* The starting Event before Encounter 1 must be classified **Good**. Neutral, Bad, Ambush, and Town Upgrade Events are not eligible. Draw from the Good Event pool, or replace any non-Good result until a Good Event is selected.
* Continuing Event effects may overlap with Town, encounter setup, rewards, or other systems when the Event explicitly creates that overlap.

---

<!-- rule:stay-out-timing -->
### **🎯 WHEN STAY OUT OCCURS**

After an encounter is resolved, players must choose one:

• Return to Town  
 • Stay Out

If players choose to Stay Out, resolve the Stay Out sequence before proceeding to Events.

---

**Final scheduled encounter exception:** Follow Post-Encounter Choice: Town is mandatory after the final scheduled encounter, win or lose. Stay Out is unavailable, and no Events are drawn before the Crypt.

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

**Final scheduled encounter exception:** Follow Post-Encounter Choice: Town is mandatory after the final scheduled encounter, win or lose. Stay Out is unavailable, and no Events are drawn before the Crypt.

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

After a scheduled encounter ends and victory rewards, if any, are resolved, players may choose to:

* Return to Town  
* Stay Out

If players choose to return, resolve Town before proceeding to Events.

**Final scheduled encounter exception:** Follow Post-Encounter Choice: Town is mandatory after the final scheduled encounter, win or lose. Stay Out is unavailable, and no Events are drawn before the Crypt.

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

If players lose a scheduled non-Crypt encounter:

* The party gains no XP from that encounter  
* No Cash Out or Loot Pool is resolved  
* Advance the scheduled encounter number and proceed to Post-Encounter Choice (Town or Stay Out; Town is mandatory before the Crypt)
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

#### Before the Crypt

After the final scheduled encounter ends, resolve rewards on a victory or skip them on a loss. The party must then visit Town; it cannot Stay Out. Resolve the normal Town visit, including healing, buildings, and its Traveler, then begin the Crypt without drawing Events.

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

- **Verified Hosts** are trusted individuals who run the **Base table** — the game as it is intended to be played under the canonical MTGR rules. Players who participate in Verified Host sessions share a unified progression profile. Crypt Buffs, Tickets, Brands, Captures, Achievements, and stored Essence earned here carry over between any Verified Host's table.

- **Regular Hosts** may run **Custom tables** using the Unverified Essence Counter. Custom tables may use alternate modes, house rules, or explicit legality overrides announced by the Host. Those changes apply only to that Custom table and do not alter the Base rules. Progress from these sessions is tracked on a separate profile and does not mix with a player's Verified progression.

Players maintain two independent profiles — one per Host type.

---

<!-- rule:progression-reference -->
### **🌟 MTG ROGUELITE — PERMANENT PROGRESSION**

Season 1 permanent progression is tied to a player profile and persists across future runs.

How permanent progression is acquired:

- **Crypt Buffs** are earned through Crypt victories.
- **Achievements** are earned by meeting gameplay milestones.
- **Tickets** are purchased with Essence.
- **Brands** are purchased with Essence and ranked up through repeated purchases.
- **Captures** are purchased with Essence.

Season 1 progression layers:

- Crypt Buffs
- Tickets
- Brands
- Achievements
- Captures

Unless otherwise stated, activated progression effects may be used **once per encounter**.

The current Crypt Buff, Ticket, Brand, and Achievement entries are maintained as individual canonical rule units under `rules/progression/` and are compiled into the generated player/full rulebooks.

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

<!-- rule:brands-system -->
### Brands System

#### 🛒 PURCHASE TIMING

Brands are purchased from the **Progression Shop**. The Progression Shop is available:

* **before a run begins**;
* **after a run ends**.

---

#### ⚙️ CORE RULES

* Brand effects are persistent across runs.
* Brands affect deckbuilding, Commander generation, or pack resolution as written.
* Brand effects are stackable — there is no hard cap on how many times a Brand can be purchased.
* Each Brand has **Ranks**. Each time you purchase a Brand, its Rank increases by 1. The cost to purchase a Brand is equal to its **base value × its current Rank**.

**Stacking cost example (Brand of the Cartographer — 500 Essence base):**

| Rank | Cost |
| :--- | :--- |
| Rank 1 | 500 (base × 1) |
| Rank 2 | 1000 (base × 2) |
| Rank 3 | 1500 (base × 3) |

---

#### 🧠 DESIGN INTENT

Brands are intended to sit between one-run setup choices and long-term account unlocks.

They let players shape how they draft and build without replacing the normal encounter progression systems.

<!-- rule:progression-shop -->
### 💠 PROGRESSION SHOP

The **Progression Shop is MTGR's persistent Essence shop**. It is available **before a run begins** and **after a run ends**.

All purchases use **Essence**.

**Slot Limit:** Players have **4 slots** for inventory items, shared between:

* Crypt Buffs
* Tickets
* Achievements
* Captures

**Brands:** Brands are a separate progression layer. Each Brand has **Ranks** and may be purchased multiple times. Each time you purchase a Brand, its Rank increases by 1. The cost to purchase a Brand is equal to its **base value × its current Rank**.

*Example: A 1000 Essence Brand costs 1000 for Rank 1, 2000 for Rank 2, 3000 for Rank 3, and so on.*

#### After-run Progression Options

After a run ends, players may use the Progression Shop options below.

---

#### Sell Buffs — 250 Essence

Sell a **Crypt Buff** back to the Host in exchange for 250 Essence.

**Rules:**

* If Crypt completion awards a Crypt Buff you already have unlocked, that duplicate buff is immediately sold for +250 Essence.
* You may sell a Crypt Buff after the run ends.

---

#### Capture Non-Commander — 500 Essence* (base cost)

Save 1 card from your deck in your collection.

**Rules:**

* A card with a **Scryfall decal**, or a card already treated as Scryfalled by another MTGR rule, **cannot be captured**.
* Captured cards may be used in future deck builds.
* A card granted through the Capture system is **treated as Scryfalled** when used in a run.
* A captured card therefore cannot be traded or captured again and follows the combo and infinite-loop restrictions in Deckbuilding.
* Captured cards count against your deck's 39 cards; they do not have a free allocation.
* **Stacking cost:** For each capture after the first, the cost increases by 250 Essence:
  * 1st: 500 Essence
  * 2nd: 750 Essence
  * 3rd: 1000 Essence
  * and so on.
* Each capture occupies 1 slot.

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

## Seasonal Events

<!-- rule:trinket-legendary-shovel -->
### Legendary Shovel

When the party gains this Trinket, each player may bury one card from their deck: move it to their sideboard and put a growth counter on it.
At the end of each encounter, each player may unearth their buried card, returning it to their main deck. If they leave it buried, put another growth counter on it.
When a card is unearthed, apply the effect matching its number of growth counters:
1: Upgrade it.
2: Augment it.
3: Upgrade and Augment it.
4 or more: No effect.
If this Trinket is chosen before deckbuilding, bury cards after deckbuilding is complete.

<!-- rule:trinket-karametras-cornucopia -->
### Karametra’s Cornucopia

Creatures the Party controls have absorb 1.

Once each Party turn, whenever a player casts their first creature spell that turn, that player chooses one:

Search their library for a basic land card, reveal it, put it into their hand, then shuffle.
Put a land card from their hand onto the battlefield tapped.

<!-- rule:trinket-nyleas-sight -->
### Nylea’s Sight

Twice per encounter, target creature’s toughness becomes 1.

<!-- rule:trinket-full-moon -->
### Full Moon

Double-faced permanents enter the battlefield under players’ control with their back faces up. This applies to both transforming double-faced cards and modal double-faced cards.

<!-- rule:trinket-shattered-glass -->
### Shattered Glass

At the beginning of the Party’s upkeep, each player may fragment a nontoken creature they control without a splinter counter. (To fragment a creature, create a token that’s a copy of it, except it’s 1/1. Then put a splinter counter on that creature and the token. A creature with a splinter counter can’t be fragmented.)

<!-- rule:trinket-scaery-pumpkin -->
### Scaery Pumpkin

The party can’t Stay Out.
Whenever the party enters Town, roll for a Supply Drop.

<!-- rule:trinket-dead-leaf -->
### Dead Leaf

Once per encounter, the Party may choose a player. That player and each permanent they control phase out until that player’s next turn. Activate only as a sorcery.

<!-- rule:trinket-pickled-pumpkin -->
### Pickled Pumpkin

Players can’t trade cards.

Whenever a player gains XP, they gain 20% additional XP.

<!-- rule:trinket-stolen-pumpkin -->
### Stolen Pumpkin

Players can’t purchase packs in Town.

Whenever a player gains XP, they gain 60% additional XP.

<!-- rule:trinket-forgotten-key -->
### Forgotten Key

{3}: Conjure a random Sword of X and Y and attach it to an attacking creature you control. Exile that Equipment at the end of the turn.
Activate only once per party turn.
Card pool: otag:sword-of-x-and-y

<!-- rule:seasonal-events -->
### Seasonal Events

Seasonal Events add themed content to a run. Use the content pools for the selected Seasonal Event; a seasonal rule is not automatically part of the normal pools. Follow the normal run rules unless the seasonal content explicitly changes them.

A Seasonal Event is distinct from an individual Event card drawn between encounters.

- [Harvest Moon](harvest-moon/overview.md)
- [High Tide Hijinks](high-tide-hijinks/overview.md)

Completion rewards follow the normal progression rules and retain their existing unlock requirements.

<!-- rule:event-scarecrow-feast -->
### Scarecrow Feast

The party chooses one:
Join the feast — Each player begins the next encounter with a Scuttlemutt on the battlefield.
Beat the feasters — Each player begins the next encounter with a random Equipment on the battlefield. That Equipment’s equip cost permanently becomes {0}.

<!-- rule:event-cabin-in-the-woods -->
### Cabin in the Woods

The party chooses one —
Avoid — Flip a coin. If the party wins the flip, resolve a random Good Event. Otherwise, nothing happens.
Explore — Roll a d6.
1 — Resolve two random Bad Events.
2 — Resolve a random Bad Event.
3-4 — Resolve a random Neutral Event.
5 — Resolve a random Good Event.
6 — Resolve two random Good Events.

<!-- rule:event-broken-mirror -->
### Broken Mirror

Each player chooses one:
Put it back together — Gain an upgraded copy of your commander. You may put it into your deck or sideboard, or replace your commander with it.
Take a shard — Gain the Shattered Glass Trinket.

<!-- rule:event-verdant-shrubbery -->
### Verdant Shrubbery

Each player chooses a creature card in their Mainboard. For the rest of the run, each chosen card gains:
“{T}: Add one mana of any color.”
Each player whose commander is green chooses two creature cards instead.

<!-- rule:event-turkey-uprising -->
### Turkey Uprising

For the next encounter, at the beginning of each Host upkeep, the Host creates a 1/1 Bird creature token without flying.
Whenever a Bird the Host controls dies during that encounter because of a player’s effect or damage dealt by a creature that player controls, that player creates a Food token. This includes effects that cause the Bird to be sacrificed.

<!-- rule:event-unseen-doors -->
### Unseen Doors

The party chooses one —
Spiral door — Reveal Events until you reveal a good Event and a bad Event. Resolve both, then shuffle the other revealed Events back into the Event deck. These do not count toward the Chaos Buff.
Inverted door — Resolve the last Event again.
Upside-down door — Resolve the bottom Event of the deck.

<!-- rule:event-rhystic-library -->
### Rhystic Library

Each player chooses one —
Learn — Gain two random sorcery cards and one random enchantment card within your commander’s color identity.
Discuss — Choose a card in your Mainboard. Each player who chose Discuss may gain a copy of one card chosen this way.

<!-- rule:event-explosive-volcano -->
### Explosive Volcano

The party chooses one —
Brave the Eruption — During the next encounter, at the beginning of each party upkeep, Explosive Volcano deals 1 damage to each player. If the party wins that encounter, commander spells the players cast cost {1} less to cast for the rest of the run. Red commander spells cost {1}{R} less instead.
Take Shelter — During the next encounter, the first time each player casts their commander, it costs {1} less to cast. A red commander costs {2} less instead.

<!-- rule:event-kithkin-hovel -->
### Kithkin Hovel

Each player may destroy an artifact card in their Mainboard.
Each player who does reveals three random artifact cards of a lower rarity than the card they destroyed, then gains those cards.
If that player’s commander is white, reveal artifact cards of the same rarity instead.

<!-- rule:event-urzas-sylex -->
### Urza’s Sylex

Each player may choose a card in their Mainboard.
During the next encounter, each chosen card begins in its owner’s opening hand and becomes Temporal.

<!-- rule:event-pumpkin-smashing -->
### Pumpkin Smashing

Each player may destroy a creature card in their deck. Each player who does gains 3 random instant or sorcery cards within their color identity.

<!-- rule:event-cave-of-spoils -->
### Cave of Spoils

Each player secretly chooses Caution or Greed, then all choices are revealed simultaneously.
Caution — At the beginning of the next encounter, create one Treasure token.
Greed — At the beginning of the next encounter, create three Treasure tokens. The Host begins that encounter with a random Pirate creature card suspended with three time counters for each player who chose Greed.

<!-- rule:event-the-hunt-is-on -->
### The Hunt Is ON!

At the beginning of each Host turn, the Host creates a token copy of a random Werewolf creature with mana value X or less, where X is the number of lands the Host controls.
The Werewolf with the highest mana value stays on its transformed face and can’t transform back. Break ties by rolling a d20.
Once there are four or more Werewolves on the battlefield, all Werewolves are locked on their transformed faces for the rest of the encounter. Werewolves that enter afterward enter transformed and can’t transform back.
The party gains the Full Moon Trinket. If the party already has it, each player may augment a double-faced card without paying its augment cost instead.

<!-- rule:event-card-fetcher -->
### Card Fetcher

Each player chooses one —
Established Synergy — Choose a card from your commander’s EDHREC page with a synergy score of 40% or greater.
New Discovery — Choose a card marked “New” on your commander’s EDHREC page.
Host’s Recommendation — The Host chooses a card from your commander’s EDHREC page for you.
Add the chosen card to your Mainboard. It can’t be a Game Changer.

<!-- rule:event-burn-the-witch -->
### BURN THE WITCH

At the beginning of each Host upkeep, the Host conjures two random Human creatures with mana value X or less onto the battlefield, where X is the number of lands the Host controls.
Humans the Host controls have haste and attack each combat if able. Whenever the Host attacks with one or more Humans, the party chooses one player. All attacking Humans attack that player.
Add the conjured Humans to the loot pool.

<!-- rule:event-headless-horsey -->
### Headless Horsey

Reveal 10 random Horse cards. Each player chooses one to keep.
Upgrade each chosen card, then color-shift it to be within that player’s color identity. It becomes a Zombie in addition to its other types.

<!-- rule:event-vanguard-caravan -->
### Vanguard Caravan

Roll a d4, then reveal that many random Vanguards.
Each player may choose one Vanguard revealed this way. A Vanguard gained this way lasts until that player dies during an encounter.

<!-- rule:event-plane-to-plane-circus -->
### Plane-to-Plane Circus

The Host shuffles each player’s Mainboard, looks at its top three cards, and chooses a nonland card from among them. If there isn’t one, repeat this process for that player.
Without revealing the chosen cards or saying their names, the Host describes each card using only information from its type line and rules text. The party guesses the name of each card.
If every chosen card is guessed correctly, each player gains XP equal to four times the total mana value of the chosen cards.

<!-- rule:event-meeting-of-the-planes -->
### Meeting of the Planes

Reveal five random planeswalker cards within the party’s combined commander color identities.
Each player may reveal a planeswalker card from their Mainboard. For each player who does, roll a d6 and reveal that many additional random planeswalker cards within that player’s commander color identity.
Each player may gain up to two cards revealed this way.

<!-- rule:event-abandoned-supply-pack -->
### Abandoned Supply Pack

Each player rolls a d6 and gains the card corresponding to the result:
1 — Nothing
2 — Commander’s Sphere
3 — Thought Vessel
4 — Swiftfoot Boots
5 — Arcane Signet
6 — Sol Ring

<!-- rule:event-plane-trader -->
### Plane Trader

Reveal a random nonland card, then choose one of its card types. Reveal 2d20 random cards of that type.
Each player may either pay 5 XP or destroy a card of that type in their Mainboard to gain one card revealed this way.
For the rest of the run, whenever the party enters Town, reveal 1d20 random cards of the chosen type. Each player may pay 5 XP to gain one card revealed this way.

<!-- rule:event-lion-and-a-mouse -->
### Lion and a Mouse

The party chooses one —
Truth — Shuffle the Event deck. After this Event resolves, resolve two additional Events.
Lie — Skip the next Event that would be resolved.

<!-- rule:event-covenant -->
### Covenant

Each player reveals cards from the top of their deck until they reveal a creature card.
If at least three creature cards revealed this way have different powers, each player gains a random Tier 1 cashout. Otherwise, destroy the revealed creature cards. Each player then creates a random Werewolf, color-shifted to be within their color identity. It stays transformed if able.
Shuffle all remaining revealed cards back into their owners’ decks.

<!-- rule:event-equinox -->
### Equinox

Each player chooses two creature cards in their Mainboard. Those cards gain shadow.
At the beginning of each Town, each player must choose a creature card in their Mainboard without shadow. That card gains shadow.

<!-- rule:event-forgotten-key -->
### Forgotten Key

The party gains the Forgotten Key Trinket. If the party already has it, its activation cost becomes {0} instead.

<!-- rule:event-rewrite-reality -->
### Rewrite Reality

Each player may choose a card in their Mainboard and remove any amount of text from that card.
This can’t change the card’s mana value or any of its costs. When removing text, complete words must be removed rather than parts of words.
The Host may reject any change they determine is too powerful.

<!-- rule:event-sword-in-the-stone -->
### Sword in the Stone

The party chooses one —
Draw the Sword — Reveal a random Sword of X and Y. The party chooses one player to gain it. For the rest of the run, that Equipment gains:
“When this Equipment enters, you become the monarch.”
The next encounter is a Master Fight.
Return Later — Set Sword in the Stone aside, then resolve another Event. The next time the party would resolve an Event after returning to Town, it may resolve Sword in the Stone instead.

<!-- rule:event-overflowing-feast -->
### Overflowing Feast

For the rest of the run, at the beginning of the first upkeep of each encounter, each player creates two Food tokens.

<!-- rule:event-attunement-tower -->
### Attunement Tower

The party chooses which Crypt boss it will face during this run.

<!-- rule:event-wandering-planes-saboteur -->
### Wandering Planes Saboteur

The party chooses a keyword or a card type other than instant or sorcery, then reveals fifteen random cards with the chosen property.
The party may remove up to six of those cards from consideration. The Host chooses one of the remaining cards and begins the next encounter with that card on the battlefield under the Host’s control.

<!-- rule:event-crowstorm -->
### Crowstorm

When a player casts the party’s first spell of the next encounter, counter that spell. That player then casts a Storm Crow without paying its mana cost.

<!-- rule:event-its-just-standing-there-menacingly -->
### It’s Just Standing There… MENACINGLY

At the beginning of each Host turn, the Host conjures a random nonlegendary Scarecrow creature with mana value X or less onto the battlefield, where X is the number of lands the Host controls.
Scarecrows the Host controls have defender and “{T}: Add one mana of any color.”
While the Host controls five or more Scarecrows, those creatures lose defender.
At the end of each Host turn, if the Host controls ten or more Scarecrows and doesn’t control a Reaper King, the Host conjures a Reaper King onto the battlefield.
If the party wins the encounter, each player may choose a creature card in their main deck. It gains “{T}: Add one mana of any color.”

<!-- rule:event-commanders-guild -->
### Commander’s Guild

Each player chooses one —
New Perspectives — You may exchange your commander with a legendary creature card in your Mainboard or Sideboard.
Like-Minded — Use the Castle for free, treating the die result as a 6. You may put one of the generated commanders into your Mainboard or Sideboard instead of making it your commander.

<!-- rule:event-endless-sea -->
### Endless Sea

Each player’s commander gains a random keyword ability for the rest of the run.
Each player whose commander is blue gains two random keyword abilities instead.

<!-- rule:event-mirror-dimension -->
### Mirror Dimension

For the rest of the run, the following Town Action is available:
Pay 15 XP. Destroy any number of cards in your Mainboard. For each card destroyed this way, gain a random card within your commander’s color identity.

<!-- rule:event-trench-of-the-void -->
### Trench of the Void

Each player gains two random Tier 1 Cash Outs.
Each player whose commander is black gains an additional random Tier 2 Cash Out.

<!-- rule:event-timeless-market -->
### Timeless Market

For the rest of the run, the following Town Action is available:
Once per Town, one player may pay 65 XP. If they do, that player gains a random Tier 3 Cash Out.

<!-- rule:event-pumpkin-harvest -->
### Pumpkin Harvest

The party must choose a remaining Pumpkin Trinket from the Trinket pile and gain it.

<!-- rule:event-youre-taking-too-long -->
### YOU’RE TAKING TOO LONG

The party chooses one:
- Gain the Scaery Pumpkin Trinket.
- Each player gains 25 XP.

<!-- rule:event-sliver-king -->
### Sliver King

Each player chooses a creature card in their Mainboard, then chooses a creature type that card has.
Each chosen card gains a random Sliver augment associated with the chosen creature type. That augment affects creatures of that type controlled by all players.

<!-- rule:event-spartan-plains -->
### Spartan Plains

Each player chooses a creature card in their Mainboard. Each chosen card gains vigilance.
Each player whose commander is white chooses two creature cards instead.

<!-- rule:event-lost-ark -->
### Lost Ark

Each player chooses a creature card in their Mainboard. For the rest of the run, each chosen card gains:
“When you cast this spell, create a Treasure token.”
Each player whose commander is red chooses two creature cards instead.

<!-- rule:event-wishing-well -->
### Wishing Well

Each player chooses a card using Scryfall and adds it to their Mainboard. Each choice must follow the Scryfall Rules.

<!-- rule:event-earthquake -->
### Earthquake!

Each player destroys two land cards in their Mainboard. For each card they destroy this way, they add a Wastes to their Mainboard.

<!-- rule:event-dragon-hoard -->
### Dragon Hoard

The Host secretly rolls a d6.
Reveal fifteen random artifact cards with a Scryfall USD price of $50 or greater.
One at a time, the party may gain one card revealed this way and choose which player receives it. After each card is gained, the party chooses whether to continue or stop.
If the number of cards gained exceeds the Host’s secret result, reveal the result and end this Event immediately. During the next encounter, the Host takes the first turn and begins with a 5/5 red Dragon creature token with flying on the battlefield.
Otherwise, when the party stops, reveal the result and discard the remaining cards.

<!-- rule:event-you-stepped-on-a-leaf -->
### You Stepped on a Leaf

The party chooses one:
Attend the funeral — Each player gains 2 cashouts.
Steal the corpse — The party gains the Dead Leaf Trinket.

<!-- rule:event-peaceful-orchard -->
### Peaceful Orchard

Each player gains 5 Max HP for the rest of the run.
Each player whose commander is white gains 10 Max HP instead.

<!-- rule:event-cornfields -->
### Cornfields

Once per Town, each player may pay 20 XP to wander the cornfields. That player rolls a d20 and receives the corresponding result:
1: The Reaper, King No More — The party will face the Reaper King during the Crypt encounter.
2–5: Gain a free Scryfall selection of any nonlegendary Scarecrow.
6–10: Begin the next encounter with four Food tokens.
11–15: Gain a Tier 2 cashout.
16–19: Gain a free OTAG pack.
20: Gain a random Trinket.

<!-- rule:event-trick-or-treat -->
### Trick or Treat

Each player chooses one:
Trick — Begin the next encounter with a random Curse with mana value 4 or less attached to you. Gain 1 cashout.
Treat — Gain 3 random Food cards to add to your deck.

<!-- rule:event-ivy-forest -->
### Ivy Forest

Each player reveals a random creature card within their commander’s color identity and gains it.
Each player whose commander is green instead reveals three random mythic rare creature cards within their commander’s color identity and gains them.

<!-- rule:event-tomb-of-the-forgotten -->
### Tomb of the Forgotten

Each player chooses a card using Scryfall and adds it to their Mainboard.
Each card gained this way becomes Temporal.

<!-- rule:event-strung-up -->
### Strung Up

Each party member begins the next encounter with their commander on the battlefield. Those commanders become artifacts, lose all other card types and abilities, and gain “{2}: Sacrifice this permanent.”
Any player may pay their commander’s mana cost to exile it, then return it to the battlefield under its owner’s control.
At the end of the encounter, each player whose commander is still a noncreature artifact augments it. That commander remains a noncreature artifact and regains its original abilities.

<!-- rule:event-exotic-car-show -->
### Exotic Car Show

Roll a d12, then reveal that many random Vehicle cards within the party’s combined commander color identities.
The party may gain any number of cards revealed this way and distribute them among the players.

<!-- rule:event-card-vortex -->
### Card Vortex

Each player chooses a colorless card in their Mainboard and places it into a shared pile.
Upgrade each card in the pile, then randomly redistribute those cards among the players, one card to each player.

<!-- rule:event-only-need-to-be-faster-than-you -->
### Only Need to Be Faster Than You

The party votes for a player. Break a two-way tie with a coin flip or a three-way tie with a die roll.
At the beginning of the Host’s first upkeep, the Host conjures an Unstoppable Slasher. It perpetually gains “This creature attacks the chosen player each combat if able” and “Whenever this creature leaves the battlefield, return it to the battlefield under its owner’s control with a stun counter on it.”

<!-- rule:event-harvest-festival -->
### Harvest Festival

Whenever a player chooses a card to gain from any pack, they may give up that card instead. If they do, they gain Essence equal to twice its mana value.
This applies to all packs, including Merchant, Mystery, and Cash Out packs.

<!-- rule:event-splendid-skies -->
### Splendid Skies

Each player chooses a creature card in their Mainboard. For the rest of the run, each chosen card gains flying.
Each player whose commander is blue chooses two creature cards instead.

<!-- rule:event-artifact-on-a-pedestal -->
### Artifact on a Pedestal

Reveal one random mythic rare artifact card for each player.
Each player may gain the artifact revealed for them.
For each artifact gained this way, the Host begins the next encounter with one random Trap card face down. The Host may cast those Trap cards without paying their mana costs whenever they could cast an instant.

<!-- rule:event-bloody-altar -->
### Bloody Altar

The party chooses one —
Blood for Initiative — Each player loses 5 life. The party takes the first turn during the next encounter.
Blood for Fortune — Each player may lose any amount of life up to 10. Record the amount each player loses this way.
If the party wins the next encounter, each participating player gains XP equal to five times the life they lost to Bloody Altar.
Leave — During the next encounter, each player has −1 starting hand size and −1 maximum hand size, and the Host takes the first turn.
After that encounter, two players chosen at random each gain a Cathedral Cash Out, whether or not the party wins.

<!-- rule:event-stoneforge-caravan -->
### Stoneforge Caravan

Each player chooses one —
Create — Reveal three random rare Equipment cards within your commander’s color identity. Gain one card revealed this way.
Runeforge — Choose an Equipment card in your Mainboard. For the rest of the run, it gains:
“At the beginning of your first upkeep during each encounter, if this card is in your library, you may search your library for it, reveal it, put it into your hand, then shuffle.”

<!-- rule:event-mystic-waterwell -->
### Mystic Waterwell

Each player may destroy a card in their Mainboard.
Each player who does gains Essence equal to the total mana value of all cards destroyed this way.

<!-- rule:event-found-a-lucky-coin -->
### Found a Lucky Coin?

Each player flips a coin:
Heads - Gain 5 life for the next encounter
Tails - Lose 5 life for the next encounter

<!-- rule:event-wandering-planes-arms-dealer -->
### Wandering Planes Arms Dealer

The party chooses a card type other than instant or sorcery, then reveals fifteen random cards with the chosen property.
Each player may gain one of those cards. If one or more players do, the Host chooses one of the remaining cards and begins the next encounter with that card on the battlefield under the Host’s control.

<!-- rule:event-zubera-crossing -->
### Zubera Crossing

The party chooses one —

Investigate — During the next encounter, the Host gains a Zubera deck. At the beginning of the Host’s third upkeep, the Host rolls a d4, then casts that many random cards from the Zubera deck without paying their mana costs. If the party wins that encounter, each player gains one random Tier 1 Cash Out.

Avoid — Resolve another Event.

<!-- rule:event-a-stones-throw -->
### A Stone’s Throw

At the beginning of each non-Crypt encounter, each player creates a Rock token and the Host creates three Rock tokens.

<!-- rule:event-paranoia -->
### Paranoia

At the beginning of each Host upkeep, the party chooses one party member. Until the end of the party’s next turn, that player is considered an opponent of each other party member for spells and abilities.

<!-- rule:event-the-reaper-king-comes -->
### The Reaper King Comes

The party chooses one —
Swear loyalty — Each player’s commander becomes an artifact and a Scarecrow in addition to its other types.
Oppose nobility — Resolve the Ambush Event “It’s Just Standing There… MENACINGLY.”

<!-- rule:event-that-damned-bridge -->
### That Damned Bridge

Each player reveals cards from the top of their library until they reveal a nonland card. That player may pay 2 life.
If they do, they shuffle all cards revealed this way back into their library and repeat this process, increasing the life payment by 1 each time.
Otherwise, they destroy the revealed nonland card, shuffle the other revealed cards back into their library, and stop.

<!-- rule:event-a-rock-pile -->
### A Rock Pile

The party chooses one —
Leave It Alone — During the next encounter, the Host begins with a Mountain on the battlefield. It is an artifact in addition to its other types. The Host chooses whether the party or the Host takes the first turn.
Dig Deeper — For the next encounter, the Host sets aside three random Golem creature cards. Each has suspend counters equal to half its mana value, rounded up.
At the beginning of each Host upkeep, remove a suspend counter from each of those cards. When the last suspend counter is removed from a card, the Host casts it without paying its mana cost.
Each Golem cast this way is goaded for the rest of the encounter.
While the Host controls a Golem, damage dealt to the Host is halved, rounded down.
After that encounter, each player gains 15 XP, then reveals three random mana-rock cards and may gain one card they revealed this way.

<!-- rule:event-sorrowful-swamp -->
### Sorrowful Swamp

For the rest of the run, at the beginning of each encounter, each player creates a 0/1 black Thrull creature token.
Each player whose commander is black creates three of those tokens instead.

<!-- rule:event-treasure-goblin -->
### Treasure Goblin

Reveal three random Trinkets. The party chooses one to gain.

<!-- rule:event-planar-excavation -->
### Planar Excavation

Each player chooses one —
Discover — Gain up to two land cards, each with no more than three basic land types.
Traverse — Destroy two land cards in your Mainboard. If you do, gain a random legendary land card within your commander’s color identity.

<!-- rule:event-mana-ripple -->
### Mana Ripple

Each player chooses one —
Mono — Choose a color, then reveal eight random monocolored cards of that color.
Dual — Choose two colors, then reveal four random cards that are exactly those colors.
Each player may gain one card they revealed this way.

<!-- rule:event-rapidly-growing-harvest -->
### Rapidly Growing Harvest

Each player chooses one —
Growth — Gain up to two dual land cards within your commander’s color identity.
Harvest — Gain one random utility land card within your commander’s color identity.

<!-- rule:event-witchs-cauldron -->
### Witch’s Cauldron

Each player may choose a creature card in their Mainboard. Destroy all cards chosen this way.
X is the total mana value, power, and toughness of all cards destroyed this way.
Each player chooses one —
Absorb Magic — Reveal X random instant and/or sorcery cards within your commander’s color identity.
Absorb Essence — Reveal X random creature and/or enchantment cards within your commander’s color identity.
Each player may gain up to three cards they revealed this way.

<!-- rule:event-cheese-festival -->
### Cheese Festival

Each player chooses one:
- Add The Cheese Stands Alone to your deck, color-shifted to be within your color identity and augmented with “If you win at least one encounter during this run with this card on the battlefield, increase the Essence you receive at the end of the run by 50%.”
- Reveal 10 random cards matching otag:food. Choose 3 to keep.

<!-- rule:event-strange-set-of-potions -->
### Strange Set of Potions

Each player chooses one. All changes are permanent.
- Purple potion — Reveal cards from your deck until you reveal a nonland card. Upgrade that card, then shuffle all revealed cards back into your deck.
- Red potion — Your commander gets +2/+2.
- Blue potion — Reveal cards from your deck until you reveal two basic lands. Reveal five random utility lands within your color identity. Replace the two basic lands with two of those utility lands, then shuffle those lands and the other cards revealed from your deck back into your deck. If your deck contains fewer than two basic lands, shuffle the revealed cards back into your deck and gain 50 XP instead.

<!-- rule:event-crossroads -->
### Crossroads

Reveal the top two cards of the Event deck.
The party chooses one to resolve. Put the other on the bottom of the Event deck.

<!-- rule:event-planetary-bank -->
### Planetary Bank

Each player may convert up to 50 Essence into an equal amount of XP.

<!-- rule:event-reckless-racketeering -->
### Reckless Racketeering

Each player shuffles their Mainboard and places it face down, then chooses one —
Top — Destroy the top card of your Mainboard.
Bottom — Destroy the bottom card of your Mainboard.

<!-- rule:event-wandering-planes-assistant -->
### Wandering Planes Assistant

The party chooses a keyword or a card type, then reveals fifteen random cards with the chosen property.
Each player may permanently gain one of those cards.

<!-- rule:event-nameless-smith -->
### Nameless Smith

Each player chooses a card in their Mainboard and upgrades it.

<!-- rule:event-a-portent-of-fortune -->
### A Portent of Fortune

The party chooses one:
- Choose the Crypt boss the party will face.
- During the Crypt encounter, at the beginning of each Host upkeep, one player may pay 3 life. If they do, that player fateseals 1.[i](To fateseal 1, its controller looks at the top card of an opponent’s library, then they may put that card on the bottom of that library.)[/i]

<!-- rule:harvest-moon-doom-your-trinkets-are-nothing-but-toys-to-me -->
### Your Trinkets Are Nothing But Toys To Me

Choose a Trinket. That Trinket is inactive during this encounter.

<!-- rule:harvest-moon-doom-who-turned-out-the-lights -->
### Who Turned out the lights

For each attacking creature, untap that creature and remove it from combat.

<!-- rule:harvest-moon-doom-the-scarecrow-cometh -->
### The Scarecrow Cometh

Return up to two target creature cards from graveyards to the battlefield under your control. They become kindred artifacts — Scarecrow and lose all other card types and creature types.

<!-- rule:harvest-moon-doom-stir-the-pot -->
### Stir the Pot

Up to two target creatures become goaded.

<!-- rule:harvest-moon-doom-soul-rend -->
### Soul Rend

Creatures your opponents control lose hexproof and indestructible until end of turn. Then choose up to one creature an opponent controls and destroy it.

<!-- rule:harvest-moon-doom-rotten-bounty -->
### Rotten Bounty

Sacrifice a creature: Create six Gold tokens.

<!-- rule:harvest-moon-doom-im-the-hero-of-this-story -->
### I’m the Hero of This Story

Reveal three groups of three random Hero Powers. Choose one Hero Power from each group and gain the chosen Hero Powers.

<!-- rule:harvest-moon-doom-hunt-them-all -->
### Hunt Them All

Until end of turn, whenever one or more creatures you control attack a player, draw a card.

<!-- rule:harvest-moon-doom-hunt-the-weak -->
### Hunt The Weak

The Host chooses a creature they control. Destroy all creatures with power less than the chosen creature’s power.

<!-- rule:harvest-moon-doom-harvest-of-the-damned -->
### Harvest of the Damned

For each creature that has died this turn, put a +1/+1 counter on target creature you control.
You may only activate this card during your end step.

<!-- rule:harvest-moon-doom-forged-in-their-name -->
### Forged in Their Name

Conjure two cards named Bloodline Pretender onto the battlefield. Trigger this only as a sorcery.

<!-- rule:harvest-moon-doom-danse-macabre -->
### Danse Macabre

Return up to one target creature from each opponent’s graveyard to the battlefield under your control. They gain haste and can only attack their owner. Sacrifice them at the beginning of the next end step.

<!-- rule:harvest-moon-doom-clock-strikes-midnight -->
### Clock strikes midnight

Draw two cards. Then exile this card with two time counters on it. It gains suspend.

<!-- rule:harvest-moon-doom-bloodrush -->
### BloodRush

When you attack with a creature this turn, it gains a +1/+1 counter.

<!-- rule:harvest-moon-doom-a-wolf-in-sheeps-clothing -->
### A Wolf in Sheep’s Clothing

Choose a creature you control. It becomes a copy of another target creature except for its name. That creature gains “{2}: This creature becomes a copy of another target creature except for its name.”

<!-- rule:harvest-moon-travelers-farm-tool-supplier -->
### Farm Tool Supplier

Each player may choose one:

- 25 XP — Augment an Equipment in your deck. That Equipment starts each game in your hand.

- 10 XP — Spawn 10 random Equipment cards of Rare or higher rarity within your color identity. Choose one of them to gain.

<!-- rule:harvest-moon-travelers-nylea-hunter-of-horrors -->
### Nylea, Hunter of Horrors

The party may collectively pay XP to choose one:

- Pay 25 XP — Spawn 10 random Mythic Rare creatures within the party’s color identities. Choose 3 of them to gain.

- Pay 50 XP — During the next encounter, instead of voting against the Host’s choices, the players choose what the Host plays.

- Pay 100 XP — The party gains the Trinket Nylea’s Sight.

- Pay 200 XP — The party gains the card Bow of Nylea.

Karametra Just Wants to Talk — If any player has Karametra in their deck when the party enters town, they may have her “talk.” The party gains both Bow of Nylea and Karametra’s Cornucopia to keep.
Afterward, the Tavern is destroyed and cannot be used for the rest of the run. Whoops.

<!-- rule:harvest-moon-wanderers-frightened-farmer -->
### Frightened Farmer

The farmer needs help clearing out some overgrown weeds.

If the party accepts, the Host begins the next combat with five 1/1 Saproling creature tokens.

If the party wins that combat, each player gains 15 XP.

<!-- rule:harvest-moon-wanderers-kind-stranger -->
### Kind Stranger

Each player may choose one:

- Gain 5 XP.

- Pay 5 XP — If you do, gain a random Rare Artifact.

<!-- rule:harvest-moon-wanderers-reaper-king -->
### Reaper King

Just a Regular Scarecrow

The party votes for one:

Believe It — Each player gains 10 XP.

Don’t Believe It — Mr. Not Reaper King asks the party to reconsider.
If the majority votes Don’t Believe It, Mr. Not Reaper King stabs the party. Each player loses 1 life and gains 3 XP. It then runs away, and the party reveals a new Wanderer.

<!-- rule:harvest-moon-overview -->
### Harvest Moon

This is the reference for Harvest Moon Seasonal Event content.

Use these entries with the selected Seasonal Event. Listed Event cards describe its supplied pool, which may include shared designs; inclusion here does not make a card exclusive to this season or eligible in the normal Event pool. Physical copy counts and encounter deck lists are maintained with the seasonal play materials.

The random Trinket pool has eight entries. Nylea’s Sight and Karametra’s Cornucopia are available only through Nylea, Hunter of Horrors; neither is a random Trinket selection.

#### Content

##### Event cards

- [Scarecrow Feast](../../between-encounters/events/scarecrow-feast.md) — Good
- [Cabin in the Woods](../../between-encounters/events/cabin-in-the-woods.md) — Neutral
- [Broken Mirror](../../between-encounters/events/broken-mirror.md) — Good
- [Verdant Shrubbery](../../between-encounters/events/verdant-shrubbery.md) — Good
- [Turkey Uprising](../../between-encounters/events/turkey-uprising.md) — Neutral
- [Unseen Doors](../../between-encounters/events/unseen-doors.md) — Neutral
- [Rhystic Library](../../between-encounters/events/rhystic-library.md) — Good
- [Explosive Volcano](../../between-encounters/events/explosive-volcano.md) — Neutral
- [Kithkin Hovel](../../between-encounters/events/kithkin-hovel.md) — Good
- [Urza’s Sylex](../../between-encounters/events/urzas-sylex.md) — Good
- [Pumpkin Smashing](../../between-encounters/events/pumpkin-smashing.md) — Neutral
- [Cave of Spoils](../../between-encounters/events/cave-of-spoils.md) — Neutral
- [The Hunt Is ON!](../../between-encounters/events/the-hunt-is-on.md) — Ambush
- [Card Fetcher](../../between-encounters/events/card-fetcher.md) — Good
- [BURN THE WITCH](../../between-encounters/events/burn-the-witch.md) — Ambush
- [Headless Horsey](../../between-encounters/events/headless-horsey.md) — Good
- [Vanguard Caravan](../../between-encounters/events/vanguard-caravan.md) — Good
- [Plane-to-Plane Circus](../../between-encounters/events/plane-to-plane-circus.md) — Good
- [Meeting of the Planes](../../between-encounters/events/meeting-of-the-planes.md) — Good
- [Abandoned Supply Pack](../../between-encounters/events/abandoned-supply-pack.md) — Good
- [Plane Trader](../../between-encounters/events/plane-trader.md) — Town Upgrade
- [Lion and a Mouse](../../between-encounters/events/lion-and-a-mouse.md) — Neutral
- [Covenant](../../between-encounters/events/covenant.md) — Neutral
- [Equinox](../../between-encounters/events/equinox.md) — Neutral
- [Forgotten Key](../../between-encounters/events/forgotten-key.md) — Good
- [Rewrite Reality](../../between-encounters/events/rewrite-reality.md) — Good
- [Sword in the Stone](../../between-encounters/events/sword-in-the-stone.md) — Neutral
- [Overflowing Feast](../../between-encounters/events/overflowing-feast.md) — Good
- [Attunement Tower](../../between-encounters/events/attunement-tower.md) — Good
- [Wandering Planes Saboteur](../../between-encounters/events/wandering-planes-saboteur.md) — Bad
- [Crowstorm](../../between-encounters/events/crowstorm.md) — Bad
- [It’s Just Standing There… MENACINGLY](../../between-encounters/events/its-just-standing-there-menacingly.md) — Ambush
- [Commander’s Guild](../../between-encounters/events/commanders-guild.md) — Good
- [Endless Sea](../../between-encounters/events/endless-sea.md) — Good
- [Mirror Dimension](../../between-encounters/events/mirror-dimension.md) — Town Upgrade
- [Trench of the Void](../../between-encounters/events/trench-of-the-void.md) — Good
- [Timeless Market](../../between-encounters/events/timeless-market.md) — Town Upgrade
- [Pumpkin Harvest](../../between-encounters/events/pumpkin-harvest.md) — Neutral
- [YOU’RE TAKING TOO LONG](../../between-encounters/events/youre-taking-too-long.md) — Good
- [Sliver King](../../between-encounters/events/sliver-king.md) — Good
- [Spartan Plains](../../between-encounters/events/spartan-plains.md) — Good
- [Lost Ark](../../between-encounters/events/lost-ark.md) — Good
- [Wishing Well](../../between-encounters/events/wishing-well.md) — Good
- [Earthquake!](../../between-encounters/events/earthquake.md) — Bad
- [Dragon Hoard](../../between-encounters/events/dragon-hoard.md) — Neutral
- [You Stepped on a Leaf](../../between-encounters/events/you-stepped-on-a-leaf.md) — Good
- [Peaceful Orchard](../../between-encounters/events/peaceful-orchard.md) — Good
- [Cornfields](../../between-encounters/events/cornfields.md) — Town Upgrade
- [Trick or Treat](../../between-encounters/events/trick-or-treat.md) — Neutral
- [Ivy Forest](../../between-encounters/events/ivy-forest.md) — Good
- [Tomb of the Forgotten](../../between-encounters/events/tomb-of-the-forgotten.md) — Good
- [Strung Up](../../between-encounters/events/strung-up.md) — Bad
- [Exotic Car Show](../../between-encounters/events/exotic-car-show.md) — Good
- [Card Vortex](../../between-encounters/events/card-vortex.md) — Good
- [Only Need to Be Faster Than You](../../between-encounters/events/only-need-to-be-faster-than-you.md) — Bad
- [Harvest Festival](../../between-encounters/events/harvest-festival.md) — Town Upgrade
- [Splendid Skies](../../between-encounters/events/splendid-skies.md) — Good
- [Artifact on a Pedestal](../../between-encounters/events/artifact-on-a-pedestal.md) — Neutral
- [Bloody Altar](../../between-encounters/events/bloody-altar.md) — Neutral
- [Stoneforge Caravan](../../between-encounters/events/stoneforge-caravan.md) — Good
- [Mystic Waterwell](../../between-encounters/events/mystic-waterwell.md) — Good
- [Found a Lucky Coin?](../../between-encounters/events/found-a-lucky-coin.md) — Neutral
- [Wandering Planes Arms Dealer](../../between-encounters/events/wandering-planes-arms-dealer.md) — Neutral
- [Zubera Crossing](../../between-encounters/events/zubera-crossing.md) — Neutral
- [A Stone’s Throw](../../between-encounters/events/a-stones-throw.md) — Neutral
- [Paranoia](../../between-encounters/events/paranoia.md) — Bad
- [The Reaper King Comes](../../between-encounters/events/the-reaper-king-comes.md) — Neutral
- [That Damned Bridge](../../between-encounters/events/that-damned-bridge.md) — Bad
- [A Rock Pile](../../between-encounters/events/a-rock-pile.md) — Neutral
- [Sorrowful Swamp](../../between-encounters/events/sorrowful-swamp.md) — Good
- [Treasure Goblin](../../between-encounters/events/treasure-goblin.md) — Good
- [Planar Excavation](../../between-encounters/events/planar-excavation.md) — Good
- [Mana Ripple](../../between-encounters/events/mana-ripple.md) — Good
- [Rapidly Growing Harvest](../../between-encounters/events/rapidly-growing-harvest.md) — Good
- [Witch’s Cauldron](../../between-encounters/events/witchs-cauldron.md) — Good
- [Cheese Festival](../../between-encounters/events/cheese-festival.md) — Good
- [Strange Set of Potions](../../between-encounters/events/strange-set-of-potions.md) — Good
- [Crossroads](../../between-encounters/events/crossroads.md) — Good
- [Planetary Bank](../../between-encounters/events/planetary-bank.md) — Neutral
- [Reckless Racketeering](../../between-encounters/events/reckless-racketeering.md) — Bad
- [Wandering Planes Assistant](../../between-encounters/events/wandering-planes-assistant.md) — Good
- [Nameless Smith](../../between-encounters/events/nameless-smith.md) — Good
- [A Portent of Fortune](../../between-encounters/events/a-portent-of-fortune.md) — Good

##### Doom cards

- [Your Trinkets Are Nothing But Toys To Me](doom/your-trinkets-are-nothing-but-toys-to-me.md)
- [Who Turned out the lights](doom/who-turned-out-the-lights.md)
- [The Scarecrow Cometh](doom/the-scarecrow-cometh.md)
- [Stir the Pot](doom/stir-the-pot.md)
- [Soul Rend](doom/soul-rend.md)
- [Rotten Bounty](doom/rotten-bounty.md)
- [I’m the Hero of This Story](doom/im-the-hero-of-this-story.md)
- [Hunt Them All](doom/hunt-them-all.md)
- [Hunt The Weak](doom/hunt-the-weak.md)
- [Harvest of the Damned](doom/harvest-of-the-damned.md)
- [Forged in Their Name](doom/forged-in-their-name.md)
- [Danse Macabre](doom/danse-macabre.md)
- [Clock strikes midnight](doom/clock-strikes-midnight.md)
- [BloodRush](doom/bloodrush.md)
- [A Wolf in Sheep’s Clothing](doom/a-wolf-in-sheeps-clothing.md)

##### Trinkets

- [Forgotten Key](trinkets/forgotten-key.md)
- [Stolen Pumpkin](trinkets/stolen-pumpkin.md)
- [Pickled Pumpkin](trinkets/pickled-pumpkin.md)
- [Dead Leaf](trinkets/dead-leaf.md)
- [Legendary Shovel](trinkets/legendary-shovel.md)
- [Scaery Pumpkin](trinkets/scaery-pumpkin.md)
- [Shattered Glass](trinkets/shattered-glass.md)
- [Full Moon](trinkets/full-moon.md)

##### Travelers

- [Farm Tool Supplier](travelers/farm-tool-supplier.md)
- [Nylea, Hunter of Horrors](travelers/nylea-hunter-of-horrors.md)

##### Wanderers

- [Frightened Farmer](wanderers/frightened-farmer.md)
- [Kind Stranger](wanderers/kind-stranger.md)
- [Reaper King](wanderers/reaper-king.md)

##### Traveler rewards

- [Nylea’s Sight](trinkets/nyleas-sight.md) — Nylea-only reward
- [Karametra’s Cornucopia](trinkets/karametras-cornucopia.md) — Nylea-only reward

#### Completion reward

[Reap What You Sow](../../progression/crypt-buffs/reap-what-you-sow.md)

#### Encounters

- masters: Master - Radagast; Master -  The Swarmweaver; Master -  Katilda and Lier
- stories: Story - Kelsian; Story - Reaper; Story - Ruby
- tribals: Tribal - Beorn the Fierce; Tribal - Slinza; Tribal - Chief of the Wilds
- crypts: Crypt - Wildsear; Crypt - Reaper King no More; Crypt - Tovolar

<!-- rule:event-bad-wave-bro -->
### Bad Wave Bro

The team wipes out! At the start of the next combat, mill the top 5 cards of each players library.

<!-- rule:event-swap-shop -->
### Swap Shop

Once per town you may give up 3 cards. One for mana cost, one for type, and one for color. If you do, randomly get a card of those attributes you gave up.

<!-- rule:event-merfolk-dont-like-scuba -->
### Merfolk Dont Like Scuba

For the next encounter, The host conjures 1d2 random merfolk creatures at the beginning of each of their upkeeps.
If the players win, double cash out rewards. All players pick 2.

<!-- rule:event-do-not-disturb-the-fish -->
### Do Not Disturb the Fish

The host starts play with a random leviathan. It gains hexproof, and when the players attack the host or target another permanent they control, put a +1/+1 counter on it. It cannot attack or block unless it has 3 or more counters on it, and loses hexproof.

<!-- rule:event-crabs -->
### Crabs!?

Host spawns a random crab.
When the host attacks, choose a crab per 2 players at the table. Those crabs deal damage equal to their toughness instead of their power until end of turn.
If the players win, they gain Crabby. (If the Party Already had Crabby instead give a Random Trinket)

<!-- rule:event-course-rough-and-gets-everywhere -->
### Course,Rough, and Gets Everywhere

During the next encounter, at the start of combat, the active team chooses one commander to gain desert walk until end of turn.
All players and host start the game with “Desert”

<!-- rule:event-no-hard-feelings-on-forgetting-the-food -->
### No Hard Feelings On Forgetting the Food?

A player chosen at random is treated as an opponent when it comes to card effects for the next combat.

<!-- rule:event-youve-found-a-fishing-rod -->
### You've Found A Fishing Rod?

The party gains the Cursed Rod. (If the party Already Has a Fishing Rod Reroll this into a Bad Event)

<!-- rule:event-does-anyone-here-like-fishing -->
### Does Anyone Here Like Fishing

Ask the table if that they like fishing. If they do, give them a Bad Rod (If they have a Fishing Rod Already Reroll this event into a "Good Event"). If they don’t, instead give them 50XP each.

<!-- rule:event-packsicle-stand -->
### Packsicle Stand

Packsicle StandWhenever you open a non-mystery pack, roll a 1d6. On a 6, gain a free cash out.

<!-- rule:event-volleyball-game -->
### Volleyball Game!

Play a nice relaxing game with the host
At the beginning of the first upkeep in the next encounter, choose a player to clash with the host. Then repeat, choosing a different player each time. Whoever wins the clash gets a point. You gain rewards based on how many points you get. Once the players or host gets 3 points, the game is over.
0: All players gain 10XP
1: All players gain +5 health for this game
2: All players conjure a temporal lotus petal onto their field.
3: Gain the volley ball trinket (If the party Already has the Volley Ball Trinket do all the effects above instead)

<!-- rule:event-helpful-dolphin -->
### Helpful Dolphin

At the beginning of the next encounter, each player may search their deck for a card and exile it. Players may cast cards exiled this way. Spells cast this way cost 1 less.

<!-- rule:event-suken-treasure -->
### Suken Treasure

A treasure under the ocean
All players gain a random rare artifact
Any player with an aquatic commander gets 2 random rare artifacts, or a random mythic artifact

<!-- rule:event-pooltoy-for-sale -->
### Pooltoy for Sale

You may pay 50XP, scryfall in a creature, but its a balloon (You Can Not Scryfall in a creature with Scryfall already in your deck)

<!-- rule:event-feeding-frenzy -->
### Feeding Frenzy

The host starts with 2 reef worms in play
If the players win, each player either gains a 2 mana reef worm upgraded into their colors, or 25XP.

<!-- rule:high-tide-hijinks-doom-nice-sand-castle-nerd -->
### Nice Sand Castle, Nerd

Nice Sand Castle, Nerd.
Destroy the highest cost permanent the players control. Add {U}{U} to your mana pool

<!-- rule:high-tide-hijinks-doom-sunburn -->
### Sunburn

Noncombat damage dealt by the host this turn gains wither.
Deal 10 damage split among any number of target creatures

<!-- rule:high-tide-hijinks-doom-typhoon -->
### Typhoon

Tap all creatures. Put a stun counter on all creatures without flying. All creatures your opponents control enter the battlefield tapped until your next turn.
Trigger this only as a sorcery

<!-- rule:high-tide-hijinks-doom-sirring-duck -->
### Sirring Duck

Conjure a random leviathan creature onto the battlefield under your control. For each player, that Leviathan fights up to one target creature that player controls.

<!-- rule:high-tide-hijinks-doom-im-gonna-put-some-sand-in-your-eye -->
### I'M Gonna Put Some Sand in Your Eye

For each player, choose target attacking creature they control. Reselect which permanent or player that attacking creature is attacking at random

<!-- rule:high-tide-hijinks-trinkets-vollyball -->
### Vollyball

During the players turn, when a player casts a 1 mana spell, put a counter on this Vollyball, then increase the mana needed by 1. At the end of turn, deal damage = to the number of counters on Vollyball to the host, then reset the counters

<!-- rule:high-tide-hijinks-trinkets-crabby -->
### Crabby

Once during each Party combat, target creature your Party controls assigns combat damage equal to its toughness instead of its power until end of turn.

<!-- rule:high-tide-hijinks-trinkets-bad-rod -->
### Bad Rod

{2}: A player may look at the top card of the hosts library. If its a creature, put it into play under your control, except its a 1/1 with no abilities. Activate this ability only once per players turn at sorcery speed.
After that you catch 3 creatures, upgrade this to the Good Rod.

<!-- rule:high-tide-hijinks-trinkets-good-rod -->
### Good Rod

{2}: Reveal the top card of the hosts library. If its a creature, put it onto the battlefield under your control, except its a 1/1. Activate this ability only once per turn, and only as a sorcery.
When you catch 3 creatures this way, upgrade it into the Great Rod.

<!-- rule:high-tide-hijinks-trinkets-great-rod -->
### Great Rod

{2}: Once per turn, reveal the top card of the hosts library. If its a creature, put it into play under your control. Activate this ability only once per turn, as a sorcery.

<!-- rule:high-tide-hijinks-trinkets-cursed-rod -->
### Cursed Rod

{2}: Once per turn, reveal the top card of another player's library. If it's a creature, put it into play under your control. You now own that creature (It goes to your zones and is part of your deck. Do not give it back to the player. It can be traded back.). If its not, then they may put it on the bottom of their library. Activate this ability only once per turn, as a sorcery.

<!-- rule:high-tide-hijinks-travelers-seahorse-seller -->
### Seahorse Seller

Pay 35 XP to grant a creature in your deck Seahorsemanship. You may do this only once.

Seahorsemanship — Whenever this creature attacks, phase it out. It does not phase in during its controller’s next untap step. At the beginning of the next combat phase, phase it in attacking. It cannot be blocked this combat.

<!-- rule:high-tide-hijinks-travelers-thassa -->
### Thassa

The party may pay XP as tribute to receive one of the following rewards. The party may choose only one.

50 XP — Choose an Event Crypt boss for the next Crypt.

100 XP — The players encounter one additional event. If that event is negative, discard it and encounter a new event instead. Then repeat this process once.

200 XP — The party gains Bident of Thassa as a trinket.

Sacrifice Kiora — The party gains Thassa, God of the Sea as a trinket.

The sacrificed Kiora cannot be a Scryfall or Temporal version, and it cannot have been obtained from this town.

<!-- rule:high-tide-hijinks-wanderers-sir-crabbington -->
### Sir Crabbington

The crabs are raving. Will the party join them?

If each party member pays 5 XP, the party gains Crabs’ Favor.

Crabs’ Favor — Once, any player may use this favor to reroll one die for any reason.

Coin Flips are 1d2

<!-- rule:high-tide-hijinks-overview -->
### High Tide Hijinks

This is the reference for the archived High Tide Hijinks Seasonal Event.

Use these entries with the selected Seasonal Event. Listed Event cards describe its supplied pool, which may include shared designs; inclusion here does not make a card exclusive to this season or eligible in the normal Event pool. Physical copy counts and encounter deck lists are maintained with the seasonal play materials.

Rod upgrades follow the Bad Rod and Good Rod rules. Seasonal visitors and Event cards specify how their rewards are obtained.

#### Content

##### Event cards

- [Bad Wave Bro](../../between-encounters/events/bad-wave-bro.md)
- [Swap Shop](../../between-encounters/events/swap-shop.md)
- [Merfolk Dont Like Scuba](../../between-encounters/events/merfolk-dont-like-scuba.md)
- [Do Not Disturb the Fish](../../between-encounters/events/do-not-disturb-the-fish.md)
- [Crabs!?](../../between-encounters/events/crabs.md)
- [Course,Rough, and Gets Everywhere](../../between-encounters/events/course-rough-and-gets-everywhere.md)
- [No Hard Feelings On Forgetting the Food?](../../between-encounters/events/no-hard-feelings-on-forgetting-the-food.md)
- [You've Found A Fishing Rod?](../../between-encounters/events/youve-found-a-fishing-rod.md)
- [Does Anyone Here Like Fishing](../../between-encounters/events/does-anyone-here-like-fishing.md)
- [Packsicle Stand](../../between-encounters/events/packsicle-stand.md)
- [Volleyball Game!](../../between-encounters/events/volleyball-game.md)
- [Helpful Dolphin](../../between-encounters/events/helpful-dolphin.md)
- [Suken Treasure](../../between-encounters/events/suken-treasure.md)
- [Pooltoy for Sale](../../between-encounters/events/pooltoy-for-sale.md)
- [Feeding Frenzy](../../between-encounters/events/feeding-frenzy.md)

##### Doom cards

- [Nice Sand Castle, Nerd](doom/nice-sand-castle-nerd.md)
- [Sunburn](doom/sunburn.md)
- [Typhoon](doom/typhoon.md)
- [Sirring Duck](doom/sirring-duck.md)
- [I'M Gonna Put Some Sand in Your Eye](doom/im-gonna-put-some-sand-in-your-eye.md)

##### Trinkets

- [Vollyball](trinkets/vollyball.md)
- [Crabby](trinkets/crabby.md)
- [Bad Rod](trinkets/bad-rod.md)
- [Good Rod](trinkets/good-rod.md)
- [Great Rod](trinkets/great-rod.md)
- [Cursed Rod](trinkets/cursed-rod.md)

##### Travelers

- [Seahorse Seller](travelers/seahorse-seller.md)
- [Thassa](travelers/thassa.md)

##### Wanderers

- [Sir Crabbington](wanderers/sir-crabbington.md)

#### Completion reward

[Leftovers](../../progression/crypt-buffs/leftovers.md)

#### Encounters

- masters: Araumi of the Dead Tide; Sandman, Shifting Scoundrel
- stories: Hazezon, Shaper of Sand; The Belligerent
- tribals: Gyruda, Doom of Depths; Charix, the Raging Isle
- crypts: Jaws, Relentless Predator; Plagon, Lord of the Beach

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

## Permanent Progression Catalog

### Crypt Buffs

<!-- progression:quick_spell -->
#### **Quick Spell**

**Effect**  
Once after each encounter, you may upgrade a card for free, even if the party stays out.

**Unlock Source**  
Beat Kudo, King Among Bears.

---

<!-- progression:spiritual_guidance -->
#### **Spiritual Guidance**

**Effect**  
Whenever you gain XP, also gain Essence equal to 25% of the XP gained.

You also gain 25% more Essence from all sources.

Additionally, once per turn, when you cast a spell that targets one or more permanents, create a 1/1 white Spirit creature token.

**Rules**  
Apply all XP modifiers first. Use the final XP gained for Spiritual Guidance's Essence conversion.

Spiritual Guidance creates Essence equal to 25% of the final XP gained. Its own 25% Essence bonus applies once to that generated Essence. After both percentages are applied, round the final Essence amount up once.

Formula: `Spiritual Guidance Essence = ceil(final XP gained × 0.25 × 1.25)`

This self-boost applies once; it does not recursively reapply to itself.

Example with Flame of Progress and Spiritual Guidance:

- Base XP gain: 100
- Flame of Progress adds 25 XP
- Final XP gained: 125
- 125 × 0.25 × 1.25 = 39.0625
- Round up once: 40 Essence

Final result: 125 XP and 40 Essence.

**Unlock Source**  
Beat Hinata, Dawn-Crowned.

---

<!-- progression:the_god_trees_blessing -->
#### **The God Tree's Blessing**

**Effect**  
You may change the color or colors of any Cash Out, Event, or Loot Pool reward you are offered to colors of your choice.

You may also replace any Cash Out reward you are offered with a Pro Pack.

**Unlock Source**  
Beat Jared Carthalion.

---

<!-- progression:momentum_engine -->
#### **Momentum Engine**

**Effect**  
Unspent mana doesn't empty from your mana pool as steps and phases end.

At the beginning of each end step, lose half your unspent mana, rounded up.

**Unlock Source**  
Defeat Yurlok of Scorch Thrash.

---

<!-- progression:eternal_servitude -->
#### **Eternal Servitude**

**Effect**  
Whenever a creature you control becomes the target of a spell, if you haven't phased out a creature this way this turn, you may have that creature phase out.

Whenever one or more creatures you control phase in, create a tapped 1/1 white Spirit creature token with flying.

**Unlock Source**  
Defeat King of the Oathbreakers.

---

<!-- progression:unearthly_reach -->
#### **Unearthly Reach**

**Effect**  
At the beginning of each of your turns, choose one: you gain an additional upkeep step that turn; or you gain an additional end step that turn.

**Unlock Source**  
Beat Tormod and Ravos.

---

<!-- progression:respited_gift -->
#### **Respited Gift**

**Effect**  
After each fight, gain two additional random Cash Out rewards. These rewards go directly to the player with this buff.

**Unlock Source**  
Beat Kibo, Uktabi Prince.

---

<!-- progression:fickle_duplicant -->
#### **Fickle Duplicant**

**Effect**  
At the beginning of the game, you get 1 free Scryfall creature card, but it is a 1/1 Balloon in addition to its other creature types and abilities. Stamp it with a "Balloon" decal.

**Unlock Source**  
Beat The Jolly Balloon Man.

---

<!-- progression:might_of_okaun -->
#### **Might of Okaun**

**Effect**  
During your upkeep, flip a coin.

If you win the flip, draw two cards, then discard a card.

If you lose the flip, lose 1 life.

**Unlock Source**  
Beat Okaun and Zndrsplt.

---

<!-- progression:finders_keepers -->
#### **Finders Keepers**

**Effect**  
Once per encounter, you may look at the top four cards of target player's library. Put any number of them on the bottom of that library, then put the rest back on top in any order. Then draw a card.

**Unlock Source**  
Beat Yuriko, the Tiger's Shadow.

---

<!-- progression:flame_of_progress -->
#### **Flame of Progress**

**Effect**  
Gain 25% more XP.

**Unlock Source**  
Beat Azlask, the Swelling Scourge.

---

<!-- progression:shapeshifter -->
#### **Shapeshifter**

**Effect**  
All creatures you own in all zones gain a creature type your Commander has.

Pick this buff after deckbuilding.

**Unlock Source**  
Defeat Morophon, the Boundless.

---

<!-- progression:undying_legionary -->
#### **Artificial Undeath**

**Effect**  
Once per encounter, when a nonland permanent you control is put into your graveyard from the battlefield, you may return that card to the battlefield. It becomes an artifact in addition to its other types. You lose life equal to its mana value.

**Unlock Source**  
Defeat Imotekh the Stormlord.

---

<!-- progression:treasure_pirate -->
#### **Treasure Pirate**

**Effect**  
At the beginning of every encounter, start with a Treasure token.

**Unlock Source**  
Beat Olivia, Opulent Outlaw.

---

<!-- progression:dark_beginnings -->
#### **Dark Beginnings**

**Effect**  
Your Commander is augmented after deck creation.

**Unlock Source**  
Beat Maha, Its Feathers Night.

---

<!-- progression:the_chosen_path -->
#### **The Chosen Path**

**Effect**  
Once per encounter, choose one:

• Pay {2}: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle.  
• Look at the top six cards of your library. You may reveal a creature card from among them and put it into your hand. Put the rest on the bottom of your library in any order.

**Unlock Source**  
Beat Loot, Exuberant Explorer.

---

<!-- progression:paragon_adornments -->
#### **Paragon Adornments**

**Effect**  
Equipment costs {2} less to cast.

Equipment costs {1} less to equip.

**Unlock Source**  
Defeat Reyav, Master Smith.

---

<!-- progression:upgrades_people_upgrades -->
#### **Upgrades, People, Upgrades**

**Effect**  
You may activate abilities of creatures you control as though those creatures had haste.

**Unlock Source**  
Defeat Iron Spider, Stark Upgrade.

---

<!-- progression:lucky_pull -->
#### **Spoils of War**

**Effect**  
Whenever one or more creatures you control deal combat damage to an opponent, surveil 1, then draw a card.

**Unlock Source**  
Defeat Jin Sakai, Ghost of Tsushima.

---

<!-- progression:leftovers -->
#### **Leftovers**

**Effect**  
Whenever you sacrifice a Food for its effect, each ally gains 2 life.

**Unlock Source**  
Beat High Tide Hijinks.

---

<!-- progression:reap_what_you_sow -->
#### **Reap What You Sow**

**Effect**  
If a spell or ability you control would affect all players, it affects only you and your opponents instead.

If a spell or ability you control would affect a player other than you, and only if that player is your opponent, it affects you instead.

**Unlock Source**  
Beat Harvest Moon.

---

<!-- progression:scent_of_death -->
#### **Scent of Death**

**Effect**  
If a source you control would deal noncombat damage to an opponent or a permanent an opponent controls, it deals twice that much damage instead. This effect doesn't apply to damage dealt by other buffs.

**Unlock Source**  
Defeat Sefris of the Hidden Ways.

---

### Tickets

<!-- progression:arcane_signet_ticket -->
#### **Arcane Signet Ticket**

**Effect**  
You get an Arcane Signet Ticket. This allows you to have a free Arcane Signet in your deck without it counting toward your normal library minimum.

The Arcane Signet granted by this Ticket is treated as **Scryfalled**: it cannot be traded or captured and follows the combo and infinite-loop restrictions in Deckbuilding. The Ticket persists across runs.

**Slot Cost**  
1

---

<!-- progression:sol_ring_ticket -->
#### **Sol Ring Ticket**

**Effect**  
You get a Sol Ring Ticket. This allows you to have a free Sol Ring in your deck without it counting toward your normal library minimum.

The Sol Ring granted by this Ticket is treated as **Scryfalled**: it cannot be traded or captured and follows the combo and infinite-loop restrictions in Deckbuilding. The Ticket persists across runs.

**Slot Cost**  
1

---

<!-- progression:leyline_ticket -->
#### **Leyline Ticket**

**Effect**  
You get a Leyline Ticket. This allows you to have a free Leyline in your deck without it counting toward your normal library minimum.

The Leyline granted by this Ticket is treated as **Scryfalled**: it cannot be traded or captured and follows the combo and infinite-loop restrictions in Deckbuilding. The Ticket persists across runs.

**Slot Cost**  
1

---

<!-- progression:color_combo_ticket -->
#### **Color Combo Ticket**

**Effect**  
At the beginning of the game, before deckbuilding, pick your color identity to play with.

**Slot Cost**  
1

---

<!-- progression:trinket_ticket -->
#### **Trinket Ticket**

**Effect**  
You may begin the game with a Trinket of your choice from 3 random options.

Ticket ownership is per player. If that player leaves, the Trinket tied to their Trinket Ticket is removed after the current encounter.

**Rules**

You see Trinket options only once per session. You may decline to commit to a Trinket; if you decline, you cannot see new Trinket options that session unless you gain another Trinket Ticket from a Cashout, which grants fresh options.

The Ticket persists across runs. Ticket ownership and slot use are per player rather than a shared party Trinket slot.

**Slot Cost**  
1

---

The chosen Trinket is additional to the normal voted party Trinket. Any party member may use it unless its text says otherwise. Each player with an active Ticket resolves their own selection under the Trinket System.

<!-- progression:conspiracy_ticket -->
#### **Conspiracy Ticket**

**Effect**  
You may begin the game with a Conspiracy of your choice from 3 random options.

Choose it before picking your Commander.

**Rules**  
Conspiracy options use the **Legal** Conspiracy pool. You see Conspiracy options only once per session. If you decline, you cannot see new Conspiracy options that session unless you gain another Conspiracy Ticket from a Cashout, which grants fresh options. The Ticket persists across runs.

**Slot Cost**  
1

---

<!-- progression:vanguard_ticket -->
#### **Vanguard Ticket**

**Effect**  
You may begin the game with a Vanguard of your choice from 3 random options.

**Rules**  
Vanguard options use the **Legal** Vanguard pool. You see Vanguard options only once per session. If you decline, you cannot see new Vanguard options that session unless you gain another Vanguard Ticket from a Cashout, which grants fresh options. The Ticket persists across runs.

**Slot Cost**  
2

---

<!-- progression:emblem_ticket -->
#### **Emblem Ticket**

**Effect**  
You may begin the game with an Emblem of your choice from 3 random options. The Host eliminates 1 from the pool, then you choose from the remaining 2.

**Rules**  
Emblem options use the **Legal** Emblem pool. You see Emblem options only once per session. If you decline, you cannot see new Emblem options that session unless you gain another Emblem Ticket from a Cashout, which grants fresh options. The Ticket persists across runs.

**Slot Cost**  
3

---

### Brands

<!-- progression:brand_of_the_cartographer -->
#### **Brand of the Cartographer**

**Effect**  
During deckbuilding, each Rank lets you replace 2 additional basic lands with dual lands or triomes.

---

<!-- progression:brand_of_the_conclave -->
#### **Brand of the Conclave**

**Effect**  
During deckbuilding and when using The Guild, each Rank gives you 1 additional Commander choice whenever Commanders are generated for you.

---

<!-- progression:brand_of_recurrence -->
#### **Brand of Recurrence**

**Effect**  
During deckbuilding and when using The Guild, each Rank gives you 1 additional free Commander reroll.

This applies to Commander generation only and does not allow rerolling the 100-card draft pool.

---

<!-- progression:brand_of_the_open_hand -->
#### **Brand of the Open Hand**

**Effect**  
Whenever you open a pack, each Rank adds 1 additional card to that pack. This increases the number of cards shown, not the number you keep unless another effect explicitly increases the keep limit.

---

<!-- progression:brand_of_the_blinded_eye -->
#### **Brand of the Blinded Eye**

**Effect**  
During deckbuilding, you may choose one color to not appear when rolling Commanders.

---

<!-- progression:brand_of_the_infinite_void -->
#### **Brand of the Infinite Void**

**Effect**  
Your library minimum is reduced by 1 card per Rank.

---

<!-- progression:brand_of_foresight -->
#### **Brand of Foresight**

**Effect**  
During initial deckbuilding, after choosing your normal 22 cards, you may choose two additional cards from your generated 100-card pool for each Rank of this Brand. Put those cards into your sideboard.

---

<!-- progression:brand_of_ascension -->
#### **Brand of Ascension**

**Effect**  
You have one additional Buff slot for each Rank of this Brand.

---

<!-- progression:brand_of_divergent_paths -->
#### **Brand of Divergent Paths**

**Effect**  
Whenever Trinket, Conspiracy, Vanguard, or Emblem options are revealed for you, you may choose one of those categories for each Rank of this Brand and reroll all options revealed for it. You may choose from the new options for that category.

If you reroll your Emblem options, the Host may ban another card for each Emblem reroll.

---

<!-- progression:brand_of_possibilities -->
#### **Brand of Possibilities**

**Effect**  
You are offered one additional choice for each Rank of this Brand when selecting any of the following:

• Trinket  
• Conspiracy  
• Vanguard

When determining the party's Trinket choices, if multiple players have this Brand, only the highest bonus applies.

---

### Achievements

<!-- progression:chaos -->
#### **Chaos**

**Effect**  
Up to three times per game, you may reroll an Event.

**Unlock Requirement**  
Open five Events in a row before an encounter without rerolling or replacing any of them through another effect.

---

<!-- progression:victory_lap -->
#### **Victory Lap**

**Effect**  
You have three additional free mulligans.

**Unlock Requirement**  
Beat 3 Crypt bosses in a single session.

---

<!-- progression:one_with_death -->
#### **One with Death**

**Effect**  
Gain a second free card during deck creation. One of those free cards can be a Gamechanger.

**Unlock Requirement**  
Beat a Crypt fight on turn two.

---

<!-- progression:dog_s_best_friend -->
#### **Dog's Best Friend**

**Effect**  
During deckbuilding, if you don't already have a Partner Commander, you may choose a Companion without meeting its Companion requirement. That Companion becomes a Partner Commander and begins the game in the command zone partnered with your chosen Commander.

**Unlock Requirement**  
Defeat a Crypt fight while your deck meets your chosen Companion's requirement.

---

<!-- progression:compelling_madness -->
#### **Compelling Madness**

**Effect**  
Once per encounter, target player gains 5 life.

This may be activated at instant speed.

**Unlock Requirement**  
Indirectly kill one non-Host player in a session.

---

<!-- progression:gamblers_never_quit -->
#### **Gamblers Never Quit**

**Effect**  
Once per turn, when you would flip a coin or roll a die, you may instead flip two coins or roll two dice and ignore one result.

**Unlock Requirement**  
Win six coin flips in a row.

---

<!-- progression:stick_it_to_me -->
#### **Stick It To Me**

**Effect**  
At the beginning of the game, spawn 5 random sticker sheets to create your sticker deck.

**Unlock Requirement**  
Beat a Crypt fight with stickers.

---

<!-- progression:happy_fun_land -->
#### **Happy Fun Land**

**Effect**  
At the beginning of the game, spawn ten random Attractions with different names, shuffle them, and use them as your Attraction deck.

Once per encounter, you may open an Attraction. To open an Attraction, put the top card of your Attraction deck onto the battlefield.

**Unlock Requirement**  
Defeat a Crypt fight while controlling an Attraction.

---

<!-- progression:nature_s_blessing -->
#### **Nature's Blessing**

**Effect**  
During deck creation, you may choose triomes instead of dual lands.

Additionally, you may use Scryfall to replace up to five basic lands in your deck with different nonbasic lands. Those lands cannot be Gamechangers or have abilities that destroy lands.

**Unlock Requirement**  
Defeat a Crypt fight with 50 or more lands in your deck.

---

<!-- progression:back_to_basics -->
#### **Back to Basics**

**Effect**  
As a creature with no abilities enters the battlefield under your control, choose a keyword and put the corresponding keyword counter on it. You can't choose annihilator or infect. If the chosen keyword has a numerical value, that value is 1. For example, choosing scry gives the creature scry 1.

**Unlock Requirement**  
Defeat a Crypt fight with a Commander that has no abilities.

---

<!-- progression:im_feeling_targeted -->
#### **I'm Feeling Targeted**

**Effect**  
Twice per encounter, before attackers are declared, you may pay {0}. If you do, you can't be attacked this turn.

**Unlock Requirement**  
Defeat the Crypt after dying to the Host or a Host-controlled effect during each encounter leading up to it. Deaths caused by yourself, another player, or conceding do not count.

---

<!-- progression:changeling_s_land_form -->
#### **Changeling's Land Form**

**Effect**  
After you finish taking mulligans, exile two random basic land cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Changeling Commander.

---

<!-- progression:construct_s_salvation -->
#### **Construct's Salvation**

**Effect**  
After you finish taking mulligans, exile two Wastes cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Construct Commander.

---

<!-- progression:horse_s_gallop -->
#### **Horse's Gallop**

**Effect**  
After you finish taking mulligans, exile two Forest cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Horse Commander.

---

<!-- progression:raccoon_s_rage -->
#### **Raccoon's Rage**

**Effect**  
After you finish taking mulligans, exile two Mountain cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Raccoon Commander.

---

<!-- progression:scorpion_s_nest -->
#### **Scorpion's Nest**

**Effect**  
After you finish taking mulligans, exile two Swamp cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Scorpion Commander.

---

<!-- progression:fish_pond -->
#### **Fish Pond**

**Effect**  
After you finish taking mulligans, exile two Island cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Fish Commander.

---

<!-- progression:dawn_of_crabs -->
#### **Dawn of Crabs**

**Effect**  
After you finish taking mulligans, exile two Plains cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Crab Commander.

---

<!-- progression:simic_identity_buff_adaptive_pattern -->
#### **Simic — Adaptive Pattern**

**Effect**  
If your Commander's color identity includes blue: once per turn, when you draw your second card, put a +1/+1 counter on a creature you control.

If your Commander's color identity includes green: once per turn, when one or more +1/+1 counters are put on a creature you control, draw a card.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were green, blue, or Simic.

---

<!-- progression:selesnya_identity_buff_harmony_s_bloom -->
#### **Selesnya — Harmony's Bloom**

**Effect**  
If your Commander's color identity includes white: once per turn, when you gain life, put a +1/+1 counter on each of up to two target creatures you control.

If your Commander's color identity includes green: once each turn, when you cast a creature spell, create a 1/1 white Soldier creature token with lifelink, then gain 1 life.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were green, white, or Selesnya.

---

<!-- progression:rakdos_identity_buff_showstopper_s_encore -->
#### **Rakdos — Showstopper's Encore**

**Effect**  
If your Commander's color identity includes black: once per turn, when one or more creatures die, draw a card and lose 1 life.

If your Commander's color identity includes red: once per turn, when one or more creatures you control deal combat damage to an opponent, create a Treasure token.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were black, red, or Rakdos.

---

<!-- progression:orzhov_identity_buff_tithe_and_toil -->
#### **Orzhov — Tithe and Toil**

**Effect**  
If your Commander's color identity includes white: once per turn, when a token enters the battlefield under your control, you may populate.

If your Commander's color identity includes black: once per turn, when a nontoken creature you control dies, create a 2/2 black Zombie creature token.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were white, black, or Orzhov.

---

<!-- progression:izzet_identity_buff_experimental_sparks -->
#### **Izzet — Experimental Sparks**

**Effect**  
If your Commander's color identity includes blue: once per turn, when you cast a sorcery spell, exile the top two cards of your library. You may play those cards until the end of your next turn.

If your Commander's color identity includes red: once per turn, when you cast an instant spell, deal 2 damage to any target.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were blue, red, or Izzet.

---

<!-- progression:gruul_identity_buff_primal_fury -->
#### **Gruul — Primal Fury**

**Effect**  
If your Commander's color identity includes red: the first creature spell you cast each turn has riot.

If your Commander's color identity includes green: once per turn, when one or more creatures you control attack, choose one of them. It gets +1/+1 and gains trample until end of turn.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were red, green, or Gruul.

---

<!-- progression:golgari_identity_buff_cycle_of_rot -->
#### **Golgari — Cycle of Rot**

**Effect**  
If your Commander's color identity includes black: once per turn, when a permanent you control is put into your graveyard from the battlefield, you may mill up to three cards.

If your Commander's color identity includes green: once per turn, when one or more cards leave any graveyard, create a Food token.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were black, green, or Golgari.

---

<!-- progression:dimir_identity_buff_whisper_network -->
#### **Dimir — Whisper Network**

**Effect**  
If your Commander's color identity includes blue: once per turn, when you cast a spell during an opponent's turn, surveil 2.

If your Commander's color identity includes black: once per turn, when one or more cards are put into your graveyard from your library, exile up to two target cards from graveyards.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were blue, black, or Dimir.

---

<!-- progression:boros_identity_buff_charge_of_conviction -->
#### **Boros — Charge of Conviction**

**Effect**  
If your Commander's color identity includes white: once per turn, when one or more creatures you control attack, untap up to one target attacking creature.

If your Commander's color identity includes red: once per turn, when you attack with three or more creatures, creatures you control get +1/+0 until end of turn.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were red, white, or Boros.

---

<!-- progression:azorius_identity_buff_law_of_efficiency -->
#### **Azorius — Law of Efficiency**

**Effect**  
If your Commander's color identity includes white: once per turn, when you cast a spell, gain 2 life.

If your Commander's color identity includes blue: once per turn, when you counter a spell or ability, you may draw a card.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were white, blue, or Azorius.

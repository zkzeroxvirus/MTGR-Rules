# MTG Roguelike — Player Reference

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
5. **Play the Encounter**

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

## Between Encounters

<!-- rule:post-encounter-choice -->
### **🏘️ BETWEEN ENCOUNTERS**

After an encounter is defeated and rewards are resolved, the party must choose one:

• Return to Town
• Stay Out

<!-- rule:town-flow -->
### ⚙️ **TOWN FLOW**

When the party returns to Town, resolve the following:

1. Fully heal all players
2. Resolve Town building usage
3. Proceed to Event resolution

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
### **⚙️ STAY OUT FLOW**

When the party chooses to Stay Out, resolve the following in order:

1. Gain XP  
2. Gain Mystery Packs  
3. Resolve a Supply Drop  
4. Resolve a Wanderer  
5. Resolve Events  
6. Proceed to the next encounter 

   ---

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

Progression is tracked by the in-game tool, which saves and loads player data from a Google Sheet.

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

## Between Runs

<!-- rule:host-types-profiles -->
### **🏠 HOST TYPES AND PROGRESSION PROFILES**

There are two types of Hosts, each associated with a separate progression profile:

- **Verified Hosts** are trusted individuals who run the **Base table** — the game as it is intended to be played. Players who participate in Verified Host sessions share a unified progression profile. Crypt Buffs, Tickets, Brands, Captures, Achievements, and stored Essence earned here carry over between any Verified Host's table.

- **Regular Hosts** may run sessions using the Unverified Essence Counter, which supports custom game modes and alternate styles of play. Progress from these sessions is tracked on a separate profile and does not mix with a player's Verified progression.

Players maintain two independent profiles — one per Host type.

---

<!-- rule:progression-reference -->
### **🌟 MTG ROGUELIKE — PERMANENT PROGRESSION**

This document tracks the current **Season 1** permanent progression pool: **Crypt Buffs**, **Tickets**, **Brands**, and **Achievements**.

Each permanent unlock is tied to a player profile and persists across future runs.

How these are acquired:

• **Crypt Buffs** are earned through Crypt victories  
• **Achievements** are earned by meeting gameplay milestones  
• **Tickets** are purchased with Essence  
• **Brands** are purchased with Essence and ranked up through repeated purchases  
• **Captures** are purchased with Essence

**Season 1 progression layers**

• Crypt Buffs  
• Tickets  
• Brands  
• Achievements  
• Captures

Unless otherwise stated, activated progression effects may be used **once per encounter**.

---

### **🔮 SEASON 1 CRYPT BUFFS (21)**

---

#### **Quick Spell**

**Effect**  
Once after each encounter, you may upgrade a card for free, even if the party stays out.

**Unlock Source**  
Beat Kudo, King Among Bears.

---

#### **Spiritual Guidance**

**Effect**  
Whenever you gain XP, also gain Essence equal to 25% of the XP gained.

You also gain 25% more Essence from all sources.

Additionally, once per turn, when you cast a spell that targets one or more permanents, create a 1/1 white Spirit creature token.

**Unlock Source**  
Beat Hinata, Dawn-Crowned.

---

#### **The God Tree's Blessing**

**Effect**  
You may change the color or colors of any Cash Out, Event, or Loot Pool reward you are offered to colors of your choice.

You may also replace any Cash Out reward you are offered with a Pro Pack.

**Unlock Source**  
Beat Jared Carthalion.

---

#### **Momentum Engine**

**Effect**  
Unspent mana doesn't empty from your mana pool as steps and phases end.

At the beginning of each end step, lose half your unspent mana, rounded up.

**Unlock Source**  
Defeat Yurlok of Scorch Thrash.

---

#### **Eternal Servitude**

**Effect**  
Whenever a creature you control becomes the target of a spell, if you haven't phased out a creature this way this turn, you may have that creature phase out.

Whenever one or more creatures you control phase in, create a tapped 1/1 white Spirit creature token with flying.

**Unlock Source**  
Defeat King of the Oathbreakers.

---

#### **Unearthly Reach**

**Effect**  
At the beginning of each of your turns, choose one: you gain an additional upkeep step that turn; or you gain an additional end step that turn.

**Unlock Source**  
Beat Tormod and Ravos.

---

#### **Respited Gift**

**Effect**  
After each fight, gain two additional random Cash Out rewards. These rewards go directly to the player with this buff.

**Unlock Source**  
Beat Kibo, Uktabi Prince.

---

#### **Fickle Duplicant**

**Effect**  
At the beginning of the game, you get 1 free Scryfall creature card, but it is a 1/1 Balloon in addition to its other creature types and abilities. Stamp it with a "Balloon" decal.

**Unlock Source**  
Beat The Jolly Balloon Man.

---

#### **Might of Okaun**

**Effect**  
During your upkeep, flip a coin.

If you win the flip, draw two cards, then discard a card.

If you lose the flip, lose 1 life.

**Unlock Source**  
Beat Okaun and Zndrsplt.

---

#### **Finders Keepers**

**Effect**  
Once per encounter, you may look at the top four cards of target player's library. Put any number of them on the bottom of that library, then put the rest back on top in any order. Then draw a card.

**Unlock Source**  
Beat Yuriko, the Tiger's Shadow.

---

#### **Flame of Progress**

**Effect**  
Gain 25% more XP.

**Unlock Source**  
Beat Azlask, the Swelling Scourge.

---

#### **Shapeshifter**

**Effect**  
All creatures you own in all zones gain a creature type your Commander has.

Pick this buff after deckbuilding.

**Unlock Source**  
Defeat Morophon, the Boundless.

---

#### **Artificial Undeath**

**Effect**  
Once per encounter, you may return target nonland permanent card from your graveyard to the battlefield. It becomes an artifact in addition to its other types. You lose life equal to its mana value. Activate only as a sorcery.

**Unlock Source**  
Defeat Imotekh the Stormlord.

---

#### **Treasure Pirate**

**Effect**  
At the beginning of every encounter, start with a Treasure token.

**Unlock Source**  
Beat Olivia, Opulent Outlaw.

---

#### **Dark Beginnings**

**Effect**  
Your Commander is augmented after deck creation.

**Unlock Source**  
Beat Maha, Its Feathers Night.

---

#### **The Chosen Path**

**Effect**  
Once per encounter, choose one:

• Pay {2}: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle.  
• Look at the top six cards of your library. You may reveal a creature card from among them and put it into your hand. Put the rest on the bottom of your library in any order.

**Unlock Source**  
Beat Loot, Exuberant Explorer.

---

#### **Paragon Adornments**

**Effect**  
Equipment costs {2} less to cast.

Equipment costs {1} less to equip.

**Unlock Source**  
Defeat Reyav, Master Smith.

---

#### **Upgrades, People, Upgrades**

**Effect**  
You may activate abilities of creatures you control as though those creatures had haste.

**Unlock Source**  
Defeat Iron Spider, Stark Upgrade.

---

#### **Spoils of War**

**Effect**  
Whenever one or more creatures you control deal combat damage to an opponent, surveil 1, then draw a card.

**Unlock Source**  
Defeat Jin Sakai, Ghost of Tsushima.

---

#### **Leftovers**

**Effect**  
Whenever you sacrifice a Food for its effect, each ally gains 2 life.

**Unlock Source**  
Beat High Tide Hijinks.

---

#### **Scent of Death**

**Effect**  
If a source you control would deal noncombat damage to an opponent or a permanent an opponent controls, it deals twice that much damage instead. This effect doesn't apply to damage dealt by other buffs.

**Unlock Source**  
Defeat Sefris of the Hidden Ways.

---

### **🎟️ SEASON 1 TICKETS (8)**

Tickets are permanent progression purchases from the Progression Shop and still consume buff slots.

---

#### **Arcane Signet Ticket**

**Effect**  
You get an Arcane Signet Ticket. This allows you to have a free Arcane Signet in your deck without it counting toward your normal library minimum.

**Slot Cost**  
1

---

#### **Sol Ring Ticket**

**Effect**  
You get a Sol Ring Ticket. This allows you to have a free Sol Ring in your deck without it counting toward your normal library minimum.

**Slot Cost**  
1

---

#### **Leyline Ticket**

**Effect**  
You get a Leyline Ticket. This allows you to have a free Leyline in your deck without it counting toward your normal library minimum.

**Slot Cost**  
1

---

#### **Color Combo Ticket**

**Effect**  
At the beginning of the game, before deckbuilding, pick your color identity to play with.

**Slot Cost**  
1

---

#### **Trinket Ticket**

**Effect**  
You may begin the game with a Trinket of your choice from 3 random options.

Ticket ownership is per player. If that player leaves, the Trinket tied to their Trinket Ticket is removed after the current encounter.

**Slot Cost**  
1

---

#### **Conspiracy Ticket**

**Effect**  
You may begin the game with a Conspiracy of your choice from 3 random options.

Choose it before picking your Commander.

**Rules**  
You see Conspiracy options only once per session. If you decline, you cannot see new Conspiracy options that session unless you gain another Conspiracy Ticket from a Cash Out, which grants fresh options. The Ticket persists across runs.

**Slot Cost**  
1

---

#### **Vanguard Ticket**

**Effect**  
You may begin the game with a Vanguard of your choice from 3 random options.

**Rules**  
You see Vanguard options only once per session. If you decline, you cannot see new Vanguard options that session unless you gain another Vanguard Ticket from a Cash Out, which grants fresh options. The Ticket persists across runs.

**Slot Cost**  
2

---

#### **Emblem Ticket**

**Effect**  
You may begin the game with an Emblem of your choice from 3 random options. The Host eliminates 1 from the pool, then you choose from the remaining 2.

**Rules**  
You see Emblem options only once per session. If you decline, you cannot see new Emblem options that session unless you gain another Emblem Ticket from a Cash Out, which grants fresh options. The Ticket persists across runs.

**Slot Cost**  
3

---

### **🔥 SEASON 1 BRANDS (10)**

Brands are permanent progression purchases from the Progression Shop.

Brand effects stack. Each Brand may be purchased any number of times.

Each Brand has Ranks. Each purchase increases that Brand's Rank by 1, and its effects apply once per Rank unless stated otherwise.

---

#### **Brand of the Cartographer**

**Effect**  
During deckbuilding, each Rank lets you replace 2 additional basic lands with dual lands or triomes.

---

#### **Brand of the Conclave**

**Effect**  
During deckbuilding and when using The Guild, each Rank gives you 1 additional Commander choice whenever Commanders are generated for you.

---

#### **Brand of Recurrence**

**Effect**  
During deckbuilding and when using The Guild, each Rank gives you 1 additional free Commander reroll.

This applies to Commander generation only and does not allow rerolling the 100-card draft pool.

---

#### **Brand of the Open Hand**

**Effect**  
Whenever you open a pack, each Rank adds 1 additional card to that pack. This increases the number of cards shown, not the number you keep unless another effect explicitly increases the keep limit.

---

#### **Brand of the Blinded Eye**

**Effect**  
During deckbuilding, you may choose one color to not appear when rolling Commanders.

---

#### **Brand of the Infinite Void**

**Effect**  
Your library minimum is reduced by 1 card per Rank.

---

#### **Brand of Foresight**

**Effect**  
During initial deckbuilding, after choosing your normal 22 cards, you may choose two additional cards from your generated 100-card pool for each Rank of this Brand. Put those cards into your sideboard.

---

#### **Brand of Ascension**

**Effect**  
You have one additional Buff slot for each Rank of this Brand.

---

#### **Brand of Divergent Paths**

**Effect**  
Whenever Trinket, Conspiracy, Vanguard, or Emblem options are revealed for you, you may choose one of those categories for each Rank of this Brand and reroll all options revealed for it. You may choose from the new options for that category.

If you reroll your Emblem options, the Host may ban another card for each Emblem reroll.

---

#### **Brand of Possibilities**

**Effect**  
You are offered one additional choice for each Rank of this Brand when selecting any of the following:

• Trinket  
• Conspiracy  
• Vanguard

When determining the party's Trinket choices, if multiple players have this Brand, only the highest bonus applies.

---

### **🏆 SEASON 1 ACHIEVEMENTS (28)**

---

#### **General Achievements**

---

##### **Chaos**

**Effect**  
Up to three times per game, you may reroll an Event.

**Unlock Requirement**  
Open five Events in a row before an encounter without rerolling or replacing any of them through another effect.

---

##### **Victory Lap**

**Effect**  
You have three additional free mulligans.

**Unlock Requirement**  
Beat 3 Crypt bosses in a single session.

---

##### **One with Death**

**Effect**  
Gain a second free card during deck creation. One of those free cards can be a Gamechanger.

**Unlock Requirement**  
Beat a Crypt fight on turn two.

---

##### **Dog's Best Friend**

**Effect**  
During deckbuilding, if you don't already have a Partner Commander, you may choose a Companion without meeting its Companion requirement. That Companion becomes a Partner Commander and begins the game in the command zone partnered with your chosen Commander.

**Unlock Requirement**  
Defeat a Crypt fight while your deck meets your chosen Companion's requirement.

---

##### **Compelling Madness**

**Effect**  
Once per encounter, target player gains 5 life.

This may be activated at instant speed.

**Unlock Requirement**  
Indirectly kill one non-Host player in a session.

---

##### **Gamblers Never Quit**

**Effect**  
Once per turn, when you would flip a coin or roll a die, you may instead flip two coins or roll two dice and ignore one result.

**Unlock Requirement**  
Win six coin flips in a row.

---

##### **Stick It To Me**

**Effect**  
At the beginning of the game, spawn 5 random sticker sheets to create your sticker deck.

**Unlock Requirement**  
Beat a Crypt fight with stickers.

---

##### **Happy Fun Land**

**Effect**  
At the beginning of the game, spawn ten random Attractions with different names, shuffle them, and use them as your Attraction deck.

Once per encounter, you may open an Attraction. To open an Attraction, put the top card of your Attraction deck onto the battlefield.

**Unlock Requirement**  
Defeat a Crypt fight while controlling an Attraction.

---

##### **Nature's Blessing**

**Effect**  
During deck creation, you may choose triomes instead of dual lands.

Additionally, you may use Scryfall to replace up to five basic lands in your deck with different nonbasic lands. Those lands cannot be Gamechangers or have abilities that destroy lands.

**Unlock Requirement**  
Defeat a Crypt fight with 50 or more lands in your deck.

---

##### **Back to Basics**

**Effect**  
As a creature with no abilities enters the battlefield under your control, choose a keyword and put the corresponding keyword counter on it. You can't choose annihilator or infect. If the chosen keyword has a numerical value, that value is 1. For example, choosing scry gives the creature scry 1.

**Unlock Requirement**  
Defeat a Crypt fight with a Commander that has no abilities.

---

##### **I'm Feeling Targeted**

**Effect**  
Twice per encounter, before attackers are declared, you may pay {0}. If you do, you can't be attacked this turn.

**Unlock Requirement**  
Defeat the Crypt after dying during all four encounters.

---

#### **Creature-Type Achievements (7)**

---

##### **Changeling's Land Form**

**Effect**  
After you finish taking mulligans, exile two random basic land cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Changeling Commander.

---

##### **Construct's Salvation**

**Effect**  
After you finish taking mulligans, exile two Wastes cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Construct Commander.

---

##### **Horse's Gallop**

**Effect**  
After you finish taking mulligans, exile two Forest cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Horse Commander.

---

##### **Raccoon's Rage**

**Effect**  
After you finish taking mulligans, exile two Mountain cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Raccoon Commander.

---

##### **Scorpion's Nest**

**Effect**  
After you finish taking mulligans, exile two Swamp cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Scorpion Commander.

---

##### **Fish Pond**

**Effect**  
After you finish taking mulligans, exile two Island cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Fish Commander.

---

##### **Dawn of Crabs**

**Effect**  
After you finish taking mulligans, exile two Plains cards from outside the game. You may play those cards from exile.

**Unlock Requirement**  
Defeat a Crypt fight with a Crab Commander.

---

#### **Guild Identity Achievements (10)**

For these achievements, a color clause applies when your Commander's color identity includes that color. A two-color guild Commander therefore receives both clauses for its guild.

---

##### **Simic — Adaptive Pattern**

**Effect**  
If your Commander's color identity includes blue: once per turn, when you draw your second card, put a +1/+1 counter on a creature you control.

If your Commander's color identity includes green: once per turn, when one or more +1/+1 counters are put on a creature you control, draw a card.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were green, blue, or Simic.

---

##### **Selesnya — Harmony's Bloom**

**Effect**  
If your Commander's color identity includes white: once per turn, when you gain life, put a +1/+1 counter on each of up to two target creatures you control.

If your Commander's color identity includes green: once each turn, when you cast a creature spell, create a 1/1 white Soldier creature token with lifelink, then gain 1 life.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were green, white, or Selesnya.

---

##### **Rakdos — Showstopper's Encore**

**Effect**  
If your Commander's color identity includes black: once per turn, when one or more creatures die, draw a card and lose 1 life.

If your Commander's color identity includes red: once per turn, when one or more creatures you control deal combat damage to an opponent, create a Treasure token.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were black, red, or Rakdos.

---

##### **Orzhov — Tithe and Toil**

**Effect**  
If your Commander's color identity includes white: once per turn, when a token enters the battlefield under your control, you may populate.

If your Commander's color identity includes black: once per turn, when a nontoken creature you control dies, create a 2/2 black Zombie creature token.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were white, black, or Orzhov.

---

##### **Izzet — Experimental Sparks**

**Effect**  
If your Commander's color identity includes blue: once per turn, when you cast a sorcery spell, exile the top two cards of your library. You may play those cards until the end of your next turn.

If your Commander's color identity includes red: once per turn, when you cast an instant spell, deal 2 damage to any target.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were blue, red, or Izzet.

---

##### **Gruul — Primal Fury**

**Effect**  
If your Commander's color identity includes red: the first creature spell you cast each turn has riot.

If your Commander's color identity includes green: once per turn, when one or more creatures you control attack, choose one of them. It gets +1/+1 and gains trample until end of turn.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were red, green, or Gruul.

---

##### **Golgari — Cycle of Rot**

**Effect**  
If your Commander's color identity includes black: once per turn, when a permanent you control is put into your graveyard from the battlefield, you may mill up to three cards.

If your Commander's color identity includes green: once per turn, when one or more cards leave any graveyard, create a Food token.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were black, green, or Golgari.

---

##### **Dimir — Whisper Network**

**Effect**  
If your Commander's color identity includes blue: once per turn, when you cast a spell during an opponent's turn, surveil 2.

If your Commander's color identity includes black: once per turn, when one or more cards are put into your graveyard from your library, exile up to two target cards from graveyards.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were blue, black, or Dimir.

---

##### **Boros — Charge of Conviction**

**Effect**  
If your Commander's color identity includes white: once per turn, when one or more creatures you control attack, untap up to one target attacking creature.

If your Commander's color identity includes red: once per turn, when you attack with three or more creatures, creatures you control get +1/+0 until end of turn.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were red, white, or Boros.

---

##### **Azorius — Law of Efficiency**

**Effect**  
If your Commander's color identity includes white: once per turn, when you cast a spell, gain 2 life.

If your Commander's color identity includes blue: once per turn, when you counter a spell or ability, you may draw a card.

**Unlock Requirement**  
Defeat a Crypt fight in which all Commanders were white, blue, or Azorius.

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
Once per encounter, you may return target nonland permanent card from your graveyard to the battlefield. It becomes an artifact in addition to its other types. You lose life equal to its mana value. Activate only as a sorcery.

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

**Slot Cost**  
1

---

<!-- progression:sol_ring_ticket -->
#### **Sol Ring Ticket**

**Effect**  
You get a Sol Ring Ticket. This allows you to have a free Sol Ring in your deck without it counting toward your normal library minimum.

**Slot Cost**  
1

---

<!-- progression:leyline_ticket -->
#### **Leyline Ticket**

**Effect**  
You get a Leyline Ticket. This allows you to have a free Leyline in your deck without it counting toward your normal library minimum.

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

**Slot Cost**  
1

---

<!-- progression:conspiracy_ticket -->
#### **Conspiracy Ticket**

**Effect**  
You may begin the game with a Conspiracy of your choice from 3 random options.

Choose it before picking your Commander.

**Rules**  
You see Conspiracy options only once per session. If you decline, you cannot see new Conspiracy options that session unless you gain another Conspiracy Ticket from a Cash Out, which grants fresh options. The Ticket persists across runs.

**Slot Cost**  
1

---

<!-- progression:vanguard_ticket -->
#### **Vanguard Ticket**

**Effect**  
You may begin the game with a Vanguard of your choice from 3 random options.

**Rules**  
You see Vanguard options only once per session. If you decline, you cannot see new Vanguard options that session unless you gain another Vanguard Ticket from a Cash Out, which grants fresh options. The Ticket persists across runs.

**Slot Cost**  
2

---

<!-- progression:emblem_ticket -->
#### **Emblem Ticket**

**Effect**  
You may begin the game with an Emblem of your choice from 3 random options. The Host eliminates 1 from the pool, then you choose from the remaining 2.

**Rules**  
You see Emblem options only once per session. If you decline, you cannot see new Emblem options that session unless you gain another Emblem Ticket from a Cash Out, which grants fresh options. The Ticket persists across runs.

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
Defeat the Crypt after dying during all four encounters.

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

# **⚔️ ENCOUNTER SYSTEM**

Encounters represent the primary challenges of a run.

During encounters, players face a Host-controlled deck enhanced by Affixes and encounter-specific modifiers.  
 Winning encounters allows players to progress and prepare for future battles.

## **⚖️ DESIGN NOTES**

* Encounters scale in difficulty through **Affixes and Health progression**  
* Encounter types introduce **mechanical variety**  
* Player choice during setup maintains **agency within randomness**  
* The system is designed for **clarity during live play**

## **🧠 ENCOUNTER FLOW**

Each encounter follows this sequence:

1. **Determine Encounter Type**  
2. **Resolve Setup**  
3. **Apply Affixes** (if applicable)  
4. **Set Host Health**  
5. **Play the Encounter**

If the Host reaches 0 life, the encounter is defeated.

## **🎲 ENCOUNTER TYPES**

Encounters are chosen randomly from available encounter types.

Each type defines how the Host deck is selected and what additional rules apply.

### **🧠 MASTER FIGHT**

A Tyrant-led encounter drawn from the Demon Generals pool.

**Setup:**

* Reveal 3 random Tyrants  
* Players choose 1 to eliminate  
* The Host chooses 1 of the remaining Tyrants  
* Reveal 3 random Master Decks  
* Players choose 1 to eliminate  
* The Host chooses 1 of the remaining Master Decks

### **⚔️ TRIBAL WARFARE**

A synergy-driven encounter centered on a single creature type.

**Setup:**

* Reveal 3 random creature types (Tribes)  
* Players choose 1 to eliminate  
* The Host chooses 1 of the remaining Tribes  
* The Host reveals random deck from that Tribes Pool and pilots it.  
* This Encounter gives an Additional 25xp

The Host gains an Emblem that says:

**Tribal Warfare**  
At the beginning of your end step, conjure and cast a random creature of the chosen tribe with mana value less than or equal to the number of lands you control.

### **📦 PRECON BATTLE**

> **Note:** This encounter type is under review and may be updated in a future version.

The Host pilots a preconstructed Commander deck.

**Setup:**

* Generate 3 random Precons  
* Players choose 1 to eliminate  
* The Host chooses 1 and pilots it

### **🌍 PLANE FIGHT *(Experimental)***

A Planechase-style encounter that alters the battlefield.

**Setup:**

* Reveal 3 Planes  
* Players choose 1 to eliminate  
* The remaining Plane enters play  
* The Host selects a corresponding deck

**Rules:**

* A Planechase card is active for the encounter  
* The Planeswalk result becomes a reroll  
* This encounter gains **\+1 additional Affix**

### **📖 STORY FIGHT *(Experimental)***

Narrative encounters with multi-phase structure.

**Setup:**

* The Host receives **one fewer Affix than normal**  
* Reveal 3 Story scenarios  
* Players choose 1 to eliminate  
* The Host chooses 1  
* The Host begins with **double health**

---

#### **Phase Transition**

When the Host reaches 50% of their starting life or loses the game due to an alternative win condition:

* Their life total becomes exactly half  
* The Host and all permanents they control phase out  
* All damage and poison counters are removed  
* Their graveyard and exile are shuffled into their library  
* The current turn continues without the Host

At the beginning of the Host’s next turn, they phase back in.

---

#### **Phase Two Bonus**

When the Host returns, they gain one of the following:

* Emblem  
* Vanguard  
* Story-specific ability

### **🦹 VILLAIN FIGHT**

A high-power, constructed encounter.

**Setup:**

* Roll 5 random Commanders  
* Select 1  
* Build or spawn a high-power (**Bracket 3+**) deck

### **🌪 WILD MAGIC *(Experimental)***

A chaotic encounter driven by random effects.

**Setup:**

* The Host may use any legal deck  
* The Host gains:

**Wild Magic Surge —**  
 {0}: Roll a d20 and resolve a random effect. Activate only once each turn.

* No Affixes are applied  
* This encounter grants **\+50 XP**

# **🌀 WILD MAGIC TABLE**

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

# ❤️ HOST HEALTH

## **❤️ HOST HEALTH**

Host scaling is mode-dependent.

### **Standard Mode — 3 Encounters**

* Tier 4 Affixes are not used

| Players | Encounter 1 | Encounter 2 | Encounter 3 | Crypt |
| ----- | ----- | ----- | ----- | ----- |
| 1–2 | 20 | 30 | 40 | **50** |
| 3 | 25 | 40 | 55 | **70** |
| 4 | 30 | 50 | 70 | **90** |
| 5 | 35 | 60 | 85 | **110** |
| 6 | 40 | 70 | 100 | **130** |

### **Variant Mode — 4 Encounters**

* Tier 4 Affixes are used

| Players | Encounter 1 | Encounter 2 | Encounter 3 | Encounter 4 | Crypt |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 1–2 | 20 | 30 | 40 | 50 | **60** |
| 3 | 25 | 40 | 55 | 70 | **80** |
| 4 | 30 | 50 | 70 | 90 | **100** |
| 5 | 35 | 60 | 85 | 110 | **120** |
| 6 | 40 | 70 | 100 | 130 | **140** |

# 🧩 AFFIXES

## **🧩 AFFIXES**

Affixes are global modifiers that enhance the Host.

* Applied at the start of each encounter  
* Drawn from tiered pools  
* Increase difficulty

# ⚔️ AFFIX STRUCTURE

## **⚔️ AFFIX STRUCTURE**

### **Standard Mode — 3 Encounters**

| Encounter | Affixes Applied |
| ----- | ----- |
| Encounter 1 | Tier 1 |
| Encounter 2 | Tier 1 \+ Tier 2 |
| Encounter 3 | Tier 1 \+ Tier 2 \+ Tier 3 |

### **Variant Mode — 4 Encounters**

| Encounter | Affixes Applied |
| ----- | ----- |
| Encounter 1 | Tier 1 |
| Encounter 2 | Tier 1 \+ Tier 2 |
| Encounter 3 | Tier 1 \+ Tier 2 \+ Tier 3 |
| Encounter 4 | Tier 1 \+ Tier 2 \+ Tier 3 \+ Tier 4 |

* Affixes are rerolled each encounter  
* If combinations are game-breaking, reroll the highest tier

# 🏆 ENCOUNTER COMPLETION

## **🏆 ENCOUNTER COMPLETION**

When the Host is defeated:

1. Resolve **Rewards**  
2. Proceed to **Post-Encounter Choice** (Town or Stay Out)

If players lose an encounter:

1. No XP is gained from that encounter  
2. No Cash Out or Loot Pool is resolved  
3. That encounter stage cannot be repeated  
4. Advance directly to the next encounter stage (skip Town/Stay Out and Events)

# 👑 FINAL BOSS — THE CRYPT

## **👑 FINAL BOSS — THE CRYPT**

After the final scheduled encounter in the active mode, players face the Crypt.

**Rules:**

* No Affixes are applied  
* The Host takes the first turn  
* No Events are resolved

The Crypt represents the final and most difficult encounter of the run.


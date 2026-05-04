# **🏆 REWARD SYSTEM**

The Reward System determines what players gain after defeating an encounter.

Rewards provide progression, resources, and deck improvement opportunities throughout a run.

---

## **🎯 REWARD TIMING**

Rewards are resolved immediately after an encounter is defeated.

**Order of Operations:**

1. Gain **XP**  
2. Resolve **Cash Out**  
3. Resolve **Loot Pool**

After all rewards are resolved, proceed to the post-encounter choice (**Town or Stay Out**).

---

## **💠 XP SYSTEM**

Players gain XP based on encounter progression mode, with additional XP granted from Affixes and bonuses.

---

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

### **🧩 AFFIX BONUS XP**

Affixes grant additional XP when an encounter is defeated.

* Each Affix provides bonus XP based on its tier  
* Bonus XP is **added on top of base XP**

*(Affix XP values are defined in the Affix System document.)*

---

### **🔢 TOTAL XP**

**Total XP \= Base XP \+ Affix Bonus XP**

---

### **💸 XP USAGE**

XP is used for:

* Town buildings  
* Wanderer 

---

## **🎁 CASH OUT SYSTEM**

Cash Outs represent immediate reward choices gained after an encounter.

**Resolution:**

* The Host reveals a number of Cash Outs equal to the number of players  
* Each player selects one reward unless otherwise stated

**Rules:**

* Cash Outs are **free to claim**  
* Cash Outs are **tradable between players**  
* Cash Outs are **retained until used** (typically in Town)

---

## **🧾 LOOT POOL SYSTEM**

The Loot Pool allows players to extract cards from the defeated encounter deck.

**Resolution:**

* Shuffle the defeated deck  
* Reveal cards equal to the number of players  
* Reroll any basic lands  
* Place revealed cards into a shared Loot Pool

**Rules:**

* Players may take cards freely from the Loot Pool  
* Cards taken this way follow all normal deckbuilding rules  
* Cards that care about Drafting (for example, cards that say "draft," such as Cogwork Tracker and Garbage Fire) cannot be taken from pack rewards or the Loot Pool

---

## **📈 REWARD SCALING**

Rewards scale through systems tied to mode and encounter difficulty:

* **Encounter Progression** → determines Base XP  
* **Affixes** → provide additional bonus XP

This ensures rewards increase with both difficulty and run progression.

---

## **⚖️ DESIGN CONSTRAINTS**

* Rewards must be **quick to resolve**  
* Rewards must not interrupt game flow  
* Rewards should provide **meaningful but controlled progression**  
* Rewards should not replace Town as the primary upgrade system

---

## **🧠 DESIGN NOTES**

* Base XP provides **predictable scaling across encounters**  
* Affix XP provides **difficulty-based bonuses**  
* Cash Outs provide **player agency and flexibility**  
* Loot Pool provides **organic deck growth**

The system balances:

* Predictability (Base XP)  
* Difficulty scaling (Affixes)  
* Choice (Cash Outs)  
* Randomness (Loot Pool)

# 🎴 Cashout Pool

The Cashout Pool has a total weight of **400**. Percentages are calculated from this pool.

## 🎚 Pack Cashout Tiers

Pack rewards are divided into two tiers for clarity and balancing.

**T1 (Core Packs):**

* Mono non-Pro color packs (White, Blue, Black, Red, Green)
* Mono Colorless Pack
* Artifact Pack
* Enchantment Pack
* Planeswalker Pack
* Mystery Pack

**T2 (Advanced Packs):**

* All remaining pack rewards (ID variants, Pro variants, Mythic, Utility, and specialty packs)

Non-pack cashouts use separate categories instead of T1/T2:

* Bonus Building Usage
* Blacksmith Services
* Crypt Fight Cashout

---

**🎴 PACK REWARDS** *(Total Weight: 300 — 75%)*

| Cashout | Tier | Weight | Chance |
| :---- | :----: | :----: | :----: |
| Mystery Pack | T1 | 30 | 7.5% |
| Mono White Pack | T1 | 18 | 4.5% |
| Mono Blue Pack | T1 | 18 | 4.5% |
| Mono Black Pack | T1 | 18 | 4.5% |
| Mono Red Pack | T1 | 18 | 4.5% |
| Mono Green Pack | T1 | 18 | 4.5% |
| Mono Colorless Pack | T1 | 18 | 4.5% |
| Artifact Pack | T1 | 18 | 4.5% |
| ID Pack | T2 | 18 | 4.5% |
| Mono Pro Pack White | T2 | 12 | 3% |
| Mono Pro Pack Blue | T2 | 12 | 3% |
| Mono Pro Pack Black | T2 | 12 | 3% |
| Mono Pro Pack Red | T2 | 12 | 3% |
| Mono Pro Pack Green | T2 | 12 | 3% |
| Mono Pro Pack Colorless | T2 | 12 | 3% |
| Artifact Pro Pack | T2 | 12 | 3% |
| Alpha Pack | T2 | 6 | 1.5% |
| Enchantment Pack | T1 | 6 | 1.5% |
| Enchantment ID Pack | T2 | 6 | 1.5% |
| Utility Land Pack | T2 | 6 | 1.5% |
| Mythic Pack | T2 | 6 | 1.5% |
| Planeswalker Pack | T1 | 6 | 1.5% |
| Planeswalker ID Pack | T2 | 6 | 1.5% |

---

**🏛 BONUS BUILDING USAGE** *(Total Weight: 80 — 20%)*

| Cashout | Weight | Chance |
| :---- | :----: | :----: |
| Bonus Bazaar | 20 | 5% |
| Bonus Bank | 14 | 3.5% |
| Bonus Mystic | 14 | 3.5% |
| Bonus Tavern | 14 | 3.5% |
| Bonus Guild | 12 | 3% |
| Bonus Cathedral | 6 | 1.5% |

*Each Bonus Building cashout grants one free additional use of that building during the next Town visit.*

---

**⚒ BLACKSMITH SERVICES** *(Total Weight: 18 — 4.5%)*

| Cashout | Weight | Chance |
| :---- | :----: | :----: |
| Free Upgrade | 12 | 3% |
| Free Augment | 6 | 1.5% |

---

**☠️ CRYPT FIGHT CASHOUT** *(Total Weight: 2 — 0.5%)*

| Cashout | Weight | Chance |
| :---- | :----: | :----: |
| Crypt Fight Cashout | 2 | 0.5% |

*See [Crypt Fight Cashout](#-crypt-fight-cashout-1) below for resolution rules.*

---

**🎟 TICKET CASHOUTS** *(Total Weight: 10 — Ultra Rare)*

| Cashout | Weight | Chance |
| :---- | :----: | :----: |
| Conspiracy Ticket | 4 | 1% |
| Trinket Ticket | 3 | 0.75% |
| Vanguard Ticket | 2 | 0.5% |
| Emblem Ticket | 1 | 0.25% |

*Tickets are one-time-use items redeemable through their respective systems. A player may hold multiple Tickets but may only redeem one Ticket per applicable resolution window.*

---

## ☠️ Crypt Fight Cashout

The Crypt Fight Cashout is an ultra-rare reward that grants a strategic advantage before the Final Boss.

**Resolution:**

* This cashout may be held and used immediately before the Crypt Fight begins
* When revealed, all players collectively choose **one** of the following benefits:

| Choice | Effect |
| :---- | :---- |
| **A — Low Ground** | Reduce the Crypt's starting life total by 15% (round down) |
| **B — Head Start** | Each player gains 20 XP before the Crypt Fight begins |
| **C — Call the Shot** | Choose the Crypt encounter type from the standard pool instead of rolling randomly |

**Rules:**

* Only one Crypt Fight Cashout may be used per run — additional copies are discarded unused
* If unused by the time the Crypt Fight begins, it expires and is discarded
* The choice is made before the encounter type is determined (if not using Choice C)


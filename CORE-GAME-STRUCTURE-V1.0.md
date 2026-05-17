# **🧭 CORE GAME STRUCTURE V1.0**

This section defines the overall flow of a run and the fundamental rules that govern gameplay.

---

## **🔁 RUN OVERVIEW**

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

## **🔄 GAME LOOP**

The core gameplay loop is as follows:

**Encounter → Rewards (Victory) → Choice → Events → Next Encounter**

1. Resolve an **Encounter**  
2. Gain **Rewards** if victorious (XP, Loot, Cash Outs) — skipped on a loss  
3. Choose:  
   * **Return to Town**  
   * **Stay Out**  
4. Resolve **Event(s)**  
5. Begin the next **Encounter**

This loop repeats until the Crypt is reached.

Before Encounter 1, resolve the pre-run setup step from the core rules (Event and Trinket, in that order). The starting Event cannot be a Bad Stuff Event.

---

## **🧭 FAILED ENCOUNTER TRANSITION**

If players lose an encounter, use this transition:

1. Skip encounter rewards (no XP, no Cash Out, no Loot Pool)
2. The party must proceed to **Post-Encounter Choice** (Town or Stay Out)
3. Reset all players to full HP before the next encounter begins

Missing Rewards (XP, Cash Out, and Loot Pool) is the only penalty — Town/Stay Out and Event resolution still occur normally.

---

## **👥 PLAYER COUNT**

* The game supports **1–6 players**  
* Many systems scale based on player count, including:  
  * Host Health  
  * Rewards  
  * Encounter difficulty

---

## **🎯 OBJECTIVE**

The goal of a run is to defeat the **Final Boss (Crypt)**.

To reach the Crypt, players must successfully defeat all prior encounters.

---

## **❌ FAILURE**

If players lose an encounter:

* The party gains no XP from that encounter  
* No Cash Out or Loot Pool is resolved  
* The party must proceed to Post-Encounter Choice (Town or Stay Out)
* Missing Rewards (XP, Cash Out, and Loot Pool) is the only penalty

If players fail to defeat the Crypt, the run ends.

---

## **🏆 SUCCESS**

If players defeat the Crypt:

* The run is completed successfully  
* Players receive:  
  * **Essence rewards**  
  * **Crypt Buff(s)**  
  * Additional progression rewards

Progression is tracked by the in-game tool, which saves and loads player data from a Google Sheet.

---

## **❤️ BETWEEN-ENCOUNTER RESET**

After each encounter, players reset to full HP before the next encounter path resolves.

Health wording reminder: "lose/gain X life" affects current life only. Permanent health changes must explicitly say **"Max HP/Life"**.

This full reset applies whether the party chooses:

* Town  
* Stay Out

---

## **⚙️ SYSTEM INTERACTIONS**

The Core Structure connects all major systems:

* ⚔️ Encounters drive gameplay  
* 🏆 Rewards enable progression  
* 🏘️ Town provides controlled upgrades  
* 🛤️ Stay Out provides risk-based progression  
* 🎲 Events introduce variance  
* 👑 Crypt serves as the final challenge

---

## **🧠 DESIGN NOTES**

* The system is built around a **predictable structure with variable outcomes**  
* Players are given **frequent decision points** (Town vs Stay Out)  
* Difficulty scales consistently across the run  
* Randomness is introduced in controlled intervals (Events, Rewards, Encounters)


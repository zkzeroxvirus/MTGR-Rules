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

**Encounter → Rewards → Choice → Events → Next Encounter**

1. Resolve an **Encounter**  
2. Gain **Rewards** (XP, Loot, Cash Outs)  
3. Choose:  
   * **Return to Town**  
   * **Stay Out**  
4. Resolve **Event(s)**  
5. Begin the next **Encounter**

This loop repeats until the Crypt is reached.

Before Encounter 1, resolve the pre-run setup step from the core rules (Event or Trinket).

---

## **🧭 FAILED ENCOUNTER TRANSITION**

If players lose an encounter, use this transition:

1. Skip encounter rewards (no XP, no Cash Out, no Loot Pool)
2. Do not replay that encounter stage
3. Advance directly to the next encounter stage
4. Reset all players to full HP before the next encounter begins

Failed encounters do not trigger the normal post-victory path (Town/Stay Out and Event resolution).

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
* That encounter stage cannot be repeated  
* The run advances directly to the next encounter stage
* Town/Stay Out and Event resolution are skipped for that stage

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


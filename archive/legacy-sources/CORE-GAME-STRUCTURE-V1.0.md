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

### Encounter → Rewards (Victory) → Choice → Events → Next Encounter

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
  * The Authority and Doom components of the **Host Scaling Power layer (Host Authority)**
* The complete Host Scaling Power layer is **Authority + Doom + Demonic Persistence + Arcane Suppression**
* Demonic Persistence and Arcane Suppression are always active regardless of player count

---

## **⚔️ PARTY COMBAT INTERACTIONS**

The party shares one combat step and declares all attackers simultaneously, but each player remains the controller of their own creatures.

### Attacking alone and controller-local checks

For effects that care whether a creature **attacks alone**, or otherwise ask how many creatures **that player controls** attacked, evaluate each player's attackers separately.

Example:

* Player A attacks with exactly one creature.
* Player B also attacks with exactly one creature during the same party combat.
* Player A's creature is considered to have **attacked alone** for Player A.
* Player B's creature is considered to have **attacked alone** for Player B.
* Both players may therefore satisfy effects such as **Exalted** at the same time.

If Player A attacks with two creatures, Player A does not satisfy an "attacks alone" condition, even if every other ally attacks with only one creature.

### Shared attacking-creature checks

All creatures declared as attackers by the party are still part of the **same combat**. Effects that refer to attacking creatures without limiting them to creatures a particular player controls can see and affect allied attackers as normal.

Example:

* Player A attacks with one creature that has **Battle Cry**.
* Player B attacks with one creature in the same combat.
* Battle Cry treats Player B's creature as another attacking creature, so it receives the Battle Cry bonus.

### Adjacent blocking and blocking requirements

When a Host creature attacks a player, that player's adjacent allies may block for them under the normal adjacent-blocking rule. Creatures controlled by those adjacent allies count as blockers of that attacking creature for purposes of satisfying blocking requirements and restrictions.

Example:

* A Host creature with **Menace** attacks Player A.
* Player A controls only one creature that can block.
* An adjacent Player B may block the same attacking creature with one of their creatures.
* Player A's blocker and Player B's adjacent blocker together satisfy Menace's requirement that the creature be blocked by two or more creatures.

This same principle applies to other effects that care about how many creatures are blocking an attacker, unless the effect specifically restricts which player must control those blockers.

### General interpretation rule

Use the card's controller wording to decide which view applies:

* **"Attacks alone," "you attack," or "creatures you control attack"** → evaluate only that player's creatures unless the effect explicitly says otherwise.
* **"Attacking creature," "other attacking creatures," or another combat-wide reference without a controller restriction** → evaluate all applicable attacking creatures across the party's shared combat.
* The phrase **"you control"** always remains controller-specific; the shared party turn does not make allies' permanents count as permanents you control.
* Blocking requirements and restrictions are evaluated using all creatures legally blocking that attacker, including legal adjacent blockers, unless the effect explicitly requires blockers controlled by a specific player.

This interpretation applies to Exalted, Battle Cry, Menace, and other attack- or block-related effects with equivalent wording.

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

When the run ends (win or lose), each eligible player gains:

* **Essence equal to Deck CMC + Sideboard CMC**
* **Essence equal to any unspent XP**

---

## **🏆 SUCCESS**

If players defeat the Crypt:

* The run is completed successfully  
* Players receive:  
  * **500 Essence**  
  * **Crypt Buff(s)** (if the awarded Buff is already unlocked, it is sold for **+250 Essence**)  
  * Additional progression rewards
* Run-end Essence rewards still apply (Deck CMC + Sideboard CMC, plus any unspent XP converted to Essence)

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

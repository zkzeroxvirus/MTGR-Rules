# 🏘️ **TOWN SYSTEM**

The Town System provides controlled progression between encounters.

Town is the primary location where players recover, refine their decks, and make strategic upgrades.

---

## ⚖️ DESIGN CONSTRAINTS

* Town is the primary source of deck power growth  
* Effects should be:  
  * Controlled  
  * Predictable  
  * Strategic  
* Town should not:  
  * Be replaced by Stay Out systems  
  * Offer excessive randomness  
  * Allow unlimited free building uses

  ---

  ## 🧠 DESIGN NOTES

* Town creates long-term planning decisions  
* Limited building uses force players to prioritize upgrades  
* Merchant provides precision deckbuilding  
* Blacksmith provides guaranteed power  
* The Guild enables Commander flexibility  
* Portal introduces short-term risk/reward via Temporal cards  
* Bazaar enables inter-player trading

## 🎯 **WHEN TOWN OCCURS**

After an encounter is defeated and rewards are resolved, players may choose to:

* Return to Town  
* Stay Out

If players choose to return, resolve Town before proceeding to Events.

## ⚙️ **TOWN FLOW**

When the party returns to Town, resolve the following:

1. Fully heal all players
2. Resolve Town building usage
3. Proceed to Event resolution


## ❤️ **FULL HEAL**

All players are fully healed upon entering Town.

* Life totals are restored to current maximum HP
* "Lose/gain X life" affects current life only; permanent health changes must explicitly say **"Max HP/Life"**


## **🏪 BUILDING SYSTEM**

Town does not use actions.

# 🏛️ BUILDINGS

Town buildings fall into two categories:

**Limited Use** — usable a set number of times per Town visit. Uses reset on each return to Town.

**Unlimited** — usable any number of times while in Town, provided their XP cost is paid.

---

## 🏦 BANK *(1 use per Town)*

Move up to **6 cards** between your deck and sideboard.

### Rules

Bank interactions only happen while in Town.

The **Sideboard has no size limit**. The Bank limits how many cards may be moved between Deck and Sideboard during that Town visit; it does not limit Sideboard capacity.

---

## ⚒️ BLACKSMITH *(Unlimited)*

Enhance **1 card** in your deck.

| Option | Cost | Effect |
| :--- | :--- | :--- |
| Upgrade | 25 XP | Modify a card's stats, keywords, or costs |
| Augment | 50 XP | Add or modify rules text or abilities |

**Rules:** A card may only receive one Blacksmith modification.

---

## 🛍️ BAZAAR *(1 outbound trade per player per Town + unlimited inbound trades + unlimited Cashout Sales)*

Two things happen here — player trading and Cashout selling. Each player may initiate **1 outbound trade per Town**. Accepting a trade initiated by another player does not consume your outbound trade, and a player may receive any number of inbound trades during the same Town. Cashout Sales remain completely separate.

---

### 🤝 PLAYER TRADES *(1 outbound initiation per player per Town)*

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

### 💰 CASHOUT SALE *(Free — Unlimited)*

Sell any number of Cashouts to the Host for **10 XP** each. Cashout Sales do not consume an outbound Bazaar trade and may be done any number of times.

---

## ⛪ CATHEDRAL *(1 use per Town)*

Each player may describe a card request. The Host provides a real, usable card.

Then choose:

* Add it to your deck, or
* Destroy it for **Essence equal to 2× its mana value**

**Rules:** The description cannot force one specific card. The Host interprets the request.

Cards gained from Cathedral are not restricted by Commander color identity unless the effect or request specifically imposes that restriction.

---

## ⚔️ THE GUILD *(Unlimited)*

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

## 🛒 MERCHANT *(Unlimited)*

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

## 🔮 MYSTIC *(Unlimited)*

**Cost:** 5 XP

Destroy a **nonland card** from your deck. Gain **Essence equal to twice its mana value**.

**Rules:** Mystic is used for deck pruning and resource conversion.

Your Deck must remain at or above your current modified deck-size minimum after pruning. The base minimum may be reduced by **Brand of the Infinite Void**.

---

## 🌀 PORTAL *(1 use per Town)*

**Cost:** Up to 15 XP

Generate a randomized pack using type or keyword search criteria. **Base pack size equals XP spent.**

**Brand of the Open Hand** adds **+1 generated card per Rank** when you open the Portal pack.

All generated cards are **Temporal**.

**Rules:**

* Temporal cards must remain in your deck
* Cannot be traded, sideboarded, or sacrificed to Town or Traveler effects
* Temporal cards cease to exist at the end of the encounter where they were used

---

## 🍺 TAVERN *(1 use per Town)*

Choose one mana-fixing option:

**Option A**

* Remove 0–2 cards from your deck
* Add 0–4 basic lands of your choice

**Option B**

* Remove 3–5 basic lands
* Add 0–2 dual lands of your choice

**Rules:** Tavern is for deck smoothing and mana fixing only.

Your Deck must remain at or above your current modified deck-size minimum after removals.
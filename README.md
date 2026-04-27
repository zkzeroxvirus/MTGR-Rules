# MTG Roguelike — Rules Repository

A cooperative, run-based Commander variant where players form a party and face a Host-controlled series of escalating encounters, culminating in a final boss fight known as the **Crypt**.

---

## 📖 Document Index

### Pregame

| Document | Description |
| :--- | :--- |
| [CORE-RULES.md](CORE-RULES.md) | Core rules, player structure, deckbuilding, and global limits |
| [SHOPS.md](SHOPS.md) | Pregame Shop and Progression Shop — deckbuilding and persistent purchases |
| [PERMANENT-PROGRESSION.md](PERMANENT-PROGRESSION.md) | Current Season 1 Crypt Buffs, Tickets, Brands, and Achievements |

### Drafting

| Document | Description |
| :--- | :--- |
| [CORE-RULES.md](CORE-RULES.md) | Commander selection, deck construction, pack rules, and starting setup |
| [DEMON-GENERALS-V2.0.md](DEMON-GENERALS-V2.0.md) | The 12 Tyrant Generals — passives, signature moves, relics |
| [TRINKET-SYSTEM-V1.0.md](TRINKET-SYSTEM-V1.0.md) | Pre-first-encounter Trinket selection flow and Trinket Ticket override |
| [BRANDS-SYSTEM-V1.0.md](BRANDS-SYSTEM-V1.0.md) | Persistent deckbuilding Brands purchasable before or after a run |
| [SHOPS.md](SHOPS.md) | Commander mulligans, partner/background access, and pregame purchases |

### Ingame

| Document | Description |
| :--- | :--- |
| [CORE-GAME-STRUCTURE-V1.0.md](CORE-GAME-STRUCTURE-V1.0.md) | Run structure, game loop, objective, failure conditions |
| [ENCOUNTER-SYSTEM-V1.0.md](ENCOUNTER-SYSTEM-V1.0.md) | Encounter types, flow, setup, and the Crypt |
| [AFFIXES-V1.0.md](AFFIXES-V1.0.md) | Tiered encounter modifiers (Tier 1–4) with XP bonuses |
| [DOOM-SYSTEM-V1.0.md](DOOM-SYSTEM-V1.0.md) | Host's triggered ability cards, drawn per player count |
| [HOST-AUTHORITY-SYSTEM-V1.0.md](HOST-AUTHORITY-SYSTEM-V1.0.md) | Host scaling buffs and Arcane Suppression |
| [REWARD-SYSTEM-V1.0.md](REWARD-SYSTEM-V1.0.md) | XP, Cash Out, and Loot Pool after each encounter |
| [TOWN-SYSTEM-V2.0.md](TOWN-SYSTEM-V2.0.md) | Town buildings — Bank, Bazaar, Blacksmith, Cathedral, Merchant, Mystic, Portal, Tavern, The Guild |
| [STAY-OUT-SYSTEM-V1.0.md](STAY-OUT-SYSTEM-V1.0.md) | Rules for skipping Town — XP scaling, Supply Drops, Wanderers |
| [SUPPLY-DROP-SYSTEM.md](SUPPLY-DROP-SYSTEM.md) | Scavenged resource resolution between encounters |
| [EVENT-SYSTEM-V1.0.md](EVENT-SYSTEM-V1.0.md) | Between-encounter random events — types, timing, frequency |

### Postgame

| Document | Description |
| :--- | :--- |
| [SHOPS.md](SHOPS.md) | Progression Shop — captures, tickets, Brands, and long-term purchases |
| [PERMANENT-PROGRESSION.md](PERMANENT-PROGRESSION.md) | Permanent unlock reference for player progression layers |

### Progress Tracking

Profile progression is tracked by the in-game tool, which manages **Essence, Achievements, Crypt Buffs, Tickets, Brands, and Captures** and saves/loads player data from a Google Sheet.

---

## 🎮 Quick Overview

### How a Run Works

```
Standard: Deckbuild → Event/Trinket → Encounter 1 → ... → Encounter 3 → Crypt
Variant:  Deckbuild → Event/Trinket → Encounter 1 → ... → Encounter 4 → Crypt
```

### Player Count
- Supports **1–6 players**
- Host Health, Rewards, Doom cards, and Authority all scale with player count

### Win Condition
Defeat the **Crypt** (Final Boss) at the end of the run.

### Loss Condition
The run ends only if the party fails to defeat the Crypt.

Failed encounters do not end the run immediately: the party gains no XP from that encounter, cannot replay that encounter stage, and must advance to the next encounter stage.

On a failed encounter, skip Rewards (Cash Out and Loot Pool), Town/Stay Out, and Events for that stage.

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to submit rule change requests, flag bugs, and propose new content.

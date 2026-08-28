# Rules Content Migration Audit

The semantic-rule migration intentionally split large system documents into stable targeted units. This audit records where that split can make table-critical information disappear from the primary flow even when a child unit still contains it.

## Classification

- **Superseded:** old mechanics that must not return to active rules.
- **Preserved in child unit:** detailed text survived, but the parent flow may need a compact summary.
- **Missing from table-facing parent:** critical procedure or numeric values are not visible from the primary flow/guide.
- **Preserved:** the semantic split retained the necessary information and navigation.

## Confirmed findings

### Persistent shops

Status: **Superseded / corrected**.

The old dedicated pre-run and after-run shop concepts are no longer active systems. The **Progression Shop** is the single persistent Essence shop and is available before a run begins and after a run ends. The old pre-run shop contract is removed from active navigation and canonical rules.

### Stay Out

Status: **Preserved in child units, but missing from table-facing parent / corrected**.

The migration preserved the detailed XP, Mystery Pack, Event-scaling, and restriction units, but reduced `stay-out-flow` to a six-line sequence. That hid critical values from the Rules Overview, Host Reference guide, Notebook Overview, and compact TTS references.

The parent flow now includes:

- full healing and Town-building lockout;
- 10 XP base and +5 XP per consecutive Stay Out;
- 2 Mystery Packs per player;
- Supply Drop and Wanderer sequence;
- 2 Events base and +1 Event per consecutive Stay Out;
- Town resetting the streak.

The dedicated child units remain authoritative for deeper detail.

### Town

Status: **Preserved / parent context restored**.

Town flow had lost useful context, but the full Town V2.0 building mechanics survived in `town-buildings`. Bank, Blacksmith, Bazaar, Cathedral, Guild, Merchant, Mystic, Portal, and Tavern values and restrictions remain intact. `town-flow` now also contains full-heal semantics and the fact that returning to Town resets Stay Out scaling.

### Travelers

Status: **Preserved in child units**.

The old `TRAVELERS-V1.0.md` catalog was split into `travelers-system` plus one canonical rule unit per Traveler. The system parent retains the global Town timing/no-Town-Action rule, while the individual Traveler costs, limits, choices, and effects remain in the child catalog. The split is acceptable because each Traveler is itself the executable unit rather than a hidden prerequisite to a separate flow.

### Wanderers

Status: **Preserved in child units**.

The old `WANDERERS-V1.0.md` catalog was split into `wanderers-system` plus one canonical rule unit per Wanderer. The parent retains the Stay Out context, once-per-player interaction rule, and no-building-use rule. Individual Wanderer costs, options, and effects remain in dedicated entries.

### Deckbuilding

Status: **Preserved**.

The current deckbuilding clarification unit remains detailed and retains Commander generation, pool generation, lands, Free Choice, Scryfall, combo, silence, deck minimum, Sideboard, color-identity, pack, and Guild rules.

### Rewards

Status: **Preserved**.

The legacy Reward System was split into `reward-timing`, `xp-system`, `cashout-system`, and `loot-pool`. The mechanical content remains present: mandatory XP/Cashout/Loot Pool resolution, mode XP tables, Affix XP, Cashout selection/trading/restrictions, and the seven-nonland-card Loot Pool procedure. Legacy design-intent prose was intentionally not restored.

### Events

Status: **Preserved**.

Timing, Town/Stay Out Event counts, consecutive Stay Out scaling, one-at-a-time resolution, persistent/delayed effects, printed classifications, Ambush-as-Bad handling, and Crypt restrictions remain in dedicated Event rule units. The repaired Stay Out parent also surfaces the table-critical Event counts.

### Encounter system

Status: **Preserved except normal turn-order procedure / corrected**.

The dedicated Encounter System preserved encounter selection, setup, Affixes, Host Health, encounter types, and Crypt-specific setup. During the broader `CORE-RULES.md` comparison, one table-critical procedure was found missing from active canonical rules: for normal encounters the Host and party roll a d20 and the winner chooses who takes the first turn. The Crypt explicitly overrides that procedure and the Host takes the first turn.

`encounter-flow` now surfaces the normal d20 turn-order procedure and the Crypt override directly before play begins.

### Doom

Status: **Preserved**.

The Doom monolith was split cleanly. Player-count setup, face-down Doom area, reveal cadence, special-action timing, triggered ability stack behavior, used-card removal/rejoin behavior, and once-per-Host-turn reroll rules remain present. Individual Doom effects are canonical rule units.

### Authority / Host scaling

Status: **Preserved**.

Authority level mapping, all five Authority effect packages, Demonic Persistence, Arcane Suppression, and the Disallow/Not Today interaction clarifications remain intact across `authority-level`, `authority-effects`, `always-on-scaling`, and `authority-interactions`.

### Supply Drops

Status: **Preserved**.

The d10 resolution procedure and all ten Supply Drop results remain intact in `supply-drop-resolution` and `supply-drop-table`.

### Crypt / run end

Status: **Preserved**.

Crypt setup remains explicit: no Affixes, the Host takes the first turn, and no Events resolve. Crypt reward eligibility, 500 Essence completion reward, duplicate-Buff +250 Essence handling, and run-end Deck CMC + Sideboard CMC plus unspent-XP Essence conversion remain in dedicated canonical units. `crypt-fight-choice` also remains a separate ultra-rare pre-Crypt choice rule.

### Permanent progression

Status: **Preserved**.

The acquisition model, progression layers, and default once-per-encounter activation rule remain in `progression-reference`. Crypt Buffs, Tickets, Brands, and Achievements are maintained as individual canonical entries and validated through progression contracts. Storage-backend details are not gameplay rules and must not be encoded in canonical text.

### Core Rules cross-check

Status: **Substantially preserved; one omission corrected**.

The old `CORE-RULES.md` aggregation was checked against the current semantic units. Player health, deckbuilding, bans/restrictions, Town/Stay Out, death and player departure, reward eligibility, Crypt rewards, turn/combat rules, PvP, Storm modification, extra turns, card acquisition, progression slots, Ticket rules, starting-land balance, pack rules, encounter modes, global limits, and the rules addendum all have current canonical homes.

The normal encounter d20 turn-order procedure was the one table-critical rule found to have no active canonical home and has now been restored to `encounter-flow`. The old optional Host-discretion death penalty is explicitly described by the archive as optional and outside the base ruleset, so it is not promoted into canonical base rules by this audit.

### Run success / persistence wording

Status: **Stale operational wording / corrected**.

`run-success` retained a legacy sentence stating that progression data was saved to a Google Sheet. That was an implementation detail rather than a gameplay mechanic and became stale after Platform-backed profiles replaced the old storage path. Canonical wording now states only that progression rewards are recorded on the player's persistent MTGR profile.

## Rule for future semantic splitting

A primary **flow** rule must remain table-complete: it should contain the procedure and values needed to execute that flow without opening sibling documents. Child units may hold examples, edge cases, tables, and subsystem detail, but they must not be the only place where core costs, rewards, counts, resets, or restrictions are stated.

Catalog systems such as Travelers, Wanderers, Doom cards, progression entries, and similar collections may use one canonical child document per entry, provided the parent retains the global timing, access, and usage rules needed to understand how the catalog is used.

Legacy documents under `archive/` are migration evidence only. They are not automatically-current rules and must be reconciled against later canonical changes before anything is restored.

Operational implementation details such as database/storage providers also do not belong in canonical gameplay rules.

## Audit status

The identified semantic-migration targets from the archived monoliths have now been compared at the system level. Future audits should be triggered by new legacy evidence, rule changes, or validator failures rather than treating the original migration as unfinished work.

## Second-pass detailed reconciliation

A second pass compared the archived source families with both their canonical parent rules and their individual child entries. This pass recovered details that survived conceptually but were no longer explicit at the point where players or Hosts execute the rule:

- Game Overview now explains how Encounters, Rewards, Town, Stay Out, Events, and the Crypt connect, and defines the boundary between Host adjudication and the stable campaign structure.
- Pre-Encounter Setup now requires deckbuilding and all pregame effects to be finalized before Encounter 1.
- Authority Level and Doom Rules now identify the complete Host Scaling Power layer: Authority, Doom, Demonic Persistence, and Arcane Suppression. They also state which components scale by player count and that all four apply during every encounter.
- Supply Drops now explicitly resolve immediately outside encounters without modifying an active battlefield state.
- Wanderers now explicitly reveal one random Wanderer, permit one interaction per player, require the listed XP cost, and resolve outside encounters without consuming building uses.
- Trinket Tickets now retain their once-per-session offer, decline behavior, fresh-option exception for a newly gained Cashout ticket, persistence, and per-player ownership and slot usage.
- Vanguard, Conspiracy, and Emblem Tickets now identify their Legal selection pools directly in their own entries.
- Arcane Signet, Sol Ring, and Leyline Tickets now state their Scryfalled classification and their no-trade, no-capture, and no-combo restrictions directly in their own entries.

### Archived-source coverage map

| Archived source family | Current canonical home | Reconciliation result |
| --- | --- | --- |
| Core Game Structure | `game-overview`, `run-structure`, `game-loop`, `failed-encounter`, `run-success`, `run-failure` | Full run structure retained; system connections and Host boundary restored to the overview. |
| Core Rules | Getting Started, Encounters, Between Encounters, Rewards, Progression, and `notebook-addendum` | Executable rules retained; normal encounter turn order and pregame finalization restored during audit passes. |
| Deckbuilding Rules | `deckbuilding` | Detailed deck construction, generation, legality, Scryfall, combo, pack, and Guild rules retained. |
| Town | `town-flow`, `town-buildings`, and related Town entries | Building mechanics and limits retained; table-facing flow context restored. |
| Stay Out | `stay-out-flow`, Stay Out child rules, `supply-drop-resolution`, `supply-drop-table`, `wanderers-system` | Counts, scaling, restrictions, Supply Drops, and Wanderer execution retained and surfaced. |
| Events | Event rules under `rules/between-encounters/` | Timing, classifications, scaling, persistence, and Crypt restrictions retained. |
| Rewards | `reward-timing`, `xp-system`, `cashout-system`, `loot-pool` | Gameplay procedure retained. Live Cashout catalogs and weights remain Platform-owned operational data. |
| Encounter System | Encounter type, flow, Wild Magic, and Crypt rules, plus Platform Host tables | Gameplay procedure retained; deployment-owned encounter data remains outside this repository. |
| Host Authority | `authority-level`, `authority-effects`, `authority-interactions`, `always-on-scaling` | Full four-part Host scaling model retained and made explicit at point of use. |
| Doom | `doom-setup`, `doom-rules`, `doom-reroll`, and individual Doom entries | Setup, cadence, stack behavior, recycling, rerolls, and card effects retained. |
| Affixes | `affixes-reference` and related encounter rules | Active Affix procedure and effects retained. |
| Trinkets, Travelers, Wanderers, Demon Generals | One parent system rule plus one canonical child entry per catalog item | Catalog detail retained; parent rules carry timing, access, and shared restrictions. |
| Permanent Progression | `progression-reference` plus one entry per Buff, Ticket, Brand, and Achievement | Acquisition, slots, activation, and item effects retained under progression contracts. |
| Shops | `progression-shop` and Town rules | Current Progression Shop retained; obsolete pre-run and after-run shop models remain superseded. |
| Notebook Addendum | `notebook-addendum` | Cross-cutting clarifications and legal-pool context retained. |
| Spiritual Guidance ruling | The matching Crypt Buff entry | Card-specific gameplay ruling retained with the feature it governs. |
| Essence counter implementation | Platform/tooling documentation | Correctly excluded from gameplay authority because it describes implementation rather than rules. |

### Intentionally excluded legacy material

The reconciliation does not restore text merely because it appeared in an older document. The following remain intentionally outside canonical gameplay rules:

- obsolete pre-run and after-run shops superseded by the Progression Shop;
- Google Sheet and other storage-backend implementation wording;
- the optional Host-discretion death penalty, which the archive identifies as outside the base ruleset;
- live Cashout catalogs, rarity weights, encounter tables, and other operational data governed by Platform contracts;
- historical design rationale that does not create a player-facing or Host-facing procedure.

The regression validator now checks the recovered details at their canonical homes so a later rewrite cannot silently reduce them to thinner summaries.

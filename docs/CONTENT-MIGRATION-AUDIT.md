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

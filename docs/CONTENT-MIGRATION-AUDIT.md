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

Status: **Mostly preserved / parent context restored**.

Town building details survived in `town-buildings`, but `town-flow` had been reduced to only three steps. The parent flow now includes the full-heal semantics and the fact that returning to Town resets Stay Out scaling.

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

Status: **Preserved**.

`encounter-flow` remains a small common wrapper, while `encounter-types` retains the encounter availability gate and detailed Precon, Master, Tribal, Plane, Story, Villain, and Wildcard setup/mechanics. Host health, Affixes, failure transition, and Crypt behavior remain in their own rules.

### Doom

Status: **Preserved**.

The Doom monolith was split cleanly. Player-count setup, face-down Doom area, reveal cadence, special-action timing, triggered ability stack behavior, used-card removal/rejoin behavior, and once-per-Host-turn reroll rules remain present. Individual Doom effects are canonical rule units.

### Authority / Host scaling

Status: **Preserved**.

Authority level mapping, all five Authority effect packages, Demonic Persistence, Arcane Suppression, and the Disallow/Not Today interaction clarifications remain intact across `authority-level`, `authority-effects`, `always-on-scaling`, and `authority-interactions`.

### Supply Drops

Status: **Preserved**.

The d10 resolution procedure and all ten Supply Drop results remain intact in `supply-drop-resolution` and `supply-drop-table`.

### Permanent progression

Status: **Preserved**.

The acquisition model, progression layers, and default once-per-encounter activation rule remain in `progression-reference`. Crypt Buffs, Tickets, Brands, and Achievements are maintained as individual canonical entries and validated through progression contracts. Storage-backend details are not gameplay rules and must not be encoded in canonical text.

### Run success / persistence wording

Status: **Stale operational wording / corrected**.

`run-success` retained a legacy sentence stating that progression data was saved to a Google Sheet. That was an implementation detail rather than a gameplay mechanic and became stale after Platform-backed profiles replaced the old storage path. Canonical wording now states only that progression rewards are recorded on the player's persistent MTGR profile.

## Rule for future semantic splitting

A primary **flow** rule must remain table-complete: it should contain the procedure and values needed to execute that flow without opening sibling documents. Child units may hold examples, edge cases, tables, and subsystem detail, but they must not be the only place where core costs, rewards, counts, resets, or restrictions are stated.

Legacy documents under `archive/` are migration evidence only. They are not automatically-current rules and must be reconciled against later canonical changes before anything is restored.

Operational implementation details such as database/storage providers also do not belong in canonical gameplay rules.

## Remaining audit targets

Future content audits should focus on systems not yet compared at this depth, especially individual Town buildings, Wanderers/Travelers, Crypt-specific subsystems, and any rules derived from old `CORE-RULES.md` sections that do not already have an obvious one-to-one semantic unit.

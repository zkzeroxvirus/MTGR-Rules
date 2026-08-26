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

Status: **Preserved** in the current audit sample.

The current deckbuilding clarification unit remains detailed and retains Commander generation, pool generation, lands, Free Choice, Scryfall, combo, silence, deck minimum, Sideboard, color-identity, pack, and Guild rules.

## Rule for future semantic splitting

A primary **flow** rule must remain table-complete: it should contain the procedure and values needed to execute that flow without opening sibling documents. Child units may hold examples, edge cases, tables, and subsystem detail, but they must not be the only place where core costs, rewards, counts, resets, or restrictions are stated.

Legacy documents under `archive/` are migration evidence only. They are not automatically-current rules and must be reconciled against later canonical changes before anything is restored.

## Next audit passes

The next systematic comparisons should cover the archived **Reward**, **Event**, **Encounter**, **Doom**, and **Authority** system documents against their current parent-flow and child-rule units. The objective is not to restore old text wholesale; it is to identify table-critical numbers, timing, reset rules, restrictions, and edge cases that became unreachable or invisible during semantic splitting.

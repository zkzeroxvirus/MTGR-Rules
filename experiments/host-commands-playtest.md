# Host Commands playtest — V0.3 tier-choice adaptation

Status: opt-in playtest, adopted October 2, 2026. This does not replace published
Host Authority rules until promoted. Choose this package or legacy Not Today/free
Disallow, never both. Keep Doom, passive scaling, Demonic Persistence, and Arcane
Suppression.

Source: [Host Skill Trees Rework V0.3](https://docs.google.com/document/d/1akHIIAQO9-rFzYXNYHSJkTghYuty9ryT/edit).
This adaptation keeps its four archetypes and six Commands per archetype, but
uses tier choices and a ten-point progression, approved October 3, 2026. Its effects include
the balance changes described below. These are custom MTG-style effects, not
official Oracle entries.

## Progression and resources

Use the Host Profile on the same Steam account as the Player Profile. A verified
eligible run grants 100 HXP alongside the existing Host Essence reward, once.
Kills, wins, Command invocations, and review scores do not grant additional HXP.

Ranks 1–10 begin at 0, 100, 250, 450, 700, 1000, 1350, 1750, 2200, and 2700 HXP.
Rank 1 grants no Skill Points. Rank 2 grants two, and each of Ranks 3–10 grants
one, for ten total. Points first become available when Tier I skills unlock.
Rank does not increase damage, life, mana, Command slots, or Authority.

Each branch has two Tier I choices, two Tier II choices, one Tier III skill and
the existing capstone. Every skill costs one point. Either learned Tier I skill
qualifies for either Tier II skill in that branch. Any learned Tier II skill
qualifies for Tier III, and Tier III qualifies for its capstone. The other Tier I
and Tier II skills remain optional purchases, not mandatory steps.

Minimum rank gates remain 2 for Tier I, 4 for Tier II, 7 for Tier III and 10 for
the capstone. A minimum capstone path
costs four points: Tier I → Tier II → Tier III → Capstone. Two capstones cost eight
points, leaving two points for splashes. Prerequisites must be learned in the
same branch; skills from another branch cannot qualify. Hosts cannot learn
everything at maximum rank.

| Seated non-Host players | Command slots | Authority | Party Scale |
| --- | ---: | ---: | ---: |
| 1 | 1 | 3 | 1 |
| 2 | 2 | 4 | 1 |
| 3 | 2 | 5 | 2 |
| 4 | 3 | 6 | 2 |
| 5 | 3 | 7 | 3 |
| 6 | 3 | 8 | 3 |

Profile equipment allows up to three choices; the smaller party-size Command
slot limit still applies.
Starter, Tier I and Tier II Commands cost 1 Authority. Tier III and capstones
cost 2. Each equipped Command may be invoked once per encounter. Encounter
changes restore uses, not Authority. Town and Crypt do not refill Authority.
Party Scale and Authority capacity follow the currently seated non-Host players.
Authority already spent stays spent; leaving, returning or editing equipment does
not erase spending. No seated party means zero available Authority. Commands
and skill points are configured on Host Progression; the HUD only invokes them.

## Resolution and shared definitions

Invoking an ordinary Command with legal timing puts its Host-controlled
triggered ability on the stack. Players may respond and counter it where their
cards allow. Only text explicitly saying it cannot be countered creates that
exception. All four capstones have that exception; Arcane Supremacy does not.

Commands are system abilities, not abilities of permanents; Twice the Power does
not automatically copy them. Otherwise apply ordinary copy/target/stack rules
unless the particular Command prohibits that action. Absolute Command — Disallow
casts its defined normal spell and retains applicable spell/affix interactions.
Being uncounterable does not make an ability immune to other stack removal.

The Host may undo an accidental or misunderstood activation using Undo activation on the HUD. It refunds the recorded Authority cost and restores the encounter use if it is still marked used. Reverse any choices and effects at the table. This correction is not a refund for normal counterplay.

Authority and the encounter use are spent on invocation, without a refund if the
effect is answered or all its chosen targets become illegal. Modes and targets
are chosen on invocation; non-target choices occur on resolution unless stated
otherwise. Each delayed triggered ability uses the stack and can be answered
normally. The table adjudicates timing, targets and resolution. The profile
editor does not invoke Commands or automate the Magic stack.

Party Scale is shared by all Commands that mention it and follows the currently seated non-Host players: 1–2 players = 1; 3–4 = 2; 5–6 = 3. Recalculate it when players join, leave or change seats. With no seated players, Party Scale is 0.

Each remaining opponent votes simultaneously for one available option. The option with the most votes occurs; you break ties. Vote again for a victim when instructed. Discard/sacrifice eligibility is checked on resolution; life loss is an effect, not a payment.

An MTGR finality marker creates this replacement effect: If this permanent would leave the battlefield for a zone other than exile, exile it instead. It applies even if the permanent loses its abilities.

Commands are Host-controlled triggered abilities on the stack unless their resolution is a spell. Players may respond. Abilities can be countered unless their text says otherwise; being uncounterable does not prevent removal from the stack. They are not abilities of permanents.

“Party” means remaining non-Host opponents. Opponents with no eligible discard
or sacrifice option cannot satisfy a requirement merely by resolving partially.
When a Command explicitly allows partial resolution, do as much as possible.
For a victim vote, vote only for eligible opponents. If there are no opponents,
a party vote produces no effect.

An MTGR finality marker is a custom marker, not Magic's finality counter.
[Magic's finality counters](https://magic.wizards.com/en/news/feature/the-lost-caverns-of-ixalan-mechanics)
only replace a trip from battlefield to graveyard; this MTGR marker also stops
bounce, blink and other non-exile exits. Counter removal does not remove this
marker. It belongs to that battlefield object; if it leaves, a later return is
a new object unless given a new marker.

## Commands

Effects, timing and notes below are the playtest wording. Tier I-A/I-B and
II-A/II-B denote choices within a tier. Either choice supports the next tier;
learning both is optional.

### Starter Commands

#### Absolute Command - Disallow

Cost: 1 Authority. Resolution: spell.

Timing: Any time you could cast an instant.

Create a copy of the card named Disallow. Cast the copy without paying its mana cost.

Rules details: Disallow reads: Counter target spell, activated ability, or triggered ability. The copy is cast as a spell; players may respond and counter it normally.

#### Demonic Ward

Cost: 1 Authority. Resolution: ability.

Timing: Any time you have priority.

Choose hexproof or indestructible. Target nonland permanent you control gains that ability until end of turn.

Rules details: Choose the permanent when invoking this Command. Choose the ability as it resolves; this is not a modal choice made on invocation.

#### Twisted Targeting

Cost: 1 Authority. Resolution: ability.

Timing: While an opponent's spell or ability with a single target targets you or a permanent you control, and you have priority.

Change the target of the chosen spell or ability with a single target.

Rules details: Choose the eligible spell or ability when invoking this Command. It must be controlled by an opponent, have a single target, and target you or a permanent you control. This Command does not target that spell or ability. The replacement target must be legal for it.

#### Break the Charge

Cost: 1 Authority. Resolution: ability.

Timing: During combat, before combat damage, any time you have priority.

Prevent all combat damage that would be dealt by target attacking creature this combat.

Rules details: This prevents combat damage; it does not counter abilities that triggered when the creature attacked.

### Dominion

#### Claim the Initiative — I-A

Minimum Rank 2. Cost: 1 Skill Point; 1 Authority.

Timing: Any time you have priority.

Copy target instant or sorcery spell an opponent controls with mana value 3 or less. You may choose new targets for the copy.

Rules details: The original spell remains on the stack. Additional targets must be legal.

#### Turn the Blade — I-B

Minimum Rank 2. Cost: 1 Skill Point; 1 Authority.

Timing: Any time you have priority.

You may choose new targets for target spell or ability.

Rules details: Choose any number of legal new targets on resolution. Keep the number of targets and any division of damage or counters unchanged.

#### Imperial Reflection — II-A

Minimum Rank 4. Cost: 1 Skill Point; 1 Authority. Requires a Tier I skill in Dominion.

Timing: Any time you have priority.

Choose one —

- Copy target activated or triggered ability an opponent controls. You may choose new targets for the copy.

- Draw two cards.

Rules details: Choose the mode on invocation. For the copy mode, choose the target ability then. Mana abilities do not use the stack.

#### Delay the Inevitable — II-B

Minimum Rank 4. Cost: 1 Skill Point; 1 Authority. Requires a Tier I skill in Dominion.

Timing: Any time you have priority.

Exile target spell an opponent controls with two time counters on it. If a card is exiled this way, it gains suspend.

Rules details: Suspend uses its owner's upkeeps. Its owner may cast it when the last time counter is removed; the resulting spell may be answered normally. A spell copy is not a card and cannot return.

#### Arcane Supremacy — III

Minimum Rank 7. Cost: 1 Skill Point; 2 Authority. Requires a Tier II skill in Dominion.

Timing: Any time you have priority.

Copy target spell an opponent controls. You may choose new targets for the copy. Return the original spell to its owner's hand. This ability can't be copied and its target can't be changed.

Rules details: This Command can be countered. Permanent spell copies resolve as tokens. Returning the original spell does not counter it.

#### Final Authority — Capstone

Minimum Rank 10. Cost: 1 Skill Point; 2 Authority. Requires a Tier III skill in Dominion.

Timing: Any time you have priority.

Choose one —

- Exile target spell.

- Counter target activated or triggered ability.

This ability can't be countered or copied, and its target can't be changed.

Rules details: Choose the mode and target on invocation. Abilities are countered, not exiled. Exiling a spell is not countering it. Removing this Command from the stack without countering it is still possible.

### Torment

#### Blood or Tribute — I-A

Minimum Rank 2. Cost: 1 Skill Point; 1 Authority.

Timing: During your main phase, while the stack is empty and you have priority.

Each opponent votes for blood or tribute. Choose one of the modes with the most votes or tied for the most votes as this ability resolves —

- Blood — Each opponent loses X life, where X is 2 plus Party Scale.

- Tribute — Draw two cards, create X Treasure tokens, where X is Party Scale, and create a 3/3 black Demon creature token with flying.

Rules details: Both options are available. Life loss is an effect, not a life payment. Vote simultaneously for available options; you break ties. Choose the mode on resolution, not on invocation. Vote only for eligible victims. No opponents means no effect.

#### Feed the Darkness — I-B

Minimum Rank 2. Cost: 1 Skill Point; 1 Authority.

Timing: During your main phase, while the stack is empty and you have priority.

Each opponent votes for starve or feed. Choose one of the modes with the most votes or tied for the most votes as this ability resolves —

- Starve — Each opponent discards a card.

- Feed — You may return a permanent card from your graveyard to your hand. Create X Treasure tokens, where X is Party Scale.

Rules details: Starve is available only if each opponent has a card in hand. Feed is always available. The graveyard card is chosen on resolution and is not targeted. Vote simultaneously for available options; you break ties. Choose the mode on resolution, not on invocation. Vote only for eligible victims. No opponents means no effect.

#### Kneel or Bleed — II-A

Minimum Rank 4. Cost: 1 Skill Point; 1 Authority. Requires a Tier I skill in Torment.

Timing: During your main phase, while the stack is empty and you have priority.

Each opponent votes for kneel or bleed. Choose one of the modes with the most votes or tied for the most votes as this ability resolves —

- Kneel — For each opponent, choose a creature they control. Tap those creatures and put a stun counter on each of them.

- Bleed — Until your next turn, whenever one or more creatures an opponent controls attack you or an opponent activates a nonmana ability of a nonland permanent, that player loses 1 life. This ability triggers only three times for each player.

Rules details: Kneel is available only if each opponent controls a creature. Bleed is always available. Its trigger limit is shared across attacking and activating abilities, separately for each opponent. Vote simultaneously for available options; you break ties. Choose the mode on resolution, not on invocation. Vote only for eligible victims. No opponents means no effect.

#### Divide the Alliance — II-B

Minimum Rank 4. Cost: 1 Skill Point; 1 Authority. Requires a Tier I skill in Torment.

Timing: During your main phase, while the stack is empty and you have priority.

Each opponent votes for together or alone. Choose one of the modes with the most votes or tied for the most votes as this ability resolves —

- Together — Each opponent loses 3 life and discards a card.

- Alone — Each opponent votes for an opponent. Choose an opponent with the most votes or tied for the most votes. That player loses 7 life, discards two cards, and sacrifices a nonland permanent with the greatest mana value among nonland permanents they control.

Rules details: Together requires every opponent to have a card in hand. Alone requires an eligible opponent with at least two cards in hand and a nonland permanent. If neither option is available, resolve Together as much as possible. The affected player chooses among tied permanents. Vote simultaneously for available options; you break ties. Choose the mode on resolution, not on invocation. Vote only for eligible victims. No opponents means no effect.

#### No Safe Answer — III

Minimum Rank 7. Cost: 1 Skill Point; 2 Authority. Requires a Tier II skill in Torment.

Timing: During your main phase, while the stack is empty and you have priority.

Each opponent votes for ruin or despair. Choose one of the modes with the most votes or tied for the most votes as this ability resolves —

- Ruin — Each opponent sacrifices a nonland permanent with the greatest mana value among nonland permanents they control. Draw X cards, where X is the number of opponents who didn't sacrifice a permanent this way or 2, whichever is less.

- Despair — Each opponent discards a card, mills three cards, and loses 4 life.

Rules details: Both options are available; resolve as much as possible. Each opponent chooses among tied permanents. Mill can benefit graveyard decks; it is not additional unavoidable damage. Vote simultaneously for available options; you break ties. Choose the mode on resolution, not on invocation. Vote only for eligible victims. No opponents means no effect.

#### The Final Bargain — Capstone

Minimum Rank 10. Cost: 1 Skill Point; 2 Authority. Requires a Tier III skill in Torment.

Timing: Any time you have priority.

Each opponent votes for submit or resist. Choose one of the modes with the most votes or tied for the most votes as this ability resolves —

- Submit — Take an extra turn after this one. You can't invoke Commands during that extra turn. End the turn.

- Resist — Each opponent loses 4 life and sacrifices a nonland permanent with the greatest mana value among nonland permanents they control.

This ability can't be countered.

Rules details: Both options are available; resolve as much as possible. Each opponent chooses among tied permanents. Create the extra turn before ending the current turn. Doom and ordinary spells still follow their own rules. Vote simultaneously for available options; you break ties. Choose the mode on resolution, not on invocation. Vote only for eligible victims. No opponents means no effect.

### Suppression

#### Break the Formation — I-A

Minimum Rank 2. Cost: 1 Skill Point; 1 Authority.

Timing: During combat before combat damage, or during your main phase with an empty stack, while you have priority.

Tap up to X target creatures your opponents control, where X is Party Scale. Put a stun counter on each of those creatures. Creatures you control gain menace until end of turn.

Rules details: Choose targets on invocation. If all chosen targets become illegal, the entire Command fails to resolve. You may choose no targets to grant menace.

#### Silence the Engine — I-B

Minimum Rank 2. Cost: 1 Skill Point; 1 Authority.

Timing: Any time you have priority.

Choose up to X nonland permanents your opponents control, where X is Party Scale. Until your next turn, those permanents lose all abilities except mana abilities. Until your next turn, whenever one of those permanents leaves the battlefield, draw a card. This ability triggers only twice.

Rules details: Choose on resolution; this does not target. Mana abilities remain. The two-card limit is shared across all selected permanents. Removing characteristic-defining abilities can change a creature's power or toughness.

#### Seize the Champion — II-A

Minimum Rank 4. Cost: 1 Skill Point; 1 Authority. Requires a Tier I skill in Suppression.

Timing: During your main phase, while the stack is empty and you have priority.

Target opponent chooses a creature they control with the greatest power among creatures they control. Gain control of that creature until your next turn. Untap it. It gains haste until end of turn. It attacks its owner this turn if able.

Rules details: The opponent chooses among tied creatures. Only the player is targeted. If they control no creatures, no creature changes control.

#### Seal the Threshold — II-B

Minimum Rank 4. Cost: 1 Skill Point; 1 Authority. Requires a Tier I skill in Suppression.

Timing: Any time you have priority.

Exile up to X target cards from your opponents' graveyards, where X is Party Scale. Until your next turn, your opponents can't cast spells from graveyards and cards in their graveyards can't enter the battlefield.

Rules details: This does not stop abilities from triggering when creatures enter or die, or prevent cards from returning to hand. If all chosen targets become illegal, the entire Command fails to resolve. You may choose no targets.

#### Total Lockdown — III

Minimum Rank 7. Cost: 1 Skill Point; 2 Authority. Requires a Tier II skill in Suppression.

Timing: During your main phase, while the stack is empty and you have priority.

Tap all nonland permanents your opponents control. For each opponent, choose a nonland permanent they control. Those permanents don't untap during their controllers' next untap steps. Until your next turn, your opponents can't activate nonmana abilities of tapped permanents.

Rules details: Choices are made on resolution and do not target. Mana abilities remain available. Untapping a permanent by another effect permits its nonmana abilities to be activated again.

#### Absolute Suppression — Capstone

Minimum Rank 10. Cost: 1 Skill Point; 2 Authority. Requires a Tier III skill in Suppression.

Timing: Any time you have priority.

For each opponent, choose a nonland permanent they control. Until your next turn, those permanents lose hexproof and indestructible, and their activated abilities can't be activated unless they're mana abilities. Destroy up to one of those permanents. This ability can't be countered.

Rules details: Choices are made on resolution and do not target. Other permanents and triggered abilities are unaffected. This removes one permanent, not one per opponent; mana abilities remain available.

### Ascendancy

#### Muster the Court — I-A

Minimum Rank 2. Cost: 1 Skill Point; 1 Authority.

Timing: During your main phase, while the stack is empty and you have priority.

Choose vigilance, menace, or reach. Create X 3/3 black Demon creature tokens with that ability, where X is Party Scale.

Rules details: Choose the ability on resolution. The tokens keep it while they remain on the battlefield; normal encounter cleanup still applies.

#### Feed the Throne — I-B

Minimum Rank 2. Cost: 1 Skill Point; 1 Authority.

Timing: During your main phase, while the stack is empty and you have priority.

Draw two cards, then discard a card. You may sacrifice a token. If you do, create X Treasure tokens, where X is Party Scale, and draw a card.

Rules details: The sacrifice is optional and occurs on resolution. A Treasure is a token; it is sacrificed to this effect, not to its mana ability.

#### Crowned Champion — II-A

Minimum Rank 4. Cost: 1 Skill Point; 1 Authority. Requires a Tier I skill in Ascendancy.

Timing: During your beginning of combat step, while you have priority.

Put two +1/+1 counters on target creature you control. Untap it. It gains trample, haste, and ward {2} until your next turn. Until end of turn, whenever that creature deals combat damage to a player, draw two cards. This ability triggers only once.

Rules details: The combat-damage reward occurs once in total, not once per opponent. Ward uses a triggered ability and does not make the creature untargetable.

#### Relentless Return — II-B

Minimum Rank 4. Cost: 1 Skill Point; 1 Authority. Requires a Tier I skill in Ascendancy.

Timing: During your main phase, while the stack is empty and you have priority.

Return target creature card from your graveyard to the battlefield with two +1/+1 counters and an MTGR finality marker on it. It gains haste until end of turn.

Rules details: Use the shared MTGR finality replacement: exile the permanent the next time it would leave the battlefield for any zone other than exile. This is stronger than a normal Magic finality counter.

#### Overwhelming Presence — III

Minimum Rank 7. Cost: 1 Skill Point; 2 Authority. Requires a Tier II skill in Ascendancy.

Timing: During your beginning of combat step, while you have priority.

Until your next turn, creatures you control get +2/+2 and gain trample and ward {2}. Until end of turn, whenever one or more creatures you control deal combat damage to a player, create a Treasure token and draw a card. This ability triggers only once for each player.

Rules details: Only creatures you control as this Command resolves gain the bonus. Track each damaged opponent publicly; double strike and extra combats don't grant another reward for that opponent.

#### The Host Ascendant — Capstone

Minimum Rank 10. Cost: 1 Skill Point; 2 Authority. Requires a Tier III skill in Ascendancy.

Timing: During your main phase, while the stack is empty and you have priority.

Choose one —

- Return a creature card from your graveyard to the battlefield with an MTGR finality marker on it.

- Draw cards until you have five cards in hand.

Create X 4/4 black Avatar creature tokens, where X is Party Scale. Creatures you control gain haste until end of turn. This ability can't be countered.

Rules details: Choose the mode on invocation. For the return mode, choose the creature on resolution; it is not targeted. The draw mode does nothing with five or more cards in hand. The Avatar and haste effects occur in either mode. An MTGR finality marker means that if that permanent would leave the battlefield for a zone other than exile, exile it instead. This replacement effect applies even if it loses its abilities.

## Rebalance from the source draft

- Imperial Reflection uses an explicit mode, not a subjective “beneficial”
  ability test. The Host may choose draw two even when an ability is available.
- Delay the Inevitable uses normal suspend and allows normal targeting and
  responses when the spell returns. Arcane Supremacy is counterable.
- Divide the Alliance's victim discards two, not three. No Safe Answer draws at
  most two cards for missing sacrifices.
- The Final Bargain's resist option is four life and one greatest-mana-value
  nonland sacrifice per opponent, not five life and two sacrifices. Submit
  creates its extra turn before ending the current turn; the Host cannot invoke
  further Commands during that extra turn.
- Seal the Threshold does not suppress all enter/death triggers or all movement
  from graveyards. Total Lockdown's activation restriction affects tapped
  permanents; other untap effects can reopen them.
- Absolute Suppression disables one chosen nonland per opponent and destroys at
  most one chosen permanent in total. It does not disable every party trigger.
- Ascendancy retains its resource/combat identity. Its rewards have explicit
  windows and once-per-opponent limits. Its capstone chooses reanimation or
  refill, not both, alongside Avatars and haste. The draw mode fills to five,
  never draws five on top of an existing hand.

## Existing profiles

The four starter IDs remain unchanged. The previous six learned skills are
retired, not renamed into mechanically different Commands. Earned HXP remains.
Explicitly save a new skill allocation to remove retired or unlearned equipment.
No automatic respec or point reassignment occurs on read. Existing investments
in all six current branch skills remain valid under the tier-choice prerequisites.
The ten-point allowance follows earned HXP without resetting the profile;
additional points are left unassigned until the Host chooses where to spend them.
Authority remains a local in-game resource, not part of the server profile.

## Balance review

Keep Commander Brackets as declared play expectations, not a numerical power
multiplier. A higher Bracket does not grant Authority. Review actual deck,
affixes, Doom, season and party progression separately from rank.

Doom already provides large draws, tutors, removal, protection and other swings.
Review Dominion's denial chain and free Disallow with Arcane Suppression; Torment's
party-wide pressure; Suppression's skipped recovery and graveyard shutdown;
Ascendancy's Treasure, token and draw amplification. Pay attention to sacrifice
outlets after Seize the Champion, extra turns with Doom, and haste combined with
combat affixes. Preserve the prohibited Twice the Power + Annihilator 1 pairing.

Playtest both four- and six-player parties at 20 life with 40-card starting decks.
Record Authority remaining, denial sequences, decisions offered by Torment,
ability to execute a player plan, encounter length and wins. Separate data by
Host deck Bracket, encounter/stage, affixes, season and party progression.
Passing code tests does not establish balance. No Command-use rewards.

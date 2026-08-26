# **Experimental Horde Encounter V0.1**

Horde is an experimental survival encounter in which the party faces an increasingly powerful wave of creature tokens.

Unlike a standard encounter, the Host uses no deck and has no life total. The party wins by surviving the required number of rounds.

## **Encounter Setup**

* Determine the number of rounds the party must survive before the encounter begins
* The current testing range is **5–10 rounds**
* The Host uses no deck and has no life total
* The Host may be attacked, but has no life total and cannot be defeated through combat damage or life loss
* The Host has access to the complete **Host Authority** Scaling Power layer: **Authority + Doom + Demonic Persistence + Arcane Suppression**
* Use only Affixes from the Horde Affix pool

## **Horde Rounds**

A Horde round consists of one Host turn followed by one turn for each surviving player.

At the beginning of each Host turn:

1. Increase the round number by 1
2. Reroll all active Horde Affixes
3. Generate one Horde token for each surviving player
4. Assign each generated token to the player for whom it was generated
5. Each Horde token attacks its assigned player this combat, if able and if it is not affected by summoning sickness

Tokens generated for a player continue to behave as normal Host-controlled creatures after the combat in which they were generated. Unless an effect says otherwise, surviving Horde tokens remain on the battlefield between rounds.

## **Token Scaling**

Each Horde token has base power and toughness equal to:

**(2 × the current round) − 1**

| Round | Tokens Generated | Base Power/Toughness |
| ----- | ----- | ----- |
| 1 | 1 per surviving player | 1/1 |
| 2 | 1 per surviving player | 3/3 |
| 3 | 1 per surviving player | 5/5 |
| 4 | 1 per surviving player | 7/7 |
| 5 | 1 per surviving player | 9/9 |
| 6 | 1 per surviving player | 11/11 |
| 7 | 1 per surviving player | 13/13 |
| 8 | 1 per surviving player | 15/15 |
| 9 | 1 per surviving player | 17/17 |
| 10 | 1 per surviving player | 19/19 |

Each token's base power and toughness are determined when it is generated. Tokens from earlier rounds do not automatically increase in size during later rounds.

## **Combat Rules**

* The Host controls all Horde tokens
* Horde tokens are affected by summoning sickness as normal
* A Horde token attacks the player for whom it was generated each combat, if able
* If the assigned player is no longer in the game when attackers are declared, the Host may assign that token to another surviving player
* Each Horde token may be attacked as though it were a player
* When a Horde token is attacked, the Host declares blockers for it as they would for a defending player
* Unblocked combat damage assigned to a defending Horde token is dealt to that token and handled as normal damage to a creature
* The Host may also be attacked as though they were a player with a life total
* Combat damage dealt to the Host does not cause the Host to lose the encounter and cannot cause the party to win

## **Host Authority**

The Host retains access to the full Host Authority suite during Horde encounters.

* Determine Authority Level and Doom cards from the number of players as normal
* Apply **Authority**, **Doom**, **Demonic Persistence**, and **Arcane Suppression**
* Authority effects that can function without a Host deck operate normally
* The Host's lack of a deck or life total does not remove access to any other applicable Host Authority effect

Use `HOST-AUTHORITY-SYSTEM-V1.0.md` and `DOOM-SYSTEM-V1.0.md` as the source of truth for the complete Scaling Power layer.

## **Horde Affixes**

Horde uses a modified selection of Affixes because the Host has no deck, life total, lands, or spells.

* All Horde Affixes are rerolled at the beginning of every Host turn
* Rerolling removes the previous Horde Affixes before the new Affixes become active
* An Affix that refers to the Host gaining life, drawing or casting cards, controlling lands, or performing deck actions is not Horde-compatible unless it has a Horde-specific version
* The number, tiers, and final selection of Horde-compatible Affixes are still in development

## **Winning and Losing**

The party wins after completing the final required round with at least one player still in the game.

The party loses if all players lose the game before the encounter is completed.

The Host's battlefield does not need to be empty for the party to win.

## **Current Test Variables**

The following rules require playtesting before Horde can be promoted out of Experimental:

* Whether the standard encounter should last **5, 7, or 10 rounds**
* Whether old Horde tokens should remain between rounds
* Whether token scaling should remain fixed at **+2/+2 per round**
* How many Affixes should be active each round
* Which existing Affixes receive Horde-specific versions
* Whether rewards or XP should scale with the selected round count
* Whether eliminated players reduce the number of tokens generated on later rounds

## **Status**

Horde is experimental and is not yet part of the core Encounter System. Record party size, required rounds, rounds survived, active Affixes, and the cause of each player elimination during testing.

# Combos, Infinite Loops, and Scryfall Restrictions

These restrictions apply to run decks for both Players and the Host unless another rule explicitly says otherwise.

## Counting the required cards

Count the **minimum number of actual Magic cards required** for the winning combo or infinite loop to function, across all relevant zones. A Commander counts when required. Required cards in hand, the graveyard, or exile count just as required cards on the battlefield do.

- Count supporting cards that must be revealed, discarded, sacrificed, or otherwise used to make the interaction work, even if any card of a particular type could fill that role.
- Do not count ordinary mana sources used only to pay initial casting or activation costs. Mana-producing cards that must be reused to sustain the loop do count.
- Unnecessary extra cards do not increase the count. Tokens, copies, or other game objects produced by the combo or loop do not increase the number of starting cards required.
- Apply the Scryfall restrictions to every card actually used in the combo or loop, including supporting cards outside the battlefield. A Scryfalled card used in the interaction cannot be ignored simply because it is interchangeable or additional to the minimum required set.

Use the actual required interaction, rather than just the two named engine cards, to determine its card count.

## Non-infinite winning combos

A **non-infinite two-card winning combo** uses two cards alone to produce a game win or make the opposing side lose the game. These combos are banned. **Thassa's Oracle + Demonic Consultation** is an example.

A winning combo can win through a card's win-or-lose effect or through its resulting damage, life loss, poison, or other game-losing result. It does not need to contain the words "you win the game."

Gaining mana or life, drawing cards, preventing damage, or restricting an opponent does not by itself make an interaction a winning combo. Ordinary synergy or protection that could help a player win later does not meet this definition merely because it is strong. Evaluate the complete line that produces the win, including any required additional cards.

Non-infinite winning combos requiring three or more cards are allowed, subject to other MTGR restrictions. A card with a **Scryfall decal**, or treated as **Scryfalled**, cannot be used as part of a non-infinite winning combo, regardless of its card count.

## Infinite loops

An **infinite loop** is a sequence of actions that can be repeated an arbitrarily chosen number of times while maintaining or replenishing everything needed to continue. It may repeat automatically or through repeated player choices. A loop can be infinite even if it produces no net mana or does not win the game.

An interaction that consumes a finite resource without replacing it is not infinite. Reusing an effect after normal turn progression refreshes its resources is not, by itself, an infinite loop. A sequence that creates its own extra turns can still be infinite.

If an infinite loop involves **two or fewer required cards**, or **any Scryfalled card is used in that loop**, that loop may resolve **no more than one iteration per turn**. One iteration means performing the repeating sequence once, not choosing an arbitrarily large number of repetitions.

Permanents or other game objects created during that iteration do not allow the same loop to resolve again that turn. An extra turn created by such a loop cannot be used to resolve the same loop again for the purpose of creating another extra turn.

Infinite loops requiring **three or more cards and using no Scryfalled cards** are not limited by this rule. Any separate MTGR restriction still applies.

## Examples

### Isochron Scepter + Fog

With Fog imprinted, pay {2} and tap Isochron Scepter to cast a copy of Fog. Neither card untaps Scepter or replenishes the activation mana. Using Scepter again after the next normal untap is recurring protection; these two cards do not create an infinite loop or win the game by themselves.

**This interaction is allowed under these combo restrictions**, including when one of the cards is Scryfalled. If additional cards create an actual infinite loop or winning combo, evaluate that complete interaction separately.

### Staff of Domination + Metalworker

With unmodified cards, Metalworker must be able to activate its tap ability, and Staff of Domination must be ready to tap.

The usual positive-mana loop requires **three other artifact cards in hand**:

1. Tap Metalworker and reveal those three artifacts to produce {C}{C}{C}{C}{C}{C}.
2. Pay {3} and tap Staff to untap Metalworker.
3. Pay {1} to untap Staff.
4. Both permanents are ready again, with two colorless mana gained. Repeat.

Under MTGR's counting rule, this is a **five-card infinite-mana loop**: Staff, Metalworker, and three required artifact cards in hand. The same hand cards can be revealed each time; they are not consumed.

With only two artifact cards in hand, the sequence produces four mana and spends all four on the untaps. That is a **four-card loop with no net mana**, rather than an infinite-mana loop.

Neither version is a two-card infinite under MTGR. Either version is limited to one iteration per turn if any card used in the loop is Scryfalled, including an artifact revealed from hand. Otherwise, the three-or-more-card loop rule allows repetition. Infinite mana and access to Staff's other abilities do not by themselves constitute a game win; evaluate any winning line and its additional required cards separately.

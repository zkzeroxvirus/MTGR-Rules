# Essence Counter Functionality

This document describes what the in-game Essence Counter does and how players interact with it.

## Purpose

The Essence Counter is the player profile and progression controller for MTG Roguelike. It tracks long-term progression data and provides a UI to review and claim unlocked rewards.

It manages:

- Essence total
- Crypt Buff unlocks
- Achievement unlocks
- Ticket unlocks
- Brand ranks (repeatable progression)
- Capture tickets

## Core Behavior

## 1) Essence Value Management

The counter stores an Essence value from 0 to 999999.

Players can update Essence by:

- Clicking quick delta buttons: +50, +10, +5, +1, -1, -5, -10, -50
- Typing a direct value in the Essence input field
- Typing signed deltas (example: +25 or -10)
- Typing simple math expressions (example: 200-50+10)

Invalid input is ignored and the UI refreshes to the current saved value.

## 2) Rewards Panel Navigation

The rewards panel can be toggled with Show Rewards / Hide Rewards.

When visible, it supports five tabs:

- Crypt Buffs
- Achievements
- Tickets
- Brands
- Captures

Each tab shows up to 26 visible slots. Slot state is color-coded:

- Locked items: gray
- Unlocked items: blue
- Selected item: brighter highlight

Selecting a slot updates the description area with that item's rules text and unlock context.

## 3) Unlock Registration (Token Drop Driven)

Unlocking is not click-to-unlock. The system unlocks progression when matching objects are dropped onto or near the counter.

Supported unlock sources:

- Crypt Buff token drops (exact name match)
- Achievement token drops (exact name match)
- Ticket token drops (exact name match)
- Brand token drops (each drop increases rank)
- Capture ticket drops (parsed from ticket name and/or GM notes)

When a valid unlock is detected, the dropped object is consumed and the corresponding profile entry is updated.

## 4) Reward Spawning

Clicking an unlocked slot spawns a reward token near the counter at a fixed local anchor relative to the object.

Spawn behavior:

- Standard rewards spawn as textured custom model tokens
- Special bags are used for Treasure Pirate, Sol Ring Ticket, and Arcane Signet Ticket
- Capture rewards spawn from saved capture payload data when available, preserving card/bag data

Locked items can be viewed but cannot be spawned.

## 5) Persistence and Profile Sync

The counter persists progression in two layers:

- Local save state on the object (onSave/onLoad)
- Remote sync to the configured Google Apps Script endpoint

Profile identity is tied to a player key (preferably Steam ID based) once the object is claimed.

Sync behavior includes:

- Debounced updates after changes
- Minimum sync interval throttling
- Signature checks to skip unchanged payloads
- Retry/queue behavior on failures
- Initial fetch of server state when a keyed profile is loaded

## 6) Data Model Notes

- Crypt Buffs, Achievements, and Tickets are generally binary unlocks (count > 0 means unlocked)
- Brands are repeatable and store rank via count
- Captures store name, image URL, and optional compact bag/card payload for faithful respawn
- Unlock timestamps are tracked per item for audit/history use

## Operational Summary

In practice, the Essence Counter acts as a player's permanent progression ledger plus reward dispenser:

- Tracks and edits Essence
- Registers unlock proof via dropped progression tokens
- Displays progression status across all permanent categories
- Spawns unlocked rewards on demand
- Saves and syncs profile data across sessions
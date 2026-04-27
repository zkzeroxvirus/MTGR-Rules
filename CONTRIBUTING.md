# Contributing to MTG Roguelike Rules

Thanks for helping improve the game! This document explains how the dev team submits and tracks changes to the rules.

---

## How to Submit a Change Request

All changes go through **GitHub Issues**. We have templates for the most common request types — pick the one that fits:

| Request Type | Use When |
| :--- | :--- |
| [Rule Change Request](.github/ISSUE_TEMPLATE/rule-change-request.md) | Modifying existing rules, wording, or numbers |
| [New Content Proposal](.github/ISSUE_TEMPLATE/new-content-proposal.md) | Proposing a new encounter type, affix, doom card, etc. |
| [Bug / Rules Conflict Report](.github/ISSUE_TEMPLATE/bug-report.md) | Two rules that contradict each other, or a rule that breaks gameplay |
| [Balance Concern](.github/ISSUE_TEMPLATE/balance-concern.md) | Something feels too strong, too weak, or creates non-games |

> **Don't see a template that fits?** Open a blank issue and describe the situation clearly.

---

## Before You Open an Issue

1. **Search existing issues** to avoid duplicates.
2. **Read the relevant doc** — the answer might already be there.
3. **Play it out first** if possible. Anecdotal experience is useful context.

---

## Writing a Good Issue

- **Be specific.** Reference the exact document and section (e.g., `AFFIXES-V1.0.md > Tier 3 > Cascade`).
- **Explain the problem, then the proposed fix.** Don't just say "this feels wrong."
- **Include examples.** Describe a real or hypothetical game state where the rule causes an issue.

---

## Labels

Issues will be tagged with labels to help triage:

| Label | Meaning |
| :--- | :--- |
| `rule-change` | Modifying existing rule text |
| `new-content` | Adding new cards, systems, or encounter types |
| `bug` | Contradictory or broken rules |
| `balance` | Power level concerns |
| `experimental` | Changes to systems marked Experimental |
| `needs-discussion` | Blocked on a design decision |
| `approved` | Accepted, pending implementation |
| `wontfix` | Reviewed and declined |

---

## Workflow

```
Issue Opened → Discussed → Approved / Declined → Doc Updated → Issue Closed
```

Once a change is approved, the relevant `.md` file is updated directly in the repo. The issue is closed when the doc reflects the final ruling.

---

## Versioning

- Minor clarifications and wording fixes do not increment the version number.
- Mechanical changes increment the **patch** number (e.g., V1.0 → V1.1).
- Major system overhauls increment the **major** version (e.g., V1.x → V2.0).

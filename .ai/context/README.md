# AI context — index

Files in this directory are the project's machine-readable knowledge
base. They are written for an AI agent (or a future-you) to load in
order and pick up cold.

## Read order

| # | File                | What it covers                                              |
|---|---------------------|-------------------------------------------------------------|
| 1 | `project.md`        | What we're building, who it's for, status, open decisions   |
| 2 | `stack.md`          | Tech stack — locked choices and TBDs with recommendations   |
| 3 | `architecture.md`   | File layout, content model, routing, build/deploy           |
| 4 | `design-system.md`  | Applying the Atlas design language in React                 |

## Sibling docs

- `../../BRANDING.md` — full Atlas design system spec (visual source of truth)
- `../prompts/` — reusable agent prompts (currently empty)

## Slash commands

Project-scoped slash commands live in `../../.claude/commands/`. They
are the preferred way to start a build task because they enforce the
context-loading discipline.

| Command       | Purpose                                                                |
|---------------|------------------------------------------------------------------------|
| `/scaffold`   | One-shot bootstrap — wire tokens, fonts, app shell (run once)          |
| `/component`  | Scaffold an Atlas React component                                      |
| `/layout`     | Scaffold a page section or full page route                             |

All commands force the agent to read BRANDING.md and the relevant
context files before writing anything. Prefer them over ad-hoc requests.

## Conventions for editing these files

- **Keep them short.** Each file should fit on one screen if possible. Tables and bullet lists over prose.
- **Mark open decisions** as `**TBD**` with the trade-off summarized in one line. When a decision is closed, remove the TBD and add a one-line "why" if the choice isn't obvious.
- **Update on the same commit as the change** they describe. Stale context is worse than no context.
- **One source per fact.** If something belongs in `BRANDING.md`, link to it; do not duplicate.

# chris.edcs.app

Personal portfolio for **Chris Rowles** — lead developer with 12+ years
building and maintaining web applications across a wide range of
business sectors.

The site is dressed in the **Atlas** design language: paper-and-ink
editorial with coral / mustard / olive accents, Inter Tight headlines,
italic Playfair Display for accent phrases and Nº numbers, JetBrains
Mono for labels and code. Restrained motion, no neon, no glass.

## For AI agents — read order

1. `.ai/context/README.md` — context index, conventions for editing
2. `.ai/context/project.md` — what we're building, audience, status
3. `.ai/context/stack.md` — tech stack (React + mostly static)
4. `.ai/context/architecture.md` — file layout, content model, routing
5. `.ai/context/design-system.md` — applying Atlas in React
6. `BRANDING.md` — full Atlas spec (visual source of truth)

## Slash commands (use these to start build tasks)

| Command       | Purpose                                                                |
|---------------|------------------------------------------------------------------------|
| `/scaffold`   | One-shot bootstrap — wire tokens, fonts, app shell (run once)          |
| `/component`  | Scaffold an Atlas React component                                      |
| `/layout`     | Scaffold a page section or full page route                             |

All commands force the context-loading discipline above. Prefer them
over ad-hoc "build me X" requests.

## Status

Vite + React + TypeScript on pnpm. Atlas design language applied across
nav, footer, hero, and the five long-scroll sections. Content is real
where it can be (Vigil project + bio facts) and clearly placeholder
where it can't (other project entries, some experience details). See
`.ai/context/stack.md` for any remaining open decisions.

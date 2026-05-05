---
description: Scaffold an Atlas React component aligned with BRANDING.md
argument-hint: <ComponentName> [optional one-line description]
---

You are creating a new React component for the Atlas-styled portfolio
site. **Follow this workflow exactly. Do not skip the reading phase.**

## 1. Read context (in this order, before doing anything else)

1. `CLAUDE.md` — repo entry point
2. `.ai/context/project.md` — what this site is and who it's for
3. `.ai/context/architecture.md` — file placement conventions
4. `.ai/context/design-system.md` — React-specific Atlas patterns: token usage, useReveal hook, no animation libs, no inline styles, no icon libs, retired components
5. `BRANDING.md` — Atlas spec. Identify which §2 component the request matches, or note this is a derivative (and which existing primitive it derives from).
6. Glance at `src/components/` to mirror the shape of existing Atlas components (folder layout, prop conventions, CSS module style).

## 2. Confirm with the user before building

- Confirm the component name and which Atlas primitive it maps to (or that this is a derivative — and what it derives from).
- Confirm variant props if applicable (e.g. `<Button variant="primary" | "default">`).
- Confirm any state or interaction behavior.
- **If the request asks for something Vigil-era (a tone tile, a glass card, a holographic frame), push back** — those primitives are gone in Atlas. Ask whether the user wants a closer Atlas-shaped equivalent.

If the request is unambiguous and Atlas-coherent, you can proceed without asking — but say what you assumed in one line.

## 3. Build it

- Place at `src/components/<ComponentName>/`:
  - `<ComponentName>.tsx`
  - `<ComponentName>.module.css`
  - `index.ts` (re-export)
- TypeScript. Functional component. Props interface explicit and exported.
- CSS Modules. **No inline `style={}` for visual values.** Tokens via `var(--...)` from `src/styles/tokens.css`.
- No animation libraries (gsap is uninstalled). Use the `useReveal` hook + `[data-reveal]` CSS pattern for scroll motion. CSS transitions for hover.
- No icon libraries. Inline outline SVGs only when truly needed.
- Use the Atlas typography tokens directly (`var(--sans)` / `var(--body)` / `var(--serif)` / `var(--mono)`). Italic Playfair coral is reserved — use only for accent phrases, Nº numbers, or the brand mark.
- Do not over-engineer: no premature variants, no abstractions for one caller, no scaffolding "for future flexibility". Three similar lines beat a premature abstraction.

## 4. Verify before reporting done

- TypeScript compiles cleanly (`cd /home/chris/chris.edcs.app && pnpm tsc --noEmit`).
- Component renders without errors.
- Visual matches the brand (paper background, ink text, restrained accents).
- No new dependencies added without explicit user approval.

Argument from user: **$ARGUMENTS**

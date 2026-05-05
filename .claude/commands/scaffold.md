---
description: One-shot bootstrap — wire Atlas tokens, fonts, and the app shell into the Vite scaffold
argument-hint: (no arguments)
---

You are bootstrapping the Atlas design system into a freshly-scaffolded
Vite + React + TS app. **This command is run once.** If
`src/styles/tokens.css` already exists with Atlas tokens, stop and ask
the user before doing anything — you may overwrite their work.

## 1. Read context (in this order, before doing anything else)

1. `CLAUDE.md`
2. `.ai/context/architecture.md` — file layout you're materializing
3. `.ai/context/design-system.md` — React-specific Atlas bridge: tokens stay in CSS, useReveal hook for motion, no JS animation libs
4. `BRANDING.md` §1 (every token), §1.5 (font stacks), §1.9 (reveal-on-scroll motion), §3 (voice), §5 (typography rules)
5. `src/` — see what Vite scaffolded so you know what to clean up

## 2. Confirm with the user before building (one short prompt)

State the plan in 4–6 lines:

- Files to create (paths)
- Files to modify (paths + what changes)
- Files to delete (the Vite demo cruft — `App.css`, the React/Vite logo assets, the spinning-logo demo in `App.tsx`)
- Fonts: Google Fonts `<link>` tags in `index.html` for Inter (400–700), Inter Tight (500–700), Playfair Display (italic 500–600), JetBrains Mono (400–500)
- Anything you're unsure about (e.g., favicon — Atlas uses a coral italic "C" SVG)

Get a yes before writing.

## 3. Build it

### Files to create

- **`src/styles/tokens.css`** — every Atlas token from BRANDING.md §1 as `:root` custom properties. Surfaces (paper / paper-warm / paper-dark / bone), text (ink / ink-soft / ink-mute / ink-faint), lines (line-faint / line-soft / line / line-strong), accents (coral / coral-soft / mustard / olive), type families (--sans / --body / --serif / --mono), type scale (--fs-micro through --fs-hero), radii, shadow (--shadow / --shadow-lift).
- **`src/styles/global.css`** — body uses `--body` (Inter) on `--paper` background with `--ink` text, headings use `--sans` (Inter Tight), code uses `--mono` (JetBrains Mono). Includes the `[data-reveal]` reveal-on-scroll CSS and `[data-reveal-stagger] > [data-reveal]:nth-child(n)` rules for stagger delays. Global `@media (prefers-reduced-motion: reduce)` rule disables all reveal transitions.
- **`src/lib/useReveal.ts`** — `IntersectionObserver` hook that returns a ref. On viewport intersect, sets `data-revealed="true"` on the target AND on every nested `[data-reveal]` child (the parent triggers the staggered reveal of children).
- **`public/favicon.svg`** — coral italic Playfair "C" on a paper-tinted square (matches the Nav and Footer brand mark).

### Files to modify

- **`index.html`** — add Google Fonts `<link>` tags (preconnect + the combined family stylesheet), set `<meta name="theme-color" content="#efe7d2">`, set the page title to "Chris Rowles — Lead Developer" (or confirm with user). Update the favicon `<link>` to `/favicon.svg`.
- **`src/main.tsx`** — import `./styles/tokens.css` and `./styles/global.css` in that order, before `App`.
- **`src/App.tsx`** — replace the Vite demo content with the editorial shell: `<Nav links={navLinks} />`, `<main>{/* sections */}</main>`, `<Footer links={[...]} />`. (If Nav/Footer don't exist yet, leave a stub `<main />` and tell the user to run `/component Nav` and `/component Footer` next.)

### Files to delete

- `src/App.css` (the Vite demo styles)
- `src/assets/react.svg`, `src/assets/vite.svg`, any other Vite demo assets — only if nothing else references them
- `public/icons.svg` — if it's the Vite demo sprite

### Hard rules

- TypeScript strict; no `any`.
- Plain global CSS for `tokens.css` and `global.css` (these are app-wide). CSS Modules for components.
- No new npm dependencies. Atlas uses what's already installed plus Google Fonts.
- **No icon libraries, no animation libraries.** No gsap, no framer-motion, no devicon, no lucide.
- No inline `style={}` for visual values.

## 4. Verify before reporting done

- `cd /home/chris/chris.edcs.app && pnpm tsc --noEmit` passes
- `pnpm dev` starts cleanly
- Open the page and confirm:
  - Cream paper background (#efe7d2)
  - Ink-on-paper rendering
  - No console errors, no Vite demo content remaining
  - Fonts load (Network tab; Inter should render the body, Playfair italic ready for accents)
  - Coral italic "C" favicon in the tab
- Report what was created/modified/deleted in a short list

After this command, the next typical step is `/component` to build the
Atlas primitives, then `/layout` to assemble sections.

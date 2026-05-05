---
description: Scaffold an Atlas page section or page route
argument-hint: <SectionName> [hero|about|skills|experience|projects|contact|page]
---

You are creating a layout — either a page-level **section** (Hero,
About, Skills, etc.) that lives in a long-scroll page, or a full
**page route** — for the Atlas-styled portfolio site. **Follow this
workflow exactly. Do not skip the reading phase.**

## 1. Read context (in this order, before doing anything else)

1. `CLAUDE.md` — repo entry point
2. `.ai/context/project.md` — narrative, audience, voice
3. `.ai/context/architecture.md` — content model, file placement (`src/sections/` vs `src/pages/`), routing
4. `.ai/context/design-system.md` — Atlas in React: token usage, useReveal hook, retired components
5. `BRANDING.md` — Atlas spec. At minimum read §3 (voice), §5 (typography), §6 (spacing & layout), §7 (sections — adopted patterns).
6. `src/components/` and `src/sections/` — see what's already built. **Reuse, don't rebuild.**

## 2. Confirm with the user before building

- Confirm whether this is a **section** (lives in the long-scroll page) or a **page** (its own route). Default is section.
- Confirm what content it displays. If a content shape is defined in `.ai/context/architecture.md`, use it. If not, draft one and confirm.
- **Do not invent claims about Chris's experience, sectors, projects, or skills without his approval.** If real copy is needed, draft it once and ask. Voice: BRANDING.md §3 (plain, declarative, faintly poetic — "Software for the long haul.", not "Power up your monitoring journey").
- The italic Playfair coral accent phrase in the title is the visual signature — use it once per heading, not in every line.

## 3. Build it

- Section: `src/sections/<SectionName>/<SectionName>.tsx` + `.module.css` + `index.ts`
- Page: `src/pages/<SectionName>/<SectionName>.tsx` + `.module.css` + `index.ts` (only if multi-page routing has been agreed)
- Content lives in `src/content/<sectionname>.ts` — TS module, importable. **Don't hardcode content inside the component.**
- Use `<Section id index? eyebrow title titleAccent lede>` from `components/Section` — it owns the canonical opener (coral leading-dash + label + Nº NN + h2 with italic Playfair coral accent + lede). **Don't re-render that opener manually.**
- Pass `index={N}` for the section's ordinal — Section renders the Nº NN badge.
- Compose existing Atlas primitives from `src/components/` (`<PanelCard>`, `<Button>`, `<Chip>`, `<Pill>`, `<HeroEyebrow>`). If a needed primitive doesn't exist, **stop and run `/component` first** — do not build it inline.
- Apply BRANDING.md §6 paddings — Section is `7rem 0` vertical, wrap is `min(1180px, 92%)` centered. Cards use `<PanelBody>` for inner padding.
- Reveal-on-scroll: use the `useReveal` hook from `src/lib/useReveal.ts`. Attach the ref to a parent, add `data-reveal-stagger` on it, mark each child with `data-reveal`. CSS in `global.css` handles the transition + per-child stagger.
- CSS Modules. No inline `style={}` for visual values. Tokens via `var(--...)`.
- **Retired primitives** (do not import): `<Atmosphere>`, `<BrowserFrame>`, `<DevIcon>`, `<ToneTile>`, `<SectionHeader>`, anything from `lib/animations`, gsap.

## 4. Verify before reporting done

- TypeScript compiles cleanly (`cd /home/chris/chris.edcs.app && pnpm tsc --noEmit`).
- Page renders, no console errors, no layout shift on load.
- Content is real / approved (no placeholder lorem that ships).
- Spacing and typography match BRANDING.md §5–6.
- Reduced-motion: confirm reveals stop under `prefers-reduced-motion: reduce`.

Argument from user: **$ARGUMENTS**

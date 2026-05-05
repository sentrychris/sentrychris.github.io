# Design system — Atlas in React

The full spec lives in `../../BRANDING.md`. **Read it first.** This
file is the React-specific bridge: how Atlas tokens, recipes, and
components map into a React + TypeScript codebase. It does not
duplicate the spec — it only covers the shape decisions the spec
deliberately leaves open.

## Token mapping

Atlas tokens (BRANDING.md §1) live in `src/styles/tokens.css` as CSS
custom properties. Use them directly in CSS — do **not** wrap them in
JS constants.

```css
/* tokens.css */
:root {
  --paper:      #efe7d2;
  --ink:        #15140f;
  --coral:      #ed6f5c;
  --sans:       "Inter Tight", "Inter", system-ui, sans-serif;
  --serif:      "Playfair Display", serif;
  --mono:       "JetBrains Mono", monospace;
  /* …all of BRANDING.md §1 */
}
```

```css
/* PanelCard.module.css */
.panel {
  background: var(--bone);
  box-shadow: var(--shadow);
}
```

**Why no JS constants?** Tokens are visual data, not application
data. Keeping them in CSS means the design language can be tuned
without a React rebuild path being involved.

## Component recipes → React components

Each Atlas primitive is a single React component. Folder per
component with the `.tsx`, `.module.css`, and `index.ts`.

| BRANDING.md ref | React component  | Module                        |
|-----------------|------------------|-------------------------------|
| §2 Section      | `<Section>`      | `components/Section/`         |
| §2 Nav          | `<Nav>`          | `components/Nav/`             |
| §2 Footer       | `<Footer>`       | `components/Footer/`          |
| §2 PanelCard    | `<PanelCard>`    | `components/PanelCard/`       |
| §2 Button       | `<Button>`       | `components/Button/`          |
| §2 Chip         | `<Chip>`         | `components/Chip/`            |
| §2 Pill         | `<Pill>`         | `components/Pill/`            |
| §2 HeroEyebrow  | `<HeroEyebrow>`  | `components/HeroEyebrow/`     |

## Reveal-on-scroll

A single CSS-driven system, not GSAP.

- `useReveal()` from `lib/useReveal.ts` returns a ref. When the target
  enters the viewport, it sets `data-revealed="true"` on the target
  AND on every nested `[data-reveal]` child.
- CSS in `global.css` handles the transition + per-child stagger via
  `[data-reveal-stagger] > [data-reveal]:nth-child(n)` rules setting
  `--reveal-delay`.

```tsx
const ref = useReveal<HTMLDivElement>()

return (
  <div ref={ref} data-reveal-stagger>
    <h2 data-reveal>Section title</h2>
    <p  data-reveal>Lede.</p>
    <div data-reveal>Body.</div>
  </div>
)
```

No animation libraries. Reduced-motion is gated globally in
`global.css` (one rule disables all `[data-reveal]` transitions).

## Section component contract

`<Section>` is the long-scroll wrapper. Pass `index` for the Nº badge.

```tsx
<Section
  id="about"
  index={1}
  eyebrow="About"
  title="Software for the"
  titleAccent="long haul."
  lede="Twelve years…"
>
  {bodyContent}
</Section>
```

Section renders the canonical opener (coral leading-dash + label +
Nº NN + h2 with italic Playfair coral accent + lede) and applies its
own reveal. **Body content owns its own reveal** — wrap children with
`useReveal` + `[data-reveal-stagger]` + `[data-reveal]` if they need
staggered entry.

## Icons

Inline outline SVGs only when needed (Atlas uses far fewer icons than
a typical SaaS portfolio). **Don't add an icon library.** Don't
re-introduce brand-color tech logos in the editorial palette — they
clash with the restrained warmth.

## Typography

The "italic Playfair coral" accent is the brand signature. Three
acceptable uses:

1. The **accent phrase** inside an `<h1>` or `<h2>` (`<span class="accent">`)
2. **Nº NN** numbers in section eyebrows and project / experience cards
3. The **brand mark** — coral italic "C" in Nav and Footer

Anywhere else, stay in Inter Tight (sans). Italic serif overuse kills
the signature.

## What lives in CSS vs React

- **CSS:** every visual recipe — colors, shadows, layouts, transitions, hover states, paper backgrounds.
- **React:** structure, composition, content, conditional class application, the `useReveal` IntersectionObserver trigger.

If you find yourself reaching for an inline `style={{...}}` prop, ask
whether it belongs in a CSS module instead. The spec is CSS-shaped on
purpose; following that shape keeps tokens edit-in-place and
components diff-able.

## Retired components

These existed in the previous Vigil system and are **gone** in Atlas.
Don't reintroduce them:

- `<Atmosphere>` — the dark fixed-position glow layer
- `<BrowserFrame>` — cursor-tracked tilt + holographic sheen frame
- `<DevIcon>` + `tech-icons.ts` — colored brand-logo lookup for tech
- `<ToneTile>` — colored icon tile container
- `<SectionHeader>` — dashboard-style header with tone-tile + chip slot
- `gsap` + `lib/animations/*` — JS-driven scroll motion (replaced by CSS `[data-reveal]`)

# Atlas — Design Language Spec

> **Atlas** is the editorial design language used across Chris Rowles'
> projects. Paper-and-ink at night: a deep green-tinted near-black
> ground (the "paper") with pale-mint primary text (the "ink") and a
> medium-green hero accent. Serif-led headlines via italic Playfair
> Display, sans body via Inter, JetBrains Mono for labels and code.
> Restrained motion, generous whitespace, no glass, no glow.
>
> This document is the machine-readable spec: tokens first, recipes
> second, prose last. It is framework-agnostic — describes *what* the
> system is, not *how* a CSS framework expresses it.

---

## 0. Quick reference

**One-line identity:** *Printed editorial, set in serif italic, at night.*

**Three sensibilities** that mix to make the look:

| # | Sensibility   | What it contributes                                                                |
|---|---------------|------------------------------------------------------------------------------------|
| 1 | Editorial     | Serif italic accents, generous whitespace, manuscript rhythm, mixed case headers   |
| 2 | Manifest      | Plain declarative copy, numbered sections (Nº 01), coordinates as marginalia       |
| 3 | Quiet craft   | Soft drop shadows, hairline mint highlights, no neon, no glass, no frame chrome    |

**Hero accent:** medium green `#408a71`, used as a literal LED on labels, primary CTA fills, and the italic Playfair display phrase. **Substrate:** deep green-tinted near-black `#091413`. **Primary text:** warm pale ivory `#d8ddbe`.

**Six things that cannot be dropped** (the minimum-viable identity):

1. The **paper-and-ink at night** palette (deep green-tinted near-black ground, pale mint text, medium green accent)
2. The **type triumvirate** — Inter Tight (display) · Inter (body) · Playfair Display **italic only** (accents) · JetBrains Mono (labels)
3. The **accent leading-dash** on every section eyebrow (the "label" recipe)
4. The **italic Playfair accent phrase** on hero and section titles (used once per heading)
5. The **Nº NN** badge on each section (italic Playfair, faint ink)
6. **Restrained motion** — soft scroll-triggered fade + translate, gated under `prefers-reduced-motion`

---

## 1. Token reference (single source of truth)

All CSS custom properties live in `src/styles/tokens.css`. Component recipes reference them by name.

### 1.1 Surfaces (paper — dark forest)

| Token          | Hex       | Role                                                   |
|----------------|-----------|--------------------------------------------------------|
| `--paper`      | `#091413` | Page background — deep green-tinted near-black         |
| `--paper-warm` | `#0c1816` | Subtle lift on the paper                               |
| `--paper-dark` | `#050b0a` | Deeper than paper, used for recesses                   |
| `--bone`       | `#13211e` | Card background — slight elevation off the paper       |

### 1.2 Text (ink — warm pale ivory)

Ink hierarchy is currently collapsed — all four variants resolve to the
same value (`#d8ddbe`, a warm pale yellow-green) for a unified text
weight. Reintroduce the variants below the table if visual hierarchy
between primary/secondary/metadata text becomes important.

| Token         | Hex       | Use                              |
|---------------|-----------|----------------------------------|
| `--ink`       | `#d8ddbe` | Primary text                     |
| `--ink-soft`  | `#d8ddbe` | Body paragraphs (currently same) |
| `--ink-mute`  | `#d8ddbe` | Secondary metadata (same)        |
| `--ink-faint` | `#d8ddbe` | Faintest — Nº indices (same)     |

### 1.3 Lines (mint at low alpha — faint highlights, not dark recesses)

| Token            | Value                          | Use                            |
|------------------|--------------------------------|--------------------------------|
| `--line-faint`   | `rgba(176, 228, 204, 0.05)`    | Lightest hairline rule         |
| `--line-soft`    | `rgba(176, 228, 204, 0.08)`    | Subtle divider                 |
| `--line`         | `rgba(176, 228, 204, 0.16)`    | Default border                 |
| `--line-strong`  | `rgba(176, 228, 204, 0.28)`    | Pronounced border / accent     |

### 1.4 Accents (green family)

Three for the green family, plus a single warning-yellow held back for status. No saturated rainbows.

| Token             | Hex       | Personality                                                       |
|-------------------|-----------|-------------------------------------------------------------------|
| `--accent`        | `#408a71` | **Hero accent.** Labels, italic Playfair phrases, primary CTA     |
| `--accent-soft`   | `#285a48` | Deeper green for soft fills, hover states                         |
| `--accent-bright` | `#b0e4cc` | Mint highlight (alias of `--ink` — exposed for clarity)           |
| `--mustard`       | `#d4a857` | Warning / caution — held back, only for status semantics          |
| `--olive`         | `#408a71` | OK / live / success — same value as `--accent`                    |

> **Note:** The legacy alias `--coral` resolves to `--accent` so older
> CSS keeps rendering. New code should reference `--accent` directly.

### 1.5 Type families

| Variable  | Stack                                                                          | Use                                              |
|-----------|--------------------------------------------------------------------------------|--------------------------------------------------|
| `--sans`  | `Inter Tight`, `Inter`, system-ui                                              | Headings (h1–h4), buttons, labels                |
| `--body`  | `Inter`, system-ui                                                             | Body paragraphs                                  |
| `--serif` | `Playfair Display`, `Times New Roman`, serif                                   | **Italic only.** Accent phrases + Nº numbers     |
| `--mono`  | `JetBrains Mono`, `SF Mono`, Menlo, monospace                                  | Eyebrow labels, coordinates, code, Nº indices    |

### 1.6 Type scale

| Token         | Size      | Use                                       |
|---------------|-----------|-------------------------------------------|
| `--fs-micro`  | 11 px     | Eyebrows / labels                         |
| `--fs-caption`| 13 px     | Small captions                            |
| `--fs-body`   | 16 px     | Body text                                 |
| `--fs-heading`| 22 px     | Card / panel titles                       |
| `--fs-display`| 52 px     | Section h2 base (scales fluidly)          |
| `--fs-hero`   | 78 px     | Hero h1 base (scales fluidly)             |

**Hero h1:** `clamp(44px, 5vw, 78px)`, line-height 1, weight 700 (Inter Tight).
**Section h2:** `clamp(40px, 4.6vw, 66px)`, line-height 1.05, weight 700.

### 1.7 Radii

| Token       | Value | Use                              |
|-------------|-------|----------------------------------|
| `--r-sm`    | 6 px  | Tags, chips, small inputs        |
| `--r-md`    | 12 px | Inputs, small images             |
| `--r-lg`    | 18 px | Cards (`--r-panel` alias = 18 px) |
| `--r-pill`  | 999 px| Buttons, eyebrow pills           |

### 1.8 Shadows

Two only. Soft, low-saturation. No neon rims.

```css
--shadow:      0 30px 60px -30px rgba(21, 20, 15, 0.18);  /* default card / panel */
--shadow-lift: 0 24px 48px -24px rgba(21, 20, 15, 0.22);  /* hover lift */
```

### 1.9 Reveal-on-scroll motion

A CSS-only system driven by `data-revealed` attribute. JS hook (`useReveal`) toggles the attribute when a parent element enters the viewport, and CSS handles transitions + per-child stagger delays.

```css
[data-reveal] {
  opacity: 0;
  translate: 0 28px;
  transition:
    opacity   0.9s cubic-bezier(.22, 1, .36, 1) var(--reveal-delay, 0ms),
    translate 0.9s cubic-bezier(.22, 1, .36, 1) var(--reveal-delay, 0ms);
}
[data-reveal][data-revealed="true"] {
  opacity: 1;
  translate: 0 0;
}
```

Stagger via `[data-reveal-stagger]` on parent + `:nth-child(n)` rules in `global.css` setting `--reveal-delay`. All motion gated by the global `prefers-reduced-motion: reduce` rule.

---

## 2. Component index

Every Atlas primitive. Each lives at `src/components/<Name>/`.

| Component       | Purpose                                                       |
|-----------------|---------------------------------------------------------------|
| `<Section>`     | Long-scroll wrapper. Renders the canonical opener (label + h2 + lede), accepts `index` for the Nº badge. |
| `<Nav>`         | Sticky top nav with accent italic-C brand mark + scroll-spy + densify-on-scroll. |
| `<Footer>`      | Closing chrome — same brand mark + meta links.                |
| `<PanelCard>`   | Bone background, soft shadow, subtle inset rule. With `<PanelBody>` for body padding. |
| `<Button>`      | Two variants: `primary` (accent fill) and `default` (ink-bordered ghost). Pill-shaped. |
| `<Chip>`        | Small mono caps tag. Variants: `live`, `idle`, `crit`, `info`, `neutral`. |
| `<Pill>`        | Larger than a chip. Mono, ink-bordered. Used sparingly.       |
| `<HeroEyebrow>` | The label-with-dash recipe (accent mono caps with leading 18px dash). |

---

## 3. Voice

Five rules.

- **Plain, declarative, technical, faintly poetic.** Headers can rhyme with manifest copy. Body text doesn't.
- **Numbers earn their place.** No "blazingly fast" — give the number or skip the claim.
- **No exclamation marks. No emoji.**
- **Short paragraphs.** The body column is editorial — paragraph count matters more than paragraph length.
- **Operator-friendly.** Copy assumes a reader who reads documentation.

---

## 4. Color rules

- **Three accents — that's the whole palette beyond ink.** Coral is hero. Mustard is caution. Olive is OK. Don't introduce a fourth without amending this spec.
- **Coral is the LED.** It appears at full saturation only on labels, italic accent phrases, the primary CTA fill, and hover states. Soft tints (8–12 % background, 25 % border) are allowed for ambient surfaces.
- **No gradients on chrome.** The brand is solid colors. The hero accent text is a single color in italic Playfair, not a gradient.
- **No pure black, no pure white.** Closest neutrals are `--ink #15140f` and `--bone #f7f1de`.

---

## 5. Typography rules

### 5.1 Locked stacks

| Role       | Stack                                                       | Weights   |
|------------|-------------------------------------------------------------|-----------|
| Display/UI | Inter Tight → Inter → system-ui                             | 500–700   |
| Body       | Inter → system-ui                                           | 400–500   |
| Accent     | **Playfair Display, italic only**                           | 500–600   |
| Mono       | JetBrains Mono → SF Mono → Menlo → monospace                | 400–500   |

### 5.2 Italic Playfair — used three places only

1. **Accent phrase inside a heading** — `<span class="accent">long haul.</span>` rendered in accent (the visual signature)
2. **Nº numbers** — `Nº 01` in Section eyebrows, `Nº` markers in Projects/Experience cards
3. **Brand mark** — the accent italic "C" in Nav and Footer

Anywhere else, italic serif is wrong. Use sans italic if you really need italics elsewhere.

### 5.3 The label / eyebrow recipe

```css
font-family: Inter Tight;
font-size: 11px;
font-weight: 600;
letter-spacing: 0.22em;
text-transform: uppercase;
color: var(--accent);

/* + a leading 18px accent dash via :before */
::before { content: ""; width: 18px; height: 1px; background: var(--accent); }
```

### 5.4 The hero accent

```css
.accent {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: -0.005em;
}
```

Used **once per page** on the hero key phrase, plus once per Section title. No further repetition.

---

## 6. Spacing & layout

### 6.1 Wrap

`width: min(1180px, 92%)` centered. Universal.

### 6.2 Section vertical padding

`7rem 0` desktop. Generous — editorial whitespace is part of the brand.

### 6.3 Component padding cheatsheet

| Component         | Padding                  |
|-------------------|--------------------------|
| Section           | `7rem 0` vertical        |
| PanelBody         | `28px 26px 32px`         |
| Button            | `14px 22px`              |
| Chip              | `0.32rem 0.6rem`         |
| Pill              | `0.4rem 0.8rem`          |
| Nav inner         | `1.1rem 0`               |
| Footer            | `2.5rem 0 3rem`          |

### 6.4 Breakpoints

| Width   | What changes                                            |
|---------|---------------------------------------------------------|
| `≥920px`| Projects grid 2-up, Hero allows side-by-side layouts    |
| `≥720px`| About 2-col (prose / facts panel), Skills row layout    |
| `<720px`| Single-column collapse, smaller display type            |

---

## 7. Sections — adopted patterns

For full implementations see `src/sections/`. Key idioms:

| Section    | Idiom                                                                                  |
|------------|----------------------------------------------------------------------------------------|
| Hero       | Massive Inter Tight headline + italic Playfair accent accent phrase + Inter lede + accent primary CTA + ghost secondary + mono caps meta strip |
| About      | 2-col grid: prose left, sticky `<PanelCard>` facts panel right, `coordinates` rendered as mono caps marginalia inside the facts card |
| Skills     | "Specimen sheet" — each group is a row, italic Playfair accent group name on the left, items flowing right as mono caps separated by middots |
| Experience | Editorial timeline. Sticky `Nº NN` italic Playfair accent on the left, role + sectors + summary + numbered outcome bullets on the right. |
| Projects   | 2-up grid of "feature articles". Each card: italic Playfair `Nº NN` + optional badge, 3:2 cover image, title, summary, inline mono caps stack, action buttons. **No browser-frame chrome.** |
| Contact    | Centered single column. Accent `OPEN TO WORK` eyebrow, italic Playfair accent display email as a `mailto:` link, ghost buttons for secondary methods, mono caps display strip. |

---

## 8. Accessibility

- **Color contrast.** `--ink #15140f` on `--paper #efe7d2` clears WCAG AAA.
- **`prefers-reduced-motion`** — global rule in `global.css` disables all `[data-reveal]` transitions and clamps animations.
- **Decorative serif is `aria-hidden`** — Nº numbers, italic accent phrases that decorate (e.g. company names rendered in italic Playfair) need explicit `aria-hidden="true"` if they're not the canonical accessible text.
- **Focus rings.** Default browser outline acceptable; custom rings should use `--accent` at full opacity with `2px` offset.

---

## 9. Adapting the language to a new surface

Six things you cannot drop:

1. The **paper / ink** palette
2. The **type triumvirate** (Inter Tight / Inter / Playfair italic / JetBrains Mono)
3. The **accent leading-dash label** on eyebrows
4. The **italic Playfair accent** for accent phrases
5. The **Nº NN** badge on each section
6. **Restrained motion** with reduced-motion gating

Drop any of those and the brand becomes someone else's editorial system.

---

## 10. Glossary

| Term                | Meaning                                                                       |
|---------------------|-------------------------------------------------------------------------------|
| **Paper**           | Deep green-tinted near-black background (`--paper #091413`).                  |
| **Ink**             | Pale ivory text family (`--ink`, `--ink-soft`, `--ink-mute`, `--ink-faint`).  |
| **Accent**          | Hero accent (`--accent #408a71`). Used as an LED. Legacy `--coral` alias resolves here. |
| **Label / Eyebrow** | The accent mono caps with leading 18px dash above each section.                |
| **Nº badge**        | Italic Playfair accent number marking each section (Nº 01, Nº 02 …).           |
| **Specimen sheet**  | Skills section's row-based layout — italic group names, mono caps items.      |
| **Feature article** | Projects card layout — Nº + image + title + summary + stack + buttons.        |

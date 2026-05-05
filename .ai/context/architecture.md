# Architecture

## File layout

```
chris.edcs.app/
├─ BRANDING.md              # Atlas design system spec
├─ CLAUDE.md                # AI entry point
├─ .ai/
│  ├─ context/              # AI knowledge base (this directory)
│  └─ prompts/              # reusable agent prompts
├─ .claude/
│  └─ commands/             # /scaffold, /component, /layout
├─ public/                  # static assets — favicon.svg (coral italic C),
│                           # logo.svg (legacy Vigil mark, kept), me.png,
│                           # projects/*.png (project screenshots)
├─ src/
│  ├─ main.tsx              # React entry; imports tokens.css + global.css
│  ├─ App.tsx               # composes Nav + sections + Footer
│  ├─ styles/
│  │  ├─ tokens.css         # Atlas custom properties (BRANDING.md §1)
│  │  └─ global.css         # base typography + [data-reveal] pattern
│  ├─ components/           # Atlas primitives (Section, PanelCard, Button, Nav, Footer, Chip, Pill, HeroEyebrow)
│  ├─ sections/             # page sections (Hero, About, Skills, Experience, Projects, Contact)
│  ├─ content/              # site content as TS modules
│  └─ lib/
│     └─ useReveal.ts       # IntersectionObserver hook for [data-reveal]
└─ index.html               # Vite entry; loads Google Fonts + meta tags
```

## Content model

| Section     | Source                  | Shape                                                                   |
|-------------|-------------------------|-------------------------------------------------------------------------|
| Hero        | `content/hero.ts`       | `{ eyebrow, title, accent, lede, ctas[], meta[] }`                      |
| About       | `content/about.ts`      | `{ eyebrow, title, titleAccent, lede, paragraphs[], facts[], coordinates }` |
| Skills      | `content/skills.ts`     | `{ eyebrow, title, titleAccent, lede, groups[] { name, items[] } }`     |
| Experience  | `content/experience.ts` | `{ eyebrow, title, titleAccent, lede, entries[] { role, company?, period, sectors[], summary, points? } }` |
| Projects    | `content/projects.ts`   | `{ eyebrow, title, titleAccent, lede, projects[] { title, summary, url, image, alt, badge?, stack[], links[] } }` |
| Contact     | `content/contact.ts`    | `{ eyebrow, title, titleAccent, lede, email { user, domain }, methods[] }` |
| Nav         | `content/nav.ts`        | `NavLink[] { href, label, spy? }`                                       |

Each section component knows its own ordinal — passes `index={N}` to
`<Section>`, which renders the `Nº NN` badge. Hero is unnumbered.

## Routing

Single-page long scroll. Section IDs (`#about`, `#skills`,
`#experience`, `#work`, `#contact`, `#top`) drive the in-page nav.
No router library. Add per-project routes when there's enough content.

## Build & deploy

- `pnpm build` → `dist/`
- Deploy `dist/` to **Cloudflare Pages** (or Netlify / Vercel)
- DNS for `chris.edcs.app` — **TBD** confirm where the apex / subdomain points

## What does NOT live here

- No backend, no API, no `server/` directory
- No database, no persistence
- No user-generated content
- No secrets — env vars (if any) are build-time and prefixed `VITE_`

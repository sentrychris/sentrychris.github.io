# Stack

## Locked decisions

- **Framework:** Vite + React + TypeScript on pnpm.
- **Hosting model:** mostly-static — no backend, no database, no auth.
- **Design system:** Atlas (see `../../BRANDING.md`).
- **Styling:** Plain CSS with custom properties + CSS Modules per component.
- **Motion:** CSS `[data-reveal]` reveal-on-scroll (no JS animation libraries).
- **Fonts:** Google Fonts — Inter Tight, Inter, Playfair Display (italic), JetBrains Mono.
- **Routing:** Single page (no routing library yet — long scroll).

## Dependencies

Lean: `react`, `react-dom`. No animation library, no icon library, no
CSS framework. The brand promises lightweight; the dependency tree
should match.

## Open decisions (TBD — recommend before assuming)

| Decision    | Recommendation                                | Trade-off                                                  |
|-------------|-----------------------------------------------|------------------------------------------------------------|
| (alt) SSG   | Astro w/ React islands, or Next.js `output: 'export'` | Better SEO + smaller payload. More setup; revisit if rankings start to matter. |
| Routing     | React Router v7 if we go multi-page (per project, etc.) | Standard. Currently single-page so not needed. |
| Hosting     | **Cloudflare Pages** (or Netlify / Vercel)    | All free-tier. Cloudflare is fastest at the edge.          |
| Analytics   | None, or Plausible                            | Privacy-respecting if any.                                 |

## Build numbers (last measured)

- **JS:** ~66 KB gzipped
- **CSS:** ~5 KB gzipped
- **HTML:** <1 KB gzipped

If a future change pushes JS over 100 KB gzipped, ask whether the
addition is worth it.

## Default stack (assume this if a question comes up)

> **Vite + React + TypeScript + plain CSS + CSS Modules + pnpm**,
> Atlas tokens in `src/styles/tokens.css`. CSS-only motion via
> `[data-reveal]`. Deploy `dist/` to Cloudflare Pages.

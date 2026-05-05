import { useEffect, useRef } from 'react'
import styles from './Schematic.module.css'

/**
 * Schematic — ambient blueprint texture mounted once at the app root.
 *
 * Layered backdrops, all fixed-position behind everything,
 * pointer-events none. Each layer drifts at a different rate as the
 * user horizontally pages through the panels — classic parallax:
 *
 *   1. Grid (.parallaxGrid)         — fastest drift  (~15% of scrollLeft)
 *   2. SVG construction shapes      — slower drift   (~5% of scrollLeft)
 *   3. HTML corner ornaments        — anchored       (no drift)
 *
 * The SVG canvas spans 3× the viewport (viewBox 0 0 4800 1200) and
 * carries shapes scattered across the full width, so the slow drift
 * always reveals new geometry instead of the same content scrolling
 * off-screen.
 */
export function Schematic() {
  const ref = useRef<HTMLDivElement>(null)

  // Subtle parallax: as <main> scrolls horizontally between panels,
  // write the raw scroll distance to --schematic-x. The CSS applies
  // different multipliers per layer for a sense of depth.
  useEffect(() => {
    if (!window.matchMedia('(min-width: 921px)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const main = document.querySelector('main')
    const el = ref.current
    if (!main || !el) return

    let raf = 0
    const update = () => {
      el.style.setProperty('--schematic-x', `${main.scrollLeft}px`)
      raf = 0
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    main.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      main.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className={styles.schematic} aria-hidden="true">
      {/* Layer 1 — engineering paper grid (fastest drift). */}
      <div className={styles.parallaxGrid} />

      {/* Layer 2 — construction shapes spread across a 3× viewport
          canvas (slower drift). */}
      <svg
        className={styles.shapes}
        viewBox="0 0 4800 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* ─── Region A (0–1600) — the original blueprint ─── */}
        <circle cx="180"  cy="260" r="220" />
        <circle cx="1380" cy="820" r="340" />
        <circle cx="780"  cy="180" r="80"  strokeDasharray="3 6" />
        <circle cx="540"  cy="900" r="160" strokeDasharray="2 7" />
        <circle cx="1180" cy="240" r="60"  strokeDasharray="4 5" />

        <polygon className={styles.geo} points="0,1030 500,1030 0,600" />
        <polygon className={styles.geo} points="300,510 380,510 340,580" />
        <polygon
          className={styles.geo}
          points="990,720 955,781 885,781 850,720 885,659 955,659"
        />
        <rect className={styles.geo} x="800" y="360" width="180" height="80" />
        <line className={styles.geo} x1="1180" y1="180" x2="1180" y2="1100" />

        {/* ─── Region B (1600–3200) — middle constellation ─── */}
        <circle cx="2200" cy="600" r="200" />
        <circle cx="2820" cy="320" r="120" strokeDasharray="3 6" />
        <circle cx="2680" cy="980" r="90"  strokeDasharray="4 5" />
        <circle cx="3120" cy="650" r="55"  strokeDasharray="2 7" />

        <polygon
          className={styles.geo}
          points="2400,260 2480,260 2440,330"
        />
        <polygon
          className={styles.geo}
          points="3050,180 3170,400 2930,400"
        />
        <polygon
          className={styles.geo}
          points="2520,1080 2620,1080 2570,990"
        />
        {/* Hexagon */}
        <polygon
          className={styles.geo}
          points="2210,210 2175,271 2105,271 2070,210 2105,149 2175,149"
        />
        <rect className={styles.geo} x="2800" y="730" width="180" height="80" />
        <rect className={styles.geo} x="1880" y="900" width="120" height="60" />
        <line className={styles.geo} x1="1700" y1="500" x2="3120" y2="500" />
        <line className={styles.geo} x1="2400" y1="60"  x2="2400" y2="1140" />

        {/* ─── Region C (3200–4800) — right-edge geometry ─── */}
        <circle cx="3500" cy="780" r="260" />
        <circle cx="4480" cy="280" r="180" />
        <circle cx="4080" cy="680" r="80"  strokeDasharray="3 6" />
        <circle cx="3380" cy="220" r="65"  strokeDasharray="4 5" />
        <circle cx="3950" cy="1020" r="50" strokeDasharray="2 7" />

        <polygon
          className={styles.geo}
          points="3760,460 3680,580 3840,580"
        />
        <polygon
          className={styles.geo}
          points="4200,890 4350,1100 4050,1100"
        />
        <polygon
          className={styles.geo}
          points="4640,560 4720,560 4680,640"
        />
        {/* Hexagon */}
        <polygon
          className={styles.geo}
          points="3700,1000 3665,1061 3595,1061 3560,1000 3595,939 3665,939"
        />
        <rect className={styles.geo} x="3300" y="450" width="160" height="70" />
        <rect className={styles.geo} x="4250" y="450" width="200" height="60" />
        <line className={styles.geo} x1="3260" y1="160" x2="4760" y2="160" />
        <line className={styles.geo} x1="3700" y1="200" x2="3700" y2="1100" />
        <line className={styles.geo} x1="4480" y1="500" x2="4480" y2="1140" />

        {/* ─── Crosshair plus-marks at the centres of every big circle ─── */}
        <g className={styles.cross}>
          <path d="M 180 248 v 24 M 168 260 h 24" />
          <path d="M 1380 808 v 24 M 1368 820 h 24" />
          <path d="M 540 888 v 24 M 528 900 h 24" />
          <path d="M 2200 588 v 24 M 2188 600 h 24" />
          <path d="M 3500 768 v 24 M 3488 780 h 24" />
          <path d="M 4480 268 v 24 M 4468 280 h 24" />
        </g>

        {/* ─── Long compass-arc sweep — extended to span the canvas ─── */}
        <path
          className={styles.sweep}
          d="M -100 200 Q 1200 1200 2400 200 T 4900 200"
          strokeDasharray="2 10"
        />

        {/* ─── Ruler ticks along the top edge of every region ─── */}
        <g className={styles.ruler}>
          {Array.from({ length: 58 }, (_, i) => {
            const x = (i + 1) * 80
            const isMajor = (i + 1) % 3 === 0
            return (
              <line
                key={x}
                x1={x}
                y1={0}
                x2={x}
                y2={isMajor ? 14 : 8}
              />
            )
          })}
        </g>

        {/* ─── Datum plus-marks scattered across the canvas ─── */}
        <g className={styles.datum}>
          <path d="M 480 480 v 10 M 475 485 h 10" />
          <path d="M 1120 640 v 10 M 1115 645 h 10" />
          <path d="M 320 720 v 10 M 315 725 h 10" />
          <path d="M 960 960 v 10 M 955 965 h 10" />
          <path d="M 1280 480 v 10 M 1275 485 h 10" />
          <path d="M 720 320 v 10 M 715 325 h 10" />
          <path d="M 1920 360 v 10 M 1915 365 h 10" />
          <path d="M 2640 720 v 10 M 2635 725 h 10" />
          <path d="M 3000 380 v 10 M 2995 385 h 10" />
          <path d="M 3440 1020 v 10 M 3435 1025 h 10" />
          <path d="M 3920 380 v 10 M 3915 385 h 10" />
          <path d="M 4320 760 v 10 M 4315 765 h 10" />
          <path d="M 4640 1000 v 10 M 4635 1005 h 10" />
        </g>

        {/* ─── Dimension annotations near the larger circles ─── */}
        <g className={styles.annotations}>
          <text x="950"  y="466"  textAnchor="middle">Ø.220</text>
          <text x="1380" y="448"  textAnchor="middle">Ø.340</text>
          <text x="190"  y="515"  textAnchor="middle">Ø.160</text>
          <text x="300"  y="830"  textAnchor="middle">R.080</text>
          <text x="2200" y="380"  textAnchor="middle">Ø.200</text>
          <text x="2820" y="180"  textAnchor="middle">R.120</text>
          <text x="3500" y="500"  textAnchor="middle">Ø.260</text>
          <text x="4480" y="80"   textAnchor="middle">Ø.180</text>
        </g>
      </svg>

      {/* ─── Layer 3 — corner ornaments (anchored, no drift) ─── */}
      <div className={styles.compass}>
        <svg viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="22" />
          <line x1="30" y1="8"  x2="30" y2="52" />
          <line x1="8"  y1="30" x2="52" y2="30" />
          <path
            className={styles.compassNeedle}
            d="M 30 8 L 25 26 L 30 22 L 35 26 Z"
          />
        </svg>
        <span className={styles.compassLabel}>N</span>
      </div>

      <div className={styles.coords}>51.5074° N · 0.1278° W</div>

      <div className={styles.ref}>ATLAS · ED.01 · 2026</div>
    </div>
  )
}

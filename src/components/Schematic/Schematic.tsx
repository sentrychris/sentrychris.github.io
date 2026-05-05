import styles from './Schematic.module.css'

/**
 * Schematic — ambient blueprint texture mounted once at the app root.
 *
 * Three layered backdrops, all fixed-position behind everything,
 * pointer-events none:
 *
 *   1. CSS gradient grid (consistent pixel cell size at any viewport)
 *   2. Inline SVG with construction circles, crosshair markers, ruler
 *      ticks along the top edge, scattered datum + symbols, dimension
 *      annotations near the larger circles, and a long compass-arc sweep
 *   3. HTML corner ornaments — a small compass rose top-right, an
 *      editorial coordinates strip bottom-right (these live as HTML so
 *      they stick to the viewport corners even when the SVG viewBox
 *      gets cropped on non-4:3 displays)
 *
 * Everything renders in mint at very low alpha — texture, not noise.
 */
export function Schematic() {
  return (
    <div className={styles.schematic} aria-hidden="true">
      <svg
        className={styles.shapes}
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* ─── Construction circles — solid + dashed centerlines. All
             rendered statically; scroll-drawn connectors between them
             are rendered separately below. ─────────────────────── */}
        <circle cx="180"  cy="260" r="220" />
        <circle cx="1380" cy="820" r="340" />
        <circle cx="780"  cy="180" r="80"  strokeDasharray="3 6" />
        <circle cx="540"  cy="900" r="160" strokeDasharray="2 7" />
        <circle cx="1180" cy="240" r="60"  strokeDasharray="4 5" />

        {/* ─── Triangles — static geometric flair. ─── */}
        <polygon className={styles.geo} points="0,1030 500,1030 0,600" />
        <polygon className={styles.geo} points="300,510 380,510 340,580" />

        {/* ─── Hexagon — static. ─── */}
        <polygon
          className={styles.geo}
          points="990,720 955,781 885,781 850,720 885,659 955,659"
        />

        {/* ─── Plot rectangle — static. ─── */}
        <rect className={styles.geo} x="800" y="360" width="180" height="80" />

        {/* ─── Construction axes — static crossing lines. ─── */}
        {/* <line className={styles.geo} x1="50" y1="540" x2="980" y2="540" /> */}
        <line className={styles.geo} x1="1180" y1="180" x2="1180" y2="1100" />

        {/* ─── Crosshair plus-marks at the centers of larger circles ─── */}
        <g className={styles.cross}>
          <path d="M 180 248 v 24 M 168 260 h 24" />
          <path d="M 1380 808 v 24 M 1368 820 h 24" />
          <path d="M 540 888 v 24 M 528 900 h 24" />
        </g>

        {/* ─── Long faint compass-arc sweep ─── */}
        <path
          className={styles.sweep}
          d="M -100 200 Q 800 1100 1700 200"
          strokeDasharray="2 10"
        />

        {/* ─── Ruler ticks along the top edge ─── */}
        <g className={styles.ruler}>
          {Array.from({ length: 19 }, (_, i) => {
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

        {/* ─── Datum plus-marks scattered at grid intersections ─── */}
        <g className={styles.datum}>
          <path d="M 480 480 v 10 M 475 485 h 10" />
          <path d="M 1120 640 v 10 M 1115 645 h 10" />
          <path d="M 320 720 v 10 M 315 725 h 10" />
          <path d="M 960 960 v 10 M 955 965 h 10" />
          <path d="M 1280 480 v 10 M 1275 485 h 10" />
          <path d="M 720 320 v 10 M 715 325 h 10" />
        </g>

        {/* ─── Dimension annotations ─── */}
        <g className={styles.annotations}>
          <text x="950"  y="466"   textAnchor="middle">Ø.220</text>
          <text x="1380" y="448"  textAnchor="middle">Ø.340</text>
          <text x="190"  y="515" textAnchor="middle">Ø.160</text>
          <text x="300"  y="830"   textAnchor="middle">R.080</text>
        </g>
      </svg>

      {/* ─── Corner ornament — compass rose, top-right ─── */}
      <div className={styles.compass}>
        <svg viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="22" />
          <line x1="30" y1="8"  x2="30" y2="52" />
          <line x1="8"  y1="30" x2="52" y2="30" />
          {/* Filled north arrow */}
          <path
            className={styles.compassNeedle}
            d="M 30 8 L 25 26 L 30 22 L 35 26 Z"
          />
        </svg>
        <span className={styles.compassLabel}>N</span>
      </div>

      {/* ─── Corner ornament — coordinates strip, bottom-right ─── */}
      <div className={styles.coords}>
        51.5074° N · 0.1278° W
      </div>

      {/* ─── Corner ornament — drawing reference, bottom-left ─── */}
      <div className={styles.ref}>
        ATLAS · ED.01 · 2026
      </div>
    </div>
  )
}

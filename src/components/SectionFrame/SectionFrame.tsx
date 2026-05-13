import { usePathTrace } from '../../lib/usePathTrace'
import styles from './SectionFrame.module.css'

interface SectionFrameProps {
  /** Two-digit section index for the corner pip (e.g. "02"). */
  pip?: string
  /** Mono caps marginalia for the corner — e.g. coordinates. */
  marginalia?: string
}

/**
 * SectionFrame — decorative overlay that turns any section into a
 * drawing-sheet panel. Renders four corner L-brackets, a couple of
 * extending divider hairlines, and a small mono marginalia pip in
 * the top-right. Every stroke draws in via stroke-dashoffset the
 * first time the section enters the viewport (usePathTrace).
 *
 * Absolutely positioned, pointer-events none — drop it as the first
 * child of any section's wrap.
 */
export function SectionFrame({ pip, marginalia }: SectionFrameProps) {
  const ref = usePathTrace<SVGSVGElement>({ duration: 1100, stagger: 70 })

  return (
    <div className={styles.frame} aria-hidden="true">
      <svg
        ref={ref}
        className={styles.svg}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* ─── Four L-shaped corner brackets ─── */}
        {/* Top-left */}
        <path data-trace d="M 0.4 5 L 0.4 0.4 L 5 0.4" className={styles.corner} />
        {/* Top-right */}
        <path data-trace d="M 95 0.4 L 99.6 0.4 L 99.6 5" className={styles.corner} />
        {/* Bottom-left */}
        <path data-trace d="M 0.4 95 L 0.4 99.6 L 5 99.6" className={styles.corner} />
        {/* Bottom-right */}
        <path data-trace d="M 95 99.6 L 99.6 99.6 L 99.6 95" className={styles.corner} />

        {/* ─── Horizontal extending divider rules ─── */}
        <line data-trace x1="0.4" y1="14" x2="38" y2="14" className={styles.rule} />
        <line data-trace x1="62" y1="14" x2="99.6" y2="14" className={styles.rule} />

        {/* ─── Vertical hairline on the left "spine" ─── */}
        <line data-trace x1="0.4" y1="20" x2="0.4" y2="80" className={styles.spine} />
        <line data-trace x1="99.6" y1="20" x2="99.6" y2="80" className={styles.spine} />
      </svg>

      {/* Mono marginalia — printed labels, no path-trace required. */}
      {pip && (
        <span className={styles.pip}>
          <span className={styles.pipPrefix}>SHEET</span>
          <span className={styles.pipNumeral}>{pip}</span>
        </span>
      )}
      {marginalia && <span className={styles.marg}>{marginalia}</span>}
    </div>
  )
}

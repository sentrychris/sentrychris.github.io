import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import styles from './CalloutPanel.module.css'

interface CalloutPanelProps {
  /** Small mono caps ID printed in the top-left. e.g. "FIG. 01". */
  id?: string
  /** Right-side caption — italic Playfair numeral. e.g. "Nº 02". */
  numeral?: string
  /** Mono caps marginalia, printed bottom-left. e.g. "DRAWN 2026 · ROWLES". */
  marginalia?: string
  /** Small accent dimension marker at top-right. e.g. "Ø.220". */
  dimension?: string
  /** Variant — `thick` gives a stronger backing for hero-level text;
   *  `inline` is lighter for nested copy. */
  variant?: 'thick' | 'default' | 'inline'
  /** Optional class on the outer panel. */
  className?: string
  /** Optional class on the inner content wrap (for layout overrides). */
  bodyClassName?: string
  children: ReactNode
}

/**
 * CalloutPanel — translucent paper-coloured "drawing sheet" panel.
 *
 * Used to make text legible against the busy schematic/Three.js
 * backdrop while keeping the schematic aesthetic. Each panel renders:
 *
 *   - A backdrop-blurred paper backing (variant-dependent opacity)
 *   - Four hairline corner brackets that trace in via dashoffset
 *   - Optional top-left mono ID, top-right italic Playfair numeral,
 *     bottom-left marginalia, and a top-right accent dimension chip
 *   - The content (children) renders above the backing
 *
 * Plays a tiny entry timeline the first time it enters the viewport:
 * brackets draw, marginalia fade up, backing fade-in.
 */
export function CalloutPanel({
  id,
  numeral,
  marginalia,
  dimension,
  variant = 'default',
  className,
  bodyClassName,
  children,
}: CalloutPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const brackets = Array.from(panel.querySelectorAll<SVGPathElement>(`.${styles.bracket} path`))
    for (const b of brackets) {
      let len = 0
      try { len = b.getTotalLength() } catch { len = 0 }
      if (len) {
        b.style.strokeDasharray = `${len}`
        b.style.strokeDashoffset = reduce ? '0' : `${len}`
      }
    }

    if (reduce) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          gsap.to(brackets, {
            strokeDashoffset: 0,
            duration: 0.9,
            stagger: 0.07,
            ease: 'power2.out',
          })
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(panel)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={panelRef}
      className={[
        styles.panel,
        styles[variant],
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className={styles.backing} aria-hidden="true" />

      <svg
        className={styles.bracket}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0 6 L 0 0 L 6 0" />
        <path d="M 94 0 L 100 0 L 100 6" />
        <path d="M 0 94 L 0 100 L 6 100" />
        <path d="M 94 100 L 100 100 L 100 94" />
      </svg>

      {(id || dimension) && (
        <div className={styles.headerStrip} aria-hidden="true">
          {id && <span className={styles.id}>{id}</span>}
          {dimension && <span className={styles.dim}>{dimension}</span>}
        </div>
      )}
      {numeral && (
        <span className={styles.numeral} aria-hidden="true">{numeral}</span>
      )}
      {marginalia && (
        <span className={styles.marg} aria-hidden="true">{marginalia}</span>
      )}

      <div className={[styles.body, bodyClassName].filter(Boolean).join(' ')}>
        {children}
      </div>
    </div>
  )
}

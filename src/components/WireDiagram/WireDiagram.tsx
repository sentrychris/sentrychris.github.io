import { useEffect, useRef } from 'react'
import { subscribeMotion } from '../../lib/motion'
import { navLinks } from '../../content/nav'
import styles from './WireDiagram.module.css'

/**
 * WireDiagram — bottom-of-viewport oscilloscope trace that wires the
 * site's sections together. As the user pages horizontally (or scrolls
 * vertically on mobile), a continuous accent-coloured stroke advances
 * from left to right with a pulse-dot at its leading edge. Vertical
 * "spurs" mark each section node and label it.
 *
 * Sits between the Three.js scene (z = -3) and section content (z = 1).
 * Pointer-events: none.
 */
export function WireDiagram() {
  const wireRef = useRef<SVGPathElement>(null)
  const fillRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGGElement>(null)
  const tickGroupsRef = useRef<SVGGElement[]>([])

  // Build the path once — a square-wave-ish trace across an 1800-unit
  // viewBox so the curve has shape even on ultrawide screens.
  const links = navLinks.en
  const NODES = links.length
  const W = 1800
  const H = 80
  const baseline = 48

  // Compute node x positions evenly across the viewBox interior.
  const nodes = Array.from({ length: NODES }, (_, i) => {
    const padL = 60
    const padR = 60
    const usable = W - padL - padR
    return padL + (usable * i) / Math.max(1, NODES - 1)
  })

  // Build a smooth wire — slight sine wobble between nodes, vertical
  // spurs at each node so the trace lifts up to "touch" the label.
  const buildPath = () => {
    const parts: string[] = []
    parts.push(`M 0 ${baseline}`)
    for (let i = 0; i < NODES; i++) {
      const x = nodes[i]
      const prevX = i === 0 ? 0 : nodes[i - 1]
      // Curve in from the previous segment.
      const cp1x = prevX + (x - prevX) * 0.5
      const cp2x = prevX + (x - prevX) * 0.5
      parts.push(`C ${cp1x} ${baseline}, ${cp2x} ${baseline}, ${x - 14} ${baseline}`)
      // Spur up + back down (drawing the node tick).
      parts.push(`L ${x - 14} ${baseline}`)
      parts.push(`L ${x - 14} ${baseline - 22}`)
      parts.push(`M ${x + 14} ${baseline - 22}`)
      parts.push(`L ${x + 14} ${baseline}`)
      parts.push(`M ${x + 14} ${baseline}`)
    }
    parts.push(`L ${W} ${baseline}`)
    return parts.join(' ')
  }

  const pathD = buildPath()

  useEffect(() => {
    const wire = wireRef.current
    const fill = fillRef.current
    const dot = dotRef.current
    if (!wire || !fill || !dot) return

    // Total length used both as dasharray (visual segments) and as
    // pulse-dot motion-path normalisation.
    const totalLen = wire.getTotalLength()
    fill.style.strokeDasharray = `${totalLen}`
    fill.style.strokeDashoffset = `${totalLen}`

    const unsub = subscribeMotion((s) => {
      const p = s.scrollProgress
      // Fill the wire up to the current progress.
      fill.style.strokeDashoffset = `${totalLen * (1 - p)}`

      // Move the pulse dot along the path.
      const pt = wire.getPointAtLength(totalLen * p)
      dot.setAttribute('transform', `translate(${pt.x} ${pt.y})`)

      // Highlight section ticks whose node x is "behind" the playhead.
      const groups = tickGroupsRef.current
      const playX = pt.x
      for (let i = 0; i < groups.length; i++) {
        const node = nodes[i]
        const active = playX >= node - 8
        groups[i].dataset.active = active ? 'true' : 'false'
      }
    })

    return () => {
      unsub()
    }
    // pathD updates would mean rebuilding length — kept static.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wireFillGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* The unlit wire — base trace, full opacity ghost. */}
        <path
          ref={wireRef}
          d={pathD}
          className={styles.wireBase}
          fill="none"
        />
        {/* The lit overlay — fills as user scrolls. */}
        <path
          ref={fillRef}
          d={pathD}
          className={styles.wireFill}
          fill="none"
        />

        {/* Section node labels — each is a vertical tick mark + a
            mono caps label centred above. */}
        {links.map((link, i) => {
          const x = nodes[i]
          return (
            <g
              key={link.href}
              ref={(el) => {
                if (el) tickGroupsRef.current[i] = el
              }}
              className={styles.tick}
              data-active="false"
            >
              <circle cx={x} cy={baseline} r="3" className={styles.tickDot} />
              <text
                x={x}
                y={baseline - 32}
                textAnchor="middle"
                className={styles.tickLabel}
              >
                {(i + 1).toString().padStart(2, '0')}
              </text>
            </g>
          )
        })}

        {/* Pulse dot riding the leading edge of the lit trace. */}
        <g ref={dotRef} className={styles.pulse}>
          <circle r="5.5" className={styles.pulseHalo} />
          <circle r="2.6" className={styles.pulseCore} />
        </g>
      </svg>
    </div>
  )
}

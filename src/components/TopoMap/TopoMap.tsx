import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { subscribeMotion } from '../../lib/motion'
import styles from './TopoMap.module.css'

/**
 * TopoMap — schematic topographic-map background.
 *
 * Renders a stack of nested closed-curve contour lines computed from a
 * polar function with a stable harmonic shape. The "peak" sits at the
 * SVG origin (centred over the parent), making it ideal as a backdrop
 * for the Contact section's centred email button.
 *
 * On enter, every contour draws in via stroke-dashoffset from the
 * outer-most ring inward. Mouse parallax gently shifts the whole map
 * so the topography feels physically lit.
 */

const CONTOUR_COUNT = 14
const POINTS = 96
const BASE_RADIUS = 36
const RADIUS_STEP = 26
const VIEW = 800 // viewBox half-extent

/** Deterministic harmonic shape — sum of three sin waves at coprime
 *  frequencies. Same shape across every contour so they nest neatly. */
function harmonic(angle: number): number {
  return (
    Math.sin(angle * 2 + 1.3) * 0.20 +
    Math.sin(angle * 3 + 2.1) * 0.12 +
    Math.sin(angle * 5 + 4.7) * 0.06
  )
}

function makeContour(radius: number): string {
  const cx = VIEW
  const cy = VIEW
  let d = ''
  for (let i = 0; i <= POINTS; i++) {
    const a = (i / POINTS) * Math.PI * 2
    const r = radius * (1 + harmonic(a))
    const x = cx + Math.cos(a) * r
    const y = cy + Math.sin(a) * r
    d += i === 0 ? `M ${x.toFixed(1)} ${y.toFixed(1)}` : ` L ${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d + ' Z'
}

export function TopoMap() {
  const svgRef = useRef<SVGSVGElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  const contours = useMemo(
    () => Array.from({ length: CONTOUR_COUNT }, (_, i) =>
      makeContour(BASE_RADIUS + i * RADIUS_STEP),
    ),
    [],
  )

  useEffect(() => {
    const svg = svgRef.current
    const wrap = wrapRef.current
    if (!svg || !wrap) return

    const paths = Array.from(svg.querySelectorAll<SVGPathElement>(`.${styles.contour}`))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Measure + prime stroke-dash for each path.
    for (const p of paths) {
      let len = 0
      try { len = p.getTotalLength() } catch { len = 0 }
      if (len) {
        p.style.strokeDasharray = `${len}`
        p.style.strokeDashoffset = reduce ? '0' : `${len}`
      }
    }

    let tl: gsap.core.Timeline | null = null
    if (!reduce) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            // Draw from outer-most ring inward.
            tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
            tl.to(paths.slice().reverse(), {
              strokeDashoffset: 0,
              duration: 1.4,
              stagger: 0.08,
            })
            io.disconnect()
          }
        },
        { threshold: 0.15 },
      )
      io.observe(wrap)
    }

    // Mouse parallax — gentle whole-map shift.
    const unsub = subscribeMotion((s) => {
      if (reduce) return
      const tx = s.pointerX * 14
      const ty = s.pointerY * 8
      svg.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    })

    return () => {
      tl?.kill()
      unsub()
    }
  }, [])

  return (
    <div ref={wrapRef} className={styles.wrap} aria-hidden="true">
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox={`0 0 ${VIEW * 2} ${VIEW * 2}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {contours.map((d, i) => (
          <path
            key={i}
            d={d}
            className={styles.contour}
            data-index={i}
            style={{
              // Slight stroke weight ramp inward.
              strokeWidth: 0.6 + (CONTOUR_COUNT - i) * 0.04,
            }}
          />
        ))}

        {/* Crosshair at the peak. */}
        <g className={styles.cross}>
          <line x1={VIEW - 28} y1={VIEW} x2={VIEW + 28} y2={VIEW} />
          <line x1={VIEW} y1={VIEW - 28} x2={VIEW} y2={VIEW + 28} />
          <circle cx={VIEW} cy={VIEW} r="14" fill="none" />
        </g>

        {/* Three coordinate ticks scattered along the rim. */}
        <g className={styles.label}>
          <text x={VIEW + 380} y={VIEW - 220} textAnchor="start">
            51.5074° N
          </text>
          <text x={VIEW - 380} y={VIEW + 240} textAnchor="end">
            0.1278° W
          </text>
          <text x={VIEW + 360} y={VIEW + 320} textAnchor="start">
            ELEV +∞
          </text>
        </g>
      </svg>
    </div>
  )
}

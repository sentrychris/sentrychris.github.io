import { useEffect, useRef } from 'react'

/**
 * usePathTrace — stroke-dashoffset draw-in animation for SVG paths.
 *
 * Hangs an IntersectionObserver on a container ref, then on first
 * intersect walks every <path>, <circle>, <line>, <polygon>, <rect>
 * inside and animates its stroke-dashoffset from total-length → 0
 * via the Web Animations API (so the global CSS `transition: none`
 * rule doesn't kill it).
 *
 * Stagger is controlled by per-element `data-trace-delay` attributes
 * (in ms). If absent, the element is staggered by its document order
 * times the `stagger` arg.
 *
 * Honours reduced-motion by snapping shapes to drawn instantly.
 */
export function usePathTrace<T extends Element = SVGSVGElement>(
  options: {
    duration?: number
    stagger?: number
    threshold?: number
    once?: boolean
  } = {},
) {
  const { duration = 1400, stagger = 60, threshold = 0.2, once = true } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const collect = () =>
      Array.from(
        el.querySelectorAll<SVGGeometryElement>(
          'path[data-trace],circle[data-trace],line[data-trace],polyline[data-trace],polygon[data-trace],rect[data-trace],ellipse[data-trace]',
        ),
      )

    const play = () => {
      const shapes = collect()
      shapes.forEach((shape, i) => {
        let length = 0
        try {
          length = shape.getTotalLength()
        } catch {
          // <rect> w/h=0 etc.
          length = 0
        }
        if (!length) {
          shape.style.strokeDasharray = ''
          shape.style.strokeDashoffset = ''
          return
        }
        const delay = shape.dataset.traceDelay
          ? parseFloat(shape.dataset.traceDelay)
          : i * stagger
        shape.style.strokeDasharray = `${length}`
        shape.style.strokeDashoffset = `${length}`
        if (reduce) {
          shape.style.strokeDashoffset = '0'
          return
        }
        shape.animate(
          [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
          {
            duration,
            delay,
            easing: 'cubic-bezier(.22, 1, .36, 1)',
            fill: 'forwards',
          },
        )
      })
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          play()
          if (once) io.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -5% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [duration, stagger, threshold, once])

  return ref
}

import { useEffect, useState } from 'react'

/**
 * useCountUp — animates a number from 0 to `to` over `duration` ms
 * using requestAnimationFrame, with an ease-out cubic curve.
 * Returns the current integer value.
 *
 *  - Runs once on mount.
 *  - Returns `to` immediately if user prefers reduced motion (no
 *    animation, just the final value).
 */
export function useCountUp(to: number, duration = 1200): number {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [n, setN] = useState(reduced ? to : 0)

  useEffect(() => {
    if (reduced) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
      setN(Math.floor(to * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setN(to)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration, reduced])

  return n
}

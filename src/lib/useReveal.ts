import { useEffect, useRef } from 'react'

/**
 * useReveal — observes the target element and sets `data-revealed="true"`
 * on it (and on every nested `[data-reveal]` child) the first time it
 * intersects the viewport.
 *
 * Pair with the `[data-reveal]` CSS in global.css. Stagger via
 * `[data-reveal-stagger]` on the parent — per-child `--reveal-delay`
 * is handled in CSS by `:nth-child(n)`.
 *
 * No deps, no GSAP. Reduced-motion is gated globally in CSS.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: reveal immediately.
      el.dataset.revealed = 'true'
      el.querySelectorAll<HTMLElement>('[data-reveal]').forEach((c) => {
        c.dataset.revealed = 'true'
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.dataset.revealed = 'true'
            // Reveal all nested [data-reveal] children at the same time —
            // the CSS `--reveal-delay` per :nth-child gives them the stagger.
            target.querySelectorAll<HTMLElement>('[data-reveal]').forEach((c) => {
              c.dataset.revealed = 'true'
            })
            observer.unobserve(target)
          }
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../../content/nav'
import styles from './Tracker.module.css'

/**
 * Tracker
 */
export function Tracker() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const pingRef = useRef<HTMLSpanElement>(null)
  const prevActiveRef = useRef<string | null>(null)

  // When activeId changes, animate the ping element along the rule
  // from the previous active dot's Y to the new active dot's Y, then
  // fade out. Web Animations API → not affected by the global CSS
  // `transition: none` rule.
  useEffect(() => {
    const list = listRef.current
    const ping = pingRef.current
    if (!list || !ping) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const prev = prevActiveRef.current
    prevActiveRef.current = activeId
    if (!activeId || !prev || prev === activeId) return

    const prevDot = list
      .querySelector<HTMLAnchorElement>(`a[href="#${prev}"]`)
      ?.querySelector<HTMLElement>('span[aria-hidden="true"]')
    const newDot = list
      .querySelector<HTMLAnchorElement>(`a[href="#${activeId}"]`)
      ?.querySelector<HTMLElement>('span[aria-hidden="true"]')
    if (!prevDot || !newDot) return

    const listRect = list.getBoundingClientRect()
    const prevRect = prevDot.getBoundingClientRect()
    const newRect = newDot.getBoundingClientRect()
    const prevY = prevRect.top - listRect.top + prevRect.height / 2
    const newY = newRect.top - listRect.top + newRect.height / 2
    const distance = Math.abs(newY - prevY)
    if (distance < 1) return

    ping.animate(
      [
        { transform: `translate(-50%, ${prevY}px) scale(0.6)`, opacity: 0 },
        { transform: `translate(-50%, ${prevY}px) scale(1)`, opacity: 1, offset: 0.1 },
        { transform: `translate(-50%, ${newY}px) scale(1)`, opacity: 1, offset: 0.85 },
        { transform: `translate(-50%, ${newY}px) scale(1.6)`, opacity: 0 },
      ],
      {
        duration: Math.min(700, 280 + distance * 1.2),
        easing: 'cubic-bezier(.4, 0, .2, 1)',
        fill: 'forwards',
      },
    )
  }, [activeId])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 921px)').matches

    // Desktop horizontal — track <main>'s scrollLeft and pick the
    // section whose centre is closest to the viewport centre. The
    // IO-based vertical detection is unreliable in horizontal layout
    // because all sections always intersect the vertical band.
    if (desktop) {
      const main = document.querySelector('main')
      if (!main) return

      function updateActive() {
        const sections = Array.from(
          main!.querySelectorAll<HTMLElement>(':scope > section'),
        )
        if (sections.length === 0) return
        const scrollLeft = main!.scrollLeft
        const center = scrollLeft + main!.clientWidth / 2
        let closest: HTMLElement | null = null
        let closestDist = Infinity
        for (const s of sections) {
          const sectionCenter = s.offsetLeft + s.offsetWidth / 2
          const dist = Math.abs(sectionCenter - center)
          if (dist < closestDist) {
            closestDist = dist
            closest = s
          }
        }
        if (closest) setActiveId(closest.id)
      }

      updateActive()
      main.addEventListener('scroll', updateActive, { passive: true })
      window.addEventListener('resize', updateActive)
      return () => {
        main.removeEventListener('scroll', updateActive)
        window.removeEventListener('resize', updateActive)
      }
    }

    // Mobile vertical long-scroll — original IntersectionObserver path.
    const ids = navLinks.map((l) => l.spy).filter((s): s is string => Boolean(s))
    if (ids.length === 0) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className={styles.tracker} aria-label="Page sections">
      <ol ref={listRef} className={styles.list}>
        {navLinks.map((link) => {
          const isActive = link.spy != null && link.spy === activeId
          return (
            <li key={link.href} className={styles.item}>
              <a
                href={link.href}
                className={`${styles.entry} ${isActive ? styles.entryActive : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={styles.indicator} aria-hidden="true" />
                <span className={styles.label}>{link.label}</span>
              </a>
            </li>
          )
        })}
        {/* Ping — accent dot animated along the rule between active
            entries via the Web Animations API in the effect above. */}
        <span ref={pingRef} className={styles.ping} aria-hidden="true" />
      </ol>
    </aside>
  )
}

import { useEffect, useState } from 'react'
import { navLinks } from '../../content/nav'
import styles from './Tracker.module.css'

/**
 * Tracker
 */
export function Tracker() {
  const [activeId, setActiveId] = useState<string | null>(null)

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
      <ol className={styles.list}>
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
      </ol>
    </aside>
  )
}

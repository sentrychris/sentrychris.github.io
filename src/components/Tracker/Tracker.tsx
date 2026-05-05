import { useEffect, useState } from 'react'
import { navLinks } from '../../content/nav'
import styles from './Tracker.module.css'

/**
 * Tracker
 */
export function Tracker() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
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

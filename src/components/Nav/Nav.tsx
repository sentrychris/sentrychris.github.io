import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { LanguageToggle } from '../LanguageToggle'
import styles from './Nav.module.css'

export interface NavLink {
  href: string
  label: string
  /** Optional id of the section this link points to — used for scroll-spy. */
  spy?: string
}

export interface NavProps {
  links: NavLink[]
}

/**
 * Nav — sticky top navigation, schematic.
 *
 *  - Scroll-spy highlights the link whose target section is closest to
 *    the top of the viewport.
 *  - The nav densifies (more solid background, sharper border) once
 *    the user scrolls past the hero.
 */
export function Nav({ links }: NavProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Scroll-spy. Desktop horizontal layout tracks main.scrollLeft
  // (sections all share the vertical viewport, so IO can't pick one);
  // mobile vertical long-scroll uses the IntersectionObserver path.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 921px)').matches

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

    const ids = links.map((l) => l.spy).filter((s): s is string => Boolean(s))
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
  }, [links])

  // Densify once we've scrolled past roughly the first viewport height.
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > window.innerHeight * 0.5)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      ref={headerRef}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Chris Rowles — home">
          <span className={styles.brandMark} aria-hidden="true">
            CR
          </span>
        </a>
        <div className={styles.right}>
          <nav className={styles.links} aria-label="Sections">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.spy && link.spy === activeId
                    ? `${styles.link} ${styles.linkActive}`
                    : styles.link
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

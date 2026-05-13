import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { skills as skillsI18n, type SkillGroup } from '../../content/skills'
import { Section } from '../../components/Section'
import { DevIcon } from '../../components/DevIcon'
import { useLanguage } from '../../lib/useLanguage'
import styles from './Skills.module.css'

/**
 * Skills — architecture diagram, overhauled.
 *
 * Same 5-node topology, but the arrows are now flowing dashed traces
 * with riding pulse dots, every node has corner brackets that draw in
 * on enter, and devicons cascade in via a GSAP timeline.
 */
export function Skills() {
  const archRef = useRef<HTMLDivElement>(null)
  const { lang } = useLanguage()
  const skills = skillsI18n[lang]

  const byKey = Object.fromEntries(
    skills.groups.map((g) => [g.key, g]),
  ) as Record<SkillGroup['key'], SkillGroup | undefined>

  const tooling = byKey.tooling
  const frontend = byKey.frontend
  const backend = byKey.backend
  const data = byKey.data
  const infra = byKey.infra

  useEffect(() => {
    const arch = archRef.current
    if (!arch) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const nodes = Array.from(arch.querySelectorAll<HTMLElement>(`.${styles.node}`))
    const items = Array.from(arch.querySelectorAll<HTMLElement>(`.${styles.item}`))
    const arrows = Array.from(arch.querySelectorAll<HTMLElement>(`.${styles.arrow}`))
    const brackets = Array.from(arch.querySelectorAll<SVGGeometryElement>(`.${styles.bracket} path`))
    const arrowPaths = Array.from(arch.querySelectorAll<SVGGeometryElement>(`.${styles.arrowSvg} path[data-trace]`))

    // Prime path lengths for stroke trace.
    for (const el of [...brackets, ...arrowPaths]) {
      let len = 0
      try { len = el.getTotalLength() } catch { len = 0 }
      if (len) {
        el.style.strokeDasharray = `${len}`
        el.style.strokeDashoffset = `${len}`
      }
    }

    if (reduce) {
      gsap.set(nodes, { opacity: 1, y: 0, scale: 1 })
      gsap.set(items, { opacity: 1, scale: 1 })
      gsap.set(arrows, { opacity: 1 })
      for (const el of [...brackets, ...arrowPaths]) el.style.strokeDashoffset = '0'
      return
    }

    gsap.set(nodes, { opacity: 0, y: 24, scale: 0.96, transformOrigin: '50% 50%' })
    gsap.set(items, { opacity: 0, scale: 0.6, y: 6 })
    gsap.set(arrows, { opacity: 0 })

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
          tl
            .to(nodes, {
              opacity: 1, y: 0, scale: 1,
              duration: 0.9, stagger: 0.08,
            }, 0)
            .to(brackets, {
              strokeDashoffset: 0,
              duration: 0.8, stagger: 0.04, ease: 'power2.out',
            }, 0.1)
            .to(arrows, { opacity: 1, duration: 0.4 }, 0.4)
            .to(arrowPaths, {
              strokeDashoffset: 0,
              duration: 0.7, stagger: 0.06, ease: 'power2.out',
            }, 0.4)
            .to(items, {
              opacity: 1, scale: 1, y: 0,
              duration: 0.55, stagger: 0.03, ease: 'back.out(2)',
            }, 0.5)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(arch)

    return () => io.disconnect()
  }, [lang])

  return (
    <Section
      id="skills"
      index={2}
      eyebrow={skills.eyebrow}
      title={skills.title}
      titleAccent={skills.titleAccent}
      lede={skills.lede}
    >
      <div className={styles.arch} ref={archRef}>
        {tooling && <Node group={tooling} className={styles.tooling} />}

        <Arrow className={styles.arrowDownTop} caption="drives" />

        {frontend && <Node group={frontend} className={styles.frontend} />}
        <Arrow className={styles.arrowR1} caption="HTTP · WS" />
        {backend && <Node group={backend} className={styles.backend} />}
        <Arrow className={styles.arrowR2} caption="SQL · cache" />
        {data && <Node group={data} className={styles.data} />}

        <Arrow className={styles.arrowDownBottom} caption="runs on" />

        {infra && <Node group={infra} className={styles.infra} />}
      </div>
    </Section>
  )
}

interface NodeProps {
  group: SkillGroup
  className: string
}

function Node({ group, className }: NodeProps) {
  return (
    <div className={`${styles.node} ${className}`}>
      {/* Corner brackets — draw in via stroke-trace on enter. */}
      <svg
        className={styles.bracket}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M 0.5 6 L 0.5 0.5 L 6 0.5" />
        <path d="M 94 0.5 L 99.5 0.5 L 99.5 6" />
        <path d="M 0.5 94 L 0.5 99.5 L 6 99.5" />
        <path d="M 94 99.5 L 99.5 99.5 L 99.5 94" />
      </svg>
      <div className={styles.nodeHeader}>
        <span className={styles.tag}>{group.name}</span>
        <span className={styles.statusDot} aria-hidden="true" />
      </div>
      <ul className={styles.items}>
        {group.items.map((item) => (
          <li key={item} className={styles.item}>
            <DevIcon name={item} size={12} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ArrowProps {
  className: string
  caption?: string
}

function Arrow({ className, caption }: ArrowProps) {
  return (
    <div className={`${styles.arrow} ${className}`} aria-hidden="true">
      <svg
        className={styles.arrowSvg}
        width="56"
        height="14"
        viewBox="0 0 56 14"
        fill="none"
      >
        {/* Underlay — solid dim base. */}
        <path
          d="M 2 7 H 50 M 42 1 L 50 7 L 42 13"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Trace — animated dashes, drawn in by GSAP. */}
        <path
          data-trace
          d="M 2 7 H 50 M 42 1 L 50 7 L 42 13"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.arrowTrace}
        />
        {/* Flowing dashes — visually constant motion via CSS keyframes. */}
        <path
          d="M 2 7 H 46"
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="1"
          strokeDasharray="2 8"
          className={styles.arrowFlow}
        />
      </svg>
      {caption && <span className={styles.arrowCaption}>{caption}</span>}
    </div>
  )
}

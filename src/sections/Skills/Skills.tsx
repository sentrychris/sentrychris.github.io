import { skills as skillsI18n, type SkillGroup } from '../../content/skills'
import { Section } from '../../components/Section'
import { DevIcon } from '../../components/DevIcon'
import { useLanguage } from '../../lib/useLanguage'
import { useReveal } from '../../lib/useReveal'
import styles from './Skills.module.css'

/**
 * Skills — architecture diagram, lifted from vigil.edcs.app's
 * .arch-node pattern.
 *
 * Five groups laid out as a real systems topology:
 *
 *           ┌──────────┐
 *           │ Tooling  │
 *           └──────────┘
 *                ↓
 *   [Frontend] → [Backend] → [Data]
 *                ↓
 *           ┌──────────┐
 *           │ Infra    │
 *           └──────────┘
 *
 * Each node is a faint-bordered card with a mono-caps tag, a heading,
 * and devicon-prefixed mono-caps tech chips. Arrows between nodes are
 * inline SVGs in the accent green with a soft drop-shadow glow plus a
 * tiny mono caption beneath.
 *
 * On mobile the layout collapses to a single column with the same
 * arrows rotated to point downward — the topology still reads.
 */
export function Skills() {
  const ref = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const skills = skillsI18n[lang]

  // Index groups by their stable key so we can place them by topology
  // independent of locale. Display names live on `group.name`.
  const byKey = Object.fromEntries(
    skills.groups.map((g) => [g.key, g]),
  ) as Record<SkillGroup['key'], SkillGroup | undefined>

  const tooling = byKey.tooling
  const frontend = byKey.frontend
  const backend = byKey.backend
  const data = byKey.data
  const infra = byKey.infra

  return (
    <Section
      id="skills"
      index={2}
      eyebrow={skills.eyebrow}
      title={skills.title}
      titleAccent={skills.titleAccent}
      lede={skills.lede}
    >
      <div className={styles.arch} ref={ref} data-reveal>
        {/* Top row: Tooling, full-width, centred */}
        {tooling && <Node group={tooling} className={styles.tooling} />}

        {/* Down arrow into the middle row */}
        <Arrow className={styles.arrowDownTop} caption="drives" />

        {/* Middle row: Frontend → Backend → Data */}
        {frontend && <Node group={frontend} className={styles.frontend} />}
        <Arrow className={styles.arrowR1} caption="HTTP · WS" />
        {backend && <Node group={backend} className={styles.backend} />}
        <Arrow className={styles.arrowR2} caption="SQL · cache" />
        {data && <Node group={data} className={styles.data} />}

        {/* Down arrow into the foundation */}
        <Arrow className={styles.arrowDownBottom} caption="runs on" />

        {/* Bottom row: Infra & Ops, full-width, centred */}
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
      <span className={styles.tag}>{group.name}</span>
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
        width="48"
        height="14"
        viewBox="0 0 48 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 2 7 H 44 M 36 1 L 44 7 L 36 13" />
      </svg>
      {caption && <span className={styles.arrowCaption}>{caption}</span>}
    </div>
  )
}

import { experience } from '../../content/experience'
import { Section } from '../../components/Section'
import { useReveal } from '../../lib/useReveal'
import styles from './Experience.module.css'

/**
 * Experience — drafting timeline. Each role is rendered like a labeled
 * construction phase on the blueprint drawing.
 *
 * Left column keeps the huge italic Playfair "Nº NN" (sticky on
 * desktop), with the period rendered below as a dimension callout —
 * vertical end-ticks bracketing a hairline rule with the years inline,
 * mono caps. Right column carries the role: a small accent-bordered
 * circle marker leads the title, the company runs as a subordinate
 * italic Playfair line, sectors are bracketed mono labels (`[saas]`),
 * the summary is body prose, and any outcome points render as numbered
 * "specifications" — `01 ◯` prefix in accent mono.
 *
 * Reveal: the entries list is the stagger parent; each row reveals as
 * a single child.
 */
export function Experience() {
  const ref = useReveal<HTMLOListElement>()

  return (
    <Section
      id="experience"
      index={3}
      eyebrow={experience.eyebrow}
      title={experience.title}
      titleAccent={experience.titleAccent}
      lede={experience.lede}
    >
      <ol className={styles.timeline} ref={ref} data-reveal-stagger>
        {experience.entries.map((entry, i) => {
          const num = (i + 1).toString().padStart(2, '0')
          const [start, end] = splitPeriod(entry.period)
          return (
            <li
              key={`${entry.role}-${entry.period}`}
              className={styles.row}
              data-reveal
            >
              <div className={styles.numberCol}>
                <span className={styles.number} aria-hidden="true">
                  Nº {num}
                </span>
                <PeriodDimension start={start} end={end} raw={entry.period} />
              </div>

              <div className={styles.contentCol}>
                <h3 className={styles.role}>
                  <span className={styles.roleMarker} aria-hidden="true" />
                  <span className={styles.roleText}>{entry.role}</span>
                </h3>
                {entry.company && (
                  <p className={styles.company}>{entry.company}</p>
                )}

                {entry.sectors.length > 0 && (
                  <ul className={styles.sectors} aria-label="Sectors">
                    {entry.sectors.map((sector) => (
                      <li key={sector} className={styles.sector}>
                        {sector.toLowerCase()}
                      </li>
                    ))}
                  </ul>
                )}

                <p className={styles.summary}>{entry.summary}</p>

                {entry.points && entry.points.length > 0 && (
                  <ol className={styles.points}>
                    {entry.points.map((point, p) => (
                      <li key={point} className={styles.point}>
                        <span className={styles.pointIndex} aria-hidden="true">
                          {(p + 1).toString().padStart(2, '0')}
                        </span>
                        <span className={styles.pointMarker} aria-hidden="true" />
                        <span className={styles.pointText}>{point}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

/**
 * Split a period string like "2022 — present" into [start, end]. Falls
 * back to [raw, ''] if the em-dash isn't present so we never lose data.
 */
function splitPeriod(period: string): [string, string] {
  const parts = period.split(/\s*[—–-]\s*/)
  if (parts.length >= 2) return [parts[0]!.trim(), parts.slice(1).join(' ').trim()]
  return [period, '']
}

interface PeriodDimensionProps {
  start: string
  end: string
  raw: string
}

/**
 * Period rendered as a dimension callout — vertical end-ticks at each
 * end bracket a hairline rule with the years inline. The whole strip
 * is wrapped in faint accent brackets via the end-tick rules.
 */
function PeriodDimension({ start, end, raw }: PeriodDimensionProps) {
  return (
    <span className={styles.period} aria-label={raw}>
      <span className={styles.periodTick} aria-hidden="true" />
      <span className={styles.periodValue}>{start}</span>
      <span className={styles.periodRule} aria-hidden="true" />
      {end && <span className={styles.periodValue}>{end}</span>}
      <span className={styles.periodTick} aria-hidden="true" />
    </span>
  )
}

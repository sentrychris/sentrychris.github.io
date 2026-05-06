import { experience as experienceI18n } from '../../content/experience'
import { Section } from '../../components/Section'
import { useLanguage } from '../../lib/useLanguage'
import { useReveal } from '../../lib/useReveal'
import styles from './Experience.module.css'

/** Roman numerals for the per-role exhibits and the section badge. */
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'] as const

/**
 * Experience
 */
export function Experience() {
  const wrapRef = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const experience = experienceI18n[lang]

  return (
    <Section id="experience">
      <div className={styles.wrap} ref={wrapRef} data-reveal>
        {/* Opener — rendered here (not by Section) so the whole roster
            below reads as a single editorial spread. */}
        <header className={styles.opener}>
          <div className={styles.label}>
            <span className={styles.labelText}>{experience.eyebrow}</span>
            <span className={styles.labelIndex}>Nº III</span>
          </div>
          <h2 className={styles.title}>
            {experience.title}
            {experience.titleAccent && (
              <>
                {' '}
                <span className={styles.titleAccent}>
                  {experience.titleAccent}
                </span>
              </>
            )}
          </h2>
          <p className={styles.lede}>{experience.lede}</p>
        </header>

        <ol className={styles.roster}>
          {experience.entries.map((entry, i) => (
            <li
              key={`${entry.role}-${entry.period}`}
              className={styles.entry}
            >
              {/* Magazine fleuron separator above every entry except the first */}
              {i > 0 && (
                <div className={styles.fleuron} aria-hidden="true">
                  <span className={styles.fleuronRule} />
                  <span className={styles.fleuronMark}>✻</span>
                  <span className={styles.fleuronRule} />
                </div>
              )}

              <div className={styles.spread}>
                {/* Left: meta — period, company, sectors */}
                <aside className={styles.meta}>
                  <p className={styles.period}>{entry.period}</p>
                  {entry.company && (
                    <p className={styles.company}>{entry.company}</p>
                  )}
                  {entry.sectors.length > 0 && (
                    <ul className={styles.sectors} aria-label={experience.ui.sectors}>
                      {entry.sectors.map((sector) => (
                        <li key={sector} className={styles.sector}>
                          {sector}
                        </li>
                      ))}
                    </ul>
                  )}
                </aside>

                {/* Right: body — role, summary, exhibits */}
                <div className={styles.body}>
                  <h3 className={styles.role}>{entry.role}</h3>
                  <p className={styles.summary}>{entry.summary}</p>

                  {entry.points && entry.points.length > 0 && (
                    <div className={styles.exhibits}>
                      <div className={styles.exhibitsLabel} aria-hidden="true">
                        <span className={styles.exhibitsLabelText}>
                          {experience.ui.exhibits}
                        </span>
                      </div>
                      <ol className={styles.points}>
                        {entry.points.map((point, p) => (
                          <li key={point} className={styles.point}>
                            <span
                              className={styles.pointIndex}
                              aria-hidden="true"
                            >
                              {ROMAN[p]}
                            </span>
                            <span className={styles.pointText}>{point}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

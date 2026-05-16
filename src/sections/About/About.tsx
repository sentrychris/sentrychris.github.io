import { about as aboutI18n } from '../../content/about'
import { Section } from '../../components/Section'
import { useLanguage } from '../../lib/useLanguage'
import { useReveal } from '../../lib/useReveal'
import styles from './About.module.css'

/**
 * About — schematic profile spread, sitting on the blueprint.
 *
 * The opener (label + h2 + lede) is rendered INSIDE the layout's left
 * column rather than via Section's default opener slot — this lets the
 * specifications schedule on the right vertically centre against the
 * combined opener + prose stack via `align-items: center` on the grid.
 *
 * Contracts:
 *   - prose renders as compact field notes
 *   - facts are a specifications schedule with mono-caps rows
 */
export function About() {
  const wrapRef = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const about = aboutI18n[lang]

  return (
    <Section id="about">
      <div className={styles.wrap} ref={wrapRef} data-reveal>
        <div className={styles.layout}>
          <div className={styles.left}>
            <header className={styles.opener}>
              <div className={styles.label}>
                <span className={styles.labelText}>{about.eyebrow}</span>
                <span className={styles.labelIndex}>FIG. 01</span>
              </div>
              <h2 className={styles.title}>
                {about.title}
                {about.titleAccent && (
                  <>
                    {' '}
                    <span className={styles.titleAccent}>
                      {about.titleAccent}
                    </span>
                  </>
                )}
              </h2>
              <p className={styles.lede}>{about.lede}</p>
            </header>

            <article className={styles.prose}>
              {about.paragraphs.map((p, i) => (
                <p key={i} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </article>
          </div>

          <aside className={styles.facts}>
            <div className={styles.factsHeader} aria-hidden="true">
              <span className={styles.factsHeaderTick} />
              <span className={styles.factsHeaderText}>{about.ui.specifications}</span>
              <span className={styles.factsHeaderTick} />
            </div>

            <dl className={styles.factList}>
              {about.facts.map((fact, i) => (
                <div key={fact.label} className={styles.fact}>
                  <span className={styles.factNumeral} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.factBody}>
                    <dt className={styles.factLabel}>{fact.label}</dt>
                    <dd className={styles.factValue}>{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className={styles.signature} aria-hidden="true">
          <span className={styles.signatureRule} />
          <p className={styles.signatureText}>
            <span className={styles.signaturePart}>{about.ui.signatureBrand}</span>
            <span className={styles.signatureSep}>·</span>
            <span className={styles.signaturePart}>{about.coordinates}</span>
            <span className={styles.signatureSep}>·</span>
            <span className={styles.signaturePart}>{about.ui.signatureYear}</span>
          </p>
        </div>
      </div>
    </Section>
  )
}

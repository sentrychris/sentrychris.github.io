import { about as aboutI18n } from '../../content/about'
import { Section } from '../../components/Section'
import { useLanguage } from '../../lib/useLanguage'
import { useReveal } from '../../lib/useReveal'
import styles from './About.module.css'

/** Roman numerals for the specifications schedule — five entries
 *  is plenty for the foreseeable shape of `about.facts`. */
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'] as const

/**
 * About — refined editorial spread, sitting on the blueprint.
 *
 * The opener (label + h2 + lede) is rendered INSIDE the layout's left
 * column rather than via Section's default opener slot — this lets the
 * specifications schedule on the right vertically centre against the
 * combined opener + prose stack via `align-items: center` on the grid.
 *
 * Typography contracts:
 *   – first paragraph carries a drop cap (CSS ::first-letter)
 *   – second paragraph is a pull quote (italic Playfair, accent border)
 *   – any further paragraphs render as plain body
 *   – facts are a "specifications schedule" — bordered panel with a
 *     mono-caps header strip and Roman-numeralled rows
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
                <span className={styles.labelIndex}>Nº 01</span>
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
                    {ROMAN[i]}
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

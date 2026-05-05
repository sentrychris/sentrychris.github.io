import { HeroEyebrow } from '../../components/HeroEyebrow'
import { Button } from '../../components/Button'
import { hero } from '../../content/hero'
import { useReveal } from '../../lib/useReveal'
import styles from './Hero.module.css'

/**
 * Hero — Atlas first paint.
 *
 *  - Accent "label" eyebrow (the dash-prefixed micro-caps).
 *  - Massive Inter Tight headline with an italic Playfair accent
 *    phrase — the section's signature visual move.
 *  - Body lede in Inter, narrow max-width for editorial rhythm.
 *  - Two buttons: accent primary CTA + ghost secondary.
 *  - A small meta strip across the bottom (years · role · stack).
 *  - Reveal-on-scroll handled by [data-reveal] children with the
 *    parent providing the stagger delays.
 */
export function Hero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.wrap} ref={ref} data-reveal-stagger>
        <div className={styles.eyebrow} data-reveal>
          <HeroEyebrow dot={false}>{hero.eyebrow}</HeroEyebrow>
        </div>

        <h1 className={styles.title} data-reveal>
          {hero.title} <span className={styles.accent}>{hero.accent}</span>
        </h1>

        <p className={styles.lede} data-reveal>
          {hero.lede}
        </p>

        <div className={styles.ctas} data-reveal>
          {hero.ctas.map((cta) => (
            <Button key={cta.label} variant={cta.variant} href={cta.href}>
              {cta.label}
            </Button>
          ))}
        </div>

        <dl className={styles.meta} data-reveal>
          {hero.meta.map((m) => (
            <div key={m.label} className={styles.metaItem}>
              <dt className={styles.metaLabel}>{m.label}</dt>
              <dd className={styles.metaValue}>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

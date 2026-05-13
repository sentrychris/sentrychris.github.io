import type { ReactNode } from 'react'
import { useReveal } from '../../lib/useReveal'
import { SectionFrame } from '../SectionFrame'
import styles from './Section.module.css'

export interface SectionProps {
  /** Anchor id — used by Nav for in-page links and scroll-spy. */
  id: string
  /** Numeric index — renders as the section's "Nº" badge. */
  index?: number
  /** Mono caps micro-label — e.g. "ABOUT". */
  eyebrow?: string
  /** Section heading. Renders as <h2>. */
  title?: string
  /** Optional accent phrase rendered in italic Playfair accent color. */
  titleAccent?: string
  /** Intro paragraph below the title. */
  lede?: string
  children: ReactNode
}

/**
 * Section — long-scroll page-level wrapper for the Atlas system.
 *
 * Opener: small accent "label" eyebrow (with leading dash + optional
 * Nº index), then the h2 with an optional italic Playfair accent
 * phrase, then the lede. Children render below.
 *
 * The opener participates in the [data-reveal] reveal-on-scroll
 * pattern; body children handle their own reveal if they want one.
 */
export function Section({
  id,
  index,
  eyebrow,
  title,
  titleAccent,
  lede,
  children,
}: SectionProps) {
  const openerRef = useReveal<HTMLElement>()
  const hasOpener = eyebrow || title || lede

  return (
    <section id={id} className={styles.section}>
      <SectionFrame
        pip={index !== undefined ? index.toString().padStart(2, '0') : undefined}
      />
      <div className={styles.wrap}>
        {hasOpener && (
          <header
            ref={openerRef}
            className={styles.opener}
            data-reveal-stagger
          >
            {(eyebrow || index !== undefined) && (
              <div className={styles.label} data-reveal>
                {eyebrow && <span className={styles.labelText}>{eyebrow}</span>}
                {index !== undefined && (
                  <span className={styles.labelIndex}>
                    Nº {index.toString().padStart(2, '0')}
                  </span>
                )}
              </div>
            )}
            {title && (
              <h2 className={styles.title} data-reveal>
                {/* Leader line — accent hairline that nests against the
                    h2 baseline. Pure decoration; aria-hidden. */}
                <span className={styles.titleLead} aria-hidden="true" />
                <span className={styles.titleText}>
                  {title}
                  {titleAccent && (
                    <>
                      {' '}
                      <span className={styles.accent}>
                        {titleAccent}
                      </span>
                    </>
                  )}
                </span>
              </h2>
            )}
            {lede && (
              <p className={styles.lede} data-reveal>
                <span className={styles.ledeMark} aria-hidden="true">¶</span>
                {lede}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

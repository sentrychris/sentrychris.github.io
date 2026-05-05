import { contact } from '../../content/contact'
import { Section } from '../../components/Section'
import { useReveal } from '../../lib/useReveal'
import styles from './Contact.module.css'

/**
 * Contact — rendered as a "drawing title block".
 *
 * The structured stamp you find in the corner of an architectural
 * drawing: a faint accent-bordered rectangle divided into labeled
 * cells. A drawing-reference strip runs across the top, then a
 * STATUS row with a pulsing accent dot, then the EMAIL row (the
 * primary cell, taller, italic Playfair display in --accent), then
 * GITHUB and LINKEDIN rows underneath.
 *
 * Email is reassembled at render time from the split { user, domain }
 * payload to make casual scraping a bit harder.
 */
export function Contact() {
  const email = `${contact.email.user}@${contact.email.domain}`
  const blockRef = useReveal<HTMLDivElement>()

  return (
    <Section
      id="contact"
      index={5}
      eyebrow={contact.eyebrow}
      title={contact.title}
      titleAccent={contact.titleAccent}
      lede={contact.lede}
    >
      <div className={styles.titleBlock} ref={blockRef} data-reveal-stagger>
        {/* Top stamp — drawing reference strip with vertical end-ticks. */}
        <div className={styles.stamp} data-reveal>
          <span className={styles.stampText}>Nº 05 · CONTACT · 2026</span>
        </div>

        {/* STATUS row — pulsing dot + OPEN TO WORK. */}
        <div className={styles.row} data-reveal>
          <span className={styles.label}>Status</span>
          <span className={styles.statusValue}>
            <span className={styles.pulse} aria-hidden="true" />
            <span className={styles.statusText}>Open to work</span>
          </span>
        </div>

        {/* EMAIL row — the primary cell. Taller, italic Playfair display. */}
        <div className={`${styles.row} ${styles.emailRow}`} data-reveal>
          <span className={styles.label}>Email</span>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        {/* GITHUB / LINKEDIN rows. */}
        {contact.methods.map((method) => (
          <div className={styles.row} key={method.label} data-reveal>
            <span className={styles.label}>{method.label}</span>
            <a
              className={styles.linkValue}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {method.display}
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}

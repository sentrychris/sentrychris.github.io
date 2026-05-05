import { contact } from '../../content/contact'
import { Section } from '../../components/Section'
import { useReveal } from '../../lib/useReveal'
import styles from './Contact.module.css'

/**
 * Contact
 */
export function Contact() {
  const email = `${contact.email.user}@${contact.email.domain}`
  const wrapRef = useReveal<HTMLDivElement>()

  return (
    <Section id="contact">
      <div className={styles.wrap} ref={wrapRef} data-reveal>
        {/* Opener — rendered here (not by Section) so the whole close
            reads as one centred editorial column. */}
        <header className={styles.opener}>
          <div className={styles.label}>
            <span className={styles.labelText}>{contact.eyebrow}</span>
            <span className={styles.labelIndex}>Nº V</span>
          </div>
          <h2 className={styles.title}>
            {contact.title}
            {contact.titleAccent && (
              <>
                {' '}
                <span className={styles.titleAccent}>
                  {contact.titleAccent}
                </span>
              </>
            )}
          </h2>
          <p className={styles.lede}>{contact.lede}</p>
        </header>

        {/* Italic Playfair invitation — the magazine's closing sentiment. */}
        <p className={styles.invitation}>
          Pour a coffee.
          <span className={styles.invitationBreak} aria-hidden="true">
            {' '}
          </span>
          Send a line.
        </p>

        {/* Fleuron divider */}
        <Fleuron />

        {/* CORRESPONDENCE — primary Vogue button (the email centerpiece). */}
        <div className={styles.correspondence}>
          <div className={styles.correspondenceLabel} aria-hidden="true">
            <span className={styles.correspondenceLabelTick} />
            <span className={styles.correspondenceLabelText}>
              Correspondence
            </span>
            <span className={styles.correspondenceLabelTick} />
          </div>

          <VogueButton
            href={`mailto:${email}`}
            icon="mail"
            value="Email"
            primary
          />

          <p className={styles.status}>
            <span className={styles.pulse} aria-hidden="true" />
            <span className={styles.statusText}>
              Open to work · Replies within a day
            </span>
          </p>
        </div>

        {/* Fleuron divider */}
        <Fleuron />

        {/* Channels — secondary Vogue buttons in a row. */}
        <div className={styles.channels}>
          <div className={styles.channelsLabel} aria-hidden="true">
            Also reachable via
          </div>
          <div className={styles.channelsList}>
            {contact.methods.map((method) => (
              <VogueButton
                key={method.label}
                href={method.href}
                icon={method.label.toLowerCase() as IconName}
                value={method.label}
                ariaLabel={`${method.label} — ${method.display}`}
                external
              />
            ))}
          </div>
        </div>

        {/* Signature flourish — italic Playfair sign-off. */}
        <div className={styles.signature} aria-hidden="true">
          <span className={styles.signatureRule} />
          <p className={styles.signatureText}>
            <span className={styles.signaturePart}>Yours,</span>
            <span className={styles.signatureName}>Chris Rowles</span>
          </p>
          <p className={styles.signatureMeta}>
            <span className={styles.signatureMetaPart}>United Kingdom</span>
            <span className={styles.signatureMetaSep}>·</span>
            <span className={styles.signatureMetaPart}>MMXXVI</span>
          </p>
        </div>
      </div>
    </Section>
  )
}

type IconName = 'mail' | 'github' | 'linkedin'

/**
 * VogueButton — editorial pill.
 *
 * A pill-shaped link with a brand icon on the left, an italic Playfair
 * value in the middle, and a trailing italic Playfair `→` that slides
 * right on hover. Used for the email centerpiece (primary) and the
 * GitHub / LinkedIn channels (default).
 *
 * - `primary` enlarges the pill and tints the border accent so the
 *   email reads as the centerpiece.
 * - `external` adds target/rel for outbound links.
 */
function VogueButton({
  href,
  icon,
  value,
  primary,
  external,
  ariaLabel,
}: {
  href: string
  icon: IconName
  value: string
  primary?: boolean
  external?: boolean
  ariaLabel?: string
}) {
  return (
    <a
      className={`${styles.btn} ${primary ? styles.btnPrimary : ''}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
    >
      <span className={styles.btnIcon} aria-hidden="true">
        <Icon name={icon} />
      </span>
      <span className={styles.btnValue}>{value}</span>
      <span className={styles.btnArrow} aria-hidden="true">
        →
      </span>
    </a>
  )
}

/** Inline SVG icons. Outline mail (per the design system's stroke-icon
 *  convention) and the official GitHub / LinkedIn brand glyphs (filled
 *  so they remain recognisable at pill scale). */
function Icon({ name }: { name: IconName }) {
  switch (name) {
    case 'mail':
      return (
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="M3.5 7.5l8.5 6 8.5-6" />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z" />
        </svg>
      )
  }
}

/** Magazine fleuron separator — hairline rules with a centred italic
 *  Playfair `✻` mark. Same recipe as the Experience section uses. */
function Fleuron() {
  return (
    <div className={styles.fleuron} aria-hidden="true">
      <span className={styles.fleuronRule} />
      <span className={styles.fleuronMark}>✻</span>
      <span className={styles.fleuronRule} />
    </div>
  )
}

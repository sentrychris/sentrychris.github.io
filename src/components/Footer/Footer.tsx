import styles from './Footer.module.css'

export interface FooterProps {
  /** Year shown in the meta line — defaults to the current year. */
  year?: number
  /** Links shown on the right side of the footer. */
  links?: ReadonlyArray<{ href: string; label: string }>
}

/**
 * Footer — minimal closing chrome.
 * Compact monogram + meta links.
 */
export function Footer({
  year = new Date().getFullYear(),
  links = [],
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Chris Rowles — top">
          <span className={styles.brandMark} aria-hidden="true">
            CR
          </span>
        </a>
        <div className={styles.meta}>
          <span className={styles.copy}>© {year}</span>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

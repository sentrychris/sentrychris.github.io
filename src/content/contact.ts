/* Contact methods.
 * Email is split into name/domain to make casual scraping a bit harder
 * — the section component reassembles it on render. Add or remove
 * methods as needed. */

export interface ContactMethod {
  /** Short label for the row — e.g. "Email", "GitHub". */
  label: string
  /** What the user sees as the value. */
  display: string
  /** Where the link goes. */
  href: string
}

export interface ContactCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  /** Primary email, split for soft obfuscation. The section reassembles it. */
  email: { user: string; domain: string }
  methods: ReadonlyArray<ContactMethod>
}

export const contact: ContactCopy = {
  eyebrow: 'Contact',
  title: 'Get in',
  titleAccent: 'touch.',
  lede:
    'Open to lead engineering roles, senior IC roles, and consulting. Quickest replies are by email; everything else also reaches me.',
  email: { user: 'christopher.rowles', domain: 'outlook.com' },
  methods: [
    {
      label: 'GitHub',
      display: 'github.com/sentrychris',
      href: 'https://github.com/sentrychris',
    },
    {
      label: 'LinkedIn',
      display: 'linkedin.com/in/chris-rowles',
      href: 'https://linkedin.com/in/chris-rowles',
    },
  ],
}

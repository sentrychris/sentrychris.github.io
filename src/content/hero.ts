/* Hero copy.
 * Voice: BRANDING.md §3 (plain, technical, confident, operator-tone).
 * The accent phrase renders inside the gradient text on the hero. */

export interface HeroCopy {
  eyebrow: string
  title: string
  /** Rendered with the cyan→blue→purple gradient. Used once per page. */
  accent: string
  lede: string
  ctas: ReadonlyArray<{
    label: string
    href: string
    variant: 'default' | 'primary'
  }>
  meta: ReadonlyArray<{ label: string; value: string }>
}

export const hero: HeroCopy = {
  eyebrow: 'AVAILABLE · LEAD/SENIOR ROLES & CONSULTING',
  title: '12+ years building',
  accent: 'beautiful web apps.',
  lede:
    'A highly-skilled Lead Developer with 12+ years of experience, in developing, testing and maintaining software and web applications across a wide range of business sectors.',
  ctas: [
    { label: 'See work', href: '#work', variant: 'primary' },
    { label: 'Get in touch', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Years', value: '12+' },
    { label: 'Role', value: 'Lead developer' },
    { label: 'Stack', value: 'Polyglot · web-first' },
  ],
}

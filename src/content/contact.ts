/* Contact methods.
 * Email is split into name/domain to make casual scraping a bit harder
 * — the section component reassembles it on render. Add or remove
 * methods as needed. */

import type { Lang } from '../lib/useLanguage'

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
  ui: {
    invitationA: string
    invitationB: string
    correspondence: string
    emailLabel: string
    statusText: string
    alsoReachable: string
    signatureThanks: string
    signatureName: string
    signatureLocation: string
    signatureYear: string
  }
}

const en: ContactCopy = {
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
  ui: {
    invitationA: 'Pour a coffee.',
    invitationB: 'Send a line.',
    correspondence: 'Correspondence',
    emailLabel: 'Email',
    statusText: 'Open to work · Replies within a day',
    alsoReachable: 'Also reachable via',
    signatureThanks: 'Thanks,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'United Kingdom',
    signatureYear: 'MMXXVI',
  },
}

const ru: ContactCopy = {
  eyebrow: 'Контакты',
  title: 'Свяжитесь',
  titleAccent: 'со мной.',
  lede:
    'Открыт к lead-инженерным ролям, senior IC ролям и консалтингу. Быстрее всего отвечаю по электронной почте; остальные каналы тоже работают.',
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
  ui: {
    invitationA: 'Налейте кофе.',
    invitationB: 'Напишите строку.',
    correspondence: 'Переписка',
    emailLabel: 'Электронная почта',
    statusText: 'Открыт к работе · Отвечаю в течение суток',
    alsoReachable: 'Также можно найти через',
    signatureThanks: 'Спасибо,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Великобритания',
    signatureYear: 'MMXXVI',
  },
}

const es: ContactCopy = {
  eyebrow: 'Contacto',
  title: 'Ponte en',
  titleAccent: 'contacto.',
  lede:
    'Abierto a roles de lead engineering, roles senior IC y consultoría. La forma más rápida es por email; el resto de canales también me llega.',
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
  ui: {
    invitationA: 'Sírvete un café.',
    invitationB: 'Escríbeme una línea.',
    correspondence: 'Correspondencia',
    emailLabel: 'Email',
    statusText: 'Abierto a propuestas · Respondo en menos de un día',
    alsoReachable: 'También me encuentras en',
    signatureThanks: 'Gracias,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Reino Unido',
    signatureYear: 'MMXXVI',
  },
}

export const contact: Record<Lang, ContactCopy> = { en, es, ru }

/* Contact methods.
 * Email is split into name/domain to make casual scraping a bit harder
 * — the section component reassembles it on render. Add or remove
 * methods as needed. */

import type { Lang } from '../lib/useLanguage'
import { contact as en } from './locales/en'
import { contact as es } from './locales/es'
import { contact as ru } from './locales/ru'
import { contact as de } from './locales/de'
import { contact as fr } from './locales/fr'
import { contact as pt } from './locales/pt'
import { contact as pl } from './locales/pl'
import { contact as ro } from './locales/ro'
import { contact as zh } from './locales/zh'
import { contact as ja } from './locales/ja'
import { contact as ko } from './locales/ko'

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

export const contact: Record<Lang, ContactCopy> = {
  en, es, ru, de, fr, pt, pl, ro, zh, ja, ko,
}

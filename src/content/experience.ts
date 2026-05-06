/* Experience timeline.
 * PLACEHOLDER ENTRIES — replace company names, periods, sectors, and
 * summaries with your actual history. The shape and the voice are
 * the parts to keep. */

import type { Lang } from '../lib/useLanguage'
import { experience as en } from './locales/en'
import { experience as es } from './locales/es'
import { experience as ru } from './locales/ru'
import { experience as de } from './locales/de'
import { experience as fr } from './locales/fr'
import { experience as pt } from './locales/pt'
import { experience as pl } from './locales/pl'
import { experience as ro } from './locales/ro'
import { experience as zh } from './locales/zh'
import { experience as ja } from './locales/ja'
import { experience as ko } from './locales/ko'

export interface ExperienceEntry {
  /** Role title — e.g. "Lead Developer". */
  role: string
  /** Company name — set to `null` to mask (e.g., NDA roles). */
  company: string | null
  /** Period — e.g. "2020 — present", "2018 — 2020". */
  period: string
  /** Sectors covered in this role — shown as chips. */
  sectors: ReadonlyArray<string>
  /** One-paragraph summary in operator-tone. */
  summary: string
  /** Optional bullet points — short, declarative, outcome-shaped. */
  points?: ReadonlyArray<string>
}

export interface ExperienceCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  entries: ReadonlyArray<ExperienceEntry>
  ui: {
    exhibits: string
    sectors: string
  }
}

export const experience: Record<Lang, ExperienceCopy> = {
  en, es, ru, de, fr, pt, pl, ro, zh, ja, ko,
}

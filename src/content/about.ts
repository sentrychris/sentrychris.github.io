/* About — editorial.
 * Voice: declarative, plain, faintly poetic. Numbers earn their place. */

import type { Lang } from '../lib/useLanguage'
import { about as en } from './locales/en'
import { about as es } from './locales/es'
import { about as ru } from './locales/ru'
import { about as de } from './locales/de'
import { about as fr } from './locales/fr'
import { about as pt } from './locales/pt'
import { about as pl } from './locales/pl'
import { about as ro } from './locales/ro'
import { about as zh } from './locales/zh'
import { about as ja } from './locales/ja'
import { about as ko } from './locales/ko'

export interface AboutCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  paragraphs: ReadonlyArray<string>
  /** Short statement-of-fact bullets shown as a side panel. */
  facts: ReadonlyArray<{ label: string; value: string }>
  /** Decorative coordinates — rendered as editorial metadata. */
  coordinates: string
  /** UI strings for the surrounding chrome (specifications header,
   *  signature flourish). Co-located so translators only touch one
   *  file per section. */
  ui: {
    specifications: string
    signatureBrand: string
    signatureYear: string
  }
}

export const about: Record<Lang, AboutCopy> = {
  en, es, ru, de, fr, pt, pl, ro, zh, ja, ko,
}

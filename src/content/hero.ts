/* Hero copy.
 * Voice: BRANDING.md §3 (plain, technical, confident, operator-tone).
 * The accent phrase renders inside the gradient text on the hero. */

import type { Lang } from '../lib/useLanguage'
import { hero as en } from './locales/en'
import { hero as es } from './locales/es'
import { hero as ru } from './locales/ru'
import { hero as de } from './locales/de'
import { hero as fr } from './locales/fr'
import { hero as pt } from './locales/pt'
import { hero as pl } from './locales/pl'
import { hero as ro } from './locales/ro'
import { hero as zh } from './locales/zh'
import { hero as ja } from './locales/ja'
import { hero as ko } from './locales/ko'

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

export const hero: Record<Lang, HeroCopy> = {
  en, es, ru, de, fr, pt, pl, ro, zh, ja, ko,
}

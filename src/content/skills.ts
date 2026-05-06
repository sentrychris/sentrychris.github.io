/* Skills.
 * Edit freely — comprehensive list of modern web tech a senior dev
 * is likely to have touched. Trim to what you actually use day-to-day. */

import type { Lang } from '../lib/useLanguage'
import { skills as en } from './locales/en'
import { skills as es } from './locales/es'
import { skills as ru } from './locales/ru'
import { skills as de } from './locales/de'
import { skills as fr } from './locales/fr'
import { skills as pt } from './locales/pt'
import { skills as pl } from './locales/pl'
import { skills as ro } from './locales/ro'
import { skills as zh } from './locales/zh'
import { skills as ja } from './locales/ja'
import { skills as ko } from './locales/ko'

/** Stable lookup key — the Skills section places groups by topology
 *  (tooling at top, infra at bottom, etc.) and the displayed `name`
 *  is localized, so we route layout decisions through `key` instead. */
export type SkillKey = 'tooling' | 'frontend' | 'backend' | 'data' | 'infra'

export interface SkillGroup {
  key: SkillKey
  name: string
  items: ReadonlyArray<string>
}

export interface SkillsCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  groups: ReadonlyArray<SkillGroup>
}

export const skills: Record<Lang, SkillsCopy> = {
  en, es, ru, de, fr, pt, pl, ro, zh, ja, ko,
}

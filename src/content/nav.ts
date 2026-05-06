import type { NavLink } from '../components/Nav'
import type { Lang } from '../lib/useLanguage'
import { navLinks as en } from './locales/en'
import { navLinks as es } from './locales/es'
import { navLinks as ru } from './locales/ru'
import { navLinks as de } from './locales/de'
import { navLinks as fr } from './locales/fr'
import { navLinks as pt } from './locales/pt'
import { navLinks as pl } from './locales/pl'
import { navLinks as ro } from './locales/ro'
import { navLinks as zh } from './locales/zh'
import { navLinks as ja } from './locales/ja'
import { navLinks as ko } from './locales/ko'

export const navLinks: Record<Lang, NavLink[]> = {
  en, es, ru, de, fr, pt, pl, ro, zh, ja, ko,
}

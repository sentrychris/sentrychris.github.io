/* Project showcase.
 * Each project renders as an Atlas "feature article" card with an
 * italic Playfair accent Nº marker, a 3:2 cover image, an Inter Tight
 * title, an Inter body summary, an inline mono-caps stack list, and a
 * primary/ghost button row. Drop new images in public/projects/. */

import type { Lang } from '../lib/useLanguage'
import { projects as en } from './locales/en'
import { projects as es } from './locales/es'
import { projects as ru } from './locales/ru'
import { projects as de } from './locales/de'
import { projects as fr } from './locales/fr'
import { projects as pt } from './locales/pt'
import { projects as pl } from './locales/pl'
import { projects as ro } from './locales/ro'
import { projects as zh } from './locales/zh'
import { projects as ja } from './locales/ja'
import { projects as ko } from './locales/ko'

export interface Project {
  /** Short title shown above the frame. */
  title: string
  /** One-line summary in the address bar style. */
  summary: string
  /** Faux URL displayed in the browser frame's address bar. */
  url: string
  /** Image path under public/. */
  image: string
  /** Image alt text — required for accessibility. */
  alt: string
  /** Optional badge in the top-right of the bar. */
  badge?: string
  /** Tech stack chips. */
  stack: ReadonlyArray<string>
  /** External links — repo, live demo, etc. */
  links: ReadonlyArray<{ label: string; href: string }>
}

export interface ProjectsCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  projects: ReadonlyArray<Project>
  ui: {
    sheet: string
    sheetValue: string
    plates: string
    scale: string
    scaleValue: string
    plate: string
    openPlate: string
    project: string
    type: string
    drawn: string
    drawnValue: string
    sheetOf: string
    annexedPlates: string
    plateIndex: string
    /** Aria — `${currentlyFeatured(title)}` */
    currentlyFeatured: (title: string) => string
    /** Aria — `${feature(title)}` */
    feature: (title: string) => string
    /** Aria — `${stackOf(title)}` */
    stackOf: (title: string) => string
  }
}

export const projects: Record<Lang, ProjectsCopy> = {
  en, es, ru, de, fr, pt, pl, ro, zh, ja, ko,
}

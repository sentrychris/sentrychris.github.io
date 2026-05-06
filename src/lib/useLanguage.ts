import { createContext, useContext } from 'react'

export type Lang =
  | 'en'
  | 'es'
  | 'ru'
  | 'de'
  | 'fr'
  | 'pt'
  | 'pl'
  | 'ro'
  | 'zh'
  | 'ja'
  | 'ko'

export const LANGS: ReadonlyArray<Lang> = [
  'en',
  'es',
  'ru',
  'de',
  'fr',
  'pt',
  'pl',
  'ro',
  'zh',
  'ja',
  'ko',
]

/** Regional BCP-47 tags for the `<html lang>` attribute. The internal
 *  `Lang` codes stay short for the toggle UI; this map widens them to
 *  the proper regional tag where it matters (PT → pt-BR, ZH → zh-Hans). */
export const HTML_LANG_TAG: Record<Lang, string> = {
  en: 'en',
  es: 'es',
  ru: 'ru',
  de: 'de',
  fr: 'fr',
  pt: 'pt-BR',
  pl: 'pl',
  ro: 'ro',
  zh: 'zh-Hans',
  ja: 'ja',
  ko: 'ko',
}

export const LANG_STORAGE_KEY = 'atlas-lang'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * useLanguage — read the active language and toggle helpers from the
 * provider mounted at the app root. Components consuming this hook
 * read the matching slice from each content file's `{ en, uk }`
 * dictionary, e.g. `hero[lang]`.
 */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

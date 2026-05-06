import { createContext, useContext } from 'react'

export type Lang = 'en' | 'es' | 'ru'

export const LANGS: ReadonlyArray<Lang> = ['en', 'es', 'ru']

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

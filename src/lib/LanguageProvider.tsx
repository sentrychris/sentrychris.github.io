import { useEffect, useState, type ReactNode } from 'react'
import {
  LANG_STORAGE_KEY,
  LANGS,
  LanguageContext,
  type Lang,
} from './useLanguage'

/**
 * LanguageProvider — drives the `lang` attribute on <html> and persists
 * the user's choice in localStorage. Falls back to the browser language
 * on first paint, defaulting to English.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang)
    } catch {
      // Quota exceeded / privacy mode — silently fall through.
    }
  }, [lang])

  // Cycle through the LANGS list — EN → ES → RU → EN.
  const toggle = () =>
    setLang((l) => LANGS[(LANGS.indexOf(l) + 1) % LANGS.length])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY)
    if (stored && (LANGS as ReadonlyArray<string>).includes(stored)) {
      return stored as Lang
    }
  } catch {
    // localStorage unavailable — fall through to browser language.
  }
  const nav = window.navigator?.language?.toLowerCase() ?? ''
  if (nav.startsWith('ru')) return 'ru'
  if (nav.startsWith('es')) return 'es'
  return 'en'
}

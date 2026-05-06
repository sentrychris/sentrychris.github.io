import { useEffect, useState, type ReactNode } from 'react'
import {
  HTML_LANG_TAG,
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
    document.documentElement.setAttribute('lang', HTML_LANG_TAG[lang])
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang)
    } catch {
      // Quota exceeded / privacy mode — silently fall through.
    }
  }, [lang])

  // Cycle through the LANGS list in declaration order.
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

  // A previous explicit choice (via the toggle) wins — without this
  // the toggle wouldn't survive a reload.
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY)
    if (stored && (LANGS as ReadonlyArray<string>).includes(stored)) {
      return stored as Lang
    }
  } catch {
    // localStorage unavailable — fall through to browser language.
  }

  // First visit: walk the user's full browser-language preference list
  // (en-GB, en-US, ru-RU, …) and pick the first that we ship. Default
  // to English when none match.
  const candidates = [
    ...(window.navigator?.languages ?? []),
    window.navigator?.language ?? '',
  ]
  for (const candidate of candidates) {
    const tag = candidate.toLowerCase().split('-')[0]
    if ((LANGS as ReadonlyArray<string>).includes(tag)) {
      return tag as Lang
    }
  }
  return 'en'
}

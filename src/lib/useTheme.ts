import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'atlas-theme'

/**
 * useTheme — drives the data-theme attribute on <html>.
 *
 *  - Reads the stored preference from localStorage on first paint.
 *  - Falls back to the system colour-scheme preference if no stored
 *    value exists.
 *  - Persists every change so the choice sticks across reloads.
 *
 * Components reference colour tokens by name (in tokens.css both
 * `:root` and `[data-theme="dark"]` define the palette), so flipping
 * the attribute is enough to retheme the whole app.
 */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Quota exceeded / privacy mode — silently fall through.
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  return [theme, toggle]
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // localStorage unavailable — fall through to system preference.
  }
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

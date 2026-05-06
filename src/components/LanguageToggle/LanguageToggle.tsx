import { LANGS, useLanguage, type Lang } from '../../lib/useLanguage'
import styles from './LanguageToggle.module.css'

const LABELS: Record<Lang, { code: string; aria: string }> = {
  en: { code: 'EN', aria: 'Switch language to Spanish' },
  es: { code: 'ES', aria: 'Cambiar idioma a ruso' },
  ru: { code: 'RU', aria: 'Сменить язык на английский' },
}

/**
 * LanguageToggle — pill button mirroring the ThemeToggle in shape and
 * tone. Shows the current language code in accent ink alongside the
 * next code in mute. Click cycles English → Spanish → Russian → …
 * The active language drives the `lang` attribute on <html> via the
 * LanguageProvider.
 */
export function LanguageToggle() {
  const { lang, toggle } = useLanguage()
  const next: Lang = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-label={LABELS[lang].aria}
      title={LABELS[lang].aria}
    >
      <span className={styles.code} aria-hidden="true">
        {LABELS[lang].code}
      </span>
      <span className={styles.sep} aria-hidden="true">
        /
      </span>
      <span className={styles.codeMute} aria-hidden="true">
        {LABELS[next].code}
      </span>
    </button>
  )
}

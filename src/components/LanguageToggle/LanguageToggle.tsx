import { useEffect, useRef, useState } from 'react'
import { LANGS, useLanguage, type Lang } from '../../lib/useLanguage'
import styles from './LanguageToggle.module.css'

interface Label {
  /** Two-letter mono-caps code (e.g. "EN"). */
  code: string
  /** Native-script name shown in the dropdown rows. */
  name: string
  /** Emoji flag — falls back to two regional letters on platforms
   *  (notably Windows) that don't render flag glyphs. */
  flag: string
  /** Trigger button aria — translated so screen readers in each
   *  locale announce the picker correctly. */
  aria: string
  /** Mono-caps panel header — small "schedule"-style label inside
   *  the dropdown. Translated for the same reason as `aria`. */
  header: string
}

const LABELS: Record<Lang, Label> = {
  en: { code: 'EN', name: 'English',    flag: '🇬🇧', aria: 'Choose language',     header: 'Languages' },
  es: { code: 'ES', name: 'Español',    flag: '🇪🇸', aria: 'Elegir idioma',        header: 'Idiomas' },
  ru: { code: 'RU', name: 'Русский',    flag: '🇷🇺', aria: 'Выбрать язык',         header: 'Языки' },
  de: { code: 'DE', name: 'Deutsch',    flag: '🇩🇪', aria: 'Sprache wählen',       header: 'Sprachen' },
  fr: { code: 'FR', name: 'Français',   flag: '🇫🇷', aria: 'Choisir la langue',    header: 'Langues' },
  pt: { code: 'PT', name: 'Português',  flag: '🇧🇷', aria: 'Escolher idioma',      header: 'Idiomas' },
  pl: { code: 'PL', name: 'Polski',     flag: '🇵🇱', aria: 'Wybierz język',        header: 'Języki' },
  ro: { code: 'RO', name: 'Română',     flag: '🇷🇴', aria: 'Alege limba',          header: 'Limbi' },
  zh: { code: 'ZH', name: '简体中文',    flag: '🇨🇳', aria: '选择语言',              header: '语言' },
  ja: { code: 'JA', name: '日本語',      flag: '🇯🇵', aria: '言語を選ぶ',            header: '言語' },
  ko: { code: 'KO', name: '한국어',      flag: '🇰🇷', aria: '언어 선택',             header: '언어' },
}

/**
 * LanguageToggle — schematic language picker.
 *
 * The trigger is a pill mirroring ThemeToggle: flag glyph, mono-caps
 * code, chevron. Click opens a "schedule" panel — bordered card on
 * bone paper with a tick-rule header and a list of every locale, each
 * row showing flag, code, native name, and a compact row marker.
 * Active row is tinted in accent ink.
 *
 * Closes on outside click and Escape.
 */
export function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LABELS[lang]

  useEffect(() => {
    if (!open) return
    function onDocClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function pick(next: Lang) {
    setLang(next)
    setOpen(false)
  }

  return (
    <div ref={ref} className={styles.picker}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${styles.trigger} ${open ? styles.triggerOpen : ''}`}
        aria-label={current.aria}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.flag} aria-hidden="true">
          {current.flag}
        </span>
        <span className={styles.code} aria-hidden="true">
          {current.code}
        </span>
        <Chevron className={styles.chevron} />
      </button>

      {open && (
        <div className={styles.panel} role="listbox" aria-label={current.aria}>
          <div className={styles.header} aria-hidden="true">
            <span className={styles.headerTick} />
            <span className={styles.headerText}>{current.header}</span>
            <span className={styles.headerCount}>
              {String(LANGS.length).padStart(2, '0')}
            </span>
            <span className={styles.headerTick} />
          </div>

          <ul className={styles.list}>
            {LANGS.map((l) => {
              const item = LABELS[l]
              const active = l === lang
              return (
                <li key={l}>
                  <button
                    type="button"
                    onClick={() => pick(l)}
                    className={`${styles.item} ${active ? styles.itemActive : ''}`}
                    role="option"
                    aria-selected={active}
                  >
                    <span className={styles.itemFlag} aria-hidden="true">
                      {item.flag}
                    </span>
                    <span className={styles.itemCode}>{item.code}</span>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemMark} aria-hidden="true">
                      {active ? '✓' : '→'}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

/** Small chevron — rotates 180° when the panel is open. */
function Chevron({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 8"
      width="10"
      height="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1.5 2 L6 6.5 L10.5 2" />
    </svg>
  )
}

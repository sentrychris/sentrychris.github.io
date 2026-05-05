import { useTheme } from '../../lib/useTheme'
import styles from './ThemeToggle.module.css'

/**
 * ThemeToggle — sun/moon icon button that flips between Atlas's
 * light (cream + forest) and dark (forest + mint) palettes.
 *
 * Renders both icons stacked; CSS opacity-swaps between them based on
 * the `data-theme` attribute on <html>, so the visible icon matches
 * the current theme.
 */
export function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const next = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <span className={styles.iconStack} aria-hidden="true">
        <SunIcon className={styles.sun} />
        <MoonIcon className={styles.moon} />
      </span>
    </button>
  )
}

function SunIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  )
}

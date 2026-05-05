import { TECH_ICONS } from '../../lib/tech-icons'
import styles from './DevIcon.module.css'

export interface DevIconProps {
  /** Tech name — must match a key in TECH_ICONS exactly. */
  name: string
  /** Pixel size for both width and height. Default 14. */
  size?: number
}

/**
 * DevIcon — looks up a tech name in the devicon SVG registry and
 * renders it as an <img>. Returns null when the name has no entry,
 * so callers can pass any tech string without a guard.
 */
export function DevIcon({ name, size = 14 }: DevIconProps) {
  const src = TECH_ICONS[name]
  if (!src) return null
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={styles.icon}
      loading="lazy"
      decoding="async"
    />
  )
}

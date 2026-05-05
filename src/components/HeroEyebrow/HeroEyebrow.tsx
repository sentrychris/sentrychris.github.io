import type { ReactNode } from 'react'
import styles from './HeroEyebrow.module.css'

export interface HeroEyebrowProps {
  /** Show a pulsing dot before the label. Default true. */
  dot?: boolean
  children: ReactNode
}

/**
 * HeroEyebrow — BRANDING.md §8.6.
 * The pulsing emerald badge that introduces the hero key phrase.
 * Pill-shaped, mono caps, glowing dot.
 */
export function HeroEyebrow({ dot = true, children }: HeroEyebrowProps) {
  return (
    <span className={styles.eyebrow}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  )
}

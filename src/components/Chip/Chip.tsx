import type { ReactNode } from 'react'
import styles from './Chip.module.css'

export type ChipVariant = 'live' | 'idle' | 'crit' | 'info' | 'neutral'

export interface ChipProps {
  variant?: ChipVariant
  /** Show a colored status dot before the label. */
  dot?: boolean
  children: ReactNode
}

const VARIANT_CLASSES: Record<ChipVariant, string> = {
  live: styles.live,
  idle: styles.idle,
  crit: styles.crit,
  info: styles.info,
  neutral: styles.neutral,
}

/**
 * Chip — BRANDING.md §8.4.
 * Tight, mono, all-caps, semantic-color block. The 'live' variant pulses.
 */
export function Chip({ variant = 'neutral', dot = false, children }: ChipProps) {
  return (
    <span className={`${styles.chip} ${VARIANT_CLASSES[variant]}`}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  )
}

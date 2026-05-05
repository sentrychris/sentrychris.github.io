import type { ReactNode } from 'react'
import styles from './Pill.module.css'

export interface PillProps {
  /** Optional leading icon — any inline node. */
  icon?: ReactNode
  children: ReactNode
}

/**
 * Pill — Atlas. Quiet mono pill with an optional leading icon slot.
 * Used sparingly in the editorial system — most metadata renders as
 * inline mono caps text instead.
 */
export function Pill({ icon, children }: PillProps) {
  return (
    <span className={styles.pill}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  )
}

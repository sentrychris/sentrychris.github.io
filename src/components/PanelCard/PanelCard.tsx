import type { ReactNode } from 'react'
import styles from './PanelCard.module.css'

export interface PanelCardProps {
  children: ReactNode
}

export interface PanelBodyProps {
  children: ReactNode
}

/**
 * PanelCard — BRANDING.md §8.2.
 * The workhorse content surface: rounded glass with backdrop blur,
 * faint blue-tinted border, soft-glass shadow, and a subtle hover lift.
 *
 * Compose with <PanelBody> for padded content, with <SectionHeader> + <PanelBody>
 * for the header-on-top pattern, or freely (no padding wrapper) for custom layouts.
 */
export function PanelCard({ children }: PanelCardProps) {
  return <div className={styles.panel}>{children}</div>
}

/**
 * PanelBody — padded inner wrapper for PanelCard content.
 * Padding matches branding.html: 0.95rem 1rem 1rem.
 */
export function PanelBody({ children }: PanelBodyProps) {
  return <div className={styles.body}>{children}</div>
}

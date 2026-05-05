import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonVariant = 'default' | 'primary'

interface BaseProps {
  variant?: ButtonVariant
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { href?: undefined }

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  default: styles.default,
  primary: styles.primary,
}

/**
 * Button — BRANDING.md §8.7.
 * Two variants only: default (ghost) and primary (blue→cyan gradient).
 * Renders as an <a> when href is supplied, otherwise a <button>.
 */
export function Button(props: ButtonProps) {
  const { variant = 'default', children, ...rest } = props
  const className = `${styles.btn} ${VARIANT_CLASSES[variant]}`

  if ('href' in rest && rest.href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={className} {...anchorProps}>
        {children}
      </a>
    )
  }
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={className} {...buttonProps}>
      {children}
    </button>
  )
}

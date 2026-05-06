/* Hero copy.
 * Voice: BRANDING.md §3 (plain, technical, confident, operator-tone).
 * The accent phrase renders inside the gradient text on the hero. */

import type { Lang } from '../lib/useLanguage'

export interface HeroCopy {
  eyebrow: string
  title: string
  /** Rendered with the cyan→blue→purple gradient. Used once per page. */
  accent: string
  lede: string
  ctas: ReadonlyArray<{
    label: string
    href: string
    variant: 'default' | 'primary'
  }>
  meta: ReadonlyArray<{ label: string; value: string }>
}

const en: HeroCopy = {
  eyebrow: 'AVAILABLE · LEAD/SENIOR ROLES & CONSULTING',
  title: '12+ years building',
  accent: 'beautiful web apps.',
  lede:
    'A highly-skilled Lead Developer with 12+ years of experience, in building, testing and maintaining software and web apps across a wide range of business sectors.',
  ctas: [
    { label: 'See work', href: '#work', variant: 'primary' },
    { label: 'Get in touch', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Years', value: '12+' },
    { label: 'Role', value: 'Lead Developer' },
    { label: 'Stack', value: 'Polyglot · web-first' },
  ],
}

const ru: HeroCopy = {
  eyebrow: 'ОТКРЫТ К ПРЕДЛОЖЕНИЯМ · LEAD/SENIOR РОЛИ И КОНСАЛТИНГ',
  title: '12+ лет создаю',
  accent: 'красивые веб-приложения.',
  lede:
    'Высококвалифицированный ведущий разработчик с более чем 12-летним опытом создания, тестирования и поддержки программного обеспечения и веб-приложений в различных бизнес-сферах.',
  ctas: [
    { label: 'Посмотреть работы', href: '#work', variant: 'primary' },
    { label: 'Связаться', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Лет', value: '12+' },
    { label: 'Роль', value: 'Ведущий разработчик' },
    { label: 'Стек', value: 'Полиглот · web-first' },
  ],
}

const es: HeroCopy = {
  eyebrow: 'DISPONIBLE · ROLES LEAD/SENIOR Y CONSULTORÍA',
  title: '12+ años creando',
  accent: 'aplicaciones web bonitas.',
  lede:
    'Lead Developer altamente cualificado con más de 12 años de experiencia construyendo, probando y manteniendo software y aplicaciones web en una amplia variedad de sectores.',
  ctas: [
    { label: 'Ver proyectos', href: '#work', variant: 'primary' },
    { label: 'Contactar', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Años', value: '12+' },
    { label: 'Rol', value: 'Lead Developer' },
    { label: 'Stack', value: 'Polígloto · web-first' },
  ],
}

export const hero: Record<Lang, HeroCopy> = { en, es, ru }

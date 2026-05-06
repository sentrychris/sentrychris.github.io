/* About — editorial.
 * Voice: declarative, plain, faintly poetic. Numbers earn their place.
 * Coordinates: London — tweak to whatever you actually want shown. */

import type { Lang } from '../lib/useLanguage'

export interface AboutCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  paragraphs: ReadonlyArray<string>
  /** Short statement-of-fact bullets shown as a side panel. */
  facts: ReadonlyArray<{ label: string; value: string }>
  /** Decorative coordinates — rendered as editorial metadata. */
  coordinates: string
  /** UI strings for the surrounding chrome (specifications header,
   *  signature flourish). Co-located so translators only touch one
   *  file per section. */
  ui: {
    specifications: string
    signatureBrand: string
    signatureYear: string
  }
}

const en: AboutCopy = {
  eyebrow: 'About',
  title: 'Software for',
  titleAccent: 'everyone.',
  lede: 'Comfortable owning systems end-to-end.',
  paragraphs: [
    'A proven track record of inheriting complex legacy systems, bringing them back up to standard, and shipping clean, well-tested code on top.',
    'Most of the work has been hands-on across the full stack: frontend, backend, and infrastructure. The rest has been leading teams through reviews, mentoring, and architectural decisions.',
    'I also ship things in my spare time.',
  ],
  facts: [
    { label: 'Based', value: 'United Kingdom' },
    { label: 'Role', value: 'Lead Developer' },
    { label: 'Years', value: '12+' },
    { label: 'Open to', value: 'Lead · Senior · Consulting' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Specifications',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

const ru: AboutCopy = {
  eyebrow: 'Обо мне',
  title: 'Программное обеспечение для',
  titleAccent: 'каждого.',
  lede: 'Уверенно владею системами от начала до конца.',
  paragraphs: [
    'Подтверждённый опыт принятия сложных legacy-систем, их приведения к современным стандартам и доставки поверх них чистого, хорошо протестированного кода.',
    'Большая часть работы — практическая, по всему стеку: фронтенд, бэкенд и инфраструктура. Остальное — руководство командами через ревью, менторство и архитектурные решения.',
    'В свободное время тоже выпускаю проекты.',
  ],
  facts: [
    { label: 'Локация', value: 'Великобритания' },
    { label: 'Роль', value: 'Ведущий разработчик' },
    { label: 'Лет', value: '12+' },
    { label: 'Открыт к', value: 'Lead · Senior · Консалтинг' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Характеристики',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

const es: AboutCopy = {
  eyebrow: 'Sobre mí',
  title: 'Software para',
  titleAccent: 'todos.',
  lede: 'Cómodo gestionando sistemas de principio a fin.',
  paragraphs: [
    'Trayectoria probada heredando sistemas legacy complejos, devolviéndolos al estándar y entregando código limpio y bien probado encima.',
    'La mayor parte del trabajo ha sido hands-on a lo largo de todo el stack: frontend, backend e infraestructura. El resto, liderando equipos mediante revisiones, mentoría y decisiones arquitectónicas.',
    'También saco proyectos en mi tiempo libre.',
  ],
  facts: [
    { label: 'Ubicación', value: 'Reino Unido' },
    { label: 'Rol', value: 'Lead Developer' },
    { label: 'Años', value: '12+' },
    { label: 'Abierto a', value: 'Lead · Senior · Consultoría' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Especificaciones',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const about: Record<Lang, AboutCopy> = { en, es, ru }

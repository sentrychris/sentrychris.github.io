/* Skills.
 * Edit freely — comprehensive list of modern web tech a senior dev
 * is likely to have touched. Trim to what you actually use day-to-day. */

import type { Lang } from '../lib/useLanguage'

/** Stable lookup key — the Skills section places groups by topology
 *  (tooling at top, infra at bottom, etc.) and the displayed `name`
 *  is localized, so we route layout decisions through `key` instead. */
export type SkillKey = 'tooling' | 'frontend' | 'backend' | 'data' | 'infra'

export interface SkillGroup {
  key: SkillKey
  name: string
  items: ReadonlyArray<string>
}

export interface SkillsCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  groups: ReadonlyArray<SkillGroup>
}

const en: SkillsCopy = {
  eyebrow: 'Skills',
  title: 'Stack and',
  titleAccent: 'tooling.',
  lede: 'Polyglot by necessity, opinionated by experience.',
  groups: [
    {
      key: 'frontend',
      name: 'Frontend',
      items: [
        'TypeScript',
        'React',
        'Next.js',
        'Vue 3',
        'Vite',
        'Sass',
        'Tailwind',
        'Bootstrap',
        'D3',
      ],
    },
    {
      key: 'backend',
      name: 'Backend',
      items: [
        'Node.js',
        'Python',
        'PHP',
        'Laravel',
        'REST',
        'WebSockets',
        'Tornado',
        'Express',
        'FastAPI',
      ],
    },
    {
      key: 'data',
      name: 'Data',
      items: [
        'PostgreSQL',
        'MySQL',
        'Redis',
        'SQLite',
        'MongoDB',
        'Elasticsearch',
      ],
    },
    {
      key: 'infra',
      name: 'Infra & Ops',
      items: [
        'Docker',
        'AWS',
        'Cloudflare',
        'Linux',
        'Nginx',
        'CI/CD',
        'GitHub Actions',
        'Terraform',
      ],
    },
    {
      key: 'tooling',
      name: 'Tooling',
      items: [
        'Git',
        'Jest',
        'Vitest',
        'Playwright',
        'ESLint',
        'Prettier',
        'pnpm',
      ],
    },
  ],
}

const ru: SkillsCopy = {
  eyebrow: 'Навыки',
  title: 'Стек и',
  titleAccent: 'инструменты.',
  lede: 'Полиглот по необходимости, со своим мнением — от опыта.',
  groups: [
    {
      key: 'frontend',
      name: 'Фронтенд',
      items: [
        'TypeScript',
        'React',
        'Next.js',
        'Vue 3',
        'Vite',
        'Sass',
        'Tailwind',
        'Bootstrap',
        'D3',
      ],
    },
    {
      key: 'backend',
      name: 'Бэкенд',
      items: [
        'Node.js',
        'Python',
        'PHP',
        'Laravel',
        'REST',
        'WebSockets',
        'Tornado',
        'Express',
        'FastAPI',
      ],
    },
    {
      key: 'data',
      name: 'Данные',
      items: [
        'PostgreSQL',
        'MySQL',
        'Redis',
        'SQLite',
        'MongoDB',
        'Elasticsearch',
      ],
    },
    {
      key: 'infra',
      name: 'Инфра и DevOps',
      items: [
        'Docker',
        'AWS',
        'Cloudflare',
        'Linux',
        'Nginx',
        'CI/CD',
        'GitHub Actions',
        'Terraform',
      ],
    },
    {
      key: 'tooling',
      name: 'Инструменты',
      items: [
        'Git',
        'Jest',
        'Vitest',
        'Playwright',
        'ESLint',
        'Prettier',
        'pnpm',
      ],
    },
  ],
}

const es: SkillsCopy = {
  eyebrow: 'Habilidades',
  title: 'Stack y',
  titleAccent: 'herramientas.',
  lede: 'Polígloto por necesidad, opinado por experiencia.',
  groups: [
    {
      key: 'frontend',
      name: 'Frontend',
      items: [
        'TypeScript',
        'React',
        'Next.js',
        'Vue 3',
        'Vite',
        'Sass',
        'Tailwind',
        'Bootstrap',
        'D3',
      ],
    },
    {
      key: 'backend',
      name: 'Backend',
      items: [
        'Node.js',
        'Python',
        'PHP',
        'Laravel',
        'REST',
        'WebSockets',
        'Tornado',
        'Express',
        'FastAPI',
      ],
    },
    {
      key: 'data',
      name: 'Datos',
      items: [
        'PostgreSQL',
        'MySQL',
        'Redis',
        'SQLite',
        'MongoDB',
        'Elasticsearch',
      ],
    },
    {
      key: 'infra',
      name: 'Infra y DevOps',
      items: [
        'Docker',
        'AWS',
        'Cloudflare',
        'Linux',
        'Nginx',
        'CI/CD',
        'GitHub Actions',
        'Terraform',
      ],
    },
    {
      key: 'tooling',
      name: 'Herramientas',
      items: [
        'Git',
        'Jest',
        'Vitest',
        'Playwright',
        'ESLint',
        'Prettier',
        'pnpm',
      ],
    },
  ],
}

export const skills: Record<Lang, SkillsCopy> = { en, es, ru }

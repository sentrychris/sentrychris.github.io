/* Skills.
 * Edit freely — comprehensive list of modern web tech a senior dev
 * is likely to have touched. Trim to what you actually use day-to-day. */

export interface SkillGroup {
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

export const skills: SkillsCopy = {
  eyebrow: 'Skills',
  title: 'Stack and',
  titleAccent: 'tooling.',
  lede:
    'Polyglot by necessity, opinionated by experience. The list is long because the years are long; the working set on any given engagement is much smaller.',
  groups: [
    {
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

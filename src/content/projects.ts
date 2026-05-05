/* Project showcase.
 * Each project renders as an Atlas "feature article" card with an
 * italic Playfair accent Nº marker, a 3:2 cover image, an Inter Tight
 * title, an Inter body summary, an inline mono-caps stack list, and a
 * primary/ghost button row. Drop new images in public/projects/. */

export interface Project {
  /** Short title shown above the frame. */
  title: string
  /** One-line summary in the address bar style. */
  summary: string
  /** Faux URL displayed in the browser frame's address bar. */
  url: string
  /** Image path under public/. */
  image: string
  /** Image alt text — required for accessibility. */
  alt: string
  /** Optional badge in the top-right of the bar. */
  badge?: string
  /** Tech stack chips. */
  stack: ReadonlyArray<string>
  /** External links — repo, live demo, etc. */
  links: ReadonlyArray<{ label: string; href: string }>
}

export interface ProjectsCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  projects: ReadonlyArray<Project>
}

export const projects: ProjectsCopy = {
  eyebrow: 'Selected work',
  title: 'A few things',
  titleAccent: 'shipped recently.',
  lede:
    'Most production work is under NDA, the open ones are below. Reach out for the rest.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'A lightweight, real-time monitoring dashboard for your servers. Live metrics streamed over WebSocket, gauges, charts, service probes - all in one polished UI that drops in front of Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil-dashboard.png',
      alt: 'Vigil dashboard — CPU, memory, disk and network charts streaming live.',
      badge: 'System Monitoring',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Try it', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'A simple, fast, and free online markdown editor with live preview rendering. Write, format, and export your markdown documents instantly to HTML or PDF. Built on top of Monaco which powers Visual Studio Code.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.png',
      alt: 'Placeholder screenshot — Vigil hub view, swap for project two.',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Try it', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'A dedicated project for fans of the game Elite Dangerous. A companion site powered by its own API. Data on ~100 million star systems is served at light speed. Data is sourced from communtiy tools and in-game journals. ',
      url: 'https://edcs.app',
      image: '/projects/edcs.png',
      alt: 'Placeholder screenshot — Vigil overview, swap for project three.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Try it', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
  ],
}

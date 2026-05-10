/* English dictionary.
 * One file per locale - keep keys aligned with the type definitions in
 * the feature files (`src/content/<feature>.ts`). To add a new locale,
 * copy this file as `<code>.ts` and translate the strings, then wire it
 * up in each feature aggregator. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'Home', spy: 'top' },
  { href: '#about', label: 'About', spy: 'about' },
  { href: '#skills', label: 'Skills', spy: 'skills' },
  { href: '#experience', label: 'Experience', spy: 'experience' },
  { href: '#work', label: 'Work', spy: 'work' },
  { href: '#contact', label: 'Contact', spy: 'contact' },
]

export const hero: HeroCopy = {
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

export const about: AboutCopy = {
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

export const skills: SkillsCopy = {
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

export const experience: ExperienceCopy = {
  eyebrow: 'Experience',
  title: 'Years of',
  titleAccent: 'experience.',
  lede: 'Reach out if you want the long version with references.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 - present',
      sectors: ['SaaS', 'Cybersecurity', 'Defence', 'NDA'],
      summary:
        'Development Lead on consumer platforms. Owning architecture decisions, running parallel teams, bringing legacy services up to standard while shipping new products.',
      points: [
        'Currently leading development of web platforms and services.',
        'Led the implementation of AI-assisted workflows to increase productivity.',
        'Shipped Armored Client, a major product surface that drove a significant portion of the company’s growth.',
      ],
    },
    {
      role: 'Principal Developer',
      company: 'Go Deploy Labs',
      period: '2020 - 2022',
      sectors: ['LMS', 'Virtual Labs', 'E-commerce', 'MCT'],
      summary:
        "Full-stack engineer across the estate. Enabled learners and mentors to run virtual labs for MCT and other certified courses. Principal Developer on Go Deploy's offerings.",
      points: [
        'Redesigned the virtual lab instruction interface to improve user experience.',
        'Unified RDP through Guacamole for seamless lab access and mentor support.',
        'Drove the shift to Vue 3, improving frontend performance and maintainability.',
      ],
    },
    {
      role: 'Founder',
      company: 'Versyx Digital',
      period: '2019 - present',
      sectors: ['Agency', 'Consulting', 'Development', 'Design'],
      summary:
        'Bespoke development agency focused on consultation, infrastructure and frontend for clients across sectors. We also build and contribute to open source projects.',
      points: [
        'Assisted clients in modernising their web applications, improving performance and scalability.',
        'Provided strategic consulting on web architecture and development best practices.',
        'Contributed to open source projects, enhancing tools and libraries used by the community.',
      ],
    },
  ],
  ui: {
    exhibits: 'Exhibits',
    sectors: 'Sectors',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: 'Selected work',
  title: 'Some of my',
  titleAccent: 'work.',
  lede:
    'Most production work is under NDA, the open ones are below. Reach out for the rest.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'A lightweight, real-time monitoring dashboard for your servers. Live metrics streamed over WebSocket, gauges, charts, service probes - all in one polished UI that drops in front of Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Vigil dashboard - CPU, memory, disk and network charts streaming live.',
      badge: 'System Monitoring',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Try it', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'ED:CS',
      summary:
        'A dedicated project for fans of the game Elite Dangerous. A companion site powered by its own API. Data on ~100 million star systems is served at light speed. Data is sourced from communtiy tools and in-game journals. ',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'Placeholder screenshot - Vigil overview, swap for project three.',
      badge: 'Companion App',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Try it', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'A simple, fast, and free online markdown editor with live preview rendering. Write, format, and export your markdown documents instantly to HTML or PDF. Built on top of Monaco which powers Visual Studio Code.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'Placeholder screenshot - Vigil hub view, swap for project two.',
      badge: 'Document Editing',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Try it', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'OMGLang',
      summary:
        'A small programming language built end-to-end - for fun, and to see how a compiler fits together. The OMG compiler is itself written in OMG. Native binaries through a Rust runtime; the same toolchain compiles to JavaScript for the in-browser playground.',
      url: 'https://omg-playground.edcs.app',
      image: '/projects/omg-playground.webp',
      alt: 'OMG playground - Fibonacci source on the left, stdout on the right.',
      badge: 'Programming Language',
      stack: ['Rust', 'OMG', 'JavaScript', 'Bytecode VM'],
      links: [
        { label: 'Try it', href: 'https://omg-playground.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/omglang' },
      ],
    },
  ],
  ui: {
    sheet: 'Sheet',
    sheetValue: 'A - Projects',
    plates: 'Plates',
    scale: 'Scale',
    scaleValue: '1:1 · MMXXVI',
    plate: 'Plate',
    openPlate: 'Open Plate',
    project: 'Project',
    type: 'Type',
    drawn: 'Drawn',
    drawnValue: 'MMXXVI',
    sheetOf: 'of',
    annexedPlates: 'Annexed Plates',
    plateIndex: 'Plate index',
    currentlyFeatured: (title) => `${title} - currently featured`,
    feature: (title) => `Feature ${title}`,
    stackOf: (title) => `${title} stack`,
  },
}

export const contact: ContactCopy = {
  eyebrow: 'Contact',
  title: 'Get in',
  titleAccent: 'touch.',
  lede:
    'Open to lead engineering roles, senior IC roles, and consulting. Quickest replies are by email; everything else also reaches me.',
  email: { user: 'christopher.rowles', domain: 'outlook.com' },
  methods: [
    {
      label: 'GitHub',
      display: 'github.com/sentrychris',
      href: 'https://github.com/sentrychris',
    },
    {
      label: 'LinkedIn',
      display: 'linkedin.com/in/chris-rowles',
      href: 'https://linkedin.com/in/chris-rowles',
    },
  ],
  ui: {
    invitationA: 'Pour a coffee.',
    invitationB: 'Send a line.',
    correspondence: 'Correspondence',
    emailLabel: 'Email',
    statusText: 'Open to work · Replies within a day',
    alsoReachable: 'Also reachable via',
    signatureThanks: 'Thanks,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'United Kingdom',
    signatureYear: 'MMXXVI',
  },
}

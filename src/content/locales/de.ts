/* German dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'Start', spy: 'top' },
  { href: '#about', label: 'Über mich', spy: 'about' },
  { href: '#skills', label: 'Fähigkeiten', spy: 'skills' },
  { href: '#experience', label: 'Erfahrung', spy: 'experience' },
  { href: '#work', label: 'Projekte', spy: 'work' },
  { href: '#contact', label: 'Kontakt', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: 'VERFÜGBAR · LEAD/SENIOR ROLLEN & BERATUNG',
  title: '12+ Jahre baue ich',
  accent: 'schöne Webanwendungen.',
  lede:
    'Erfahrener Lead Developer mit über 12 Jahren Erfahrung im Entwickeln, Testen und Warten von Software und Webanwendungen in einer Vielzahl von Branchen.',
  ctas: [
    { label: 'Projekte ansehen', href: '#work', variant: 'primary' },
    { label: 'Kontakt aufnehmen', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Jahre', value: '12+' },
    { label: 'Rolle', value: 'Lead Developer' },
    { label: 'Stack', value: 'Polyglott · web-first' },
  ],
}

export const about: AboutCopy = {
  eyebrow: 'Über mich',
  title: 'Software für',
  titleAccent: 'alle.',
  lede: 'Souverän im End-to-End-Betrieb von Systemen.',
  paragraphs: [
    'Nachweisliche Erfolge bei der Übernahme komplexer Legacy-Systeme, ihrer Rückführung auf den Stand der Technik und der Auslieferung sauberen, gut getesteten Codes darauf.',
    'Der Großteil der Arbeit war hands-on über den gesamten Stack: Frontend, Backend und Infrastruktur. Der Rest bestand aus Teamführung durch Code-Reviews, Mentoring und Architekturentscheidungen.',
    'In meiner Freizeit veröffentliche ich ebenfalls Projekte.',
  ],
  facts: [
    { label: 'Standort', value: 'Vereinigtes Königreich' },
    { label: 'Rolle', value: 'Lead Developer' },
    { label: 'Jahre', value: '12+' },
    { label: 'Offen für', value: 'Lead · Senior · Beratung' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Spezifikationen',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
  eyebrow: 'Fähigkeiten',
  title: 'Stack und',
  titleAccent: 'Werkzeuge.',
  lede: 'Polyglott aus Notwendigkeit, meinungsstark aus Erfahrung.',
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
      name: 'Daten',
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
      name: 'Werkzeuge',
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
  eyebrow: 'Erfahrung',
  title: 'Jahre',
  titleAccent: 'Erfahrung.',
  lede: 'Melde dich, wenn du die ausführliche Version mit Referenzen möchtest.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 — heute',
      sectors: ['SaaS', 'Cybersicherheit', 'Verteidigung', 'NDA'],
      summary:
        'Development Lead für Consumer-Plattformen. Verantwortlich für Architekturentscheidungen, leite parallele Teams und bringe Legacy-Services auf Standard, während ich neue Produkte ausliefere.',
      points: [
        'Leite derzeit die Entwicklung von Webplattformen und Services.',
        'Habe die Einführung von KI-gestützten Workflows zur Produktivitätssteigerung geleitet.',
        'Habe Armored Client ausgeliefert — eine zentrale Produktoberfläche, die einen erheblichen Teil des Unternehmenswachstums getragen hat.',
      ],
    },
    {
      role: 'Principal Developer',
      company: 'Go Deploy Labs',
      period: '2020 — 2022',
      sectors: ['LMS', 'Virtuelle Labs', 'E-Commerce', 'MCT'],
      summary:
        'Full-Stack-Engineer über das gesamte Produkt. Habe Lernenden und Mentoren ermöglicht, virtuelle Labs für MCT und andere zertifizierte Kurse zu betreiben. Principal Developer für Go Deploys Angebote.',
      points: [
        'Habe die Bedienoberfläche der virtuellen Labs neu gestaltet, um die Nutzererfahrung zu verbessern.',
        'Habe RDP über Guacamole vereinheitlicht, für nahtlosen Zugriff auf Labs und Mentoren-Support.',
        'Habe die Migration auf Vue 3 vorangetrieben und so Performance und Wartbarkeit des Frontends verbessert.',
      ],
    },
    {
      role: 'Gründer',
      company: 'Versyx Digital',
      period: '2019 — heute',
      sectors: ['Agentur', 'Beratung', 'Entwicklung', 'Design'],
      summary:
        'Maßgeschneiderte Entwicklungs-Boutique mit Fokus auf Beratung, Infrastruktur und Frontend für Kunden aus verschiedenen Branchen. Wir bauen und unterstützen außerdem Open-Source-Projekte.',
      points: [
        'Habe Kunden bei der Modernisierung ihrer Webanwendungen unterstützt und Performance sowie Skalierbarkeit verbessert.',
        'Habe strategische Beratung zu Web-Architektur und Best Practices der Entwicklung geleistet.',
        'Habe zu Open-Source-Projekten beigetragen und Werkzeuge sowie Bibliotheken der Community verbessert.',
      ],
    },
  ],
  ui: {
    exhibits: 'Beispiele',
    sectors: 'Branchen',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: 'Ausgewählte Arbeiten',
  title: 'Einige meiner',
  titleAccent: 'Projekte.',
  lede:
    'Der Großteil der Produktionsarbeit unterliegt einem NDA — die offenen Projekte sind unten. Schreib mich für den Rest an.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'Ein leichtgewichtiges Echtzeit-Monitoring-Dashboard für deine Server. Live-Metriken über WebSocket, Anzeigen, Charts, Service-Probes — alles in einer aufgeräumten Oberfläche, die vor Vigil Collector läuft.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Vigil-Dashboard — CPU-, Speicher-, Festplatten- und Netzwerk-Charts in Echtzeit.',
      badge: 'System-Monitoring',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Ausprobieren', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'Ein einfacher, schneller und kostenloser Online-Markdown-Editor mit Live-Vorschau. Schreibe, formatiere und exportiere deine Markdown-Dokumente sofort als HTML oder PDF. Aufgebaut auf Monaco — der Engine, die auch in Visual Studio Code läuft.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'Platzhalter-Screenshot — Vigil-Hub-Ansicht, durch Bild des zweiten Projekts ersetzen.',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Ausprobieren', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'Ein Projekt für Fans des Spiels Elite Dangerous — eine Begleit-Site mit eigener API. Daten zu ~100 Millionen Sternensystemen werden in Lichtgeschwindigkeit ausgeliefert, gespeist aus Community-Tools und In-Game-Logbüchern.',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'Platzhalter-Screenshot — Vigil-Übersicht, durch Bild des dritten Projekts ersetzen.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Ausprobieren', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
  ],
  ui: {
    sheet: 'Blatt',
    sheetValue: 'A — Projekte',
    plates: 'Tafeln',
    scale: 'Maßstab',
    scaleValue: '1:1 · MMXXVI',
    plate: 'Tafel',
    openPlate: 'Öffnen',
    project: 'Projekt',
    type: 'Typ',
    drawn: 'Gezeichnet',
    drawnValue: 'MMXXVI',
    sheetOf: 'von',
    annexedPlates: 'Anhang-Tafeln',
    plateIndex: 'Tafel-Index',
    currentlyFeatured: (title) => `${title} — derzeit hervorgehoben`,
    feature: (title) => `${title} hervorheben`,
    stackOf: (title) => `${title} Stack`,
  },
}

export const contact: ContactCopy = {
  eyebrow: 'Kontakt',
  title: 'Sag',
  titleAccent: 'Hallo.',
  lede:
    'Offen für Lead-Engineering-Rollen, Senior-IC-Rollen und Beratung. Am schnellsten antworte ich per E-Mail; alle anderen Kanäle erreichen mich aber auch.',
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
    invitationA: 'Koch dir einen Kaffee.',
    invitationB: 'Schreib mir eine Zeile.',
    correspondence: 'Korrespondenz',
    emailLabel: 'E-Mail',
    statusText: 'Offen für Angebote · Antwort innerhalb eines Tages',
    alsoReachable: 'Auch erreichbar über',
    signatureThanks: 'Danke,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Vereinigtes Königreich',
    signatureYear: 'MMXXVI',
  },
}

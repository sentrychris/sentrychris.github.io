/* Romanian dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'Acasă', spy: 'top' },
  { href: '#about', label: 'Despre', spy: 'about' },
  { href: '#skills', label: 'Abilități', spy: 'skills' },
  { href: '#experience', label: 'Experiență', spy: 'experience' },
  { href: '#work', label: 'Proiecte', spy: 'work' },
  { href: '#contact', label: 'Contact', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: 'DISPONIBIL · ROLURI LEAD/SENIOR & CONSULTANȚĂ',
  title: '12+ ani construind',
  accent: 'aplicații web frumoase.',
  lede:
    'Lead Developer cu peste 12 ani de experiență în construirea, testarea și mentenanța aplicațiilor și produselor software pentru o gamă largă de industrii.',
  ctas: [
    { label: 'Vezi proiectele', href: '#work', variant: 'primary' },
    { label: 'Ia legătura', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Ani', value: '12+' },
    { label: 'Rol', value: 'Lead Developer' },
    { label: 'Stack', value: 'Poliglot · web-first' },
  ],
}

export const about: AboutCopy = {
  eyebrow: 'Despre',
  title: 'Software pentru',
  titleAccent: 'toată lumea.',
  lede: 'În largul meu când dețin sisteme cap-coadă.',
  paragraphs: [
    'Istoric solid în preluarea unor sisteme legacy complexe, aducerea lor înapoi la standard și livrarea de cod curat și bine testat peste ele.',
    'Cea mai mare parte a muncii a fost hands-on pe tot stack-ul: frontend, backend și infrastructură. Restul a însemnat conducerea echipelor prin code review, mentorat și decizii de arhitectură.',
    'Lansez proiecte și în timpul liber.',
  ],
  facts: [
    { label: 'Locație', value: 'Regatul Unit' },
    { label: 'Rol', value: 'Lead Developer' },
    { label: 'Ani', value: '12+' },
    { label: 'Deschis la', value: 'Lead · Senior · Consultanță' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Specificații',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
  eyebrow: 'Abilități',
  title: 'Stack și',
  titleAccent: 'unelte.',
  lede: 'Poliglot din necesitate, cu opinii forjate de experiență.',
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
      name: 'Date',
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
      name: 'Unelte',
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
  eyebrow: 'Experiență',
  title: 'Ani de',
  titleAccent: 'experiență.',
  lede: 'Scrie-mi dacă vrei versiunea lungă cu referințe.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 — prezent',
      sectors: ['SaaS', 'Securitate cibernetică', 'Apărare', 'NDA'],
      summary:
        'Lead de dezvoltare pe platforme pentru consumatori. Răspund de deciziile de arhitectură, conduc echipe în paralel și aduc serviciile legacy la standard în timp ce livrez produse noi.',
      points: [
        'În prezent conduc dezvoltarea platformelor și serviciilor web.',
        'Am condus implementarea fluxurilor asistate de AI pentru creșterea productivității.',
        'Am livrat Armored Client, o suprafață de produs care a susținut o parte semnificativă din creșterea companiei.',
      ],
    },
    {
      role: 'Principal Developer',
      company: 'Go Deploy Labs',
      period: '2020 — 2022',
      sectors: ['LMS', 'Laboratoare virtuale', 'E-commerce', 'MCT'],
      summary:
        'Inginer full-stack pe tot ecosistemul. Am permis cursanților și mentorilor să ruleze laboratoare virtuale pentru MCT și alte cursuri certificate. Principal Developer pe ofertele Go Deploy.',
      points: [
        'Am redesenat interfața de instrucțiuni a laboratoarelor virtuale, pentru o experiență mai bună.',
        'Am unificat RDP prin Guacamole, pentru acces fluent la laboratoare și suport pentru mentori.',
        'Am condus migrarea la Vue 3, îmbunătățind performanța și mentenabilitatea frontendului.',
      ],
    },
    {
      role: 'Fondator',
      company: 'Versyx Digital',
      period: '2019 — prezent',
      sectors: ['Agenție', 'Consultanță', 'Dezvoltare', 'Design'],
      summary:
        'Studio de dezvoltare la comandă, axat pe consultanță, infrastructură și frontend pentru clienți din diverse industrii. Construim și contribuim și la proiecte open source.',
      points: [
        'Am ajutat clienți să își modernizeze aplicațiile web, îmbunătățind performanța și scalabilitatea.',
        'Am oferit consultanță strategică pe arhitectură web și bune practici de dezvoltare.',
        'Am contribuit la proiecte open source, îmbunătățind unelte și biblioteci folosite de comunitate.',
      ],
    },
  ],
  ui: {
    exhibits: 'Realizări',
    sectors: 'Industrii',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: 'Lucrări selectate',
  title: 'Câteva dintre',
  titleAccent: 'proiectele mele.',
  lede:
    'Cea mai mare parte a muncii în producție este sub NDA — proiectele deschise sunt mai jos. Scrie-mi pentru restul.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'Un dashboard ușor de monitorizare în timp real pentru serverele tale. Metrici live transmise prin WebSocket — indicatoare, grafice, sonde de servicii — toate într-un UI îngrijit care rulează în fața Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Dashboard Vigil — grafice CPU, memorie, disc și rețea în timp real.',
      badge: 'Monitorizare sisteme',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Încearcă', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'Un editor markdown online simplu, rapid și gratuit cu previzualizare live. Scrie, formatează și exportă instant documentele tale în HTML sau PDF. Construit pe Monaco — motorul care alimentează Visual Studio Code.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'Captură placeholder — vedere Vigil, de înlocuit cu al doilea proiect.',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Încearcă', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'Un proiect dedicat fanilor jocului Elite Dangerous — un site companion alimentat de propriul API. Date despre ~100 de milioane de sisteme stelare livrate cu viteza luminii, din unelte ale comunității și jurnale din joc.',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'Captură placeholder — vedere generală Vigil, de înlocuit cu al treilea proiect.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Încearcă', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
    {
      title: 'OMG',
      summary:
        'Un mic limbaj de programare construit de la cap la coadă — pentru distracție și pentru a vedea cum se îmbină un compilator. Compilatorul OMG este el însuși scris în OMG. Binare native printr-un runtime Rust; aceeași toolchain compilează către JavaScript pentru playground-ul din browser.',
      url: 'https://omg-playground.edcs.app',
      image: '/projects/omg-playground.webp',
      alt: 'Playground OMG — sursă Fibonacci în stânga, stdout în dreapta.',
      badge: 'Limbaj de programare',
      stack: ['Rust', 'OMG', 'JavaScript', 'VM bytecode'],
      links: [
        { label: 'Încearcă', href: 'https://omg-playground.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/omglang' },
      ],
    },
  ],
  ui: {
    sheet: 'Foaie',
    sheetValue: 'A — Proiecte',
    plates: 'Planșe',
    scale: 'Scală',
    scaleValue: '1:1 · MMXXVI',
    plate: 'Planșă',
    openPlate: 'Deschide',
    project: 'Proiect',
    type: 'Tip',
    drawn: 'Desenat',
    drawnValue: 'MMXXVI',
    sheetOf: 'din',
    annexedPlates: 'Planșe anexate',
    plateIndex: 'Index planșe',
    currentlyFeatured: (title) => `${title} — în prim-plan acum`,
    feature: (title) => `Adu ${title} în prim-plan`,
    stackOf: (title) => `Stack-ul pentru ${title}`,
  },
}

export const contact: ContactCopy = {
  eyebrow: 'Contact',
  title: 'Hai să',
  titleAccent: 'vorbim.',
  lede:
    'Deschis la roluri de lead engineering, senior IC și consultanță. Cel mai rapid răspund pe email; restul canalelor ajung tot la mine.',
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
    invitationA: 'Toarnă-ți o cafea.',
    invitationB: 'Trimite-mi un rând.',
    correspondence: 'Corespondență',
    emailLabel: 'Email',
    statusText: 'Deschis la oferte · Răspund în maxim o zi',
    alsoReachable: 'Mă găsești și pe',
    signatureThanks: 'Mulțumesc,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Regatul Unit',
    signatureYear: 'MMXXVI',
  },
}

/* Polish dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'Start', spy: 'top' },
  { href: '#about', label: 'O mnie', spy: 'about' },
  { href: '#skills', label: 'Umiejętności', spy: 'skills' },
  { href: '#experience', label: 'Doświadczenie', spy: 'experience' },
  { href: '#work', label: 'Projekty', spy: 'work' },
  { href: '#contact', label: 'Kontakt', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: 'DOSTĘPNY · ROLE LEAD/SENIOR I KONSULTING',
  title: '12+ lat tworzę',
  accent: 'piękne aplikacje webowe.',
  lede:
    'Doświadczony Lead Developer z ponad 12-letnim doświadczeniem w budowaniu, testowaniu i utrzymaniu oprogramowania oraz aplikacji webowych w wielu branżach.',
  ctas: [
    { label: 'Zobacz projekty', href: '#work', variant: 'primary' },
    { label: 'Skontaktuj się', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Lat', value: '12+' },
    { label: 'Rola', value: 'Lead Developer' },
    { label: 'Stack', value: 'Poliglota · web-first' },
  ],
}

export const about: AboutCopy = {
  eyebrow: 'O mnie',
  title: 'Oprogramowanie dla',
  titleAccent: 'wszystkich.',
  lede: 'Pewnie prowadzę systemy od początku do końca.',
  paragraphs: [
    'Sprawdzone doświadczenie w przejmowaniu skomplikowanych systemów legacy, przywracaniu ich do standardu i dostarczaniu czystego, dobrze przetestowanego kodu na ich bazie.',
    'Większość pracy to praktyka po całym stacku: frontend, backend i infrastruktura. Reszta to prowadzenie zespołów przez code review, mentoring i decyzje architektoniczne.',
    'Wypuszczam też projekty po godzinach.',
  ],
  facts: [
    { label: 'Lokalizacja', value: 'Wielka Brytania' },
    { label: 'Rola', value: 'Lead Developer' },
    { label: 'Lat', value: '12+' },
    { label: 'Otwarty na', value: 'Lead · Senior · Konsulting' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Specyfikacja',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
  eyebrow: 'Umiejętności',
  title: 'Stack i',
  titleAccent: 'narzędzia.',
  lede: 'Poliglota z konieczności, z opiniami wykutymi w doświadczeniu.',
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
      name: 'Dane',
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
      name: 'Infra & DevOps',
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
      name: 'Narzędzia',
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
  eyebrow: 'Doświadczenie',
  title: 'Lata',
  titleAccent: 'doświadczenia.',
  lede: 'Napisz, jeśli chcesz dłuższą wersję z referencjami.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 — obecnie',
      sectors: ['SaaS', 'Cyberbezpieczeństwo', 'Obronność', 'NDA'],
      summary:
        'Lead rozwoju platform konsumenckich. Odpowiadam za decyzje architektoniczne, prowadzę równoległe zespoły, doprowadzam serwisy legacy do standardu i jednocześnie wypuszczam nowe produkty.',
      points: [
        'Obecnie prowadzę rozwój platform i serwisów webowych.',
        'Wprowadziłem przepływy wspomagane przez AI, podnosząc produktywność.',
        'Wydałem Armored Client — kluczową powierzchnię produktową, która odpowiadała za znaczną część wzrostu firmy.',
      ],
    },
    {
      role: 'Principal Developer',
      company: 'Go Deploy Labs',
      period: '2020 — 2022',
      sectors: ['LMS', 'Wirtualne laboratoria', 'E-commerce', 'MCT'],
      summary:
        'Inżynier full-stack przez całe portfolio. Umożliwiłem uczącym się i mentorom uruchamianie wirtualnych laboratoriów dla MCT i innych certyfikowanych kursów. Principal Developer ofert Go Deploy.',
      points: [
        'Przeprojektowałem interfejs instrukcji wirtualnych laboratoriów, poprawiając doświadczenie użytkownika.',
        'Ujednoliciłem RDP przez Guacamole, zapewniając płynny dostęp do laboratoriów i wsparcie mentorów.',
        'Poprowadziłem migrację na Vue 3, poprawiając wydajność i utrzymywalność frontendu.',
      ],
    },
    {
      role: 'Założyciel',
      company: 'Versyx Digital',
      period: '2019 — obecnie',
      sectors: ['Agencja', 'Konsulting', 'Programowanie', 'Design'],
      summary:
        'Butikowe studio rozwoju oprogramowania skupione na konsultingu, infrastrukturze i frontendzie dla klientów z różnych branż. Tworzymy też i wspieramy projekty open source.',
      points: [
        'Pomogłem klientom zmodernizować ich aplikacje webowe, poprawiając wydajność i skalowalność.',
        'Świadczyłem strategiczny konsulting w zakresie architektury webowej i dobrych praktyk programistycznych.',
        'Współtworzyłem projekty open source, ulepszając narzędzia i biblioteki używane przez społeczność.',
      ],
    },
  ],
  ui: {
    exhibits: 'Osiągnięcia',
    sectors: 'Branże',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: 'Wybrane prace',
  title: 'Niektóre z moich',
  titleAccent: 'projektów.',
  lede:
    'Większość pracy produkcyjnej jest pod NDA — projekty otwarte poniżej. Resztę pokażę na zapytanie.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'Lekki, działający w czasie rzeczywistym dashboard monitoringu serwerów. Metryki na żywo przez WebSocket — wskaźniki, wykresy, próby usług — wszystko w jednym dopracowanym UI, które działa przed Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Dashboard Vigil — wykresy CPU, pamięci, dysku i sieci na żywo.',
      badge: 'Monitoring systemów',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Wypróbuj', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'Prosty, szybki i darmowy edytor markdown online z podglądem na żywo. Pisz, formatuj i eksportuj swoje dokumenty natychmiast do HTML lub PDF. Zbudowany na Monaco — silniku napędzającym Visual Studio Code.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'Zrzut zastępczy — widok Vigil, do podmiany na drugi projekt.',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Wypróbuj', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'Projekt dla fanów gry Elite Dangerous — strona-towarzysz z własnym API. Dane o ~100 milionach systemów gwiezdnych dostarczane z prędkością światła, źródła to narzędzia społeczności i wewnątrzgrowe dzienniki.',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'Zrzut zastępczy — przegląd Vigil, do podmiany na trzeci projekt.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Wypróbuj', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
  ],
  ui: {
    sheet: 'Arkusz',
    sheetValue: 'A — Projekty',
    plates: 'Plansze',
    scale: 'Skala',
    scaleValue: '1:1 · MMXXVI',
    plate: 'Plansza',
    openPlate: 'Otwórz',
    project: 'Projekt',
    type: 'Typ',
    drawn: 'Narysowano',
    drawnValue: 'MMXXVI',
    sheetOf: 'z',
    annexedPlates: 'Plansze dodatkowe',
    plateIndex: 'Indeks plansz',
    currentlyFeatured: (title) => `${title} — aktualnie wyróżniony`,
    feature: (title) => `Wyróżnij ${title}`,
    stackOf: (title) => `Stack projektu ${title}`,
  },
}

export const contact: ContactCopy = {
  eyebrow: 'Kontakt',
  title: 'Bądźmy',
  titleAccent: 'w kontakcie.',
  lede:
    'Otwarty na role lead engineering, senior IC i konsulting. Najszybciej odpowiadam mailowo; reszta kanałów też do mnie dociera.',
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
    invitationA: 'Zaparz kawę.',
    invitationB: 'Napisz parę słów.',
    correspondence: 'Korespondencja',
    emailLabel: 'E-mail',
    statusText: 'Otwarty na oferty · Odpowiadam w ciągu doby',
    alsoReachable: 'Również dostępny przez',
    signatureThanks: 'Dzięki,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Wielka Brytania',
    signatureYear: 'MMXXVI',
  },
}

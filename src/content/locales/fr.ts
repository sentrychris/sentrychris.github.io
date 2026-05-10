/* French dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'Accueil', spy: 'top' },
  { href: '#about', label: 'À propos', spy: 'about' },
  { href: '#skills', label: 'Compétences', spy: 'skills' },
  { href: '#experience', label: 'Expérience', spy: 'experience' },
  { href: '#work', label: 'Projets', spy: 'work' },
  { href: '#contact', label: 'Contact', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: 'DISPONIBLE · POSTES LEAD/SENIOR & CONSEIL',
  title: '12+ ans à construire',
  accent: 'de belles applis web.',
  lede:
    'Lead Developer hautement qualifié avec plus de 12 ans d’expérience dans la conception, les tests et la maintenance de logiciels et d’applications web pour de nombreux secteurs.',
  ctas: [
    { label: 'Voir les projets', href: '#work', variant: 'primary' },
    { label: 'Me contacter', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Années', value: '12+' },
    { label: 'Rôle', value: 'Lead Developer' },
    { label: 'Stack', value: 'Polyglotte · web-first' },
  ],
}

export const about: AboutCopy = {
  eyebrow: 'À propos',
  title: 'Du logiciel pour',
  titleAccent: 'tout le monde.',
  lede: 'À l’aise pour piloter des systèmes de bout en bout.',
  paragraphs: [
    'Antécédents avérés : reprendre des systèmes legacy complexes, les remettre au niveau et livrer du code propre et bien testé par-dessus.',
    'L’essentiel du travail a été pratique sur tout le stack : frontend, backend et infrastructure. Le reste, encadrer des équipes via les revues, le mentorat et les décisions d’architecture.',
    'Je publie aussi des projets sur mon temps libre.',
  ],
  facts: [
    { label: 'Basé', value: 'Royaume-Uni' },
    { label: 'Rôle', value: 'Lead Developer' },
    { label: 'Années', value: '12+' },
    { label: 'Ouvert à', value: 'Lead · Senior · Conseil' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Spécifications',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
  eyebrow: 'Compétences',
  title: 'Stack et',
  titleAccent: 'outils.',
  lede: 'Polyglotte par nécessité, avec des opinions forgées par l’expérience.',
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
      name: 'Données',
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
      name: 'Outils',
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
  eyebrow: 'Expérience',
  title: 'Années',
  titleAccent: 'd’expérience.',
  lede: 'Écris-moi si tu veux la version détaillée avec références.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 — aujourd’hui',
      sectors: ['SaaS', 'Cybersécurité', 'Défense', 'NDA'],
      summary:
        'Lead développement sur des plateformes grand public. En charge des décisions d’architecture, je pilote plusieurs équipes en parallèle et remets les services legacy au niveau tout en livrant de nouveaux produits.',
      points: [
        'Pilote actuellement le développement des plateformes web et services.',
        'Ai mené la mise en place de workflows assistés par IA pour gagner en productivité.',
        'Ai livré Armored Client, une surface produit clé qui a porté une part significative de la croissance de l’entreprise.',
      ],
    },
    {
      role: 'Principal Developer',
      company: 'Go Deploy Labs',
      period: '2020 — 2022',
      sectors: ['LMS', 'Labs virtuels', 'E-commerce', 'MCT'],
      summary:
        'Ingénieur full-stack sur tout le périmètre. Ai permis aux apprenants et mentors de lancer des labs virtuels pour MCT et autres parcours certifiants. Principal Developer sur les offres de Go Deploy.',
      points: [
        'Ai redessiné l’interface d’instructions des labs virtuels pour améliorer l’expérience utilisateur.',
        'Ai unifié RDP via Guacamole pour un accès aux labs et un support des mentors sans friction.',
        'Ai porté la migration vers Vue 3, améliorant les performances et la maintenabilité du frontend.',
      ],
    },
    {
      role: 'Fondateur',
      company: 'Versyx Digital',
      period: '2019 — aujourd’hui',
      sectors: ['Agence', 'Conseil', 'Développement', 'Design'],
      summary:
        'Studio de développement sur mesure axé sur le conseil, l’infrastructure et le frontend pour des clients de tous secteurs. Nous construisons et contribuons aussi à des projets open source.',
      points: [
        'Ai accompagné des clients dans la modernisation de leurs applications web, en améliorant performance et scalabilité.',
        'Ai fourni du conseil stratégique sur l’architecture web et les bonnes pratiques de développement.',
        'Ai contribué à des projets open source, en améliorant des outils et bibliothèques utilisés par la communauté.',
      ],
    },
  ],
  ui: {
    exhibits: 'Réalisations',
    sectors: 'Secteurs',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: 'Travaux sélectionnés',
  title: 'Quelques-uns de mes',
  titleAccent: 'projets.',
  lede:
    'L’essentiel du travail en production est sous NDA — les projets ouverts sont ci-dessous. Écris-moi pour le reste.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'Un tableau de bord de monitoring serveur léger et en temps réel. Métriques en direct via WebSocket — jauges, graphiques, sondes de service — le tout dans une UI soignée qui s’installe devant Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Tableau de bord Vigil — graphiques CPU, mémoire, disque et réseau en direct.',
      badge: 'Monitoring système',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Essayer', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'Un éditeur Markdown en ligne simple, rapide et gratuit avec aperçu en direct. Écris, formate et exporte tes documents au format HTML ou PDF en un instant. Bâti sur Monaco — le moteur qui anime Visual Studio Code.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'Capture d’écran de remplacement — vue Vigil, à remplacer par le second projet.',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Essayer', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'Un projet dédié aux fans du jeu Elite Dangerous — un site compagnon propulsé par sa propre API. Données sur ~100 millions de systèmes stellaires servies à la vitesse de la lumière, alimentées par les outils de la communauté et les journaux du jeu.',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'Capture d’écran de remplacement — aperçu Vigil, à remplacer par le troisième projet.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Essayer', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
    {
      title: 'OMG',
      summary:
        'Un petit langage de programmation construit de bout en bout — pour le plaisir, et pour voir comment un compilateur s’assemble. Le compilateur d’OMG est lui-même écrit en OMG. Binaires natifs via un runtime Rust ; la même toolchain compile vers JavaScript pour le playground en navigateur.',
      url: 'https://omg-playground.edcs.app',
      image: '/projects/omg-playground.webp',
      alt: 'Playground OMG — source Fibonacci à gauche, stdout à droite.',
      badge: 'Langage de programmation',
      stack: ['Rust', 'OMG', 'JavaScript', 'VM bytecode'],
      links: [
        { label: 'Essayer', href: 'https://omg-playground.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/omglang' },
      ],
    },
  ],
  ui: {
    sheet: 'Feuille',
    sheetValue: 'A — Projets',
    plates: 'Planches',
    scale: 'Échelle',
    scaleValue: '1:1 · MMXXVI',
    plate: 'Planche',
    openPlate: 'Ouvrir',
    project: 'Projet',
    type: 'Type',
    drawn: 'Dessiné',
    drawnValue: 'MMXXVI',
    sheetOf: 'sur',
    annexedPlates: 'Planches annexes',
    plateIndex: 'Index des planches',
    currentlyFeatured: (title) => `${title} — actuellement en vedette`,
    feature: (title) => `Mettre ${title} en vedette`,
    stackOf: (title) => `Stack de ${title}`,
  },
}

export const contact: ContactCopy = {
  eyebrow: 'Contact',
  title: 'On reste',
  titleAccent: 'en contact.',
  lede:
    'Ouvert aux postes de lead engineering, aux postes senior IC et au conseil. Je réponds plus vite par e-mail ; les autres canaux fonctionnent aussi.',
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
    invitationA: 'Sers-toi un café.',
    invitationB: 'Écris-moi un mot.',
    correspondence: 'Correspondance',
    emailLabel: 'E-mail',
    statusText: 'Ouvert aux opportunités · Réponse sous un jour',
    alsoReachable: 'Également joignable via',
    signatureThanks: 'Merci,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Royaume-Uni',
    signatureYear: 'MMXXVI',
  },
}

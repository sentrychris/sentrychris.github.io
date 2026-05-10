/* Spanish dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'Inicio', spy: 'top' },
  { href: '#about', label: 'Sobre mí', spy: 'about' },
  { href: '#skills', label: 'Habilidades', spy: 'skills' },
  { href: '#experience', label: 'Experiencia', spy: 'experience' },
  { href: '#work', label: 'Proyectos', spy: 'work' },
  { href: '#contact', label: 'Contacto', spy: 'contact' },
]

export const hero: HeroCopy = {
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

export const about: AboutCopy = {
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

export const skills: SkillsCopy = {
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

export const experience: ExperienceCopy = {
  eyebrow: 'Experiencia',
  title: 'Años de',
  titleAccent: 'experiencia.',
  lede: 'Escríbeme si quieres la versión larga con referencias.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 - actualidad',
      sectors: ['SaaS', 'Ciberseguridad', 'Defensa', 'NDA'],
      summary:
        'Lead de desarrollo en plataformas de consumidor. Responsable de las decisiones arquitectónicas, coordinando equipos en paralelo y devolviendo servicios legacy al estándar mientras lanzo nuevos productos.',
      points: [
        'Actualmente lidero el desarrollo de plataformas y servicios web.',
        'Lideré la implementación de flujos asistidos por IA para aumentar la productividad.',
        'Lancé Armored Client, una superficie de producto clave que impulsó una parte significativa del crecimiento de la empresa.',
      ],
    },
    {
      role: 'Principal Developer',
      company: 'Go Deploy Labs',
      period: '2020 - 2022',
      sectors: ['LMS', 'Laboratorios virtuales', 'E-commerce', 'MCT'],
      summary:
        'Ingeniero full-stack en todo el ecosistema. Permití a estudiantes y mentores ejecutar laboratorios virtuales para MCT y otros cursos certificados. Principal Developer de los productos de Go Deploy.',
      points: [
        'Rediseñé la interfaz de instrucciones de los laboratorios virtuales para mejorar la experiencia de usuario.',
        'Unifiqué RDP a través de Guacamole para acceso fluido a los laboratorios y soporte de mentores.',
        'Lideré la migración a Vue 3, mejorando rendimiento y mantenibilidad del frontend.',
      ],
    },
    {
      role: 'Fundador',
      company: 'Versyx Digital',
      period: '2019 - actualidad',
      sectors: ['Agencia', 'Consultoría', 'Desarrollo', 'Diseño'],
      summary:
        'Estudio de desarrollo a medida centrado en consultoría, infraestructura y frontend para clientes de varios sectores. También construimos y contribuimos a proyectos open source.',
      points: [
        'Ayudé a clientes a modernizar sus aplicaciones web, mejorando rendimiento y escalabilidad.',
        'Aporté consultoría estratégica en arquitectura web y buenas prácticas de desarrollo.',
        'Contribuí a proyectos open source, mejorando herramientas y librerías que utiliza la comunidad.',
      ],
    },
  ],
  ui: {
    exhibits: 'Logros',
    sectors: 'Sectores',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: 'Trabajo seleccionado',
  title: 'Algunos de mis',
  titleAccent: 'proyectos.',
  lede:
    'La mayoría del trabajo en producción está bajo NDA; los proyectos abiertos están abajo. Escríbeme para el resto.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'Un panel de monitorización ligero y en tiempo real para tus servidores. Métricas en vivo a través de WebSocket - indicadores, gráficas, sondas de servicio - todo en una interfaz pulida que se monta delante de Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Panel de Vigil - gráficas de CPU, memoria, disco y red en directo.',
      badge: 'Monitorización de sistemas',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Probar', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'Un editor de markdown online simple, rápido y gratuito con previsualización en vivo. Escribe, formatea y exporta tus documentos al instante a HTML o PDF. Construido sobre Monaco, el motor que utiliza Visual Studio Code.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'Captura de marcador - vista de Vigil, sustituye por el segundo proyecto.',
      badge: 'Edición de documentos',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Probar', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'Un proyecto dedicado a los fans del juego Elite Dangerous. Un sitio compañero impulsado por su propia API. Datos de ~100 millones de sistemas estelares servidos a velocidad luz, alimentados por herramientas de la comunidad y registros del propio juego.',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'Captura de marcador - vista general de Vigil, sustituye por el tercer proyecto.',
      badge: 'App complementaria',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Probar', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
    {
      title: 'OMG',
      summary:
        'Un pequeño lenguaje de programación construido de principio a fin - por diversión y para ver cómo encaja un compilador. El propio compilador de OMG está escrito en OMG. Binarios nativos mediante un runtime en Rust; la misma toolchain compila a JavaScript para el playground en el navegador.',
      url: 'https://omg-playground.edcs.app',
      image: '/projects/omg-playground.webp',
      alt: 'Playground de OMG - código Fibonacci a la izquierda, stdout a la derecha.',
      badge: 'Lenguaje de programación',
      stack: ['Rust', 'OMG', 'JavaScript', 'VM de bytecode'],
      links: [
        { label: 'Probar', href: 'https://omg-playground.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/omglang' },
      ],
    },
  ],
  ui: {
    sheet: 'Lámina',
    sheetValue: 'A - Proyectos',
    plates: 'Planchas',
    scale: 'Escala',
    scaleValue: '1:1 · MMXXVI',
    plate: 'Plancha',
    openPlate: 'Abrir',
    project: 'Proyecto',
    type: 'Tipo',
    drawn: 'Dibujado',
    drawnValue: 'MMXXVI',
    sheetOf: 'de',
    annexedPlates: 'Planchas anexas',
    plateIndex: 'Índice de planchas',
    currentlyFeatured: (title) => `${title} - destacado actualmente`,
    feature: (title) => `Destacar ${title}`,
    stackOf: (title) => `Stack de ${title}`,
  },
}

export const contact: ContactCopy = {
  eyebrow: 'Contacto',
  title: 'Ponte en',
  titleAccent: 'contacto.',
  lede:
    'Abierto a roles de lead engineering, roles senior IC y consultoría. La forma más rápida es por email; el resto de canales también me llega.',
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
    invitationA: 'Sírvete un café.',
    invitationB: 'Escríbeme una línea.',
    correspondence: 'Correspondencia',
    emailLabel: 'Email',
    statusText: 'Abierto a propuestas · Respondo en menos de un día',
    alsoReachable: 'También me encuentras en',
    signatureThanks: 'Gracias,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Reino Unido',
    signatureYear: 'MMXXVI',
  },
}

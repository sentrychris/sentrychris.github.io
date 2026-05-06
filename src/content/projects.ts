/* Project showcase.
 * Each project renders as an Atlas "feature article" card with an
 * italic Playfair accent Nº marker, a 3:2 cover image, an Inter Tight
 * title, an Inter body summary, an inline mono-caps stack list, and a
 * primary/ghost button row. Drop new images in public/projects/. */

import type { Lang } from '../lib/useLanguage'

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
  ui: {
    sheet: string
    sheetValue: string
    plates: string
    scale: string
    scaleValue: string
    plate: string
    openPlate: string
    project: string
    type: string
    drawn: string
    drawnValue: string
    sheetOf: string
    annexedPlates: string
    plateIndex: string
    /** Aria — `${currentlyFeatured(title)}` */
    currentlyFeatured: (title: string) => string
    /** Aria — `${feature(title)}` */
    feature: (title: string) => string
    /** Aria — `${stackOf(title)}` */
    stackOf: (title: string) => string
  }
}

const en: ProjectsCopy = {
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
      image: '/projects/mkeditor.webp',
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
      image: '/projects/edcs.webp',
      alt: 'Placeholder screenshot — Vigil overview, swap for project three.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Try it', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
  ],
  ui: {
    sheet: 'Sheet',
    sheetValue: 'A — Projects',
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
    currentlyFeatured: (title) => `${title} — currently featured`,
    feature: (title) => `Feature ${title}`,
    stackOf: (title) => `${title} stack`,
  },
}

const ru: ProjectsCopy = {
  eyebrow: 'Избранные работы',
  title: 'Некоторые мои',
  titleAccent: 'проекты.',
  lede:
    'Большая часть продакшн-работы под NDA — открытые проекты ниже. Остальное — по запросу.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'Лёгкая панель мониторинга серверов в реальном времени. Живые метрики передаются через WebSocket — индикаторы, графики, проверки сервисов — всё в одном аккуратном интерфейсе поверх Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Панель Vigil — графики CPU, памяти, диска и сети в реальном времени.',
      badge: 'Системный мониторинг',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Попробовать', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'Простой, быстрый и бесплатный онлайн-редактор Markdown с живым предпросмотром. Пишите, форматируйте и мгновенно экспортируйте документы в HTML или PDF. Построен на Monaco — движке, на котором работает Visual Studio Code.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'Скриншот-заглушка — главная Vigil, замените на скриншот второго проекта.',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Попробовать', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'Отдельный проект для фанатов игры Elite Dangerous — сайт-компаньон со своим API. Данные о ~100 миллионах звёздных систем подаются на скорости света. Источники — инструменты сообщества и внутриигровые журналы.',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'Скриншот-заглушка — обзор Vigil, замените на скриншот третьего проекта.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Попробовать', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
  ],
  ui: {
    sheet: 'Лист',
    sheetValue: 'A — Проекты',
    plates: 'Планшеты',
    scale: 'Масштаб',
    scaleValue: '1:1 · MMXXVI',
    plate: 'Планшет',
    openPlate: 'Открыть',
    project: 'Проект',
    type: 'Тип',
    drawn: 'Создано',
    drawnValue: 'MMXXVI',
    sheetOf: 'из',
    annexedPlates: 'Дополнительные планшеты',
    plateIndex: 'Индекс планшетов',
    currentlyFeatured: (title) => `${title} — сейчас в фокусе`,
    feature: (title) => `Показать ${title}`,
    stackOf: (title) => `Стек проекта ${title}`,
  },
}

const es: ProjectsCopy = {
  eyebrow: 'Trabajo seleccionado',
  title: 'Algunos de mis',
  titleAccent: 'proyectos.',
  lede:
    'La mayoría del trabajo en producción está bajo NDA; los proyectos abiertos están abajo. Escríbeme para el resto.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'Un panel de monitorización ligero y en tiempo real para tus servidores. Métricas en vivo a través de WebSocket — indicadores, gráficas, sondas de servicio — todo en una interfaz pulida que se monta delante de Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Panel de Vigil — gráficas de CPU, memoria, disco y red en directo.',
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
      alt: 'Captura de marcador — vista de Vigil, sustituye por el segundo proyecto.',
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
      alt: 'Captura de marcador — vista general de Vigil, sustituye por el tercer proyecto.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Probar', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
  ],
  ui: {
    sheet: 'Lámina',
    sheetValue: 'A — Proyectos',
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
    currentlyFeatured: (title) => `${title} — destacado actualmente`,
    feature: (title) => `Destacar ${title}`,
    stackOf: (title) => `Stack de ${title}`,
  },
}

export const projects: Record<Lang, ProjectsCopy> = { en, es, ru }

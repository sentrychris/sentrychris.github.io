/* Russian dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'Главная', spy: 'top' },
  { href: '#about', label: 'Обо мне', spy: 'about' },
  { href: '#skills', label: 'Навыки', spy: 'skills' },
  { href: '#experience', label: 'Опыт', spy: 'experience' },
  { href: '#work', label: 'Проекты', spy: 'work' },
  { href: '#contact', label: 'Контакты', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: 'ОТКРЫТ К ПРЕДЛОЖЕНИЯМ · LEAD/SENIOR РОЛИ И КОНСАЛТИНГ',
  title: '12+ лет создаю',
  accent: 'красивые веб-приложения.',
  lede:
    'Высококвалифицированный ведущий разработчик с более чем 12-летним опытом создания, тестирования и поддержки программного обеспечения и веб-приложений в различных бизнес-сферах.',
  ctas: [
    { label: 'Посмотреть работы', href: '#work', variant: 'primary' },
    { label: 'Связаться', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Лет', value: '12+' },
    { label: 'Роль', value: 'Ведущий разработчик' },
    { label: 'Стек', value: 'Полиглот · web-first' },
  ],
}

export const about: AboutCopy = {
  eyebrow: 'Обо мне',
  title: 'Программное обеспечение для',
  titleAccent: 'каждого.',
  lede: 'Уверенно владею системами от начала до конца.',
  paragraphs: [
    'Подтверждённый опыт принятия сложных legacy-систем, их приведения к современным стандартам и доставки поверх них чистого, хорошо протестированного кода.',
    'Большая часть работы — практическая, по всему стеку: фронтенд, бэкенд и инфраструктура. Остальное — руководство командами через ревью, менторство и архитектурные решения.',
    'В свободное время тоже выпускаю проекты.',
  ],
  facts: [
    { label: 'Локация', value: 'Великобритания' },
    { label: 'Роль', value: 'Ведущий разработчик' },
    { label: 'Лет', value: '12+' },
    { label: 'Открыт к', value: 'Lead · Senior · Консалтинг' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Характеристики',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
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

export const experience: ExperienceCopy = {
  eyebrow: 'Опыт',
  title: 'Годы',
  titleAccent: 'опыта.',
  lede: 'Напишите, если нужна развёрнутая версия с рекомендациями.',
  entries: [
    {
      role: 'Ведущий разработчик',
      company: 'SentryBay Ltd',
      period: '2022 — настоящее время',
      sectors: ['SaaS', 'Кибербезопасность', 'Оборона', 'NDA'],
      summary:
        'Лид разработки потребительских платформ. Отвечаю за архитектурные решения, веду параллельные команды, привожу legacy-сервисы к стандарту, одновременно выпуская новые продукты.',
      points: [
        'В настоящее время возглавляю разработку веб-платформ и сервисов.',
        'Внедрил процессы с AI-ассистентами для повышения продуктивности.',
        'Выпустил Armored Client — ключевой продукт, обеспечивший значительную долю роста компании.',
      ],
    },
    {
      role: 'Главный разработчик',
      company: 'Go Deploy Labs',
      period: '2020 — 2022',
      sectors: ['LMS', 'Виртуальные лаборатории', 'Электронная коммерция', 'MCT'],
      summary:
        'Full-stack инженер по всему продукту. Дал возможность студентам и менторам запускать виртуальные лаборатории для MCT и других сертифицированных курсов. Главный разработчик продуктов Go Deploy.',
      points: [
        'Переработал интерфейс инструкций виртуальных лабораторий для улучшения пользовательского опыта.',
        'Унифицировал RDP через Guacamole для бесшовного доступа к лабораториям и поддержки менторов.',
        'Возглавил переход на Vue 3, улучшив производительность и поддерживаемость фронтенда.',
      ],
    },
    {
      role: 'Основатель',
      company: 'Versyx Digital',
      period: '2019 — настоящее время',
      sectors: ['Агентство', 'Консалтинг', 'Разработка', 'Дизайн'],
      summary:
        'Бутиковая студия разработки, специализирующаяся на консалтинге, инфраструктуре и фронтенде для клиентов из разных сфер. Также создаём и поддерживаем open source проекты.',
      points: [
        'Помогал клиентам модернизировать веб-приложения, улучшая производительность и масштабируемость.',
        'Предоставлял стратегические консультации по веб-архитектуре и лучшим практикам разработки.',
        'Делал вклад в open source, улучшая инструменты и библиотеки, которыми пользуется сообщество.',
      ],
    },
  ],
  ui: {
    exhibits: 'Достижения',
    sectors: 'Сферы',
  },
}

export const projects: ProjectsCopy = {
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

export const contact: ContactCopy = {
  eyebrow: 'Контакты',
  title: 'Свяжитесь',
  titleAccent: 'со мной.',
  lede:
    'Открыт к lead-инженерным ролям, senior IC ролям и консалтингу. Быстрее всего отвечаю по электронной почте; остальные каналы тоже работают.',
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
    invitationA: 'Налейте кофе.',
    invitationB: 'Напишите строку.',
    correspondence: 'Переписка',
    emailLabel: 'Электронная почта',
    statusText: 'Открыт к работе · Отвечаю в течение суток',
    alsoReachable: 'Также можно найти через',
    signatureThanks: 'Спасибо,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Великобритания',
    signatureYear: 'MMXXVI',
  },
}

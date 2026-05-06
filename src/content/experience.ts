/* Experience timeline.
 * PLACEHOLDER ENTRIES — replace company names, periods, sectors, and
 * summaries with your actual history. The shape and the voice are
 * the parts to keep. */

import type { Lang } from '../lib/useLanguage'

export interface ExperienceEntry {
  /** Role title — e.g. "Lead Developer". */
  role: string
  /** Company name — set to `null` to mask (e.g., NDA roles). */
  company: string | null
  /** Period — e.g. "2020 — present", "2018 — 2020". */
  period: string
  /** Sectors covered in this role — shown as chips. */
  sectors: ReadonlyArray<string>
  /** One-paragraph summary in operator-tone. */
  summary: string
  /** Optional bullet points — short, declarative, outcome-shaped. */
  points?: ReadonlyArray<string>
}

export interface ExperienceCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  entries: ReadonlyArray<ExperienceEntry>
  ui: {
    exhibits: string
    sectors: string
  }
}

const en: ExperienceCopy = {
  eyebrow: 'Experience',
  title: 'Years of',
  titleAccent: 'experience.',
  lede: 'Reach out if you want the long version with references.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 — present',
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
      period: '2020 — 2022',
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
      period: '2019 — present',
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

const ru: ExperienceCopy = {
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

const es: ExperienceCopy = {
  eyebrow: 'Experiencia',
  title: 'Años de',
  titleAccent: 'experiencia.',
  lede: 'Escríbeme si quieres la versión larga con referencias.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 — actualidad',
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
      period: '2020 — 2022',
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
      period: '2019 — actualidad',
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

export const experience: Record<Lang, ExperienceCopy> = { en, es, ru }

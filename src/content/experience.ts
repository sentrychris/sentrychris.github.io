/* Experience timeline.
 * PLACEHOLDER ENTRIES — replace company names, periods, sectors, and
 * summaries with your actual history. The shape and the voice are
 * the parts to keep. */

export interface ExperienceEntry {
  /** Role title — e.g. "Lead developer". */
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
}

export const experience: ExperienceCopy = {
  eyebrow: 'Experience',
  title: 'Many years across',
  titleAccent: 'sectors.',
  lede:
    'A condensed view. Each entry is one role; sectors are listed as chips. Reach out if you want the long version with references.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 — present',
      sectors: ['SaaS', 'Cybersecurity', 'Defence' ,'NDA'],
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
        'Full-stack engineer across the estate. Enabled learners and mentors to run virtual labs for MCT and other certified courses. Principal Developer on Go Deploy\'s  offerings.',
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
        'A small development agency focused on consultation, infrastructure and frontend for clients across sectors. We also build and contribute to open source projects.',
      points: [
        'Assisted clients in modernising their web applications, improving performance and scalability.',
        'Provided strategic consulting on web architecture and development best practices.',
        'Contributed to open source projects, enhancing tools and libraries used by the community.',
      ],
    },
  ],
}

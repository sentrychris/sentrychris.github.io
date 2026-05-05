/* About — editorial.
 * Voice: declarative, plain, faintly poetic. Numbers earn their place.
 * Coordinates: London — tweak to whatever you actually want shown. */

export interface AboutCopy {
  eyebrow: string
  title: string
  titleAccent?: string
  lede: string
  paragraphs: ReadonlyArray<string>
  /** Short statement-of-fact bullets shown as a side panel. */
  facts: ReadonlyArray<{ label: string; value: string }>
  /** Decorative coordinates — rendered as editorial metadata. */
  coordinates: string
}

export const about: AboutCopy = {
  eyebrow: 'About',
  title: 'Software for',
  titleAccent: 'Everyone.',
  lede:
    'Twelve-plus years building, scaling, and maintaining production web applications across many business sectors. Comfortable owning systems end-to-end.',
  paragraphs: [
    'A proven track record of inheriting complex legacy systems, bringing them back up to standard, and shipping clean, well-tested code on top.',
    'Most of the work has been hands-on across the full stack: frontend, backend, infrastructure, and the connective tissue between them. The rest has been leading teams through code review, mentoring, and architectural decisions.',
    'I also ship things in my spare time. A few of those are below.',
  ],
  facts: [
    { label: 'Based', value: 'United Kingdom' },
    { label: 'Role', value: 'Lead developer' },
    { label: 'Years', value: '12+' },
    { label: 'Open to', value: 'Lead · Senior · Consulting' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
}

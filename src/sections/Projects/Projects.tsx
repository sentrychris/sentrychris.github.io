import { useState, type MouseEvent } from 'react'
import { projects, type Project } from '../../content/projects'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { useReveal } from '../../lib/useReveal'
import styles from './Projects.module.css'

/** Roman numerals for plate references. */
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'] as const

/**
 * Projects
 */
export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const layoutRef = useReveal<HTMLDivElement>()

  const heroProject = projects.projects[activeIndex]
  const secondaries = projects.projects
    .map((project, originalIndex) => ({ project, originalIndex }))
    .filter(({ originalIndex }) => originalIndex !== activeIndex)

  return (
    <Section
      id="work"
      index={4}
      eyebrow={projects.eyebrow}
      title={projects.title}
      titleAccent={projects.titleAccent}
      lede={projects.lede}
    >
      {/* Sheet header — drawing-sheet info strip + plate tab selector. */}
      <header className={styles.sheetHeader}>
        <div className={styles.sheetCell}>
          <span className={styles.sheetCellLabel}>Sheet</span>
          <span className={styles.sheetCellValue}>A — Projects</span>
        </div>

        <div
          className={styles.sheetCellPlates}
          role="group"
          aria-label="Plate index"
        >
          <span className={styles.sheetCellLabel}>Plates</span>
          <ol className={styles.plateTabs}>
            {projects.projects.map((p, i) => {
              const isActive = i === activeIndex
              return (
                <li key={p.title}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`${styles.plateTab} ${isActive ? styles.plateTabActive : ''}`}
                    aria-pressed={isActive}
                    aria-label={
                      isActive
                        ? `${p.title} — currently featured`
                        : `Feature ${p.title}`
                    }
                  >
                    <span className={styles.plateTabNumeral}>{ROMAN[i]}</span>
                    <span className={styles.plateTabTitle}>{p.title}</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        <div className={styles.sheetCell}>
          <span className={styles.sheetCellLabel}>Scale</span>
          <span className={styles.sheetCellValue}>1:1 · MMXXVI</span>
        </div>
      </header>

      {/* The body reveals as a single block on scroll-in. Per-Sheet
          [data-reveal] would hide swapped-in Sheets after the IO has
          disconnected (post-initial reveal), so the reveal lives on
          the wrapper instead and the Sheets render without it. */}
      <div className={styles.layout} ref={layoutRef} data-reveal>
        {heroProject && (
          <Sheet
            project={heroProject}
            index={activeIndex}
            total={projects.projects.length}
            variant="hero"
          />
        )}

        {secondaries.length > 0 && (
          <section className={styles.annex} aria-label="Annexed plates">
            <header className={styles.annexHeader} aria-hidden="true">
              <span className={styles.annexRule} />
              <span className={styles.annexLabel}>Annexed Plates</span>
              <span className={styles.annexCount}>
                {String(secondaries.length).padStart(2, '0')} ·{' '}
                {String(projects.projects.length).padStart(2, '0')}
              </span>
              <span className={styles.annexRule} />
            </header>

            <div className={styles.secondaries}>
              {secondaries.map(({ project, originalIndex }, i) => (
                <Sheet
                  key={project.title}
                  project={project}
                  index={originalIndex}
                  total={projects.projects.length}
                  variant="compact"
                  flipped={i % 2 === 1}
                  onFeature={() => setActiveIndex(originalIndex)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </Section>
  )
}

/** Discriminated union — onFeature is required for compact (the click
 *  handler that swaps this project into the hero slot) and disallowed
 *  for hero (it's already the featured project). */
type SheetProps = {
  project: Project
  index: number
  total: number
  flipped?: boolean
} & (
  | { variant: 'hero'; onFeature?: never }
  | { variant: 'compact'; onFeature: () => void }
)

function Sheet({
  project,
  index,
  total,
  variant,
  flipped,
  onFeature,
}: SheetProps) {
  const numeral = ROMAN[index] ?? String(index + 1)
  const isCompact = variant === 'compact'

  const plateBadge = (
    <span className={styles.plateBadge} aria-hidden="true">
      <span className={styles.plateBadgeLabel}>Plate</span>
      <span className={styles.plateBadgeNumeral}>{numeral}</span>
    </span>
  )

  const headContents = isCompact ? (
    <>
      {plateBadge}
      <h3 className={styles.title}>{project.title}</h3>
      <span className={styles.featureAction} aria-hidden="true">
        <span className={styles.featureLabel}>Open Plate</span>
        <span className={styles.featureArrow}>↑</span>
      </span>
    </>
  ) : (
    <>
      {plateBadge}
      <h3 className={styles.title}>{project.title}</h3>
      {project.badge && (
        <span className={styles.badge}>{project.badge}</span>
      )}
    </>
  )

  return (
    <article
      id={`work-${index + 1}`}
      className={`${styles.sheet} ${styles[variant]} ${flipped ? styles.flipped : ''}`}
    >
      {isCompact ? (
        <button
          type="button"
          className={`${styles.head} ${styles.headButton}`}
          onClick={onFeature}
          aria-label={`Feature ${project.title}`}
        >
          {headContents}
        </button>
      ) : (
        <header className={styles.head}>{headContents}</header>
      )}

      {isCompact ? (
        <div className={styles.compactBody}>
          {/* Browser chrome is always rendered; CSS hides it on desktop
              compacts (where it'd compete with the hero plate) and shows
              it on mobile so every project reads as its own little site. */}
          <Frame project={project} browser />
          <Meta project={project} />
        </div>
      ) : (
        <>
          <Frame project={project} browser />
          <Meta project={project} />
          <TitleBlock project={project} index={index} total={total} />
        </>
      )}
    </article>
  )
}

/**
 * The image frame.
 *  - Default: figure with cursor-tracked spotlight + corner crop marks.
 *  - browser=true: wrap the figure in a minimal browser chrome (three
 *    dots + faux URL with a green lock dot) and overlay a small north
 *    arrow ornament in the corner. Used by the hero plate.
 */
function Frame({ project, browser }: { project: Project; browser?: boolean }) {
  const figure = (
    <figure className={styles.frame} onMouseMove={handleSpotlight}>
      <div className={styles.overlay} aria-hidden="true" />
      {!browser && (
        <>
          <CropMark className={styles.cropTL} />
          <CropMark className={styles.cropTR} />
          <CropMark className={styles.cropBL} />
          <CropMark className={styles.cropBR} />
        </>
      )}
      <img
        className={styles.image}
        src={project.image}
        alt={project.alt}
        loading="lazy"
      />
    </figure>
  )

  if (!browser) return figure

  return (
    <div
      className={styles.browser}
      onMouseMove={handleTilt}
      onMouseLeave={handleTiltReset}
    >
      <div className={styles.browserBar} aria-hidden="true">
        <span className={`${styles.browserDot} ${styles.browserDotR}`} />
        <span className={`${styles.browserDot} ${styles.browserDotY}`} />
        <span className={`${styles.browserDot} ${styles.browserDotG}`} />
        <span className={styles.browserUrl}>
          <span className={styles.browserLock}>●</span>
          {project.url}
        </span>
        <NorthArrow className={styles.browserNorth} />
      </div>
      {figure}
    </div>
  )
}

/**
 * The architect's title block — bottom-right of the hero plate.
 * Multi-cell strip with PROJECT, TYPE, SCALE, DRAWN, SHEET fields.
 * Reads exactly like the title block on a real drawing sheet.
 */
function TitleBlock({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  return (
    <aside className={styles.titleBlock} aria-hidden="true">
      <div className={styles.titleBlockGrid}>
        <div className={`${styles.titleBlockCell} ${styles.titleBlockCellWide}`}>
          <span className={styles.titleBlockLabel}>Project</span>
          <span className={styles.titleBlockValue}>{project.title}</span>
        </div>
        {project.badge && (
          <div className={styles.titleBlockCell}>
            <span className={styles.titleBlockLabel}>Type</span>
            <span className={styles.titleBlockValue}>{project.badge}</span>
          </div>
        )}
        <div className={styles.titleBlockCell}>
          <span className={styles.titleBlockLabel}>Scale</span>
          <span className={styles.titleBlockValue}>1:1</span>
        </div>
        <div className={styles.titleBlockCell}>
          <span className={styles.titleBlockLabel}>Drawn</span>
          <span className={styles.titleBlockValue}>MMXXVI</span>
        </div>
        <div className={styles.titleBlockCell}>
          <span className={styles.titleBlockLabel}>Sheet</span>
          <span className={styles.titleBlockValue}>
            {ROMAN[index]} of {ROMAN[total - 1]}
          </span>
        </div>
      </div>
    </aside>
  )
}

/** Summary + spec list + action buttons. */
function Meta({ project }: { project: Project }) {
  return (
    <div className={styles.meta}>
      <p className={styles.summary}>{project.summary}</p>

      <ul className={styles.spec} aria-label={`${project.title} stack`}>
        {project.stack.map((tech) => (
          <li key={tech} className={styles.specItem}>
            <span className={styles.marker} aria-hidden="true" />
            <span className={styles.specLabel}>{tech}</span>
          </li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <div className={styles.actions}>
          {project.links.map((link, linkIndex) => {
            const label = link.label.toLowerCase()
            const isPrimary =
              linkIndex === 0 &&
              (label === 'try it' || label === 'live demo')
            const isExternal = link.href.startsWith('http')
            return (
              <Button
                key={link.href + link.label}
                href={link.href}
                variant={isPrimary ? 'primary' : 'default'}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}

/** Single L-bracket registration mark. Positioned by the parent. */
function CropMark({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M0 0 L0 14 M0 0 L14 0" />
    </svg>
  )
}

/** Architectural north-arrow ornament — small circle with N marker
 *  and an arrow pointing up. Sits in the browser chrome corner. */
function NorthArrow({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8.4" />
      <path d="M10 3.4 L10 16.6" />
      <path d="M10 3.4 L7.4 7.4 L10 6.4 L12.6 7.4 Z" fill="currentColor" stroke="none" />
      <text
        x="10"
        y="13.4"
        textAnchor="middle"
        fontSize="4.6"
        fill="currentColor"
        stroke="none"
        fontFamily="serif"
        fontStyle="italic"
      >
        N
      </text>
    </svg>
  )
}

/**
 * Cursor-tracked spotlight: writes --mx and --my (percentages) to the
 * frame element on mousemove. The CSS overlay uses these in a radial
 * mask so a circular "hole" in the green tint follows the cursor.
 */
function handleSpotlight(event: MouseEvent<HTMLElement>) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  el.style.setProperty('--mx', `${x}%`)
  el.style.setProperty('--my', `${y}%`)
}

/**
 * Cursor-tracked perspective tilt — same recipe as the BrowserFrame
 * showcase on vigil.edcs.app. Writes --tilt-x / --tilt-y to the
 * browser element on mousemove; the CSS uses them in `rotateX/rotateY`
 * inside a `perspective(1400px)` transform with a 220ms eased
 * transition for a damped "follow" feel.
 *
 * Convention: the corner under the cursor lifts toward the viewer.
 *   cursor at top    → top tilts forward    (rotateX negative)
 *   cursor at left   → left tilts forward   (rotateY positive)
 */
const TILT_MAX = 5

function handleTilt(event: MouseEvent<HTMLElement>) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  const px = (event.clientX - rect.left) / rect.width
  const py = (event.clientY - rect.top) / rect.height
  const tiltX = (py - 0.5) * TILT_MAX
  const tiltY = -(px - 0.5) * TILT_MAX
  el.style.setProperty('--tilt-x', `${tiltX}deg`)
  el.style.setProperty('--tilt-y', `${tiltY}deg`)
}

function handleTiltReset(event: MouseEvent<HTMLElement>) {
  const el = event.currentTarget
  el.style.setProperty('--tilt-x', '0deg')
  el.style.setProperty('--tilt-y', '0deg')
}

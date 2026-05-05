import { useState, type MouseEvent } from 'react'
import { projects, type Project } from '../../content/projects'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { useReveal } from '../../lib/useReveal'
import styles from './Projects.module.css'

/**
 * Projects — editorial spread on the blueprint.
 *
 * NOT a vertical sequence. Layout breaks into three parts:
 *   1. INDEX strip — mono-caps TOC linking to all three projects
 *   2. HERO sheet — the first project gets a wide presentation, large
 *      cinematic image with the cursor-tracked spotlight reveal
 *   3. SECONDARY 2-up grid — projects 2 & 3 sit below in compact form,
 *      mirrored: project 2 has image LEFT, project 3 has image RIGHT
 *
 * Each image carries the green-tinted overlay + spotlight reveal
 * (mix-blend-mode: color + a radial mask whose radius follows --mr,
 * registered via @property so it can be transitioned).
 */
export function Projects() {
  // The featured (hero) project. Click an INDEX entry or a compact's
  // title row to swap which project sits in the hero slot.
  const [activeIndex, setActiveIndex] = useState(0)
  const layoutRef = useReveal<HTMLDivElement>()

  const heroProject = projects.projects[activeIndex]
  // Secondaries: every project except the active one, preserving the
  // original order so the visual sequence stays predictable.
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
      <nav className={styles.index} aria-label="Projects index">
        {projects.projects.map((p, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={p.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`${styles.indexEntry} ${isActive ? styles.indexActive : ''}`}
              aria-pressed={isActive}
              aria-label={
                isActive
                  ? `${p.title} — currently featured`
                  : `Feature ${p.title}`
              }
            >
              <span className={styles.indexNumero}>
                Nº {String(i + 1).padStart(2, '0')}
              </span>
              <span className={styles.indexTitle}>{p.title}</span>
            </button>
          )
        })}
      </nav>

      {/* The body reveals as a single block on scroll-in. Per-Sheet
          [data-reveal] would hide swapped-in Sheets after the IO has
          disconnected (post-initial reveal), so the reveal lives on
          the wrapper instead and the Sheets render without it. */}
      <div className={styles.layout} ref={layoutRef} data-reveal>
        {heroProject && (
          <Sheet
            project={heroProject}
            index={activeIndex}
            variant="hero"
          />
        )}

        {secondaries.length > 0 && (
          <div className={styles.secondaries}>
            {secondaries.map(({ project, originalIndex }, i) => (
              <Sheet
                key={project.title}
                project={project}
                index={originalIndex}
                variant="compact"
                flipped={i % 2 === 1}
                onFeature={() => setActiveIndex(originalIndex)}
              />
            ))}
          </div>
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
  flipped?: boolean
} & (
  | { variant: 'hero'; onFeature?: never }
  | { variant: 'compact'; onFeature: () => void }
)

function Sheet({ project, index, variant, flipped, onFeature }: SheetProps) {
  const numero = `Nº ${String(index + 1).padStart(2, '0')}`
  const isCompact = variant === 'compact'

  // Hero head: Nº + title + (optional) badge.
  // Compact head: Nº + title + clear "Feature ↑" affordance — drops
  // the badge since badges read better in the featured slot anyway.
  const headContents = isCompact ? (
    <>
      <span className={styles.numero} aria-hidden="true">
        {numero}
      </span>
      <h3 className={styles.title}>{project.title}</h3>
      <span className={styles.featureAction} aria-hidden="true">
        <span className={styles.featureLabel}>Feature</span>
        <span className={styles.featureArrow}>↑</span>
      </span>
    </>
  ) : (
    <>
      <span className={styles.numero} aria-hidden="true">
        {numero}
      </span>
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
          <Frame project={project} />
          <Meta project={project} />
        </div>
      ) : (
        <>
          <Frame project={project} browser />
          <Meta project={project} />
        </>
      )}
    </article>
  )
}

/**
 * The image frame.
 *  - Default: figure with cursor-tracked spotlight + corner crop marks.
 *  - browser=true: wrap the figure in a minimal browser chrome (three
 *    dots + faux URL with a green lock dot); drop the crop marks since
 *    the chrome takes over as the visual frame. Used by the hero sheet.
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
      </div>
      {figure}
    </div>
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
  const px = (event.clientX - rect.left) / rect.width   // 0..1 (left → right)
  const py = (event.clientY - rect.top) / rect.height   // 0..1 (top → bottom)
  const tiltX = (py - 0.5) * TILT_MAX                   // top → -, bottom → +
  const tiltY = -(px - 0.5) * TILT_MAX                  // left → +, right → -
  el.style.setProperty('--tilt-x', `${tiltX}deg`)
  el.style.setProperty('--tilt-y', `${tiltY}deg`)
}

function handleTiltReset(event: MouseEvent<HTMLElement>) {
  const el = event.currentTarget
  el.style.setProperty('--tilt-x', '0deg')
  el.style.setProperty('--tilt-y', '0deg')
}

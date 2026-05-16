import { projects as projectsI18n, type Project } from '../../content/projects'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { useLanguage } from '../../lib/useLanguage'
import { useReveal } from '../../lib/useReveal'
import styles from './Projects.module.css'

/**
 * Projects
 */
export function Projects() {
  const gridRef = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const projects = projectsI18n[lang]

  return (
    <Section
      id="work"
      index={4}
      eyebrow={projects.eyebrow}
      title={projects.title}
      titleAccent={projects.titleAccent}
      lede={projects.lede}
    >
      <div className={styles.grid} ref={gridRef} data-reveal-stagger>
        {projects.projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const number = String(index + 1).padStart(2, '0')
  const primaryLink = project.links[0]
  const image = (
    <img
      className={styles.image}
      src={project.image}
      alt={project.alt}
      loading={index === 0 ? 'eager' : 'lazy'}
    />
  )

  return (
    <article
      id={`work-${index + 1}`}
      className={styles.card}
      data-reveal
    >
      {primaryLink ? (
        <a
          className={styles.media}
          href={primaryLink.href}
          target={primaryLink.href.startsWith('http') ? '_blank' : undefined}
          rel={primaryLink.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={`${primaryLink.label}: ${project.title}`}
        >
          {image}
        </a>
      ) : (
        <figure className={styles.media}>{image}</figure>
      )}

      <div className={styles.body}>
        <div className={styles.kicker}>
          <span className={styles.number} aria-hidden="true">
            FIG. {number}
          </span>
          {project.badge && (
            <span className={styles.badge}>{project.badge}</span>
          )}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>

        <ul className={styles.stack} aria-label={`${project.title} stack`}>
          {project.stack.map((tech) => (
            <li key={tech} className={styles.stackItem}>
              {tech}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className={styles.actions}>
            {project.links.map((link, linkIndex) => {
              const isExternal = link.href.startsWith('http')
              return (
                <Button
                  key={link.href + link.label}
                  href={link.href}
                  variant={linkIndex === 0 ? 'primary' : 'default'}
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
    </article>
  )
}

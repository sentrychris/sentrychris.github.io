import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { HeroEyebrow } from '../../components/HeroEyebrow'
import { Button } from '../../components/Button'
import { SectionFrame } from '../../components/SectionFrame'
import { hero as heroI18n } from '../../content/hero'
import { useLanguage } from '../../lib/useLanguage'
import { useCountUp } from '../../lib/useCountUp'
import { subscribeMotion } from '../../lib/motion'
import styles from './Hero.module.css'

/**
 * Hero — Atlas first paint, overhauled.
 *
 * Entry choreography (single GSAP timeline, plays on mount):
 *   - eyebrow fades up
 *   - title letters fall in with depth (rotateX + translate + blur)
 *   - accent phrase scribes in via stroke-dashoffset, then resolves
 *     to filled ink
 *   - lede word-stagger
 *   - CTAs scale + fade
 *   - meta counters tick
 *
 * Ambient layer:
 *   - orbiting compass-arc SVG circles the accent phrase
 *   - a sparkline plot to the right of the title (decorative)
 *   - the whole wrap tilts subtly with mouse position
 *
 * Reduced-motion short-circuits the timeline and renders to final state.
 */
export function Hero() {
  const { lang } = useLanguage()
  const hero = heroI18n[lang]

  const wrapRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const accentRef = useRef<HTMLSpanElement>(null)
  const orbitRef = useRef<SVGSVGElement>(null)
  const plotRef = useRef<SVGSVGElement>(null)

  // ─── Entry timeline ────────────────────────────────────────────
  useEffect(() => {
    const wrap = wrapRef.current
    const title = titleRef.current
    if (!wrap || !title) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Split current text into per-letter spans. Reads fresh textContent
    // each call so locale changes pick up the new title.
    const splitLetters = (host: HTMLElement) => {
      const text = host.textContent ?? ''
      host.innerHTML = ''
      const frag = document.createDocumentFragment()
      for (const ch of text) {
        if (ch === ' ') {
          frag.appendChild(document.createTextNode(' '))
          continue
        }
        const span = document.createElement('span')
        span.className = styles.letter
        span.textContent = ch
        frag.appendChild(span)
      }
      host.appendChild(frag)
      return Array.from(host.querySelectorAll<HTMLSpanElement>(`.${styles.letter}`))
    }

    const titleLetters = splitLetters(title)
    const accent = accentRef.current
    const accentLetters = accent ? splitLetters(accent) : []

    if (reduce) {
      gsap.set([...titleLetters, ...accentLetters], { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0)' })
      return
    }

    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
    })

    // Set initial state.
    gsap.set([titleLetters, accentLetters], {
      opacity: 0,
      y: 30,
      rotateX: -50,
      filter: 'blur(8px)',
      transformPerspective: 800,
    })
    gsap.set(`.${styles.eyebrow}, .${styles.lede}, .${styles.ctas}, .${styles.meta}`, {
      opacity: 0,
      y: 16,
    })
    // Measure each path's true length so the stroke-dash trace covers
    // exactly the geometry rather than relying on a uniform constant.
    const measureAndPrep = (selector: string) => {
      const els = Array.from(wrap.querySelectorAll<SVGGeometryElement>(selector))
      const lengths: number[] = []
      for (const el of els) {
        let len = 0
        try {
          len = el.getTotalLength()
        } catch {
          len = 0
        }
        lengths.push(len)
        if (len) {
          el.style.strokeDasharray = `${len}`
          el.style.strokeDashoffset = `${len}`
        }
      }
      return { els, lengths }
    }
    const orbitPaths = measureAndPrep(`.${styles.orbit} circle, .${styles.orbit} path`)
    const plotPaths = measureAndPrep(`.${styles.plot} path[data-trace]`)

    tl
      .to(`.${styles.eyebrow}`, { opacity: 1, y: 0, duration: 0.7 }, 0)
      .to(titleLetters, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.025,
      }, 0.15)
      .to(accentLetters, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.04,
        ease: 'expo.out',
      }, 0.5)
      .to(orbitPaths.els, {
        strokeDashoffset: 0,
        duration: 1.4,
        stagger: 0.1,
        ease: 'power2.out',
      }, 0.4)
      .to(plotPaths.els, {
        strokeDashoffset: 0,
        duration: 1.6,
        stagger: 0.12,
        ease: 'power2.out',
      }, 0.5)
      .to(`.${styles.lede}`, { opacity: 1, y: 0, duration: 0.7 }, 0.8)
      .to(`.${styles.ctas}`, { opacity: 1, y: 0, duration: 0.6 }, 1.0)
      .to(`.${styles.meta}`, { opacity: 1, y: 0, duration: 0.6 }, 1.15)

    return () => {
      tl.kill()
    }
  }, [lang])

  // ─── Pointer parallax — title gets a small mouse-driven 3D nudge ─
  useEffect(() => {
    const wrap = wrapRef.current
    const orbit = orbitRef.current
    if (!wrap) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const unsub = subscribeMotion((s) => {
      // Only react when the hero is centred (rough proxy: scrollProgress
      // sufficiently small). Saves cycles when not in view.
      const tx = s.pointerX * 8
      const ty = s.pointerY * 4
      wrap.style.setProperty('--hero-shift-x', `${tx}px`)
      wrap.style.setProperty('--hero-shift-y', `${ty}px`)
      wrap.style.setProperty('--hero-rot-x', `${-s.pointerY * 2}deg`)
      wrap.style.setProperty('--hero-rot-y', `${s.pointerX * 3}deg`)

      if (orbit) {
        // Rotate the orbit gently with cursor.
        orbit.style.setProperty('--orbit-rot', `${s.pointerX * 12}deg`)
      }
    })

    return unsub
  }, [])

  return (
    <section id="top" className={styles.hero}>
      <SectionFrame pip="00" marginalia="HERO · ATLAS ED.01" />
      <div className={styles.wrap} ref={wrapRef}>
        <div className={styles.eyebrow}>
          <HeroEyebrow dot={false}>{hero.eyebrow}</HeroEyebrow>
        </div>

        <h1 className={styles.title}>
          <span ref={titleRef} className={styles.titleMain}>
            {hero.title}
          </span>{' '}
          <span className={styles.accentWrap}>
            <span ref={accentRef} className={styles.accent}>
              {hero.accent}
            </span>
            {/* Orbiting compass-arc behind the accent phrase. */}
            <Orbit ref={orbitRef} className={styles.orbit} />
          </span>
        </h1>

        {/* Decorative live-data sparkline plot — sits flush right of
            the title block on desktop, hidden on small phones. */}
        <Plot className={styles.plot} ref={plotRef} />

        <p className={styles.lede}>{hero.lede}</p>

        <div className={styles.ctas}>
          {hero.ctas.map((cta) => (
            <Button key={cta.label} variant={cta.variant} href={cta.href}>
              {cta.label}
            </Button>
          ))}
        </div>

        <dl className={styles.meta}>
          {hero.meta.map((m) => (
            <div key={m.label} className={styles.metaItem}>
              <dt className={styles.metaLabel}>{m.label}</dt>
              <dd className={styles.metaValue}>
                <MetaValue value={m.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function MetaValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return <>{value}</>
  const target = parseInt(match[1], 10)
  const suffix = match[2]
  const n = useCountUp(target)
  return (
    <>
      {n}
      {suffix}
    </>
  )
}

const Orbit = ({ className, ref }: { className: string; ref: React.Ref<SVGSVGElement> }) => (
  <svg
    ref={ref}
    className={className}
    viewBox="0 0 240 80"
    aria-hidden="true"
  >
    {/* Three concentric arcs at varying radii — compass-arc feel. */}
    <circle cx="120" cy="40" r="38" />
    <circle cx="120" cy="40" r="50" strokeDasharray="2 5" />
    <path d="M 30 40 Q 120 -10 210 40" />
    <path d="M 30 40 Q 120 90 210 40" strokeDasharray="3 6" />
    {/* Two tick marks at the ends. */}
    <line x1="30" y1="36" x2="30" y2="44" />
    <line x1="210" y1="36" x2="210" y2="44" />
  </svg>
)

const Plot = ({ className, ref }: { className: string; ref: React.Ref<SVGSVGElement> }) => (
  <svg
    ref={ref}
    className={className}
    viewBox="0 0 240 80"
    aria-hidden="true"
  >
    {/* Axis */}
    <line x1="0" y1="78" x2="240" y2="78" className="axis" />
    <line x1="2" y1="2" x2="2" y2="78" className="axis" />
    {/* Grid ticks */}
    {Array.from({ length: 8 }, (_, i) => (
      <line
        key={i}
        x1={2 + (i + 1) * 28}
        y1="74"
        x2={2 + (i + 1) * 28}
        y2="78"
        className="tick"
      />
    ))}
    {/* Sparkline */}
    <path
      data-trace
      className="line"
      d="M 4 60 L 32 56 L 60 48 L 88 52 L 116 38 L 144 30 L 172 32 L 200 18 L 236 22"
      fill="none"
    />
    {/* Underlay area fill — softer */}
    <path
      data-trace
      className="lineSoft"
      d="M 4 70 L 32 64 L 60 56 L 88 62 L 116 46 L 144 36 L 172 40 L 200 24 L 236 28"
      fill="none"
    />
    {/* Data points */}
    {[
      [4, 60],
      [60, 48],
      [116, 38],
      [172, 32],
      [236, 22],
    ].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" className="dot" />
    ))}
  </svg>
)

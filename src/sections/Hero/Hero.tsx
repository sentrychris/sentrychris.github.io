import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '../../components/Button'
import { SectionFrame } from '../../components/SectionFrame'
import { hero as heroI18n } from '../../content/hero'
import { useLanguage } from '../../lib/useLanguage'
import { useCountUp } from '../../lib/useCountUp'
import { subscribeMotion } from '../../lib/motion'
import styles from './Hero.module.css'

/**
 * Hero — Atlas first paint, treated as a labeled drawing plate.
 *
 * No outer panel. The text itself carries the schematic vocabulary:
 *
 *   - A horizontal sheet rule across the top (DWG ID + accent line +
 *     plate Nº) that anchors the composition like a drawing-sheet header
 *   - Mono caps eyebrow with a leading dash + coordinate marginalia
 *   - Display title with a leader-rule under the italic accent phrase
 *     and a tiny "Ø.MAIN" dimension label
 *   - Lede prefixed by an italic Playfair pilcrow
 *   - CTAs in a row
 *   - Meta strip — flat, no panel, just label/value pairs separated by
 *     hairline mono-caps middots
 *
 * Legibility against the busy backdrop comes from the global paper-
 * halo text-shadow recipe in global.css. No panel.
 */
export function Hero() {
  const { lang } = useLanguage()
  const hero = heroI18n[lang]

  const wrapRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLSpanElement>(null)
  const accentRef = useRef<HTMLSpanElement>(null)
  const orbitRef = useRef<SVGSVGElement>(null)
  const plotRef = useRef<SVGSVGElement>(null)
  const dimRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const title = titleRef.current
    if (!wrap || !title) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

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
      gsap.set([...titleLetters, ...accentLetters], {
        opacity: 1, y: 0, rotateX: 0, filter: 'blur(0)',
      })
      return
    }

    const measureAndPrep = (selector: string) => {
      const els = Array.from(wrap.querySelectorAll<SVGGeometryElement>(selector))
      for (const el of els) {
        let len = 0
        try { len = el.getTotalLength() } catch { len = 0 }
        if (len) {
          el.style.strokeDasharray = `${len}`
          el.style.strokeDashoffset = `${len}`
        }
      }
      return els
    }
    const orbitPaths = measureAndPrep(`.${styles.orbit} circle, .${styles.orbit} path`)
    const plotPaths = measureAndPrep(`.${styles.plot} path[data-trace]`)
    const dimPaths = measureAndPrep(`.${styles.dimension} path, .${styles.dimension} line`)

    gsap.set([titleLetters, accentLetters], {
      opacity: 0, y: 24, rotateX: -40,
      filter: 'blur(6px)',
      transformPerspective: 800,
    })
    gsap.set(
      `.${styles.eyebrow}, .${styles.lede}, .${styles.ctas}, .${styles.meta}, .${styles.sheetStrip}`,
      { opacity: 0, y: 12 },
    )

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
    tl
      .to(`.${styles.sheetStrip}`, { opacity: 1, y: 0, duration: 0.7 }, 0)
      .to(`.${styles.eyebrow}`, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
      .to(titleLetters, {
        opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)',
        duration: 0.9, stagger: 0.025,
      }, 0.2)
      .to(accentLetters, {
        opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)',
        duration: 0.9, stagger: 0.04,
      }, 0.5)
      .to(dimPaths, {
        strokeDashoffset: 0,
        duration: 1.0, stagger: 0.06, ease: 'power2.out',
      }, 0.6)
      .to(orbitPaths, {
        strokeDashoffset: 0,
        duration: 1.4, stagger: 0.1, ease: 'power2.out',
      }, 0.5)
      .to(plotPaths, {
        strokeDashoffset: 0,
        duration: 1.6, stagger: 0.12, ease: 'power2.out',
      }, 0.7)
      .to(`.${styles.lede}`, { opacity: 1, y: 0, duration: 0.7 }, 0.85)
      .to(`.${styles.ctas}`, { opacity: 1, y: 0, duration: 0.6 }, 1.0)
      .to(`.${styles.meta}`, { opacity: 1, y: 0, duration: 0.6 }, 1.1)

    return () => {
      tl.kill()
    }
  }, [lang])

  // Pointer parallax — modest tilt of the editorial composition.
  useEffect(() => {
    const wrap = wrapRef.current
    const orbit = orbitRef.current
    if (!wrap) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const unsub = subscribeMotion((s) => {
      const tx = s.pointerX * 5
      const ty = s.pointerY * 3
      wrap.style.setProperty('--hero-shift-x', `${tx}px`)
      wrap.style.setProperty('--hero-shift-y', `${ty}px`)
      wrap.style.setProperty('--hero-rot-x', `${-s.pointerY * 1.2}deg`)
      wrap.style.setProperty('--hero-rot-y', `${s.pointerX * 1.8}deg`)
      if (orbit) orbit.style.setProperty('--orbit-rot', `${s.pointerX * 10}deg`)
    })
    return unsub
  }, [])

  return (
    <section id="top" className={styles.hero}>
      <SectionFrame pip="00" marginalia="HERO · ATLAS ED.01" />

      <div className={styles.wrap} ref={wrapRef}>
        {/* Sheet header — drawing-reference rule across the top. */}
        <div className={styles.sheetStrip} aria-hidden="true">
          <span className={styles.sheetId}>DWG · C.ROWLES — ED.01 / 2026</span>
          <span className={styles.sheetRule} />
          <span className={styles.sheetPlate}>PLATE · 00 / VI</span>
        </div>

        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDash} aria-hidden="true" />
          <span className={styles.eyebrowText}>{hero.eyebrow}</span>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          <span className={styles.eyebrowCoord}>51.5074°N · 0.1278°W</span>
        </div>

        <h1 className={styles.title}>
          <span ref={titleRef} className={styles.titleMain}>
            {hero.title}
          </span>{' '}
          <span className={styles.accentWrap}>
            <span ref={accentRef} className={styles.accent}>
              {hero.accent}
            </span>
            <Dimension ref={dimRef} className={styles.dimension} />
            <Orbit ref={orbitRef} className={styles.orbit} />
          </span>
        </h1>

        <Plot className={styles.plot} ref={plotRef} />

        <p className={styles.lede}>
          <span className={styles.ledeMark} aria-hidden="true">¶</span>
          {hero.lede}
        </p>

        <div className={styles.ctas}>
          {hero.ctas.map((cta) => (
            <Button key={cta.label} variant={cta.variant} href={cta.href}>
              {cta.label}
            </Button>
          ))}
        </div>

        {/* Meta strip — flat row of label/value pairs separated by mono
            middots. No grid, no border — typography is the decoration. */}
        <dl className={styles.meta}>
          {hero.meta.map((m, i) => (
            <div key={m.label} className={styles.metaItem}>
              {i > 0 && <span className={styles.metaSep} aria-hidden="true">·</span>}
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
    <circle cx="120" cy="40" r="38" />
    <circle cx="120" cy="40" r="50" strokeDasharray="2 5" />
    <path d="M 30 40 Q 120 -10 210 40" />
    <path d="M 30 40 Q 120 90 210 40" strokeDasharray="3 6" />
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
    <line x1="0" y1="78" x2="240" y2="78" />
    <line x1="2" y1="2" x2="2" y2="78" />
    {Array.from({ length: 8 }, (_, i) => (
      <line
        key={i}
        x1={2 + (i + 1) * 28}
        y1="74"
        x2={2 + (i + 1) * 28}
        y2="78"
      />
    ))}
    <path
      data-trace
      d="M 4 60 L 32 56 L 60 48 L 88 52 L 116 38 L 144 30 L 172 32 L 200 18 L 236 22"
      fill="none"
    />
    <path
      data-trace
      d="M 4 70 L 32 64 L 60 56 L 88 62 L 116 46 L 144 36 L 172 40 L 200 24 L 236 28"
      fill="none"
    />
    {[
      [4, 60],
      [60, 48],
      [116, 38],
      [172, 32],
      [236, 22],
    ].map(([x, y]) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" />
    ))}
  </svg>
)

const Dimension = ({ className, ref }: { className: string; ref: React.Ref<SVGSVGElement> }) => (
  <svg
    ref={ref}
    className={className}
    viewBox="0 0 240 24"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <line x1="2" y1="2" x2="2" y2="20" />
    <path d="M 2 12 L 12 8 L 12 16 Z" fill="currentColor" />
    <line x1="2" y1="12" x2="238" y2="12" />
    <line x1="238" y1="2" x2="238" y2="20" />
    <path d="M 238 12 L 228 8 L 228 16 Z" fill="currentColor" />
  </svg>
)

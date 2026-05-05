import { useEffect } from 'react'

/**
 * useHorizontalScroll — translates an exhausted vertical wheel into a
 * horizontal page-snap on desktop.
 *
 * Pairs with the desktop horizontal-page CSS in global.css. While a
 * section can still scroll vertically, native wheel handling routes
 * the event to the section's internal y-scroll. Once the section is
 * scrolled to its top or bottom, the next wheel event in that
 * direction triggers a smooth horizontal scroll to the previous /
 * next section.
 *
 *  - A short transition lockout (~700ms) prevents a single trackpad
 *    flick from ricocheting through multiple panels.
 *  - When transitioning forward, the next section's internal scroll
 *    is reset to top so the user always sees its head. When backward,
 *    the previous section is set to its bottom so the upward motion
 *    feels continuous.
 *  - Disabled below the desktop breakpoint (920px) — mobile keeps the
 *    natural vertical long-scroll.
 */
export function useHorizontalScroll() {
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 921px)')
    if (!desktop.matches) return

    const main = document.querySelector('main')
    if (!main) return

    let isTransitioning = false
    let transitionTimer: number | null = null

    function isPanel(el: Element | null): el is HTMLElement {
      if (!el) return false
      const tag = el.tagName.toLowerCase()
      return tag === 'section' || tag === 'footer'
    }

    function findCurrentPanel(): HTMLElement | null {
      if (!main) return null
      const panels = Array.from(
        main.querySelectorAll(':scope > section, :scope > footer'),
      )
      const scrollLeft = main.scrollLeft
      const center = scrollLeft + window.innerWidth / 2
      let closest: HTMLElement | null = null
      let closestDist = Infinity
      for (const s of panels) {
        const el = s as HTMLElement
        const panelCenter = el.offsetLeft + el.offsetWidth / 2
        const dist = Math.abs(panelCenter - center)
        if (dist < closestDist) {
          closestDist = dist
          closest = el
        }
      }
      return closest
    }

    function transitionTo(target: HTMLElement, direction: 'next' | 'prev') {
      if (!main) return
      isTransitioning = true
      // Reset the destination's internal scroll so the user always
      // enters at the natural reading edge for their direction.
      target.scrollTop = direction === 'next' ? 0 : target.scrollHeight
      // Use main.scrollTo (not target.scrollIntoView) so the browser
      // never tries to vertically scroll body/html to bring the panel
      // into view — that's the source of the perceived "scroll up
      // before transition" on the first wheel.
      main.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
      if (transitionTimer != null) window.clearTimeout(transitionTimer)
      transitionTimer = window.setTimeout(() => {
        isTransitioning = false
      }, 700)
    }

    function handleWheel(e: WheelEvent) {
      if (isTransitioning) {
        e.preventDefault()
        return
      }

      // Only act on dominantly-vertical wheel intent — let native
      // horizontal trackpad gestures pass straight through.
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return

      const panel = findCurrentPanel()
      if (!panel) return

      const atBottom =
        panel.scrollTop >= panel.scrollHeight - panel.clientHeight - 2
      const atTop = panel.scrollTop <= 2

      if (e.deltaY > 0 && atBottom) {
        const next = panel.nextElementSibling
        if (isPanel(next)) {
          e.preventDefault()
          transitionTo(next, 'next')
        }
      } else if (e.deltaY < 0 && atTop) {
        const prev = panel.previousElementSibling
        if (isPanel(prev)) {
          e.preventDefault()
          transitionTo(prev, 'prev')
        }
      }
    }

    function handleKey(e: KeyboardEvent) {
      // Page Down / Right Arrow → next panel; Page Up / Left Arrow → prev.
      // Arrow Up/Down still drive native vertical scroll within section.
      if (isTransitioning) return
      const panel = findCurrentPanel()
      if (!panel) return

      const forward = e.key === 'PageDown' || e.key === 'ArrowRight'
      const backward = e.key === 'PageUp' || e.key === 'ArrowLeft'

      if (forward) {
        const next = panel.nextElementSibling
        if (isPanel(next)) {
          e.preventDefault()
          transitionTo(next, 'next')
        }
      } else if (backward) {
        const prev = panel.previousElementSibling
        if (isPanel(prev)) {
          e.preventDefault()
          transitionTo(prev, 'prev')
        }
      }
    }

    main.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKey)

    return () => {
      main?.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKey)
      if (transitionTimer != null) window.clearTimeout(transitionTimer)
    }
  }, [])
}

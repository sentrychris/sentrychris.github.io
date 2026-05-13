/**
 * motion.ts — shared scroll + mouse parallax pipeline.
 *
 * One rAF loop reads <main>.scrollLeft (desktop horizontal pager) or
 * window.scrollY (mobile vertical) and the cursor position, then writes
 * to a small set of observables that components subscribe to via hooks.
 *
 * Avoids each animated component running its own scroll listener +
 * rAF — there's a single source of truth shared across the Three.js
 * scene, the SVG schematic, and per-section reveal animations.
 */

import { useEffect, useRef, useState } from 'react'

type Listener = (state: MotionState) => void

export interface MotionState {
  /** 0..N progress along the horizontal pager (or vertical on mobile). */
  scrollProgress: number
  /** Raw scrollLeft px (desktop) or scrollY px (mobile). */
  scrollPx: number
  /** Total scroll extent — max scrollLeft (desktop) or full doc - vp (mobile). */
  scrollMax: number
  /** Smoothed pointer position, normalised to [-1, 1] from viewport center. */
  pointerX: number
  pointerY: number
  /** Raw client pointer position, px. */
  pointerClientX: number
  pointerClientY: number
  /** True if pointer is currently active over the page. */
  pointerActive: boolean
  /** True when the user prefers reduced motion. */
  reducedMotion: boolean
  /** True on desktop horizontal-pager layout. */
  desktop: boolean
}

const state: MotionState = {
  scrollProgress: 0,
  scrollPx: 0,
  scrollMax: 1,
  pointerX: 0,
  pointerY: 0,
  pointerClientX: 0,
  pointerClientY: 0,
  pointerActive: false,
  reducedMotion: false,
  desktop: false,
}

const listeners = new Set<Listener>()
let initialised = false
let targetPx = 0
let targetClientX = 0
let targetClientY = 0
let smoothedPointerX = 0
let smoothedPointerY = 0
let mainEl: HTMLElement | null = null

function emit() {
  for (const fn of listeners) fn(state)
}

function frame() {
  // Eased smoothing — both scroll and pointer move toward their targets
  // at a fixed lerp rate so external listeners get a buttery signal even
  // when the user wheels in big chunks.
  const SCROLL_LERP = 0.18
  const POINTER_LERP = 0.08

  state.scrollPx += (targetPx - state.scrollPx) * SCROLL_LERP
  if (Math.abs(targetPx - state.scrollPx) < 0.2) state.scrollPx = targetPx

  smoothedPointerX += (targetClientX - smoothedPointerX) * POINTER_LERP
  smoothedPointerY += (targetClientY - smoothedPointerY) * POINTER_LERP

  state.pointerClientX = smoothedPointerX
  state.pointerClientY = smoothedPointerY

  const w = window.innerWidth || 1
  const h = window.innerHeight || 1
  state.pointerX = (smoothedPointerX / w) * 2 - 1
  state.pointerY = (smoothedPointerY / h) * 2 - 1

  state.scrollMax = Math.max(1, getMax())
  state.scrollProgress = Math.min(1, Math.max(0, state.scrollPx / state.scrollMax))

  emit()
  requestAnimationFrame(frame)
}

function getMax(): number {
  if (state.desktop && mainEl) {
    return mainEl.scrollWidth - mainEl.clientWidth
  }
  return Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
}

function readScroll() {
  if (state.desktop && mainEl) {
    targetPx = mainEl.scrollLeft
  } else {
    targetPx = window.scrollY
  }
}

function onPointerMove(e: PointerEvent) {
  targetClientX = e.clientX
  targetClientY = e.clientY
  if (!state.pointerActive) {
    state.pointerActive = true
  }
}

function onPointerLeave() {
  // Drift pointer back to centre when the user leaves.
  targetClientX = window.innerWidth / 2
  targetClientY = window.innerHeight / 2
  state.pointerActive = false
}

function bindScroll() {
  state.desktop = window.matchMedia('(min-width: 921px)').matches
  mainEl = document.querySelector('main')
  if (state.desktop && mainEl) {
    mainEl.addEventListener('scroll', readScroll, { passive: true })
  } else {
    window.addEventListener('scroll', readScroll, { passive: true })
  }
  readScroll()
  state.scrollPx = targetPx
}

function initMotion() {
  if (initialised) return
  initialised = true

  state.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  targetClientX = window.innerWidth / 2
  targetClientY = window.innerHeight / 2
  smoothedPointerX = targetClientX
  smoothedPointerY = targetClientY

  bindScroll()

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerleave', onPointerLeave)
  window.addEventListener('resize', readScroll)

  const mql = window.matchMedia('(min-width: 921px)')
  const onLayoutChange = () => {
    if (mainEl && state.desktop) mainEl.removeEventListener('scroll', readScroll)
    else window.removeEventListener('scroll', readScroll)
    bindScroll()
  }
  mql.addEventListener('change', onLayoutChange)

  requestAnimationFrame(frame)
}

/**
 * Imperative subscription. Returns an unsubscribe. Initialises the
 * pipeline on first call. Listeners are called every rAF after smoothing.
 */
export function subscribeMotion(fn: Listener): () => void {
  if (typeof window !== 'undefined') initMotion()
  listeners.add(fn)
  fn(state)
  return () => listeners.delete(fn)
}

export function getMotionState(): MotionState {
  return state
}

/**
 * useMotion — React subscription. By default just initialises and lets
 * the caller read via getMotionState() inside its own rAF (so we don't
 * re-render every frame). Pass `subscribe: true` to opt into setState
 * on every frame — only use this for tiny components.
 */
export function useMotion(subscribe = false): MotionState {
  const [snap, setSnap] = useState(state)
  useEffect(() => {
    if (!subscribe) {
      initMotion()
      return
    }
    return subscribeMotion(setSnap)
  }, [subscribe])
  return snap
}

/**
 * useMotionRaf — register a callback to fire on every motion frame
 * without triggering React re-renders. Ideal for refs/canvas/inline
 * style mutations driven by scroll or pointer.
 */
export function useMotionRaf(cb: (s: MotionState) => void) {
  const cbRef = useRef(cb)
  cbRef.current = cb
  useEffect(() => {
    return subscribeMotion((s) => cbRef.current(s))
  }, [])
}

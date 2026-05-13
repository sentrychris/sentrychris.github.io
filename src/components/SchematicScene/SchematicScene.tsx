import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { subscribeMotion } from '../../lib/motion'
import styles from './SchematicScene.module.css'

/**
 * SchematicScene — fixed-position WebGL backdrop that renders a 3D
 * wireframe field of construction shapes drifting in depth.
 *
 * It is the back-most layer of the app stack:
 *
 *   z = -3   SchematicScene  (this)        — Three.js wireframe field
 *   z = -1   Schematic 2D overlay          — flat blueprint marginalia
 *   z =  0   WireDiagram between panels    — animated SVG curves
 *   z =  1+  Sections                       — actual content
 *
 * Performance budget: ~5 wireframe meshes + ~3000 points. One scene,
 * one render loop, paused under prefers-reduced-motion (a single static
 * frame is rendered then the loop stops).
 */
export function SchematicScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Read theme colours from CSS vars so we recolour on theme change.
    const rootStyle = () => getComputedStyle(document.documentElement)
    const readColour = (name: string, fallback: string) => {
      const raw = rootStyle().getPropertyValue(name).trim()
      return new THREE.Color(raw || fallback)
    }

    let accent = readColour('--accent', '#74b99e')
    let ink = readColour('--ink', '#d8ddbe')

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'low-power',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x091413, 14, 38)

    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 80)
    camera.position.set(0, 0, 18)

    // ─── Wireframe geometry — five "constructions" arranged at depths
    //     so the camera drift reveals them one at a time. ────────────
    const constructions: THREE.LineSegments[] = []
    const constructionsFill: THREE.Points[] = []

    const addWireframe = (
      geo: THREE.BufferGeometry,
      pos: [number, number, number],
      rotSpeed: [number, number, number],
      scale = 1,
      colourMix = 0.8,
    ) => {
      const edges = new THREE.EdgesGeometry(geo, 1)
      const mat = new THREE.LineBasicMaterial({
        color: ink.clone().lerp(accent, colourMix),
        transparent: true,
        opacity: 0.03,
        depthWrite: false,
      })
      const mesh = new THREE.LineSegments(edges, mat)
      mesh.position.set(...pos)
      mesh.scale.setScalar(scale)
      mesh.userData.rotSpeed = rotSpeed
      mesh.userData.basePos = [...pos]
      scene.add(mesh)
      constructions.push(mesh)

      // A faint vertex-points overlay so the wireframe has anchor dots
      // at each joint — classic schematic feel.
      const ptsGeo = new THREE.BufferGeometry()
      ptsGeo.setAttribute('position', geo.attributes.position.clone())
      const ptsMat = new THREE.PointsMaterial({
        color: accent,
        size: 0.08,
        transparent: true,
        opacity: 0.03,
        sizeAttenuation: true,
        depthWrite: false,
      })
      const pts = new THREE.Points(ptsGeo, ptsMat)
      pts.position.set(...pos)
      pts.scale.setScalar(scale)
      scene.add(pts)
      constructionsFill.push(pts)
    }

    // A scattered family of platonic-ish solids. Positions chosen so
    // each construction has its own quadrant of "deep space".
    addWireframe(new THREE.IcosahedronGeometry(2.4, 1), [-7, 1.2, -2], [0.06, 0.10, 0])
    addWireframe(new THREE.TorusGeometry(2.2, 0.05, 6, 64), [6, -1.5, -4], [0.02, 0.18, 0.04], 1, 1)
    addWireframe(new THREE.OctahedronGeometry(1.8, 0), [-3, -2.4, 4], [0.08, 0.05, 0.02])
    addWireframe(new THREE.IcosahedronGeometry(3.6, 0), [10, 3, -10], [0.03, 0.06, 0], 1, 0.5)
    addWireframe(new THREE.RingGeometry(2.4, 2.42, 64, 1), [0, 0, -6], [0, 0, 0.04], 1, 1)
    addWireframe(new THREE.TorusKnotGeometry(1.4, 0.18, 80, 8, 2, 3), [-9, -3, -8], [0.04, 0.07, 0])
    addWireframe(new THREE.DodecahedronGeometry(1.4, 0), [3, 3, 2], [0.05, 0.04, 0.03])

    // ─── Long-axis polylines — the "ruler" lines that thread the scene.
    const rulerMat = new THREE.LineBasicMaterial({
      color: ink,
      transparent: true,
      opacity: 0.06,
      depthWrite: false,
    })
    const rulerGeo = (axis: 'x' | 'y' | 'z', span = 40, offset: [number, number, number] = [0, 0, 0]) => {
      const pts: THREE.Vector3[] = []
      const a = -span / 2
      const b = span / 2
      const [ox, oy, oz] = offset
      if (axis === 'x') {
        pts.push(new THREE.Vector3(a + ox, oy, oz), new THREE.Vector3(b + ox, oy, oz))
      } else if (axis === 'y') {
        pts.push(new THREE.Vector3(ox, a + oy, oz), new THREE.Vector3(ox, b + oy, oz))
      } else {
        pts.push(new THREE.Vector3(ox, oy, a + oz), new THREE.Vector3(ox, oy, b + oz))
      }
      return new THREE.BufferGeometry().setFromPoints(pts)
    }
    scene.add(new THREE.Line(rulerGeo('x'), rulerMat))
    scene.add(new THREE.Line(rulerGeo('y'), rulerMat))
    scene.add(new THREE.Line(rulerGeo('z'), rulerMat))

    // ─── Point cloud — datum dots scattered in a torus shell so the
    //     camera always sees stars no matter the orbit angle. ───────
    const STARS = 1400
    const starGeo = new THREE.BufferGeometry()
    const starPos = new Float32Array(STARS * 3)
    const starCol = new Float32Array(STARS * 3)
    const accentVec = new THREE.Color().copy(accent)
    const inkVec = new THREE.Color().copy(ink)
    for (let i = 0; i < STARS; i++) {
      // Spherical shell, radius 12–26.
      const r = 12 + Math.random() * 14
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      starPos[i * 3 + 2] = r * Math.cos(phi)
      const c = Math.random() < 0.18 ? accentVec : inkVec
      starCol[i * 3] = c.r
      starCol[i * 3 + 1] = c.g
      starCol[i * 3 + 2] = c.b
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3))
    const starMat = new THREE.PointsMaterial({
      size: 0.045,
      transparent: true,
      opacity: 0.1,
      vertexColors: true,
      sizeAttenuation: true,
      depthWrite: false,
    })
    const stars = new THREE.Points(starGeo, starMat)
    scene.add(stars)

    // ─── Compass-arc traces — three big great-circles drawn around
    //     the origin, slowly rotating on different axes. ─────────────
    const arcs: THREE.Line[] = []
    const makeArc = (radius: number, segments: number, axis: THREE.Vector3) => {
      const points: THREE.Vector3[] = []
      for (let i = 0; i <= segments; i++) {
        const t = (i / segments) * Math.PI * 2
        points.push(new THREE.Vector3(Math.cos(t) * radius, 0, Math.sin(t) * radius))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points)
      const mat = new THREE.LineBasicMaterial({
        color: accent,
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
      })
      const line = new THREE.Line(geo, mat)
      line.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), axis.clone().normalize())
      line.userData.axis = axis.clone().normalize()
      scene.add(line)
      arcs.push(line)
    }
    makeArc(9, 128, new THREE.Vector3(1, 0.2, 0))
    makeArc(11, 128, new THREE.Vector3(0.4, 1, 0.2))
    makeArc(13, 128, new THREE.Vector3(0.15, 0.3, 1))

    // ─── Sizing + DPR ─────────────────────────────────────────────
    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    // ─── Motion integration ───────────────────────────────────────
    // Smoothed pointer + scroll target the camera and scene rotation.
    let mouseRotX = 0
    let mouseRotY = 0
    let scrollRot = 0
    const unsub = subscribeMotion((s) => {
      mouseRotX = s.pointerY * 0.18
      mouseRotY = s.pointerX * 0.28
      scrollRot = s.scrollProgress * Math.PI * 0.8
    })

    // ─── Theme change observer — recolour when [data-theme] flips ─
    const themeObserver = new MutationObserver(() => {
      accent = readColour('--accent', '#74b99e')
      ink = readColour('--ink', '#d8ddbe')
      constructions.forEach((c) => {
        const mat = c.material as THREE.LineBasicMaterial
        mat.color.copy(ink).lerp(accent, c.userData.colourMix ?? 0.8)
      })
      arcs.forEach((a) => {
        const mat = a.material as THREE.LineBasicMaterial
        mat.color.copy(accent)
      })
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    // ─── Render loop ──────────────────────────────────────────────
    let raf = 0
    const clock = new THREE.Clock()

    const tick = () => {
      const dt = clock.getDelta()
      const elapsed = clock.elapsedTime

      // Camera parallax — easing handled in motion.ts already.
      const targetX = mouseRotY * 2.2
      const targetY = -mouseRotX * 1.6
      camera.position.x += (targetX - camera.position.x) * 0.04
      camera.position.y += (targetY - camera.position.y) * 0.04
      // Pull camera closer as the user scrolls further into the site.
      const targetZ = 18 - scrollRot * 1.6
      camera.position.z += (targetZ - camera.position.z) * 0.03
      camera.lookAt(0, 0, 0)

      // Scene-wide rotation tied to scroll — drift on the Y axis.
      scene.rotation.y = scrollRot * 0.6
      scene.rotation.x = Math.sin(scrollRot * 0.6) * 0.08

      // Per-construction idle rotation.
      for (const m of constructions) {
        const [rx, ry, rz] = m.userData.rotSpeed
        m.rotation.x += rx * dt
        m.rotation.y += ry * dt
        m.rotation.z += rz * dt
      }
      for (let i = 0; i < constructionsFill.length; i++) {
        constructionsFill[i].rotation.copy(constructions[i].rotation)
      }

      // Compass arcs precess slowly.
      for (let i = 0; i < arcs.length; i++) {
        arcs[i].rotation.y += (0.03 + i * 0.01) * dt
        arcs[i].rotation.x += (0.01 + i * 0.005) * dt
      }

      // Stars drift, with a subtle breathing on opacity.
      stars.rotation.y += dt * 0.012
      starMat.opacity = 0 //.32 + Math.sin(elapsed * 0.4) * 0.06

      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }

    if (reduce) {
      // Render one static frame, no loop.
      renderer.render(scene, camera)
    } else {
      raf = requestAnimationFrame(tick)
    }

    // Pause rendering when the tab is hidden.
    const onVisibility = () => {
      if (document.hidden) {
        if (raf) cancelAnimationFrame(raf)
        raf = 0
      } else if (!raf && !reduce) {
        clock.start()
        raf = requestAnimationFrame(tick)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      themeObserver.disconnect()
      unsub()
      // Dispose GPU resources.
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points || obj instanceof THREE.LineSegments) {
          obj.geometry.dispose()
          const m = obj.material as THREE.Material | THREE.Material[]
          if (Array.isArray(m)) m.forEach((x) => x.dispose())
          else m.dispose()
        }
      })
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
    />
  )
}

import { Nav } from './components/Nav'
import { Tracker } from './components/Tracker'
import { Footer } from './components/Footer'
import { Schematic } from './components/Schematic'
import { SchematicScene } from './components/SchematicScene'
import { WireDiagram } from './components/WireDiagram'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { navLinks } from './content/nav'
import { useLanguage } from './lib/useLanguage'
import { useHorizontalScroll } from './lib/useHorizontalScroll'

function App() {
  // Desktop: vertical wheel becomes horizontal page snap once a section
  // is exhausted. Hook is a noop on mobile.
  useHorizontalScroll()

  const { lang } = useLanguage()

  return (
    <>
      {/* Backdrop stack (back to front):
            z = -3   SchematicScene  — Three.js wireframe field
            z = -1   Schematic       — flat blueprint marginalia
            z =  1+  Sections        — content
            z =  2   WireDiagram     — bottom oscilloscope trace */}
      <SchematicScene />
      <Schematic />
      <Nav links={navLinks[lang]} />
      <Tracker />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer
          links={[
            { href: 'https://github.com/sentrychris', label: 'GitHub' },
            { href: 'https://linkedin.com/in/chris-rowles', label: 'LinkedIn' },
          ]}
        />
      </main>
      <WireDiagram />
    </>
  )
}

export default App

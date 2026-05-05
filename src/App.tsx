import { Nav } from './components/Nav'
import { Tracker } from './components/Tracker'
import { Footer } from './components/Footer'
import { Schematic } from './components/Schematic'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { navLinks } from './content/nav'
import { useHorizontalScroll } from './lib/useHorizontalScroll'

function App() {
  // Desktop: vertical wheel becomes horizontal page snap once a section
  // is exhausted. Hook is a noop on mobile.
  useHorizontalScroll()

  return (
    <>
      <Schematic />
      <Nav links={navLinks} />
      <Tracker />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        {/* Footer lives inside <main> so the desktop horizontal-page
            layout treats it as a final panel after Contact (instead
            of an out-of-flow element below the locked viewport). On
            mobile it falls back to its natural below-the-scroll
            position via the long-scroll layout. */}
        <Footer
          links={[
            { href: 'https://github.com/sentrychris', label: 'GitHub' },
            { href: 'https://linkedin.com/in/chris-rowles', label: 'LinkedIn' },
          ]}
        />
      </main>
    </>
  )
}

export default App

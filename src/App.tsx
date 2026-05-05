import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Schematic } from './components/Schematic'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { navLinks } from './content/nav'

function App() {
  return (
    <>
      <Schematic />
      <Nav links={navLinks} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer
        links={[
          { href: 'https://github.com/sentrychris', label: 'GitHub' },
          { href: 'https://linkedin.com/in/chris-rowles', label: 'LinkedIn' },
        ]}
      />
    </>
  )
}

export default App

// // import Image from 'next/image'
// import { Inter } from 'next/font/google'

import { AboutMe } from './components/AboutMe'
import { ContactMe } from './components/ContactMe'
import { Experience } from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden  z-0">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center h-screen overflow-y-hidden">
        <AboutMe />
      </section>

      <section id="Experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}

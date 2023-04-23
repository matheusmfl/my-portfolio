// // import Image from 'next/image'
// import { Inter } from 'next/font/google'

import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'

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

      <section className="snap-center">
        <Experience />
      </section>
    </div>
  )
}

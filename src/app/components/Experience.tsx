'use client'
import { motion } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col
     text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-xl z-20">
        Experiência
      </h3>

      <div className="w-full flex max-h-[90%] space-x-5 overflow-x-scroll snap-x snap-mandatory p-10 ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

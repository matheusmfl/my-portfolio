'use client'
import { motion } from 'framer-motion'

export function AboutMe() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre mim!
      </h3>

      <motion.img
        src="https://avatars.githubusercontent.com/u/92957086?v=4"
        initial={{
          x: -200,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      />
    </div>
  )
}

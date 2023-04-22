'use client'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between max-w-7xl
    mx-auto z-20 xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 3.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          url="https://twitter.com/matheusmfl"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/matheusmfl"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/matheusmfl"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/matheusmfl"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 3.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-4">
          Contate-me via e-mail
        </p>
      </motion.div>
    </header>
  )
}

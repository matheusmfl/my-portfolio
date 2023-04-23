import { motion } from 'framer-motion'
type props = {
  directionLeft?: boolean
}

export function Skill({ directionLeft }: props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        src="https://yt3.googleusercontent.com/ytc/AGIKgqMyeURlC9A1NyCFMkUGNlZdJD65UrY-PT6drmTYVA=s900-c-k-c0x00ffffff-no-rj"
        alt="Seila"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 
        xl:h-32 xl:w-32 md:w-28 md:h-28 filter group-hover:grayscale
        transition duration-300 ease-in-out "
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white w-24 h-24 
      xl:h-32 xl:w-32 md:w-28 md:h-28 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100 ">100%</p>
        </div>
      </div>
    </div>
  )
}

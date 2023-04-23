'use client'
import { motion } from 'framer-motion'

export function AboutMe() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative flex-col text-center
     md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 lg:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl">
        Sobre
      </h3>

      <motion.img
        className=" mt-52 md:mt-28 lg:mt-0 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full 
        object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        src="https://avatars.githubusercontent.com/u/92957086?v=4"
        initial={{
          x: -200,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Aqui vai um{' '}
          <span className="underline decoration-[#F7AB04]/50">pequeno </span>
          textinho legal!
        </h4>
        <p className="text-base max-h-56 line-clamp-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          adipisci dolores neque, odio qui reprehenderit minus odit aspernatur
          harum iure accusamus magnam reiciendis sint itaque aliquam natus
          beatae repellendus. Laborum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores adipisci dolores neque, odio qui
          reprehenderit minus odit aspernatur harum iure accusamus magnam
          reiciendis sint itaque aliquam natus beatae repellendus. Laborum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          adipisci dolores neque, odio qui reprehenderit minus odit aspernatur
          harum iure accusamus magnam reiciendis sint itaque aliquam natus
          beatae repellendus. Laborum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores adipisci dolores neque, odio qui
          reprehenderit minus odit aspernatur harum iure accusamus magnam
          reiciendis sint itaque aliquam natus beatae repellendus. Laborum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          adipisci dolores neque, odio qui reprehenderit minus odit aspernatur
          harum iure accusamus magnam reiciendis sint itaque aliquam natus
          beatae repellendus. Laborum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores adipisci dolores neque, odio qui
          reprehenderit minus odit aspernatur harum iure accusamus magnam
          reiciendis sint itaque aliquam natus beatae repellendus. Laborum!
        </p>
      </div>
    </motion.div>
  )
}

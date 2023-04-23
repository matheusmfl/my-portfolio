import { motion } from 'framer-motion'
import Image from 'next/image'

export function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
     flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src="https://yt3.googleusercontent.com/ytc/AGIKgqMyeURlC9A1NyCFMkUGNlZdJD65UrY-PT6drmTYVA=s900-c-k-c0x00ffffff-no-rj"
        alt="Alternative"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Desenvolvedor de Softwares</h4>
        <p className="font-bold text-2xl mt-1">La Aust - inc</p>
        <div className="flex space-x-2 my-2">
          <Image
            src={
              'https://yt3.googleusercontent.com/ytc/AGIKgqMyeURlC9A1NyCFMkUGNlZdJD65UrY-PT6drmTYVA=s900-c-k-c0x00ffffff-no-rj'
            }
            alt="Icone"
            width={10}
            height={10}
            className="rounded-full"
          />
          <p>Tecnologias usadas...</p>
        </div>
        <p className="uppercase py-5 text-gray-300">Junho / 2022 - Atual... </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Criação de soluções digitais</li>
          <li>Marketing aplicado ao código</li>
          <li>Criação de LandingPages</li>
          <li>Aplicações web de alta performance</li>
          <li>Desenvolvimento Back-End</li>
        </ul>
      </div>
    </article>
  )
}

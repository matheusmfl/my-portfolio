'use client'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BackgroundCircles } from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      'Olá!!',
      'Me chamo Matheus Fonteles.',
      'Dev de aplicações p/ web ',
      '<Programador front-end/>',
    ],
    loop: true,
    delaySpeed: 1100,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={'https://avatars.githubusercontent.com/u/92957086?v=4'}
        alt="avatar"
        className="relative rounded-full mx-auto object-cover "
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Desenvolvedor de software
        </h2>
        <h1 className="text-xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href={'#'}>
            <button className="heroButton">Sobre mim</button>
          </Link>

          <Link href={'#'}>
            <button className="heroButton">Experiência</button>
          </Link>

          <Link href={'#'}>
            <button className="heroButton">Habilidades</button>
          </Link>

          <Link href={'#'}>
            {' '}
            <button className="heroButton">Projetos</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

'use client'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BackgroundCircles } from './BackgroundCircles'
import Image from 'next/image'

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      'Olá, meu nome é Matheus Fonteles!',
      'Desenvolvedor de aplicações web ',
      '<Programador front-end/>',
    ],
    loop: true,
    delaySpeed: 1500,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={'https://avatars.githubusercontent.com/u/92957086?v=4'}
        alt="avatar"
        className="relative rounded-full mx-auto object-cover w"
        width={128}
        height={128}
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Desenvolvedor de software
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div>
          <button className="heroButton">Sobre mim</button>
          <button className="heroButton">Experiência</button>
          <button className="heroButton">Habilidades</button>
          <button className="heroButton">Projetos</button>
        </div>
      </div>
    </div>
  )
}

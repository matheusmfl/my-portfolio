'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <div>
      <p>
        <Typewriter
          words={[
            ' Olá, meu nome é Matheus Fonteles!',
            ' Desenvolvedor de aplicações web ',
            ' <Programador front-end/>',
          ]}
          delaySpeed={2000}
          loop={true}
        />
      </p>
    </div>
  )
}

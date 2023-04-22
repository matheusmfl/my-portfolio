'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <div>
      <p>
        Seila fulano{' '}
        <Typewriter
          words={['olá', 'meu nome é ', 'Matheus']}
          typeSpeed={80}
          loop={true}
          cursorBlinking={true}
        />
      </p>
    </div>
  )
}

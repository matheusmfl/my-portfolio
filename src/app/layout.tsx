import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Matheus Fonteles | Desenvolvedor',
  description: 'Desenvolvimento de aplicações',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RouletteVerse',
  description: 'Next generation of crypto roulette gaming',
  icons: {
    icon: '/favicon1.svg',
    shortcut: '/favicon1.svg',
    apple: '/favicon1.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="bg-[#0D0F15] text-white font-sans">
        {children}
      </body>
    </html>
  )
}

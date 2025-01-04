import './globals.css'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata = {
  title: 'RouletteVerse',
  description: 'Experience the Future of Crypto Roulette',
  icons: {
    icon: '/favicon1.svg',
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

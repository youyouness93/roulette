'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ConnectWalletModal } from './wallet/connect-wallet-modal'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleConnect = async (walletType: string) => {
    try {
      setError(undefined)
      // Ici on ajoutera la logique de connexion réelle
      console.log('Connecting to', walletType)
      // Simuler une erreur pour le test
      if (Math.random() > 0.5) {
        throw new Error('User rejected the request')
      }
      setIsModalOpen(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect')
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1A1E26E6]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-white text-3xl font-bold">
              RouletteVerse
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/game" className="text-white hover:text-[#00E0FF] transition-colors">
              Play Now
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20
                text-emerald-400 font-semibold transition-all duration-200
                hover:bg-emerald-500/20 hover:border-emerald-400/50
                focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      <ConnectWalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnect={handleConnect}
        error={error}
      />
    </header>
  )
}

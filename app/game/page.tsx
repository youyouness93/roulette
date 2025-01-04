'use client'

import { useState, useEffect } from 'react'
import Header from '../../components/header'
import { RouletteStrip } from '../../components/game/roulette-strip'
import { RouletteBoard } from '../../components/game/roulette-board'
import { GameTimer } from '../../components/game/game-timer'
import { ChipSelector } from '../../components/game/chip-selector'
import { PlayersList } from '../../components/game/players-list'
import AnimatedBackground from '../../components/animated-background'
import { PlayerAvatar } from '../../components/game/player-avatar'
import { ConnectWalletModal } from '../../components/wallet/connect-wallet-modal'
import { ConnectPromptModal } from '../../components/wallet/connect-prompt-modal'

type Gender = 'male' | 'female'

interface Player {
  id: string
  name: string
  chips: number
  gender: Gender
  isActive?: boolean
}

interface Chip {
  value: number
  image: string
  currency: string
  color: string
}

// Mock data
const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'CryptoWhale',
    chips: 50000,
    gender: 'male',
    isActive: true
  },
  {
    id: '2',
    name: 'BlockchainQueen',
    chips: 75000,
    gender: 'female'
  },
  {
    id: '3',
    name: 'TokenMaster',
    chips: 32000,
    gender: 'male'
  },
  {
    id: '4',
    name: 'NFTHunter',
    chips: 98000,
    gender: 'female',
    isActive: true
  }
]

const mockChips: Chip[] = [
  { value: 10, image: '/chips/50.png', currency: 'CHIP', color: '#9C27B0' },
  { value: 50, image: '/chips/50.png', currency: 'CHIP', color: '#9C27B0' },
  { value: 100, image: '/chips/100.png', currency: 'CHIP', color: '#4CAF50' },
  { value: 250, image: '/chips/100.png', currency: 'CHIP', color: '#4CAF50' },
  { value: 500, image: '/chips/100.png', currency: 'CHIP', color: '#4CAF50' }
]

const rouletteNumbers = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]

export default function Page() {
  const [selectedChip, setSelectedChip] = useState<Chip>(mockChips[0])
  const [isSpinning, setIsSpinning] = useState(false)
  const [winningNumber, setWinningNumber] = useState<number>()
  const [canSpin, setCanSpin] = useState(true)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [showConnectModal, setShowConnectModal] = useState(false)
  const previousNumbers = [32, 15, 19, 4, 21, 2, 25]

  const handleTimeout = () => {
    // Generate random winning number
    const randomNumber = rouletteNumbers[Math.floor(Math.random() * rouletteNumbers.length)]
    setWinningNumber(randomNumber)
    setIsSpinning(true)
    setIsTimerRunning(false)
    setCanSpin(false)
  }

  const handleSpinComplete = () => {
    setIsSpinning(false)
    // Démarrer automatiquement le timer après la fin de l'animation
    setTimeout(() => {
      setCanSpin(true)
      setIsTimerRunning(true)
    }, 2000)
  }

  const handlePlaceBet = (position: string) => {
    console.log('Bet placed on:', position, 'with chip:', selectedChip.value)
  }

  const handleCancelBet = (position: string, chipValue: number) => {
    console.log('Bet cancelled on:', position, 'chip value:', chipValue)
  }

  const handleConnect = (walletType: string) => {
    console.log('Connecting to wallet:', walletType)
    setIsConnected(true)
    setShowConnectModal(false)
  }

  useEffect(() => {
    setIsTimerRunning(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0D0F15]">
      <AnimatedBackground />
      <Header />
      
      {/* Game Container */}
      <div className="w-full pt-20 pb-4">
        <div className="w-[70%] mx-auto">
          {/* Main Game Area */}
          <div className={`relative rounded-2xl overflow-hidden bg-[#0B2A2A]/90 backdrop-blur-md
            shadow-[0_0_50px_rgba(0,255,200,0.1)] border border-emerald-500/10
            ${!isConnected ? 'opacity-50 pointer-events-none filter grayscale' : ''}`}>
            
            {/* Cyber lines decoration */}
            <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />
            
            {/* Top Bar with Timer */}
            <div className="relative bg-black/30 backdrop-blur-md border-b border-emerald-500/20 p-2">
              <GameTimer 
                startTime={10} 
                onTimeout={handleTimeout}
                isRunning={isTimerRunning}
              />
            </div>

            {/* Game Content */}
            <div className="p-4 relative">
              {/* Roulette Title */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 
                text-emerald-400/30 text-2xl font-mono tracking-wider uppercase">
                 
              </div>

              {/* Roulette Strip */}
              <div className="mb-8">
                <RouletteStrip
                  winningNumber={winningNumber}
                  isSpinning={isSpinning}
                  onSpinComplete={handleSpinComplete}
                />
              </div>

              {/* Game Layout */}
              <div className="grid grid-cols-12 gap-4">
                {/* Left Players */}
                <div className="col-span-2 space-y-2">
                  <PlayersList
                    players={mockPlayers.slice(0, 2)}
                  />
                </div>

                {/* Center Game Board */}
                <div className="col-span-8">
                  <RouletteBoard 
                    onPlaceBet={handlePlaceBet} 
                    onCancelBet={handleCancelBet}
                  />
                  <div className="h-[90px]"></div>
                </div>

                {/* Right Players */}
                <div className="col-span-2 space-y-2">
                  <PlayersList
                    players={mockPlayers.slice(2)}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="w-full space-y-3">
              {/* Current Player */}
              <div className="flex justify-center">
                <PlayerAvatar
                  name={mockPlayers[0].name}
                  chips={mockPlayers[0].chips}
                  gender={mockPlayers[0].gender}
                  isActive={true}
                />
              </div>

              <ChipSelector
                balance={50000}
                chips={mockChips}
                selectedChip={selectedChip}
                onSelectChip={setSelectedChip}
                playersCount={mockPlayers.length}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Connect Wallet Modals */}
      {!isConnected && (
        <ConnectPromptModal onConnectClick={() => setShowConnectModal(true)} />
      )}
      
      <ConnectWalletModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
        onConnect={handleConnect}
      />
    </div>
  )
}

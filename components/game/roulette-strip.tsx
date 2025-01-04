'use client'

import { useState, useEffect, useRef } from 'react'

interface RouletteStripProps {
  winningNumber?: number
  isSpinning?: boolean
  onSpinComplete?: () => void
}

const rouletteNumbers = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]
const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
const previousNumbers = [32, 15, 19, 4, 21, 2, 25]

// Get initial 15 numbers starting from a random position
const getInitialNumbers = () => {
  const startIndex = Math.floor(Math.random() * rouletteNumbers.length)
  const numbers = []
  for (let i = 0; i < 15; i++) {
    const index = (startIndex + i) % rouletteNumbers.length
    numbers.push(rouletteNumbers[index])
  }
  return numbers
}

export function RouletteStrip({ winningNumber, isSpinning, onSpinComplete }: RouletteStripProps) {
  const [displayedNumbers, setDisplayedNumbers] = useState<number[]>(getInitialNumbers())
  const [animationSpeed, setAnimationSpeed] = useState(50)
  const [previousResults, setPreviousResults] = useState<number[]>(previousNumbers)
  const intervalRef = useRef<NodeJS.Timeout>()
  const elapsedRef = useRef(0)
  const isAnimatingRef = useRef(false)
  const spinCountRef = useRef(0)

  // Arrêter l'animation
  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
    elapsedRef.current = 0
    isAnimatingRef.current = false
    spinCountRef.current = 0
  }

  useEffect(() => {
    if (!isSpinning) {
      stopAnimation()
      return
    }

    if (isSpinning && winningNumber !== undefined && !isAnimatingRef.current) {
      isAnimatingRef.current = true
      const duration = 10000 // 10 secondes
      const phases = [
        { duration: 2000, speed: 100 },  // Phase 1: Rapide mais visible
        { duration: 3000, speed: 150 },  // Phase 2: Vitesse moyenne
        { duration: 3000, speed: 250 },  // Phase 3: Ralentissement
        { duration: 2000, speed: 400 }   // Phase 4: Très lent
      ]

      let currentPhase = 0
      let phaseStartTime = 0

      intervalRef.current = setInterval(() => {
        elapsedRef.current += 50 // Update moins fréquentes

        // Déterminer la phase actuelle
        let totalDuration = 0
        for (let i = 0; i < phases.length; i++) {
          totalDuration += phases[i].duration
          if (elapsedRef.current <= totalDuration) {
            if (currentPhase !== i) {
              currentPhase = i
              phaseStartTime = elapsedRef.current - (totalDuration - phases[i].duration)
            }
            break
          }
        }

        // Mettre à jour les numéros
        setDisplayedNumbers(prev => {
          spinCountRef.current++
          const currentIndex = rouletteNumbers.indexOf(prev[prev.length - 1] || 0)
          const nextIndex = (currentIndex + 1) % rouletteNumbers.length
          return [...prev.slice(-14), rouletteNumbers[nextIndex]]
        })

        // Mettre à jour la vitesse
        if (currentPhase < phases.length) {
          setAnimationSpeed(phases[currentPhase].speed)
        }

        // Vérifier si l'animation est terminée
        if (elapsedRef.current >= duration) {
          stopAnimation()
          
          // Définir les numéros finaux
          const finalNumbers = []
          const winningIndex = rouletteNumbers.indexOf(winningNumber)
          for (let i = 0; i < 15; i++) {
            const index = (winningIndex - 14 + i + rouletteNumbers.length) % rouletteNumbers.length
            finalNumbers.push(rouletteNumbers[index])
          }
          setDisplayedNumbers(finalNumbers)
          
          // Mettre à jour les résultats précédents
          setPreviousResults(prev => [winningNumber, ...prev].slice(0, 7))
          
          onSpinComplete?.()
        }
      }, 50)
    }

    return () => {
      stopAnimation()
    }
  }, [isSpinning, winningNumber, onSpinComplete])

  return (
    <div className="w-full bg-black/40 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-3 overflow-hidden">
      {/* Roulette Strip */}
      <div className="flex justify-center space-x-1.5 items-center mb-3">
        {displayedNumbers.map((number, index) => (
          <div
            key={`${number}-${index}-${spinCountRef.current}`}
            className={`relative w-9 h-11 flex items-center justify-center
              ${redNumbers.includes(number) ? 'bg-[#B90000]/80' : 'bg-black/80'}
              backdrop-blur-sm rounded-lg
              ${index === 7 ? `
                scale-125 
                border border-[#FFD700]
                before:absolute before:w-0 before:h-0 
                before:border-l-[8px] before:border-r-[8px] 
                before:border-b-[8px] 
                before:border-l-transparent 
                before:border-r-transparent 
                before:border-b-[#FFD700] 
                before:top-[-8px] before:left-1/2 
                before:transform before:-translate-x-1/2
                after:absolute after:w-0 after:h-0 
                after:border-l-[8px] after:border-r-[8px] 
                after:border-t-[8px] 
                after:border-l-transparent 
                after:border-r-transparent 
                after:border-t-[#FFD700] 
                after:bottom-[-8px] after:left-1/2 
                after:transform after:-translate-x-1/2
              ` : 'scale-100 border border-emerald-500/20'}
              group`}
            style={{
              transition: `transform ${animationSpeed}ms linear`
            }}
          >
            {/* Number */}
            <span className={`font-mono text-base font-bold
              ${index === 7 ? 'text-emerald-200' : 'text-white'}`}>
              {number}
            </span>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-emerald-500/30
              group-hover:border-emerald-400/50 transition-colors duration-300" />
            <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-emerald-500/30
              group-hover:border-emerald-400/50 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-emerald-500/30
              group-hover:border-emerald-400/50 transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-emerald-500/30
              group-hover:border-emerald-400/50 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Previous Results */}
      <div className="flex justify-center items-center space-x-3 mt-4">
        {previousResults.map((number, index) => (
          <div
            key={`previous-${number}-${index}`}
            className={`relative w-8 h-8 flex items-center justify-center
              ${redNumbers.includes(number) ? 'bg-[#B90000]/80' : 'bg-black/80'}
              rounded-full
              before:absolute before:inset-0 before:rounded-full
              before:border before:border-[#FFD700]/30
              after:absolute after:inset-[-1.5px] after:rounded-full
              after:border-[1.5px] after:border-[#FFD700]/20
              backdrop-blur-sm
              shadow-[0_0_8px_rgba(255,215,0,0.1)]
              group
              transition-all duration-300
              hover:scale-110`}
          >
            <span className="font-mono text-sm font-bold text-white/90 group-hover:text-white">
              {number}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

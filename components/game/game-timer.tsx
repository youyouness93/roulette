'use client'

import { useState, useEffect } from 'react'
import { Timer } from 'lucide-react'

interface GameTimerProps {
  startTime: number
  onTimeout: () => void
  isRunning?: boolean
}

export function GameTimer({ startTime, onTimeout, isRunning = false }: GameTimerProps) {
  const [timeLeft, setTimeLeft] = useState(startTime)
  const [isWarning, setIsWarning] = useState(false)
  const progress = (timeLeft / startTime) * 100

  useEffect(() => {
    // Réinitialiser le timer quand il n'est pas en cours
    if (!isRunning) {
      setTimeLeft(startTime)
      setIsWarning(false)
      return
    }

    if (timeLeft <= 5) {
      setIsWarning(true)
    }

    if (timeLeft === 0) {
      onTimeout()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onTimeout, isRunning, startTime])

  return (
    <div className="relative flex items-center justify-center h-12">
      {/* Background progress bar */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-linear
            ${isWarning ? 'bg-red-500/20' : 'bg-emerald-500/20'}
            ${progress < 50 ? 'animate-pulse' : ''}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />

      {/* Timer content */}
      <div className="relative flex items-center gap-3">
        <Timer 
          className={`w-6 h-6 ${isWarning ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}
        />
        <span className={`font-mono text-2xl font-bold
          ${isWarning ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
          {timeLeft.toString().padStart(2, '0')}s
        </span>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 
        border-emerald-500/30" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 
        border-emerald-500/30" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 
        border-emerald-500/30" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 
        border-emerald-500/30" />

      {/* Side lights */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-[60%]
        bg-gradient-to-r from-emerald-500/20 to-transparent blur-sm" />
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-[60%]
        bg-gradient-to-l from-emerald-500/20 to-transparent blur-sm" />

      {/* Warning effect */}
      {isWarning && (
        <div className="absolute inset-0 bg-red-500/5 animate-pulse rounded-lg" />
      )}
    </div>
  )
}

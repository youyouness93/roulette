'use client'

import { User } from 'lucide-react'

interface PlayerAvatarProps {
  gender?: 'male' | 'female'
  name: string
  chips?: number
  isActive?: boolean
}

export function PlayerAvatar({ gender = 'male', name, chips = 0, isActive = false }: PlayerAvatarProps) {
  return (
    <div className={`relative group ${isActive ? 'scale-105' : ''}`}>
      {/* Cyber glow effect */}
      <div className="absolute inset-0 bg-emerald-500/10 rounded-xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
      
      {/* Main container */}
      <div className="relative flex items-center gap-3 bg-[#0B2A2A]/95 backdrop-blur-md p-2.5 rounded-xl
        border border-emerald-500/20 transform transition-all duration-300 group-hover:translate-y-[-2px]
        hover:shadow-[0_0_20px_rgba(0,255,200,0.1)]">
        
        {/* Avatar hexagon */}
        <div className={`relative w-11 h-11 flex items-center justify-center
          ${gender === 'female' ? 'bg-pink-500/10' : 'bg-blue-500/10'}
          ${isActive ? 'ring-2 ring-emerald-500 shadow-[0_0_15px_rgba(0,255,200,0.2)]' : ''}
          backdrop-blur-md clip-hexagon`}>
          <User className={`w-6 h-6 ${gender === 'female' ? 'text-pink-300' : 'text-blue-300'}`} />
          
          {/* Hexagon border */}
          <div className="absolute inset-0 border border-emerald-500/20 clip-hexagon" />
        </div>

        {/* Player info */}
        <div className="flex flex-col">
          <span className="text-emerald-50/90 text-sm font-medium tracking-wide font-mono">{name}</span>
          <span className="text-emerald-400 text-xs font-medium">{chips.toLocaleString()} $</span>
        </div>

        {/* Cyber decorative elements */}
        <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5 rounded-xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 rounded-xl" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500/30 rounded-tl" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500/30 rounded-tr" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500/30 rounded-bl" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500/30 rounded-br" />
    </div>
  )
}

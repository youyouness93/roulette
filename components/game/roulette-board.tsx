'use client'

import { useState } from 'react'

interface RouletteBoardProps {
  onNumberSelect?: (number: string) => void
  onPlaceBet?: (position: string) => void
  onCancelBet?: (position: string, chipValue: number) => void
}

interface PlacedChip {
  id: string
  value: number
  position: string
}

export function RouletteBoard({ onNumberSelect, onPlaceBet, onCancelBet }: RouletteBoardProps) {
  const [placedChips, setPlacedChips] = useState<PlacedChip[]>([])

  const handleDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLButtonElement>, position: string) => {
    e.preventDefault()
    const chipData = e.dataTransfer.getData('text/plain')
    const chip = JSON.parse(chipData)
    
    const newChip = {
      id: `${position}-${Date.now()}-${Math.random()}`,
      value: chip.value,
      position
    }
    
    setPlacedChips(prev => [...prev, newChip])
    onPlaceBet?.(position)
  }

  const handleChipClick = (chip: PlacedChip, e: React.MouseEvent) => {
    e.stopPropagation()
    setPlacedChips(prev => prev.filter(c => c.id !== chip.id))
    onCancelBet?.(chip.position, chip.value)
  }

  const renderPlacedChips = (position: string) => {
    const chips = placedChips.filter(chip => chip.position === position)
    if (chips.length === 0) return null

    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {chips.map((chip) => (
          <div
            key={chip.id}
            className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto
              cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{
              zIndex: 10
            }}
            onClick={(e) => handleChipClick(chip, e)}
          >
            <img
              src={`/chips/${chip.value}.png`}
              alt={`${chip.value} chip`}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white font-bold text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                {chip.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const numbers = [
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34]
  ]

  const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]

  return (
    <div className="relative">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />

      {/* Main container */}
      <div className="relative bg-black/40 backdrop-blur-sm rounded-xl border border-emerald-500/20">
        <div className="p-4 space-y-1.5">
          {/* Numbers grid with zero and 2to1 */}
          <div className="grid grid-cols-[auto_1fr_auto] gap-1.5">
            {/* Zero */}
            <button
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, '0')}
              onClick={() => onNumberSelect?.('0')}
              className="group relative h-[156px] w-12 bg-[#0B2A2A]/90 backdrop-blur-sm rounded-lg
                border border-emerald-500/20 transition-all duration-300
                hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(0,255,200,0.2)]"
            >
              <div className="absolute inset-0 bg-emerald-500/0 transition-all duration-300
                group-hover:bg-emerald-500/10 rounded-lg" />
              <div className="relative h-full flex items-center justify-center">
                <span className="font-mono text-2xl font-bold text-emerald-400
                  group-hover:text-emerald-300 transition-colors duration-300">0</span>
              </div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/30
                group-hover:border-emerald-400/50 transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500/30
                group-hover:border-emerald-400/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500/30
                group-hover:border-emerald-400/50 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/30
                group-hover:border-emerald-400/50 transition-colors duration-300" />
              {renderPlacedChips('0')}
            </button>

            {/* Numbers grid */}
            <div className="grid grid-rows-3 gap-1.5">
              {numbers.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-12 gap-1.5">
                  {row.map((number) => (
                    <button
                      key={number}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, number.toString())}
                      onClick={() => onNumberSelect?.(number.toString())}
                      className={`group relative h-[52px] ${redNumbers.includes(number) ? 'bg-[#B90000]/80' : 'bg-black/80'}
                        backdrop-blur-sm rounded-lg border border-emerald-500/20 transition-all duration-300
                        hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(0,255,200,0.2)]`}>
                      <div className="absolute inset-0 bg-emerald-500/0 transition-all duration-300
                        group-hover:bg-emerald-500/10 rounded-lg" />
                      <span className="relative font-mono text-lg font-bold text-white
                        group-hover:text-emerald-200 transition-colors duration-300">
                        {number}
                      </span>
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-emerald-500/30
                        group-hover:border-emerald-400/50 transition-colors duration-300" />
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-emerald-500/30
                        group-hover:border-emerald-400/50 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-emerald-500/30
                        group-hover:border-emerald-400/50 transition-colors duration-300" />
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-emerald-500/30
                        group-hover:border-emerald-400/50 transition-colors duration-300" />
                      {renderPlacedChips(number.toString())}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* 2 to 1 buttons */}
            <div className="grid grid-rows-3 gap-1.5">
              {[0, 1, 2].map((index) => (
                <button
                  key={`2to1_${index}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, `2to1_${index}`)}
                  onClick={() => onNumberSelect?.(`2to1_${index}`)}
                  className="group relative h-[52px] w-12 bg-[#0B2A2A]/90 backdrop-blur-sm rounded-lg
                    border border-emerald-500/20 transition-all duration-300
                    hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(0,255,200,0.2)]">
                  <div className="absolute inset-0 bg-emerald-500/0 transition-all duration-300
                    group-hover:bg-emerald-500/10 rounded-lg" />
                  <span className="relative font-mono text-sm font-bold text-emerald-400
                    group-hover:text-emerald-300 transition-colors duration-300">2:1</span>
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-emerald-500/30
                    group-hover:border-emerald-400/50 transition-colors duration-300" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-emerald-500/30
                    group-hover:border-emerald-400/50 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-emerald-500/30
                    group-hover:border-emerald-400/50 transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-emerald-500/30
                    group-hover:border-emerald-400/50 transition-colors duration-300" />
                  {renderPlacedChips(`2to1_${index}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom sections */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-1.5">
            {/* 1st 12, 2nd 12, 3rd 12 */}
            {['1st 12', '2nd 12', '3rd 12'].map((option) => (
              <button
                key={option}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, option)}
                onClick={() => onNumberSelect?.(option)}
                className="group relative h-[40px] bg-[#0B2A2A]/90 backdrop-blur-sm rounded-lg
                  border border-emerald-500/20 transition-all duration-300
                  hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(0,255,200,0.2)]">
                <div className="absolute inset-0 bg-emerald-500/0 transition-all duration-300
                  group-hover:bg-emerald-500/10 rounded-lg" />
                <span className="relative font-mono text-emerald-400 group-hover:text-emerald-300">
                  {option}
                </span>
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-emerald-500/30
                  group-hover:border-emerald-400/50 transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-emerald-500/30
                  group-hover:border-emerald-400/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-emerald-500/30
                  group-hover:border-emerald-400/50 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-emerald-500/30
                  group-hover:border-emerald-400/50 transition-colors duration-300" />
                {renderPlacedChips(option)}
              </button>
            ))}
          </div>

          {/* Bottom options */}
          <div className="grid grid-cols-6 gap-1.5">
            {['1-18', 'EVEN', 'RED', 'BLACK', 'ODD', '19-36'].map((option) => (
              <button
                key={option}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, option)}
                onClick={() => onNumberSelect?.(option)}
                className="group relative h-[40px] bg-[#0B2A2A]/90 backdrop-blur-sm rounded-lg
                  border border-emerald-500/20 transition-all duration-300
                  hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(0,255,200,0.2)]">
                <div className="absolute inset-0 bg-emerald-500/0 transition-all duration-300
                  group-hover:bg-emerald-500/10 rounded-lg" />
                {option === 'RED' ? (
                  <div className="w-6 h-6 mx-auto bg-[#B90000] rounded-sm" />
                ) : option === 'BLACK' ? (
                  <div className="w-6 h-6 mx-auto bg-black rounded-sm" />
                ) : (
                  <span className="relative font-mono text-emerald-400 group-hover:text-emerald-300">
                    {option}
                  </span>
                )}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-emerald-500/30
                  group-hover:border-emerald-400/50 transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-emerald-500/30
                  group-hover:border-emerald-400/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-emerald-500/30
                  group-hover:border-emerald-400/50 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-emerald-500/30
                  group-hover:border-emerald-400/50 transition-colors duration-300" />
                {renderPlacedChips(option)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

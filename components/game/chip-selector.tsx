'use client'

interface Chip {
  value: number
  color: string
  currency: string
  image: string
}

interface ChipSelectorProps {
  chips: Chip[]
  selectedChip: Chip
  onSelectChip: (chip: Chip) => void
  playersCount?: number
  balance?: number
}

export function ChipSelector({ chips, selectedChip, onSelectChip, playersCount = 0, balance = 0 }: ChipSelectorProps) {
  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>, chip: Chip) => {
    onSelectChip(chip)
    e.dataTransfer.setData('text/plain', JSON.stringify(chip))

    // Utiliser l'élément img directement comme image fantôme
    const img = e.currentTarget.querySelector('img')
    if (img) {
      e.dataTransfer.setDragImage(img, img.width / 2, img.height / 2)
    }
  }

  return (
    <div className="relative flex items-center gap-4 w-full bg-[#0B2A2A]/90 backdrop-blur-sm rounded-[20px] border border-[#FFD700]/20 p-4
      before:absolute before:inset-0 before:rounded-[20px] before:bg-gradient-to-b before:from-[#FFD700]/10 before:to-transparent before:pointer-events-none">
      
      {/* Wallet Selector */}
      <div className="flex items-center gap-2 min-w-[200px]">
        <svg className="w-6 h-6 text-[#FFD700]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[#FFD700] font-mono text-lg">
            {balance.toFixed(2)}
          </span>
          <span className="text-emerald-400/60 text-xs">
            BCD
          </span>
        </div>
        <button className="ml-2 text-[#FFD700]/60 hover:text-[#FFD700] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Chips */}
      <div className="flex-1 mx-auto flex justify-center gap-4 flex-wrap">
        {chips.map((chip) => (
          <button
            key={chip.value}
            draggable
            onDragStart={(e) => handleDragStart(e, chip)}
            onClick={() => onSelectChip(chip)}
            className={`relative w-16 h-16 rounded-full transition-all duration-300 cursor-grab active:cursor-grabbing
              ${chip === selectedChip ? 'scale-110 ring-2 ring-[#FFD700] ring-offset-2 ring-offset-[#0B2A2A]' : 'scale-100 hover:scale-105'}
              hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]
              focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50`}
          >
            <img 
              src={`/chips/${chip.value}.png`}
              alt={`${chip.value} ${chip.currency} chip`}
              className="w-full h-full object-contain pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white font-bold text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                {chip.value}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Players Count */}
      <div className="flex items-center gap-2 min-w-[120px] justify-end">
        <svg className="w-6 h-6 text-[#FFD700]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
        <div className="flex items-baseline gap-1">
          <span className="text-[#FFD700] font-mono text-2xl">{playersCount}</span>
          <span className="text-emerald-400/60 text-sm">Players</span>
        </div>
      </div>
    </div>
  )
}

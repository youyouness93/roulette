'use client'

interface ConnectPromptModalProps {
  onConnectClick: () => void
}

export function ConnectPromptModal({ onConnectClick }: ConnectPromptModalProps) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="relative w-[500px] bg-[#0D1117] rounded-2xl border border-emerald-500/20 
        shadow-[0_0_50px_rgba(0,255,200,0.1)] overflow-hidden">
        {/* Cyber lines decoration */}
        <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />
        
        {/* Content */}
        <div className="relative p-12 flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome to RouletteVerse
          </h2>
          
          <p className="text-emerald-400/60 text-center">
            Connect your wallet to start playing and experience the future of online roulette
          </p>
          
          <button
            onClick={onConnectClick}
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 px-8 rounded-xl
              transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
              hover:shadow-[0_0_30px_rgba(0,255,200,0.3)]"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

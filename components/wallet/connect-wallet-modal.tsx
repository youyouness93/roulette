'use client'

interface ConnectWalletModalProps {
  isOpen: boolean
  onClose: () => void
  onConnect: (walletType: string) => void
  error?: string
}

export function ConnectWalletModal({ isOpen, onClose, onConnect, error }: ConnectWalletModalProps) {
  if (!isOpen) return null

  const wallets = [
    { name: 'MetaMask', color: 'bg-[#F6851B] hover:bg-[#E2761B]' },
    { name: 'Phantom', color: 'bg-[#AB9FF2] hover:bg-[#9580FF]' },
    { name: 'Base', color: 'bg-[#0052FF] hover:bg-[#0040CC]' }
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-[400px] bg-[#0D1117] rounded-2xl border border-emerald-500/20 overflow-hidden">
        {/* Header */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Connect Wallet
          </h2>
        </div>

        {/* Error message */}
        {error && (
          <div className="mx-6 p-3 mb-4 bg-red-500/20 border border-red-500/40 rounded-lg">
            <p className="text-red-400 text-sm text-center">{error}</p>
          </div>
        )}

        {/* Wallet buttons */}
        <div className="p-6 space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => onConnect(wallet.name)}
              className={`w-full p-4 ${wallet.color} rounded-xl text-white font-bold 
                transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
                hover:shadow-[0_0_15px_rgba(0,255,200,0.2)]`}
            >
              {wallet.name}
            </button>
          ))}
        </div>

        {/* Cancel button */}
        <div className="p-6 pt-0">
          <button
            onClick={onClose}
            className="w-full p-4 bg-transparent border border-emerald-500/20 rounded-xl
              text-emerald-400 font-bold transition-all duration-200
              hover:bg-emerald-500/10 hover:border-emerald-400/50
              transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

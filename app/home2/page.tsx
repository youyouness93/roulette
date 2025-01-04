import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import AnimatedBackground from '@/components/animated-background'

const mockRooms = [
  {
    id: 1,
    name: "Bitcoin Room",
    minBet: 0.001,
    maxBet: 1,
    players: 8,
    maxPlayers: 10,
    image: "/crypto/bitcoin.svg"
  },
  {
    id: 2,
    name: "Ethereum Room",
    minBet: 0.01,
    maxBet: 10,
    players: 15,
    maxPlayers: 20,
    image: "/crypto/ethereum.svg"
  },
  {
    id: 3,
    name: "Solana Room",
    minBet: 1,
    maxBet: 1000,
    players: 3,
    maxPlayers: 5,
    image: "/crypto/solana.svg"
  },
  {
    id: 4,
    name: "USDT Room",
    minBet: 10,
    maxBet: 10000,
    players: 12,
    maxPlayers: 15,
    image: "/crypto/usdt.svg"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0F15] relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background with cyber grid */}
        <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2A2A]/50 to-[#0D0F15]" />

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          {/* Logo or title */}
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              RouletteVerse
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl text-emerald-400/80 mb-12 max-w-2xl">
            Experience the future of casino gaming in the metaverse. 
            Play roulette with style in our immersive blockchain environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6">
            <Link
              href="/game"
              className="px-8 py-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20
                text-emerald-400 font-bold text-lg transition-all duration-300
                hover:bg-emerald-500/20 hover:border-emerald-400/50
                hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]
                transform hover:scale-105 active:scale-[0.98]"
            >
              Play Now
            </Link>
            <button
              className="px-8 py-4 bg-[#0B2A2A]/90 rounded-xl border border-emerald-500/20
                text-emerald-400 font-bold text-lg transition-all duration-300
                hover:bg-[#0B2A2A] hover:border-emerald-400/50
                hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]
                transform hover:scale-105 active:scale-[0.98]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <section className="py-24 relative">
        {/* Background with cyber grid */}
        <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Available Rooms
            </span>
          </h2>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockRooms.map((room) => (
              <div
                key={room.id}
                className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20
                  hover:bg-emerald-500/10 hover:border-emerald-400/30
                  transition-all transform hover:scale-105"
              >
                {/* Room Icon */}
                <div className="w-16 h-16 mb-4 mx-auto">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>

                {/* Room Name */}
                <h3 className="text-xl font-bold text-emerald-400 mb-2 text-center">
                  {room.name}
                </h3>

                {/* Room Stats */}
                <div className="space-y-2 text-emerald-400/70">
                  <div className="flex justify-between">
                    <span>Min Bet:</span>
                    <span>{room.minBet} ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max Bet:</span>
                    <span>{room.maxBet} ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Players:</span>
                    <span>{room.players}/{room.maxPlayers}</span>
                  </div>
                </div>

                {/* Join Button */}
                <button
                  className="w-full mt-4 px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20
                    text-emerald-400 font-bold transition-all duration-300
                    hover:bg-emerald-500/20 hover:border-emerald-400/50"
                >
                  Join Room
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

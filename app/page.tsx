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
        
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Available Rooms
              </span>
            </h2>
            <p className="text-emerald-400/60 text-lg max-w-2xl mx-auto">
              Choose your perfect room and start playing. Each room has its own betting limits and player capacity.
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockRooms.map((room) => (
              <Link 
                key={room.id}
                href={`/game?room=${room.id}`}
                className="group relative bg-[#0B2A2A]/90 backdrop-blur-sm rounded-2xl border border-emerald-500/20
                  overflow-hidden transition-all duration-300
                  hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]
                  transform hover:scale-[1.02]"
              >
                {/* Room Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A2A] to-transparent" />
                </div>

                {/* Room Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">{room.name}</h3>
                  
                  <div className="space-y-2 text-sm text-emerald-400/60">
                    <div className="flex justify-between">
                      <span>Min Bet:</span>
                      <span className="font-mono">{room.minBet} BCD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max Bet:</span>
                      <span className="font-mono">{room.maxBet} BCD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Players:</span>
                      <span className="font-mono">{room.players}/{room.maxPlayers}</span>
                    </div>
                  </div>

                  {/* Join Button */}
                  <button className="w-full mt-6 py-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20
                    text-emerald-400 font-semibold transition-all duration-200
                    group-hover:bg-emerald-500/20 group-hover:border-emerald-400/50">
                    Join Room
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  What is RouletteVerse?
                </span>
              </h2>
              <div className="space-y-4 text-emerald-400/60">
                <p>
                  RouletteVerse is a next-generation blockchain-based roulette platform that combines
                  the thrill of traditional casino gaming with cutting-edge cryptocurrency technology.
                </p>
                <p>
                  Our platform leverages provably fair algorithms and smart contracts to ensure
                  complete transparency and fairness in every game, while providing an immersive
                  multiplayer experience.
                </p>
                <p>
                  With multiple game rooms, varying betting limits, and a vibrant community,
                  RouletteVerse offers something for everyone - from casual players to high rollers.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-4">
                  <div className="text-2xl font-bold text-emerald-400">10K+</div>
                  <div className="text-emerald-400/60">Active Players</div>
                </div>
                <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-4">
                  <div className="text-2xl font-bold text-emerald-400">1M+</div>
                  <div className="text-emerald-400/60">Games Played</div>
                </div>
                <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-4">
                  <div className="text-2xl font-bold text-emerald-400">500K+</div>
                  <div className="text-emerald-400/60">BCD Volume</div>
                </div>
              </div>
            </div>

            {/* Image/Animation */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-emerald-500/20">
                <Image
                  src="/about/roulette-3d.png"
                  alt="RouletteVerse 3D Visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2A2A]/80 to-transparent" />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-xl border border-emerald-500/20
                animate-float backdrop-blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-xl border border-cyan-500/20
                animate-float-delayed backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-emerald-500/20" />

            {/* Timeline Items */}
            <div className="space-y-24">
              {/* Q1 2025 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-[#0B2A2A] text-emerald-400 px-6 py-2 rounded-xl border border-emerald-500/20
                    font-bold text-lg backdrop-blur-sm">
                    Q1 2025
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Platform Launch</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• Initial release of RouletteVerse</li>
                      <li>• Basic roulette gameplay</li>
                      <li>• Wallet integration</li>
                      <li>• Multiple game rooms</li>
                    </ul>
                  </div>
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Community Building</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• Discord server launch</li>
                      <li>• Community events</li>
                      <li>• Social media presence</li>
                      <li>• Ambassador program</li>
                    </ul>
                  </div>
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Token Integration</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• BCD token launch</li>
                      <li>• Staking mechanism</li>
                      <li>• Reward system</li>
                      <li>• Token utility features</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Q2 2025 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-[#0B2A2A] text-emerald-400 px-6 py-2 rounded-xl border border-emerald-500/20
                    font-bold text-lg backdrop-blur-sm">
                    Q2 2025
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Enhanced Features</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• Advanced betting options</li>
                      <li>• Custom game rooms</li>
                      <li>• Chat system</li>
                      <li>• Achievement system</li>
                    </ul>
                  </div>
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Mobile App</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• iOS app release</li>
                      <li>• Android app release</li>
                      <li>• Cross-platform play</li>
                      <li>• Mobile-specific features</li>
                    </ul>
                  </div>
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Tournaments</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• Weekly tournaments</li>
                      <li>• Leaderboard system</li>
                      <li>• Prize pools</li>
                      <li>• Special events</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Q3 2025 */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-[#0B2A2A] text-emerald-400 px-6 py-2 rounded-xl border border-emerald-500/20
                    font-bold text-lg backdrop-blur-sm">
                    Q3 2025
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">NFT Integration</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• NFT avatars</li>
                      <li>• Exclusive NFT rooms</li>
                      <li>• NFT rewards</li>
                      <li>• Trading platform</li>
                    </ul>
                  </div>
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">VR Experience</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• VR game rooms</li>
                      <li>• Social VR features</li>
                      <li>• Immersive UI</li>
                      <li>• VR tournaments</li>
                    </ul>
                  </div>
                  <div className="bg-[#0B2A2A]/90 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-6
                    hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.2)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-emerald-400 mb-4">Governance</h3>
                    <ul className="space-y-2 text-emerald-400/60">
                      <li>• DAO implementation</li>
                      <li>• Voting system</li>
                      <li>• Proposal mechanism</li>
                      <li>• Community treasury</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0B2A2A]/90 backdrop-blur-sm border-t border-emerald-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20
                flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875c0-.124.009-.247.025-.368A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Crypto Powered</h3>
              <p className="text-emerald-400/60">Play with your favorite cryptocurrencies in a secure environment</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20
                flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Multiplayer</h3>
              <p className="text-emerald-400/60">Play with friends and compete against players worldwide</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20
                flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Secure & Fair</h3>
              <p className="text-emerald-400/60">Provably fair gaming with blockchain technology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0B2A2A]/90 backdrop-blur-sm border-t border-emerald-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  RouletteVerse
                </span>
              </h3>
              <p className="text-emerald-400/60 mb-6">
                Experience the future of casino gaming in the metaverse. 
                Play roulette with style in our immersive blockchain environment.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" />
                  </svg>
                </a>
                <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/game" className="text-emerald-400/60 hover:text-emerald-400 transition-colors">
                    Play Now
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-400/60 hover:text-emerald-400 transition-colors">
                    How to Play
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-400/60 hover:text-emerald-400 transition-colors">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-400/60 hover:text-emerald-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-emerald-400/60 hover:text-emerald-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-400/60 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-400/60 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-emerald-400/60 hover:text-emerald-400 transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-emerald-500/20 text-center text-emerald-400/60">
            <p>&copy; 2025 RouletteVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

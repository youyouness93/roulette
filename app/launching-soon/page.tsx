import AnimatedBackground from '@/components/animated-background'
import NewsletterForm from '@/components/newsletter-form'
import Image from 'next/image'

export default function LaunchingSoon() {
  return (
    <main className="min-h-screen bg-[#0D0F15] relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background with cyber grid */}
        <div className="absolute inset-0 bg-[url('/cyber-grid.png')] opacity-5" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2A2A]/50 to-[#0D0F15]" />

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full py-20 flex flex-col items-center justify-center text-center">
          {/* 3D Roulette Image */}
          <div className="relative w-96 h-96 mb-8">
            <Image
              src="/roulette-3d.png"
              alt="3D Roulette"
              fill
              className="object-contain animate-float"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              RouletteVerse
            </span>
          </h1>

          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent opacity-90">
              Launching Soon
            </span>
          </h2>

          {/* Description */}
          <p className="text-2xl text-emerald-400/80 mb-8 max-w-2xl">
            Get ready for the next generation of crypto roulette gaming. 
            We&apos;re putting the finishing touches on something extraordinary.
          </p>

          {/* X Button */}
          <div className="mb-12">
            <a
              href="https://x.com/Rouletteonchain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20
                text-emerald-400 font-bold text-lg transition-all duration-300
                hover:bg-emerald-500/20 hover:border-emerald-400/50
                hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]
                transform hover:scale-105 active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Follow our Journey
            </a>
          </div>

          {/* Roadmap Section */}
          <div className="w-full max-w-6xl mb-20">
            <h3 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h3>

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
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-emerald-500/10 bg-[#0D0F15]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                RouletteVerse
              </span>
            </div>

            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <NewsletterForm />
            </div>

            {/* Social */}
            <a
              href="https://x.com/Rouletteonchain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

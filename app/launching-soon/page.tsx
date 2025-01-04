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
          <p className="text-2xl text-emerald-400/80 mb-12 max-w-2xl">
            Get ready for the next generation of crypto roulette gaming. 
            We&apos;re putting the finishing touches on something extraordinary.
          </p>

          {/* X Button */}
          <div className="flex gap-6 mb-20">
            <a
              href="https://x.com/Rouletteonchain"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20
                text-emerald-400 font-bold text-lg transition-all duration-300
                hover:bg-emerald-500/20 hover:border-emerald-400/50
                hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]
                transform hover:scale-105 active:scale-[0.98]
                flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Follow us on X
            </a>
          </div>

          {/* Roadmap */}
          <div className="w-full max-w-4xl mb-20">
            <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Roadmap
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Foundation",
                  items: ["Smart Contract Development", "Security Audits", "Community Building"]
                },
                {
                  phase: "Phase 2",
                  title: "Beta Launch",
                  items: ["Private Beta Testing", "Public Beta Release", "Initial Marketing Campaign"]
                },
                {
                  phase: "Phase 3",
                  title: "Growth",
                  items: ["Multi-Chain Support", "Partnership Program", "Advanced Features"]
                },
                {
                  phase: "Phase 4",
                  title: "Expansion",
                  items: ["Mobile App Launch", "Tournament System", "Global Marketing"]
                }
              ].map((phase, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20
                    hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-all
                    transform hover:scale-105"
                >
                  <div className="text-emerald-400 font-bold mb-2">{phase.phase}</div>
                  <div className="text-white font-bold mb-4">{phase.title}</div>
                  <ul className="text-emerald-400/70">
                    {phase.items.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative w-full border-t border-emerald-500/20 bg-[#0D0F15]/80 backdrop-blur-sm">
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
      </div>
    </main>
  )
}

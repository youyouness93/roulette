import Link from 'next/link'
import { Twitter, DiscIcon as Discord, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0D0F15] py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <span className="text-white text-3xl font-bold">
              RouletteVerse
            </span>
          </Link>
        </div>
        
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="#" className="text-white hover:text-[#FF00A8] transition-colors">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-white hover:text-[#FF00A8] transition-colors">
            <Discord className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-white hover:text-[#FF00A8] transition-colors">
            <Github className="w-6 h-6" />
          </Link>
        </div>
        
        <div>
          <Link 
            href="https://etherscan.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#A7A7A7] hover:text-[#00E0FF] transition-colors"
          >
            View on Etherscan
          </Link>
        </div>
      </div>
    </footer>
  )
}


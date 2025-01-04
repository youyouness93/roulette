import { Shield, Cpu, Coins, Crown } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-[#00E0FF]" />,
    title: "Smart Contract",
    description: "Verifiable bet handling"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#00E0FF]" />,
    title: "Security",
    description: "Blockchain-validated transactions"
  },
  {
    icon: <Coins className="w-8 h-8 text-[#00E0FF]" />,
    title: "Multiple Tokens",
    description: "Bet with USDT, ETH, BTC, and more"
  },
  {
    icon: <Crown className="w-8 h-8 text-[#00E0FF]" />,
    title: "NFT & VIP",
    description: "Access exclusive rooms"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-[#1A1E26]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          A Transparent & Secure Gaming Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[#A7A7A7]">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-[#00E0FF] text-[#0D0F15] hover:bg-[#00E0FF] hover:shadow-[0_0_20px_#FF00A8] transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        
        <p className="mt-8 text-center text-[#A7A7A7]">
          Ready to start? Join a room now and experience the future of crypto gaming!
        </p>
      </div>
    </section>
  )
}


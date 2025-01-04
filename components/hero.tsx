'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

interface ParticleProps {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

class Particle {
  private x: number
  private y: number
  private size: number
  private speedX: number
  private speedY: number
  private color: string
  private logo: string
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private static cryptoLogos = ['₿', 'Ξ', '₮', '◎']

  constructor({ canvas, ctx }: ParticleProps) {
    this.canvas = canvas
    this.ctx = ctx
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
    this.color = `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.1})`
    this.logo = Particle.cryptoLogos[Math.floor(Math.random() * Particle.cryptoLogos.length)]
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > this.canvas.width) this.x = 0
    else if (this.x < 0) this.x = this.canvas.width
    if (this.y > this.canvas.height) this.y = 0
    else if (this.y < 0) this.y = this.canvas.height
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.font = `${this.size * 10}px Orbitron`
    this.ctx.fillText(this.logo, this.x, this.y)
  }
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    // Set initial canvas dimensions
    const updateCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasDimensions()

    // Create particles with the guaranteed non-null canvas and context
    const particles = Array.from({ length: 50 }, () => new Particle({ canvas, ctx: context }))

    // Animation function with canvas and context in scope
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Handle window resize
    window.addEventListener('resize', updateCanvasDimensions)

    return () => {
      window.removeEventListener('resize', updateCanvasDimensions)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience the Future of Crypto Roulette
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-[#A7A7A7]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Play, Bet, and Enjoy a Fully Web3-Based Experience
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
            onClick={() => router.push('/game')}
          >
            Start Playing
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

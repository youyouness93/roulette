import { Room } from '../types/room'

const themes = ['BTC', 'ETH', 'USDT', 'SOL'] as const

export function generateRooms(count: number): Room[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `room-${i + 1}`,
    name: `Room ${i + 1}`,
    isActive: Math.random() > 0.3,
    theme: themes[Math.floor(Math.random() * themes.length)],
    players: Math.floor(Math.random() * 10) + 1,
    minBet: Math.floor(Math.random() * 0.5 * 100) / 100,
    maxReward: Math.floor(Math.random() * 2 * 100) / 100,
  }))
}


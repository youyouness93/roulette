export interface Room {
  id: string
  name: string
  isActive: boolean
  theme: 'BTC' | 'ETH' | 'USDT' | 'SOL'
  players: number
  minBet: number
  maxReward: number
}


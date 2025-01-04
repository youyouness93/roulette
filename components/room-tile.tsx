'use client'

import { Users, Coins, Trophy } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Room } from '../types/room'

interface RoomTileProps {
  room: Room
}

export function RoomTile({ room }: RoomTileProps) {
  return (
    <div
      className={`bg-[#1A1E26] rounded-lg p-4 flex flex-col justify-between transition-all duration-300 ${
        room.isActive ? 'opacity-100' : 'opacity-40'
      } hover:shadow-[0_0_20px_#00E0FF] group`}
    >
      <div className="text-center mb-4">
        <div className={`text-3xl mb-2 ${
          room.theme === 'BTC' ? 'text-[#F7931A]' :
          room.theme === 'ETH' ? 'text-[#627EEA]' :
          room.theme === 'USDT' ? 'text-[#26A17B]' :
          'text-[#14F195]'
        }`}>
          {room.theme === 'BTC' ? '₿' :
           room.theme === 'ETH' ? 'Ξ' :
           room.theme === 'USDT' ? '₮' :
           '◎'}
        </div>
        <h3 className="font-bold text-white text-lg">
          {room.name}
        </h3>
      </div>

      <div className="space-y-2 w-full">
        <div className="flex items-center justify-between text-sm text-[#A7A7A7]">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{room.players}</span>
          </div>
          <div className="flex items-center">
            <Coins className="w-4 h-4 mr-1" />
            <span>{room.minBet}</span>
          </div>
          <div className="flex items-center">
            <Trophy className="w-4 h-4 mr-1" />
            <span>{room.maxReward}x</span>
          </div>
        </div>
        
        {room.isActive ? (
          <Link href="/game" className="block w-full">
            <Button 
              className="w-full bg-[#00E0FF] text-[#0D0F15] hover:bg-[#00E0FF] hover:shadow-[0_0_10px_#00E0FF] transition-all duration-300"
            >
              Join Room
            </Button>
          </Link>
        ) : (
          <Button 
            className="w-full bg-[#00E0FF] text-[#0D0F15] opacity-50 cursor-not-allowed"
            disabled
          >
            Join Room
          </Button>
        )}
      </div>
    </div>
  )
}

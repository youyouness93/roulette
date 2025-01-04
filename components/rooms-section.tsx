'use client'

import { useState, useEffect } from 'react'
import { generateRooms } from '../utils/mock-data'
import { RoomTile } from './room-tile'
import { CreateRoomButton } from './create-room-button'
import { Room } from '../types/room'

export default function RoomsSection() {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    const generatedRooms = generateRooms(9)
    setRooms(generatedRooms)
  }, [])

  if (rooms.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Choose Your Roulette Table
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {rooms.slice(0, 4).map((room) => (
            <RoomTile key={room.id} room={room} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {rooms.slice(4, 9).map((room) => (
            <RoomTile key={room.id} room={room} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <CreateRoomButton />
        </div>
      </div>
    </section>
  )
}

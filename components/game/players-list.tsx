'use client'

import { PlayerAvatar } from './player-avatar'

interface Player {
  id: string
  name: string
  chips: number
  gender: 'male' | 'female'
  isActive?: boolean
}

interface PlayersListProps {
  players: Player[]
}

export function PlayersList({ players }: PlayersListProps) {
  return (
    <div className="space-y-2">
      {players.map((player) => (
        <PlayerAvatar
          key={player.id}
          name={player.name}
          chips={player.chips}
          gender={player.gender}
          isActive={player.isActive}
        />
      ))}
    </div>
  )
}

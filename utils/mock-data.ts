import { Room } from '../types/room';

export const generateRooms = (count: number = 4): Room[] => {
  const baseRooms: Room[] = [
    {
      id: '1',
      name: 'Bitcoin High Rollers',
      isActive: true,
      theme: 'BTC',
      players: 42,
      minBet: 0.001,
      maxReward: 1.5
    },
    {
      id: '2',
      name: 'Ethereum Elite',
      isActive: true,
      theme: 'ETH',
      players: 28,
      minBet: 0.01,
      maxReward: 2.0
    },
    {
      id: '3',
      name: 'USDT Safe Haven',
      isActive: false,
      theme: 'USDT',
      players: 56,
      minBet: 50,
      maxReward: 1000
    },
    {
      id: '4',
      name: 'Solana Speed',
      isActive: false,
      theme: 'SOL',
      players: 35,
      minBet: 1,
      maxReward: 100
    }
  ];

  // If count is less than or equal to baseRooms length, return a slice
  if (count <= baseRooms.length) {
    return baseRooms.slice(0, count);
  }

  // Otherwise, generate additional rooms based on the base rooms
  const additionalRooms: Room[] = Array.from({ length: count - baseRooms.length }, (_, index) => {
    const baseRoom = baseRooms[index % baseRooms.length];
    return {
      ...baseRoom,
      id: String(baseRooms.length + index + 1),
      name: `${baseRoom.name} ${Math.floor(index / baseRooms.length) + 2}`,
      players: Math.floor(Math.random() * 50) + 10,
      isActive: false // Make additional rooms inactive
    };
  });

  return [...baseRooms, ...additionalRooms];
};

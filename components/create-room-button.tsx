'use client'

import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function CreateRoomButton() {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      size="lg"
      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none"
      onClick={() => router.push('/game')}
    >
      <Plus className="mr-2 h-4 w-4" />
      Create Room
    </Button>
  )
}

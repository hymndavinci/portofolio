'use client'

import { useState, useEffect } from 'react'

export interface LanyardData {
  success: boolean
  data: {
    discord_user: {
      id: string
      username: string
      display_name: string
      avatar: string
      discriminator: string
    }
    discord_status: 'online' | 'idle' | 'dnd' | 'offline'
    activities: Array<{
      name: string
      type: number
      state?: string
      details?: string
      timestamps?: {
        start?: number
        end?: number
      }
      assets?: {
        large_image?: string
        large_text?: string
        small_image?: string
        small_text?: string
      }
      application_id?: string
    }>
  }
}

export function useLanyard(userId: string) {
  const [presence, setPresence] = useState<LanyardData | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !userId) return

    const fetchPresence = async () => {
      try {
        const response = await fetch(`/api/lanyard/${userId}`)
        const data = await response.json()
        setPresence(data)
      } catch (error) {
        console.error('Failed to fetch Discord presence:', error)
      }
    }

    fetchPresence()
    const interval = setInterval(fetchPresence, 30000)
    return () => clearInterval(interval)
  }, [userId, mounted])

  return { presence, mounted }
}

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

export function useLanyard(userId: string, initialData?: LanyardData | null) {
  const [presence, setPresence] = useState<LanyardData | null>(initialData || null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!userId) return

    const fetchPresence = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`)
        const data = await response.json()
        setPresence(data)
      } catch (error) {
        console.error('Failed to fetch Discord presence:', error)
      }
    }

    // Hanya fetch client-side jika belum ada data atau setelah mounted
    if (mounted) {
      fetchPresence()
      const interval = setInterval(fetchPresence, 30000)
      return () => clearInterval(interval)
    }
  }, [userId, mounted])

  return { presence, mounted }
}

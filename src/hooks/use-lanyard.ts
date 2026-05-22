'use client'

import { useEffect, useState } from 'react'

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

type Listener = (presence: LanyardData | null) => void

const lanyardStore = new Map<string, {
  presence: LanyardData | null
  listeners: Set<Listener>
  interval: ReturnType<typeof setInterval> | null
  inFlight: Promise<void> | null
}>()

function getStore(userId: string) {
  const existing = lanyardStore.get(userId)
  if (existing) return existing

  const store = {
    presence: null,
    listeners: new Set<Listener>(),
    interval: null,
    inFlight: null,
  }
  lanyardStore.set(userId, store)
  return store
}

async function fetchPresence(userId: string) {
  const store = getStore(userId)
  if (store.inFlight) return store.inFlight

  store.inFlight = fetch(`/api/lanyard/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      store.presence = data
      store.listeners.forEach((listener) => listener(data))
    })
    .catch((error) => {
      console.error('Failed to fetch Discord presence:', error)
    })
    .finally(() => {
      store.inFlight = null
    })

  return store.inFlight
}

function subscribe(userId: string, listener: Listener) {
  const store = getStore(userId)
  store.listeners.add(listener)

  if (store.presence) {
    listener(store.presence)
  }

  if (!store.interval) {
    fetchPresence(userId)
    store.interval = setInterval(() => fetchPresence(userId), 30000)
  }

  return () => {
    store.listeners.delete(listener)
    if (store.listeners.size === 0 && store.interval) {
      clearInterval(store.interval)
      store.interval = null
    }
  }
}

export function useLanyard(userId: string) {
  const [presence, setPresence] = useState<LanyardData | null>(() => {
    if (!userId) return null
    return getStore(userId).presence
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !userId) return
    return subscribe(userId, setPresence)
  }, [userId, mounted])

  return { presence, mounted }
}

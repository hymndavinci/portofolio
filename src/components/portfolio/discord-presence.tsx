import { useEffect, useState } from 'react'

import { LanyardData } from '@/hooks/use-lanyard'

const statusColors: Record<string, string> = {
  online: 'bg-emerald-500',
  idle: 'bg-amber-400',
  dnd: 'bg-red-500',
  offline: 'bg-zinc-500',
}

const statusLabels: Record<string, string> = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do Not Disturb',
  offline: 'Offline',
}

const activityTypeLabels: Record<number, string> = {
  0: 'Playing',
  1: 'Streaming',
  2: 'Listening to',
  3: 'Watching',
  4: '',
  5: 'Competing in',
}

function getActivityIcon(type: number) {
  switch (type) {
    case 0:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/40">
          <line x1="6" x2="10" y1="12" y2="12" />
          <line x1="8" x2="12" y1="10" y2="10" />
          <path d="M17 12h.01" />
          <path d="M6 4v.01" /><path d="M10 4v.01" /><path d="M14 4v.01" /><path d="M18 4v.01" />
          <path d="M6 20v.01" /><path d="M10 20v.01" /><path d="M14 20v.01" /><path d="M18 20v.01" />
          <rect width="16" height="12" x="4" y="6" rx="2" />
        </svg>
      )
    case 1:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-red-400">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      )
    case 2:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/40">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )
    case 3:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/40">
          <path d="m15.5 2-1 4" /><path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0" />
          <path d="m2 12 7 7" /><path d="m22 12-7-7" /><path d="m8 12 3-3 3 3" /><path d="M11 9v6" />
        </svg>
      )
    case 5:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/40">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      )
    default:
      return null
  }
}

function formatElapsedTime(startTimestamp: number): string {
  const now = Date.now()
  const diff = now - startTimestamp
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function getActivityImage(activity: LanyardData['data']['activities'][0]): string | null {
  if (!activity?.assets?.large_image) return null
  const img = activity.assets.large_image

  if (img.startsWith('spotify:')) {
    return `https://i.scdn.co/image/${img.replace('spotify:', '')}`
  }

  if (img.startsWith('mp:external/')) {
    const withoutPrefix = img.replace('mp:external/', '')
    const slashIndex = withoutPrefix.indexOf('/')
    if (slashIndex === -1) return null
    let afterHash = withoutPrefix.slice(slashIndex + 1)
    
    // Safely extract the http or https URL
    if (afterHash.includes('https/')) {
      return 'https://' + afterHash.split('https/')[1]
    } else if (afterHash.includes('http/')) {
      return 'http://' + afterHash.split('http/')[1]
    }
    
    // Fallback original replacement
    return afterHash.replace(/^(https?)\//, '$1://')
  }

  if (img.startsWith('mp:')) {
    return `https://media.discordapp.net/${img.replace('mp:', '')}`
  }

  return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${img}.png`
}

export default function DiscordPresence({ presence, mounted }: { presence: LanyardData | null, mounted: boolean }) {
  const [elapsedTime, setElapsedTime] = useState<string>('')

  useEffect(() => {
    const activity = presence?.data?.activities?.find(a => a.type !== 4)
    if (activity?.timestamps?.start) {
      const updateElapsed = () => {
        setElapsedTime(formatElapsedTime(activity.timestamps!.start!))
      }
      updateElapsed()
      const interval = setInterval(updateElapsed, 1000)
      return () => clearInterval(interval)
    }
  }, [presence])

  if (!mounted || !presence?.success) return null

  const { data } = presence
  const activity = data.activities?.find(a => a.type !== 4)
  const discordStatus = data.discord_status

  if (discordStatus === 'offline' && !activity) return null

  const activityImage = activity ? getActivityImage(activity) : null

  return (
    <div className="space-y-4 pt-4 w-full">
      <div className="flex items-center justify-between border-t border-white/10 pt-5">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--home-muted)]">
          Activity
        </p>
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${statusColors[discordStatus] || statusColors.offline}`} />
          <span className="text-[12px] font-medium text-[var(--home-muted)]">
            {statusLabels[discordStatus] || discordStatus}
          </span>
        </div>
      </div>

      {activity && (
        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-2 text-[var(--home-muted)]">
            {getActivityIcon(activity.type)}
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              {activityTypeLabels[activity.type] || ''} {activity.name}
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 shrink-0 rounded-xl bg-black/50 overflow-hidden shadow-inner">
              {activityImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={activityImage}
                  alt={activity.assets?.large_text || activity.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xl font-bold uppercase text-white/20">
                  {activity.name.charAt(0)}
                </div>
              )}
              {activity.assets?.small_image && (
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-[3px] border-transparent bg-black overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getActivityImage({ ...activity, assets: { large_image: activity.assets.small_image } }) || ''}
                    alt={activity.assets.small_text || ''}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <p className="text-[15px] font-semibold text-white">{activity.name}</p>
              {activity.details && (
                <p className="mt-0.5 text-[13px] text-[var(--home-muted)]">{activity.details}</p>
              )}
              {activity.state && (
                <p className="text-[13px] text-[var(--home-muted)]">{activity.state}</p>
              )}
              {activity.timestamps?.start && elapsedTime && (
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--home-muted)]">Elapsed</p>
                  <p className="text-[11px] font-medium tabular-nums text-[var(--home-muted)]">{elapsedTime}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

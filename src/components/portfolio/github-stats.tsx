'use client'

import { useEffect, useState, useRef } from 'react'

interface Contribution {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ContributionData {
  contributions: Contribution[]
  total: Record<string, number>
}

const levelColors = [
  'bg-white/[0.05]',
  'bg-[#0e4429]',
  'bg-[#006d32]',
  'bg-[#26a641]',
  'bg-[#39d353]',
]

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function ContributionGrid({ data, year }: { data: ContributionData; year: number }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const total = data.total[year] ?? 0

  // Build a lookup map from API data
  const apiMap = new Map<string, Contribution>()
  for (const c of data.contributions) {
    apiMap.set(c.date, c)
  }

  // Generate every day from Jan 1 to Dec 31 (or today if current year)
  const now = new Date()
  const isCurrentYear = year === now.getFullYear()
  const endDate = isCurrentYear ? now : new Date(year, 11, 31)
  const startDate = new Date(year, 0, 1)

  const contributions: Contribution[] = []
  const cursor = new Date(startDate)
  while (cursor <= endDate) {
    const dateStr = cursor.toISOString().slice(0, 10)
    contributions.push(
      apiMap.get(dateStr) ?? { date: dateStr, count: 0, level: 0 }
    )
    cursor.setDate(cursor.getDate() + 1)
  }

  const startDay = startDate.getDay()
  const padded: (Contribution | null)[] = [
    ...Array(startDay).fill(null),
    ...contributions,
  ]

  const weeks: (Contribution | null)[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }

  // Month labels
  const monthLabels: { label: string; weekIndex: number }[] = []
  contributions.forEach((c, idx) => {
    const d = new Date(c.date)
    if (d.getDate() === 1) {
      const wi = Math.floor((idx + startDay) / 7)
      const prev = monthLabels[monthLabels.length - 1]
      if (!prev || wi - prev.weekIndex >= 3) {
        monthLabels.push({ label: MONTH_NAMES[d.getMonth()], weekIndex: wi })
      }
    }
  })

  // Auto scroll to right (latest contributions) on mobile
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [data])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-semibold text-white/60">{year}</span>
        <span className="text-[10px] text-[var(--home-muted)] tabular-nums">{total} contributions</span>
      </div>

      <div className="flex gap-[2px]">
        {/* Day labels */}
        <div className="flex flex-col pr-1 shrink-0" style={{ paddingTop: '16px', gap: '1px' }}>
          {[0,1,2,3,4,5,6].map((d) => (
            <div key={d} style={{ height: '10px', lineHeight: '10px' }}>
              <span className="text-[8px] text-[var(--home-muted)]">
                {d === 1 ? 'Mon' : d === 3 ? 'Wed' : d === 5 ? 'Fri' : ''}
              </span>
            </div>
          ))}
        </div>

        <div 
          ref={scrollRef}
          className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="min-w-max">
            {/* Month labels */}
            <div className="relative h-[14px] mb-[2px]">
              {monthLabels.map((m) => (
                <span
                  key={m.label + m.weekIndex}
                  className="absolute text-[9px] text-[var(--home-muted)]"
                  style={{ left: `${(m.weekIndex / weeks.length) * 100}%` }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Grid */}
            <div className="flex gap-[2px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[2px]">
                  {Array(7).fill(null).map((_, di) => {
                    const cell = week[di]
                    return (
                      <div
                        key={di}
                        title={cell ? `${cell.count} contributions on ${cell.date}` : ''}
                        className={`w-[10px] h-[10px] rounded-[2px] ${cell ? levelColors[cell.level] : 'bg-transparent'}`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GitHubContributions() {
  const [data2025, setData2025] = useState<ContributionData | null>(null)
  const [data2026, setData2026] = useState<ContributionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/github-contributions?year=2025').then(r => r.json()),
      fetch('/api/github-contributions?year=2026').then(r => r.json()),
    ]).then(([d2025, d2026]) => {
      if (d2025?.contributions) setData2025(d2025)
      if (d2026?.contributions) setData2026(d2026)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="h-[180px] w-full animate-pulse rounded-lg bg-white/[0.03]" />
  }

  return (
    <div className="space-y-4 w-full">
      {data2026 && <ContributionGrid data={data2026} year={2026} />}
      {data2025 && <ContributionGrid data={data2025} year={2025} />}

      {/* Legend */}
      <div className="flex items-center justify-end gap-1">
        <span className="text-[9px] text-[var(--home-muted)]">Less</span>
        {levelColors.map((c, i) => (
          <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${c}`} />
        ))}
        <span className="text-[9px] text-[var(--home-muted)]">More</span>
      </div>
    </div>
  )
}

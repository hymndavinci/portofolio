'use client'

import { useEffect, useState } from 'react'

interface ViewTrackerProps {
  slug: string
  initialViews: number
}

/**
 * Komponen ini:
 * 1. Saat mount → POST ke /api/views/[slug] untuk increment +1
 * 2. Update tampilan views secara real-time dari response server
 */
export default function ViewTracker({ slug, initialViews }: ViewTrackerProps) {
  const [views, setViews] = useState(initialViews)

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: 'POST' })
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.views === 'number') setViews(data.views)
      })
      .catch(() => {
        // Gagal silently — tidak merusak UX
      })
  }, [slug])

  return <>{views.toLocaleString()}</>
}

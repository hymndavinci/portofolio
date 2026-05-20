'use client'

import { BookOpen, Copy, Share, Check } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

interface BlogActionsProps {
  title: string
  url: string
}

export default function BlogActions({ title, url }: BlogActionsProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast({
        title: 'Copied to clipboard',
        description: 'The link has been copied successfully.',
      })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast({
        title: 'Failed to copy',
        description: 'Please try again.',
        variant: 'destructive',
      })
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err)
        }
      }
    } else {
      handleCopy()
    }
  }

  return (
    <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-white/30">
      <button className="flex items-center gap-1.5 transition hover:text-white/60">
        <BookOpen className="h-3 w-3" /> Save
      </button>
      <button onClick={handleCopy} className="flex items-center gap-1.5 transition hover:text-white/60">
        {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
        {copied ? 'Copied' : 'Copy'}
      </button>
      <button onClick={handleShare} className="flex items-center gap-1.5 transition hover:text-white/60">
        <Share className="h-3 w-3" />
        Share
      </button>
    </div>
  )
}

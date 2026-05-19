'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Check, Copy, Share2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface BlogActionsProps {
  slug: string
  title: string
}

export default function BlogActions({ slug, title }: BlogActionsProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const saved = localStorage.getItem(`saved_post_${slug}`)
    if (saved === 'true') {
      setIsSaved(true)
    }
  }, [slug])

  const handleSave = () => {
    const nextSavedState = !isSaved
    setIsSaved(nextSavedState)
    localStorage.setItem(`saved_post_${slug}`, String(nextSavedState))
    
    toast({
      title: nextSavedState ? 'Story Saved' : 'Story Removed',
      description: nextSavedState 
        ? `"${title}" has been saved to your bookmarks.` 
        : `"${title}" has been removed from your bookmarks.`,
    })
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      toast({
        title: 'Link Copied',
        description: 'The story link has been copied to your clipboard.',
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error(err)
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: `${title} — Hymn`,
      url: window.location.href,
    }

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
        toast({
          title: 'Shared successfully',
          description: 'Thank you for sharing this story!',
        })
      } catch (err) {
        console.error(err)
      }
    } else {
      handleCopy()
    }
  }

  return (
    <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.2em]">
      <button 
        onClick={handleSave}
        className={`flex items-center gap-1.5 transition ${isSaved ? 'text-amber-500 hover:text-amber-400 font-semibold' : 'text-white/40 hover:text-white/70'}`}
      >
        <BookOpen className="h-3 w-3" />
        {isSaved ? 'Saved' : 'Save'}
      </button>
      
      <button 
        onClick={handleCopy}
        className="flex items-center gap-1.5 transition text-white/40 hover:text-white/70"
      >
        {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
        Copy
      </button>
      
      <button 
        onClick={handleShare}
        className="flex items-center gap-1.5 transition text-white/40 hover:text-white/70"
      >
        <Share2 className="h-3 w-3" />
        Share
      </button>
    </div>
  )
}

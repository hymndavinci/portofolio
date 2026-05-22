'use client'

import { useEffect } from 'react'

export default function ThemeSync() {
  useEffect(() => {
    const applyTheme = () => {
      const saved = localStorage.getItem('portfolio-theme')

      if (saved === 'dark') {
        document.documentElement.classList.remove('light-mode')
        return
      }

      document.documentElement.classList.add('light-mode')
    }

    applyTheme()

    window.addEventListener('storage', applyTheme)
    window.addEventListener('pageshow', applyTheme)

    return () => {
      window.removeEventListener('storage', applyTheme)
      window.removeEventListener('pageshow', applyTheme)
    }
  }, [])

  return null
}

'use client'

import { useEffect, useState } from 'react'

export function useTheme() {
  const [isLight, setIsLight] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light') {
      setIsLight(true)
      document.documentElement.classList.add('light-mode')
    }
  }, [])

  const toggle = () => {
    const next = !isLight
    setIsLight(next)
    if (next) {
      document.documentElement.classList.add('light-mode')
      localStorage.setItem('portfolio-theme', 'light')
    } else {
      document.documentElement.classList.remove('light-mode')
      localStorage.setItem('portfolio-theme', 'dark')
    }
  }

  return { isLight, toggle, mounted }
}

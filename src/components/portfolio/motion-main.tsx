'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionMainProps {
  children: ReactNode
}

export default function MotionMain({ children }: MotionMainProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative z-10 mx-auto w-full max-w-screen-xl px-4 pb-20 pt-24 sm:px-6 lg:px-10"
    >
      {children}
    </motion.main>
  )
}

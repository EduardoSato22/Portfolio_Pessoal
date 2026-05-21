import React, { useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const spring = useSpring(progress, { stiffness: 200, damping: 40 })

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-sky-500 z-[60] origin-left"
      style={{ scaleX: spring }}
    />
  )
}

export default ScrollProgress

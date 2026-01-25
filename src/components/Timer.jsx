import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // July 12, 2025 - Lonavala trip start
    const startDate = new Date('2025-07-12T10:00:00+05:30')

    const calculateTime = () => {
      const now = new Date()
      const difference = now - startDate

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="my-16">
      {/* Timer Label */}
      <div className="text-center mb-8">
        <p className="text-xs md:text-sm font-inter tracking-widest uppercase text-soft-purple opacity-60">
          Time Since Lonavala
        </p>
      </div>

      {/* Timer Display */}
      <div className="flex justify-center items-center gap-3 md:gap-6 flex-wrap">
        <TimerBlock value={timeLeft.days} label="Days" />
        <span className="text-3xl md:text-4xl font-cinzel text-muted-magenta opacity-30 hidden sm:block">:</span>
        <TimerBlock value={String(timeLeft.hours).padStart(2, '0')} label="Hours" />
        <span className="text-3xl md:text-4xl font-cinzel text-muted-magenta opacity-30 hidden sm:block">:</span>
        <TimerBlock value={String(timeLeft.minutes).padStart(2, '0')} label="Minutes" />
        <span className="text-3xl md:text-4xl font-cinzel text-muted-magenta opacity-30 hidden sm:block">:</span>
        <TimerBlock value={String(timeLeft.seconds).padStart(2, '0')} label="Seconds" />
      </div>

      {/* Milestone Messages */}
      <div className="text-center mt-8">
        <p className="text-xs md:text-sm font-cinzel italic text-near-white opacity-50">
          {timeLeft.days >= 365 ?
            `Over a year of us 💕` :
            timeLeft.days >= 180 ?
            `Six months and counting ✨` :
            `Every second with you matters`
          }
        </p>
      </div>
    </div>
  )
}

const TimerBlock = ({ value, label }) => {
  const [prevValue, setPrevValue] = useState(value)

  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(value)
    }
  }, [value, prevValue])

  return (
    <div className="text-center min-w-[70px] md:min-w-[90px]">
      {/* Value Container */}
      <div className="relative h-16 md:h-20 flex items-center justify-center
                      bg-white/[0.02] border border-white/[0.08] rounded-sm
                      backdrop-blur-sm overflow-hidden group
                      hover:border-muted-magenta/30 hover:bg-white/[0.03]
                      transition-all duration-500">
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted-magenta/5 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated number */}
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-cinzel text-4xl md:text-5xl font-semibold tracking-wider
                      text-near-white relative z-10"
            style={{
              textShadow: '0 0 20px rgba(192, 132, 252, 0.15)'
            }}
          >
            {value}
          </motion.div>
        </AnimatePresence>

        {/* Top shine effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r
                      from-transparent via-muted-magenta/20 to-transparent" />
      </div>

      {/* Label */}
      <div className="font-inter text-[10px] md:text-xs font-light text-soft-purple
                    tracking-widest uppercase mt-3 opacity-70">
        {label}
      </div>
    </div>
  )
}

export default Timer

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const START_DATE = new Date('2025-07-12T10:00:00+05:30')

const calcTime = () => {
  const diff = Date.now() - START_DATE.getTime()
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}

const getMilestone = (days) => {
  if (days >= 365) return { text: 'Over a year of choosing each other', icon: '🎊' }
  if (days >= 270) return { text: 'Nine months and still getting closer', icon: '💫' }
  if (days >= 180) return { text: 'Six months of fire, distance & devotion', icon: '🔥' }
  if (days >= 90)  return { text: 'Three months since Lonavala changed us', icon: '✨' }
  return { text: 'Every second with you matters', icon: '💕' }
}

// ─── TIMER ────────────────────────────────────────────────────────────────────
const Timer = () => {
  const [time, setTime] = useState(calcTime)

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(id)
  }, [])

  const milestone = getMilestone(time.days)

  const BLOCKS = [
    { value: String(time.days),                     label: 'Days',    accent: true  },
    { value: String(time.hours).padStart(2, '0'),   label: 'Hours',   accent: false },
    { value: String(time.minutes).padStart(2, '0'), label: 'Minutes', accent: false },
    { value: String(time.seconds).padStart(2, '0'), label: 'Seconds', accent: false },
  ]

  return (
    <div className="my-24 px-4">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <p className="text-[8px] font-bold uppercase tracking-[0.45em] text-white/15 mb-3">
          Since Lonavala · July 12, 2025
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-white/60 mb-2">
          Time We've Shared
        </h2>
        <p className="font-serif italic text-white/20 text-xs md:text-sm">
          Every moment counted from the very first spark
        </p>
      </motion.div>

      {/* ── Blocks Row ── */}
      <div className="flex justify-center items-start gap-2 sm:gap-4 md:gap-6">
        {BLOCKS.map(({ value, label, accent }, i) => (
          <React.Fragment key={label}>
            <TimerBlock
              value={value}
              label={label}
              accent={accent}
              index={i}
            />
            {i < BLOCKS.length - 1 && (
              <div className="flex items-center" style={{ height: '120px', paddingBottom: '28px' }}>
                <span className="text-2xl md:text-3xl font-serif text-white/10 select-none">
                  :
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex justify-center gap-6 md:gap-10 mt-10"
      >
        {[
          { value: time.days,                          label: 'Days Total'  },
          { value: Math.floor(time.days / 7),          label: 'Weeks'       },
          { value: Math.floor(time.days / 30),         label: 'Months'      },
          { value: Math.floor(time.days * 24),         label: 'Hours Total' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="font-serif text-lg md:text-xl text-white/40 tabular-nums">{value}</p>
            <p className="text-[7px] uppercase tracking-[0.2em] text-white/15 mt-0.5">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* ── Milestone pill ── */}
      <motion.div
        key={milestone.text}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mt-8"
      >
        <div className="flex items-center gap-3 px-6 py-3 rounded-full
                        bg-white/[0.02] border border-white/5">
          <span className="text-base">{milestone.icon}</span>
          <p className="font-serif italic text-xs md:text-sm text-white/30 tracking-wide">
            {milestone.text}
          </p>
        </div>
      </motion.div>

    </div>
  )
}

// ─── TIMER BLOCK ──────────────────────────────────────────────────────────────
const TimerBlock = ({ value, label, accent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
    className="flex flex-col items-center gap-3"
  >
    {/* Card */}
    <div className={`
      relative
      w-[78px] sm:w-[96px] md:w-[120px] lg:w-[140px]
      h-[96px] sm:h-[112px] md:h-[136px] lg:h-[160px]
      flex items-center justify-center
      rounded-2xl md:rounded-3xl overflow-hidden
       transition-all duration-500
      ${accent
        ? 'bg-rose-500/[0.07] border-rose-500/25'
        : 'bg-white/[0.025] border-white/6 hover:border-white/12 hover:bg-white/[0.045]'
      }
    `}>

      {/* Top shimmer line */}
      <div className={`
        absolute top-0 left-0 right-0 h-px
        bg-gradient-to-r from-transparent
        ${accent ? 'via-rose-400/30' : 'via-white/10'}
        to-transparent
      `}/>

      {/* Bottom shimmer line */}
      <div className={`
        absolute bottom-0 left-0 right-0 h-px
        bg-gradient-to-r from-transparent
        ${accent ? 'via-rose-400/10' : 'via-white/4'}
        to-transparent
      `}/>

      {/* Accent top glow */}
      {accent && (
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/[0.10] via-transparent to-transparent pointer-events-none" />
      )}

      {/* Corner dots — decorative */}
      <div className={`absolute top-2.5 left-2.5 w-1 h-1 rounded-full
        ${accent ? 'bg-rose-500/20' : 'bg-white/8'}`} />
      <div className={`absolute top-2.5 right-2.5 w-1 h-1 rounded-full
        ${accent ? 'bg-rose-500/20' : 'bg-white/8'}`} />

      {/* Digit */}
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          exit={{    y:  16, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className={`
            font-serif tabular-nums relative z-10 leading-none
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            ${accent ? 'text-rose-300/80' : 'text-white/65'}
          `}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>

    {/* Label */}
    <p className={`
      text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em]
      ${accent ? 'text-rose-400/45' : 'text-white/22'}
    `}>
      {label}
    </p>

    {/* Seconds live pulse */}
    {label === 'Seconds' && (
      <motion.div
        animate={{ opacity: [0.8, 0.15, 0.8], scale: [1, 1.4, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        className="w-1.5 h-1.5 rounded-full bg-rose-500/35"
      />
    )}

  </motion.div>
)

export default Timer

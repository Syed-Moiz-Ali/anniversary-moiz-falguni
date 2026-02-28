import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Heart, MapPin, Calendar, Zap } from 'lucide-react'
import Timer from '../components/Timer'

// ─── DATA FROM loveMasterData.json ────────────────────────────────────────────
// meta.temporalSpan: "July 2025 – February 2026"
// meta.geographicalNodes: ["Lonavala", "Hyderabad", "Nagpur", "Office", "Hotel rooms", "Video calls"]
// ourStory.themes: ["Intensity", "Resilience", "Playfulness", "Growth", "Choice", "Trust", "Desire", "Evolution"]
// meta.aiInsights.dominantThemes + emotionalArc
// reasons.count: 99 | promises.items: 20 | quiz.totalQuestions: 39

const RELATIONSHIP_START = new Date('2025-07-01T00:00:00')

const stats = [
  {
    icon: Calendar,
    label: 'Days Together',
    getValue: () => {
      const diff = Math.floor((Date.now() - RELATIONSHIP_START.getTime()) / (1000 * 60 * 60 * 24))
      return `${diff}`
    },
    sub: 'Since Lonavala, July 2025',
  },
  {
    icon: MapPin,
    label: 'Cities Conquered',
    getValue: () => '5',
    sub: 'Lonavala · Hyderabad · Nagpur +',
  },
  {
    icon: Heart,
    label: 'Reasons I Love You',
    getValue: () => '99',
    sub: 'Documented. Growing.',
  },
  {
    icon: Zap,
    label: 'Promises Made',
    getValue: () => '20',
    sub: 'Each one kept.',
  },
]

// Rotating subtitles from ourStory.themes + dominantThemes
const SUBTITLES = [
  '"From a misunderstanding in Lonavala to a sanctuary in Nagpur."',
  '"Choice over chance. Every single day."',
  '"Distance strengthening desire. Always."',
  '"What started as friction became the fire."',
  '"Still writing. Still choosing. Still us."',
]

// ─── PARTICLES (stable, no re-randomize on each render) ───────────────────────
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  top:    `${(i * 37 + 11) % 100}%`,
  left:   `${(i * 53 + 7)  % 100}%`,
  size:   ((i % 4) + 1) + 'px',
  dur:    ((i % 10) + 12) + 's',
  opacity: ((i % 5) + 1) / 10,
}))

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  const [statValues] = useState(() => stats.map(s => s.getValue()))

  // Mouse parallax
  useEffect(() => {
    const handler = (e) => setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    })
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  // Rotating subtitles — cycle every 4s
  useEffect(() => {
    const id = setInterval(() => {
      setSubtitleIndex(i => (i + 1) % SUBTITLES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#060608] text-white flex flex-col justify-center items-center py-24">

      {/* ── Background ── */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Parallax orbs */}
        <motion.div
          animate={{ x: mousePosition.x * 30 - 15, y: mousePosition.y * 30 - 15 }}
          transition={{ type: 'spring', stiffness: 30, damping: 20 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-900/15 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ x: mousePosition.x * -30 + 15, y: mousePosition.y * -30 + 15 }}
          transition={{ type: 'spring', stiffness: 25, damping: 20 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[140px]"
        />
        {/* Stable particles */}
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="absolute bg-white/10 rounded-full"
            style={{
              top: p.top, left: p.left,
              width: p.size, height: p.size,
              animation: `float ${p.dur} linear infinite`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">

        {/* 1 — Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/3 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            <span className="w-1 h-1 rounded-full bg-rose-400/60 animate-pulse" />
            Est. July 2025 · Still Writing
          </span>
        </motion.div>

        {/* 2 — Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-8 relative inline-block"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-bold tracking-tighter bg-gradient-to-b from-white via-white/95 to-white/30 bg-clip-text text-transparent leading-none">
            Moiz{' '}
            <span className="font-sans font-thin text-rose-400/80">&amp;</span>{' '}
            Falguni
          </h1>
          <div className="absolute -inset-12 bg-rose-500/8 blur-[80px] -z-10 rounded-full" />
        </motion.div>

        {/* 3 — Rotating Subtitle */}
        <div className="h-10 flex items-center justify-center mb-14 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={subtitleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7 }}
              className="text-base md:text-xl font-serif italic text-white/40 max-w-2xl mx-auto leading-relaxed"
            >
              {SUBTITLES[subtitleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 4 — Live Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-20"
        >
          <Timer />
        </motion.div>

        {/* 5 — Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-24"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} icon={stat.icon} value={statValues[i]} label={stat.label} sub={stat.sub} index={i} />
          ))}
        </motion.div>

        {/* 6 — Theme Tags from ourStory.themes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="flex flex-wrap justify-center gap-2 mb-20"
        >
          {['Intensity', 'Resilience', 'Playfulness', 'Growth', 'Choice', 'Trust', 'Desire', 'Evolution'].map((theme) => (
            <span
              key={theme}
              className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] border border-white/5 bg-white/[0.02] text-white/20 hover:text-white/50 hover:border-white/15 transition-all duration-300 cursor-default"
            >
              {theme}
            </span>
          ))}
        </motion.div>

        {/* 7 — Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">Begin The Journey</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="text-white/20" size={16} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, value, label, sub, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.55 + index * 0.08, duration: 0.8 }}
    className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/12 hover:bg-white/[0.04] transition-all duration-500 text-center"
  >
    <div className="flex flex-col items-center gap-2.5">
      <Icon
        size={16}
        className="text-rose-400/30 group-hover:text-rose-400/70 transition-colors duration-400"
      />
      <span className="text-3xl md:text-4xl font-serif font-bold text-white/85 group-hover:text-white transition-colors duration-300">
        {value}
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 group-hover:text-white/60 transition-colors duration-300">
          {label}
        </p>
        <p className="text-[9px] text-white/15 mt-0.5 group-hover:text-white/30 transition-colors duration-300 font-serif italic">
          {sub}
        </p>
      </div>
    </div>
  </motion.div>
)

export default Home

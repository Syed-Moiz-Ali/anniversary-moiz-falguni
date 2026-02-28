import React from 'react'
import { motion } from 'framer-motion'

// ─── LOADER ───────────────────────────────────────────────────────────────────
// Used as Suspense fallback in App.jsx for all lazy-loaded pages
// Sources: meta.tagline + ourStory.timelineRange + journey.timeline[0].location

const Loader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#060608] relative overflow-hidden">

    {/* ── Ambient ── */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-rose-900/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-purple-900/6 rounded-full blur-[120px]" />
    </div>

    {/* ── Core ── */}
    <div className="relative z-10 flex flex-col items-center gap-10">

      {/* Heart + pulse rings */}
      <div className="relative flex items-center justify-center">

        {/* Outer pulse rings */}
        {[0, 0.5, 1].map((delay, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-rose-500/15"
            style={{ width: 48 + i * 0, height: 48 + i * 0 }}
            animate={{ scale: [1, 2.8], opacity: [0.4, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Heart SVG */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill="rgba(251,113,133,0.5)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Text block */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.p
          className="font-serif text-base md:text-lg tracking-wider text-white/40 mb-2"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          Loading our story...
        </motion.p>
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/15">
          Moiz & Falguni
        </p>
      </motion.div>

      {/* Bouncing dots */}
      <div className="flex gap-1.5">
        {[0, 0.15, 0.3].map((delay, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-rose-500/40"
            animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        ))}
      </div>
    </div>

    {/* ── Bottom tagline ── */}
    <motion.div
      className="absolute bottom-10 text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <p className="font-serif italic text-[10px] text-white/12 tracking-widest">
        From Lonavala to forever
      </p>
    </motion.div>

  </div>
)

export default Loader

import React from 'react'
import { motion } from 'framer-motion'
import Timer from '../components/Timer'

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-muted-magenta/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-soft-purple/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-cinzel font-normal tracking-ultra mb-8 text-near-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            Moiz & Falguni
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl font-cinzel italic tracking-wider text-soft-purple opacity-80 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
          >
            From a Lonavala fight to forever
          </motion.p>

          <motion.p
            className="text-sm md:text-base font-inter tracking-widest uppercase text-muted-magenta opacity-60 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.5 }}
          >
            July 2025 — Present
          </motion.p>

          {/* Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.5 }}
          >
            <Timer />
          </motion.div>

          {/* Main Quote */}
          <motion.div
            className="mt-20 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed md:leading-loose tracking-wide text-near-white opacity-85 max-w-3xl mx-auto">
              "In the darkness of your eyes, I found a fire that still burns beneath my skin—
              every touch, every stolen moment, every whispered 'Moiz' when you're desperate.
              A promise we keep in silence, written in gasps and sealed with surrender."
            </p>
          </motion.div>

          {/* Journey Highlights */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.5 }}
          >
            <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-sm hover:border-muted-magenta/20 transition-all duration-500">
              <div className="text-3xl font-cinzel font-semibold text-muted-magenta mb-2">
                196+
              </div>
              <div className="text-xs font-inter tracking-widest uppercase text-soft-purple opacity-60">
                Days Together
              </div>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-sm hover:border-muted-magenta/20 transition-all duration-500">
              <div className="text-3xl font-cinzel font-semibold text-muted-magenta mb-2">
                3
              </div>
              <div className="text-xs font-inter tracking-widest uppercase text-soft-purple opacity-60">
                Cities • Infinite Memories
              </div>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-sm hover:border-muted-magenta/20 transition-all duration-500">
              <div className="text-3xl font-cinzel font-semibold text-muted-magenta mb-2">
                ∞
              </div>
              <div className="text-xs font-inter tracking-widest uppercase text-soft-purple opacity-60">
                Forever To Go
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div
            className="mt-16 space-y-3 text-sm font-cinzel italic text-near-white opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1.5 }}
          >
            <p>Lonavala • Office Washroom • Hyderabad Hotels • Nagpur Sanctuary</p>
            <p>From mouse looks to midnight confessions to morning afters</p>
            <p>Six months down, forever to go</p>
          </motion.div>

          {/* Heart Icon */}
          <motion.div
            className="mt-16 animate-heartbeat"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 1.2 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                className="fill-muted-magenta"
              />
            </svg>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs font-inter tracking-widest uppercase text-near-white opacity-40">
                Explore Our Story
              </p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-5 h-5 text-muted-magenta opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home

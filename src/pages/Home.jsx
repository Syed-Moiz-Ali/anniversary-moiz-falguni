import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Heart, MapPin, Calendar } from 'lucide-react'
import Timer from '../components/Timer'

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse for subtle parallax background only
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden bg-black text-white flex flex-col justify-center items-center py-25">

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        {/* Ambient Orbs - Respond to mouse */}
        <motion.div
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"
        />

        {/* Floating Particles (CSS Animation) */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                opacity: Math.random() * 0.5
              }}
            />
          ))}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">

        {/* 1. TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
            Est. July 2025
          </span>
        </motion.div>

        {/* 2. NAMES (HERO) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 relative inline-block"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
            Moiz <span className="text-rose-500 font-sans font-light">&</span> Falguni
          </h1>
          {/* Subtle glow behind text */}
          <div className="absolute -inset-10 bg-rose-500/10 blur-[60px] -z-10 rounded-full opacity-50" />
        </motion.div>

        {/* 3. SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-2xl font-serif italic text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          "From a misunderstanding in Lonavala to a sanctuary in Nagpur."
        </motion.p>

        {/* 4. LIVE TIMER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-20"
        >
          <Timer />
        </motion.div>

        {/* 5. STATS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24"
        >
          <StatCard icon={<Calendar />} value="196+" label="Days Together" />
          <StatCard icon={<MapPin />} value="3" label="Cities Conquered" />
          <StatCard icon={<Heart />} value="∞" label="Love Remaining" />
        </motion.div>

        {/* 6. SCROLL PROMPT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Begin The Journey</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="text-white/30" size={20} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

// --- SUB-COMPONENT: STAT CARD ---
const StatCard = ({ icon, value, label }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
    <div className="flex flex-col items-center gap-2">
      <div className="text-rose-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <span className="text-4xl font-serif font-bold text-white">{value}</span>
      <span className="text-xs font-bold uppercase tracking-widest text-white/40">{label}</span>
    </div>
  </div>
)

export default Home

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Feather, PenTool, CheckCircle,
  Moon, Mic, Sparkles, Gift, Heart,
  Home, Orbit, Smile, Zap, Shield,
  Package, Armchair, MessageCircle,
  Star, Map, Clock, Infinity as InfinityIcon
} from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: promises[] — all 20 entries
// Categories: emotional, intimate, playful, commitment, practical

const PROMISES = [
  {
    id: 1,
    icon: Moon,
    category: 'emotional',
    accentColor: 'indigo',
    text: "Never let misunderstandings sit overnight. Lonavala taught me that silence is more dangerous than the fight.",
    source: 'Learned from Lonavala',
  },
  {
    id: 2,
    icon: Mic,
    category: 'emotional',
    accentColor: 'rose',
    text: "2 AM rants get full attention. Phone down, ears open, arms available. Your spiraling thoughts deserve company.",
    source: 'Digital Confessions Era',
  },
  {
    id: 3,
    icon: Sparkles,
    category: 'commitment',
    accentColor: 'yellow',
    text: "Every 'first' celebrated loudly — first secret trip, first apartment, first morning with nowhere to be. All of it.",
    source: 'FutureTimeline Milestones',
  },
  {
    id: 4,
    icon: Gift,
    category: 'practical',
    accentColor: 'emerald',
    text: "Surprise gifts continue forever — black lace, handpicked t-shirts, random packages that say nothing except 'I thought of you.'",
    source: 'Long Distance Love Language',
  },
  {
    id: 5,
    icon: Heart,
    category: 'intimate',
    accentColor: 'pink',
    text: "Black lace memories are permanent. That Hyderabad night — your confidence, your beauty — is etched into my soul forever.",
    source: 'Black Lace Night',
  },
  {
    id: 6,
    icon: Home,
    category: 'commitment',
    accentColor: 'amber',
    text: "Build you a home where your 'quiet voice' can finally be loud — no hiding, no pretending, just us being completely ourselves.",
    source: 'Promise of Space',
  },
  {
    id: 7,
    icon: Orbit,
    category: 'commitment',
    accentColor: 'purple',
    text: "Choose you in every timeline, every universe, every version of reality where we exist. There is no world where I don't find you.",
    source: 'Reason #99',
  },
  {
    id: 8,
    icon: Smile,
    category: 'playful',
    accentColor: 'yellow',
    text: "Love every version of you — 'Bhai saab' sarcasm, baby voice manipulation, nose-scrunch anger, carefree dancing when no one's watching.",
    source: 'Reasons #3, #8, #24',
  },
  {
    id: 9,
    icon: Zap,
    category: 'intimate',
    accentColor: 'rose',
    text: "Reunions will always feel electric. Every return to your door will feel like the first time — weeks of longing given permission.",
    source: 'Nagpur Reunion Pattern',
  },
  {
    id: 10,
    icon: Shield,
    category: 'emotional',
    accentColor: 'blue',
    text: "Be your safest place. Best friend before lover, biggest fan always, the person who shows up when everything else falls apart.",
    source: 'Core Relationship Identity',
  },
  {
    id: 11,
    icon: Package,
    category: 'practical',
    accentColor: 'emerald',
    text: "Nagpur packages never stop. Distance shrinks through intentional thoughtfulness. Every delivery is a love letter with a tracking number.",
    source: 'Long Distance Love Language',
  },
  {
    id: 12,
    icon: Armchair,
    category: 'playful',
    accentColor: 'rose',
    text: "Lap time is non-negotiable and guaranteed. You climb in, phone goes down, world pauses. This is permanent policy.",
    source: 'Reason #22',
  },
  {
    id: 13,
    icon: MessageCircle,
    category: 'emotional',
    accentColor: 'indigo',
    text: "Never let you feel unheard. Every vent, every fear, every 2 AM spiral gets the version of me that puts everything else down.",
    source: 'Digital Confessions Era',
  },
  {
    id: 14,
    icon: Star,
    category: 'commitment',
    accentColor: 'yellow',
    text: "Celebrate you loudly and often — not just the big milestones but every Tuesday that deserves acknowledging. You deserve to be seen.",
    source: 'FutureTimeline Promise #15',
  },
  {
    id: 15,
    icon: Map,
    category: 'commitment',
    accentColor: 'blue',
    text: "Build new coordinates together — places that carry only our memories, trips where nobody knows our names, adventures chosen just for us.",
    source: 'Sacred Coordinates',
  },
  {
    id: 16,
    icon: Clock,
    category: 'practical',
    accentColor: 'slate',
    text: "Show up on time for what matters. No more countdowns alone. When you're waiting, I want to already be there.",
    source: 'Separation Lessons',
  },
  {
    id: 17,
    icon: Feather,
    category: 'intimate',
    accentColor: 'pink',
    text: "Keep writing our story — new chapters, new hotels, new mornings. The best parts haven't been lived yet. We're just getting started.",
    source: 'OurStory Footer',
  },
  {
    id: 18,
    icon: Smile,
    category: 'playful',
    accentColor: 'amber',
    text: "Never stop making you laugh — at my own expense if necessary. That unguarded, genuine laugh you do before finishing the joke? Eternal mission.",
    source: 'Reason #24',
  },
  {
    id: 19,
    icon: InfinityIcon,
    category: 'commitment',
    accentColor: 'purple',
    text: "Be intentional, not accidental. We didn't stumble into permanence — we built toward it. Keep building. Keep choosing. Every single day.",
    source: 'Journey Meta',
  },
  {
    id: 20,
    icon: Heart,
    category: 'intimate',
    accentColor: 'rose',
    text: "Love you with the same hunger and the same tenderness, in the same breath. Distance tested us. Desire brought us closer. Love keeps us.",
    source: 'Journey Footer Quote',
  },
]

const CATEGORY_STYLE = {
  emotional:  { pill: 'text-blue-300/50 bg-blue-500/8 border-blue-500/12'    },
  intimate:   { pill: 'text-pink-300/50 bg-pink-500/8 border-pink-500/12'    },
  playful:    { pill: 'text-yellow-300/50 bg-yellow-500/8 border-yellow-500/12' },
  commitment: { pill: 'text-purple-300/50 bg-purple-500/8 border-purple-500/12' },
  practical:  { pill: 'text-emerald-300/50 bg-emerald-500/8 border-emerald-500/12'},
}

const ACCENT = {
  rose:   { dot: 'bg-rose-500',    num: 'text-rose-400/50',   bar: 'bg-rose-500/50',    border: 'hover:border-rose-500/20',    icon: 'text-rose-400/60'   },
  indigo: { dot: 'bg-indigo-400',  num: 'text-indigo-400/50', bar: 'bg-indigo-400/50',  border: 'hover:border-indigo-500/20',  icon: 'text-indigo-400/60' },
  yellow: { dot: 'bg-yellow-400',  num: 'text-yellow-400/50', bar: 'bg-yellow-400/50',  border: 'hover:border-yellow-500/20',  icon: 'text-yellow-400/60' },
  emerald:{ dot: 'bg-emerald-400', num: 'text-emerald-400/50',bar: 'bg-emerald-400/50', border: 'hover:border-emerald-500/20', icon: 'text-emerald-400/60'},
  pink:   { dot: 'bg-pink-400',    num: 'text-pink-400/50',   bar: 'bg-pink-400/50',    border: 'hover:border-pink-500/20',    icon: 'text-pink-400/60'   },
  amber:  { dot: 'bg-amber-400',   num: 'text-amber-400/50',  bar: 'bg-amber-400/50',   border: 'hover:border-amber-500/20',   icon: 'text-amber-400/60'  },
  purple: { dot: 'bg-purple-400',  num: 'text-purple-400/50', bar: 'bg-purple-400/50',  border: 'hover:border-purple-500/20',  icon: 'text-purple-400/60' },
  blue:   { dot: 'bg-blue-400',    num: 'text-blue-400/50',   bar: 'bg-blue-400/50',    border: 'hover:border-blue-500/20',    icon: 'text-blue-400/60'   },
  slate:  { dot: 'bg-slate-400',   num: 'text-slate-400/50',  bar: 'bg-slate-400/50',   border: 'hover:border-slate-500/20',   icon: 'text-slate-400/60'  },
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Promises = () => {
  const [isSigned, setIsSigned] = useState(false)

  return (
    <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/8 rounded-full blur-[150px]" />
      </div>

      <div className="container max-w-4xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-md mb-8"
          >
            <Feather size={11} className="text-rose-400/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">The Vow</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-serif mb-5 leading-tight bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent"
          >
            My Sacred{' '}
            <span className="italic" style={{ WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(135deg, #fb7185, #e11d48)', WebkitBackgroundClip: 'text' }}>
              Promises
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/30 font-serif italic text-base max-w-xl mx-auto mb-10"
          >
            "Words I mean with every fiber of my being."
          </motion.p>

          {/* Category legend */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {Object.entries(CATEGORY_STYLE).map(([cat, style]) => (
              <span key={cat} className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border ${style.pill}`}>
                {cat}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Promise List ── */}
        <div className="relative mb-32">
          {/* Spine */}
          <div className="absolute top-8 bottom-8 left-[27px] md:left-1/2 w-px bg-gradient-to-b from-rose-500/0 via-rose-500/20 to-rose-500/0 md:-translate-x-1/2 -z-10" />

          <div className="space-y-5">
            {PROMISES.map((promise, index) => (
              <PromiseCard key={promise.id} promise={promise} index={index} />
            ))}
          </div>
        </div>

        {/* ── Signature Contract ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-[#0a0a0c] border border-white/5 p-8 md:p-12 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/5 to-purple-900/5 pointer-events-none rounded-2xl" />

          {/* Big quote bg */}
          <div className="absolute top-4 left-5 text-[80px] font-serif text-white/[0.03] leading-none select-none">"</div>

          <p className="font-serif text-lg md:text-xl leading-relaxed italic text-white/60 mb-8 relative z-10 max-w-lg mx-auto">
            "These aren't just words on a screen. They are my commitment to you. To us. To every chapter we haven't written yet."
          </p>

          <div className="h-px w-full bg-white/5 mb-8" />

          <div className="flex flex-col items-center gap-5 relative z-10">
            {!isSigned ? (
              <motion.button
                onClick={() => setIsSigned(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-3 bg-white/[0.04] border border-white/10 rounded-full font-bold uppercase tracking-widest text-[10px] text-white/50 hover:bg-rose-500/10 hover:border-rose-500/30 hover:text-rose-300/80 transition-all duration-500 flex items-center gap-2"
              >
                <PenTool size={12} /> Seal My Vow
              </motion.button>
            ) : (
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="flex flex-col items-center gap-3"
              >
                {/* Signature */}
                <motion.p
                  initial={{ opacity: 0, rotate: -8 }}
                  animate={{ opacity: 1, rotate: -4 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="font-serif text-5xl md:text-6xl text-rose-400/80 italic"
                  style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}
                >
                  Moiz
                </motion.p>
                {/* Underline stroke */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '80px' }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="h-px bg-rose-400/40 rounded-full"
                />
                <div className="flex items-center gap-2 text-emerald-400/60 text-[10px] font-bold uppercase tracking-widest mt-1">
                  <CheckCircle size={12} /> Signed & Sealed
                </div>
                <p className="text-[9px] text-white/15 uppercase tracking-[0.3em] mt-1">
                  {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · Forever
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── PROMISE CARD ─────────────────────────────────────────────────────────────
const PromiseCard = ({ promise, index }) => {
  const isEven = index % 2 === 0
  const accent = ACCENT[promise.accentColor] || ACCENT.rose
  const catStyle = CATEGORY_STYLE[promise.category] || CATEGORY_STYLE.emotional
  const Icon = promise.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.03, 0.4) }}
      className={`flex items-center gap-5 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* ── Icon Node ── */}
      <div className="shrink-0 w-12 h-12 rounded-full bg-[#060608] border border-white/8 flex items-center justify-center relative z-10">
        <Icon size={16} className={accent.icon} />
        <div className={`absolute inset-0 rounded-full ${accent.dot} opacity-5 blur-sm`} />
      </div>

      {/* ── Card ── */}
      <motion.div
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
        className={`flex-1 p-5 md:p-6 bg-white/[0.02] border border-white/5 rounded-2xl transition-all duration-500 group ${accent.border}`}
      >
        {/* Top row */}
        <div className={`flex items-center justify-between mb-3 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          <span className={`text-[8px] font-bold uppercase tracking-[0.25em] ${accent.num}`}>
            Promise {String(promise.id).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${catStyle.pill}`}>
              {promise.category}
            </span>
          </div>
        </div>

        {/* Promise text */}
        <p className={`font-serif text-base md:text-lg leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-3 ${isEven ? '' : 'md:text-right'}`}>
          {promise.text}
        </p>

        {/* Progress bar + source */}
        <div className={`flex items-center gap-3 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          <div className="flex-1 h-px bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.2, delay: index * 0.02, ease: 'easeOut' }}
              className={`h-full ${accent.bar}`}
            />
          </div>
          <span className="text-[8px] font-serif italic text-white/12 shrink-0">{promise.source}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Promises

import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  MapPin, Flame, Moon, Gift, Home,
  Smartphone, Infinity as InfinityIcon,
  Heart, Calendar, Sparkles, Zap
} from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: journey.timeline + ourStory.chapters + places + reasons + meta

const TIMELINE = [
  {
    month: 'July 2025',
    location: 'Lonavala',
    phase: 'Conflict → Curiosity',
    title: 'The Ignition',
    icon: MapPin,
    accentColor: 'rose',
    intensityLevel: 0.82,
    emotionTags: ['ego clash', 'fate setup', 'attraction tension'],
    symbolism: 'The ignition point of the relationship.',
    fragment: "A truth and dare game. A misunderstanding. A fight that neither of us expected would turn into the foundation of everything. We started with friction — raised voices and stubborn pride — unaware that destiny had already chosen us. Curiosity replaced defensiveness.",
  },
  {
    month: 'August 2025',
    location: 'Office Washroom → First Hotel',
    phase: 'Risk → Exploration',
    title: 'First Touch',
    icon: Flame,
    accentColor: 'amber',
    intensityLevel: 0.93,
    emotionTags: ['adrenaline', 'desire', 'boundary crossing', 'slow build'],
    symbolism: 'The moment innocence turned into intention.',
    fragment: "Planned over WhatsApp the night before. Reckless. Forbidden. Perfect. The urgency in your kiss, your hands gripping me like you were claiming something always meant to be yours. Then the first hotel — not rushing, exploring, building something that would later deepen into passion.",
  },
  {
    month: 'September 2025',
    location: 'Office Corridors',
    phase: 'Secret Intimacy',
    title: 'Stolen Hours',
    icon: Moon,
    accentColor: 'indigo',
    intensityLevel: 0.87,
    emotionTags: ['tension', 'secrecy', 'anticipation', 'playful danger'],
    symbolism: 'Thrill of secrecy and shared risk.',
    fragment: "Stolen glances. Pressed against walls. Almost getting caught. Office nights after everyone left — hands exploring, pushing every boundary except the last one. The anticipation was torture — the most delicious kind. We were building toward something inevitable.",
  },
  {
    month: 'October 2025',
    location: 'Hyderabad',
    phase: 'Intimacy → Symbolic Commitment',
    title: 'Hyderabad & Black Lace',
    icon: Gift,
    accentColor: 'pink',
    intensityLevel: 0.97,
    emotionTags: ['passion', 'surrender', 'admiration', 'awe', 'devotion'],
    symbolism: 'Transformation from desire to emotional merging.',
    fragment: "All the fantasies we whispered about became real. Hyderabad hotels turned into sacred spaces. Then the gift — black lace. When you stepped out of that bathroom, time stopped. Confidence radiating from every inch of you. I couldn't speak. That image is burned into my retina forever.",
  },
  {
    month: 'Late October 2025',
    location: 'Office Goodbye → Nagpur',
    phase: 'Separation → Reunion',
    title: 'Goodbye That Wasn\'t',
    icon: Home,
    accentColor: 'emerald',
    intensityLevel: 0.91,
    emotionTags: ['loss', 'belonging', 'longing release', 'home feeling'],
    symbolism: 'From temporary meetings to emotional home.',
    fragment: "You left the office. I cried. Losing daily access to you felt like losing oxygen. But Nagpur became our sanctuary — your room became our refuge. Reunions after weeks apart felt electric, every knock on your door feeling like returning to where I truly belonged.",
  },
  {
    month: 'November – December 2025',
    location: 'Nagpur ↔ Hyderabad',
    phase: 'Long Distance Adaptation',
    title: 'Miles Apart, Fire Intact',
    icon: Smartphone,
    accentColor: 'purple',
    intensityLevel: 0.90,
    emotionTags: ['resilience', 'loyalty', 'intentional effort', 'creativity'],
    symbolism: 'Distance conquered by intention.',
    fragment: "Video calls. Midnight confessions. Shopping online together, arguing about which color suits me better. Packages arriving with your handwriting — 'For my favorite person' — every one a love letter in disguise. We refused to let distance dilute what we built.",
  },
  {
    month: 'January 2026 – Present',
    location: 'Wherever We Are Together',
    phase: 'Intentional Commitment',
    title: 'Still Choosing You',
    icon: InfinityIcon,
    accentColor: 'white',
    intensityLevel: 0.92,
    emotionTags: ['choice', 'growth', 'stability', 'future orientation'],
    symbolism: 'Home defined by presence, not geography.',
    fragment: "From a fight in Lonavala to building something extraordinary across cities. We didn't just fall in love — we built trust, passion, resilience, and a story that feels written by fate itself. We didn't stumble into permanence. We built toward it. Still writing. Still choosing.",
  },
]

// Stats — from reasons.count:99, promises:20, journey.timeline, quiz.totalQuestions:39
const STATS = [
  { value: '196+', label: 'Days Together',       highlight: false },
  { value: '99',   label: 'Reasons I Love You',  highlight: false },
  { value: '5',    label: 'Cities in Our Story', highlight: false },
  { value: '20',   label: 'Promises Made',       highlight: false },
  { value: '11',   label: 'Story Chapters',      highlight: false },
  { value: '1',    label: 'Black Lace Night',    highlight: true  },
  { value: '39',   label: 'Shared Memories Quiz',highlight: false },
  { value: '∞',    label: 'Love Remaining',      highlight: false, span: true },
]

const ACCENT = {
  rose:   { dot: 'bg-rose-500',    text: 'text-rose-400/80',    glow: 'shadow-rose-500/20',   bar: 'bg-rose-500/60',    tag: 'bg-rose-500/10 text-rose-300/60 border-rose-500/15'   },
  amber:  { dot: 'bg-amber-400',   text: 'text-amber-400/80',   glow: 'shadow-amber-500/20',  bar: 'bg-amber-400/60',   tag: 'bg-amber-500/10 text-amber-300/60 border-amber-500/15' },
  indigo: { dot: 'bg-indigo-400',  text: 'text-indigo-400/80',  glow: 'shadow-indigo-500/20', bar: 'bg-indigo-400/60',  tag: 'bg-indigo-500/10 text-indigo-300/60 border-indigo-500/15'},
  pink:   { dot: 'bg-pink-400',    text: 'text-pink-400/80',    glow: 'shadow-pink-500/20',   bar: 'bg-pink-400/60',    tag: 'bg-pink-500/10 text-pink-300/60 border-pink-500/15'    },
  emerald:{ dot: 'bg-emerald-400', text: 'text-emerald-400/80', glow: 'shadow-emerald-500/20',bar: 'bg-emerald-400/60', tag: 'bg-emerald-500/10 text-emerald-300/60 border-emerald-500/15'},
  purple: { dot: 'bg-purple-400',  text: 'text-purple-400/80',  glow: 'shadow-purple-500/20', bar: 'bg-purple-400/60',  tag: 'bg-purple-500/10 text-purple-300/60 border-purple-500/15'},
  white:  { dot: 'bg-white/60',    text: 'text-white/60',       glow: 'shadow-white/10',      bar: 'bg-white/30',       tag: 'bg-white/5 text-white/40 border-white/10'              },
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Journey = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <section ref={containerRef} className="min-h-screen bg-[#060608] text-white relative overflow-hidden py-32">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/8 rounded-full blur-[150px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-md mb-8"
          >
            <Calendar size={11} className="text-rose-400/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">The Chronology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl font-serif mb-5 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent"
          >
            The Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base font-serif italic text-white/30 max-w-xl mx-auto"
          >
            "Seven months. Five cities. One story still being written."
          </motion.p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-purple-500/40 to-blue-500/50 md:-translate-x-1/2"
          />

          <div className="space-y-20 md:space-y-28">
            {TIMELINE.map((item, index) => (
              <TimelineCard key={index} data={item} index={index} />
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="mt-40 border-t border-white/5 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-white/70 mb-2">By The Numbers</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">Documented. Measured. Infinite.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STATS.map((s, i) => (
              <StatBox key={i} value={s.value} label={s.label} delay={i * 0.07} highlight={s.highlight} span={s.span} />
            ))}
          </div>
        </div>

        {/* ── Footer Quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center max-w-3xl mx-auto p-10 md:p-14 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/5 to-purple-900/5" />
          <Heart
            size={18}
            className="mx-auto text-rose-400/50 mb-6 relative z-10"
            fill="currentColor"
          />
          <p className="font-serif text-lg md:text-xl italic leading-relaxed text-white/60 relative z-10 max-w-2xl mx-auto">
            "Distance tested us, desire brought us closer, and love kept us coming back for more.
            We didn't stumble into permanence — we built toward it."
          </p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/15 mt-5 relative z-10 font-bold">
            To Be Continued...
          </p>
        </motion.div>

      </div>
    </section>
  )
}

// ─── TIMELINE CARD ────────────────────────────────────────────────────────────
const TimelineCard = ({ data, index }) => {
  const isEven = index % 2 === 0
  const accent = ACCENT[data.accentColor] || ACCENT.rose
  const Icon = data.icon

  return (
    <div className={`relative flex items-start ${isEven ? 'md:flex-row-reverse' : ''} md:justify-between pl-12 md:pl-0 group`}>

      {/* Node */}
      <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#060608] border border-white/8 flex items-center justify-center z-20 transition-all duration-300 group-hover:border-white/15 group-hover:scale-110 ${accent.glow} group-hover:shadow-lg`}>
        <div className={`w-2 h-2 rounded-full ${accent.dot} animate-pulse`} />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: index * 0.05 }}
        className="w-full md:w-[45%]"
      >
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-3 mb-5">
            <div>
              <p className={`text-[9px] font-bold uppercase tracking-[0.25em] mb-0.5 ${accent.text}`}>
                {data.phase}
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/25">{data.month}</span>
                <span className="text-white/10">·</span>
                <span className="text-[9px] text-white/15 font-serif italic">{data.location}</span>
              </div>
            </div>
            <div className={`p-2 rounded-xl bg-white/[0.03] border border-white/5 shrink-0`}>
              <Icon size={14} className={accent.text} />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-serif text-white/80 group-hover:text-white transition-colors mb-3">
            {data.title}
          </h3>

          {/* Body */}
          <p className="text-white/40 leading-relaxed text-sm mb-5 group-hover:text-white/60 transition-colors duration-300">
            {data.fragment}
          </p>

          {/* Intensity bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[8px] uppercase tracking-widest text-white/15">Intensity</span>
              <span className="text-[8px] font-bold text-white/20">{Math.round(data.intensityLevel * 100)}%</span>
            </div>
            <div className="h-px bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${data.intensityLevel * 100}%` }}
                transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
                className={`h-full ${accent.bar} rounded-full`}
              />
            </div>
          </div>

          {/* Emotion tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {data.emotionTags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider border ${accent.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Symbolism footer */}
          <p className="text-[9px] text-white/12 font-serif italic">
            ✦ {data.symbolism}
          </p>
        </motion.div>
      </motion.div>

      {/* Spacer */}
      <div className="hidden md:block w-[45%]" />
    </div>
  )
}

// ─── STAT BOX ─────────────────────────────────────────────────────────────────
const StatBox = ({ value, label, delay, highlight, span }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -3 }}
    className={`p-5 md:p-7 rounded-2xl border text-center transition-all duration-300 ${
      highlight
        ? 'bg-rose-500/5 border-rose-500/15 hover:border-rose-500/25'
        : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
    } ${span ? 'col-span-2' : ''}`}
  >
    <div className={`text-3xl md:text-4xl font-serif mb-1.5 ${highlight ? 'text-rose-400/80' : 'text-white/80'}`}>
      {value}
    </div>
    <div className="text-[9px] font-bold uppercase tracking-widest text-white/25">
      {label}
    </div>
  </motion.div>
)

export default Journey

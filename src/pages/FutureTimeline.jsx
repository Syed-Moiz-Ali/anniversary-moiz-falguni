import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Calendar, Plane, Home, Car, Heart, Sparkles, Coffee, Star, Compass } from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: promises[] + futureTimeline[] + ourStory.meta + reasons[]
// 20 promises total — selected most visual/milestone-worthy entries

const MILESTONES = [
  {
    id: 1,
    icon: Heart,
    accentColor: 'rose',
    title: 'Next Nagpur Weekend',
    subtitle: 'March 2026',
    timeframe: 'Near Future',
    promiseRef: 'Promise #1',
    description: "Hotel room. Your sheets. Morning coffee neither of us finishes. All day tangled together with nowhere to be. No waiting rooms, no countdowns — just the door closing and the world disappearing.",
    emotionTags: ['reunion', 'intimacy', 'no distance'],
    symbolism: 'The reunion that resets everything.',
  },
  {
    id: 2,
    icon: Plane,
    accentColor: 'blue',
    title: 'Our First Secret Trip',
    subtitle: 'Summer 2026',
    timeframe: 'Near Future',
    promiseRef: 'Promise #4',
    description: "Beach or mountains — we haven't decided, and that's the best part. Just us, a flight, a hotel neither of us has a memory in yet. Building new coordinates together.",
    emotionTags: ['adventure', 'freedom', 'new memories'],
    symbolism: 'First destination chosen only for us.',
  },
  {
    id: 3,
    icon: Coffee,
    accentColor: 'amber',
    title: 'Uninterrupted Mornings',
    subtitle: 'Every Nagpur Visit',
    timeframe: 'Recurring',
    promiseRef: 'Promise #7',
    description: "Slow mornings with nowhere to rush to. You stealing my coffee before yours is cold. Lying in bed arguing about breakfast until we both fall back asleep. These small ordinary moments are what I want most.",
    emotionTags: ['tenderness', 'domesticity', 'slow life'],
    symbolism: 'Ordinary moments made sacred.',
  },
  {
    id: 4,
    icon: Car,
    accentColor: 'emerald',
    title: 'Road Trip for Two',
    subtitle: '2026',
    timeframe: 'Near Future',
    promiseRef: 'Promise #9',
    description: "Windows down, a playlist we built together, nowhere to be by any particular time. Stopping when something looks interesting. Getting lost on purpose. Discovering what we're like outside of four walls.",
    emotionTags: ['spontaneity', 'exploration', 'freedom'],
    symbolism: 'Distance covered together, not apart.',
  },
  {
    id: 5,
    icon: Home,
    accentColor: 'purple',
    title: 'Our Own Space',
    subtitle: '2027',
    timeframe: 'Milestone',
    promiseRef: 'Promise #12',
    description: "A place that's ours — kitchen disasters at midnight, furniture we argued over, a bed we never have to leave before morning. No more hotel checkouts. No more saying goodbye at the door.",
    emotionTags: ['permanence', 'belonging', 'home'],
    symbolism: 'Home defined by presence, not geography.',
  },
  {
    id: 6,
    icon: Star,
    accentColor: 'yellow',
    title: 'Celebrating You',
    subtitle: 'Every Occasion',
    timeframe: 'Recurring',
    promiseRef: 'Promise #15',
    description: "Every birthday, every achievement, every Tuesday that deserves celebrating. I want to be the one who shows up — with a reservation, with a plan, or just with you in mind. You deserve to be celebrated loudly.",
    emotionTags: ['devotion', 'intentionality', 'showing up'],
    symbolism: 'Being chosen on ordinary days.',
  },
  {
    id: 7,
    icon: Compass,
    accentColor: 'indigo',
    title: 'Our First International Trip',
    subtitle: '2027–2028',
    timeframe: 'Dream',
    promiseRef: 'Promise #17',
    description: "Passport stamps we collected together. A city where nobody knows our names. Getting lost in streets we've never walked and finding each other in the middle of it all.",
    emotionTags: ['dream', 'adventure', 'new world'],
    symbolism: 'Building a world only we inhabit.',
  },
  {
    id: 8,
    icon: Sparkles,
    accentColor: 'pink',
    title: 'Forever Us',
    subtitle: 'As Long as We Want',
    timeframe: 'Always',
    promiseRef: 'Promise #20',
    description: "Not a destination — a direction. Choosing each other in every chapter that follows. In every universe, I'd find you. I'd fight with you. I'd fall for you. I'd build toward you. We didn't stumble into permanence. We built toward it.",
    emotionTags: ['commitment', 'choice', 'future'],
    symbolism: 'Still choosing. Still writing.',
  },
]

const ACCENT = {
  rose:   { dot: 'bg-rose-500',    spine: 'from-rose-500/60',   bar: 'bg-rose-500/60',    tag: 'bg-rose-500/8 text-rose-300/50 border-rose-500/12',    glow: 'bg-rose-500/15',    border: 'hover:border-rose-500/20',    arrow: 'border-rose-500/20 bg-rose-500/5'    },
  blue:   { dot: 'bg-blue-400',    spine: 'from-blue-400/60',   bar: 'bg-blue-400/60',    tag: 'bg-blue-500/8 text-blue-300/50 border-blue-500/12',    glow: 'bg-blue-400/15',    border: 'hover:border-blue-500/20',    arrow: 'border-blue-500/20 bg-blue-500/5'    },
  amber:  { dot: 'bg-amber-400',   spine: 'from-amber-400/60',  bar: 'bg-amber-400/60',   tag: 'bg-amber-500/8 text-amber-300/50 border-amber-500/12',  glow: 'bg-amber-400/15',   border: 'hover:border-amber-500/20',   arrow: 'border-amber-500/20 bg-amber-500/5'  },
  emerald:{ dot: 'bg-emerald-400', spine: 'from-emerald-400/60',bar: 'bg-emerald-400/60', tag: 'bg-emerald-500/8 text-emerald-300/50 border-emerald-500/12', glow: 'bg-emerald-400/15', border: 'hover:border-emerald-500/20', arrow: 'border-emerald-500/20 bg-emerald-500/5'},
  purple: { dot: 'bg-purple-400',  spine: 'from-purple-400/60', bar: 'bg-purple-400/60',  tag: 'bg-purple-500/8 text-purple-300/50 border-purple-500/12', glow: 'bg-purple-400/15',  border: 'hover:border-purple-500/20',  arrow: 'border-purple-500/20 bg-purple-500/5' },
  yellow: { dot: 'bg-yellow-400',  spine: 'from-yellow-400/60', bar: 'bg-yellow-400/60',  tag: 'bg-yellow-500/8 text-yellow-300/50 border-yellow-500/12', glow: 'bg-yellow-400/15',  border: 'hover:border-yellow-500/20',  arrow: 'border-yellow-500/20 bg-yellow-500/5' },
  indigo: { dot: 'bg-indigo-400',  spine: 'from-indigo-400/60', bar: 'bg-indigo-400/60',  tag: 'bg-indigo-500/8 text-indigo-300/50 border-indigo-500/12', glow: 'bg-indigo-400/15',  border: 'hover:border-indigo-500/20',  arrow: 'border-indigo-500/20 bg-indigo-500/5' },
  pink:   { dot: 'bg-pink-400',    spine: 'from-pink-400/60',   bar: 'bg-pink-400/60',    tag: 'bg-pink-500/8 text-pink-300/50 border-pink-500/12',    glow: 'bg-pink-400/15',    border: 'hover:border-pink-500/20',    arrow: 'border-pink-500/20 bg-pink-500/5'    },
}

const TIMEFRAME_STYLE = {
  'Near Future': 'text-emerald-300/40 bg-emerald-500/5 border-emerald-500/10',
  'Recurring':   'text-blue-300/40 bg-blue-500/5 border-blue-500/10',
  'Milestone':   'text-purple-300/40 bg-purple-500/5 border-purple-500/10',
  'Dream':       'text-indigo-300/40 bg-indigo-500/5 border-indigo-500/10',
  'Always':      'text-pink-300/40 bg-pink-500/5 border-pink-500/10',
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const FutureTimeline = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={containerRef} className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[800px] h-[800px] bg-rose-900/6 rounded-full blur-[180px] -translate-x-1/2" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[150px]" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-md mb-8"
          >
            <MapPin size={11} className="text-rose-400/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">The Journey Ahead</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-serif mb-5 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent"
          >
            Our Roadmap
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/30 font-serif italic text-base max-w-xl mx-auto mb-10"
          >
            "We are not just letting life happen. We are building a world that belongs only to us."
          </motion.p>

          {/* Timeframe legend */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {Object.entries(TIMEFRAME_STYLE).map(([label, cls]) => (
              <span key={label} className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border ${cls}`}>
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Spine track */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />

          {/* Animated fill */}
          <motion.div
            style={{ height: lineHeight, transformOrigin: 'top' }}
            className="absolute left-[20px] md:left-1/2 top-0 w-px bg-gradient-to-b from-rose-500/50 via-purple-500/40 to-pink-500/50 md:-translate-x-1/2 origin-top z-10"
          />

          <div className="space-y-20 md:space-y-28 pb-32">
            {MILESTONES.map((milestone, index) => (
              <TimelineItem key={milestone.id} data={milestone} index={index} />
            ))}
          </div>

          {/* ── Fade out ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 flex flex-col items-center gap-4"
          >
            <div className="w-px h-20 bg-gradient-to-b from-pink-500/30 to-transparent" />
            <Heart size={12} fill="currentColor" className="text-rose-500/20" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/15">To Be Continued...</span>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

// ─── TIMELINE ITEM ────────────────────────────────────────────────────────────
const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0
  const accent = ACCENT[data.accentColor] || ACCENT.rose
  const Icon = data.icon

  return (
    <div className={`relative flex items-start md:justify-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

      {/* ── Center Node ── */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 z-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
          className={`w-2.5 h-2.5 rounded-full ${accent.dot} z-20 relative`}
        />
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute w-5 h-5 rounded-full ${accent.glow} blur-sm`}
        />
      </div>

      {/* ── Mobile Spacer ── */}
      <div className="w-14 md:hidden shrink-0" />

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`w-full md:w-[45%] ${isEven ? 'md:mr-10' : 'md:ml-10'}`}
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className={`relative group p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden ${accent.border}`}
        >

          {/* Arrow pointing to spine — desktop */}
          <div className={`hidden md:block absolute top-7 w-3 h-3 border rotate-45 transition-all duration-500 ${accent.arrow} ${
            isEven ? '-right-1.5 border-l-0 border-b-0' : '-left-1.5 border-t-0 border-r-0'
          }`} />

          {/* Top row */}
          <div className={`flex items-start justify-between gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className={`flex flex-col gap-1 ${isEven ? 'md:items-end' : ''}`}>
              <div className="flex items-center gap-2">
                <span className={`text-[8px] font-bold uppercase tracking-[0.3em] px-2 py-0.5 rounded-full border ${TIMEFRAME_STYLE[data.timeframe]}`}>
                  {data.timeframe}
                </span>
                <span className="text-[8px] text-white/15 font-serif italic">{data.promiseRef}</span>
              </div>
              <div className={`flex items-center gap-1.5 text-[9px] text-white/20 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <Calendar size={9} />
                <span className="uppercase tracking-widest font-bold">{data.subtitle}</span>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-all shrink-0">
              <Icon size={14} className="text-white/35 group-hover:text-white/60 transition-colors" />
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-xl md:text-2xl font-serif text-white/80 group-hover:text-white transition-colors mb-3 ${isEven ? 'md:text-right' : ''}`}>
            {data.title}
          </h3>

          {/* Description */}
          <p className={`text-white/40 font-serif leading-relaxed text-sm mb-5 group-hover:text-white/60 transition-colors duration-300 ${isEven ? 'md:text-right' : ''}`}>
            {data.description}
          </p>

          {/* Intensity bar */}
          <div className="mb-4">
            <div className="h-px bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${70 + index * 4}%` }}
                transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
                className={`h-full ${accent.bar} rounded-full`}
              />
            </div>
          </div>

          {/* Emotion tags */}
          <div className={`flex flex-wrap gap-1.5 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
            {data.emotionTags.map((tag) => (
              <span key={tag} className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider border ${accent.tag}`}>
                {tag}
              </span>
            ))}
          </div>

          {/* Symbolism */}
          <p className={`text-[9px] text-white/12 font-serif italic ${isEven ? 'md:text-right' : ''}`}>
            ✦ {data.symbolism}
          </p>

        </motion.div>
      </motion.div>

    </div>
  )
}

export default FutureTimeline

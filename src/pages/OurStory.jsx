import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  Calendar, MapPin, Heart, Clock, Lock,
  Sparkles, MessageCircle, Zap, Compass, Home
} from 'lucide-react'

// ─── DATA — FULLY FROM loveMasterData.json ────────────────────────────────────
// Sources: journey.timeline (11 entries) + ourStory.chapters + places + insideWorld

const TIMELINE = [
  {
    id: 1,
    icon: MapPin,
    phase: 'Conflict',
    title: 'The Beginning',
    date: 'July 2025',
    location: 'Lonavala',
    intensityLevel: 0.82,
    emotionTags: ['ego clash', 'attraction tension', 'pride', 'fate setup'],
    transition: 'Conflict → Curiosity',
    symbolism: 'The ignition point of the relationship.',
    text: "A truth and dare game. A misunderstanding. A fight that neither of us expected would turn into the foundation of everything. We started with friction, with raised voices and stubborn pride — unaware that destiny had already chosen us.",
    accentColor: 'rose',
  },
  {
    id: 2,
    icon: MessageCircle,
    phase: 'Reconnection',
    title: 'Clearing the Air',
    date: 'Late July 2025',
    location: 'WhatsApp',
    intensityLevel: 0.78,
    emotionTags: ['vulnerability', 'trust building', 'curiosity', 'emotional bonding'],
    transition: 'Curiosity → Emotional Attachment',
    symbolism: 'Digital space transformed into sacred confessional.',
    text: "We talked to clear the misunderstanding. But the conversation never stopped. From apologies to late-night confessions, from awkward messages to vulnerability at 2 AM — something deeper was forming. We went from colleagues to conspirators in the dark.",
    accentColor: 'indigo',
  },
  {
    id: 3,
    icon: Lock,
    phase: 'Risk',
    title: 'First Kiss',
    date: 'Mid August 2025',
    location: 'Office Washroom',
    intensityLevel: 0.93,
    emotionTags: ['adrenaline', 'desire', 'boundary crossing', 'irreversibility'],
    transition: 'Risk → Exploration',
    symbolism: 'The moment innocence turned into intention.',
    text: "Planned over WhatsApp the night before. Reckless. Forbidden. Perfect. The urgency in your kiss, your hands gripping me like you were claiming something that was always meant to be yours. A line crossed that made everything afterward irreversible.",
    accentColor: 'amber',
  },
  {
    id: 4,
    icon: Clock,
    phase: 'Exploration',
    title: 'Anticipation',
    date: 'Late August 2025',
    location: 'First Hotel',
    intensityLevel: 0.88,
    emotionTags: ['anticipation', 'curiosity', 'tension', 'slow build'],
    transition: 'Exploration → Intimacy',
    symbolism: 'Foundation of physical and emotional understanding.',
    text: "We didn't cross every line that night. But we explored. Discovered. Learned the language of each other's connection. Hours of tension, curiosity, and building something that would later deepen into passion. It was the first time I felt truly at home.",
    accentColor: 'purple',
  },
  {
    id: 5,
    icon: Heart,
    phase: 'Intimacy',
    title: 'First Time',
    date: 'October 2025',
    location: 'Hyderabad',
    intensityLevel: 0.96,
    emotionTags: ['passion', 'surrender', 'emotional merging', 'bond strengthening'],
    transition: 'Intimacy → Symbolic Commitment',
    symbolism: 'Transformation from desire to emotional merging.',
    text: "All the fantasies we whispered about became real. Hyderabad hotels became sacred spaces. It wasn't just physical — it was emotional, intense, unforgettable. The morning light hitting your face on that hotel pillow remains one of my favorite memories.",
    accentColor: 'rose',
  },
  {
    id: 6,
    icon: Sparkles,
    phase: 'Symbolic Commitment',
    title: 'Black Lace Night',
    date: 'October 2025',
    location: 'Last Hyderabad Hotel',
    intensityLevel: 0.95,
    emotionTags: ['admiration', 'awe', 'symbolism', 'devotion'],
    transition: 'Commitment → Separation',
    symbolism: 'Embodied trust and admiration.',
    text: "The gift. The promise. The moment you stepped out wearing black lace and time stopped. Confidence radiating from you. I couldn't speak. That night became one of the most powerful memories of our entire story — seared into my mind forever.",
    accentColor: 'pink',
  },
  {
    id: 7,
    icon: Compass,
    phase: 'Separation',
    title: 'The Departure',
    date: 'Late October 2025',
    location: 'Office Goodbye',
    intensityLevel: 0.87,
    emotionTags: ['loss', 'attachment anxiety', 'love realization', 'fear of distance'],
    transition: 'Separation → Reunion Urgency',
    symbolism: 'The goodbye that proved the love.',
    text: "You left the office. I cried. Losing daily access to you felt like losing oxygen. But what felt like an ending became a transition into something deeper and more intentional. What we built didn't weaken — it intensified.",
    accentColor: 'slate',
  },
  {
    id: 8,
    icon: Home,
    phase: 'Reunion',
    title: 'Our City',
    date: 'November 2025',
    location: 'Nagpur',
    intensityLevel: 0.94,
    emotionTags: ['longing release', 'belonging', 'ownership', 'home feeling'],
    transition: 'Reunion → Long Distance Adaptation',
    symbolism: 'From temporary meetings to emotional home.',
    text: "Nagpur became home. Your room became sanctuary. Reunions after weeks apart felt electric — weeks of need combusting the moment the door closed. Every knock on your door felt like returning to where I truly belonged.",
    accentColor: 'emerald',
  },
  {
    id: 9,
    icon: Zap,
    phase: 'Long Distance Adaptation',
    title: 'Miles Apart, Fire Intact',
    date: 'Ongoing',
    location: 'Nagpur ↔ Hyderabad',
    intensityLevel: 0.90,
    emotionTags: ['resilience', 'creativity', 'loyalty', 'intentional effort'],
    transition: 'Adaptation → Stability',
    symbolism: 'Distance conquered by intention.',
    text: "Video calls. Midnight confessions. Shopping online together. Sending clothes and notes across cities. We refused to let distance dilute what we built. Every package with your handwriting — every 'For my favorite person' note — a love letter in disguise.",
    accentColor: 'blue',
  },
  {
    id: 10,
    icon: Heart,
    phase: 'Deep Bonding',
    title: 'The All-Day Session',
    date: 'Mid November 2025',
    location: 'Nagpur',
    intensityLevel: 0.97,
    emotionTags: ['immersion', 'emotional fusion', 'timelessness', 'deep intimacy'],
    transition: 'Deep Bonding → Ongoing Commitment',
    symbolism: '24 hours where only we mattered.',
    text: "Morning turned into afternoon. Afternoon into night. We forgot the world existed. An entire day lost to each other, wrapped in intensity and connection. That mid-November day is sealed in memory like a snow globe — shake it, and it's always perfect.",
    accentColor: 'rose',
  },
  {
    id: 11,
    icon: Sparkles,
    phase: 'Intentional Commitment',
    title: 'Still Choosing You',
    date: 'Present',
    location: 'Wherever We Are Together',
    intensityLevel: 0.92,
    emotionTags: ['choice', 'growth', 'stability', 'future orientation'],
    transition: 'Ongoing',
    symbolism: 'Home defined by presence, not geography.',
    text: "From a fight in Lonavala to building something extraordinary across cities. We didn't just fall in love — we built trust, passion, resilience, and a story that feels written by fate itself. We didn't stumble into permanence. We built toward it.",
    accentColor: 'purple',
  },
]

const ACCENT_CLASSES = {
  rose:   { dot: 'bg-rose-500',    tag: 'bg-rose-500/10 text-rose-300/60 border-rose-500/15',   glow: 'bg-rose-500/8',   bar: 'bg-rose-500/60'   },
  indigo: { dot: 'bg-indigo-500',  tag: 'bg-indigo-500/10 text-indigo-300/60 border-indigo-500/15', glow: 'bg-indigo-500/8', bar: 'bg-indigo-500/60' },
  amber:  { dot: 'bg-amber-500',   tag: 'bg-amber-500/10 text-amber-300/60 border-amber-500/15',  glow: 'bg-amber-500/8',  bar: 'bg-amber-500/60'  },
  purple: { dot: 'bg-purple-500',  tag: 'bg-purple-500/10 text-purple-300/60 border-purple-500/15', glow: 'bg-purple-500/8', bar: 'bg-purple-500/60' },
  pink:   { dot: 'bg-pink-400',    tag: 'bg-pink-500/10 text-pink-300/60 border-pink-500/15',    glow: 'bg-pink-500/8',   bar: 'bg-pink-400/60'   },
  slate:  { dot: 'bg-slate-400',   tag: 'bg-slate-500/10 text-slate-300/60 border-slate-500/15',  glow: 'bg-slate-500/8',  bar: 'bg-slate-400/60'  },
  emerald:{ dot: 'bg-emerald-500', tag: 'bg-emerald-500/10 text-emerald-300/60 border-emerald-500/15', glow: 'bg-emerald-500/8', bar: 'bg-emerald-500/60' },
  blue:   { dot: 'bg-blue-400',    tag: 'bg-blue-500/10 text-blue-300/60 border-blue-500/15',    glow: 'bg-blue-500/8',   bar: 'bg-blue-400/60'   },
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const OurStory = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <section ref={containerRef} className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-rose-900/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[150px]" />
      </div>

      <div className="container max-w-4xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/8 rounded-full bg-white/[0.02] backdrop-blur-md mb-8"
          >
            <Calendar size={11} className="text-rose-400/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">The Chronology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif mb-5 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent"
          >
            Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/35 font-serif italic text-base max-w-xl mx-auto leading-relaxed"
          >
            "From a fight in Lonavala to finding home in each other.
            Every text, every touch, every mile traveled."
          </motion.p>

          {/* Arc pills — from ourStory.relationshipArcModel */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {['Conflict', 'Curiosity', 'Intimacy', 'Distance', 'Resilience', 'Commitment'].map((arc) => (
              <span key={arc} className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/5 bg-white/[0.02] text-white/20">
                {arc}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative pl-8 md:pl-0">

          {/* Progress spine — desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/60 via-purple-500/40 to-rose-500/60 hidden md:block"
          />

          {/* Progress spine — mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 md:hidden" />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/60 to-purple-500/40 md:hidden"
          />

          {TIMELINE.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* ── Footer Close ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32 p-10 md:p-14 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/5 to-purple-900/5" />
          <Sparkles className="mx-auto text-rose-400/50 mb-6 relative z-10" size={20} />
          <p className="font-serif text-xl md:text-2xl italic text-white/70 leading-relaxed mb-5 relative z-10 max-w-2xl mx-auto">
            "We are just getting started, Falguni.
            The best chapters are yet to be written."
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 relative z-10">
            To Be Continued...
          </p>
        </motion.div>

      </div>
    </section>
  )
}

// ─── TIMELINE ITEM ────────────────────────────────────────────────────────────
const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0
  const accent = ACCENT_CLASSES[item.accentColor] || ACCENT_CLASSES.rose
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.04 }}
      className={`relative flex items-start justify-between mb-14 md:mb-20 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Spacer */}
      <div className="hidden md:block w-5/12" />

      {/* Center Node */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#060608] border border-white/10 z-10">
        <div className={`w-2 h-2 rounded-full ${accent.dot} animate-pulse`} />
        <div className={`absolute inset-0 rounded-full ${accent.glow} blur-md`} />
      </div>

      {/* Card */}
      <div className="w-full pl-12 md:pl-0 md:w-5/12">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden"
        >
          {/* Subtle glow on hover */}
          <div className={`absolute inset-0 ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

          {/* Top Row */}
          <div className="flex items-start justify-between gap-3 mb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-all`}>
                <Icon size={14} className="text-white/40 group-hover:text-white/70 transition-colors" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25 group-hover:text-white/40 transition-colors">
                  {item.phase}
                </p>
                <p className="text-[10px] text-white/20 font-serif italic">
                  {item.location}
                </p>
              </div>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/20 shrink-0 mt-1">
              {item.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-serif text-white/80 group-hover:text-white transition-colors mb-3 relative z-10">
            {item.title}
          </h3>

          {/* Body */}
          <p className="text-white/45 leading-relaxed text-sm mb-5 relative z-10 group-hover:text-white/60 transition-colors duration-300">
            {item.text}
          </p>

          {/* Intensity Bar */}
          <div className="mb-4 relative z-10">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[8px] uppercase tracking-widest text-white/15">Intensity</span>
              <span className="text-[8px] font-bold text-white/20">{Math.round(item.intensityLevel * 100)}%</span>
            </div>
            <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.intensityLevel * 100}%` }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                className={`h-full ${accent.bar} rounded-full`}
              />
            </div>
          </div>

          {/* Emotion Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3 relative z-10">
            {item.emotionTags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider border ${accent.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Transition Arrow */}
          <p className="text-[9px] text-white/15 font-serif italic relative z-10">
            → {item.transition}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OurStory

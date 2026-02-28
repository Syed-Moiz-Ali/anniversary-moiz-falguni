import React from 'react'
import { motion } from 'framer-motion'
import {
  Heart, Star, Sparkles, Feather, Flame,
  MapPin, MessageCircle, Package, Smile,
  Zap, Home, Infinity as InfinityIcon, Clock
} from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: gratitude[] + ourStory.chapters + promises[] + reasons[]
// Categories: origin, intimate, playful, emotional, distance

const GRATITUDES = [
  // ── HERO (spans 2 cols) ───────────────────────────────────────────────────
  {
    id: 1,
    hero: true,
    category: 'origin',
    icon: MapPin,
    accentColor: 'rose',
    text: "Thank you for turning a Lonavala argument into my favorite love story. For choosing curiosity over pride when it was easier to walk away.",
    source: 'Lonavala · July 2025',
  },

  // ── ORIGIN ────────────────────────────────────────────────────────────────
  {
    id: 2,
    category: 'origin',
    icon: MessageCircle,
    accentColor: 'indigo',
    text: "Thank you for those WhatsApp confessions at 2 AM — trusting me with fantasies you'd never told anyone else.",
    source: 'Digital Confessions Era',
  },
  {
    id: 3,
    category: 'origin',
    icon: Flame,
    accentColor: 'rose',
    text: "Thank you for that washroom kiss — reckless, forbidden, irreversible. The moment that made everything else possible.",
    source: 'August 2025',
  },
  {
    id: 4,
    category: 'origin',
    icon: Clock,
    accentColor: 'amber',
    text: "Thank you for timing your coffee breaks to mine, for memorizing my schedule, for the hallway meetings that were never accidental.",
    source: 'Office Corridors Era',
  },
  {
    id: 5,
    category: 'origin',
    icon: Star,
    accentColor: 'yellow',
    text: "Thank you for the stolen corridor kisses — pressed against the wall, hearts racing, almost getting caught and not caring.",
    source: 'Risk Zone Memories',
  },

  // ── INTIMATE ──────────────────────────────────────────────────────────────
  {
    id: 6,
    category: 'intimate',
    icon: Sparkles,
    accentColor: 'pink',
    text: "Thank you for the black lace reveal that stopped my heart completely. For stepping out of that bathroom and owning every inch of yourself.",
    source: 'Last Hyderabad Hotel',
  },
  {
    id: 7,
    category: 'intimate',
    icon: Flame,
    accentColor: 'rose',
    text: "Thank you for trusting me with your body that first time — vulnerable, open, completely beautiful.",
    source: 'Hyderabad · October 2025',
  },
  {
    id: 8,
    category: 'intimate',
    icon: Heart,
    accentColor: 'rose',
    text: "Thank you for saying my name the way you do when you're on the edge — 'Moiz' — desperate, beautiful, mine.",
    source: 'Nagpur Nights',
  },
  {
    id: 9,
    category: 'intimate',
    icon: Sparkles,
    accentColor: 'purple',
    text: "Thank you for that mid-November Nagpur day — morning into afternoon into night. For forgetting the world existed alongside me.",
    source: 'November 2025',
  },
  {
    id: 10,
    category: 'intimate',
    icon: Flame,
    accentColor: 'pink',
    text: "Thank you for the way you cuddle after — all soft and clingy, completely different from moments before. I love both versions equally.",
    source: 'Nagpur Sanctuary',
  },

  // ── PLAYFUL ───────────────────────────────────────────────────────────────
  {
    id: 11,
    category: 'playful',
    icon: Smile,
    accentColor: 'yellow',
    text: "Thank you for 'Bhai saab' — that mock-serious tone right before you kiss me to shut me up. I let you win every time.",
    source: 'Reason #2',
  },
  {
    id: 12,
    category: 'playful',
    icon: Smile,
    accentColor: 'amber',
    text: "Thank you for the baby voice that melts every defense I have. For knowing exactly when to deploy it and always winning.",
    source: 'Reason #20',
  },
  {
    id: 13,
    category: 'playful',
    icon: Heart,
    accentColor: 'rose',
    text: "Thank you for climbing into my lap when you need attention — like a cat, like a queen, and I surrender every single time.",
    source: 'Reason #10',
  },
  {
    id: 14,
    category: 'playful',
    icon: Smile,
    accentColor: 'yellow',
    text: "Thank you for stealing my hoodies and declaring them 'ours'. For parading around in them like you've already won everything — because you have.",
    source: 'Reason #6',
  },
  {
    id: 15,
    category: 'playful',
    icon: Zap,
    accentColor: 'yellow',
    text: "Thank you for the random dance moves you do when you think I'm not watching. I'm always watching. It's always my favorite.",
    source: 'Reason #18',
  },

  // ── EMOTIONAL ─────────────────────────────────────────────────────────────
  {
    id: 16,
    category: 'emotional',
    icon: Home,
    accentColor: 'blue',
    text: "Thank you for being my best friend before my lover, my safe place before my passion. For making me feel seen in ways no one else ever has.",
    source: 'Promise #10',
  },
  {
    id: 17,
    category: 'emotional',
    icon: Heart,
    accentColor: 'purple',
    text: "Thank you for choosing me again and again — not because you had to, but because you wanted to. That difference means everything.",
    source: 'Reason #99',
  },
  {
    id: 18,
    category: 'emotional',
    icon: Clock,
    accentColor: 'indigo',
    text: "Thank you for a lifetime of memories compressed into six months. For making time feel both infinite and not enough.",
    source: 'July – Dec 2025',
  },
  {
    id: 19,
    category: 'emotional',
    icon: Feather,
    accentColor: 'purple',
    text: "Thank you for the forgiveness you extend when I don't deserve it, and the honesty you give when it's uncomfortable.",
    source: 'Reasons #46, #60',
  },
  {
    id: 20,
    category: 'emotional',
    icon: Star,
    accentColor: 'yellow',
    text: "Thank you for changing me — softening my edges, making me braver, teaching me what it actually means to love someone.",
    source: 'Reason #51',
  },

  // ── DISTANCE ──────────────────────────────────────────────────────────────
  {
    id: 21,
    category: 'distance',
    icon: Package,
    accentColor: 'emerald',
    text: "Thank you for Nagpur packages that feel like hugs across miles — shirts chosen with care, notes that said everything in four words.",
    source: 'Long Distance Love Language',
  },
  {
    id: 22,
    category: 'distance',
    icon: Package,
    accentColor: 'emerald',
    text: "Thank you for 'For my favorite person' — the simplest note that made every delivery feel like a love letter.",
    source: 'Reason #84',
  },
  {
    id: 23,
    category: 'distance',
    icon: Zap,
    accentColor: 'rose',
    text: "Thank you for making distance feel temporary. For every reunion that felt electric — weeks of longing given permission the moment the door closed.",
    source: 'Nagpur Reunions',
  },
  {
    id: 24,
    category: 'distance',
    icon: MessageCircle,
    accentColor: 'blue',
    text: "Thank you for fighting sleep on our video calls, for shopping together online at midnight, for refusing to let miles mean absence.",
    source: 'Connection Zone',
  },

  // ── CLOSING ───────────────────────────────────────────────────────────────
  {
    id: 25,
    hero: false,
    category: 'emotional',
    icon: InfinityIcon,
    accentColor: 'rose',
    text: "Thank you for being home, Falguni. I searched for you my whole life without knowing what I was looking for.",
    source: 'Reason #98',
  },
]

const CATEGORY_STYLE = {
  origin:   { pill: 'text-amber-300/50 bg-amber-500/8 border-amber-500/12',     icon: 'text-amber-400/50'   },
  intimate: { pill: 'text-rose-300/50 bg-rose-500/8 border-rose-500/12',        icon: 'text-rose-400/50'    },
  playful:  { pill: 'text-yellow-300/50 bg-yellow-500/8 border-yellow-500/12',  icon: 'text-yellow-400/50'  },
  emotional:{ pill: 'text-purple-300/50 bg-purple-500/8 border-purple-500/12',  icon: 'text-purple-400/50'  },
  distance: { pill: 'text-emerald-300/50 bg-emerald-500/8 border-emerald-500/12', icon: 'text-emerald-400/50'},
}

const ACCENT_ICON = {
  rose:   'text-rose-400/50',
  indigo: 'text-indigo-400/50',
  amber:  'text-amber-400/50',
  yellow: 'text-yellow-400/50',
  pink:   'text-pink-400/50',
  purple: 'text-purple-400/50',
  blue:   'text-blue-400/50',
  emerald:'text-emerald-400/50',
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const ThankYou = () => (
  <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

    {/* ── Ambient ── */}
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/7 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/7 rounded-full blur-[160px]" />
    </div>

    <div className="container max-w-6xl mx-auto px-6 relative z-10">

      {/* ── Header ── */}
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-md mb-8"
        >
          <Heart size={11} fill="currentColor" className="text-rose-400/70" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">Gratitude</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-serif mb-5 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent leading-tight"
        >
          Thank You, Falguni
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/30 font-serif italic text-base max-w-xl mx-auto mb-10"
        >
          "For every moment, every memory, every piece of my heart you hold."
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

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-32">
        {GRATITUDES.map((item, index) => (
          <GratitudeCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* ── Sign-off ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center border-t border-white/5 pt-20"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-8"
        >
          <Heart size={24} fill="currentColor" className="mx-auto text-rose-400/30" />
        </motion.div>

        <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-white/50 mb-14 max-w-lg mx-auto">
          "Every thank you is just a reminder: you're not just my girlfriend.
          You're my everything."
        </p>

        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/15">Forever Grateful</span>
          <motion.p
            initial={{ opacity: 0, rotate: -8 }}
            whileInView={{ opacity: 1, rotate: -4 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-7xl italic text-white/50"
            style={{ letterSpacing: '-0.02em' }}
          >
            Moiz
          </motion.p>
          {/* Signature underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-px bg-rose-400/20 rounded-full"
          />
          <p className="text-[9px] text-white/12 uppercase tracking-[0.3em] mt-1">
            {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · Always
          </p>
        </div>
      </motion.div>

    </div>
  </section>
)

// ─── GRATITUDE CARD ───────────────────────────────────────────────────────────
const GratitudeCard = ({ item, index }) => {
  const catStyle  = CATEGORY_STYLE[item.category] || CATEGORY_STYLE.emotional
  const iconColor = ACCENT_ICON[item.accentColor] || 'text-white/30'
  const Icon      = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '80px' }}
      transition={{ delay: Math.min(index * 0.06, 0.5), duration: 0.6 }}
      whileHover={{ y: -2 }}
      className={`relative group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden ${
        item.hero
          ? 'lg:col-span-2 bg-rose-500/[0.03] border-rose-500/8 hover:border-rose-500/15'
          : 'hover:border-white/10'
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <Icon size={item.hero ? 18 : 14} className={`${iconColor} group-hover:opacity-80 transition-opacity`} />
        <div className="flex items-center gap-2">
          <span className={`text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${catStyle.pill}`}>
            {item.category}
          </span>
          <span className="text-[8px] font-bold font-mono text-white/12">
            {String(item.id).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Text */}
      <p className={`font-serif leading-relaxed text-white/55 group-hover:text-white/75 transition-colors duration-300 ${
        item.hero ? 'text-base md:text-lg' : 'text-sm'
      }`}>
        {item.text}
      </p>

      {/* Source whisper */}
      <p className="mt-3 text-[8px] font-serif italic text-white/12">
        ✦ {item.source}
      </p>
    </motion.div>
  )
}

export default ThankYou

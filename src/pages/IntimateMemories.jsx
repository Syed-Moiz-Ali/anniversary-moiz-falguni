import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Heart, Flame, Lock, Star } from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: reasons[], intimateMemories[], insideWorld.secrets[], journey.timeline
// emotionCategoryMapping: passionate→Intimate Sensual, emotional→Emotional Vulnerability,
// playful→Playful Cute, tender→Long Distance Thoughtful Acts

const MEMORIES = [
  // ── PASSIONATE ──────────────────────────────────────────────────────────────
  { type: 'passionate', location: 'Office Washroom',       text: "The way you bit your lip before you kissed me in that office washroom — nervous and excited all at once. Planned over WhatsApp the night before. Reckless. Forbidden. Perfect." },
  { type: 'passionate', location: 'Hyderabad Hotel',       text: "Your hands tracing fire down my spine in the Hyderabad hotel, discovering every spot that made me shiver. A line crossed that made everything afterward irreversible." },
  { type: 'passionate', location: 'Hyderabad Hotel',       text: "How you pushed me onto the bed that one Hyderabad night and took what you wanted — confidence is so damn sexy on you." },
  { type: 'passionate', location: 'Nagpur',                text: "Your eyes, half-closed, lost in the rhythm we created together in that Nagpur bedroom. The world didn't exist." },
  { type: 'passionate', location: 'Office Washroom',       text: "The urgent press of your body against mine in the washroom — our first kiss, reckless and perfect. A secret space that changed everything." },
  { type: 'passionate', location: 'Everywhere',            text: "How you shiver when I kiss that spot on your neck, the one that makes you forget to breathe. My favorite discovery." },
  { type: 'passionate', location: 'Hyderabad Hotel',       text: "The sound you make when I find that perfect spot — half gasp, half moan, completely intoxicating. I could listen forever." },
  { type: 'passionate', location: 'Nagpur',                text: "The scratch marks you left on my back that intense Nagpur night. I wore them like badges of honor." },
  { type: 'passionate', location: 'Hyderabad Hotel',       text: "Your breathless 'don't stop' whispered against my ear, driving me absolutely wild. The phrase that unlocked complete mutual abandon." },
  { type: 'passionate', location: 'Hyderabad Hotel',       text: "That Hyderabad shower where we meant to get clean but ended up even more dirty." },
  { type: 'passionate', location: 'Nagpur',                text: "The morning you woke me up with kisses trailing down my chest, refusing to let me sleep in." },
  { type: 'passionate', location: 'Hyderabad Hotel',       text: "The hunger in your kiss when we'd been apart too long — weeks of need exploding the moment our lips met." },
  { type: 'passionate', location: 'Everywhere',            text: "Your fingers tangled in my hair, pulling me deeper into the kiss, controlling the pace, claiming me." },
  { type: 'passionate', location: 'Nagpur',                text: "The concentrated face you make when you're on top, focused and gorgeous — power radiating from you." },
  { type: 'passionate', location: 'Last Hyderabad Hotel',  text: "The moment I handed you the black lace lingerie gift and your eyes lit up with pure excitement and anticipation." },
  { type: 'passionate', location: 'Last Hyderabad Hotel',  text: "When you stepped out of the bathroom wearing that black lace set — time literally stopped, breath caught in my throat." },
  { type: 'passionate', location: 'Last Hyderabad Hotel',  text: "How absolutely stunning you looked in that lingerie — beauty, sexiness, confidence radiating from every inch of you." },
  { type: 'passionate', location: 'Last Hyderabad Hotel',  text: "The confidence radiating from you as you moved toward me in that lace, knowing exactly the effect you had on me." },
  { type: 'passionate', location: 'Everywhere',            text: "Your skin, warm and electric beneath my fingertips, responding to every touch like a secret language only I know." },
  { type: 'passionate', location: 'Office',                text: "That time you kissed me in the office parking lot, not caring who might see. Reckless. Beautiful." },

  // ── EMOTIONAL ───────────────────────────────────────────────────────────────
  { type: 'emotional',  location: 'Hyderabad Hotel',       text: "That night you whispered my name like a prayer, over and over, until it was the only word that mattered." },
  { type: 'emotional',  location: 'Everywhere',            text: "The way you pull me closer, wrapping your legs around me like you can't get enough — like I'm the only thing anchoring you." },
  { type: 'emotional',  location: 'Nagpur',                text: "That Nagpur morning when we forgot the world existed — just us, tangled in sheets, not wanting to move." },
  { type: 'emotional',  location: 'Everywhere',            text: "How your body remembers mine even before we touch, arching toward me in anticipation." },
  { type: 'emotional',  location: 'Everywhere',            text: "The way you say my name when you're on the edge — desperate and beautiful. Most beautiful sound I've ever heard." },
  { type: 'emotional',  location: 'Everywhere',            text: "How you look at me right after — vulnerable, satisfied, and somehow still hungry for more." },
  { type: 'emotional',  location: 'Nagpur',                text: "Your sleepy voice at 2 AM saying 'come closer' and pulling me into your warmth. My favorite moment of every visit." },
  { type: 'emotional',  location: 'Everywhere',            text: "The way you cuddle after — all soft and clingy, completely different from moments before. Both versions are my favorite." },
  { type: 'emotional',  location: 'Last Hyderabad Hotel',  text: "My heart racing seeing you in the gift I chose, looking even more breathtaking than I'd imagined." },
  { type: 'emotional',  location: 'Everywhere',            text: "How you pull the covers over us and create our own world — just you and me and nothing else." },
  { type: 'emotional',  location: 'Everywhere',            text: "The way you grab my face when you kiss me, like you're claiming me as yours. You always have been." },
  { type: 'emotional',  location: 'Everywhere',            text: "How we communicate with just looks now — one glance and I know exactly what you want, what you feel." },
  { type: 'emotional',  location: 'Hyderabad Hotel',       text: "How you look in the morning light — hair messy, lips swollen, eyes still heavy with sleep and satisfaction." },
  { type: 'emotional',  location: 'Hyderabad → Nagpur',    text: "Packages arriving at my door in Hyderabad — t-shirts and shirts you ordered from Nagpur. Distance shrinking through thoughtfulness." },
  { type: 'emotional',  location: 'Long Distance',         text: "Opening a surprise package from you and finding that shirt I'd mentioned wanting weeks ago. You remember everything." },
  { type: 'emotional',  location: 'Long Distance',         text: "How you remember my sizes, my favorite colors, what styles I like — paying attention to every detail, always." },
  { type: 'emotional',  location: 'Long Distance',         text: "Wearing your gifts and feeling connected to you even when we're cities apart. Objects turned into emotional bridges." },
  { type: 'emotional',  location: 'Long Distance',         text: "The notes you'd include: 'For my favorite person' — simple words that made my whole day, every time." },
  { type: 'emotional',  location: 'Long Distance',         text: "How even simple t-shirts became precious because they came from you, chosen by you, sent with love." },
  { type: 'emotional',  location: 'Long Distance',         text: "How shopping for each other became our love language across the distance — proof that love can rewrite geography." },

  // ── PLAYFUL ─────────────────────────────────────────────────────────────────
  { type: 'playful',    location: 'Everywhere',            text: "Your breathless laugh when we finally stopped to catch our breath after round three. My favorite sound." },
  { type: 'playful',    location: 'Everywhere',            text: "Your 'Bhai saab' tease right before you kiss me — that playful mock-serious tone I can never resist." },
  { type: 'playful',    location: 'Everywhere',            text: "How you steal my shirt after and parade around in it, claiming it's 'ours' now. You've won me, hoodie and all." },
  { type: 'playful',    location: 'Everywhere',            text: "The way you demand attention when I'm on my phone — climbing into my lap until I surrender completely." },
  { type: 'playful',    location: 'Everywhere',            text: "Your competitive side when you said 'I bet I can make you lose control first' — and you won, every time." },
  { type: 'playful',    location: 'Restaurant',            text: "Your hand finding mine under the restaurant table — that secret touch that said everything with one squeeze." },
  { type: 'playful',    location: 'Everywhere',            text: "The way you bite your lip when you're trying not to smile after I say something dirty. You always fail beautifully." },
  { type: 'playful',    location: 'Everywhere',            text: "Your challenge: 'Make me forget my own name' — and the hours we spent proving it could be done. Multiple times." },
  { type: 'playful',    location: 'Everywhere',            text: "Your satisfied smile after — the one that says 'I won', because you absolutely did. Every single time." },
  { type: 'playful',    location: 'Everywhere',            text: "Your gasp when I surprised you with that thing you'd only mentioned once in passing. I remember everything." },
  { type: 'playful',    location: 'Long Distance',         text: "Sending you photos of me wearing the clothes you sent, just to hear your voice on the call immediately after." },
  { type: 'playful',    location: 'Long Distance',         text: "Shopping online together on video call — arguing playfully about which style suits me better, laughing as we add to cart." },
  { type: 'playful',    location: 'Long Distance',         text: "The excitement in your voice asking 'Did it arrive yet?' — your impatience is the most adorable thing about you." },
  { type: 'playful',    location: 'Long Distance',         text: "That video call where you made me do a full fashion show of everything you'd sent. I complained. I loved it." },
  { type: 'playful',    location: 'Long Distance',         text: "Your laugh when the package arrived on the wrong day and I had to wait another 24 hours. You were delighted." },

  // ── TENDER ──────────────────────────────────────────────────────────────────
  { type: 'tender',     location: 'Long Distance',         text: "Your midnight texts: 'I'm thinking about you' from Nagpur making the distance collapse entirely." },
  { type: 'tender',     location: 'Nagpur',                text: "The way you fit perfectly against me when we're tangled in your Nagpur bed — like we were designed for this exact geometry." },
  { type: 'tender',     location: 'Everywhere',            text: "The taste of you still lingering hours later, making me crave more. Some memories refuse to fade." },
  { type: 'tender',     location: 'Everywhere',            text: "Your voice saying 'that color looks perfect on you' when I modeled the shirt you picked. You chose it perfectly." },
  { type: 'tender',     location: 'Long Distance',         text: "Video calls at midnight — your face on a screen being enough to get through another week apart." },
]

const FILTERS = [
  { key: 'all',        label: 'All',        icon: Star,     color: 'white'  },
  { key: 'passionate', label: 'Passionate', icon: Flame,    color: 'orange' },
  { key: 'emotional',  label: 'Emotional',  icon: Heart,    color: 'rose'   },
  { key: 'playful',    label: 'Playful',    icon: Sparkles, color: 'yellow' },
  { key: 'tender',     label: 'Tender',     icon: Heart,    color: 'pink'   },
]

const TYPE_STYLE = {
  passionate: {
    icon: Flame,
    iconClass: 'text-orange-400/80',
    tagClass: 'text-orange-300/60 bg-orange-500/8 border-orange-500/15',
    glow: 'group-hover:shadow-orange-500/10',
    activeFilter: 'bg-orange-500/80 border-orange-500/50 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]',
  },
  emotional: {
    icon: Heart,
    iconClass: 'text-rose-400/80',
    tagClass: 'text-rose-300/60 bg-rose-500/8 border-rose-500/15',
    glow: 'group-hover:shadow-rose-500/10',
    activeFilter: 'bg-rose-500/80 border-rose-500/50 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]',
  },
  playful: {
    icon: Sparkles,
    iconClass: 'text-yellow-400/80',
    tagClass: 'text-yellow-300/60 bg-yellow-500/8 border-yellow-500/15',
    glow: 'group-hover:shadow-yellow-500/10',
    activeFilter: 'bg-yellow-500/80 border-yellow-500/50 text-white shadow-[0_0_20px_rgba(234,179,8,0.3)]',
  },
  tender: {
    icon: Heart,
    iconClass: 'text-pink-400/80',
    tagClass: 'text-pink-300/60 bg-pink-500/8 border-pink-500/15',
    glow: 'group-hover:shadow-pink-500/10',
    activeFilter: 'bg-pink-500/80 border-pink-500/50 text-white shadow-[0_0_20px_rgba(236,72,153,0.3)]',
  },
  all: {
    activeFilter: 'bg-white/10 border-white/20 text-white',
  },
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const IntimateMemories = () => {
  const [filter, setFilter] = useState('all')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredMemories = useMemo(
    () => filter === 'all' ? MEMORIES : MEMORIES.filter(m => m.type === filter),
    [filter]
  )

  // Counts per type for filter badges
  const counts = useMemo(() => {
    const c = { all: MEMORIES.length }
    MEMORIES.forEach(m => { c[m.type] = (c[m.type] || 0) + 1 })
    return c
  }, [])

  return (
    <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/8 rounded-full blur-[160px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-md mb-8"
          >
            <Lock size={11} className="text-rose-400/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">The Vault</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-serif mb-5 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent"
          >
            Intimate Memories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/30 font-serif italic text-base max-w-xl mx-auto mb-12"
          >
            "Moments that live rent-free in my mind. Hover to unlock the memory."
          </motion.p>

          {/* ── Filter Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {FILTERS.map(({ key, label }) => {
              const style = TYPE_STYLE[key]
              const isActive = filter === key
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border flex items-center gap-2 ${
                    isActive
                      ? style.activeFilter
                      : 'bg-white/[0.02] text-white/30 border-white/8 hover:bg-white/[0.05] hover:text-white/50 hover:border-white/12'
                  }`}
                >
                  {label}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-white/5 text-white/20'}`}>
                    {counts[key] || 0}
                  </span>
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* ── Memory Grid ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredMemories.map((memory, index) => (
              <MemoryCard
                key={`${memory.type}-${index}-${memory.text.slice(0, 20)}`}
                memory={memory}
                index={index}
                isHovered={hoveredIndex === index}
                setHovered={setHoveredIndex}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Stats Footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-16 border-t border-white/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <StatItem value={MEMORIES.length} label="Captured Moments"   highlight={false} />
            <StatItem value="4"               label="Memory Categories"  highlight={false} />
            <StatItem value="5"               label="Cities in Our Story" highlight={false} />
            <StatItem value="∞"               label="Unwritten Memories" highlight={true}  />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── MEMORY CARD ──────────────────────────────────────────────────────────────
const MemoryCard = ({ memory, index, isHovered, setHovered }) => {
  const style = TYPE_STYLE[memory.type] || TYPE_STYLE.emotional
  const Icon = style.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.4) }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`relative group h-56 cursor-default ${style.glow} transition-shadow duration-500`}
    >
      <div className={`relative w-full h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
        isHovered
          ? 'bg-white/[0.06] border-white/12'
          : 'bg-white/[0.02] border-white/5'
      }`}>

        {/* ── Locked State ── */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}>
          <div className="w-10 h-10 rounded-full border border-white/8 bg-white/[0.02] flex items-center justify-center mb-3">
            <Lock size={14} className="text-white/20" />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/15">
            Memory {String(index + 1).padStart(3, '0')}
          </span>
          <div className="mt-3 flex gap-1.5">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-white/10"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          {/* Type hint — tiny, whisper-level */}
          <span className={`mt-4 text-[8px] uppercase tracking-widest border px-2 py-0.5 rounded-full ${style.tagClass}`}>
            {memory.type}
          </span>
        </div>

        {/* ── Revealed State ── */}
        <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}>
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className={`p-1.5 rounded-lg bg-white/[0.04] border border-white/5`}>
              <Icon size={13} className={style.iconClass} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-serif italic text-white/20">{memory.location}</span>
              <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${style.tagClass}`}>
                {memory.type}
              </span>
            </div>
          </div>

          {/* Quote */}
          <p className="font-serif text-sm md:text-base leading-relaxed text-white/75">
            "{memory.text}"
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

      </div>
    </motion.div>
  )
}

// ─── STAT ITEM ────────────────────────────────────────────────────────────────
const StatItem = ({ value, label, highlight }) => (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
    className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
      highlight
        ? 'bg-rose-500/5 border-rose-500/12 hover:border-rose-500/20'
        : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
    }`}
  >
    <div className={`text-3xl md:text-4xl font-serif mb-1.5 ${highlight ? 'text-rose-400/70' : 'text-white/75'}`}>
      {value}
    </div>
    <div className="text-[9px] font-bold uppercase tracking-widest text-white/25">{label}</div>
  </motion.div>
)

export default IntimateMemories

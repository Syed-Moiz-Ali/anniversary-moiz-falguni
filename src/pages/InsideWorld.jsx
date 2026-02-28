import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Lock, Unlock, Key } from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: insideWorld.secrets[] + reasons[] + ourStory.chapters + journey.timeline
// Categories: sensual, emotional, playful, symbolic

const SECRETS = [
  // ── SENSUAL ─────────────────────────────────────────────────────────────────
  {
    category: 'sensual',
    trigger: 'The Office Look',
    reveal: "That mouse-like glance wasn't shy — it was a promise of what would happen in the washroom later. I saw it the moment your eyes met mine.",
    linkedPlace: 'Office',
  },
  {
    category: 'sensual',
    trigger: 'The Washroom',
    reveal: "Every time I pass an office washroom now, I think of our first kiss — reckless, urgent, perfect. Planned over WhatsApp, executed with hammering hearts.",
    linkedPlace: 'Office Washroom',
  },
  {
    category: 'sensual',
    trigger: 'Corridor Kisses',
    reveal: "Pressed against the wall, hearts racing — stolen glances in office corridors. Almost getting caught was the most delicious part of it all.",
    linkedPlace: 'Office Corridors',
  },
  {
    category: 'sensual',
    trigger: 'First Hotel',
    reveal: "We didn't rush to sex. We rushed to intimacy — hours of foreplay, learning every spot that makes you shiver. Foundation of everything that came after.",
    linkedPlace: 'First Hotel',
  },
  {
    category: 'sensual',
    trigger: 'Hyderabad Hotels',
    reveal: "I've memorized those room numbers. Every one holds a memory of fantasies becoming real — sacred spaces where we surrendered completely.",
    linkedPlace: 'Hyderabad',
  },
  {
    category: 'sensual',
    trigger: '2 AM Texts',
    reveal: "Those 'I'm touching myself thinking about you' texts made me lose my entire mind. I saved every single one. My favorite kind of long-distance.",
    linkedPlace: 'Long Distance',
  },
  {
    category: 'sensual',
    trigger: 'Scratch Marks',
    reveal: "I looked at those marks on my back for days — badges of honor from that intense Nagpur night. Visible proof of passion too strong to contain.",
    linkedPlace: 'Nagpur',
  },
  {
    category: 'sensual',
    trigger: 'The Challenge',
    reveal: "'Make me forget my name.' I took that personally. We spent hours trying. We both know I succeeded. Multiple times.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'sensual',
    trigger: 'Black Lace Night',
    reveal: "When you stepped out wearing that gift — time stopped. Breath caught. You were beauty, confidence, and perfection in one moment I'll never stop replaying.",
    linkedPlace: 'Last Hyderabad Hotel',
  },
  {
    category: 'sensual',
    trigger: 'Your Name',
    reveal: "The way you whisper 'Moiz' when you're on the edge — desperate, beautiful, completely undone. The most intoxicating sound I've ever heard.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'sensual',
    trigger: 'All-Day Session',
    reveal: "Mid-November Nagpur. Morning into afternoon into night. We forgot the world existed. An entire day sealed in memory like a snow globe.",
    linkedPlace: 'Nagpur',
  },
  {
    category: 'sensual',
    trigger: 'Nagpur Reunions',
    reveal: "Weeks of longing combusting the second the door closed. We barely made it past the entrance. Distance made every reunion explosive.",
    linkedPlace: 'Nagpur',
  },

  // ── EMOTIONAL ───────────────────────────────────────────────────────────────
  {
    category: 'emotional',
    trigger: 'Lonavala Fight',
    reveal: "I'm grateful for that fight. The misunderstanding. The ego clash. Without it, none of this exists. Conflict became the ignition point of everything.",
    linkedPlace: 'Lonavala',
  },
  {
    category: 'emotional',
    trigger: 'Our Secret Code',
    reveal: "When I text 'thinking of you,' I mean I'm missing the sound of your breathing in the dark, your weight against my chest.",
    linkedPlace: 'Long Distance',
  },
  {
    category: 'emotional',
    trigger: 'The Goodbye',
    reveal: "When you left the office, I cried. Losing daily access to you felt like losing oxygen. What felt like an ending became something deeper.",
    linkedPlace: 'Office Goodbye',
  },
  {
    category: 'emotional',
    trigger: 'Fantasy Talks',
    reveal: "We trusted each other with secrets we'd never told anyone else — 2 AM vulnerability that turned curiosity into emotional architecture.",
    linkedPlace: 'Digital',
  },
  {
    category: 'emotional',
    trigger: 'Clinginess',
    reveal: "When you're half-asleep and refuse to let me go — arms pulling me back in — those are the moments I feel most wanted. Most home.",
    linkedPlace: 'Nagpur',
  },
  {
    category: 'emotional',
    trigger: 'Morning Glow',
    reveal: "Hair messy, lips swollen, eyes still heavy with satisfaction — that image of you in morning light is permanently burned into my memory.",
    linkedPlace: 'Hyderabad Hotel',
  },
  {
    category: 'emotional',
    trigger: 'Chest Spot',
    reveal: "My body knows exactly how to hold yours. My chest remembers the weight of your head. We were designed for this exact geometry.",
    linkedPlace: 'Nagpur',
  },
  {
    category: 'emotional',
    trigger: 'Lunch Evolution',
    reveal: "From awkward cafeteria small-talk to planning hotel escapades in hushed voices over food. The arc of us, compressed into lunch hours.",
    linkedPlace: 'Office',
  },
  {
    category: 'emotional',
    trigger: 'The Playlist',
    reveal: "Every song maps to a memory. One for the washroom. One for Hyderabad. One for that Nagpur morning we refused to end.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'emotional',
    trigger: 'Video Call Nights',
    reveal: "Distance couldn't kill desire. Your face on a screen was both torture and comfort. You kept the fire alive across every mile.",
    linkedPlace: 'Long Distance',
  },

  // ── PLAYFUL ─────────────────────────────────────────────────────────────────
  {
    category: 'playful',
    trigger: "'Bhai Saab'",
    reveal: "When you say it sarcastically, I know you're about to kiss me to shut me up. And I let you win every single time.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'playful',
    trigger: 'Baby Voice',
    reveal: "You know exactly what you're doing. Weaponized cuteness. It's manipulative and adorable and I'm completely, helplessly powerless against it.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'playful',
    trigger: 'Stolen Hoodie',
    reveal: "You claimed it's 'ours' now, parading around like you've won a prize. Honestly — you have. You've won me, hoodie and all.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'playful',
    trigger: 'Random Dances',
    reveal: "When you think I'm not watching — those carefree, unguarded little dances. That's my absolute favorite version of you.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'playful',
    trigger: 'Competitive Side',
    reveal: "'I bet I can make you lose control first.' You always win. I love losing to you more than I love winning anything else.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'playful',
    trigger: "'Chutiya Insaan'",
    reveal: "The way you say it with your nose scrunching up, trying to stay mad but already smiling — that insult is our warmest term of endearment.",
    linkedPlace: 'Everywhere',
  },
  {
    category: 'playful',
    trigger: 'Your Laugh',
    reveal: "You laugh at your own jokes before finishing them. Loud, unguarded, completely genuine. The most beautiful sound I know.",
    linkedPlace: 'Everywhere',
  },

  // ── SYMBOLIC ────────────────────────────────────────────────────────────────
  {
    category: 'symbolic',
    trigger: '11:11 Wish',
    reveal: "Every single time — one more night tangled in your Nagpur sheets, losing track of time, forgetting the world is still turning.",
    linkedPlace: 'Nagpur',
  },
  {
    category: 'symbolic',
    trigger: 'Your Perfume',
    reveal: "I smell it on my clothes days later. It collapses the distance instantly — suddenly you're right there, your skin against mine.",
    linkedPlace: 'Everywhere',
  },
]

const CATEGORY_STYLE = {
  sensual:  { tag: 'text-orange-300/50 bg-orange-500/8 border-orange-500/12',   glow: 'hover:border-orange-500/20 hover:shadow-orange-500/8'  },
  emotional:{ tag: 'text-rose-300/50 bg-rose-500/8 border-rose-500/12',         glow: 'hover:border-rose-500/20 hover:shadow-rose-500/8'      },
  playful:  { tag: 'text-yellow-300/50 bg-yellow-500/8 border-yellow-500/12',   glow: 'hover:border-yellow-500/20 hover:shadow-yellow-500/8'  },
  symbolic: { tag: 'text-purple-300/50 bg-purple-500/8 border-purple-500/12',   glow: 'hover:border-purple-500/20 hover:shadow-purple-500/8'  },
}

// Stable waveform heights per card — no random on re-render
const WAVEFORMS = SECRETS.map((_, i) =>
  Array.from({ length: 14 }, (_, j) => 4 + ((i * 7 + j * 13) % 16))
)

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const InsideWorld = () => {
  return (
    <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/8 rounded-full blur-[160px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-md mb-8"
          >
            <Key size={11} className="text-rose-400/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">Restricted Access</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-serif mb-5 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent"
          >
            The Vault of Whispers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/30 font-serif italic text-base max-w-xl mx-auto"
          >
            "The secrets only we share, the moments only we understand."
          </motion.p>

          {/* Category legend */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {Object.entries(CATEGORY_STYLE).map(([cat, style]) => (
              <span key={cat} className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border ${style.tag}`}>
                {cat}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Secrets Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECRETS.map((secret, index) => (
            <SecretCard key={index} secret={secret} index={index} bars={WAVEFORMS[index]} />
          ))}
        </div>

        {/* ── Footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center border-t border-white/5 pt-16"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/15 mb-5">
            Encrypted With Love
          </p>
          <p className="font-serif italic text-xl md:text-2xl text-white/40 max-w-xl mx-auto">
            "These are the memories that live in the space between words."
          </p>
        </motion.div>

      </div>
    </section>
  )
}

// ─── SECRET CARD ──────────────────────────────────────────────────────────────
const SecretCard = ({ secret, index, bars }) => {
  const [isHovered, setIsHovered] = useState(false)
  const style = CATEGORY_STYLE[secret.category] || CATEGORY_STYLE.emotional

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '40px' }}
      transition={{ delay: Math.min(index * 0.04, 0.5), duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group min-h-[200px] p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-500 overflow-hidden cursor-default flex flex-col justify-between shadow-lg ${style.glow}`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* ── Header ── */}
      <div className="relative z-10 flex justify-between items-start mb-5">
        <div>
          <h3 className="font-serif text-lg text-white/75 group-hover:text-white/90 transition-colors mb-1">
            {secret.trigger}
          </h3>
          <div className="flex items-center gap-2">
            <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${style.tag}`}>
              {secret.category}
            </span>
            <span className="text-[8px] text-white/12 font-serif italic">{secret.linkedPlace}</span>
          </div>
        </div>
        <div className="text-white/15 group-hover:text-white/50 transition-all duration-300 shrink-0 ml-2">
          {isHovered ? <Unlock size={14} /> : <Lock size={14} />}
        </div>
      </div>

      {/* ── Reveal ── */}
      <div className="relative z-10 flex-1">
        <div className={`transition-all duration-600 ${
          isHovered ? 'opacity-100 blur-0 translate-y-0' : 'opacity-30 blur-[3px] translate-y-1'
        }`}>
          <p className="font-serif italic text-white/70 leading-relaxed text-sm">
            "{secret.reveal}"
          </p>
        </div>
      </div>

      {/* ── Waveform ── */}
      <div className="relative z-10 mt-5 flex items-end gap-[3px] h-5 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            className={`w-[3px] rounded-full transition-colors duration-300 ${
              isHovered ? 'bg-rose-400' : 'bg-white/40'
            }`}
            animate={isHovered
              ? { height: [height, height + 6, height - 2, height] }
              : { height }
            }
            transition={{
              duration: 0.8,
              repeat: isHovered ? Infinity : 0,
              delay: i * 0.06,
              ease: 'easeInOut',
            }}
            style={{ height }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default InsideWorld

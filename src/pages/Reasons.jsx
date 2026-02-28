import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Shuffle, Sparkles, Flame, Smile, Star, Package, Quote } from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: reasons[] — all 99 entries
// Categories: personality, intimate, playful, emotional, distance

const REASONS = [
  // ── PERSONALITY ─────────────────────────────────────────────────────────────
  { id: 1,  category: 'personality', text: "The way you looked at me like a mouse in the office — shy, adorable, pretending not to stare but failing every time." },
  { id: 8,  category: 'personality', text: "Your strength wrapped in softness — calling me out when I'm wrong but comforting me when I need it." },
  { id: 18, category: 'personality', text: "Your random dance moves when you're happy and think I'm not watching. But I always am." },
  { id: 28, category: 'personality', text: "Your inability to whisper — your 'quiet voice' is louder than most people's normal voice and I love it." },
  { id: 29, category: 'personality', text: "How you get genuinely excited about small things — food, memes, random shower thoughts you text me at 3 PM." },
  { id: 31, category: 'personality', text: "Your boss mode when you're handling business — confident, decisive, unstoppable, incredibly attractive." },
  { id: 32, category: 'personality', text: "How you describe food cravings with such passion it sounds sensual, your eyes lighting up talking about what you want to eat." },
  { id: 34, category: 'personality', text: "Your random thoughts texted out of nowhere — conspiracy theories about pigeons, weird dreams, philosophical musings at 3 PM." },
  { id: 37, category: 'personality', text: "Your loyalty — the way you stood by me even when distance made everything hard." },
  { id: 40, category: 'personality', text: "Your late-night conversations that go from deep philosophy to absolute nonsense in seconds." },
  { id: 41, category: 'personality', text: "How you make ordinary moments sacred — lunch dates, car rides, just existing together." },
  { id: 43, category: 'personality', text: "Your ambition and drive — watching you chase your dreams with relentless focus inspires me." },
  { id: 46, category: 'personality', text: "Your forgiveness when I mess up, the grace you extend even when I don't deserve it." },
  { id: 54, category: 'personality', text: "The vulnerability in your voice when you tell me you need me, trusting me with that admission." },
  { id: 55, category: 'personality', text: "Your independence — strong enough to stand alone but choosing to stand with me." },
  { id: 58, category: 'personality', text: "Your passion for everything you do — work, hobbies, us — you give everything 100%." },
  { id: 60, category: 'personality', text: "Your honesty, even when the truth is uncomfortable — you never let me live in illusions." },
  { id: 65, category: 'personality', text: "Your kindness even when you're hurting, the way you protect the people you love fiercely." },
  { id: 66, category: 'personality', text: "How you make me feel seen, truly seen, in ways no one else ever has or ever will." },
  { id: 68, category: 'personality', text: "Your determination to make this work despite the distance, the obstacles, everything." },
  { id: 96, category: 'personality', text: "Your generosity even when money was tight, always finding ways to send me little pieces of joy." },

  // ── INTIMATE ────────────────────────────────────────────────────────────────
  { id: 4,  category: 'intimate', text: "The way you bit your lip before our first kiss in that office washroom — nervous and excited all at once." },
  { id: 12, category: 'intimate', text: "How you whispered 'don't stop' against my ear that first night in Hyderabad, driving me absolutely wild." },
  { id: 13, category: 'intimate', text: "How your body remembers mine even before we touch, arching toward me in anticipation." },
  { id: 15, category: 'intimate', text: "The concentrated face you make when you're on top — focused, gorgeous, completely in control." },
  { id: 16, category: 'intimate', text: "How you pushed me onto the bed that one Hyderabad night and took what you wanted — confidence is so damn sexy on you." },
  { id: 17, category: 'intimate', text: "The way you look at me when you want me — that half-lidded gaze that needs absolutely no words." },
  { id: 25, category: 'intimate', text: "The scratch marks you left on my back that intense Nagpur night — I wore them like badges of honor." },
  { id: 26, category: 'intimate', text: "How you shiver when I kiss that spot on your neck, the one that makes you forget to breathe." },
  { id: 27, category: 'intimate', text: "The way you say my name when you're on the edge — 'Moiz' — desperate and beautiful." },
  { id: 33, category: 'intimate', text: "How you cuddle after we make love — all soft and clingy, completely different from moments before. Both versions are my favorite." },
  { id: 36, category: 'intimate', text: "The way you pull the covers over us and create our own world where nothing else exists." },
  { id: 48, category: 'intimate', text: "The trust you showed sharing your body with me that first time — vulnerable, beautiful, completely open." },
  { id: 64, category: 'intimate', text: "How you look in the morning light — hair messy, lips still swollen, eyes satisfied." },
  { id: 69, category: 'intimate', text: "The way you arch into me when we kiss, like you're trying to get closer than physics allows." },
  { id: 70, category: 'intimate', text: "The excitement in your eyes when I handed you that black lace lingerie gift — pure joy and anticipation." },
  { id: 72, category: 'intimate', text: "Your promise to wear it for me, the way you whispered it like a secret vow between us." },
  { id: 73, category: 'intimate', text: "That moment you stepped out of the bathroom wearing the black lace — time literally stopped, breath caught in my throat." },
  { id: 74, category: 'intimate', text: "How absolutely stunning you looked in that lingerie — beauty, sexiness, confidence radiating from every inch of you." },
  { id: 75, category: 'intimate', text: "The way you moved toward me in that lace, knowing exactly the effect you were having, owning your power completely." },
  { id: 77, category: 'intimate', text: "How that black lace night became one of our most unforgettable memories, seared into my mind forever." },
  { id: 65, category: 'intimate', text: "The inside jokes about that washroom kiss, our secret smiles when we pass bathrooms now." },

  // ── PLAYFUL ─────────────────────────────────────────────────────────────────
  { id: 2,  category: 'playful', text: "Your 'Bhai saab' when you're being dramatic, delivered with that mock-serious tone that makes me laugh every single time." },
  { id: 3,  category: 'playful', text: "How you call me 'chutiya insaan' with genuine affection, your nose scrunching up as you try to stay mad but end up smiling." },
  { id: 6,  category: 'playful', text: "How you steal my hoodies and claim they're 'ours' now, parading around in them like you've won a prize." },
  { id: 10, category: 'playful', text: "How you demanded attention when I'm on my phone, climbing into my lap until I give in — and I always do." },
  { id: 11, category: 'playful', text: "Your competitive side — 'I bet I can make you lose control first' — and you always win." },
  { id: 20, category: 'playful', text: "The baby voice you use when you want something, weaponizing cuteness because you know I'm powerless against it." },
  { id: 21, category: 'playful', text: "Your flirty side — those suggestive comments dropped casually in conversation that make my pulse race." },
  { id: 22, category: 'playful', text: "The way you bite your lip when you're trying not to smile after I say something dirty." },
  { id: 30, category: 'playful', text: "The way you save memes specifically to send to me, creating our own language of inside jokes." },
  { id: 35, category: 'playful', text: "How you challenged me with 'Make me forget my own name' and we spent hours trying — successfully." },
  { id: 45, category: 'playful', text: "The way you demand to be the center of attention like a cat when I'm busy, and honestly, you deserve to be." },
  { id: 49, category: 'playful', text: "Your satisfied smile after, the one that says 'I won' — because you absolutely did." },
  { id: 76, category: 'playful', text: "Your confidence wearing my gift — the way you let me admire you without shyness, just pure desire between us." },
  { id: 93, category: 'playful', text: "The way you get possessive about the clothes you send — 'That's MY shirt I sent you, wear it more.'" },
  { id: 94, category: 'playful', text: "Your pride when I wear your gifts in public, like I'm carrying a piece of you with me everywhere." },

  // ── EMOTIONAL ───────────────────────────────────────────────────────────────
  { id: 5,  category: 'emotional', text: "Your laugh — unguarded, genuine, loud, the most beautiful sound I know, especially when you laugh at your own jokes." },
  { id: 7,  category: 'emotional', text: "The way you fit perfectly against me when we're tangled in your Nagpur bed, like we were designed for this exact geometry." },
  { id: 9,  category: 'emotional', text: "The WhatsApp confessions at 2 AM where we shared our darkest fantasies, trusting each other completely." },
  { id: 14, category: 'emotional', text: "Your sleepy voice at 3 AM saying 'come closer' and pulling me into your warmth, refusing to let go." },
  { id: 19, category: 'emotional', text: "How you fight sleep just to talk to me a little longer on our video calls, your eyes heavy but refusing to close." },
  { id: 38, category: 'emotional', text: "How you comforted me without trying when you left the office and I cried — just being there for me." },
  { id: 39, category: 'emotional', text: "The stolen corridor kisses at work, pressed against the wall, hearts racing, almost getting caught." },
  { id: 42, category: 'emotional', text: "The way you remember small things I mentioned once, storing them like precious secrets." },
  { id: 44, category: 'emotional', text: "How you look right after we make love — vulnerable, satisfied, and somehow still hungry for more." },
  { id: 47, category: 'emotional', text: "How our lunch dates evolved from awkward work talk to planning our next hotel room escapade." },
  { id: 50, category: 'emotional', text: "How you make me want to build a future, plan tomorrows, dream of forevers — something I never wanted before you." },
  { id: 51, category: 'emotional', text: "The way you've changed me — softened my edges, made me braver, taught me what it means to truly love someone." },
  { id: 53, category: 'emotional', text: "How every text from you, no matter how simple, makes my heart skip a beat without fail." },
  { id: 56, category: 'emotional', text: "How you make love feel less like a word and more like an action we perform every single day." },
  { id: 57, category: 'emotional', text: "The way you understood my tears when you left the office, holding me without judgment." },
  { id: 59, category: 'emotional', text: "How you turned a Lonavala fight into the greatest love story I've ever known." },
  { id: 61, category: 'emotional', text: "How you make every day with you feel like a gift I don't quite deserve but will cherish anyway." },
  { id: 62, category: 'emotional', text: "The way you walked back into my arms every Nagpur weekend like you'd been holding your breath until that moment." },
  { id: 63, category: 'emotional', text: "Your courage to share your fantasies with me over WhatsApp, opening up in ways you'd never done before." },
  { id: 67, category: 'emotional', text: "The adventures we create together — Hyderabad escapes, Nagpur weekends, turning mundane into magical." },
  { id: 71, category: 'emotional', text: "How you said 'I love it' with such genuine happiness when I gave you the gift — my heart melted right there." },

  // ── DISTANCE ────────────────────────────────────────────────────────────────
  { id: 52, category: 'distance', text: "Your resilience through our long-distance phase, fighting for us even when it was hard and uncertain." },
  { id: 78, category: 'distance', text: "The packages arriving at my door in Hyderabad — shirts and t-shirts you ordered from Nagpur, thinking of me." },
  { id: 79, category: 'distance', text: "Your thoughtfulness choosing clothes for me — remembering my sizes, my favorite colors, what styles I like." },
  { id: 80, category: 'distance', text: "How you'd ask 'Did it arrive yet?' with such excitement, eager for my reaction to your gift." },
  { id: 81, category: 'distance', text: "The way you'd call immediately after I sent photos wearing what you sent, your voice full of pride." },
  { id: 82, category: 'distance', text: "Your 'that color looks perfect on you' compliments that made me feel seen and cherished across the distance." },
  { id: 83, category: 'distance', text: "How shopping for each other became our love language, our way of staying connected despite the miles." },
  { id: 84, category: 'distance', text: "The notes you'd include with packages — 'For my favorite person' — simple words that meant everything." },
  { id: 85, category: 'distance', text: "Your laugh when packages got delayed and I'd complain dramatically about having to wait another day." },
  { id: 86, category: 'distance', text: "How you remembered that shirt I mentioned wanting weeks ago and surprised me with it out of nowhere." },
  { id: 87, category: 'distance', text: "The video call fashion shows you'd demand, making me model everything you sent like a personal runway." },
  { id: 88, category: 'distance', text: "Your attention to detail — noticing what I wear often, what makes me comfortable, what makes me feel good." },
  { id: 89, category: 'distance', text: "How even simple t-shirts became precious because they came from you, chosen with love, sent with care." },
  { id: 90, category: 'distance', text: "The way you get possessive about the clothes you send — proof that love shows up in every small act." },
  { id: 91, category: 'distance', text: "How shopping online together on video calls became our date night, arguing about styles, laughing through it." },
  { id: 92, category: 'distance', text: "The surprise packages — the ones I didn't expect, just because you saw something and thought of me." },
  { id: 95, category: 'distance', text: "Your pride when I wear your gifts in public, like I'm carrying a piece of you with me everywhere I go." },
  { id: 97, category: 'distance', text: "How you turned the distance into connection through these gifts, making miles feel like absolutely nothing." },

  // ── FINAL TWO ───────────────────────────────────────────────────────────────
  { id: 98, category: 'emotional', text: "Simply this: you are home, Falguni. And I've been searching for you my whole life without knowing it." },
  { id: 99, category: 'emotional', text: "Because loving you is the easiest thing I've ever done, and being loved by you is the greatest gift I've ever received." },
]

const CATEGORY_STYLE = {
  personality: { pill: 'text-blue-300/50 bg-blue-500/8 border-blue-500/12',     card: 'hover:border-blue-500/15',    icon: Star,    iconClass: 'text-blue-400/40'    },
  intimate:    { pill: 'text-rose-300/50 bg-rose-500/8 border-rose-500/12',      card: 'hover:border-rose-500/15',    icon: Flame,   iconClass: 'text-rose-400/40'    },
  playful:     { pill: 'text-yellow-300/50 bg-yellow-500/8 border-yellow-500/12', card: 'hover:border-yellow-500/15',  icon: Smile,   iconClass: 'text-yellow-400/40'  },
  emotional:   { pill: 'text-purple-300/50 bg-purple-500/8 border-purple-500/12', card: 'hover:border-purple-500/15',  icon: Heart,   iconClass: 'text-purple-400/40'  },
  distance:    { pill: 'text-emerald-300/50 bg-emerald-500/8 border-emerald-500/12', card: 'hover:border-emerald-500/15', icon: Package, iconClass: 'text-emerald-400/40' },
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Reasons = () => {
  const [filter, setFilter]         = useState('all')
  const [randomReason, setRandom]   = useState(null)

  const filtered = useMemo(
    () => filter === 'all' ? REASONS : REASONS.filter(r => r.category === filter),
    [filter]
  )

  const counts = useMemo(() => {
    const c = { all: REASONS.length }
    REASONS.forEach(r => { c[r.category] = (c[r.category] || 0) + 1 })
    return c
  }, [])

  const showRandom = () => {
    const pool = filter === 'all' ? REASONS : filtered
    setRandom(pool[Math.floor(Math.random() * pool.length)])
  }

  return (
    <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-900/8 rounded-full blur-[150px]" />
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
            <Heart size={11} fill="currentColor" className="text-rose-400/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">Infinite Reasons</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-serif mb-8 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent"
          >
            Why I Love You
          </motion.h1>

          {/* Filter + Random row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 mb-5"
          >
            {/* All filter */}
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-white/8 border-white/15 text-white/70'
                  : 'bg-white/[0.02] border-white/5 text-white/25 hover:text-white/40'
              }`}
            >
              All <span className="ml-1 opacity-60">{counts.all}</span>
            </button>

            {Object.entries(CATEGORY_STYLE).map(([cat, style]) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  filter === cat
                    ? `${style.pill} opacity-100`
                    : 'bg-white/[0.02] border-white/5 text-white/25 hover:text-white/40'
                }`}
              >
                {cat} <span className="ml-1 opacity-60">{counts[cat] || 0}</span>
              </button>
            ))}
          </motion.div>

          {/* Surprise button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={showRandom}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/8 font-bold uppercase tracking-widest text-[10px] text-white/40 hover:bg-white/[0.06] hover:border-white/15 hover:text-white/60 transition-all duration-300"
          >
            <Shuffle size={12} /> Surprise Me
          </motion.button>
        </div>

        {/* ── Masonry Grid ── */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filtered.map((reason, index) => (
              <ReasonCard key={reason.id} reason={reason} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-white/5 pt-16 text-center"
        >
          <Heart size={14} fill="currentColor" className="text-rose-400/25 mx-auto mb-5" />
          <p className="font-serif italic text-xl text-white/40 mb-3">
            "And a million more reasons I discover every day."
          </p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/15">
            {REASONS.length} Reasons Listed · ∞ To Go
          </p>
        </motion.div>

      </div>

      {/* ── Random Reason Modal ── */}
      <AnimatePresence>
        {randomReason && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRandom(null)}
            className="fixed inset-0 z-50 bg-[#060608]/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.88, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 40 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#0a0a0c] border border-white/8 p-10 md:p-12 rounded-2xl max-w-2xl w-full text-center relative overflow-hidden"
            >
              {/* Ambient glow in modal */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-900/8 to-purple-900/5 pointer-events-none" />

              {/* Category pill */}
              {randomReason.category && (
                <span className={`relative z-10 inline-block mb-6 px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border ${CATEGORY_STYLE[randomReason.category]?.pill}`}>
                  {randomReason.category}
                </span>
              )}

              {/* Number */}
              <p className="relative z-10 text-[9px] font-bold uppercase tracking-[0.3em] text-white/15 mb-4">
                Reason #{String(randomReason.id).padStart(3, '0')}
              </p>

              {/* Quote */}
              <Quote size={28} className="text-white/5 mx-auto mb-4 relative z-10" />
              <p className="relative z-10 text-xl md:text-2xl font-serif text-white/75 leading-relaxed mb-8">
                "{randomReason.text}"
              </p>

              {/* Actions */}
              <div className="relative z-10 flex items-center justify-center gap-4">
                <motion.button
                  onClick={showRandom}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/8 text-[9px] font-bold uppercase tracking-widest text-white/35 hover:text-white/60 hover:border-white/15 transition-all duration-300"
                >
                  <Sparkles size={10} /> Another
                </motion.button>
                <button
                  onClick={() => setRandom(null)}
                  className="text-[9px] uppercase tracking-widest text-white/15 hover:text-white/30 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

// ─── REASON CARD ──────────────────────────────────────────────────────────────
const ReasonCard = ({ reason, index }) => {
  const style   = CATEGORY_STYLE[reason.category] || CATEGORY_STYLE.emotional
  const Icon    = style.icon
  const isLarge = reason.id === 98 || reason.id === 99

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '80px' }}
      transition={{ delay: Math.min(index * 0.015, 0.3), duration: 0.5 }}
      whileHover={{ y: -2 }}
      className={`relative break-inside-avoid rounded-2xl p-5 border border-white/5 bg-white/[0.02] transition-all duration-300 group mb-4 ${style.card} ${
        isLarge ? 'bg-rose-500/[0.03] border-rose-500/10' : ''
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[8px] font-bold font-mono text-white/15">
          #{String(reason.id).padStart(3, '0')}
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${style.pill}`}>
            {reason.category}
          </span>
          <Icon size={10} className={`${style.iconClass} ${isLarge ? 'opacity-100' : ''}`} fill={isLarge ? 'currentColor' : 'none'} />
        </div>
      </div>

      <p className={`font-serif leading-relaxed group-hover:text-white/80 transition-colors duration-300 ${
        isLarge ? 'text-base text-white/80' : 'text-sm text-white/50'
      }`}>
        {reason.text}
      </p>
    </motion.div>
  )
}

export default Reasons

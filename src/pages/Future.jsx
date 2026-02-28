import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── DATA FROM loveMasterData.json ────────────────────────────────────────────

const futureVisions = [
  { id: 1, title: "More Cities, Same Us",        description: "From Lonavala to Hyderabad to Nagpur — our story has already crossed cities. The future holds more places, but what matters is that we enter them together." },
  { id: 2, title: "No More Hiding",              description: "What began in stolen glances and secret corners grows into something we don't have to whisper about. A love that stands in the open." },
  { id: 3, title: "A Home That Feels Like Us",   description: "A space filled with inside jokes, soft mornings, competitive banter, and late-night conversations that stretch past midnight." },
  { id: 4, title: "Growing Individually, Staying Connected", description: "We chase our ambitions separately but celebrate victories together. Independence without distance." },
  { id: 5, title: "Rituals That Stay Ours",      description: "Shopping for each other. Late video calls. Random meme exchanges. Small habits that become traditions." },
  { id: 6, title: "Intensity That Evolves",      description: "Not just passion, but depth. Not just excitement, but understanding. A love that matures without losing fire." },
  { id: 7, title: "Choosing Each Other Daily",   description: "Not because it's easy. Not because it's convenient. But because we decide — again and again — that this is worth protecting." },
  { id: 8, title: "Stability Without Losing Spark", description: "Security that doesn't feel boring. Familiarity that doesn't feel dull. Comfort that still excites." },
  { id: 9, title: "Shared Milestones",           description: "New beginnings, new challenges, new memories — each one adding chapters to what already feels like an epic story." },
  { id: 10, title: "Forever Energy",             description: "Not a dramatic word — but a quiet commitment. The kind that grows stronger over time instead of fading." },
]

const selectedPromises = [
  "I promise to choose you, even on the days when distance feels heavy and emotions feel overwhelming.",
  "I promise to build a future that feels safe, exciting, and deeply ours.",
  "I promise to keep planning adventures — Hyderabad escapes, Nagpur weekends, and more.",
  "I promise that if I had to start again — I would still choose you every time.",
]

const closingLine = "From Lonavala strangers to Hyderabad lovers to Nagpur soulmates to… everything that comes next."

// ─── HEART SVG ────────────────────────────────────────────────────────────────

const HeartIcon = ({ className = '' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      fill="currentColor"
    />
  </svg>
)

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Future = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden bg-[#060608]"
    >

      {/* ── Ambient Glows ── */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-rose-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-rose-950/10 via-transparent to-transparent pointer-events-none" />

      {/* ── Floating Hearts ── */}
      <FloatingHeart
        className="absolute top-20 left-10 opacity-10 text-rose-400"
        size={40}
        animY={[0, -20, 0]}
        rotate={[0, 5, 0]}
        duration={6}
        delay={0}
      />
      <FloatingHeart
        className="absolute bottom-32 right-10 opacity-10 text-purple-400"
        size={28}
        animY={[0, 20, 0]}
        rotate={[0, -5, 0]}
        duration={8}
        delay={1}
      />
      <FloatingHeart
        className="absolute top-1/2 right-16 opacity-5 text-rose-300"
        size={18}
        animY={[0, -12, 0]}
        rotate={[0, 8, 0]}
        duration={10}
        delay={2}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl w-full mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/3 backdrop-blur-md mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 1.2 }}
          >
            <HeartIcon className="w-3 h-3 text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              The Future We're Building
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 1.8 }}
          >
            Our Future
          </motion.h2>

          <motion.p
            className="text-white/35 font-serif italic text-base tracking-wide"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            The life I want to build with you, one beautiful day at a time
          </motion.p>
        </motion.div>

        {/* ── Vision Grid ── */}
        <motion.div
          className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1.4 }}
        >
          {futureVisions.map((vision, i) => (
            <VisionCard key={vision.id} vision={vision} index={i} isInView={isInView} />
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <Divider />

        {/* ── Letter Block ── */}
        <motion.div
          className="text-center max-w-2xl mx-auto space-y-10 mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 1.6 }}
        >
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-white/80">
            "Six months is just the beginning, Falguni. This is the opening chapter of a story I want to write for the rest of my life."
          </p>
          <p className="font-serif italic text-base md:text-lg leading-relaxed text-white/55">
            We didn't stumble into permanence — we built toward it. From a fight in Lonavala to something extraordinary across cities. Every day forward is a day I choose you. Not because I have to, but because choosing you is the easiest decision I make every morning.
          </p>
        </motion.div>

        {/* ── Promises Strip ── */}
        <motion.div
          className="mb-24 space-y-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 1.4 }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25 text-center mb-8">
            Promises I Make To You
          </p>
          {selectedPromises.map((promise, i) => (
            <PromiseLine key={i} text={promise} index={i} isInView={isInView} />
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <Divider />

        {/* ── Closing ── */}
        <motion.div
          className="text-center pt-4 space-y-6"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 1.4 }}
        >
          {/* Heartbeat */}
          <motion.div
            className="inline-block text-rose-400/70"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeartIcon className="w-6 h-6" />
          </motion.div>

          <p className="text-xl md:text-2xl font-serif tracking-wide text-white/80">
            Here's to forever, my love.
          </p>

          <p className="text-sm md:text-base font-serif italic text-white/35 max-w-lg mx-auto leading-relaxed">
            {closingLine}
          </p>

          <div className="pt-4 space-y-1">
            <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/25">
              Always choosing you,
            </p>
            <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/25">
              Moiz
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const VisionCard = ({ vision, index, isInView }) => (
  <motion.div
    className="bg-[#060608] p-8 group hover:bg-white/[0.02] transition-colors duration-500"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.65 + index * 0.06, duration: 1 }}
  >
    <div className="flex items-start gap-4">
      <span className="text-[10px] font-mono text-white/15 mt-1 shrink-0 tabular-nums">
        {String(vision.id).padStart(2, '0')}
      </span>
      <div>
        <h3 className="text-sm font-semibold text-white/70 mb-2 group-hover:text-white/90 transition-colors duration-300">
          {vision.title}
        </h3>
        <p className="text-xs leading-relaxed text-white/30 group-hover:text-white/45 transition-colors duration-300">
          {vision.description}
        </p>
      </div>
    </div>
  </motion.div>
)

const PromiseLine = ({ text, index, isInView }) => (
  <motion.div
    className="flex items-start gap-4 px-6 py-4 rounded-xl border border-white/4 bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/8 transition-all duration-400 group"
    initial={{ opacity: 0, x: -12 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: 1.05 + index * 0.08, duration: 0.9 }}
  >
    <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-400/40 shrink-0 group-hover:bg-rose-400/70 transition-colors duration-300" />
    <p className="text-sm text-white/45 leading-relaxed font-serif italic group-hover:text-white/65 transition-colors duration-300">
      {text}
    </p>
  </motion.div>
)

const Divider = () => (
  <div className="flex items-center gap-4 my-16">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/8" />
    <HeartIcon className="w-3 h-3 text-rose-400/30" />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/8" />
  </div>
)

const FloatingHeart = ({ className, size, animY, rotate, duration, delay }) => (
  <motion.div
    className={className}
    animate={{ y: animY, rotate }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <HeartIcon className={`w-[${size}px] h-[${size}px]`} style={{ width: size, height: size }} />
  </motion.div>
)

export default Future

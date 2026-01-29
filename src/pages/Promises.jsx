import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PenTool, CheckCircle, Feather } from 'lucide-react'

const Promises = () => {
  const [isSigned, setIsSigned] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // --- PROMISES DATA ---
  const promises = [
    { text: "Never let misunderstandings sit overnight. Lonavala taught me that.", icon: "🌙" },
    { text: "2 AM rants get full attention. Phone down. Ears open. Always.", icon: "👂" },
    { text: "Every 'first' celebrated—secret trips, our apartment, everything.", icon: "🥂" },
    { text: "Surprise gifts continue—black lace, t-shirts, handwritten notes.", icon: "🎁" },
    { text: "Black lace memories forever. That Hyderabad night etched in my soul.", icon: "🖤" },
    { text: "Home where your 'quiet voice' can be loud. No hiding. Just us.", icon: "🏡" },
    { text: "Choose you in every timeline, every universe, every reality.", icon: "🪐" },
    { text: "Love every version—'Bhai saab' sarcasm, baby voice, all of you.", icon: "🎭" },
    { text: "Reunions always electric. Distance makes them feel like first time.", icon: "⚡" },
    { text: "Your safe place forever. Best friend. Biggest fan. Always.", icon: "🛡️" },
    { text: "Nagpur packages continue. Our love language across the miles.", icon: "📦" },
    { text: "Lap time guaranteed. You climb in, world pauses.", icon: "🐈" }
  ]

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-4xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Feather size={14} className="text-rose-300" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">The Vow</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            My Sacred <span className="text-rose-500 italic">Promises</span>
          </h1>
          <p className="text-white/50 font-serif italic text-lg">
            "Words I mean with every fiber of my being."
          </p>
        </div>

        {/* --- STACKED CARDS LAYOUT --- */}
        <div className="space-y-6 mb-32 relative">
          {promises.map((promise, index) => (
            <PromiseCard key={index} promise={promise} index={index} />
          ))}

          {/* Vertical Line Connector */}
          <div className="absolute top-8 bottom-8 left-[27px] w-px bg-gradient-to-b from-rose-500/0 via-rose-500/50 to-rose-500/0 md:left-1/2 md:-translate-x-1/2 -z-10" />
        </div>

        {/* --- THE CONTRACT SIGNATURE --- */}
        <div className="max-w-2xl mx-auto bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-sm text-center relative overflow-hidden">
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

          <QuoteIcon className="text-white/5 absolute top-4 left-4 w-12 h-12" />

          <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-white/90 mb-8 relative z-10">
            "These aren't just words on a screen. They are my commitment to you. To us. Forever."
          </p>

          <div className="h-px w-full bg-white/10 mb-8" />

          <div className="flex flex-col items-center gap-6">
            {!isSigned ? (
              <button
                onClick={() => setIsSigned(true)}
                className="group relative px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-rose-500 hover:text-white transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PenTool size={14} /> Seal My Vow
                </span>
              </button>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="font-signature text-5xl md:text-6xl text-rose-500 rotate-[-5deg]">
                  Moiz
                </div>
                <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest">
                  <CheckCircle size={14} /> Signed & Sealed
                </div>
                <p className="text-xs text-white/30 uppercase tracking-widest mt-2">
                  {new Date().toLocaleDateString()} • Forever
                </p>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

// --- SUB-COMPONENT: PROMISE CARD ---
const PromiseCard = ({ promise, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`flex items-center gap-6 md:gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Icon Circle */}
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center text-2xl relative z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
        {promise.icon}
      </div>

      {/* Card Body */}
      <div className={`flex-1 p-6 md:p-8 bg-white/5 border border-white/10 rounded-sm hover:border-rose-500/30 hover:bg-white/10 transition-all duration-500 group`}>
        <div className="flex items-start justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-rose-500 transition-colors">
            Promise No. {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <p className="font-serif text-lg leading-relaxed text-white/90 group-hover:text-white transition-colors">
          {promise.text}
        </p>
      </div>
    </motion.div>
  )
}

// Simple Quote Icon SVG
const QuoteIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
  </svg>
)

export default Promises

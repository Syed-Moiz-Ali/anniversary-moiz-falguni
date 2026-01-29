import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Calendar, ArrowDown } from 'lucide-react'

const FutureTimeline = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const milestones = [
    {
      title: "Next Nagpur Weekend",
      subtitle: "February 2026",
      description: "Hotel room, your sheets, morning coffee, and all day tangled together—no parents, just us.",
      icon: "🛏️"
    },
    {
      title: "Our First Secret Trip",
      subtitle: "Summer 2026",
      description: "Beach getaway or mountain hideout—just you and me, our little world.",
      icon: "✈️"
    },
    {
      title: "First Apartment Together",
      subtitle: "2027",
      description: "Our secret space—kitchen disasters, late nights, no one to answer to.",
      icon: "🏠"
    },
    {
      title: "More Adventures",
      subtitle: "Every weekend we can steal",
      description: "Road trips, hotel stays, stolen moments—building our life one secret at a time.",
      icon: "🚗"
    },
    {
      title: "Forever Us",
      subtitle: "As long as we want",
      description: "Girlfriend/boyfriend adventures, no labels needed—just you and me against the world.",
      icon: "💕"
    }
  ]

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute left-1/2 top-0 w-[800px] h-[800px] bg-rose-900/10 rounded-full blur-[120px] -translate-x-1/2" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <MapPin size={14} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">The Journey Ahead</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Our Secret Roadmap
          </h1>
          <p className="text-white/50 font-serif italic text-lg max-w-2xl mx-auto">
            "We are not just letting life happen. We are building a world that belongs only to us."
          </p>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative">

          {/* THE GLOWING LINE (Background Track) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {/* THE FILL LINE (Animated on Scroll) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-px bg-gradient-to-b from-rose-500 via-purple-500 to-blue-500 md:-translate-x-1/2 origin-top z-10 shadow-[0_0_15px_rgba(244,63,94,0.8)]"
          />

          <div className="space-y-24 md:space-y-32 pb-32">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} data={milestone} index={index} />
            ))}
          </div>

          {/* --- FUTURE FADE OUT --- */}
          <div className="text-center mt-20 opacity-50">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-px h-24 bg-gradient-to-b from-blue-500 to-transparent" />
              <span className="text-xs uppercase tracking-[0.5em] text-white/40">To Be Continued...</span>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

// --- SUB-COMPONENT: TIMELINE ITEM ---
const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex items-center md:justify-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

      {/* 1. CENTER NODE (The Pulsing Star) */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 z-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-3 h-3 bg-black border-2 border-rose-500 rounded-full relative z-20"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 2, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-rose-500 rounded-full blur-sm"
        />
      </div>

      {/* 2. SPACER FOR MOBILE LAYOUT */}
      <div className="w-16 md:hidden flex-shrink-0" />

      {/* 3. CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className={`relative group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/30 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm
          ${isEven ? 'md:mr-12' : 'md:ml-12'}
        `}>
          {/* Decorative Arrow Pointing to Center */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white/5 border-t border-r border-white/10 rotate-45 transition-colors duration-500 group-hover:border-rose-500/30 group-hover:bg-white/10
            ${isEven ? '-right-2.5 border-l-0 border-b-0' : '-left-2.5 border-t-0 border-r-0 rotate-[225deg]'}
          `} />

          <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <span className="text-3xl">{data.icon}</span>
            <div>
              <div className={`flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-widest mb-1 ${isEven ? 'md:justify-end' : ''}`}>
                <Calendar size={12} />
                {data.subtitle}
              </div>
              <h3 className="text-2xl font-serif text-white">{data.title}</h3>
            </div>
          </div>

          <p className="text-white/60 font-serif leading-relaxed group-hover:text-white/80 transition-colors">
            {data.description}
          </p>

        </div>
      </motion.div>
    </div>
  )
}

export default FutureTimeline

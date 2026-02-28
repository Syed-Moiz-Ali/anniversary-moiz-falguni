import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Sparkles, Heart, Quote, Star, Zap, Moon, Coffee, Crown, Flame, Eye, Shield, Target } from 'lucide-react'
import loveMasterData from '../assets/loveMasterData.json'

const AboutFalguni = () => {
  const containerRef = useRef(null)
  const [activeQuirk, setActiveQuirk] = useState(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.6])

  const { aboutFalguni, ourStory, reasons, compatibility, promises } = loveMasterData

  // --- DATA SOURCED FROM loveMasterData.json ---
  const cards = [
    {
      title: "Her Essence",
      text: aboutFalguni.profile.identitySummary,
      num: "01"
    },
    {
      title: "Her Fire",
      text: `${aboutFalguni.profile.coreTraits[0].description} ${aboutFalguni.profile.coreTraits[2].description}`,
      num: "02"
    },
    {
      title: "Her Impact",
      text: aboutFalguni.profile.impact.onHim.identityShift + " " + reasons.reasons.find(r => r.id === 98)?.text,
      num: "03"
    }
  ]

  const traitIcons = [<Flame size={20}/>, <Sparkles size={20}/>, <Heart size={20}/>, <Target size={20}/>, <Eye size={20}/>, <Shield size={20}/>]
  const coreTraits = aboutFalguni.profile.coreTraits.map((t, i) => ({
    icon: traitIcons[i],
    title: t.trait,
    desc: t.description,
    intensity: t.intensity
  }))

  const quirkIcons = [<Quote size={22}/>, <Zap size={22}/>, <Sparkles size={22}/>, <Heart size={22}/>, <Star size={22}/>, <Moon size={22}/>, <Coffee size={22}/>, <Crown size={22}/>]
  const quirks = [
    { icon: quirkIcons[0], title: "Bhai Saab", desc: reasons.reasons.find(r => r.id === 2)?.text },
    { icon: quirkIcons[1], title: "Chutiya Insaan", desc: reasons.reasons.find(r => r.id === 3)?.text },
    { icon: quirkIcons[2], title: "That Laugh", desc: reasons.reasons.find(r => r.id === 5)?.text },
    { icon: quirkIcons[3], title: "Hoodie Thief", desc: reasons.reasons.find(r => r.id === 6)?.text },
    { icon: quirkIcons[4], title: "Baby Voice", desc: aboutFalguni.profile.quirks.find(q => q.text.includes('baby voice'))?.text },
    { icon: quirkIcons[5], title: "Late Nights", desc: aboutFalguni.profile.loveLanguage.secondary[1] + " — the kind that drift from philosophy to absolute nonsense." },
    { icon: quirkIcons[6], title: "Foodie Energy", desc: "Describing cravings with such passion it sounds like poetry." },
    { icon: quirkIcons[7], title: "Boss Mode", desc: aboutFalguni.profile.coreTraits.find(t => t.trait === 'Ambitious')?.description }
  ]

  const littleThings = [
    reasons.reasons.find(r => r.id === 5)?.text,
    reasons.reasons.find(r => r.id === 6)?.text,
    aboutFalguni.profile.quirks.find(q => q.category === 'expressive')?.text,
    "The makeup concentration face — focused and impossibly gorgeous.",
    aboutFalguni.profile.quirks.find(q => q.category === 'attachment behavior')?.text,
    aboutFalguni.profile.quirks.find(q => q.text.includes('quiet voice'))?.text,
    "Gets genuinely excited about the smallest things — makes everything feel special.",
    aboutFalguni.profile.quirks.find(q => q.category === 'digital affection')?.text
  ].filter(Boolean)

  const storyChapters = ourStory.chapters.slice(0, 5).map(c => ({
    title: c.chapterTitle,
    phase: c.phase,
    summary: c.summary,
    location: c.location,
    intensity: c.intensityLevel
  }))

  const compatibilityPillars = compatibility.dimensions.slice(0, 4)

  const finalQuote = loveMasterData.loveLetter.letterBlocks.find(b => b.id === 11)?.text

  return (
    <section ref={containerRef} className="min-h-screen bg-[#060608] text-white relative overflow-hidden">

      {/* Ambient Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-rose-950/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-violet-950/20 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-rose-900/10 rounded-full blur-[100px]" />
      </motion.div>

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/>%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/>%3C/svg%3E")' }}
      />

      <div className="container max-w-5xl mx-auto px-6 py-28 md:py-36 relative z-10">

        {/* ── HERO ── */}
        <motion.div style={{ opacity }} className="text-center mb-36">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 border border-rose-500/20 px-6 py-2 rounded-full mb-10 backdrop-blur-sm bg-rose-950/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-sm font-light tracking-[0.25em] text-rose-300/80 uppercase">
              {aboutFalguni.profile.role}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-7xl md:text-[9rem] font-serif font-bold mb-6 tracking-tight leading-none"
          >
            <span className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent">
              Falguni
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400/60 to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/40 font-serif italic max-w-xl mx-auto leading-relaxed"
          >
            "{loveMasterData.loveLetter.letterBlocks.find(b => b.id === 2)?.text?.slice(0, 90)}..."
          </motion.p>
        </motion.div>

        {/* ── ESSENCE CARDS ── */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-40">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative bg-[#060608] p-8 md:p-10 hover:bg-rose-950/10 transition-colors duration-500"
            >
              <span className="block text-xs tracking-[0.3em] uppercase text-rose-500/40 mb-5 font-mono">
                {card.num}
              </span>
              <h3 className="text-xl font-serif text-white/90 mb-4 group-hover:text-rose-200 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-white/40 leading-loose font-serif group-hover:text-white/60 transition-colors duration-300">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── CORE TRAITS ── */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <h2 className="text-xs tracking-[0.35em] uppercase text-white/25 font-mono whitespace-nowrap">
              What She's Made Of
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coreTraits.map((trait, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-6 rounded-xl border border-white/5 hover:border-rose-500/20 bg-white/[0.02] hover:bg-rose-950/10 transition-all duration-400"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-rose-400/40 group-hover:text-rose-400/80 transition-colors duration-300">
                    {trait.icon}
                  </div>
                  <span className="text-xs font-mono text-white/15 group-hover:text-rose-400/30 transition-colors">
                    {Math.round(trait.intensity * 100)}%
                  </span>
                </div>
                <h4 className="text-sm font-semibold tracking-wide text-white/70 group-hover:text-white/90 transition-colors mb-2">
                  {trait.title}
                </h4>
                <p className="text-xs text-white/30 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                  {trait.desc}
                </p>
                {/* Intensity bar */}
                <div className="mt-4 h-px bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${trait.intensity * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-rose-600/60 to-rose-400/40 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── QUIRKS GRID ── */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <h2 className="text-xs tracking-[0.35em] uppercase text-white/25 font-mono whitespace-nowrap">
              What Makes Her HER
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quirks.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onHoverStart={() => setActiveQuirk(i)}
                onHoverEnd={() => setActiveQuirk(null)}
                className="group relative aspect-square rounded-2xl border border-white/5 hover:border-rose-500/25 bg-white/[0.02] hover:bg-rose-950/15 transition-all duration-300 cursor-default overflow-hidden p-6 flex flex-col justify-between"
              >
                <div className="text-rose-400/30 group-hover:text-rose-400/90 transition-all duration-300 group-hover:scale-110 transform">
                  {q.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white/60 group-hover:text-white/90 transition-colors mb-1">
                    {q.title}
                  </h4>
                </div>
                {/* Hover desc */}
                <AnimatePresence>
                  {activeQuirk === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-[#0e0608]/95 backdrop-blur-sm p-5 flex items-center justify-center rounded-2xl"
                    >
                      <p className="text-xs text-white/70 text-center leading-relaxed font-serif italic">
                        {q.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── OUR STORY TIMELINE ── */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <h2 className="text-xs tracking-[0.35em] uppercase text-white/25 font-mono whitespace-nowrap">
              How We Became
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/40 via-rose-500/10 to-transparent" />
            <div className="space-y-8 pl-12 md:pl-16">
              {storyChapters.map((chapter, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="absolute -left-[2.85rem] md:-left-[3.35rem] top-1 w-2.5 h-2.5 rounded-full border border-rose-500/40 bg-[#060608] group-hover:bg-rose-500/40 group-hover:border-rose-400 transition-all duration-300" />
                  <div className="p-5 md:p-6 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono tracking-widest text-rose-500/50 uppercase">
                        {chapter.phase}
                      </span>
                      <span className="text-white/10">·</span>
                      <span className="text-xs text-white/25 font-mono">{chapter.location}</span>
                    </div>
                    <h3 className="font-serif text-lg text-white/80 group-hover:text-white transition-colors mb-2">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors">
                      {chapter.summary}
                    </p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="group relative"
              >
                <div className="absolute -left-[2.85rem] md:-left-[3.35rem] top-1 w-2.5 h-2.5 rounded-full bg-rose-500/60 border border-rose-400/60 animate-pulse" />
                <div className="p-5 md:p-6 rounded-xl border border-rose-500/15 bg-rose-950/10">
                  <span className="text-xs font-mono tracking-widest text-rose-400/60 uppercase">Still Writing</span>
                  <h3 className="font-serif text-lg text-rose-200/70 mt-2">
                    {ourStory.chapters[9]?.chapterTitle}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed mt-2">
                    {ourStory.chapters[9]?.summary}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── LITTLE THINGS ── */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-36">
          <div className="sticky top-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono tracking-[0.3em] text-rose-500/40 uppercase mb-4 block">
                Tiny Universe
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-white/90">
                The <span className="text-rose-400 italic">Little Things</span><br />I Adore
              </h2>
              <p className="text-white/35 leading-relaxed font-serif italic text-sm">
                "It's not the grand gestures. It's the unconscious habits — the ones you don't even notice — that make me fall again, every single day."
              </p>
            </motion.div>
          </div>
          <div className="space-y-2">
            {littleThings.map((thing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-rose-500/15 hover:bg-rose-950/10 transition-all duration-300"
              >
                <Heart
                  size={14}
                  className="text-rose-500/40 group-hover:text-rose-400 transition-colors mt-1 flex-shrink-0"
                  fill="currentColor"
                />
                <span className="text-sm font-serif text-white/40 group-hover:text-white/70 transition-colors leading-relaxed">
                  {thing}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── WHY WE WORK ── */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <h2 className="text-xs tracking-[0.35em] uppercase text-white/25 font-mono whitespace-nowrap">
              Why We Work
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {compatibilityPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/5 hover:border-rose-500/20 bg-white/[0.02] hover:bg-rose-950/10 transition-all duration-400 group"
              >
                <span className="text-xs font-mono text-rose-500/40 tracking-widest uppercase">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-base font-semibold text-white/70 group-hover:text-white/90 transition-colors mt-2 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-white/30 leading-relaxed group-hover:text-white/50 transition-colors font-serif">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── PROMISES (select few) ── */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <h2 className="text-xs tracking-[0.35em] uppercase text-white/25 font-mono whitespace-nowrap">
              My Promises
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-3">
            {promises.items.slice(0, 6).map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.04] hover:border-rose-500/15 hover:bg-white/[0.02] transition-all duration-300"
              >
                <span className="text-rose-500/30 group-hover:text-rose-400/60 transition-colors mt-1 flex-shrink-0 font-mono text-xs">
                  {String(p.id).padStart(2, '0')}
                </span>
                <p className="text-sm text-white/35 font-serif italic group-hover:text-white/60 transition-colors leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── FINAL LETTER QUOTE ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto py-24 border-t border-white/[0.06]"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          >
            <Heart size={28} className="mx-auto text-rose-500/50 mb-10" fill="currentColor" />
          </motion.div>
          <p className="text-2xl md:text-3xl font-serif text-white/75 leading-relaxed mb-10">
            "{finalQuote}"
          </p>
          <div className="flex justify-center items-center gap-4 text-xs tracking-[0.3em] uppercase text-white/20 font-mono">
            <span className="w-8 h-px bg-white/15" />
            <span>Forever Yours, Moiz</span>
            <span className="w-8 h-px bg-white/15" />
          </div>
          <p className="mt-6 text-xs font-serif italic text-white/20">
            {loveMasterData.loveLetter.postscript.text}
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutFalguni

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Heart, Zap, Brain, MessageCircle, Shield, Droplets, Flame, Cloud, Sparkles, Target, Eye } from 'lucide-react'
import loveMasterData from '../assets/loveMasterData.json'

// ─── Sub-Components ───────────────────────────────────────────────

const CompatibilityBar = ({ label, score, icon, gradient, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
        <span className="text-white/30 group-hover:text-white/60 transition-colors">{icon}</span>
        {label}
      </div>
      <span className="font-mono text-sm text-white/40 group-hover:text-white/80 transition-colors">{score}%</span>
    </div>
    <div className="h-px bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${score}%` }}
        transition={{ duration: 1.4, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`h-full ${gradient}`}
      />
    </div>
  </motion.div>
)

const AnalysisCard = ({ title, items, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`p-7 rounded-xl border ${accent} bg-white/[0.02] backdrop-blur-sm`}
  >
    <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 }}
          className="flex items-start gap-3 text-sm text-white/55 font-serif leading-relaxed"
        >
          <span className="mt-2 w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const ElementOrb = ({ icon, label, sub, ringColor, glowColor }) => (
  <div className="flex flex-col items-center gap-4">
    <div className={`relative w-20 h-20 rounded-full flex items-center justify-center border ${ringColor}`}>
      <div className={`absolute inset-0 rounded-full blur-xl opacity-20 ${glowColor}`} />
      <div className="text-white/70 relative z-10">{icon}</div>
    </div>
    <div className="text-center">
      <div className="text-sm font-serif text-white/80">{label}</div>
      <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 mt-0.5">{sub}</div>
    </div>
  </div>
)

const ScrollCard = ({ title, icon, quotes }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative p-8 rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    <div className="text-center mb-8">
      <span className="text-3xl block mb-3">{icon}</span>
      <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">{title}</h3>
    </div>
    <div className="space-y-8">
      {quotes.map((q, i) => (
        <div key={i} className="text-center">
          <p className="text-base md:text-lg font-serif text-white/80 mb-2 leading-relaxed">
            {q.arabic || q.sanskrit}
          </p>
          <p className="text-xs text-white/40 font-serif italic mb-2">"{q.english}"</p>
          <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">— {q.reference}</span>
        </div>
      ))}
    </div>
  </motion.div>
)

// ─── Main Component ───────────────────────────────────────────────

const Compatibility = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const { compatibility, promises, future } = loveMasterData

  // Score data from JSON emotion heatmap + compatibility dimensions
  const { globalEmotionHeatmap } = loveMasterData.meta.masterIndexing

  const compatibilityScores = {
    emotional: Math.round(globalEmotionHeatmap.vulnerability * 100) + 2,   // 94
    physical: Math.round(globalEmotionHeatmap.passion * 100) + 4,          // 98
    intellectual: Math.round(globalEmotionHeatmap.playfulness * 100) + 6,  // 94
    communication: Math.round(globalEmotionHeatmap.resilience * 100) + 2,  // 93
    trust: Math.round(globalEmotionHeatmap.devotion * 100) + 4,            // 100 → 99
    spiritual: 96
  }
  const overallScore = 97

  const analysisData = {
    strengths: [
      compatibility.dimensions[0].description.split('.')[0] + '.',
      compatibility.dimensions[2].description.split('.')[0] + '.',
      compatibility.dimensions[6].description.split('.')[0] + '.',
      compatibility.dimensions[4].description.split('.')[0] + '.',
      compatibility.dimensions[8].description.split('.')[0] + '.',
      compatibility.dimensions[9].description.split('.')[0] + '.',
    ],
    challenges: [
      "Long-distance (Hyderabad ↔ Nagpur)",
      "Syncing unpredictable work schedules",
      "Navigating family and religious differences",
      "Emotional intensity can feel overwhelming",
    ],
    solutions: [
      promises.items[5].text,
      promises.items[16].text,
      promises.items[1].text,
      promises.items[14].text,
    ]
  }

  const islamicQuotes = [
    {
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا",
      english: "And among His signs is that He created for you mates from among yourselves...",
      reference: "Quran 30:21"
    },
    {
      arabic: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ",
      english: "They are clothing for you and you are clothing for them.",
      reference: "Quran 2:187"
    }
  ]

  const hinduQuotes = [
    {
      sanskrit: "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवता:",
      english: "Where women are honored, there the divine rejoices.",
      reference: "Manusmriti 3:56"
    },
    {
      sanskrit: "अर्धनारीश्वर",
      english: "Half woman, half divine — the sacred union where two souls become one.",
      reference: "Shiva Purana"
    }
  ]

  const bars = [
    { label: "Emotional Depth",      score: compatibilityScores.emotional,     icon: <Heart size={14}/>,        gradient: "bg-gradient-to-r from-rose-600/80 to-rose-400/60",    delay: 0.05 },
    { label: "Physical Chemistry",   score: compatibilityScores.physical,      icon: <Zap size={14}/>,          gradient: "bg-gradient-to-r from-orange-600/80 to-amber-400/60",  delay: 0.15 },
    { label: "Intellectual Sync",    score: compatibilityScores.intellectual,  icon: <Brain size={14}/>,        gradient: "bg-gradient-to-r from-blue-600/80 to-sky-400/60",      delay: 0.25 },
    { label: "Communication",        score: compatibilityScores.communication, icon: <MessageCircle size={14}/>, gradient: "bg-gradient-to-r from-emerald-600/80 to-green-400/60", delay: 0.35 },
    { label: "Unwavering Trust",     score: compatibilityScores.trust,         icon: <Shield size={14}/>,       gradient: "bg-gradient-to-r from-violet-600/80 to-purple-400/60",  delay: 0.45 },
  ]

  const futurePillars = future.vision.slice(0, 6)

  return (
    <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-rose-950/20 rounded-full blur-[130px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-950/10 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">The Alignment</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-200/80 via-white to-rose-200/80 bg-clip-text text-transparent">
              Cosmic Compatibility
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-mono text-white/25 tracking-widest uppercase"
          >
            Moiz ✦ Falguni · {loveMasterData.meta.aiInsights.temporalSpan}
          </motion.p>
        </div>

        {/* ── TABS ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {['overview', 'analysis', 'spiritual', 'future'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-[0.25em] transition-all duration-300 border ${
                activeTab === tab
                  ? 'bg-white/10 text-white border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                  : 'bg-transparent text-white/30 border-white/5 hover:border-white/15 hover:text-white/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* ── CONTENT ── */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">

            {/* 1. OVERVIEW */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-16 items-center"
              >
                {/* Score Ring */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative">
                    <svg className="w-56 h-56 transform -rotate-90" viewBox="0 0 224 224">
                      <circle cx="112" cy="112" r="104" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none" />
                      <circle cx="112" cy="112" r="84" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
                      <motion.circle
                        cx="112" cy="112" r="104"
                        stroke="url(#ringGrad)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 104}
                        initial={{ strokeDashoffset: 2 * Math.PI * 104 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 104 * (1 - overallScore / 100) }}
                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <defs>
                        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-5xl font-serif font-bold text-white/90"
                      >
                        {overallScore}%
                      </motion.span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/25 mt-1">Match Rate</span>
                    </div>
                  </div>
                  <p className="mt-8 text-sm text-white/40 font-serif italic leading-relaxed text-center md:text-left max-w-sm">
                    "{compatibility.dimensions[9].description}"
                  </p>
                </div>

                {/* Bars */}
                <div className="space-y-7">
                  {bars.map((b, i) => (
                    <CompatibilityBar key={i} {...b} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* 2. ANALYSIS */}
            {activeTab === 'analysis' && (
              <motion.div
                key="analysis"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Compatibility dimensions from JSON */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {compatibility.dimensions.slice(0, 6).map((dim, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="group p-5 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <span className="text-[10px] font-mono text-white/20 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                      <h4 className="text-sm font-semibold text-white/70 group-hover:text-white/90 transition-colors mt-1.5 mb-2">{dim.title}</h4>
                      <p className="text-xs text-white/35 leading-relaxed font-serif group-hover:text-white/55 transition-colors">{dim.description}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <AnalysisCard title="What We Have" items={analysisData.strengths} accent="border-white/5" />
                  <AnalysisCard title="What Tests Us" items={analysisData.challenges} accent="border-rose-500/10" />
                  <AnalysisCard title="How We Adapt" items={analysisData.solutions} accent="border-indigo-500/10" />
                </div>
              </motion.div>
            )}

            {/* 3. SPIRITUAL */}
            {activeTab === 'spiritual' && (
              <motion.div
                key="spiritual"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-16"
              >
                {/* Elemental Alchemy */}
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/20 text-center mb-10">
                    Elemental Alchemy
                  </p>
                  <div className="flex justify-center items-center gap-6 md:gap-12">
                    <ElementOrb
                      icon={<Droplets size={28}/>}
                      label="Water"
                      sub="Moiz"
                      ringColor="border-blue-500/20"
                      glowColor="bg-blue-500"
                    />
                    <span className="text-white/15 font-serif text-2xl">+</span>
                    <ElementOrb
                      icon={<Flame size={28}/>}
                      label="Fire"
                      sub="Falguni"
                      ringColor="border-orange-500/20"
                      glowColor="bg-orange-500"
                    />
                    <span className="text-white/15 font-serif text-2xl">=</span>
                    <ElementOrb
                      icon={<Sparkles size={28}/>}
                      label="Storm"
                      sub="Together"
                      ringColor="border-violet-500/20"
                      glowColor="bg-violet-500"
                    />
                  </div>
                  <p className="mt-10 text-sm font-serif text-white/35 text-center max-w-lg mx-auto leading-relaxed italic">
                    "Water tempers Fire; Fire warms Water. Together, you create energy that transforms everything around you."
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                {/* Dominant themes from JSON */}
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/20 text-center mb-8">
                    The Themes That Define Us
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {loveMasterData.meta.aiInsights.dominantThemes.map((t, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                        className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs font-serif text-white/45 italic"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                {/* Scripture */}
                <div className="grid md:grid-cols-2 gap-6">
                  <ScrollCard title="The Quran" icon="☪️" quotes={islamicQuotes} />
                  <ScrollCard title="The Vedas" icon="🕉️" quotes={hinduQuotes} />
                </div>
              </motion.div>
            )}

            {/* 4. FUTURE */}
            {activeTab === 'future' && (
              <motion.div
                key="future"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/20 text-center mb-12">
                  The Future We're Building
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {futurePillars.map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="group p-6 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.035] transition-all duration-300"
                    >
                      <span className="text-[10px] font-mono text-white/15 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="text-sm font-semibold text-white/70 group-hover:text-white/90 transition-colors mt-2 mb-2">{v.title}</h3>
                      <p className="text-xs text-white/35 leading-relaxed font-serif group-hover:text-white/55 transition-colors">{v.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Promises strip */}
                <div className="border border-white/[0.04] rounded-xl p-6 bg-white/[0.01]">
                  <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/20 mb-6">My Promises</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {promises.items.slice(0, 6).map((p, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.08 }}
                        className="group flex items-start gap-3 py-2"
                      >
                        <span className="text-rose-500/20 group-hover:text-rose-400/50 transition-colors font-mono text-[10px] mt-0.5 flex-shrink-0">
                          {String(p.id).padStart(2, '0')}
                        </span>
                        <p className="text-xs text-white/35 font-serif italic group-hover:text-white/60 transition-colors leading-relaxed">
                          {p.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Closing line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center mt-12 pt-12 border-t border-white/[0.04]"
                >
                  <Heart size={20} className="mx-auto text-rose-500/30 mb-4" fill="currentColor" />
                  <p className="text-lg md:text-xl font-serif text-white/55 italic max-w-xl mx-auto leading-relaxed">
                    "{promises.items[19].text}"
                  </p>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default Compatibility

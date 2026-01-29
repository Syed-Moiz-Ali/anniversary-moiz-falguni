import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Heart, Zap, Brain, MessageCircle, Shield, Droplets, Flame, Cloud } from 'lucide-react'

const Compatibility = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // --- DATA (Preserved from your code) ---
  const compatibilityScores = {
    emotional: 95,
    physical: 98,
    intellectual: 94,
    spiritual: 96,
    communication: 93,
    trust: 99
  }

  const overallScore = 97

  const analysisData = {
    strengths: [
      "Exceptional emotional vulnerability",
      "Shared dark fantasies & intimacy",
      "Natural physical chemistry",
      "No judgment in communication",
      "Mutual respect for independence",
      "Playful banter meets deep talk",
      "Unbreakable trust foundation",
      "Gift-giving bridging distance"
    ],
    challenges: [
      "Long-distance (Hyderabad ↔ Nagpur)",
      "Syncing work schedules",
      "Navigating family/religion",
      "Intensity can be overwhelming"
    ],
    solutions: [
      "Daily video call rituals",
      "Weekend visits for physical touch",
      "Online shopping as love language",
      "Honest future planning"
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
      english: "Half woman, half divine—the sacred union where two souls become one.",
      reference: "Shiva Purana"
    }
  ]

  return (
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* Background Galaxy */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-900/10 to-black" />
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Star size={14} className="text-yellow-400" fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">The Alignment</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-blue-200 via-white to-rose-200 bg-clip-text text-transparent">
            Cosmic Compatibility
          </h1>
        </div>

        {/* --- TABS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['overview', 'analysis', 'spiritual'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">

            {/* 1. OVERVIEW TAB (The Radar) */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Left: The Score */}
                <div className="text-center md:text-left">
                  <div className="relative inline-block">
                    <svg className="w-64 h-64 transform -rotate-90">
                      <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="2" className="text-white/10" fill="none" />
                      <circle cx="128" cy="128" r="120" stroke="url(#gradient)" strokeWidth="4" className="text-rose-500" fill="none"
                        strokeDasharray={2 * Math.PI * 120}
                        strokeDashoffset={2 * Math.PI * 120 * (1 - overallScore / 100)}
                        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-6xl font-serif font-bold">{overallScore}%</span>
                      <span className="text-xs uppercase tracking-widest text-white/50 mt-2">Match Rate</span>
                    </div>
                  </div>
                  <p className="mt-8 text-lg text-white/80 font-serif italic leading-relaxed">
                    "A rare, high-frequency connection. Like two stars orbiting the same center of gravity."
                  </p>
                </div>

                {/* Right: The Breakdown */}
                <div className="space-y-6">
                  <CompatibilityBar label="Emotional Depth" score={compatibilityScores.emotional} icon={<Heart size={16} />} color="bg-rose-500" />
                  <CompatibilityBar label="Physical Chemistry" score={compatibilityScores.physical} icon={<Zap size={16} />} color="bg-orange-500" />
                  <CompatibilityBar label="Intellectual Sync" score={compatibilityScores.intellectual} icon={<Brain size={16} />} color="bg-blue-500" />
                  <CompatibilityBar label="Communication" score={compatibilityScores.communication} icon={<MessageCircle size={16} />} color="bg-green-500" />
                  <CompatibilityBar label="Unwavering Trust" score={compatibilityScores.trust} icon={<Shield size={16} />} color="bg-purple-500" />
                </div>
              </motion.div>
            )}

            {/* 2. ANALYSIS TAB */}
            {activeTab === 'analysis' && (
              <motion.div
                key="analysis"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-3 gap-6"
              >
                <AnalysisCard title="Strengths" items={analysisData.strengths} color="border-green-500/30 bg-green-500/5" />
                <AnalysisCard title="Challenges" items={analysisData.challenges} color="border-red-500/30 bg-red-500/5" />
                <AnalysisCard title="Solutions" items={analysisData.solutions} color="border-blue-500/30 bg-blue-500/5" />
              </motion.div>
            )}

            {/* 3. SPIRITUAL TAB */}
            {activeTab === 'spiritual' && (
              <motion.div
                key="spiritual"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="space-y-16"
              >
                {/* Elemental Alchemy */}
                <div className="text-center">
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 mb-8">Elemental Alchemy</h3>
                  <div className="flex justify-center items-center gap-8 md:gap-16">
                    <ElementOrb icon={<Droplets size={32} />} label="Water" sub="Moiz" color="bg-blue-500" />
                    <span className="text-2xl text-white/20">+</span>
                    <ElementOrb icon={<Flame size={32} />} label="Fire" sub="Falguni" color="bg-orange-500" />
                    <span className="text-2xl text-white/20">=</span>
                    <ElementOrb icon={<Cloud size={32} />} label="Steam" sub="Passion" color="bg-purple-500" />
                  </div>
                  <p className="mt-8 text-white/60 max-w-xl mx-auto italic">
                    "Water tempers Fire; Fire warms Water. Together, you create energy that transforms everything around you."
                  </p>
                </div>

                {/* Religious Scrolls */}
                <div className="grid md:grid-cols-2 gap-8">
                  <ScrollCard title="The Quran" icon="☪️" quotes={islamicQuotes} />
                  <ScrollCard title="The Vedas" icon="🕉️" quotes={hinduQuotes} />
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

// --- SUB-COMPONENTS ---

const CompatibilityBar = ({ label, score, icon, color }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-white/70">
        {icon} {label}
      </div>
      <span className="font-mono text-white/90">{score}%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${score}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
)

const AnalysisCard = ({ title, items, color }) => (
  <div className={`p-8 rounded-2xl border ${color} backdrop-blur-sm`}>
    <h3 className="text-xl font-serif mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/70">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-white/50" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

const ElementOrb = ({ icon, label, sub, color }) => (
  <div className="flex flex-col items-center gap-3">
    <div className={`w-20 h-20 rounded-full ${color} bg-opacity-20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-md border border-white/10`}>
      <div className="text-white drop-shadow-md">{icon}</div>
    </div>
    <div className="text-center">
      <div className="text-lg font-serif">{label}</div>
      <div className="text-[10px] uppercase tracking-widest text-white/40">{sub}</div>
    </div>
  </div>
)

const ScrollCard = ({ title, icon, quotes }) => (
  <div className="relative p-8 rounded-sm bg-[#1a1a1a] border border-white/5 overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    <div className="text-center mb-8">
      <span className="text-4xl block mb-2">{icon}</span>
      <h3 className="text-lg font-serif text-white/60">{title}</h3>
    </div>
    <div className="space-y-8">
      {quotes.map((q, i) => (
        <div key={i} className="text-center">
          <p className="text-lg md:text-xl font-serif text-white/90 mb-2 leading-relaxed">
            {q.arabic || q.sanskrit}
          </p>
          <p className="text-sm text-white/50 italic mb-2">"{q.english}"</p>
          <span className="text-[10px] uppercase tracking-widest text-white/30">— {q.reference}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Compatibility

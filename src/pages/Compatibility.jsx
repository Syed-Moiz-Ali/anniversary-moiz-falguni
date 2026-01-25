import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Compatibility = () => {
  const [activeTab, setActiveTab] = useState('overall')

  // Compatibility scores
  const compatibilityScores = {
    overall: 97,
    emotional: 95,
    physical: 98,
    intellectual: 94,
    spiritual: 96,
    communication: 93,
    trust: 99,
    longTerm: 97
  }

  // Detailed analysis sections
  const analysisData = {
    strengths: [
      "Exceptional emotional vulnerability and openness from day one",
      "Shared dark fantasies creating deep intimate bond",
      "Natural physical chemistry that intensified over time",
      "Ability to communicate desires without shame or judgment",
      "Mutual respect for independence while choosing togetherness",
      "Playful banter balanced with serious emotional depth",
      "Strong trust foundation built through honesty",
      "Complementary personalities—your strength, my support; my calm, your fire",
      "Shared vision for future despite distance challenges",
      "Gift-giving love language bridging physical separation"
    ],
    challenges: [
      "Long-distance strain (Hyderabad ↔ Nagpur)",
      "Different work schedules affecting communication timing",
      "Family/religious differences requiring navigation",
      "Initial misunderstanding (Lonavala fight) showing communication gaps",
      "Intensity of connection sometimes overwhelming",
      "Learning each other's love languages took time"
    ],
    solutions: [
      "Daily video calls maintaining emotional connection",
      "Weekend visit to Nagpur keeping physical intimacy alive",
      "WhatsApp as constant communication lifeline",
      "Shopping for each other online as love expression",
      "Setting clear relationship goals and timelines",
      "Honest conversations about family/future expectations",
      "Respecting each other's space while staying connected",
      "Building rituals—good morning texts, late-night calls, surprise gifts"
    ]
  }

  // Sacred Quotes from Quran (Islamic)
  const islamicQuotes = [
    {
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
      transliteration: "Wa min ayatihi an khalaqa lakum min anfusikum azwajan litaskunu ilayha wa ja'ala baynakum mawaddatan wa rahmah",
      english: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.",
      reference: "Quran 30:21 (Ar-Rum)",
      meaning: "This verse describes the divine purpose of marriage and companionship—finding peace, love, and mercy in each other."
    },
    {
      arabic: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ",
      transliteration: "Hunna libasun lakum wa antum libasun lahunna",
      english: "They (your wives) are clothing for you and you are clothing for them.",
      reference: "Quran 2:187 (Al-Baqarah)",
      meaning: "Just as clothing provides protection, comfort, and beauty, spouses provide the same for each other—intimacy, protection, and completeness."
    },
    {
      arabic: "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
      transliteration: "Rabbana hab lana min azwajina wa dhurriyatina qurrata a'yunin",
      english: "Our Lord! Grant us from our spouses and offspring comfort to our eyes.",
      reference: "Quran 25:74 (Al-Furqan)",
      meaning: "A prayer for spouses who bring joy, peace, and contentment to one's life."
    }
  ]

  // Sacred Quotes from Hindu Scriptures
  const hinduQuotes = [
    {
      sanskrit: "धर्मे चार्थे च कामे च मोक्षे च भरतर्षभ। यदिहास्ति तदन्यत्र यन्नेहास्ति न तत्क्वचित्॥",
      transliteration: "Dharme cha arthe cha kame cha mokṣhe cha bharatarṣhabha, Yad ihasti tad anyatra yan nehasti na tat kwachit",
      english: "In Dharma (righteousness), Artha (prosperity), Kama (desire), and Moksha (liberation), whatever is found here (in love) is found elsewhere; what is not here is nowhere.",
      reference: "Mahabharata, Adi Parva",
      meaning: "True love encompasses all of life's purposes—righteousness, worldly success, desire, and spiritual liberation."
    },
    {
      sanskrit: "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवता:",
      transliteration: "Yatra naryastu pujyante ramante tatra devata",
      english: "Where women are honored, there the divine rejoices.",
      reference: "Manusmriti 3:56",
      meaning: "The divine presence resides where women are respected, loved, and cherished."
    },
    {
      sanskrit: "सा भार्या या शुचिर्दक्षा सा भार्या या पतिव्रता। सा भार्या या पतिप्रीता सा भार्या सत्यवादिनी॥",
      transliteration: "Sa bharya ya shuchir daksha sa bharya ya pativrata, Sa bharya ya patiprīta sa bharya satyavadini",
      english: "She is a true wife who is pure, skilled, devoted to her partner, who brings joy to her beloved, and speaks truth.",
      reference: "Chanakya Niti",
      meaning: "The qualities of an ideal partner—purity of heart, devotion, bringing happiness, and truthfulness."
    },
    {
      sanskrit: "अर्धनारीश्वर - आधा नारी आधा ईश्वर",
      transliteration: "Ardhanarishvara - Adha nari adha ishvara",
      english: "Half woman, half divine—the sacred union where two souls become one complete being.",
      reference: "Shiva Purana",
      meaning: "The concept of Ardhanarishvara (Lord Shiva as half-male, half-female) represents perfect union where neither is complete without the other."
    }
  ]

  // Universal spiritual wisdom
  const universalQuotes = [
    {
      quote: "Love knows no boundaries of religion, race, or distance. When two souls recognize each other, the universe conspires to unite them.",
      source: "Universal Wisdom"
    },
    {
      quote: "In every faith tradition, love is considered sacred—the closest humans come to experiencing the divine.",
      source: "Comparative Theology"
    }
  ]

  // Astrological/Numerological data
  const spiritualAnalysis = {
    numerology: {
      moiz: 4,
      falguni: 7,
      compatibility: "4 and 7 create a unique balance—4 brings stability, 7 brings introspection and depth. Together, you build a spiritually grounded yet passionate relationship."
    },
    elements: {
      moiz: "Water",
      falguni: "Fire",
      analysis: "Water and Fire—an intense combination. Fire heats Water, creating steam and energy. Water tempers Fire, preventing burnout. Your relationship is transformation itself."
    },
    religiousCompatibility: {
      moiz: "Muslim",
      falguni: "Hindu",
      interfaith: "Your love transcends religious boundaries. Both traditions emphasize devotion, respect, and sacred union. You honor each other's beliefs while creating your own spiritual path together.",
      blessing: "Love is the truest religion. In respecting each other's faiths, you practice the highest form of spirituality."
    }
  }

  // Timeline milestones for chart
  const relationshipTimeline = [
    { month: 'July', event: 'Lonavala Trip', intensity: 60 },
    { month: 'Aug', event: 'First Kiss', intensity: 80 },
    { month: 'Sept', event: 'Office Intimacy', intensity: 85 },
    { month: 'Oct', event: 'Hyderabad First Time', intensity: 100 },
    { month: 'Nov', event: 'Long Distance', intensity: 70 },
    { month: 'Dec', event: 'Nagpur Reunion', intensity: 95 },
    { month: 'Jan', event: 'Now - Forever', intensity: 97 }
  ]

  return (
    <section className="min-h-screen section-padding pt-32 pb-20">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-cinzel tracking-ultra text-center mb-8 text-near-white">
            Our Compatibility
          </h2>
          <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-4">
            A deep analysis of what makes us perfect for each other
          </p>
          <p className="text-center text-near-white opacity-50 text-sm tracking-wider mb-16">
            Based on 6 months of love, laughter, and learning each other
          </p>
        </motion.div>

        {/* Overall Compatibility Score - Hero */}
        <motion.div
          className="glass-card text-center mb-16 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-muted-magenta/10 to-soft-purple/5" />
          <div className="relative z-10 py-12">
            <h3 className="text-2xl font-cinzel tracking-widest text-soft-purple mb-6">
              Overall Compatibility
            </h3>
            <div className="relative inline-block">
              <motion.div
                className="text-8xl md:text-9xl font-cinzel font-bold text-muted-magenta"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5, type: 'spring' }}
              >
                {compatibilityScores.overall}%
              </motion.div>
              <div className="absolute -top-4 -right-4 animate-heartbeat">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    className="fill-muted-magenta"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-6 text-base font-cinzel italic text-near-white opacity-80 max-w-2xl mx-auto">
              "Exceptionally compatible—a rare connection built on trust, passion, and genuine understanding."
            </p>
          </div>
        </motion.div>

        {/* Compatibility Breakdown Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {Object.entries(compatibilityScores).filter(([key]) => key !== 'overall').map(([key, score], index) => (
            <motion.div
              key={key}
              className="glass-card text-center py-6 hover:border-muted-magenta/40 transition-all duration-500"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="text-3xl md:text-4xl font-cinzel font-semibold text-muted-magenta mb-2">
                {score}%
              </div>
              <div className="text-xs md:text-sm text-soft-purple opacity-70 tracking-wider uppercase">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="mt-3 w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-muted-magenta to-soft-purple"
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Relationship Intensity Timeline Chart */}
        <motion.div
          className="glass-card mb-16 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-cinzel tracking-widest text-center text-near-white mb-8">
            Relationship Intensity Over Time
          </h3>
          <div className="relative h-64 flex items-end justify-between gap-2 md:gap-4">
            {relationshipTimeline.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <motion.div
                  className="w-full bg-gradient-to-t from-muted-magenta to-soft-purple rounded-t-md relative group cursor-pointer"
                  initial={{ height: 0 }}
                  animate={{ height: `${item.intensity}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
                    {item.intensity}%
                  </div>
                </motion.div>
                <div className="mt-2 text-xs md:text-sm text-soft-purple text-center">
                  {item.month}
                </div>
                <div className="text-[10px] md:text-xs text-near-white opacity-50 text-center mt-1">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['overall', 'strengths', 'challenges', 'spiritual', 'sacred'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-sm font-inter text-sm tracking-wider uppercase transition-all duration-300
                ${activeTab === tab
                  ? 'bg-muted-magenta/20 border-2 border-muted-magenta text-near-white'
                  : 'bg-white/5 border border-white/10 text-soft-purple hover:border-muted-magenta/50'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'overall' && (
            <div className="glass-card">
              <h3 className="text-2xl font-cinzel tracking-widest mb-6 text-muted-magenta">
                Overall Analysis
              </h3>
              <div className="space-y-4">
                <p className="text-base font-cinzel italic leading-relaxed text-near-white opacity-85">
                  Moiz and Falguni's relationship is a rare example of deep compatibility across all major dimensions.
                  With an overall score of 97%, this connection transcends typical romantic relationships.
                </p>
                <p className="text-base font-cinzel italic leading-relaxed text-near-white opacity-85">
                  What began as a misunderstanding in Lonavala transformed into one of the most authentic connections either has experienced.
                  The ability to share dark fantasies, maintain trust across distance, and communicate without shame creates a foundation few couples achieve.
                </p>
                <p className="text-base font-cinzel italic leading-relaxed text-near-white opacity-85">
                  Physical chemistry (98%) combined with emotional vulnerability (95%) and exceptional trust (99%) makes this relationship
                  not just passionate, but sustainable. The 6-month journey from office washroom kisses to Nagpur weekend reunion
                  demonstrates resilience, commitment, and genuine love.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'strengths' && (
            <div className="glass-card">
              <h3 className="text-2xl font-cinzel tracking-widest mb-6 text-muted-magenta">
                Relationship Strengths
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {analysisData.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-muted-magenta/30 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="mt-1">
                      <svg className="w-5 h-5 text-muted-magenta" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-cinzel text-near-white opacity-80">{strength}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="glass-card">
              <h3 className="text-2xl font-cinzel tracking-widest mb-6 text-muted-magenta">
                Challenges & Solutions
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-cinzel text-soft-purple mb-4">Challenges We Face</h4>
                  <div className="space-y-3">
                    {analysisData.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-red-500/5 border border-red-500/20 rounded-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="mt-1">
                          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm font-cinzel text-near-white opacity-75">{challenge}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-cinzel text-soft-purple mb-4">How We Overcome Them</h4>
                  <div className="space-y-3">
                    {analysisData.solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-green-500/5 border border-green-500/20 rounded-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="mt-1">
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm font-cinzel text-near-white opacity-75">{solution}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'spiritual' && (
            <div className="space-y-8">
              {/* Numerology */}
              <div className="glass-card">
                <h3 className="text-2xl font-cinzel tracking-widest mb-6 text-muted-magenta flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Numerology Analysis
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                    <div className="text-5xl font-cinzel text-muted-magenta mb-2">{spiritualAnalysis.numerology.moiz}</div>
                    <div className="text-sm text-soft-purple tracking-wider uppercase">Moiz's Life Path</div>
                    <p className="text-xs text-near-white opacity-60 mt-2">Stability, Foundation, Reliability</p>
                  </div>
                  <div className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                    <div className="text-5xl font-cinzel text-muted-magenta mb-2">{spiritualAnalysis.numerology.falguni}</div>
                    <div className="text-sm text-soft-purple tracking-wider uppercase">Falguni's Life Path</div>
                    <p className="text-xs text-near-white opacity-60 mt-2">Introspection, Depth, Wisdom</p>
                  </div>
                </div>
                <p className="text-base font-cinzel italic text-near-white opacity-85 leading-relaxed">
                  {spiritualAnalysis.numerology.compatibility}
                </p>
              </div>

              {/* Elemental Compatibility */}
              <div className="glass-card">
                <h3 className="text-2xl font-cinzel tracking-widest mb-6 text-muted-magenta flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                  Elemental Analysis
                </h3>
                <div className="flex justify-center items-center gap-8 mb-6 flex-wrap">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/40 flex items-center justify-center">
                      <span className="text-3xl">💧</span>
                    </div>
                    <div className="text-lg font-cinzel text-blue-400">Water</div>
                    <div className="text-xs text-soft-purple">Moiz</div>
                  </div>
                  <div className="text-4xl text-muted-magenta">+</div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-400/40 flex items-center justify-center">
                      <span className="text-3xl">🔥</span>
                    </div>
                    <div className="text-lg font-cinzel text-orange-400">Fire</div>
                    <div className="text-xs text-soft-purple">Falguni</div>
                  </div>
                  <div className="text-4xl text-muted-magenta">=</div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/40 flex items-center justify-center">
                      <span className="text-3xl">💨</span>
                    </div>
                    <div className="text-lg font-cinzel text-purple-400">Steam</div>
                    <div className="text-xs text-soft-purple">Transformation</div>
                  </div>
                </div>
                <p className="text-base font-cinzel italic text-near-white opacity-85 leading-relaxed">
                  {spiritualAnalysis.elements.analysis}
                </p>
              </div>

              {/* Religious Compatibility */}
              <div className="glass-card bg-gradient-to-br from-muted-magenta/5 to-soft-purple/5">
                <h3 className="text-2xl font-cinzel tracking-widest mb-6 text-muted-magenta flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Interfaith Love: Muslim & Hindu
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-6 bg-white/[0.02] border border-green-500/20 rounded-sm">
                    <div className="text-3xl mb-2">☪️</div>
                    <div className="text-lg font-cinzel text-near-white mb-1">Moiz - Muslim</div>
                    <p className="text-xs text-soft-purple opacity-70">Love, Compassion, Devotion</p>
                  </div>
                  <div className="text-center p-6 bg-white/[0.02] border border-orange-500/20 rounded-sm">
                    <div className="text-3xl mb-2">🕉️</div>
                    <div className="text-lg font-cinzel text-near-white mb-1">Falguni - Hindu</div>
                    <p className="text-xs text-soft-purple opacity-70">Love, Unity, Sacred Bond</p>
                  </div>
                </div>
                <p className="text-base font-cinzel italic text-near-white opacity-85 leading-relaxed mb-4">
                  {spiritualAnalysis.religiousCompatibility.interfaith}
                </p>
                <div className="mt-6 p-4 bg-muted-magenta/10 border border-muted-magenta/30 rounded-sm text-center">
                  <p className="text-lg font-cinzel italic text-muted-magenta leading-relaxed">
                    "{spiritualAnalysis.religiousCompatibility.blessing}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sacred' && (
            <div className="space-y-12">
              {/* Islamic Quotes */}
              <div>
                <h3 className="text-3xl font-cinzel tracking-widest mb-8 text-center text-green-400 flex items-center justify-center gap-3">
                  <span className="text-4xl">☪️</span>
                  Wisdom from the Quran
                </h3>
                <div className="space-y-8">
                  {islamicQuotes.map((quote, index) => (
                    <motion.div
                      key={index}
                      className="glass-card bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Arabic Text */}
                      <div className="text-right mb-6 p-6 bg-green-500/5 rounded-sm border border-green-500/10">
                        <p className="text-2xl md:text-3xl leading-loose text-green-300 font-arabic" dir="rtl">
                          {quote.arabic}
                        </p>
                      </div>

                      {/* Transliteration */}
                      <div className="mb-4 px-4">
                        <p className="text-sm italic text-soft-purple opacity-80 leading-relaxed">
                          {quote.transliteration}
                        </p>
                      </div>

                      {/* English Translation */}
                      <div className="mb-4 px-4">
                        <p className="text-base md:text-lg font-cinzel text-near-white leading-relaxed">
                          "{quote.english}"
                        </p>
                      </div>

                      {/* Reference */}
                      <div className="flex items-center justify-between px-4 pt-4 border-t border-white/10">
                        <p className="text-xs text-green-400 tracking-widest uppercase font-inter">
                          {quote.reference}
                        </p>
                      </div>

                      {/* Meaning */}
                      <div className="mt-4 px-4 pb-2">
                        <p className="text-sm font-cinzel italic text-near-white opacity-70 leading-relaxed">
                          💚 {quote.meaning}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hindu Quotes */}
              <div>
                <h3 className="text-3xl font-cinzel tracking-widest mb-8 text-center text-orange-400 flex items-center justify-center gap-3">
                  <span className="text-4xl">🕉️</span>
                  Wisdom from Hindu Scriptures
                </h3>
                <div className="space-y-8">
                  {hinduQuotes.map((quote, index) => (
                    <motion.div
                      key={index}
                      className="glass-card bg-gradient-to-br from-orange-500/5 to-transparent border-orange-500/20"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Sanskrit Text */}
                      <div className="mb-6 p-6 bg-orange-500/5 rounded-sm border border-orange-500/10">
                        <p className="text-xl md:text-2xl leading-loose text-orange-300 font-serif text-center">
                          {quote.sanskrit}
                        </p>
                      </div>

                      {/* Transliteration */}
                      <div className="mb-4 px-4">
                        <p className="text-sm italic text-soft-purple opacity-80 leading-relaxed text-center">
                          {quote.transliteration}
                        </p>
                      </div>

                      {/* English Translation */}
                      <div className="mb-4 px-4">
                        <p className="text-base md:text-lg font-cinzel text-near-white leading-relaxed text-center">
                          "{quote.english}"
                        </p>
                      </div>

                      {/* Reference */}
                      <div className="flex items-center justify-between px-4 pt-4 border-t border-white/10">
                        <p className="text-xs text-orange-400 tracking-widest uppercase font-inter">
                          {quote.reference}
                        </p>
                      </div>

                      {/* Meaning */}
                      <div className="mt-4 px-4 pb-2">
                        <p className="text-sm font-cinzel italic text-near-white opacity-70 leading-relaxed">
                          🧡 {quote.meaning}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Universal Wisdom */}
              <div className="glass-card bg-gradient-to-br from-muted-magenta/10 to-soft-purple/5">
                <h3 className="text-2xl font-cinzel tracking-widest mb-6 text-muted-magenta text-center">
                  Universal Truth
                </h3>
                <div className="space-y-4">
                  {universalQuotes.map((item, index) => (
                    <div key={index} className="p-4 bg-white/[0.02] border border-white/5 rounded-sm">
                      <p className="text-base font-cinzel italic text-near-white leading-relaxed mb-2">
                        "{item.quote}"
                      </p>
                      <p className="text-xs text-soft-purple opacity-70 text-right">
                        — {item.source}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Final Quote */}
        <motion.div
          className="mt-20 text-center glass-card bg-gradient-to-br from-muted-magenta/10 to-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6 animate-heartbeat inline-block">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                className="fill-muted-magenta"
              />
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-cinzel italic leading-loose tracking-wide text-near-white opacity-90 max-w-3xl mx-auto mb-4">
            "The charts don't lie, but numbers can't capture the magic. Our 97% compatibility is just science trying
            to explain what the heart already knows—we're meant for each other. Whether blessed by Allah or the divine universe,
            our love transcends all boundaries."
          </p>
          <p className="text-sm text-muted-magenta opacity-70 tracking-widest font-inter uppercase">
            — Written in the stars, blessed by both faiths, sealed with love
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Compatibility

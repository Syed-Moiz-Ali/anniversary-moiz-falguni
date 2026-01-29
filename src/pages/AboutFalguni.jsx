import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Heart, Quote, Star, Zap, Moon, Coffee, Crown } from 'lucide-react'

const AboutFalguni = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  // --- DATA (Preserved) ---
  const cards = [
    {
      title: "Her Essence",
      text: "She moves through the world like a quiet storm—gentle yet devastating, leaving traces of warmth wherever her skin has touched mine. Falguni is the kind of beauty that doesn't demand attention but commands it, effortlessly. She's a paradox wrapped in silk—soft to touch but impossible to hold lightly."
    },
    {
      title: "Her Fire",
      text: "Behind those eyes lies an intensity that both terrifies and intoxicates me. She is fierce in her softness, unrelenting in her tenderness, and every whispered word from her lips feels like a sacred confession meant only for me. When she wants something, the whole world bends—and I'm first in line."
    },
    {
      title: "Her Impact",
      text: "She has rewritten the language of my body. Every nerve remembers her touch, every breath carries the echo of her name. Falguni is not just someone I love—she is the reason I understand what it means to be consumed, willingly and completely. She's the only addiction I'll never quit."
    }
  ]

  const quirks = [
    { icon: <Quote size={24} />, title: "Bhai Saab", desc: "That mock-serious tone makes me laugh every single time." },
    { icon: <Zap size={24} />, title: "Chutiya Insaan", desc: "Her favorite insult, delivered with affection and a nose scrunch." },
    { icon: <Sparkles size={24} />, title: "The Banter", desc: "She roasts me better than anyone. It's our love language." },
    { icon: <Heart size={24} />, title: "Angry Face", desc: "Puffing her cheeks like a cute pufferfish. Impossible to take seriously." },
    { icon: <Star size={24} />, title: "Baby Voice", desc: "My kryptonite. She weaponizes cuteness and I surrender instantly." },
    { icon: <Moon size={24} />, title: "Late Nights", desc: "2 AM talks that drift from philosophy to absolute nonsense." },
    { icon: <Coffee size={24} />, title: "Foodie", desc: "Describing cravings with such passion it sounds sensual." },
    { icon: <Crown size={24} />, title: "Boss Mode", desc: "Confident, decisive, unstoppable. Incredibly attractive." }
  ]

  const personalTraits = [
    "Laughs at her own jokes before the punchline",
    "Steals hoodies and claims they're 'ours'",
    "Random happy dances when I'm 'not looking'",
    "The makeup concentration face",
    "Demands attention like a needy cat",
    "Cannot whisper to save her life",
    "Gets excited about the smallest things",
    "Saves specific memes just for me at 3 AM"
  ]

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-30 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container max-w-5xl mx-auto px-6 py-32 relative z-10">

        {/* --- HERO HEADER --- */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block border border-white/20 px-8 py-3 rounded-full mb-8 backdrop-blur-md bg-white/5"
          >
            <span className="font-serif italic text-xl text-rose-300">The Muse</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif font-bold mb-6 tracking-tight"
          >
            Falguni
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/50 font-serif italic max-w-2xl mx-auto leading-relaxed"
          >
            "The woman who rewrote my definition of everything."
          </motion.p>
        </div>

        {/* --- ESSENCE CARDS (Editorial Style) --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-40">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative p-8 h-full border-l border-white/10 group-hover:border-rose-500/50 transition-colors duration-500">
                <span className="absolute -top-6 -left-4 text-8xl font-serif text-white/5 select-none z-0">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-serif text-rose-200 mb-6 relative z-10">{card.title}</h3>
                <p className="text-white/70 leading-loose font-serif relative z-10">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- QUIRKS GRID --- */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-3xl font-serif text-center uppercase tracking-widest text-white/40">
              What Makes Her HER
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quirks.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-white/5 rounded-2xl p-6 flex flex-col justify-between group hover:bg-rose-900/20 hover:scale-105 transition-all duration-300 cursor-default border border-white/5 hover:border-rose-500/30"
              >
                <div className="text-rose-400 opacity-50 group-hover:opacity-100 transition-opacity">
                  {q.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{q.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-6 top-20">
                    {q.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- LITTLE THINGS LIST --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-5xl font-serif mb-8 leading-tight">
              The <span className="text-rose-500 italic">Little Things</span> I Adore
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              It's not just the big moments. It's the tiny, unconscious habits that make me fall in love with you 100 times a day.
            </p>
          </div>
          <div className="space-y-4">
            {personalTraits.map((trait, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border-l-2 border-transparent hover:border-rose-500"
              >
                <Heart size={16} className="text-rose-500 flex-shrink-0" fill="currentColor" />
                <span className="font-serif italic text-white/90">{trait}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FINAL QUOTE --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto py-20 border-t border-white/10"
        >
          <Quote size={48} className="mx-auto text-rose-500/50 mb-8" />
          <p className="text-3xl md:text-4xl font-serif leading-tight mb-8">
            "She's chaos and calm, fire and softness, my biggest distraction and my only focus."
          </p>
          <div className="flex justify-center items-center gap-4 text-sm tracking-widest uppercase text-white/40">
            <span className="w-8 h-px bg-white/20" />
            <span>Forever Yours</span>
            <span className="w-8 h-px bg-white/20" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutFalguni

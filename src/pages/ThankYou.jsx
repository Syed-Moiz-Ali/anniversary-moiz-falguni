import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, Feather } from 'lucide-react'

const ThankYou = () => {
  const gratitudes = [
    { text: "Thank you for turning a Lonavala argument into my favorite love story.", icon: <Sparkles size={20} /> },
    { text: "Thank you for trusting me with the WhatsApp fantasies that started everything.", icon: <Star size={20} /> },
    { text: "Thank you for that washroom kiss—reckless, forbidden, perfect.", icon: <Heart size={20} /> },
    { text: "Thank you for the black lace reveal that stopped my heart completely.", icon: <Sparkles size={20} /> },
    { text: "Thank you for Nagpur packages that feel like hugs across miles.", icon: <Feather size={20} /> },
    { text: "'Bhai saab' sarcasm that makes me laugh every single time.", icon: "🎭" },
    { text: "Baby voice that melts my defenses instantly.", icon: "👶" },
    { text: "Lap-climbing when you need attention—irresistible always.", icon: "🐈" },
    { text: "Saying my name when you're on the edge—pure magic.", icon: "🔥" },
    { text: "Making distance feel temporary, not permanent.", icon: "🌍" },
    { text: "Being my best friend, safe place, everything.", icon: "🏡" },
    { text: "Choosing me again and again, every single day.", icon: "💍" },
    { text: "Lifetime memories packed into just six months.", icon: "⏳" }
  ]

  return (
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Heart size={14} className="text-rose-400" fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Gratitude</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-rose-200 via-white to-purple-200 bg-clip-text text-transparent leading-tight">
            Thank You, Falguni
          </h1>
          <p className="text-white/50 font-serif italic text-lg max-w-2xl mx-auto">
            "For every moment, every memory, and every piece of my heart you hold."
          </p>
        </div>

        {/* --- MASONRY GRID OF NOTES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {gratitudes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-8 rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden
                ${index === 0 ? 'lg:col-span-2 bg-gradient-to-br from-rose-900/20 to-purple-900/20 border-rose-500/30' : 'border-white/10 hover:border-white/20 hover:bg-white/10'}
              `}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:animate-shine" />

              <div className="flex items-start justify-between mb-4">
                <span className={`text-2xl ${index === 0 ? 'text-rose-400' : 'text-white/40 group-hover:text-white transition-colors'}`}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <p className={`font-serif leading-relaxed ${index === 0 ? 'text-xl text-white' : 'text-lg text-white/80'}`}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- SIGN OFF SECTION --- */}
        <div className="max-w-2xl mx-auto text-center border-t border-white/10 pt-20">
          <div className="mb-8 animate-pulse">
            <Heart size={32} className="mx-auto text-rose-500" fill="currentColor" />
          </div>

          <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-white/90 mb-12">
            "Every thank you is just a reminder: you're not just my girlfriend. You're my everything."
          </p>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-2">Forever Grateful</span>
            <span className="font-signature text-6xl md:text-7xl text-white rotate-[-5deg]">
              Moiz
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ThankYou

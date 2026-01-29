import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Unlock, Key, Eye, EyeOff, Mic } from 'lucide-react'

const InsideWorld = () => {
  // --- DATA ---
  const secrets = [
    { trigger: "Our Secret Code", reveal: "When I text 'thinking of you,' I mean I'm imagining your body pressed against mine, your breath on my neck." },
    { trigger: "The Office Look", reveal: "That mouse-like glance wasn't shy—it was a promise of what would happen in the washroom later." },
    { trigger: "Your Perfume", reveal: "I smell it on my clothes days later. It drives me crazy when I'm alone, remembering your skin." },
    { trigger: "11:11 Wish", reveal: "Every single time, I wish for one more night tangled in your Nagpur sheets, losing track of time." },
    { trigger: "The Playlist", reveal: "Every song reminds me of a different way you've made me lose control." },
    { trigger: "My Stolen Hoodie", reveal: "You claimed it's 'ours', but I secretly love seeing you in it more than wearing it myself." },
    { trigger: "'Bhai Saab'", reveal: "When you say it sarcastically, I know you're about to kiss me to shut me up. And I let you win." },
    { trigger: "The Washroom", reveal: "Every time I pass an office washroom now, I think of our first kiss—reckless, urgent, perfect." },
    { trigger: "2 AM Texts", reveal: "Those 'I'm touching myself' texts? I saved every single one. My favorite kind of torture." },
    { trigger: "Baby Voice", reveal: "You know exactly what you're doing. It's manipulative and adorable and I'm powerless against it." },
    { trigger: "Lonavala Fight", reveal: "I'm grateful for that fight. Misunderstandings led to us, and I'd do it all over again." },
    { trigger: "Scratch Marks", reveal: "I looked at the marks on my back for days, remembering how we lost ourselves in each other." },
    { trigger: "Hyderabad Hotels", reveal: "I've memorized the room numbers. Every one holds a memory of your surrender." },
    { trigger: "Clinginess", reveal: "When you're half-asleep and refuse to let go—those are the moments I feel most needed." },
    { trigger: "Corridor Kisses", reveal: "Pressed against the wall, hearts racing—I still get hard thinking about the risk we took." },
    { trigger: "'Chutiya Insaan'", reveal: "The way you call me that with affection makes me smile. It's our word." },
    { trigger: "Video Call Nights", reveal: "Distance couldn't kill our desire. Watching you on screen made me hungrier." },
    { trigger: "Random Dances", reveal: "When you think I'm not watching—that carefree joy is my favorite version of you." },
    { trigger: "First Hotel", reveal: "We didn't have sex, but I learned every spot that makes you shiver. Hours of foreplay." },
    { trigger: "The Challenge", reveal: "You said 'Make me forget my name.' I took that personally. And we both know I succeeded." },
    { trigger: "Competitive Side", reveal: "'I bet I can make you lose control first'—you always win, and I love losing to you." },
    { trigger: "Morning Glow", reveal: "Hair messy, lips swollen, eyes satisfied—that image is burned into my memory forever." },
    { trigger: "Nagpur Reunions", reveal: "Weeks of longing exploding the second we're behind closed doors." },
    { trigger: "Your Laugh", reveal: "You laugh at your own jokes before finishing them, and it makes me fall deeper." },
    { trigger: "Lunch Evolution", reveal: "From awkward cafeteria talks to planning hotel escapades in hushed voices." },
    { trigger: "All-Day Session", reveal: "That mid-November day we never left your room. We forgot the world existed." },
    { trigger: "Chest Spot", reveal: "My body knows exactly how to hold you. My chest remembers the weight of your head." },
    { trigger: "Fantasy Talks", reveal: "We trusted each other with secrets we'd never told our exes. Absolute vulnerability." },
    { trigger: "The Goodbye", reveal: "When you left the office, I cried. Losing daily access to you felt like losing a limb." },
    { trigger: "Your Name", reveal: "The way you whisper 'Moiz' when you're on the edge... it's the most erotic sound on earth." }
  ]

  return (
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Key size={14} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Restricted Access</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            The Vault of Whispers
          </h1>
          <p className="text-white/50 font-serif italic text-lg max-w-2xl mx-auto">
            "The secrets only we share, the moments only we understand."
          </p>
        </div>

        {/* --- SECRETS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secrets.map((secret, index) => (
            <SecretCard key={index} secret={secret} index={index} />
          ))}
        </div>

        {/* --- FOOTER --- */}
        <div className="mt-32 text-center border-t border-white/10 pt-16">
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Encrypted with Love
          </p>
          <div className="font-serif italic text-2xl text-white/80">
            "These are the memories that live in the space between words."
          </div>
        </div>

      </div>
    </section>
  )
}

// --- SUB-COMPONENT: SECRET CARD ---
const SecretCard = ({ secret, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Generate a random waveform pattern visually
  const bars = Array.from({ length: 12 }, () => Math.floor(Math.random() * 20) + 5)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group min-h-[200px] p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/30 hover:bg-white/10 transition-all duration-500 overflow-hidden cursor-crosshair backdrop-blur-md flex flex-col justify-between"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header: Title & Lock Status */}
      <div className="relative z-10 flex justify-between items-start mb-6">
        <h3 className="font-serif text-xl text-white/90 group-hover:text-rose-200 transition-colors">
          {secret.trigger}
        </h3>
        <div className="text-white/30 group-hover:text-rose-400 transition-colors">
          {isHovered ? <Unlock size={18} /> : <Lock size={18} />}
        </div>
      </div>

      {/* Content: The Reveal */}
      <div className="relative z-10">
        <div className={`transition-all duration-700 ${isHovered ? 'opacity-100 blur-0 translate-y-0' : 'opacity-40 blur-sm translate-y-2'}`}>
          <p className="font-serif italic text-white/80 leading-relaxed text-sm">
            "{secret.reveal}"
          </p>
        </div>
      </div>

      {/* Footer: Waveform */}
      <div className="relative z-10 mt-6 flex items-end gap-1 h-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            initial={{ height }}
            animate={isHovered ? { height: [height, height * 1.5, height] } : { height }}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
            className={`w-1 rounded-full ${isHovered ? 'bg-rose-500' : 'bg-white'}`}
          />
        ))}
      </div>

    </motion.div>
  )
}

export default InsideWorld

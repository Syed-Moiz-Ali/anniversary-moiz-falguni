import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Star, Quote, Shuffle, Sparkles } from 'lucide-react'

const Reasons = () => {
  const [randomReason, setRandomReason] = useState(null)

  // THE FULL LIST (Preserved)
  const reasons = [
    "The way you looked at me like a mouse in the office—shy, adorable, pretending not to stare but failing every time",
    "Your 'Bhai saab' when you're being dramatic, delivered with that mock-serious tone that makes me laugh every single time",
    "How you call me 'chutiya insaan' with genuine affection, your nose scrunching up as you try to stay mad but end up smiling",
    "The way you bit your lip before our first kiss in that office washroom, nervous and excited all at once",
    "Your laugh—unguarded, genuine, loud, the most beautiful sound I know, especially when you laugh at your own jokes",
    "How you steal my hoodies and claim they're 'ours' now, parading around in them like you've won a prize",
    "The way you fit perfectly against me when we're tangled in your Nagpur bed, like we were designed for this exact geometry",
    "Your strength wrapped in softness—calling me out when I'm wrong but comforting me when I need it",
    "The WhatsApp confessions at 2 AM where we shared our darkest fantasies, trusting each other completely",
    "How you demanded attention when I'm on my phone, climbing into my lap until I give in (and I always do)",
    "Your competitive side—'I bet I can make you lose control first'—and you always win",
    "The way you whispered 'don't stop' against my ear that first night in Hyderabad, driving me absolutely wild",
    "How your body remembers mine even before we touch, arching toward me in anticipation",
    "Your sleepy voice at 3 AM saying 'come closer' and pulling me into your warmth, refusing to let go",
    "The concentrated face you make when you're on top, focused and gorgeous and completely in control",
    "How you pushed me onto the bed that one Hyderabad night and took what you wanted—confidence is so damn sexy on you",
    "The way you look at me when you want me—that half-lidded gaze that needs no words",
    "Your random dance moves when you're happy and think I'm not watching (but I always am)",
    "How you fight sleep just to talk to me a little longer on our video calls, your eyes heavy but refusing to close",
    "The baby voice you use when you want something, weaponizing cuteness because you know I'm powerless against it",
    "Your flirty side—those suggestive comments dropped casually in conversation that make my pulse race",
    "The way you bite your lip when you're trying not to smile after I say something dirty",
    "How you grabbed my face during that parking lot kiss on your last office day, not caring who might see",
    "Your 'I'm touching myself thinking about you' texts at 1 AM that made me lose my entire mind",
    "The scratch marks you left on my back that intense Nagpur night—I wore them like badges of honor",
    "How you shiver when I kiss that spot on your neck, the one that makes you forget to breathe",
    "The way you say my name when you're on the edge—'Moiz'—desperate and beautiful",
    "Your inability to whisper—your 'quiet voice' is louder than most people's normal voice and I love it",
    "How you get genuinely excited about small things—food, memes, random shower thoughts you text me at 3 PM",
    "The way you save memes specifically to send to me, creating our own language of inside jokes",
    "Your boss mode when you're handling business—confident, decisive, unstoppable, incredibly attractive",
    "How you describe food cravings with such passion it sounds sensual, your eyes lighting up talking about what you want to eat",
    "The way you cuddle after we make love—all soft and clingy, completely different from moments before",
    "Your random thoughts texted out of nowhere—conspiracy theories about pigeons, weird dreams, philosophical musings",
    "How you challenged me with 'Make me forget my own name' and we spent hours trying (successfully)",
    "The way you pull the covers over us and create our own world where nothing else exists",
    "Your loyalty—the way you stood by me even when distance made things hard",
    "How you comforted me without trying when you left the office and I cried, just being there for me",
    "The stolen corridor kisses at work, pressed against the wall, hearts racing, almost getting caught",
    "Your late-night conversations that go from deep philosophy to absolute nonsense in seconds",
    "How you make ordinary moments sacred—lunch dates, car rides, just existing together",
    "The way you remember small things I mentioned once, storing them like precious secrets",
    "Your ambition and drive—watching you chase your dreams with relentless focus inspires me",
    "How you look in the morning light—hair messy, lips still swollen from the night before, eyes satisfied",
    "The way you demand to be the center of attention like a cat when I'm busy, and honestly, you deserve to be",
    "Your forgiveness when I mess up, the grace you extend even when I don't deserve it",
    "How our lunch dates evolved from awkward work talk to planning our next hotel room escapade",
    "The trust you showed sharing your body with me that first time—vulnerable, beautiful, completely open",
    "Your satisfied smile after, the one that says 'I won' because you absolutely did",
    "How you make me want to build a future, plan tomorrows, dream of forevers—something I never wanted before you",
    "The way you've changed me—softened my edges, made me braver, taught me what it means to truly love someone",
    "Your resilience through our long-distance phase, fighting for us even when it was hard",
    "How every text from you, no matter how simple, makes my heart skip a beat",
    "The vulnerability in your voice when you tell me you need me, trusting me with that admission",
    "Your independence—strong enough to stand alone but choosing to stand with me",
    "How you make love feel less like a word and more like an action we perform every single day",
    "The way you understood my tears when you left the office, holding me without judgment",
    "Your passion for everything you do—work, hobbies, us—you give everything 100%",
    "How you turned a Lonavala fight into the greatest love story I've ever known",
    "The promises we make in the dark, whispered against skin, sacred and ours alone",
    "Your honesty, even when the truth is uncomfortable—you never let me live in illusions",
    "How you make every day with you feel like a gift I don't quite deserve but will cherish anyway",
    "The way you walked back into my arms every Nagpur weekend like you'd been holding your breath until that moment",
    "Your courage to share your fantasies with me over WhatsApp, opening up in ways you'd never done before",
    "How you look at me right after we make love—vulnerable, satisfied, and somehow still hungry for more",
    "The inside jokes about that washroom kiss, our secret smiles when we pass bathrooms now",
    "Your kindness even when you're hurting, the way you protect the people you love fiercely",
    "How you make me feel seen, truly seen, in ways no one else ever has or ever will",
    "The adventures we create together—Hyderabad escapes, Nagpur weekends, turning mundane into magical",
    "Your determination to make this work despite the distance, the obstacles, everything",
    "The way you arch into me when we kiss, like you're trying to get closer than physics allows",
    "The excitement in your eyes when I handed you that black lace lingerie gift—pure joy and anticipation",
    "How you said 'I love it' with such genuine happiness that my heart melted right there",
    "Your promise to wear it for me, the way you whispered it like a secret vow between us",
    "That moment you stepped out of the bathroom wearing the black lace—time literally stopped, breath caught in my throat",
    "How absolutely stunning you looked in that lingerie—beauty, sexiness, confidence radiating from every inch of you",
    "The way you moved toward me in that lace, knowing exactly the effect you were having, owning your power",
    "Your confidence wearing my gift, the way you let me admire you without shyness, just pure desire between us",
    "How that black lace night became one of our most unforgettable memories, seared into my mind forever",
    "The packages arriving at my door in Hyderabad—shirts and t-shirts you ordered from Nagpur, thinking of me",
    "Your thoughtfulness choosing clothes for me, remembering my sizes, my favorite colors, what styles I like",
    "How you'd ask 'Did it arrive yet?' with such excitement, eager for my reaction to your gift",
    "The way you'd call immediately after I sent photos of me wearing what you sent, your voice full of pride",
    "Your 'that color looks perfect on you' compliments that made me feel seen and cherished across the distance",
    "How shopping for each other became our love language, our way of staying connected despite the miles",
    "The notes you'd include with packages—'For my favorite person'—simple words that meant everything",
    "Your laugh when packages got delayed and I'd complain dramatically about having to wait another day",
    "How you remember that shirt I mentioned wanting weeks ago and surprise me with it out of nowhere",
    "The video call fashion shows you'd demand, making me model everything you sent like a personal runway",
    "Your attention to detail—noticing what I wear often, what makes me comfortable, what makes me feel good",
    "How even simple t-shirts became precious because they came from you, chosen with love, sent with care",
    "The way you get possessive about the clothes you send—'That's MY shirt I sent you, wear it more'",
    "Your pride when I wear your gifts in public, like I'm carrying a piece of you with me everywhere",
    "How shopping online together on video calls became our date night, arguing about styles and laughing",
    "The surprise packages—the ones I didn't expect, just because you saw something and thought of me",
    "Your generosity even when money was tight, always finding ways to send me little pieces of joy",
    "How you turned the distance into connection through these gifts, making miles feel like nothing",
    "Simply this: you are home, Falguni, and I've been searching for you my whole life without knowing it",
    "Because loving you is the easiest thing I've ever done, and being loved by you is the greatest gift I've ever received"
  ]

  const showRandom = () => {
    const random = reasons[Math.floor(Math.random() * reasons.length)]
    setRandomReason(random)
  }

  return (
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Heart size={14} className="text-rose-400" fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Infinite Reasons</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Why I Love You
          </h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={showRandom}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold tracking-wide transition-all hover:scale-105 shadow-lg shadow-rose-900/40"
            >
              <Shuffle size={16} />
              Surprise Me
            </button>
          </div>
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-32 border-t border-white/10 pt-16 text-center">
          <p className="font-serif italic text-2xl text-white/80 mb-4">
            "And a million more reasons I discover every day."
          </p>
          <p className="text-xs uppercase tracking-widest text-white/40">
            {reasons.length} Reasons Listed • ∞ To Go
          </p>
        </div>

      </div>

      {/* RANDOM REASON MODAL */}
      <AnimatePresence>
        {randomReason && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRandomReason(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-[#0a0a0a] border border-rose-500/30 p-10 rounded-2xl max-w-2xl text-center relative shadow-[0_0_50px_rgba(225,29,72,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Sparkles className="absolute top-6 right-6 text-rose-500" />
              <Quote className="mx-auto text-white/20 mb-6" size={48} />
              <h3 className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-8">
                "{randomReason}"
              </h3>
              <button
                onClick={showRandom}
                className="text-xs font-bold uppercase tracking-widest text-rose-400 hover:text-white transition-colors"
              >
                Show Another
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

// --- SUB-COMPONENT: REASON CARD ---
const ReasonCard = ({ reason, index }) => {
  const isHighlight = index % 7 === 0; // Highlight every 7th card

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ delay: Math.random() * 0.3, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative break-inside-avoid rounded-2xl p-6 border transition-all duration-300 group
        ${isHighlight
          ? 'bg-rose-900/10 border-rose-500/30'
          : 'bg-white/5 border-white/10 hover:border-white/20'
        }
      `}
    >
      <div className="flex items-start justify-between mb-4 opacity-50">
        <span className="text-[10px] font-bold font-mono">#{String(index + 1).padStart(3, '0')}</span>
        {isHighlight && <Heart size={12} className="text-rose-400" fill="currentColor" />}
      </div>

      <p className={`font-serif leading-relaxed ${isHighlight ? 'text-lg text-white' : 'text-sm text-white/80'}`}>
        {reason}
      </p>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
    </motion.div>
  )
}

export default Reasons

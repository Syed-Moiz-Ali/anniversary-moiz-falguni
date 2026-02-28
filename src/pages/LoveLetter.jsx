import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Feather, Heart } from 'lucide-react'

// ─── LETTER CONTENT — FROM loveMasterData.json ────────────────────────────────
// Sources: loveLetter.letterBlocks + ourStory.chapters + journey.timeline
// + insideWorld.secrets + reasons[98,99] + aboutFalguni.coreTraits

const LETTER_BLOCKS = [
  {
    type: 'salutation',
    text: 'My Dearest Falguni,',
  },
  {
    type: 'body',
    text: "Six months. Half a year. 196 days since Lonavala. It sounds impossibly small when I say it out loud, but it feels like lifetimes when I'm lying next to you in the dark, your breathing synced with mine. How do I compress everything you've become to me into words that don't feel impossibly small?",
  },
  {
    type: 'body',
    text: "I remember Lonavala. The truth and dare game. The misunderstanding. That fight. I remember being so frustrated — having no idea that the girl confronting me with fire in her eyes would become the only voice I ever want whispering my name. We started talking to clear the air, and somehow, we never stopped.",
  },
  {
    type: 'highlight',
    label: 'The First Risk',
    text: "I remember our first kiss. The washroom. The recklessness of it — planned over WhatsApp the night before, executed with our hearts hammering. The way your lips tasted like a question I'd been dying to answer. Your hands gripping me like you were claiming something always meant to be yours. I didn't know then that every kiss after would feel like falling.",
  },
  {
    type: 'body',
    text: "Then came the first hotel. We didn't rush. We explored, discovered, learned the language of each other's bodies for hours. You were nervous and certain at the same time — that contradiction is one of my favorite things about you.",
  },
  {
    type: 'highlight',
    label: 'Hyderabad Nights',
    text: "Then Hyderabad happened. That first night when all the fantasies we'd whispered became real — hotel rooms turning into sacred spaces. It wasn't just physical. It was emotional, intense, unforgettable. The morning light on your face on that hotel pillow. That image belongs in my memory forever.",
  },
  {
    type: 'highlight',
    label: 'Black Lace',
    text: "And then that last Hyderabad hotel — when you stepped out of the bathroom wearing that black lace set. Falguni, time stopped. I couldn't speak. Beauty, sexiness, and confidence radiating from every inch of you. That night became one of the most powerful memories of our entire story. Seared into my mind. Permanent.",
  },
  {
    type: 'body',
    text: "Then you left the office. I cried — losing daily access to you felt like losing oxygen. But Nagpur became ours. Reunions after weeks apart felt electric. Every knock on your door felt like returning to where I truly belonged. Nagpur taught me that home isn't a place. It's wherever you are.",
  },
  {
    type: 'body',
    text: "I love how shopping for each other became our love language. You choosing shirts for me from Nagpur, the excitement in your voice asking 'Did it arrive yet?' The notes you'd include — 'For my favorite person' — that turned ordinary packages into love letters across cities.",
  },
  {
    type: 'highlight',
    label: 'What You Are to Me',
    text: "You've rewritten my body's language, Falguni. My hands know the curve of your waist better than they know anything else. When we're apart, I feel the absence of you like a physical ache — like something vital has been removed. You are not just someone I love. You are home. And I've been searching for you my whole life without knowing it.",
  },
  {
    type: 'body',
    text: "I love your 'Bhai saab' tease. Your baby voice when you want something. The way you call me chutiya insaan with genuine affection, your nose scrunching up as you try to stay mad but end up smiling. I love that you're not just my girlfriend — you're my best friend, my favorite conversation, my safest place.",
  },
  {
    type: 'body',
    text: "If I had to do it all over again — every risky kiss, every desperate touch, every package sent across cities, every tear when we said goodbye — I would choose you every single time. In every universe, I'd find you. I'd fight with you. I'd fall for you. Because loving you is the easiest thing I've ever done, and being loved by you is the greatest gift I've ever received.",
  },
  {
    type: 'signature',
    text: 'Forever yours, in body and soul,',
  },
  {
    type: 'name',
    text: 'Moiz',
  },
]

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="min-h-screen bg-[#060608] text-white relative overflow-hidden flex flex-col items-center">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-rose-900/8 rounded-full blur-[180px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[150px]" />
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* ── Sealed Envelope ── */
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
            transition={{ duration: 0.9 }}
            className="h-screen w-full flex flex-col items-center justify-center relative z-20"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex flex-col items-center"
            >
              {/* Envelope */}
              <div className="relative w-72 h-52">
                {/* Body */}
                <div className="absolute inset-0 bg-[#0e0e10] border border-white/8 rounded-xl shadow-2xl overflow-hidden">
                  {/* Envelope lining */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                  {/* Envelope V-fold lines */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="50%" y2="55%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="50%" y2="55%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <line x1="0" y1="100%" x2="50%" y2="55%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <line x1="100%" y1="100%" x2="50%" y2="55%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  </svg>
                </div>

                {/* Wax Seal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-rose-700 border-4 border-rose-900 flex items-center justify-center shadow-[0_0_40px_rgba(225,29,72,0.4)] group-hover:shadow-[0_0_60px_rgba(225,29,72,0.6)] transition-shadow duration-500"
                  >
                    <Heart fill="currentColor" size={20} className="text-rose-200/80" />
                  </motion.div>
                </div>

                {/* Stamp top-right */}
                <div className="absolute top-3 right-3 w-9 h-11 border border-white/8 rounded-sm bg-white/[0.02] flex items-center justify-center">
                  <Heart size={10} className="text-white/10" fill="currentColor" />
                </div>
              </div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center"
              >
                <p className="font-serif text-2xl italic text-white/60 mb-3 group-hover:text-white/80 transition-colors duration-500">
                  For Falguni
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-px bg-white/10" />
                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 group-hover:text-white/40 transition-colors duration-300">
                    Tap to Break Seal
                  </p>
                  <div className="w-8 h-px bg-white/10" />
                </div>
              </motion.div>
            </motion.button>
          </motion.div>

        ) : (
          /* ── Open Letter ── */
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full max-w-2xl px-6 py-32 relative z-10"
          >
            {/* Feather Icon */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.02] mb-6">
                <Feather size={11} className="text-rose-400/60" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">A Letter</span>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
            </motion.div>

            {/* Letter Body */}
            <div className="space-y-10">
              {LETTER_BLOCKS.map((block, index) => (
                <LetterBlock key={index} block={block} index={index} />
              ))}
            </div>

            {/* P.S. Note — sticky paper aesthetic */}
            <motion.div
              initial={{ opacity: 0, rotate: -1.5, y: 24 }}
              whileInView={{ opacity: 1, rotate: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="mt-24 max-w-md mx-auto"
            >
              <div className="relative p-7 rounded-sm shadow-2xl bg-[#fdf8ec] text-[#2a1a0e] transform rotate-1">
                {/* Tape strip top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-yellow-100/60 rounded-sm border border-yellow-200/40 blur-[0.5px]" />
                {/* Paper lines */}
                <div className="absolute inset-0 overflow-hidden rounded-sm opacity-20">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-full h-px bg-blue-200/40" style={{ marginTop: `${(i + 1) * 22}px` }} />
                  ))}
                </div>
                <div className="relative z-10 font-serif leading-relaxed text-sm">
                  <span className="font-bold text-rose-700 text-base mr-1">P.S.</span>
                  I still think about that washroom kiss every single day. I still get butterflies when I see your name on my phone.
                  And I still fall for you a little more every time you call me{' '}
                  <em className="font-bold">"chutiya insaan"</em>{' '}
                  with that nose-scrunch smile you can never quite hide.
                </div>
                <p className="relative z-10 font-serif italic text-xs text-rose-700/60 mt-4 text-right">
                  — always, M
                </p>
              </div>
            </motion.div>

            {/* End marker */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-28 text-center"
            >
              <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto mb-5" />
              <Heart size={12} fill="currentColor" className="text-rose-500/30 mx-auto mb-3" />
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/15">End of Letter</p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// ─── LETTER BLOCK ─────────────────────────────────────────────────────────────
const LetterBlock = ({ block, index }) => {
  const isHighlight  = block.type === 'highlight'
  const isSignature  = block.type === 'signature'
  const isName       = block.type === 'name'
  const isSalutation = block.type === 'salutation'
  const isBody       = block.type === 'body'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 1, delay: Math.min(index * 0.04, 0.3) }}
      className={`relative ${isHighlight ? 'pl-5 md:pl-7' : ''}`}
    >
      {/* Highlight left accent */}
      {isHighlight && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-500/40 to-transparent" />
          {block.label && (
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-rose-400/40 mb-2">
              {block.label}
            </p>
          )}
        </>
      )}

      <p className={`font-serif leading-loose tracking-wide ${
        isSalutation ? 'text-3xl md:text-4xl text-white/85 italic mb-4'
        : isName      ? 'text-4xl md:text-5xl text-rose-400/80 mt-2'
        : isSignature ? 'text-base text-white/40 italic mt-10'
        : isHighlight ? 'text-base md:text-lg text-white/80 italic'
        :               'text-sm md:text-base text-white/50'
      }`}>
        {block.text}
      </p>
    </motion.div>
  )
}

export default LoveLetter

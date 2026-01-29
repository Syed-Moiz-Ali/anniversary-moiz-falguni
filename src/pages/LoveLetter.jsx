import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Feather, Heart, X, Scroll, Stamp } from 'lucide-react';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // --- CONTENT CONFIG ---
  const letterContent = [
    { type: 'salutation', text: "My Dearest Falguni," },
    { type: 'body', text: "Six months. Half a year. 196 days since Lonavala. It sounds so small when I say it out loud, but it feels like lifetimes when I'm lying next to you in the dark, your breathing synced with mine. How do I compress everything you've become to me into words that don't feel impossibly small?" },
    { type: 'body', text: "I remember Lonavala. The truth and dare game, the misunderstanding, that stupid fight. I remember being so frustrated, having no idea that the girl yelling at me would become the only voice I ever want to hear whispering my name. We started talking to clear the air, and somehow, we never stopped." },
    { type: 'highlight', text: "I remember our first kiss. The washroom. The recklessness of it. The way your lips tasted like a question I'd been dying to answer. Your hands in my hair, my hands on your waist, both of us breathing hard. I didn't know then that every kiss after would feel like falling." },
    { type: 'body', text: "Then Hyderabad happened. That first night when we finally made love—all the fantasies we'd whispered about became real. You in my arms, your body arching into mine. Those hotel rooms became our sanctuary, altars where we worshipped each other in whispers and sighs." },
    { type: 'highlight', text: "And then that last Hyderabad hotel—when you stepped out of the bathroom wearing that black lace set. Falguni, time stopped. You looked absolutely stunning. The lace against your skin, the confidence... You were the most beautiful thing I'd ever seen. That night is burned into my memory forever." },
    { type: 'body', text: "Then you left the office, and my days felt empty. But Nagpur became ours. Your city, hotel room, hotel bed—our secret world. The distance made every reunion explosive. I'd walk through your door and we'd barely say hello before we were on each other. Nagpur taught me that home isn't a place—it's wherever you are." },
    { type: 'body', text: "I love how shopping for each other became our love language. Me browsing online late at night. You choosing shirts for me from Nagpur. The excitement in your voice asking 'Did it arrive yet?' The notes you'd include—'For my favorite person'—that turned ordinary packages into love letters." },
    { type: 'highlight', text: "You've rewritten my body's language, Falguni. My hands know the curve of your waist better than they know anything else. When we're apart, I feel the absence of you like a physical ache—like something vital has been removed." },
    { type: 'body', text: "I love your 'Bhai saab' tease, your baby voice when you want something, and the way you demand attention when I'm busy. I love that you're not just my girlfriend; you're my best friend, my favorite conversation, my safest place." },
    { type: 'body', text: "If I had to do it all over again—every risky kiss, every desperate touch, every package sent across cities, every tear when we had to say goodbye—I would choose you every single time. In every universe, I'd find you. I'd fight with you. I'd fall for you. I'd choose you." },
    { type: 'signature', text: "Forever yours, in body and soul," },
    { type: 'name', text: "Moiz" }
  ];

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center">

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-rose-900/10 rounded-full blur-[150px]" />
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* --- THE SEALED ENVELOPE (Start Screen) --- */
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="h-screen w-full flex flex-col items-center justify-center relative z-20"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="w-64 h-48 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Envelope Flap Effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent clip-path-triangle" />

                {/* The Wax Seal */}
                <div className="w-16 h-16 rounded-full bg-rose-600 shadow-[0_0_30px_rgba(225,29,72,0.6)] flex items-center justify-center border-4 border-rose-800 group-hover:bg-rose-500 transition-colors">
                  <Heart fill="currentColor" size={24} className="text-rose-900" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="font-serif text-2xl italic text-white/80 mb-2">For Falguni</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 animate-pulse">Tap to Break Seal</p>
              </div>
            </motion.button>
          </motion.div>
        ) : (
          /* --- THE OPEN LETTER --- */
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-3xl px-6 py-32 relative z-10"
          >
            {/* Header Icon */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-16"
            >
              <Feather className="mx-auto text-rose-400 mb-6" size={32} />
            </motion.div>

            {/* Letter Content */}
            <div className="space-y-12">
              {letterContent.map((block, index) => (
                <LetterBlock key={index} block={block} index={index} />
              ))}
            </div>

            {/* The P.S. Note */}
            <motion.div
              initial={{ opacity: 0, rotate: -1, y: 20 }}
              whileInView={{ opacity: 1, rotate: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24 p-8 bg-[#fffbf0] text-black rounded-sm shadow-xl relative max-w-xl mx-auto transform rotate-1"
            >
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none" />

              <div className="relative z-10 font-serif leading-relaxed">
                <span className="font-bold text-rose-800 text-xl mr-2">P.S.</span>
                I still think about that washroom kiss every single day. I still get butterflies when I see your name on my phone.
                And I still fall for you a little more every time you call me <span className="italic font-bold">"chutiya insaan"</span> with that smile.
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-500/20 blur-xl" />
            </motion.div>

            {/* Return/Close Button */}
            <motion.div className="mt-32 text-center">
              <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto mb-4" />
              <p className="text-[10px] uppercase tracking-widest text-white/30">End of Letter</p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// --- SUB-COMPONENT: LETTER BLOCK ---
const LetterBlock = ({ block, index }) => {
  const isHighlight = block.type === 'highlight';
  const isSignature = block.type === 'signature';
  const isName = block.type === 'name';
  const isSalutation = block.type === 'salutation';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: index * 0.05 }}
      className={`relative ${isHighlight ? 'py-4' : ''}`}
    >
      {/* Highlight Decoration */}
      {isHighlight && (
        <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-rose-500 to-transparent opacity-50" />
      )}

      <p className={`
        font-serif leading-loose tracking-wide
        ${isSalutation ? 'text-3xl md:text-4xl text-white mb-12 italic' : ''}
        ${isName ? 'text-4xl md:text-5xl text-rose-400 mt-4 signature-font' : ''}
        ${isSignature ? 'text-xl text-white/60 italic mt-12' : ''}
        ${isHighlight ? 'text-lg md:text-xl text-white/90 italic' : 'text-base md:text-lg text-white/70'}
      `}>
        {block.text}
      </p>
    </motion.div>
  );
};

export default LoveLetter;

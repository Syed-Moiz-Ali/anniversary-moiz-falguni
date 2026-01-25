import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AboutFalguni = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 }) // Changed from 0.3 to 0.1

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
    {
      emoji: "🗣️",
      title: "Her 'Bhai Saab' Moments",
      description: "The way she calls me 'Bhai saab' when she's being dramatic or sarcastic—it's both hilarious and adorable. That mock-serious tone makes me laugh every single time, even when she's actually annoyed with me."
    },
    {
      emoji: "😤",
      title: "When She Calls Me 'Chutiya insaan'",
      description: "Her favorite insult, delivered with a mix of affection and genuine frustration. The way her nose scrunches up when she says it, trying to be mad but failing because she's smiling—that's my favorite version of her."
    },
    {
      emoji: "🎭",
      title: "The Playful Banter",
      description: "Our conversations are a battlefield of wit and sarcasm. She roasts me better than anyone, and I love every second of it. The teasing, the comebacks, the way we go from arguing to laughing in seconds—it's our language."
    },
    {
      emoji: "🥺",
      title: "Her Cute Angry Face",
      description: "When she pouts and tries to look angry but ends up looking like the cutest thing I've ever seen. Her cheeks puff up slightly, her eyes narrow, and I can't help but pull her close and kiss that fake anger away."
    },
    {
      emoji: "💕",
      title: "The Baby Voice",
      description: "That soft, sweet voice she uses when she wants something or when she's being extra affectionate. It's my kryptonite. She knows it. She weaponizes it. And I surrender every single time without question."
    },
    {
      emoji: "😏",
      title: "Her Flirty Side",
      description: "The way she teases me with that knowing smile, the suggestive comments dropped so casually in conversation that make my pulse race. She's dangerously good at making me lose my composure with just words."
    },
    {
      emoji: "🌙",
      title: "Late Night Talks",
      description: "Our 2 AM conversations that drift from deep philosophical debates to absolute nonsense. Her sleepy voice, the random tangents, the way she fights sleep just to talk to me a little longer—those moments are pure magic."
    },
    {
      emoji: "🎮",
      title: "Competitive Falguni",
      description: "Whether it's a game, an argument, or who can make the other laugh first—she plays to win. That competitive fire in her eyes, the trash talk, the victory dance when she beats me—she's insufferably adorable."
    },
    {
      emoji: "🍜",
      title: "Food Lover",
      description: "The way her eyes light up when she talks about food, how she describes what she's craving with such passion it sounds sensual. Watching her enjoy her favorite meal is like watching art come alive."
    },
    {
      emoji: "💭",
      title: "Her Random Thoughts",
      description: "She'll text me the most random observations at 3 PM on a Tuesday—shower thoughts, weird dreams, conspiracy theories about pigeons. Her mind is a beautiful, chaotic place I never want to leave."
    },
    {
      emoji: "😴",
      title: "Sleepy Falguni",
      description: "When she's half-asleep and clingy, mumbling nonsense and refusing to let go. Her defenses are down, she's purely soft and vulnerable, and those are the moments I feel most trusted and needed."
    },
    {
      emoji: "👑",
      title: "Boss Mode",
      description: "When she's in work mode or handling business—confident, decisive, unstoppable. That commanding presence, the way she takes charge and gets shit done—it's incredibly attractive watching her own her power."
    }
  ]

  const personalTraits = [
    "The way she laughs at her own jokes before even finishing them",
    "How she steals my hoodies and claims they're 'ours' now",
    "Her random dance moves when she's happy and thinks I'm not watching",
    "The concentrated face she makes when applying makeup",
    "How she demands attention when I'm busy, like a cat",
    "Her inability to whisper—her 'quiet voice' is louder than most people's normal voice",
    "The way she gets genuinely excited about small things",
    "How she saves memes specifically to send to me at 3 AM"
  ]

  return (
    <section className="min-h-screen section-padding pt-32" ref={ref}>
      <div className="container-custom max-w-4xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }} // Always animate, removed isInView check
          transition={{ duration: 1.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-cinzel font-normal tracking-ultra mb-6 text-near-white">
            Falguni
          </h2>
          <p className="text-soft-purple opacity-80 font-cinzel italic text-lg md:text-xl tracking-wide">
            The woman who rewrote my definition of everything
          </p>
        </motion.div>

        {/* Main Description Cards */}
        <div className="flex flex-col gap-16 md:gap-20 mb-32">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="glass-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }} // Changed from animate + isInView to whileInView
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.8,
                delay: index * 0.2,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
            >
              <h3 className="text-2xl md:text-3xl font-cinzel tracking-widest mb-6 text-soft-purple">
                {card.title}
              </h3>
              <p className="text-base md:text-lg leading-extra-loose tracking-wide text-near-white opacity-85">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What Makes Her HER Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h3 className="text-3xl md:text-4xl font-cinzel tracking-ultra text-center mb-16 text-muted-magenta">
            What Makes Her HER
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {quirks.map((quirk, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.08]
                         rounded-sm p-8 hover:bg-white/[0.04] hover:border-muted-magenta/20
                         transition-all duration-700 cursor-default
                         hover:shadow-[0_0_20px_rgba(192,132,252,0.08)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.6, 0.05, 0.01, 0.9]
                }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {quirk.emoji}
                </div>
                <h4 className="text-lg md:text-xl font-cinzel tracking-wider mb-3 text-near-white">
                  {quirk.title}
                </h4>
                <p className="text-sm md:text-base leading-relaxed tracking-wide text-near-white opacity-75
                            group-hover:opacity-90 transition-colors duration-500">
                  {quirk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Little Things I Love */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h3 className="text-3xl md:text-4xl font-cinzel tracking-ultra text-center mb-12 text-near-white">
            The Little Things
          </h3>
          <p className="text-center text-soft-purple opacity-70 text-sm tracking-wider mb-12 font-cinzel italic">
            All the tiny details that make me fall harder every day
          </p>

          <div className="space-y-4">
            {personalTraits.map((trait, index) => (
              <motion.div
                key={index}
                className="group flex items-start gap-4 p-5 md:p-6
                         bg-white/[0.01] border border-white/[0.05] rounded-sm
                         hover:bg-white/[0.03] hover:border-muted-magenta/15
                         transition-all duration-500"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.6, 0.05, 0.01, 0.9]
                }}
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-muted-magenta opacity-40
                              group-hover:bg-muted-magenta group-hover:opacity-100 group-hover:scale-125
                              transition-all duration-500" />
                <p className="text-base md:text-lg font-cinzel italic leading-relaxed tracking-wide
                            text-near-white opacity-80 group-hover:opacity-100
                            transition-colors duration-500">
                  {trait}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Note */}
        <motion.div
          className="text-center glass-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div className="mb-6 animate-heartbeat inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                className="fill-muted-magenta"
              />
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-cinzel italic leading-ultra-loose tracking-wide
                       text-near-white opacity-90 max-w-2xl mx-auto">
            "She's chaos and calm, fire and softness, my biggest distraction and my only focus.
            Falguni isn't just the love of my life—she's the life in my love."
          </p>
          <p className="mt-8 text-sm text-muted-magenta opacity-70 tracking-widest font-inter uppercase">
            — Moiz, forever yours
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutFalguni

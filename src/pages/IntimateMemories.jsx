import React from 'react'
import { motion } from 'framer-motion'

const IntimateMemories = () => {
  const memories = [
    "The way you bit your lip before you kissed me in that office washroom—nervous and excited all at once",
    "Your hands tracing fire down my spine in the Hyderabad hotel, discovering every spot that made me shiver",
    "That night you whispered my name like a prayer, over and over, until it was the only word that mattered",
    "The urgent press of your body against mine in the washroom—our first kiss, reckless and perfect",
    "Your eyes, half-closed, lost in the rhythm we created together in that Nagpur bedroom",
    "The taste of you still lingering on my lips hours later, making me crave more",
    "How you shiver when I kiss that spot on your neck, the one that makes you forget to breathe",
    "Your breathless laugh when we finally stopped to catch our breath after round three",
    "The way you pull me closer, wrapping your legs around me like you can't get enough",
    "Your skin, warm and electric beneath my fingertips, responding to every touch",
    "That Nagpur morning when we forgot the world existed—just us, tangled in sheets, not wanting to move",
    "The hunger in your kiss when we'd been apart too long, weeks of need exploding the moment our lips met",
    "Your fingers tangled in my hair, pulling me deeper into the kiss, controlling the pace",
    "The sound you make when I find that perfect spot—half gasp, half moan, completely intoxicating",
    "How your body remembers mine even before we touch, arching toward me in anticipation",
    "The way you say my name when you're on the edge, desperate and beautiful",
    "Your 'Bhai saab' tease right before you kiss me, that playful smile I can never resist",
    "How you steal my shirt after and parade around in it, claiming it's 'ours' now",
    "The concentrated face you make when you're on top, focused and gorgeous",
    "That time in the hotel when you pushed me onto the bed and took complete control",
    "Your sleepy voice at 2 AM saying 'come closer' and pulling me into your warmth",
    "The way you demand attention when I'm on my phone, climbing into my lap until I give in",
    "Your competitive side when you said 'I bet I can make you lose control first' and you won",
    "How you look at me right after—vulnerable, satisfied, and somehow still hungry for more",
    "The morning you woke me up with kisses trailing down my chest, refusing to let me sleep",
    "Your hand finding mine under the restaurant table, that secret touch that said 'later'",
    "The way you bite your lip when you're trying not to smile after I say something dirty",
    "That Hyderabad shower where we meant to get clean but ended up even more dirty",
    "Your breathless 'don't stop' whispered against my ear, driving me absolutely wild",
    "How you pull the covers over us and create our own world, just you and me and nothing else",
    "The scratch marks you left on my back that one intense Nagpur night",
    "Your challenge: 'Make me forget my own name' and the hours we spent trying",
    "The way you cuddle after, all soft and clingy, completely different from moments before",
    "Your midnight texts: 'I'm touching myself thinking about you' that made me lose my mind",
    "How you look in the morning light—hair messy, lips swollen, eyes still heavy with sleep and satisfaction",
    "That time you kissed me in the office parking lot, not caring who might see",
    "Your gasp when I surprised you with that thing you'd only mentioned once in passing",
    "The way you grab my face when you kiss me, like you're claiming me as yours",
    "How we communicate with just looks now—one glance and I know exactly what you want",
    "Your satisfied smile after, the one that says 'I won' because you absolutely did",
    "The moment I handed you the black lace lingerie gift and your eyes lit up with excitement",
    "When you stepped out of the bathroom wearing that black lace set—time literally stopped",
    "How absolutely stunning you looked in that black lingerie—beauty, sexiness, perfection all at once",
    "The confidence radiating from you as you moved toward me in that lace, knowing exactly what you were doing",
    "My heart racing seeing you in the gift I chose, looking even more breathtaking than I'd imagined",
    "The packages arriving at my door in Hyderabad—t-shirts and shirts you ordered from Nagpur",
    "Sending you photos of me wearing the clothes you sent, just to hear your voice on the call immediately after",
    "Your voice saying 'that color looks perfect on you' when I modeled the shirt you picked",
    "Shopping online together on video call, arguing playfully about which style suits me better",
    "Opening a surprise package from you and finding that shirt I'd mentioned wanting weeks ago",
    "How you remember my sizes, my favorite colors, what styles I like—paying attention to every detail",
    "The excitement in your voice when you'd ask 'Did it arrive yet?' waiting for my reaction",
    "Wearing your gifts and feeling connected to you even when we're cities apart",
    "That video call where you made me do a full fashion show of everything you'd sent",
    "How shopping for each other became our love language across the distance",
    "Your laugh when the package arrived on the wrong day and I had to wait another 24 hours",
    "The notes you'd ask them to include: 'For my favorite person' that made my whole day",
    "How even simple t-shirts became precious because they came from you, chosen by you, sent with love"
  ]

  return (
    <section className="min-h-screen section-padding pt-32 pb-20">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-12 text-near-white">
            Intimate Memories
          </h2>
          <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-8">
            Moments that live rent-free in my mind
          </p>
          <p className="text-center text-near-white opacity-50 text-sm mb-24 tracking-wider">
            Hover to reveal each memory • {memories.length} unforgettable moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-24">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              className="group bg-white/[0.01] border border-white/5 rounded-sm p-8 md:p-9
                         opacity-40 hover:opacity-100
                         hover:bg-white/[0.02] hover:border-muted-magenta/20
                         hover:shadow-[0_0_20px_rgba(192,132,252,0.12)]
                         hover:-translate-y-2
                         transition-all duration-700 ease-out cursor-default
                         relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.02,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted-magenta/5 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Memory number */}
              <div className="absolute top-3 right-3 text-xs font-inter tracking-widest text-muted-magenta/30
                            group-hover:text-muted-magenta/60 transition-colors duration-500">
                #{String(index + 1).padStart(2, '0')}
              </div>

              {/* Memory text */}
              <p className="relative font-cinzel italic text-sm md:text-base leading-relaxed tracking-wide
                          text-near-white pt-2">
                {memory}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-muted-magenta
                            group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="glass-card py-6">
            <div className="text-3xl md:text-4xl font-cinzel text-muted-magenta mb-2">
              {memories.length}
            </div>
            <div className="text-xs text-soft-purple opacity-70 tracking-wider uppercase">
              Memories
            </div>
          </div>
          <div className="glass-card py-6">
            <div className="text-3xl md:text-4xl font-cinzel text-muted-magenta mb-2">
              ∞
            </div>
            <div className="text-xs text-soft-purple opacity-70 tracking-wider uppercase">
              More to Come
            </div>
          </div>
          <div className="glass-card py-6">
            <div className="text-3xl md:text-4xl font-cinzel text-muted-magenta mb-2">
              2
            </div>
            <div className="text-xs text-soft-purple opacity-70 tracking-wider uppercase">
              Cities Apart
            </div>
          </div>
          <div className="glass-card py-6">
            <div className="text-3xl md:text-4xl font-cinzel text-muted-magenta mb-2">
              1
            </div>
            <div className="text-xs text-soft-purple opacity-70 tracking-wider uppercase">
              Perfect Match
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-24 text-center glass-card"
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
          <p className="text-xl md:text-2xl font-cinzel italic leading-loose tracking-wide
                       text-near-white opacity-90 max-w-3xl mx-auto">
            "Every moment with you is etched into my memory. The big ones, the small ones,
            the rushed ones, the slow ones, the gifts, the surprises, the black lace moments—they're all mine to keep, ours to remember.
            This is just the beginning of a lifetime of memories I want to make with you."
          </p>
          <p className="mt-6 text-sm text-muted-magenta opacity-70 tracking-widest font-inter uppercase">
            — Forever collecting moments with you, Falguni
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default IntimateMemories

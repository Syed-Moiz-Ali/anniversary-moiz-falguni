import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Future = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-muted-magenta/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-soft-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Sunset Gradient - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64
                      bg-gradient-to-t from-muted-magenta/10 via-muted-magenta/5 to-transparent
                      pointer-events-none">
      </div>

      <div className="container-custom relative z-10 max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          {/* Title */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-cinzel tracking-ultra mb-12 text-near-white"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 1.8 }}
          >
            Our Future
          </motion.h2>

          <motion.p
            className="text-soft-purple opacity-70 font-cinzel italic text-lg mb-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            The life I want to build with you, one beautiful day at a time
          </motion.p>

          {/* Future Visions */}
          <motion.div
            className="space-y-12 md:space-y-16 text-left md:text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 1.8 }}
          >
            <p className="font-cinzel italic text-xl md:text-2xl leading-relaxed md:leading-loose tracking-wide text-near-white opacity-90">
              Six months is just the beginning, Falguni. This is the opening chapter of a story I want to write for the rest of my life.
            </p>

            <div className="h-px w-32 bg-muted-magenta/30 mx-auto" />

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              I see us in a thousand tomorrows—mornings waking up tangled in sheets with your head on my chest,
              your sleepy eyes opening and that smile spreading across your face.
              Evenings cooking together while you steal kisses between chopping vegetables,
              arguing about who makes better chai, your 'Bhai saab' when I burn the toast.
            </p>

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              I see lazy Sunday afternoons where we don't leave bed,
              your random dance moves in the kitchen at 2 PM,
              late nights where we talk until our words turn into whispers turn into touch turn into making love until dawn.
            </p>

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              I see us traveling together—new cities, new hotels, new memories.
              You in my hoodie on a flight, your head on my shoulder.
              Exploring streets hand in hand, finding hidden cafes,
              making every place we visit ours with inside jokes and stolen kisses.
            </p>

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              I see us building something bigger than just us—a home that smells like your perfume and my cologne mixed together,
              walls covered with photos from Lonavala, Hyderabad, Nagpur, and everywhere we'll go next.
              A life that feels like an adventure we're writing together, not following anyone else's script.
            </p>

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              I see fights where you call me 'chutiya insaan' and I call you dramatic,
              but we always end up laughing because we can't stay mad at each other.
              I see makeups that involve you climbing into my lap and demanding kisses until I surrender.
            </p>

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              I see us achieving our dreams together—celebrating your victories like they're mine,
              supporting each other through the hard days, being each other's biggest cheerleaders.
              Your ambition inspires me, and I want to be the person who reminds you how powerful you are when you forget.
            </p>

            <p className="font-cincel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              I see anniversaries where we reminisce about that Lonavala fight,
              that washroom kiss, that first Hyderabad night, that all-day Nagpur session.
              We'll laugh about how we almost didn't happen because of a misunderstanding,
              and how grateful we are that we fought our way into this love.
            </p>

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              The hunger won't fade. The desire won't dim.
              If anything, knowing you deeper—emotionally, physically, spiritually—will only make me crave you more.
              I'll still look at you across a room and think 'how did I get this lucky?'
            </p>

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              I see nights where we're old and gray, still finishing each other's sentences,
              still making each other laugh, still sneaking touches under the dinner table.
              Because some things—the chemistry, the connection, the us-ness of us—those don't fade with time.
            </p>

            <div className="h-px w-32 bg-muted-magenta/30 mx-auto" />

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              Every day forward is a day I choose you, Falguni.
              Not because I have to, but because choosing you is the easiest decision I make every morning.
              Every night ahead is a night I want to lose myself in you all over again,
              discovering new ways to make you gasp my name.
            </p>

            <p className="font-cinzel italic text-lg md:text-xl leading-relaxed tracking-wide text-near-white opacity-85">
              This website is just a snapshot of six months.
              But I want fifty years of snapshots. A lifetime of stolen moments,
              whispered secrets, explosive reunions, and quiet mornings.
              I want it all, and I want it all with you.
            </p>

            {/* Heart Animation */}
            <div className="pt-12">
              <motion.div
                className="inline-block animate-heartbeat"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 1.2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    className="fill-muted-magenta"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Final Message */}
            <div className="pt-8 space-y-6">
              <p className="text-xl md:text-2xl font-cinzel tracking-ultra text-muted-magenta">
                Here's to forever, my love.
              </p>
              <p className="text-base md:text-lg font-cinzel italic text-soft-purple opacity-70">
                From Lonavala strangers to Hyderabad lovers to Nagpur soulmates to... everything that comes next.
              </p>
              <p className="text-sm font-inter tracking-widest uppercase text-near-white opacity-50">
                Always choosing you,<br />Moiz
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              className="fill-muted-magenta"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-10 opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              className="fill-soft-purple"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Future

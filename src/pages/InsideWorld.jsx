import React from 'react'
import { motion } from 'framer-motion'

const InsideWorld = () => {
  const secrets = [
    {
      trigger: "Our Secret Code",
      reveal: "When I text 'thinking of you,' I mean I'm imagining your body pressed against mine, your breath on my neck, the way you say my name when you want me"
    },
    {
      trigger: "The Office Look",
      reveal: "That mouse-like glance you gave me across the office wasn't shy—it was a promise of what would happen in the washroom later"
    },
    {
      trigger: "Your Perfume",
      reveal: "I can smell it on my clothes days after you've worn my hoodie. It drives me crazy when I'm alone, remembering your skin"
    },
    {
      trigger: "11:11",
      reveal: "Every single time I see it, I wish for one more night tangled in your Nagpur sheets, losing track of time with you"
    },
    {
      trigger: "The Playlist",
      reveal: "Every song on it reminds me of a different way you've made me lose control—in the hotel, in your room, on that video call"
    },
    {
      trigger: "My Stolen Hoodie",
      reveal: "You claimed it's 'ours' now, but I secretly love seeing you in it more than wearing it myself. You make everything better"
    },
    {
      trigger: "'Bhai Saab'",
      reveal: "When you say it sarcastically, I know you're about to kiss me to shut me up. And I let you win every time"
    },
    {
      trigger: "The Washroom",
      reveal: "Every time I pass an office washroom now, I think of our first kiss—reckless, urgent, the moment everything changed"
    },
    {
      trigger: "2 AM Texts",
      reveal: "Those nights you texted 'I'm touching myself thinking about you'—I saved every single one. They're my favorite kind of torture when we're apart"
    },
    {
      trigger: "Your Baby Voice",
      reveal: "You know exactly what you're doing when you use it. It's manipulative and adorable and I'm completely powerless against it"
    },
    {
      trigger: "Lonavala Memory",
      reveal: "I'm grateful for that fight every single day. Without it, we wouldn't have started talking. Misunderstandings led to us, and I'd do it all over again"
    },
    {
      trigger: "The Scratch Marks",
      reveal: "That intense Nagpur night when you left marks on my back—I looked at them in the mirror for days, remembering how we lost ourselves in each other"
    },
    {
      trigger: "Hyderabad Hotels",
      reveal: "I've memorized the room numbers. Every one of them holds a memory of your moans, your gasps, your body surrendering to mine"
    },
    {
      trigger: "Your Clinginess",
      reveal: "When you're half-asleep and refuse to let go, mumbling nonsense—those are the moments I feel most needed, most loved"
    },
    {
      trigger: "The Corridor Kisses",
      reveal: "Pressed against the wall, trying to be quiet, hearts racing—I still get hard thinking about the risk we took"
    },
    {
      trigger: "'Chutiya insaan'",
      reveal: "The way you call me that with affection makes me smile every time. It's our word, and no one else gets to use it like you do"
    },
    {
      trigger: "Video Call Nights",
      reveal: "Watching you pleasure yourself on camera while I did the same—distance couldn't kill our desire. If anything, it made us hungrier"
    },
    {
      trigger: "Your Random Dances",
      reveal: "When you think I'm not watching and you just start moving—that carefree joy on your face is my favorite version of you"
    },
    {
      trigger: "First Hotel Room",
      reveal: "We didn't have sex that day, but I learned your body—every spot that makes you shiver, every touch that makes you moan. Foreplay that lasted hours"
    },
    {
      trigger: "The Challenge",
      reveal: "When you said 'Make me forget my own name,' I took it as a personal mission. And we both know I succeeded. Multiple times"
    },
    {
      trigger: "Your Competitive Side",
      reveal: "'I bet I can make you lose control first'—you always win, and I love losing to you every single time"
    },
    {
      trigger: "Morning After Glow",
      reveal: "The way you look in Hyderabad morning light—hair messy, lips swollen, eyes satisfied—is permanently burned into my memory"
    },
    {
      trigger: "Nagpur Reunions",
      reveal: "We barely make it through your door before we're on each other. Weeks of longing exploding the second we're alone. Every reunion feels like the first time"
    },
    {
      trigger: "Your Laugh",
      reveal: "When you laugh at your own jokes before finishing them—that unguarded joy makes me fall deeper every single time"
    },
    {
      trigger: "Lunch Dates Evolved",
      reveal: "We went from awkward work cafeteria talks to planning our next hotel room escapade in hushed voices. The evolution was beautiful"
    },
    {
      trigger: "The All-Day Session",
      reveal: "That mid-November Nagpur day when we never left your room—morning, afternoon, evening. We forgot the world existed and it was perfect"
    },
    {
      trigger: "Your Spot on My Chest",
      reveal: "The exact place where your head rests when we sleep—my chest remembers the weight, my arms know how to hold you without thinking"
    },
    {
      trigger: "WhatsApp Fantasies",
      reveal: "Those late-night confessions where we shared our darkest desires—we trusted each other with secrets we'd never told our exes"
    },
    {
      trigger: "Office Goodbye",
      reveal: "When you left, I cried. I'm not ashamed to admit it. Losing daily access to you felt like losing a piece of myself"
    },
    {
      trigger: "Your Name",
      reveal: "The way you say 'Moiz' when you're desperate, on the edge, about to come—it's the most erotic thing I've ever heard"
    }
  ]

  return (
    <section className="min-h-screen section-padding pt-32">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-8 text-near-white">
            Inside Our World
          </h2>
          <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-4">
            The secrets only we share, the moments only we understand
          </p>
          <p className="text-center text-near-white opacity-50 text-sm tracking-widest uppercase mb-24">
            Hover or tap to reveal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-20">
          {secrets.map((secret, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/[0.02] border border-white/[0.08] rounded-sm
                         p-10 md:p-12 overflow-hidden cursor-pointer
                         transition-all duration-700 ease-out
                         hover:border-muted-magenta/30 hover:bg-white/[0.04]
                         hover:shadow-[0_0_24px_rgba(192,132,252,0.08)]
                         min-h-[280px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Lock Icon - shows before hover */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-0 transition-opacity duration-500">
                <svg className="w-5 h-5 text-muted-magenta" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Trigger Text */}
              <div className="relative z-10 transition-opacity duration-700 group-hover:opacity-0">
                <h3 className="text-2xl md:text-2xl font-cinzel tracking-widest text-center text-soft-purple">
                  {secret.trigger}
                </h3>
              </div>

              {/* Reveal Text */}
              <div className="absolute inset-0 flex items-center justify-center p-10 md:p-12
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700
                              bg-gradient-to-br from-muted-magenta/5 to-transparent">
                <p className="font-cinzel italic text-sm md:text-base leading-relaxed
                              tracking-wide text-center text-near-white">
                  {secret.reveal}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-muted-magenta
                            group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="mt-32 text-center glass-card max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <div className="mb-6 animate-heartbeat inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                className="fill-muted-magenta"
              />
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-cinzel italic leading-loose tracking-wide text-near-white opacity-90 max-w-2xl mx-auto">
            "These are the secrets that make us 'us'—the inside jokes, the hidden meanings,
            the memories that live in the space between words. This is our world, Falguni,
            and I wouldn't want to share it with anyone else."
          </p>
          <p className="mt-6 text-sm text-muted-magenta opacity-70 tracking-widest font-inter uppercase">
            — Our secret language of love
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default InsideWorld

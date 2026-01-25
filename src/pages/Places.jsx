import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Places = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const places = [
    {
      name: "Lonavala",
      date: "July 2025",
      descriptor: "Where it all started—a company trip, a truth and dare game, a misunderstanding that became the beginning of us",
      memories: ["First company trip together", "The fight that sparked everything", "Not knowing you'd become my forever"]
    },
    {
      name: "Office Corridors",
      date: "July - October 2025",
      descriptor: "Where stolen glances turned into secret touches—the hallways where we 'accidentally' met every day",
      memories: ["Mouse-like looks across the room", "Timing coffee breaks to see you", "Memorizing your schedule"]
    },
    {
      name: "Office Washroom",
      date: "Mid-August 2025",
      descriptor: "Our first kiss—not romantic, but unforgettable. Hearts racing, forbidden, the moment everything changed",
      memories: ["Planned over WhatsApp the night before", "Urgent, reckless, perfect", "We couldn't stop after that"]
    },
    {
      name: "Office After Hours",
      date: "August - September 2025",
      descriptor: "Late evenings when everyone left—you in my lap, hands exploring, pushing every boundary except the last one",
      memories: ["Empty building, just us", "Conference room secrets", "Building anticipation for what came next"]
    },
    {
      name: "First Hotel Room",
      date: "Late August 2025",
      descriptor: "Our first time completely alone—exploring, discovering, learning each other's bodies without crossing the final line yet",
      memories: ["Everything except sex", "Hours of foreplay", "Tangled together, just feeling"]
    },
    {
      name: "Lunch Spots",
      date: "July - October 2025",
      descriptor: "Office cafeteria dates that evolved from awkward small talk to planning our next hotel room in hushed voices",
      memories: ["Hand brushing under the table", "Sitting too close", "Secret smiles and promises"]
    },
    {
      name: "Hyderabad Hotels",
      date: "October 2025",
      descriptor: "Where we finally surrendered—nights of passion, every fantasy realized, hotel rooms that became our sacred space",
      memories: ["Our first time making love", "Morning light on your skin", "Room service we never touched"]
    },
    {
      name: "Office Parking Lot",
      date: "Late October 2025",
      descriptor: "Your last day—the goodbye kiss that lasted too long, holding you like I could stop time, tears on the drive home",
      memories: ["Not caring who might see", "Holding you too tight", "The day my daily world changed"]
    },
    {
      name: "Nagpur Streets",
      date: "November 2025 onwards",
      descriptor: "Your city became our city—walking hand in hand, finally not hiding, feeling free to just be us",
      memories: ["Futala Lake evenings", "Your favorite cafés", "No more secrets"]
    },
    {
      name: "Your Nagpur Room",
      date: "November - December 2025",
      descriptor: "Our sanctuary—where distance dissolved, weeks of longing exploded, and we could be as loud as we wanted",
      memories: ["Barely making it through the door", "All-day sessions", "Your bed became our home"]
    },
    {
      name: "Video Calls",
      date: "November 2025 onwards",
      descriptor: "When distance tried to separate us—virtual intimacy that kept the fire burning, watching each other, wanting each other",
      memories: ["Falling asleep on call", "'I'm touching myself' confessions", "Good morning faces"]
    },
    {
      name: "WhatsApp",
      date: "July 2025 onwards",
      descriptor: "Our lifeline—from innocent texts to dark fantasies, from good mornings to 2 AM confessions, our secret language",
      memories: ["First fantasy confessions", "Explicit late-night texts", "Voice notes throughout the day"]
    }
  ]

  return (
    <section className="min-h-screen section-padding pt-32" ref={ref}>
      <div className="container-custom max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-8 text-near-white">
            Our Places
          </h2>
          <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-24">
            Every location that holds a piece of our story
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-24">
          {places.map((place, index) => (
            <motion.div
              key={index}
              className="group border border-white/[0.08] rounded-sm p-8 md:p-10
                         hover:border-muted-magenta/30 hover:shadow-[0_0_24px_rgba(192,132,252,0.12)]
                         hover:bg-white/[0.02]
                         transition-all duration-700 ease-out cursor-default
                         flex flex-col"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: index * 0.08,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              whileHover={{ y: -8 }}
            >
              {/* Date Badge */}
              <div className="text-xs font-inter tracking-widest uppercase text-soft-purple opacity-60 mb-4">
                {place.date}
              </div>

              {/* Place Name */}
              <h3 className="text-2xl md:text-3xl font-cinzel tracking-widest mb-5 text-muted-magenta
                           group-hover:text-muted-magenta transition-colors duration-500">
                {place.name}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed tracking-wide text-near-white opacity-75
                          group-hover:opacity-90 transition-opacity duration-500 mb-6 flex-grow">
                {place.descriptor}
              </p>

              {/* Memories List */}
              <div className="pt-6 border-t border-white/[0.05] space-y-2">
                {place.memories.map((memory, memIndex) => (
                  <div key={memIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1 h-1 mt-2 rounded-full bg-muted-magenta/40
                                  group-hover:bg-muted-magenta group-hover:scale-125
                                  transition-all duration-500" />
                    <p className="text-xs md:text-sm font-cinzel italic text-near-white opacity-60
                                group-hover:opacity-80 transition-opacity duration-500">
                      {memory}
                    </p>
                  </div>
                ))}
              </div>

              {/* Location Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <svg className="w-6 h-6 text-muted-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          className="mt-32 glass-card text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div className="mb-6 animate-heartbeat inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                className="fill-muted-magenta"
              />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-cinzel tracking-widest mb-6 text-near-white">
            Every Place Tells Our Story
          </h3>
          <p className="text-base md:text-lg font-cinzel italic leading-loose tracking-wide text-near-white opacity-85 max-w-2xl mx-auto">
            From Lonavala hills to office corridors, from Hyderabad hotels to Nagpur streets—
            every location is marked with our memories. These aren't just places on a map;
            they're chapters in our story, sacred spaces where we became 'us'.
            And everywhere we go next will become ours too.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-inter tracking-widest uppercase text-soft-purple opacity-60">
            <span>📍 3 Cities</span>
            <span>•</span>
            <span>💼 1 Office</span>
            <span>•</span>
            <span>🏨 Countless Hotels</span>
            <span>•</span>
            <span>💕 Infinite Memories</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Places

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Journey = () => {
  const months = [
    {
      month: "July 2025",
      fragment: "Lonavala changed everything. A fight born from misunderstanding sparked conversations that turned into confessions. We went from strangers to conspirators, planning our first forbidden kiss in an office washroom."
    },
    {
      month: "August 2025",
      fragment: "The washroom kiss that started it all—urgent, reckless, perfect. Then our first hotel room, learning each other's bodies without crossing the final line. WhatsApp became our playground for dark fantasies we'd never shared with anyone else."
    },
    {
      month: "September 2025",
      fragment: "Office nights after everyone left. You in my lap, hands exploring under clothes, pushing every boundary except the last one. The anticipation was torture—the most delicious kind. We were building toward something inevitable."
    },
    {
      month: "October 2025",
      fragment: "Hyderabad finally gave us what we'd been craving. Hotel room doors closing, no more waiting, no more holding back. We made love for the first time—every fantasy realized, every whispered promise fulfilled. Before you left the office, I gifted you black lace lingerie. When you wore it for me in our last Hyderabad hotel, you looked absolutely breathtaking—no words could capture how stunning you were."
    },
    {
      month: "November 2025",
      fragment: "You left the office and my days felt empty. But Nagpur became our sanctuary. After months apart, our reunion was explosive—months of longing combusting the moment we had privacy. From Nagpur, you'd order t-shirts and shirts for me in Hyderabad, little surprises that made the distance bearable. Your city became our secret world where we could finally be loud and free."
    },
    {
      month: "December 2025",
      fragment: "Distance made us bolder. Video calls that turned into virtual intimacy, sexting that left us both aching. Every Nagpur visit was combustion—we stopped being shy, started taking what we wanted. Shopping for each other online, sending gifts across cities, staying connected in every way possible. Your name became my favorite prayer, whispered against your skin."
    },
    {
      month: "January 2026",
      fragment: "Six months since it all began. From that Lonavala fight to black lace surprises to packages arriving at each other's doors—we've built something extraordinary from stolen moments and midnight confessions. This isn't an ending—it's just the beginning of every tomorrow I want to wake up tangled in you."
    }
  ]

  return (
    <section className="min-h-screen section-padding pt-32 pb-20">
      <div className="container-custom max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-12 text-near-white">
          Journey
        </h2>
        <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-24">
          Seven months, countless moments, one unforgettable story
        </p>

        <div className="flex flex-col gap-24 md:gap-32 mt-24">
          {months.map((item, index) => (
            <MonthBlock key={index} month={item.month} fragment={item.fragment} index={index} />
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          className="mt-32 glass-card text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h3 className="text-2xl md:text-3xl font-cinzel tracking-widest mb-6 text-muted-magenta">
            Our Journey in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-cinzel font-semibold text-near-white mb-2">
                196+
              </div>
              <div className="text-xs md:text-sm text-soft-purple opacity-70 tracking-wider uppercase">
                Days Together
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-cinzel font-semibold text-near-white mb-2">
                3000+
              </div>
              <div className="text-xs md:text-sm text-soft-purple opacity-70 tracking-wider uppercase">
                Messages
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-cinzel font-semibold text-near-white mb-2">
                ∞
              </div>
              <div className="text-xs md:text-sm text-soft-purple opacity-70 tracking-wider uppercase">
                Kisses Shared
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-cinzel font-semibold text-near-white mb-2">
                2
              </div>
              <div className="text-xs md:text-sm text-soft-purple opacity-70 tracking-wider uppercase">
                Cities, One Love
              </div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-cinzel font-semibold text-near-white mb-2">
                10+
              </div>
              <div className="text-xs md:text-sm text-soft-purple opacity-70 tracking-wider uppercase">
                Hotel Nights
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-cinzel font-semibold text-near-white mb-2">
                1
              </div>
              <div className="text-xs md:text-sm text-soft-purple opacity-70 tracking-wider uppercase">
                Black Lace Gift
              </div>
            </div>
            <div className="text-center md:col-span-1 col-span-2">
              <div className="text-3xl md:text-4xl font-cinzel font-semibold text-near-white mb-2">
                ∞
              </div>
              <div className="text-xs md:text-sm text-soft-purple opacity-70 tracking-wider uppercase">
                Gifts Exchanged
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          className="mt-16 text-center px-6 py-8 border border-white/10 rounded-md bg-gradient-to-br from-muted-magenta/5 to-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl font-cinzel italic text-near-white opacity-90 leading-loose max-w-3xl mx-auto">
            "From office washrooms to Hyderabad hotels, from black lace surprises to t-shirts shipped across cities—
            every moment added to our story. Distance tested us, desire brought us closer, and love kept us coming back for more."
          </p>
          <p className="mt-4 text-sm text-muted-magenta opacity-70 tracking-widest font-inter uppercase">
            — Our Journey Continues
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const MonthBlock = ({ month, fragment, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.8,
        delay: index * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }}
    >
      <div className="mb-6 animate-heartbeat inline-block">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            className="fill-muted-magenta"
          />
        </svg>
      </div>
      <h3 className="text-3xl md:text-4xl font-cinzel tracking-widest mb-7 text-soft-purple">
        {month}
      </h3>
      <p className="font-cinzel italic text-base md:text-lg leading-relaxed md:leading-loose tracking-wide text-near-white opacity-85 px-4">
        {fragment}
      </p>
    </motion.div>
  )
}

export default Journey

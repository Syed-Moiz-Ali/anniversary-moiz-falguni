import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const OurStory = () => {
  const timelineRef = useRef(null)

  const milestones = [
    {
      title: "The Company Trip",
      date: "First Week of July 2025",
      text: "Lonavala. A company trip that changed everything. I noticed you, but you were just another colleague in a crowd. We barely spoke. I had no idea that within days, you'd become the center of my universe. The trip was fun, casual—until the truth and dare game that night."
    },
    {
      title: "Truth and Dare",
      date: "Lonavala Night - July 2025",
      text: "The truth and dare game. You said something—something personal, something vulnerable—and somehow word got around the office. I don't even remember what was said, but I remember what happened next. You were upset, embarrassed, and somehow you thought I was involved in spreading it."
    },
    {
      title: "The Fight",
      date: "July 2025 - After Lonavala",
      text: "Back at the office, you confronted me. You were angry, hurt, accusing me of gossiping about what you'd said in Lonavala. I was confused—I hadn't said anything. We argued. It was tense, awkward, and honestly, I was frustrated. But something about that fight... the fire in your eyes, the passion in your voice... I couldn't stop thinking about you after."
    },
    {
      title: "We Started Talking",
      date: "Mid-July 2025",
      text: "After the fight, we started talking to clear the air. What began as defensive explanations turned into actual conversations. We'd message on WhatsApp, then talk during breaks, then find excuses to run into each other. The tension from the fight morphed into a different kind of tension—the kind that makes your pulse race when someone walks into the room."
    },
    {
      title: "Opening Up",
      date: "Late July 2025",
      text: "The conversations deepened. We went from surface-level work talk to real talk—our lives, our thoughts, our fears, our dreams. You told me things you hadn't told others, and I did the same. There was this comfort between us, this ease. But underneath it, there was something else building. Something electric."
    },
    {
      title: "Confessing Fantasies",
      date: "Late July 2025 - WhatsApp",
      text: "One late night, the conversation shifted. I don't remember who started it, but we began talking about fantasies. What we wanted, what turned us on, things we'd never admitted out loud. You confessed yours, and I confessed mine. The messages got bolder, more explicit. 'I keep thinking about you,' you typed. My heart was pounding. 'Me too,' I replied."
    },
    {
      title: "Dark Desires Shared",
      date: "Early August 2025",
      text: "We went deeper. We shared our dark fantasies—the secret desires we'd never told our past partners. Things we were scared to want, things that made us feel vulnerable. You trusted me with those secrets, and I trusted you with mine. That level of openness, that raw honesty—it bonded us in a way I'd never experienced before."
    },
    {
      title: "The Washroom Plan",
      date: "Mid-August 2025 - WhatsApp",
      text: "We were texting late one night, the conversation dripping with tension. 'I want to kiss you,' you typed. My breath stopped. We discussed when, where, how. The office washroom—risky, reckless, perfect. 'Tomorrow,' we agreed. 'When everyone's at lunch.' I barely slept that night."
    },
    {
      title: "First Kiss - The Washroom",
      date: "August 2025",
      text: "The next day felt like an eternity. Finally, lunch break. My heart was racing as I walked toward the washroom. You were already there, nervous energy radiating off you. We locked eyes. No more words. I pulled you close, and our lips met—urgent, hungry, everything we'd been holding back. Your hands in my hair, my hands on your waist, bodies pressed together. We kissed like we'd been starving for it, because we had been."
    },
    {
      title: "We Couldn't Stop",
      date: "August 2025",
      text: "After that first kiss, we were addicted. Every day we'd find moments—empty corridors, the stairwell, the conference room after hours. Quick, stolen kisses that left us both breathless and wanting more. The thrill of almost getting caught only made it more intense. We were playing with fire, and neither of us wanted to stop."
    },
    {
      title: "The Hotel Room - Our First Time Alone",
      date: "Late August 2025",
      text: "We couldn't keep meeting in secret corners. We needed time, privacy, no fear of interruption. We booked a hotel room. Walking in together felt surreal—finally, a space that was just ours. We spent the whole day there, talking, kissing, exploring each other. We didn't have sex that day—we weren't ready yet—but we did everything else. I learned your body, what made you gasp, what made you moan. We lay tangled together for hours, just feeling, just being."
    },
    {
      title: "Building Anticipation",
      date: "September 2025",
      text: "After that hotel day, the tension was unbearable. We knew what we wanted, but we were making ourselves wait. The WhatsApp messages got filthier. 'I'm imagining your hands on me right now,' you'd text during work hours, and I'd lose my mind. We'd meet for lunch and talk about what we'd do next time we had privacy. The anticipation was torture—the best kind."
    },
    {
      title: "Office Intimacy",
      date: "September 2025",
      text: "We got bolder at the office. Late evenings when everyone had left, we'd stay behind. Kissing in your chair, you in my lap, hands exploring under clothes. We never went all the way there—too risky—but we pushed every other boundary. Those moments were electric, forbidden, intoxicating."
    },
    {
      title: "Planning Hyderabad",
      date: "Late September 2025",
      text: "We both knew we needed more than stolen hotel afternoons and risky office moments. Hyderabad was coming up—a work trip, but this time, we'd make it ours. We planned every detail over text. 'I want a whole night with you,' you said. 'No interruptions. No holding back.' I booked the hotel immediately."
    },
    {
      title: "Hyderabad - Finally",
      date: "October 2025",
      text: "The hotel room door closed behind us, and we finally had what we'd been craving. No more waiting. That night, we made love for the first time—slow, intense, overwhelming. Every fantasy we'd whispered about became real. We explored each other without shame, without limits. By morning, we were exhausted, satisfied, and already planning the next time."
    },
    {
      title: "Hyderabad Mornings",
      date: "October 2025",
      text: "Waking up next to you was everything. Morning light on your bare skin, your sleepy smile, the way you'd reach for me before you were fully awake. We'd order room service and barely touch it because we were too busy touching each other. Showers that turned into round two. Those mornings taught me what home feels like."
    },
    {
      title: "Multiple Hyderabad Nights",
      date: "October 2025",
      text: "We went back to Hyderabad whenever we could. Each trip was better than the last. We tried new things, discovered what drove each other crazy, got comfortable being completely vulnerable. Hotel rooms became our sanctuary. Your skin became my favorite prayer."
    },
    {
      title: "The Black Lace Gift",
      date: "Late October 2025 - Last Day at Office",
      text: "Before you left the office for good, I wanted to give you something special. Something intimate, something that would make you think of me. I bought you a black lace bra and bikini set—delicate, elegant, sexy. When I handed you the package, your eyes lit up. 'I love it,' you whispered. 'I'll wear it for you.' That promise kept me up all night."
    },
    {
      title: "The Last Hyderabad Hotel",
      date: "Late October 2025",
      text: "Our last hotel trip in Hyderabad before you moved to Nagpur. You texted me from the bathroom: 'I have a surprise for you.' When you stepped out wearing that black lace set I'd gifted you, time stopped. You looked absolutely stunning—sexy, confident, breathtaking. The lace against your skin, the way you moved toward me... I didn't have words. I still don't. You were the most beautiful thing I'd ever seen. That night became one of our most unforgettable."
    },
    {
      title: "The Day You Left the Office",
      date: "Late October 2025",
      text: "When you resigned, it felt like losing gravity. No more daily stolen glances. No more lunch dates. No more finding excuses to be near you. Your last day, we met in the parking lot one final time. We kissed goodbye, and I held you like I could stop time. 'This isn't the end,' you promised. But I still cried driving home."
    },
    {
      title: "Long Distance Begins",
      date: "November 2025",
      text: "With you in Nagpur, everything changed. WhatsApp became our lifeline. Good morning texts, voice notes all day, video calls every night. The sexting intensified—photos, videos, explicit descriptions of what we'd do when we reunited. 'I'm touching myself thinking about you,' became our favorite confession. Distance made the hunger unbearable."
    },
    {
      title: "Shopping Together - From Afar",
      date: "November - December 2025",
      text: "Even from Nagpur, you'd order things for me—t-shirts, shirts, little surprises delivered to my door in Hyderabad. Each package felt like a piece of you arriving. I'd text you photos of me wearing them, and you'd call immediately. 'That color looks perfect on you,' you'd say. It became our way of staying connected, of taking care of each other across the distance."
    },
    {
      title: "First Nagpur Visit",
      date: "November 2025",
      text: "I came to your city for the first time. You picked me up, and the moment I saw you, weeks of need came flooding out. We barely made it inside before we were tearing each other's clothes off. That entire day was a blur of making up for lost time, living out every fantasy we'd texted about."
    },
    {
      title: "Nagpur - Our Private World",
      date: "November 2025",
      text: "Your city became our world. We didn't need to hide anymore. We could be loud, messy, completely ourselves. You'd walk around in just my shirt, demand attention when I was on my phone, climb into my lap just because. Those weekends felt like playing house, and I loved every second."
    },
    {
      title: "The All-Day Session",
      date: "November - December 2025",
      text: "One particular day, we didn't leave that hotel room at all. Morning sex, slow and tender. Afternoon sex, harder and more desperate. Evening sex after we'd ordered food and talked about everything and nothing. We weren't just fucking—we were connected, intimate, completely open. That day changed something between us."
    },
    {
      title: "Now",
      date: "January 2026",
      text: "Six months since Lonavala. Six months since that fight that started everything. From angry confrontation to whispered confessions, from washroom kisses to Hyderabad hotels to Nagpur weekends. From black lace gifts to online shopping sprees. We've built something raw and real and ours. This isn't an ending, Falguni—it's just the beginning of forever losing myself in you."
    }
  ]

  useEffect(() => {
    const elements = gsap.utils.toArray('.milestone')

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="min-h-screen section-padding pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-12 text-near-white">
          Our Story
        </h2>
        <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-24">
          From a Lonavala fight to black lace gifts to Nagpur nights—six months of becoming us
        </p>

        <div className="relative pl-12 md:pl-20 mt-24" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-muted-magenta/30 to-transparent"></div>

          {milestones.map((milestone, index) => (
            <div key={index} className="milestone relative mb-24 md:mb-32 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] md:-left-[21px] top-2 w-2.5 h-2.5 bg-muted-magenta
                              rounded-full shadow-[0_0_12px_rgba(192,132,252,0.6)]
                              animate-pulse-glow"></div>

              <div className="pl-4 md:pl-6">
                {/* Date */}
                <div className="text-xs font-inter tracking-widest uppercase text-soft-purple opacity-80 mb-4">
                  {milestone.date}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-4xl font-cinzel tracking-widest mb-6 text-near-white">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg leading-relaxed md:leading-loose tracking-wide text-near-white opacity-85 max-w-2xl">
                  {milestone.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-32 text-center glass-card">
          <div className="mb-6 animate-heartbeat inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                className="fill-muted-magenta"
              />
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-cinzel italic leading-loose tracking-wide text-near-white opacity-90 max-w-2xl mx-auto">
            "It started with a fight about a truth and dare game, and became the greatest truth I've ever known.
            From Lonavala strangers to washroom conspirators to black lace surprises to Nagpur lovers—
            this is our story, raw and real and beautifully ours."
          </p>
          <p className="mt-6 text-sm text-muted-magenta opacity-70 tracking-widest font-inter uppercase">
            — To infinity and beyond, my love
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurStory

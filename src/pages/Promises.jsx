import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Promises = () => {
  const promises = [
    "Never let misunderstandings sit overnight. Lonavala taught me that.",
    "2 AM rants get full attention. Phone down. Ears open. Always.",
    "Every 'first' celebrated—secret trips, our apartment, everything.",
    "Surprise gifts continue—black lace, t-shirts, handwritten notes.",
    "Black lace memories forever. That Hyderabad night etched in my soul.",
    "Home where your 'quiet voice' can be loud. No hiding. Just us.",
    "Choose you in every timeline, every universe, every reality.",
    "Love every version—'Bhai saab' sarcasm, baby voice, all of you.",
    "Reunions always electric. Distance makes them feel like first time.",
    "Your safe place forever. Best friend. Biggest fan. Always.",
    "Nagpur packages continue. Our love language across the miles.",
    "Lap time guaranteed. You climb in, world pauses."
  ]

  useEffect(() => {
    const elements = gsap.utils.toArray('.promise-paragraph')

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.12
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="min-h-screen section-padding pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-12 text-near-white">
          My Promises To You
        </h2>
        <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-32">
          Words I mean with every part of my soul
        </p>

        <div className="space-y-10 md:space-y-14">
          {promises.map((promise, index) => (
            <p
              key={index}
              className={`promise-paragraph font-cinzel italic text-base md:text-lg
                         leading-relaxed md:leading-loose tracking-wide
                         ${index === 0 || index === promises.length - 1
                           ? 'text-muted-magenta font-normal not-italic text-center text-lg md:text-xl'
                           : 'text-near-white opacity-85'}`}
            >
              {promise}
            </p>
          ))}
        </div>

        {/* Decorative ending */}
        <div className="mt-20 flex justify-center">
          <div className="animate-heartbeat">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                className="fill-muted-magenta"
              />
            </svg>
          </div>
        </div>

        {/* P.S. Section */}
        <div className="mt-16 p-8 md:p-10 border-l-2 border-muted-magenta/30 bg-white/[0.02] rounded-r-sm">
          <p className="font-cinzel italic text-sm md:text-base leading-relaxed tracking-wide text-near-white opacity-70">
            <span className="text-muted-magenta not-italic font-normal">P.S.</span> —
            These aren't just words. They're my commitment.
            To you. To us. Forever.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Promises

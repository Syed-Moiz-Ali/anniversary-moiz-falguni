import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ThankYou = () => {
  const gratitudes = [
    "Thank you for turning Lonavala argument into my favorite love story.",
    "Thank you for trusting me with WhatsApp fantasies that started everything.",
    "Thank you for that washroom kiss—reckless, forbidden, perfect.",
    "Thank you for black lace reveal that stopped my heart completely.",
    "Thank you for Nagpur packages that feel like hugs across miles.",
    "'Bhai saab' sarcasm that makes me laugh every single time.",
    "Baby voice that melts my defenses instantly.",
    "Lap-climbing when you need attention—irresistible always.",
    "Saying my name when you're on the edge—pure magic.",
    "Making distance feel temporary, not permanent.",
    "Being my best friend, safe place, everything.",
    "Choosing me again and again, every single day.",
    "Lifetime memories packed into just six months."
  ]

  useEffect(() => {
    const elements = gsap.utils.toArray('.gratitude-paragraph')

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
          Thank You, Falguni
        </h2>
        <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-32">
          For every moment, every memory, every piece of my heart you hold
        </p>

        <div className="space-y-10 md:space-y-14">
          {gratitudes.map((gratitude, index) => (
            <p
              key={index}
              className={`gratitude-paragraph font-cinzel italic text-base md:text-lg
                         leading-relaxed md:leading-loose tracking-wide
                         ${index === 0 || index === gratitudes.length - 1
                           ? 'text-muted-magenta font-normal not-italic text-center text-lg md:text-xl'
                           : 'text-near-white opacity-85'}`}
            >
              {gratitude}
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
            Every thank you is just a reminder: you're not just my girlfriend.
            You're my everything. Forever grateful, Moiz.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ThankYou

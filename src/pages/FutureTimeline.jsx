import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FutureTimeline = () => {
  const milestones = [
    {
      title: "Next Nagpur Weekend",
      subtitle: "February 2026",
      description: "Hotel room, your sheets, morning coffee, and all day tangled together—no parents, just us.",
      icon: "🛏️"
    },
    {
      title: "Our First Secret Trip",
      subtitle: "Summer 2026",
      description: "Beach getaway or mountain hideout—just you and me, our little world.",
      icon: "✈️"
    },
    {
      title: "First Apartment Together",
      subtitle: "2027",
      description: "Our secret space—kitchen disasters, late nights, no one to answer to.",
      icon: "🏠"
    },
    {
      title: "More Adventures",
      subtitle: "Every weekend we can steal",
      description: "Road trips, hotel stays, stolen moments—building our life one secret at a time.",
      icon: "🚗"
    },
    {
      title: "Forever Us",
      subtitle: "As long as we want",
      description: "Girlfriend/boyfriend adventures, no labels needed—just you and me against the world.",
      icon: "💕"
    }
  ]

  useEffect(() => {
    const timelineLine = document.querySelector('.timeline-line')
    const milestonesEls = gsap.utils.toArray('.milestone-item')

    // Animate timeline line
    gsap.fromTo(timelineLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 80%',
          end: 'bottom 20%'
        }
      }
    )

    // Animate milestones
    milestonesEls.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.2
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  return (
    <section className="min-h-screen section-padding pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-8 text-near-white">
          Our Secret Roadmap
        </h2>
        <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-24 max-w-2xl mx-auto">
          Adventures only we know about
        </p>

        <div className="timeline-container relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-muted-magenta to-soft-purple origin-top"></div>

          <div className="space-y-20">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`milestone-item flex items-center gap-8 lg:gap-12 ${index % 2 === 0 ? 'flex-row-reverse justify-end' : 'justify-start'}`}
              >
                <div className="flex-1 max-w-md">
                  <div className="glass-card p-6 md:p-8 border border-white/[0.1] hover:border-muted-magenta/40 hover:bg-white/[0.05] transition-all duration-500">
                    <div className="text-3xl mb-4">{milestone.icon}</div>
                    <h3 className="font-cinzel text-2xl md:text-3xl tracking-wide mb-2 text-near-white">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-magenta font-semibold mb-4 text-sm uppercase tracking-wider">
                      {milestone.subtitle}
                    </p>
                    <p className="font-cinzel italic text-near-white opacity-85 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="w-20 h-20 bg-gradient-to-r from-muted-magenta to-soft-purple rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white absolute left-1/2 transform -translate-x-1/2 shadow-xl">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FutureTimeline

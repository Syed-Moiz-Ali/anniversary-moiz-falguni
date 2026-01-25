import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LoveLetter = () => {
  const paragraphs = [
    "My Dearest Falguni,",

    "Six months. Half a year. 196 days since Lonavala. It sounds so small when I say it out loud, but it feels like lifetimes when I'm lying next to you in the dark, your breathing synced with mine, your body curved into mine like we were designed to fit this way. How do I compress everything you've become to me into words that don't feel impossibly small?",

    "I remember Lonavala. The truth and dare game, the misunderstanding, that stupid fight. I remember being so frustrated, having no idea that the girl yelling at me would become the only voice I ever want to hear whispering my name in the dark. We started talking to clear the air, and somehow, we never stopped. Our conversations became confessions. Our texts became the highlight of my day.",

    "I remember when we started sharing our fantasies over WhatsApp. Those late-night messages where we said things we'd never admitted to anyone. You trusted me with your darkest desires, and I gave you mine. The tension between us became unbearable. We started planning—the office washroom, after lunch, when everyone would be gone. I barely slept the night before.",

    "I remember our first kiss. The washroom. The recklessness of it. The way your lips tasted like a question I'd been dying to answer. Your hands in my hair, my hands on your waist, both of us breathing hard, knowing we'd crossed a line we could never uncross. I didn't know then that every kiss after would feel like falling—urgent, necessary, terrifying in the best way.",

    "I remember our first hotel room. We weren't ready to go all the way yet, but God, we did everything else. I learned your body that day—what made you gasp, what made you moan, what made you grab the sheets and forget to breathe. We lay tangled together for hours afterward, just talking, just being, building something deeper than just physical need.",

    "Then Hyderabad happened. Hyderabad changed everything. That first night when we finally made love—all the fantasies we'd whispered about became real. You in my arms, your body arching into mine, your voice breaking when you said my name. Those hotel rooms became our sanctuary, altars where we worshipped each other in whispers and sighs and sounds I still hear when I close my eyes.",

    "Hyderabad taught me things I didn't know about desire. That it's not just hunger—it's the way your eyes close when I touch you, the way your body remembers mine even before skin meets skin. It's morning light on your bare shoulders, room service we barely touched because we were too busy touching each other, showers that turned into round two.",

    "I remember choosing that black lace lingerie for you before you left the office. I wanted to give you something intimate, something that said 'I see you as the beautiful, sensual woman you are.' When your eyes lit up and you promised to wear it for me, I counted down the hours until I could see you in it.",

    "And then that last Hyderabad hotel—when you stepped out of the bathroom wearing that black lace set. Falguni, time stopped. My breath caught. You looked absolutely stunning—confident, sexy, breathtaking. The lace against your skin, the way you moved toward me knowing exactly what you were doing to me... I didn't have words then, and I still don't. You were the most beautiful thing I'd ever seen. That night is burned into my memory forever.",

    "Then you left the office, and my days felt empty without you. No more stolen corridor kisses. No more late nights alone in the building, you in my lap, pushing every boundary. I cried when you left, Falguni. I'm not ashamed to admit it.",

    "But then Nagpur became ours. Your city, hotel room, hotel bed—our secret world. The distance made every reunion explosive. I'd walk through your door and we'd barely say hello before we were on each other, weeks of need combusting the second we had privacy. Nagpur taught me that home isn't a place—it's wherever you are.",

    "I love how you started ordering things for me from Nagpur—t-shirts, shirts, little surprises showing up at my door in Hyderabad. Every package felt like you were reaching across the distance to say 'I'm thinking about you.' I'd text you photos of me wearing them, and you'd call immediately, your voice full of that pride and affection that makes my chest ache. 'That color looks perfect on you,' you'd say, and suddenly a simple shirt became my favorite thing to wear.",

    "Shopping for each other became our love language. Me browsing online late at night, imagining what would make you smile. You doing the same in Nagpur, choosing things you knew I'd like. The excitement in your voice when you'd ask 'Did it arrive yet?' The notes you'd include—'For my favorite person'—that turned ordinary packages into love letters. Even when we were cities apart, we found ways to take care of each other.",

    "You've rewritten my body's language, Falguni. My hands know the curve of your waist better than they know anything else. My lips have memorized every inch of your skin. When we're apart, I feel the absence of you like a physical ache—like something vital has been removed and I'm just waiting to feel whole again.",

    "I love the way you look at me when you want me. That half-lidded gaze that says everything without saying anything. I love how you pull me closer even when there's no space left between us. I love the sounds you make when you forget to be quiet. I love that I'm the reason you forget.",

    "I love your 'Bhai saab' when you're being sarcastic, the way you call me 'chutiya insaan' with affection, challenging me to make you lose control first (and you always win). I love your baby voice when you want something, and I surrender every single time because I'm weak for you.",

    "I love the way you demand attention when I'm busy, climbing into my lap until I give in. I love your sleepy clinginess at 2 AM, refusing to let go. I love how you look at me after we make love—vulnerable, satisfied, somehow still hungry. I love that you're not just my girlfriend; you're my best friend, my favorite conversation, my safest place.",

    "These six months have been fire and tenderness, lust and laughter, stolen moments and slow mornings. From that Lonavala fight to office washroom kisses to black lace gifts to Hyderabad hotels to packages across cities to Nagpur weekends—we built something extraordinary from nothing. You are my favorite addiction, my most exquisite weakness, my most beautiful chaos.",

    "If I had to do it all over again—every risky kiss, every desperate touch, every breathless reunion, every gift carefully chosen, every tear when we had to say goodbye—I would choose you every single time. In every universe, in every timeline, in every version of my life, I'd find you. I'd fight with you. I'd fall for you. I'd choose you.",

    "Here's to the nights ahead. To more Nagpur mornings tangled in your sheets. To more video calls when we can't be together. To more of your challenges and my surrenders. To more packages arriving with your handwriting on the notes. To learning new ways to make you tremble. To whispered confessions in the dark. To every moment I get to lose myself in you.",

    "Falguni, you're not just the love of my life—you're the life in my love. You're the reason I understand what it means to be completely, vulnerably, beautifully consumed by another person. Thank you for the fight in Lonavala. Thank you for trusting me with your body in that black lace. Thank you for sending pieces of yourself across the miles. Thank you for giving me a chance. Thank you for being mine.",

    "Forever yours, in body and soul,",
    "Moiz"
  ]

  useEffect(() => {
    const elements = gsap.utils.toArray('.letter-paragraph')

    elements.forEach((element) => {
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
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-12 text-near-white">
          Love Letter
        </h2>
        <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-32">
          Every word I never said out loud, written just for you
        </p>

        <div className="space-y-10 md:space-y-14">
          {paragraphs.map((para, index) => (
            <p
              key={index}
              className={`letter-paragraph font-cinzel italic text-base md:text-lg
                         leading-relaxed md:leading-loose tracking-wide
                         ${index === 0 || index === paragraphs.length - 2 || index === paragraphs.length - 1
                           ? 'text-muted-magenta font-normal not-italic text-center'
                           : 'text-near-white opacity-85'}`}
            >
              {para}
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
          <p className="font-cinzel italic text-sm md:text-base leading-relaxed tracking-wide text-near-white opacity-70 mb-4">
            <span className="text-muted-magenta not-italic font-normal">P.S.</span> —
            I still think about that washroom kiss every single day. I still get butterflies when I see your name on my phone.
            I still can't believe you're mine. And I still fall for you a little more every time you call me "chutiya insaan"
            with that smile on your face.
          </p>
          <p className="font-cinzel italic text-sm md:text-base leading-relaxed tracking-wide text-near-white opacity-70">
            I still see you in that black lace every time I close my eyes. I still smile every time a package arrives with your handwriting.
            Here's to forever making you laugh, making you moan, making you feel cherished across any distance, and making you mine.
          </p>
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center p-6 glass-card">
          <p className="text-xs md:text-sm font-cinzel italic text-soft-purple opacity-80 leading-relaxed">
            "Every gift, every kiss, every whispered confession—they're all chapters in the story of us.
            This letter is just one more way to say: I love you, Falguni. Completely. Endlessly. Forever."
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoveLetter

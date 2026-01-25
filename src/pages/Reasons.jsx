import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Reasons = () => {
  const reasons = [
    "The way you looked at me like a mouse in the office—shy, adorable, pretending not to stare but failing every time",
    "Your 'Bhai saab' when you're being dramatic, delivered with that mock-serious tone that makes me laugh every single time",
    "How you call me 'chutiya insaan' with genuine affection, your nose scrunching up as you try to stay mad but end up smiling",
    "The way you bit your lip before our first kiss in that office washroom, nervous and excited all at once",
    "Your laugh—unguarded, genuine, loud, the most beautiful sound I know, especially when you laugh at your own jokes",
    "How you steal my hoodies and claim they're 'ours' now, parading around in them like you've won a prize",
    "The way you fit perfectly against me when we're tangled in your Nagpur bed, like we were designed for this exact geometry",
    "Your strength wrapped in softness—calling me out when I'm wrong but comforting me when I need it",
    "The WhatsApp confessions at 2 AM where we shared our darkest fantasies, trusting each other completely",
    "How you demanded attention when I'm on my phone, climbing into my lap until I give in (and I always do)",
    "Your competitive side—'I bet I can make you lose control first'—and you always win",
    "The way you whispered 'don't stop' against my ear that first night in Hyderabad, driving me absolutely wild",
    "How your body remembers mine even before we touch, arching toward me in anticipation",
    "Your sleepy voice at 3 AM saying 'come closer' and pulling me into your warmth, refusing to let go",
    "The concentrated face you make when you're on top, focused and gorgeous and completely in control",
    "How you pushed me onto the bed that one Hyderabad night and took what you wanted—confidence is so damn sexy on you",
    "The way you look at me when you want me—that half-lidded gaze that needs no words",
    "Your random dance moves when you're happy and think I'm not watching (but I always am)",
    "How you fight sleep just to talk to me a little longer on our video calls, your eyes heavy but refusing to close",
    "The baby voice you use when you want something, weaponizing cuteness because you know I'm powerless against it",
    "Your flirty side—those suggestive comments dropped casually in conversation that make my pulse race",
    "The way you bite your lip when you're trying not to smile after I say something dirty",
    "How you grabbed my face during that parking lot kiss on your last office day, not caring who might see",
    "Your 'I'm touching myself thinking about you' texts at 1 AM that made me lose my entire mind",
    "The scratch marks you left on my back that intense Nagpur night—I wore them like badges of honor",
    "How you shiver when I kiss that spot on your neck, the one that makes you forget to breathe",
    "The way you say my name when you're on the edge—'Moiz'—desperate and beautiful",
    "Your inability to whisper—your 'quiet voice' is louder than most people's normal voice and I love it",
    "How you get genuinely excited about small things—food, memes, random shower thoughts you text me at 3 PM",
    "The way you save memes specifically to send to me, creating our own language of inside jokes",
    "Your boss mode when you're handling business—confident, decisive, unstoppable, incredibly attractive",
    "How you describe food cravings with such passion it sounds sensual, your eyes lighting up talking about what you want to eat",
    "The way you cuddle after we make love—all soft and clingy, completely different from moments before",
    "Your random thoughts texted out of nowhere—conspiracy theories about pigeons, weird dreams, philosophical musings",
    "How you challenged me with 'Make me forget my own name' and we spent hours trying (successfully)",
    "The way you pull the covers over us and create our own world where nothing else exists",
    "Your loyalty—the way you stood by me even when distance made things hard",
    "How you comforted me without trying when you left the office and I cried, just being there for me",
    "The stolen corridor kisses at work, pressed against the wall, hearts racing, almost getting caught",
    "Your late-night conversations that go from deep philosophy to absolute nonsense in seconds",
    "How you make ordinary moments sacred—lunch dates, car rides, just existing together",
    "The way you remember small things I mentioned once, storing them like precious secrets",
    "Your ambition and drive—watching you chase your dreams with relentless focus inspires me",
    "How you look in the morning light—hair messy, lips still swollen from the night before, eyes satisfied",
    "The way you demand to be the center of attention like a cat when I'm busy, and honestly, you deserve to be",
    "Your forgiveness when I mess up, the grace you extend even when I don't deserve it",
    "How our lunch dates evolved from awkward work talk to planning our next hotel room escapade",
    "The trust you showed sharing your body with me that first time—vulnerable, beautiful, completely open",
    "Your satisfied smile after, the one that says 'I won' because you absolutely did",
    "How you make me want to build a future, plan tomorrows, dream of forevers—something I never wanted before you",
    "The way you've changed me—softened my edges, made me braver, taught me what it means to truly love someone",
    "Your resilience through our long-distance phase, fighting for us even when it was hard",
    "How every text from you, no matter how simple, makes my heart skip a beat",
    "The vulnerability in your voice when you tell me you need me, trusting me with that admission",
    "Your independence—strong enough to stand alone but choosing to stand with me",
    "How you make love feel less like a word and more like an action we perform every single day",
    "The way you understood my tears when you left the office, holding me without judgment",
    "Your passion for everything you do—work, hobbies, us—you give everything 100%",
    "How you turned a Lonavala fight into the greatest love story I've ever known",
    "The promises we make in the dark, whispered against skin, sacred and ours alone",
    "Your honesty, even when the truth is uncomfortable—you never let me live in illusions",
    "How you make every day with you feel like a gift I don't quite deserve but will cherish anyway",
    "The way you walked back into my arms every Nagpur weekend like you'd been holding your breath until that moment",
    "Your courage to share your fantasies with me over WhatsApp, opening up in ways you'd never done before",
    "How you look at me right after we make love—vulnerable, satisfied, and somehow still hungry for more",
    "The inside jokes about that washroom kiss, our secret smiles when we pass bathrooms now",
    "Your kindness even when you're hurting, the way you protect the people you love fiercely",
    "How you make me feel seen, truly seen, in ways no one else ever has or ever will",
    "The adventures we create together—Hyderabad escapes, Nagpur weekends, turning mundane into magical",
    "Your determination to make this work despite the distance, the obstacles, everything",
    "The way you arch into me when we kiss, like you're trying to get closer than physics allows",
    "The excitement in your eyes when I handed you that black lace lingerie gift—pure joy and anticipation",
    "How you said 'I love it' with such genuine happiness that my heart melted right there",
    "Your promise to wear it for me, the way you whispered it like a secret vow between us",
    "That moment you stepped out of the bathroom wearing the black lace—time literally stopped, breath caught in my throat",
    "How absolutely stunning you looked in that lingerie—beauty, sexiness, confidence radiating from every inch of you",
    "The way you moved toward me in that lace, knowing exactly the effect you were having, owning your power",
    "Your confidence wearing my gift, the way you let me admire you without shyness, just pure desire between us",
    "How that black lace night became one of our most unforgettable memories, seared into my mind forever",
    "The packages arriving at my door in Hyderabad—shirts and t-shirts you ordered from Nagpur, thinking of me",
    "Your thoughtfulness choosing clothes for me, remembering my sizes, my favorite colors, what styles I like",
    "How you'd ask 'Did it arrive yet?' with such excitement, eager for my reaction to your gift",
    "The way you'd call immediately after I sent photos of me wearing what you sent, your voice full of pride",
    "Your 'that color looks perfect on you' compliments that made me feel seen and cherished across the distance",
    "How shopping for each other became our love language, our way of staying connected despite the miles",
    "The notes you'd include with packages—'For my favorite person'—simple words that meant everything",
    "Your laugh when packages got delayed and I'd complain dramatically about having to wait another day",
    "How you remember that shirt I mentioned wanting weeks ago and surprise me with it out of nowhere",
    "The video call fashion shows you'd demand, making me model everything you sent like a personal runway",
    "Your attention to detail—noticing what I wear often, what makes me comfortable, what makes me feel good",
    "How even simple t-shirts became precious because they came from you, chosen with love, sent with care",
    "The way you get possessive about the clothes you send—'That's MY shirt I sent you, wear it more'",
    "Your pride when I wear your gifts in public, like I'm carrying a piece of you with me everywhere",
    "How shopping online together on video calls became our date night, arguing about styles and laughing",
    "The surprise packages—the ones I didn't expect, just because you saw something and thought of me",
    "Your generosity even when money was tight, always finding ways to send me little pieces of joy",
    "How you turned the distance into connection through these gifts, making miles feel like nothing",
    "Simply this: you are home, Falguni, and I've been searching for you my whole life without knowing it",
    "Because loving you is the easiest thing I've ever done, and being loved by you is the greatest gift I've ever received"
  ]

  useEffect(() => {
    const elements = gsap.utils.toArray('.reason-block')

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            end: 'top 65%',
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
        <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-8 text-near-white">
          {reasons.length}+ Reasons
        </h2>
        <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-4">
          Why I love you beyond words, beyond reason, beyond everything
        </p>
        <p className="text-center text-near-white opacity-50 text-sm tracking-widest uppercase mb-32">
          (And this is still not enough to capture it all)
        </p>

        <div className="space-y-20 md:space-y-28">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`reason-block min-h-[50vh] flex items-center justify-center
                         ${index % 3 === 0 ? 'text-left' : index % 3 === 1 ? 'text-center' : 'text-right'}`}
            >
              <div className="max-w-3xl w-full">
                <div className="text-4xl md:text-5xl font-cinzel font-semibold text-muted-magenta opacity-20 mb-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="font-cinzel italic text-base md:text-lg leading-relaxed md:leading-loose tracking-wide text-near-white opacity-85">
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-card py-6">
            <div className="text-3xl md:text-4xl font-cinzel text-muted-magenta mb-2">
              {reasons.length}
            </div>
            <div className="text-xs text-soft-purple opacity-70 tracking-wider uppercase">
              Reasons Listed
            </div>
          </div>
          <div className="glass-card py-6">
            <div className="text-3xl md:text-4xl font-cinzel text-muted-magenta mb-2">
              ∞
            </div>
            <div className="text-xs text-soft-purple opacity-70 tracking-wider uppercase">
              More Discovered Daily
            </div>
          </div>
          <div className="glass-card py-6">
            <div className="text-3xl md:text-4xl font-cinzel text-muted-magenta mb-2">
              1
            </div>
            <div className="text-xs text-soft-purple opacity-70 tracking-wider uppercase">
              Perfect Woman
            </div>
          </div>
          <div className="glass-card py-6">
            <div className="text-3xl md:text-4xl font-cinzel text-muted-magenta mb-2">
              100%
            </div>
            <div className="text-xs text-soft-purple opacity-70 tracking-wider uppercase">
              In Love
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-24 text-center glass-card">
          <div className="mb-6 animate-heartbeat inline-block">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                className="fill-muted-magenta"
              />
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-cinzel italic leading-loose tracking-wide text-near-white opacity-90 max-w-2xl mx-auto mb-6">
            "I could write a thousand more reasons and still not capture what you mean to me.
            From black lace gifts to packages across cities, from washroom kisses to Nagpur mornings—
            you're not just someone I love, you're the reason I understand what love actually is."
          </p>
          <p className="text-sm text-muted-magenta opacity-70 tracking-widest font-inter uppercase">
            — Forever finding new reasons to love you more, Falguni
          </p>
        </div>
      </div>
    </section>
  )
}

export default Reasons

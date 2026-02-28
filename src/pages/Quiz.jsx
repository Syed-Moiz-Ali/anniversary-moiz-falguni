import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowRight, Trophy, RefreshCcw, Star, Heart } from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: quiz.questions[] — all 39 questions
// Categories: origin, intimate, playful, distance, identity

const QUESTIONS = [
  // ── ORIGIN ──────────────────────────────────────────────────────────────────
  {
    category: 'origin',
    question: "Where did our story truly begin?",
    options: ["Office meeting", "Lonavala company trip", "Coffee date", "Random text"],
    correct: 1,
    funFact: "A truth and dare game led to a misunderstanding, then a fight, then everything. Destiny dressed as conflict.",
  },
  {
    category: 'origin',
    question: "What sparked our first real conversation after the fight?",
    options: ["Apology text", "Clearing the misunderstanding", "Accidental meeting", "Work discussion"],
    correct: 1,
    funFact: "We went from arguing to opening up about our deepest fears and fantasies in just weeks. Air cleared, walls demolished.",
  },
  {
    category: 'origin',
    question: "What month did we share our first kiss?",
    options: ["July 2025", "August 2025", "September 2025", "October 2025"],
    correct: 1,
    funFact: "Mid-August 2025 — hearts racing, forbidden, absolutely perfect. Planned over WhatsApp the night before.",
  },
  {
    category: 'origin',
    question: "Where did we share our first kiss?",
    options: ["Office cafeteria", "Office washroom", "Parking lot", "Conference room"],
    correct: 1,
    funFact: "Not romantic, but unforgettable. A line crossed that made everything afterward irreversible.",
  },
  {
    category: 'origin',
    question: "What happened in our first hotel room together?",
    options: ["Had sex", "Everything except sex", "Just talked", "Watched movies"],
    correct: 1,
    funFact: "Late August 2025 — hours of exploration, learning each other. Foundation of everything that came after.",
  },
  {
    category: 'origin',
    question: "Which city witnessed our first time making love?",
    options: ["Mumbai", "Nagpur", "Hyderabad", "Pune"],
    correct: 2,
    funFact: "October 2025 — Hyderabad hotels became sacred spaces where every whispered fantasy became real.",
  },
  {
    category: 'origin',
    question: "When did you leave the office for Nagpur?",
    options: ["September 2025", "October 2025", "November 2025", "December 2025"],
    correct: 1,
    funFact: "Late October 2025 — I cried. Losing daily access to you felt like losing oxygen. Then Nagpur became ours.",
  },
  {
    category: 'origin',
    question: "How many months have we been together?",
    options: ["4 months", "5 months", "6 months", "7 months"],
    correct: 2,
    funFact: "Since Lonavala in July 2025 — six months that feel like lifetimes when I'm lying next to you in the dark.",
  },
  {
    category: 'origin',
    question: "What makes our story special above all else?",
    options: [
      "We met at work",
      "Started with a fight, built with trust, sealed with passion",
      "Long distance relationship",
      "Good chemistry",
    ],
    correct: 1,
    funFact: "From Lonavala misunderstanding to Hyderabad hotels to black lace nights to Nagpur sanctuary — we built something extraordinary.",
  },

  // ── INTIMATE ────────────────────────────────────────────────────────────────
  {
    category: 'intimate',
    question: "What intimate gift did I give you before you left the office?",
    options: ["Jewelry", "Black lace lingerie", "Perfume", "Watch"],
    correct: 1,
    funFact: "I wanted to give you something that said 'you are beautiful and sensual and you deserve to feel it.'",
  },
  {
    category: 'intimate',
    question: "Where did you wear that black lace set for the first time?",
    options: ["At home alone", "Nagpur hotel", "Last Hyderabad hotel", "Never wore it"],
    correct: 2,
    funFact: "When you stepped out of that bathroom, time stopped. I couldn't speak. That image is burned permanently.",
  },
  {
    category: 'intimate',
    question: "How did I react when I saw you in the black lace lingerie?",
    options: ["Smiled widely", "Couldn't speak — speechless awe", "Took photos", "Laughed nervously"],
    correct: 1,
    funFact: "Beauty, confidence, perfection radiating from every inch of you. I had absolutely no words. I still don't.",
  },
  {
    category: 'intimate',
    question: "What emotion best describes that black lace moment?",
    options: ["Happy", "Excited", "Speechless awe", "Nervous"],
    correct: 2,
    funFact: "You were confidence and beauty personified. The most stunning thing I've ever seen.",
  },
  {
    category: 'intimate',
    question: "What marks did you leave on me that one intense Nagpur night?",
    options: ["Hickeys", "Scratch marks on my back", "Bite marks", "Lipstick stains"],
    correct: 1,
    funFact: "I wore them like badges of honor for days. That Nagpur night was completely unforgettable.",
  },
  {
    category: 'intimate',
    question: "What do you say when you're on the edge?",
    options: ["'Oh God'", "'Don't stop'", "My name — 'Moiz'", "Nothing at all"],
    correct: 2,
    funFact: "The way you say my name when you're desperate and beautiful — the most intoxicating sound I've ever heard.",
  },
  {
    category: 'intimate',
    question: "How do you behave after we make love?",
    options: ["Get up immediately", "Fall asleep away from me", "Clingy and impossibly soft", "Check your phone"],
    correct: 2,
    funFact: "All soft and vulnerable, refusing to let go — completely different from moments before. Both versions are my favorite.",
  },
  {
    category: 'intimate',
    question: "What's the longest we spent in bed without leaving the room?",
    options: ["A few hours", "Half a day", "An entire day", "Two full days"],
    correct: 2,
    funFact: "Mid-November Nagpur — morning into afternoon into night. We forgot the world was still turning.",
  },
  {
    category: 'intimate',
    question: "How do you look at me when you want me?",
    options: ["Direct stare", "Shy mouse-like glance", "Half-lidded gaze", "Playful wink"],
    correct: 2,
    funFact: "That look that says everything without a single word. No language necessary — just that gaze.",
  },
  {
    category: 'intimate',
    question: "What did you challenge me with one night?",
    options: ["'Cook something for me'", "'Make me laugh'", "'Make me forget my own name'", "'Beat me at a game'"],
    correct: 2,
    funFact: "We spent hours trying. We succeeded. Multiple times. You won your own challenge beautifully.",
  },
  {
    category: 'intimate',
    question: "What do I love most about your body?",
    options: ["Your curves", "Your skin", "The way you move", "Absolutely every inch of it"],
    correct: 3,
    funFact: "Every curve, every spot that makes you gasp, every inch of skin that responds to my touch — all of it, always.",
  },

  // ── PLAYFUL ─────────────────────────────────────────────────────────────────
  {
    category: 'playful',
    question: "What's your cute nickname when you're being sarcastic with me?",
    options: ["Baby", "Bhai saab", "Love", "Sweetheart"],
    correct: 1,
    funFact: "That mock-serious tone when you say 'Bhai saab' right before you kiss me to shut me up. I let you win every time.",
  },
  {
    category: 'playful',
    question: "What's your favorite term of endearment for me (disguised as an insult)?",
    options: ["Idiot", "Chutiya insaan", "Stupid", "Dummy"],
    correct: 1,
    funFact: "Your nose scrunches, you try to stay mad, you end up smiling. That's our warmest insult. It's ours.",
  },
  {
    category: 'playful',
    question: "What do you steal from me and declare is 'ours'?",
    options: ["Phone charger", "Hoodies", "Wallet", "Headphones"],
    correct: 1,
    funFact: "You parade around in my hoodies like you've won a prize. Honestly, you have — you've won me completely.",
  },
  {
    category: 'playful',
    question: "How do you get my attention when I'm on my phone?",
    options: ["Call my name repeatedly", "Throw something", "Climb into my lap", "Ignore me back"],
    correct: 2,
    funFact: "Like a cat demanding absolute attention. I surrender every single time and I wouldn't have it any other way.",
  },
  {
    category: 'playful',
    question: "What voice do you use when you want something from me?",
    options: ["Angry voice", "Baby voice", "Normal voice", "Dead silence"],
    correct: 1,
    funFact: "Weaponized cuteness. It's manipulative, adorable, and I am completely, helplessly powerless against it.",
  },
  {
    category: 'playful',
    question: "What do you do when you're happy and think I'm not watching?",
    options: ["Sing loudly", "Random dance moves", "Jump around", "Talk to yourself"],
    correct: 1,
    funFact: "But I'm always watching. That carefree, unguarded joy is my absolute favorite version of you.",
  },
  {
    category: 'playful',
    question: "How do you win our competitions?",
    options: ["You usually don't", "By clever cheating", "Every single time", "Only sometimes"],
    correct: 2,
    funFact: "'I bet I can make you lose control first' — you always win. I love losing to you more than winning anything else.",
  },
  {
    category: 'playful',
    question: "What's your 'quiet voice' actually like in practice?",
    options: ["An actual whisper", "Soft and gentle", "Louder than your normal voice", "Complete silence"],
    correct: 2,
    funFact: "Your inability to whisper is one of the most adorable things about you. Your 'quiet' is everyone else's loud.",
  },
  {
    category: 'playful',
    question: "What do you get excited about sharing with me randomly?",
    options: ["Work updates", "Memes and shower thoughts", "Gossip", "Future plans"],
    correct: 1,
    funFact: "3 PM shower thoughts, conspiracy theories about pigeons — your mind is beautifully, perfectly chaotic.",
  },

  // ── DISTANCE ────────────────────────────────────────────────────────────────
  {
    category: 'distance',
    question: "What do you send me from Nagpur to Hyderabad?",
    options: ["Letters", "Food", "T-shirts and shirts", "Books"],
    correct: 2,
    funFact: "Packages arriving with your handwriting, clothes chosen by you — our love language across every mile.",
  },
  {
    category: 'distance',
    question: "What do I do when your packages arrive?",
    options: ["Open immediately and wait", "Wait for your call first", "Send you photos wearing them", "Put them away for later"],
    correct: 2,
    funFact: "And you call immediately after to tell me how good I look. 'That color is perfect on you.' Every single time.",
  },
  {
    category: 'distance',
    question: "What notes do you include in the packages you send?",
    options: ["No note", "'From Nagpur with love'", "'For my favorite person'", "'Enjoy this'"],
    correct: 2,
    funFact: "Simple words that mean everything. Every package is a love letter in disguise with a tracking number.",
  },
  {
    category: 'distance',
    question: "How do we shop for each other across the distance?",
    options: ["We don't really shop", "In person only during visits", "Online together on video calls", "Surprise each other blindly"],
    correct: 2,
    funFact: "Late-night video calls arguing about which style suits me better, laughing as we add things to cart together.",
  },
  {
    category: 'distance',
    question: "What city became 'our city' after you left the office?",
    options: ["Mumbai", "Hyderabad", "Nagpur", "Pune"],
    correct: 2,
    funFact: "November 2025 onwards — Nagpur became home, your room became our sanctuary, your city became ours.",
  },
  {
    category: 'distance',
    question: "What happens when we haven't seen each other for weeks?",
    options: ["Casual hello, catch up slowly", "We barely make it past the door", "Long talk first over tea", "Go out to eat first"],
    correct: 1,
    funFact: "Distance makes every reunion explosive — weeks of need combusting the instant the door closes.",
  },
  {
    category: 'distance',
    question: "How did we maintain intimacy during long distance?",
    options: ["Just texting", "Phone calls only", "Video calls with virtual intimacy", "We didn't really"],
    correct: 2,
    funFact: "Distance couldn't kill desire. Watching each other, being vulnerable — keeping the fire alive across every mile.",
  },
  {
    category: 'distance',
    question: "What time do our deepest conversations usually happen?",
    options: ["Morning coffee", "Afternoon break", "Evening calls", "2–3 AM confessions"],
    correct: 3,
    funFact: "Those late-night texts where we shared secrets we'd never told anyone else — 2 AM vulnerability became our foundation.",
  },

  // ── IDENTITY ────────────────────────────────────────────────────────────────
  {
    category: 'identity',
    question: "What demand do you make when I'm busy on my phone?",
    options: ["Nothing — you wait", "Ask for help politely", "Attention like a demanding cat", "Just send a meme"],
    correct: 2,
    funFact: "Climbing into my lap until the phone disappears. You deserve to be the center of attention and you know it.",
  },
  {
    category: 'identity',
    question: "What do you do right after I say something dirty to you?",
    options: ["Laugh loudly", "Bite your lip trying not to smile", "Roll your eyes", "Ignore it entirely"],
    correct: 1,
    funFact: "You always fail at hiding that smile. The lip bite before it breaks through is one of my favorite things about you.",
  },
  {
    category: 'identity',
    question: "What's our private gallery password?",
    options: ["iloveyou", "falgunimoiz2025", "forever2025", "ours2025"],
    correct: 1,
    funFact: "Protecting our most intimate memories — for our eyes only, always.",
  },
]

const CATEGORY_STYLE = {
  origin:   { pill: 'text-amber-300/60 bg-amber-500/8 border-amber-500/15',   bar: 'bg-amber-500/60'   },
  intimate: { pill: 'text-rose-300/60 bg-rose-500/8 border-rose-500/15',      bar: 'bg-rose-500/60'    },
  playful:  { pill: 'text-yellow-300/60 bg-yellow-500/8 border-yellow-500/15', bar: 'bg-yellow-400/60'  },
  distance: { pill: 'text-blue-300/60 bg-blue-500/8 border-blue-500/15',      bar: 'bg-blue-400/60'    },
  identity: { pill: 'text-purple-300/60 bg-purple-500/8 border-purple-500/15', bar: 'bg-purple-400/60'  },
}

const getResultMessage = (score, total) => {
  const pct = (score / total) * 100
  if (pct === 100) return "Perfect score, Falguni. You remember every detail, every moment, every whispered secret. From the black lace gift to packages arriving at my door — you've been present for all of it. You're not just my girlfriend. You're my soulmate, my home, my everything."
  if (pct >= 90)   return "Nearly perfect, my love. You know our story almost as well as I do. Every moment with you is worth remembering — from intimate gifts to shopping together online — and you clearly do."
  if (pct >= 75)   return "Incredible. You remember our journey with the same intensity I do. From that Lonavala fight to black lace nights to packages across cities — you've been present for all of it."
  if (pct >= 60)   return "Good, but I know you feel us deeper than this score shows. Let's create more unforgettable memories — more gifts, more surprises, more moments that refuse to fade."
  if (pct >= 50)   return "We need more late-night conversations, more whispered confessions, more moments that burn into your memory like they do mine."
  return "Looks like we need more time together — more Nagpur weekends, more hotel nights, more packages with handwritten notes, more mornings with nowhere to be."
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Quiz = () => {
  const [current, setCurrent]         = useState(0)
  const [score, setScore]             = useState(0)
  const [showResult, setShowResult]   = useState(false)
  const [selected, setSelected]       = useState(null)
  const [answered, setAnswered]       = useState(false)

  const q = QUESTIONS[current]
  const catStyle = CATEGORY_STYLE[q?.category] || CATEGORY_STYLE.origin
  const progress = ((current + 1) / QUESTIONS.length) * 100

  const handleAnswer = (index) => {
    if (answered) return
    setSelected(index)
    setAnswered(true)
    if (index === q.correct) setScore(s => s + 1)
  }

  const next = () => {
    if (current < QUESTIONS.length - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const reset = () => {
    setCurrent(0); setScore(0)
    setShowResult(false); setSelected(null); setAnswered(false)
  }

  return (
    <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden flex items-center justify-center">

      {/* ── Ambient ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/8 rounded-full blur-[150px]" />
      </div>

      <div className="container max-w-3xl mx-auto px-6 relative z-10">

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={`q-${current}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0a0a0c]/90 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Progress bar */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-white/5">
                <motion.div
                  className={`h-full ${catStyle.bar}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <span className={`text-[8px] font-bold uppercase tracking-[0.25em] px-2 py-1 rounded-full border ${catStyle.pill}`}>
                    {q.category}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">
                    {current + 1} / {QUESTIONS.length}
                  </span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">
                  Score: {score}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-xl md:text-3xl font-serif leading-snug mb-10 text-white/85">
                {q.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {q.options.map((option, index) => {
                  const isCorrect  = index === q.correct
                  const isSelected = selected === index
                  let cls = 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 text-white/55 cursor-pointer'
                  if (answered) {
                    if (isCorrect)                cls = 'bg-emerald-500/8 border-emerald-500/30 text-emerald-200/80 cursor-default'
                    else if (isSelected)          cls = 'bg-red-500/8 border-red-500/30 text-red-200/70 cursor-default'
                    else                          cls = 'border-white/3 text-white/20 opacity-40 cursor-default'
                  }
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                      className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between ${cls}`}
                    >
                      <span className="font-serif text-sm md:text-base">{option}</span>
                      {answered && isCorrect  && <Check size={16} className="text-emerald-400/80 shrink-0" />}
                      {answered && isSelected && !isCorrect && <X size={16} className="text-red-400/80 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {/* Fun fact + Next */}
              <AnimatePresence>
                {answered && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pt-5 border-t border-white/5"
                  >
                    <div className="bg-rose-500/5 border border-rose-500/12 p-4 rounded-xl mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Star size={10} fill="currentColor" className="text-rose-400/60" />
                        <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-rose-400/50">Memory Unlocked</span>
                      </div>
                      <p className="text-sm font-serif italic text-white/60 leading-relaxed">
                        "{q.funFact}"
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <motion.button
                        onClick={next}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-7 py-2.5 bg-white/[0.04] border border-white/10 rounded-full font-bold uppercase tracking-widest text-[10px] text-white/50 hover:bg-white/[0.08] hover:border-white/20 hover:text-white/70 transition-all duration-300"
                      >
                        {current === QUESTIONS.length - 1 ? 'See Results' : 'Next'}
                        <ArrowRight size={12} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

          ) : (
            // ── Results ──
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Trophy */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/[0.03] border border-white/8 mb-8"
              >
                <Trophy size={40} className="text-white/40" />
              </motion.div>

              {/* Score */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-serif mb-3 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
              >
                {score} / {QUESTIONS.length}
              </motion.h2>
              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/20 mb-10">
                Final Score · {Math.round((score / QUESTIONS.length) * 100)}% Accuracy
              </p>

              {/* Category breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-2 mb-10"
              >
                {Object.keys(CATEGORY_STYLE).map((cat) => {
                  const total   = QUESTIONS.filter(q => q.category === cat).length
                  const style   = CATEGORY_STYLE[cat]
                  return (
                    <span key={cat} className={`px-3 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest border ${style.pill}`}>
                      {cat} · {total}q
                    </span>
                  )
                })}
              </motion.div>

              {/* Result message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-2xl max-w-2xl mx-auto mb-10"
              >
                <Heart size={14} fill="currentColor" className="text-rose-400/40 mx-auto mb-4" />
                <p className="font-serif text-base md:text-lg leading-loose italic text-white/55">
                  "{getResultMessage(score, QUESTIONS.length)}"
                </p>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3"
              >
                <motion.button
                  onClick={reset}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all font-bold uppercase tracking-widest text-[10px] text-white/35 hover:text-white/60"
                >
                  <RefreshCcw size={12} /> Replay
                </motion.button>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Quiz

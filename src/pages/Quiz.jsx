import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const questions = [
    {
      question: "Where did our story truly begin?",
      options: ["Office meeting", "Lonavala company trip", "Coffee date", "Random text"],
      correct: 1,
      funFact: "A truth and dare game that led to a misunderstanding, then a fight, then... everything."
    },
    {
      question: "What sparked our first real conversation after the fight?",
      options: ["Apology text", "Clearing the misunderstanding", "Accidental meeting", "Work discussion"],
      correct: 1,
      funFact: "We went from arguing to opening up about our deepest fantasies in just weeks."
    },
    {
      question: "Where did we share our first kiss?",
      options: ["Office cafeteria", "Office washroom", "Parking lot", "Conference room"],
      correct: 1,
      funFact: "Not romantic, but unforgettable. Planned over WhatsApp the night before."
    },
    {
      question: "What month did we share our first kiss?",
      options: ["July 2025", "August 2025", "September 2025", "October 2025"],
      correct: 1,
      funFact: "Mid-August 2025 - hearts racing, forbidden, absolutely perfect."
    },
    {
      question: "What did we do in our first hotel room together?",
      options: ["Had sex", "Everything except sex", "Just talked", "Watched movies"],
      correct: 1,
      funFact: "Late August 2025 - exploring, discovering, building anticipation for what came next."
    },
    {
      question: "Which city witnessed our first time making love?",
      options: ["Mumbai", "Nagpur", "Hyderabad", "Delhi"],
      correct: 2,
      funFact: "October 2025 - Hyderabad hotels became our sacred space where every fantasy became reality."
    },
    {
      question: "What intimate gift did I give you before you left the office?",
      options: ["Jewelry", "Black lace lingerie", "Perfume", "Watch"],
      correct: 1,
      funFact: "I wanted to give you something intimate, something that said 'you're beautiful and sensual.'"
    },
    {
      question: "Where did you wear that black lace set for the first time?",
      options: ["At home", "Nagpur hotel", "Last Hyderabad hotel", "Never wore it"],
      correct: 2,
      funFact: "When you stepped out of that bathroom, time stopped. You looked absolutely breathtaking."
    },
    {
      question: "How did I react when I saw you in that black lace lingerie?",
      options: ["Smiled", "Couldn't speak", "Took photos", "Laughed"],
      correct: 1,
      funFact: "I had no words. You were the most stunning thing I'd ever seen—beauty, confidence, perfection."
    },
    {
      question: "What do you send me from Nagpur to Hyderabad?",
      options: ["Letters", "Food", "T-shirts and shirts", "Books"],
      correct: 2,
      funFact: "Packages arriving with your handwriting, clothes you chose for me—our love language across distance."
    },
    {
      question: "What do I do when your packages arrive?",
      options: ["Open immediately", "Wait for you to call", "Send photos of me wearing them", "Put them away"],
      correct: 2,
      funFact: "And you call immediately after to tell me how good I look. 'That color is perfect on you.'"
    },
    {
      question: "What notes do you include with the packages you send?",
      options: ["None", "'From Nagpur'", "'For my favorite person'", "'Enjoy'"],
      correct: 2,
      funFact: "Simple words that mean everything. Every package is a love letter in disguise."
    },
    {
      question: "How do we shop for each other despite the distance?",
      options: ["Don't shop", "In person only", "Online together on video calls", "Surprise each other"],
      correct: 2,
      funFact: "Late-night video calls arguing about which style suits me better, laughing as we add to cart together."
    },
    {
      question: "What's your cute nickname when you're being sarcastic with me?",
      options: ["Baby", "Bhai saab", "Love", "Sweetheart"],
      correct: 1,
      funFact: "That mock-serious tone you use when you say 'Bhai saab' makes me laugh every single time."
    },
    {
      question: "What's your favorite insult for me (said with love)?",
      options: ["Idiot", "Chutiya insaan", "Stupid", "Dummy"],
      correct: 1,
      funFact: "The way your nose scrunches when you try to be mad but end up smiling - that's my favorite."
    },
    {
      question: "What city became 'our city' after you left the office?",
      options: ["Mumbai", "Hyderabad", "Nagpur", "Pune"],
      correct: 2,
      funFact: "November 2025 onwards - Nagpur became home, your room became our sanctuary."
    },
    {
      question: "What do you steal from me and claim is 'ours'?",
      options: ["Phone", "Hoodies", "Wallet", "Charger"],
      correct: 1,
      funFact: "You parade around in my hoodies like you've won a prize, and honestly, you have - you've won me."
    },
    {
      question: "How do you get my attention when I'm on my phone?",
      options: ["Call my name", "Throw something", "Climb into my lap", "Ignore me back"],
      correct: 2,
      funFact: "Like a cat demanding attention, and I surrender every single time."
    },
    {
      question: "What time do our deepest conversations usually happen?",
      options: ["Morning", "Afternoon", "Evening", "2-3 AM"],
      correct: 3,
      funFact: "Those late-night texts where we shared fantasies we'd never told anyone else."
    },
    {
      question: "What's our private gallery password?",
      options: ["iloveyou", "falgunimoiz2025", "forever2025", "ours"],
      correct: 1,
      funFact: "Protecting our most intimate memories - for our eyes only."
    },
    {
      question: "What do you do when you're happy and think I'm not watching?",
      options: ["Sing", "Random dance moves", "Jump around", "Talk to yourself"],
      correct: 1,
      funFact: "But I'm always watching, and it's the cutest thing I've ever seen."
    },
    {
      question: "What voice do you use when you want something from me?",
      options: ["Angry voice", "Baby voice", "Normal voice", "Whisper"],
      correct: 1,
      funFact: "It's my kryptonite. You weaponize cuteness and I'm completely powerless."
    },
    {
      question: "When did you leave the office?",
      options: ["September 2025", "October 2025", "November 2025", "December 2025"],
      correct: 1,
      funFact: "Late October 2025 - heartbreaking but freeing. No more hiding, but I still cried."
    },
    {
      question: "What happens when we haven't seen each other for weeks?",
      options: ["Casual hello", "We barely make it through the door", "Long talk first", "Go out to eat"],
      correct: 1,
      funFact: "Distance makes every reunion explosive - weeks of need combusting instantly."
    },
    {
      question: "What did you challenge me with one night?",
      options: ["'Cook for me'", "'Make me laugh'", "'Make me forget my own name'", "'Beat me at games'"],
      correct: 2,
      funFact: "We spent hours trying, and we succeeded. Multiple times."
    },
    {
      question: "How many months have we been together?",
      options: ["4 months", "5 months", "6 months", "7 months"],
      correct: 2,
      funFact: "Since Lonavala in July 2025 - six months that feel like lifetimes."
    },
    {
      question: "What do I love most about your body?",
      options: ["Your curves", "Your skin", "The way you move", "Absolutely everything"],
      correct: 3,
      funFact: "Every inch, every curve, every spot that makes you gasp - all of it, always."
    },
    {
      question: "How do you look at me when you want me?",
      options: ["Direct stare", "Shy glance", "Half-lidded gaze", "Wink"],
      correct: 2,
      funFact: "That look that says everything without saying anything - no words necessary."
    },
    {
      question: "What's your 'quiet voice' actually like?",
      options: ["Whisper", "Soft", "Louder than normal voice", "Silent"],
      correct: 2,
      funFact: "Your inability to whisper is adorable. Your 'quiet' is everyone else's loud."
    },
    {
      question: "What do you get excited about sharing with me at random times?",
      options: ["Work updates", "Memes and random thoughts", "Gossip", "Plans"],
      correct: 1,
      funFact: "3 PM shower thoughts, conspiracy theories about pigeons - your mind is beautifully chaotic."
    },
    {
      question: "What marks did you leave on me that one intense night?",
      options: ["Hickeys", "Scratch marks on my back", "Bite marks", "Lipstick stains"],
      correct: 1,
      funFact: "I wore them like badges of honor. That Nagpur night was unforgettable."
    },
    {
      question: "How do you act when we're done making love?",
      options: ["Get up immediately", "Fall asleep", "Clingy and soft", "Check phone"],
      correct: 2,
      funFact: "All soft and vulnerable, refusing to let go - completely different from moments before."
    },
    {
      question: "What do you say when you're on the edge?",
      options: ["'Oh God'", "'Don't stop'", "My name - 'Moiz'", "Nothing"],
      correct: 2,
      funFact: "The way you say my name when you're desperate - most beautiful sound ever."
    },
    {
      question: "What's the longest we spent in bed without leaving the room?",
      options: ["A few hours", "Half a day", "An entire day", "Two days"],
      correct: 2,
      funFact: "That mid-November Nagpur day - morning, afternoon, evening. We forgot the world existed."
    },
    {
      question: "How did we maintain intimacy during long distance?",
      options: ["Just texting", "Phone calls only", "Video calls with virtual intimacy", "We didn't"],
      correct: 2,
      funFact: "Distance couldn't stop us. Watching each other, pleasuring ourselves together - keeping the fire alive."
    },
    {
      question: "What do you demand when I'm busy?",
      options: ["Nothing", "Help with something", "Attention like a cat", "Food"],
      correct: 2,
      funFact: "Climbing into my lap until I give in, and honestly, you deserve to be the center of attention."
    },
    {
      question: "How do you win our competitions?",
      options: ["You don't", "By cheating", "Every single time", "Sometimes"],
      correct: 2,
      funFact: "'I bet I can make you lose control first' - you always win, and I love it."
    },
    {
      question: "What emotion did I feel when you wore that black lace for me?",
      options: ["Happy", "Excited", "Speechless awe", "Nervous"],
      correct: 2,
      funFact: "You were confidence and beauty personified. I couldn't find words—I still can't."
    },
    {
      question: "What makes our story special?",
      options: [
        "We met at work",
        "Started with a fight, built with trust, sealed with passion",
        "Long distance",
        "Good chemistry"
      ],
      correct: 1,
      funFact: "From Lonavala misunderstanding to Hyderabad hotels to black lace nights to Nagpur sanctuary - we built something extraordinary."
    }
  ]

  const handleAnswer = (index) => {
    setSelectedAnswer(index)
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) {
      return "Perfect score, Falguni. You remember every detail, every moment, every whispered secret. From the black lace gift to packages arriving at my door—you've been present for all of it. You're not just my girlfriend - you're my soulmate, my home, my everything."
    } else if (percentage >= 90) {
      return "Nearly perfect, my love. You know our story almost as well as I do. Every moment with you is worth remembering—from intimate gifts to shopping together online—and you clearly do."
    } else if (percentage >= 75) {
      return "Incredible. You remember our journey with the same intensity I do. From that Lonavala fight to black lace nights to packages across cities to Nagpur reunions - you've been present for all of it."
    } else if (percentage >= 60) {
      return "Good, but I know you feel us deeper than this score shows. Let's create more unforgettable memories together—more gifts, more surprises, more moments."
    } else if (percentage >= 50) {
      return "We need more late-night conversations, more whispered confessions, more thoughtful gifts, more moments that burn into your memory like they do mine."
    } else {
      return "Looks like we need more time together - more Nagpur weekends, more hotel nights, more packages with handwritten notes, more moments where the world disappears and it's just us."
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-normal tracking-ultra text-center mb-8 text-near-white">
            How Well Do You Know Us?
          </h2>
          <p className="text-center text-soft-purple opacity-70 font-cinzel italic text-lg mb-24">
            Test your memory of our journey from Lonavala to forever
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              className="glass-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-soft-purple opacity-70 tracking-widest uppercase font-inter">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                  <div className="text-sm text-muted-magenta opacity-70 tracking-wider font-inter">
                    Score: {score}
                  </div>
                </div>
                <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-soft-purple to-muted-magenta"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-2xl md:text-3xl font-cinzel tracking-wider mb-10 leading-relaxed text-near-white">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-5 md:p-6 border rounded-sm font-inter
                               tracking-wide transition-all duration-500 relative overflow-hidden
                               ${selectedAnswer === index
                                 ? index === questions[currentQuestion].correct
                                   ? 'border-green-500/60 bg-green-500/10 text-near-white'
                                   : 'border-red-500/60 bg-red-500/10 text-near-white'
                                 : selectedAnswer !== null && index === questions[currentQuestion].correct
                                   ? 'border-green-500/60 bg-green-500/10 text-near-white'
                                   : 'border-white/[0.15] hover:border-muted-magenta/40 hover:bg-white/[0.03] text-near-white'
                               }
                               disabled:cursor-not-allowed`}
                    whileHover={selectedAnswer === null ? { x: 4 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10">{option}</span>
                    {selectedAnswer === index && index === questions[currentQuestion].correct && (
                      <motion.div
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✓
                      </motion.div>
                    )}
                    {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                      <motion.div
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✗
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Fun Fact */}
              {selectedAnswer !== null && (
                <motion.div
                  className="mt-8 p-6 bg-muted-magenta/5 border border-muted-magenta/20 rounded-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-sm font-cinzel italic text-soft-purple opacity-90 leading-relaxed">
                    💭 {questions[currentQuestion].funFact}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              className="glass-card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Score Display */}
              <div className="mb-10">
                <motion.div
                  className="text-7xl md:text-8xl font-cinzel font-semibold text-muted-magenta mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {score}/{questions.length}
                </motion.div>
                <div className="text-sm text-soft-purple opacity-70 tracking-widest uppercase font-inter">
                  Your Score • {Math.round((score / questions.length) * 100)}% Correct
                </div>
              </div>

              {/* Result Message */}
              <p className="font-cinzel italic text-lg md:text-xl leading-loose tracking-wide text-near-white opacity-90 mb-12 max-w-2xl mx-auto">
                {getResultMessage()}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-10 py-4 border border-muted-magenta/40 rounded-sm
                             font-inter text-sm tracking-widest uppercase text-near-white
                             hover:bg-muted-magenta/10 hover:border-muted-magenta/60
                             transition-all duration-500"
                >
                  Take Again
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-10 py-4 bg-muted-magenta/20 border border-muted-magenta/50 rounded-sm
                             font-inter text-sm tracking-widest uppercase text-near-white
                             hover:bg-muted-magenta/30 hover:border-muted-magenta/70
                             transition-all duration-500"
                >
                  Back to Home
                </button>
              </div>

              {/* Perfect Score Special Message */}
              {score === questions.length && (
                <motion.div
                  className="mt-12 p-6 bg-gradient-to-r from-muted-magenta/10 to-soft-purple/10
                             border border-muted-magenta/30 rounded-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="animate-heartbeat inline-block mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        className="fill-muted-magenta"
                      />
                    </svg>
                  </div>
                  <p className="font-cinzel italic text-base text-near-white opacity-90">
                    Perfect score means you've been paying attention to every detail,
                    every moment, every word, every gift, every package, every whispered confession.
                    That's how I know you love me as deeply as I love you. ❤️
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Quiz

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowRight, Trophy, RefreshCcw, HelpCircle, Star } from 'lucide-react'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)

  // ==========================================
  // ===== QUESTION DATA (PRESERVED) ========
  // ==========================================
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

  // ==========================================
  // ===== LOGIC HANDLERS ===================
  // ==========================================

  const handleAnswer = (index) => {
    if (isAnswered) return
    setSelectedAnswer(index)
    setIsAnswered(true)

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setShowResult(true)
    }
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
    setIsAnswered(false)
  }

  return (
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden flex items-center justify-center">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-3xl mx-auto px-6 relative z-10">

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="question-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                <motion.div
                  className="h-full bg-rose-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Header Info */}
              <div className="flex justify-between items-center mb-8 opacity-60 text-xs font-mono tracking-widest uppercase">
                <span>Question {currentQuestion + 1} / {questions.length}</span>
                <span>Score: {score}</span>
              </div>

              {/* Question */}
              <h2 className="text-2xl md:text-4xl font-serif leading-tight mb-10 text-white/90">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {questions[currentQuestion].options.map((option, index) => {
                  const isCorrect = index === questions[currentQuestion].correct
                  const isSelected = selectedAnswer === index

                  let buttonStyle = "border-white/10 hover:bg-white/5 hover:border-white/30 text-white/70"
                  if (isAnswered) {
                    if (isCorrect) buttonStyle = "bg-green-500/10 border-green-500/50 text-green-200"
                    else if (isSelected && !isCorrect) buttonStyle = "bg-red-500/10 border-red-500/50 text-red-200"
                    else buttonStyle = "border-white/5 text-white/30 opacity-50"
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswered}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${buttonStyle}`}
                    >
                      <span className="font-serif text-lg">{option}</span>
                      {isAnswered && isCorrect && <Check size={20} className="text-green-400" />}
                      {isAnswered && isSelected && !isCorrect && <X size={20} className="text-red-400" />}
                    </button>
                  )
                })}
              </div>

              {/* Footer: Fun Fact & Next Button */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-6 border-t border-white/10"
                  >
                    <div className="bg-rose-900/10 border border-rose-500/20 p-4 rounded-xl mb-6">
                      <div className="flex items-center gap-2 mb-2 text-rose-400 text-xs font-bold uppercase tracking-widest">
                        <Star size={12} fill="currentColor" /> Memory Unlocked
                      </div>
                      <p className="text-sm md:text-base font-serif italic text-white/80 leading-relaxed">
                        "{questions[currentQuestion].funFact}"
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={nextQuestion}
                        className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-white/90 transition-all hover:scale-105"
                      >
                        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ) : (
            // ================= RESULT SCREEN =================
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="inline-block p-6 rounded-full bg-gradient-to-tr from-rose-500/20 to-indigo-500/20 border border-white/10 mb-8 animate-pulse">
                <Trophy size={64} className="text-white" />
              </div>

              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4 bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">
                {score} / {questions.length}
              </h2>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-12">
                Final Score • {Math.round((score / questions.length) * 100)}% Accuracy
              </p>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-2xl mx-auto mb-12">
                <p className="font-serif text-lg md:text-xl leading-loose italic text-white/90">
                  "{getResultMessage()}"
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 hover:border-white/50 transition-all font-bold uppercase tracking-widest text-xs"
                >
                  <RefreshCcw size={16} /> Replay
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-all font-bold uppercase tracking-widest text-xs"
                >
                  Back to Home
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Quiz

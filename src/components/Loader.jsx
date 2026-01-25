import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-almost-black relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted-magenta/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated heart */}
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.2, 1],
            filter: [
              'drop-shadow(0 0 8px rgba(192, 132, 252, 0.3))',
              'drop-shadow(0 0 16px rgba(192, 132, 252, 0.6))',
              'drop-shadow(0 0 8px rgba(192, 132, 252, 0.3))'
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              className="fill-muted-magenta"
            />
          </svg>

          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-muted-magenta/30"
            animate={{
              scale: [1, 2, 2],
              opacity: [0.5, 0.2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-muted-magenta/30"
            animate={{
              scale: [1, 2, 2],
              opacity: [0.5, 0.2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.p
            className="font-cinzel text-lg md:text-xl tracking-wider text-near-white mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading our story...
          </motion.p>
          <p className="font-inter text-xs tracking-widest uppercase text-soft-purple opacity-50">
            Moiz & Falguni
          </p>
        </motion.div>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-muted-magenta"
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <motion.div
        className="absolute bottom-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="font-cinzel italic text-sm text-soft-purple opacity-40 tracking-wide">
          From Lonavala to forever
        </p>
      </motion.div>
    </div>
  )
}

export default Loader

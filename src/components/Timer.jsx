import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden text-white">

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px]" />

      {/* --- CENTER CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12">

        {/* 1. The Breathing Heart */}
        <div className="relative">
          {/* Inner Glow */}
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-rose-500 blur-xl rounded-full"
          />

          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1, 1.1, 1] }} // Double beat pattern
            transition={{
              duration: 1.5,
              times: [0, 0.1, 0.2, 0.3, 1], // Timing for thump-thump... pause
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart size={48} fill="#e11d48" className="text-rose-600 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
          </motion.div>
        </div>

        {/* 2. Cinematic Loading Text */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl italic tracking-wide text-white"
          >
            Moiz & Falguni
          </motion.h2>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
              Loading Memories
            </span>

            {/* Thin Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                className="w-full h-full bg-gradient-to-r from-transparent via-rose-500 to-transparent"
              />
            </div>
          </div>
        </div>

      </div>

      {/* --- FOOTER QUOTE --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 text-center px-6"
      >
        <p className="font-serif italic text-xs text-white/30 tracking-widest">
          "From Lonavala to Forever"
        </p>
      </motion.div>

    </div>
  )
}

export default Loader

import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'
import {
  Home, BookOpen, Navigation2, Camera, ImageIcon,
  MapPin, HeartHandshake, Zap, Brain,
  HelpCircle, Mail, Shield, Map,
  User, Sparkles
} from 'lucide-react'

// ─── NAV ITEMS — 16 routes matching App.jsx ───────────────────────────────────
// Sources: meta.pages[] + App.jsx Routes
const NAV_ITEMS = [
  { path: '/',              label: 'Home',      Icon: Home          },
  { path: '/story',         label: 'Story',     Icon: BookOpen      },
  { path: '/journey',       label: 'Journey',   Icon: Navigation2   },
  { path: '/memories',      label: 'Memories',  Icon: Camera        },
  { path: '/gallery',       label: 'Gallery',   Icon: ImageIcon     },
  { path: '/places',        label: 'Places',    Icon: MapPin        },
  { path: '/reasons',       label: 'Reasons',   Icon: HeartHandshake},
  { path: '/compatibility', label: 'Alignment', Icon: Zap           },
  { path: '/inside',        label: 'Inside',    Icon: Brain         },
  { path: '/quiz',          label: 'Quiz',      Icon: HelpCircle    },
  { path: '/letter',        label: 'Letter',    Icon: Mail          },
  { path: '/promises',      label: 'Promises',  Icon: Shield        },
  { path: '/timeline',      label: 'Timeline',  Icon: Map           },
  { path: '/about',         label: 'About',     Icon: User          },
  { path: '/thankyou',      label: 'Thank You', Icon: Sparkles      },
]

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen,   setIsOpen]   = useState(false)
  const location                = useLocation()

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on route change
  useEffect(() => { setIsOpen(false) }, [location.pathname])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* ── Desktop Nav ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled
            ? 'bg-[#060608]/90 backdrop-blur-xl py-3 border-b border-white/4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {NAV_ITEMS.map(({ path, label, Icon }) => (
              <NavLink key={path} to={path}>
                {({ isActive }) => (
                  <div className="relative flex flex-col items-center gap-1 group">
                    <span className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? 'text-white/80' : 'text-white/25 group-hover:text-white/55'
                    }`}>
                      {label}
                    </span>
                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.div
                        layoutId="navDot"
                        className="w-1 h-1 rounded-full bg-rose-500/70"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Top Bar ── */}
      <div className={`fixed top-0 left-0 right-0 z-50 md:hidden flex justify-between items-center px-5 py-4 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#060608]/95 backdrop-blur-xl border-b border-white/4'
          : 'bg-transparent'
      }`}>
        {/* Wordmark */}
        <NavLink
          to="/"
          className="relative z-50 flex items-center gap-1.5"
        >
          <span className="font-serif text-base text-white/60 tracking-widest">M</span>
          <Heart size={10} fill="currentColor" className="text-rose-500/50" />
          <span className="font-serif text-base text-white/60 tracking-widest">F</span>
        </NavLink>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(o => !o)}
          className="relative z-50 w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/8 text-white/40 hover:text-white/70 hover:border-white/15 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={16} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={16} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#060608] md:hidden flex flex-col pt-20 pb-10 px-8 overflow-y-auto"
          >
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rose-900/6 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-900/5 rounded-full blur-[100px]" />
            </div>

            {/* Nav list */}
            <nav className="flex flex-col gap-1 relative z-10">
              {NAV_ITEMS.map(({ path, label, Icon }, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035, duration: 0.4, ease: 'easeOut' }}
                >
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                      <div className={`flex items-center gap-4 px-3 py-3.5 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-white/[0.04] border border-white/8'
                          : 'border border-transparent hover:bg-white/[0.02]'
                      }`}>
                        {/* Icon */}
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'bg-rose-500/10 border border-rose-500/20'
                            : 'bg-white/[0.03] border border-white/5'
                        }`}>
                          <Icon
                            size={14}
                            className={isActive ? 'text-rose-400/70' : 'text-white/25'}
                          />
                        </div>

                        {/* Label */}
                        <span className={`font-serif text-base tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-white/80' : 'text-white/30'
                        }`}>
                          {label}
                        </span>

                        {/* Active dot */}
                        {isActive && (
                          <motion.div
                            layoutId="mobileActiveDot"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-rose-500/60"
                          />
                        )}
                      </div>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-auto pt-10 text-center relative z-10"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px flex-1 bg-white/5" />
                <Heart size={10} fill="currentColor" className="text-rose-500/20" />
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/12">
                Forever & Always
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

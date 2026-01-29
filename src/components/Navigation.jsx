import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Detect scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  // ALL 15 SCREENS
  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/story', label: 'Story', icon: '📖' },
    { path: '/journey', label: 'Journey', icon: '🛤️' },
    { path: '/memories', label: 'Memories', icon: '📸' },
    { path: '/gallery', label: 'Gallery', icon: '🖼️' },
    { path: '/places', label: 'Places', icon: '📍' },
    { path: '/reasons', label: 'Reasons', icon: '❤️' },
    { path: '/compatibility', label: 'Alignment', icon: '⚡' },
    { path: '/inside', label: 'Inside', icon: '💭' },
    { path: '/quiz', label: 'Quiz', icon: '❓' },
    { path: '/letter', label: 'Letter', icon: '💌' },
    { path: '/promises', label: 'Promises', icon: '🤝' },
    { path: '/timeline', label: 'Timeline', icon: '🗺️' },
    { path: '/about', label: 'About', icon: '👩' },
    { path: '/thankyou', label: 'Thank You', icon: '🙏' }
  ]

  return (
    <>
      {/* --- DESKTOP NAVIGATION --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  relative text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-white/40 hover:text-white'}
                `}
              >
                {({ isActive }) => (
                  <div className="flex flex-col items-center gap-1">
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeDot"
                        className="w-1 h-1 bg-rose-500 rounded-full absolute -bottom-3"
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE NAVIGATION BAR --- */}
      <div className={`fixed top-0 left-0 right-0 z-50 md:hidden flex justify-between items-center px-6 py-5 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <NavLink to="/" className="text-xl font-serif text-white tracking-widest relative z-50">
          M<span className="text-rose-500 mx-1">♥</span>F
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 -mr-2 text-white hover:text-rose-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black md:hidden flex flex-col pt-24 pb-8 px-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      group flex items-center gap-4 text-lg font-serif tracking-wide transition-all
                      ${isActive ? 'text-white' : 'text-white/40'}
                    `}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className={({ isActive }) => isActive ? 'translate-x-2' : 'group-hover:text-white group-hover:translate-x-2 transition-all'}>
                      {item.label}
                    </span>
                    {/* Active Indicator Mobile */}
                    <NavLink to={item.path} className={({isActive}) => isActive ? "ml-auto text-rose-500" : "hidden"}>
                      ●
                    </NavLink>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pt-12 text-center"
            >
              <div className="w-12 h-[1px] bg-white/10 mx-auto mb-6" />
              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
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

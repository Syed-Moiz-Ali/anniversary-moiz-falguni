import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // ALL 14 SCREENS - Original + New 3
  const navItems = [
    // Your Original Screens
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About You', icon: '👩' },
    { path: '/story', label: 'Our Story', icon: '📖' },
    { path: '/journey', label: 'Journey', icon: '🛤️' },
    { path: '/memories', label: 'Memories', icon: '🖼️' },
    { path: '/places', label: 'Places', icon: '📍' },
    { path: '/inside', label: 'Inside', icon: '💭' },
    { path: '/letter', label: 'Letter', icon: '💌' },
    { path: '/gallery', label: 'Gallery', icon: '🖼️' },
    { path: '/reasons', label: 'Reasons', icon: '❤️' },

    // Your Existing New Ones
    { path: '/compatibility', label: 'Compatibility', icon: '⚡' },
    { path: '/quiz', label: 'Quiz', icon: '❓' },

    // NEW 3 SCREENS
    { path: '/promises', label: 'Promises', icon: '🤝' },
    { path: '/timeline', label: 'Timeline', icon: '🗺️' },
    { path: '/thankyou', label: 'Thank You', icon: '🙏' }
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'backdrop-blur-xl bg-almost-black/90 py-2 md:py-3 border-b border-white/[0.1] shadow-lg shadow-muted-magenta/5'
            : 'backdrop-blur-md bg-almost-black/40 py-3 md:py-5'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-center">
            {/* Logo/Brand - Mobile Only */}
            <NavLink
              to="/"
              className="md:hidden font-cinzel text-xl tracking-ultra text-near-white hover:text-muted-magenta transition-colors duration-300"
            >
              M <span className="text-muted-magenta mx-1.5">♥</span> F
            </NavLink>

            {/* Desktop Navigation - 2 rows for 14 items */}
            <div className="hidden md:block">
              <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 max-w-6xl mx-auto">
                {navItems.slice(0, 7).map((item, index) => (  // First 7
                  <DesktopNavItem key={index} item={item} />
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 max-w-6xl mx-auto mt-1 md:mt-2">
                {navItems.slice(7, 15).map((item, index) => (  // Next 7
                  <DesktopNavItem key={index + 7} item={item} />
                ))}
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center
                         border border-white/10 rounded-sm
                         hover:border-muted-magenta/30 hover:bg-white/5
                         transition-all duration-300 z-50"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  className="w-full h-[2px] bg-near-white block rounded-full"
                  animate={mobileMenuOpen ? {
                    rotate: 45,
                    y: 7,
                    backgroundColor: '#c084fc'
                  } : {
                    rotate: 0,
                    y: 0,
                    backgroundColor: '#f5f5f5'
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-[2px] bg-near-white block rounded-full"
                  animate={mobileMenuOpen ? {
                    opacity: 0,
                    x: -10
                  } : {
                    opacity: 1,
                    x: 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-[2px] bg-near-white block rounded-full"
                  animate={mobileMenuOpen ? {
                    rotate: -45,
                    y: -7,
                    backgroundColor: '#c084fc'
                  } : {
                    rotate: 0,
                    y: 0,
                    backgroundColor: '#f5f5f5'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - All 14 items with categories */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-almost-black/98 backdrop-blur-2xl"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative h-full overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="min-h-full flex flex-col items-center justify-center p-6 pt-24 pb-12">
                {/* Brand */}
                <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="font-cinzel text-3xl tracking-ultra text-near-white mb-2">Moiz ♥ Falguni</h2>
                  <p className="text-xs font-inter tracking-widest uppercase text-soft-purple opacity-60">6 Months of Us</p>
                </motion.div>

                {/* Original Screens Section */}
                <motion.div className="w-full max-w-md mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <h3 className="font-cinzel text-lg text-muted-magenta mb-6 text-center tracking-wide">Original Story</h3>
                  <div className="space-y-2">
                    {navItems.slice(0, 11).map((item, index) => (
                      index < 11 && <MobileNavItem key={index} item={item} />
                    ))}
                  </div>
                </motion.div>

                {/* New Screens Section */}
                <motion.div className="w-full max-w-md mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <h3 className="font-cinzel text-lg text-soft-purple mb-6 text-center tracking-wide">New Memories</h3>
                  <div className="space-y-2">
                    {navItems.slice(11).map((item, index) => (
                      <MobileNavItem key={`new-${index}`} item={item} />
                    ))}
                  </div>
                </motion.div>

                {/* Footer */}
                <motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                  <div className="mb-4 animate-heartbeat inline-block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" className="fill-muted-magenta" />
                    </svg>
                  </div>
                  <p className="font-cinzel italic text-sm text-soft-purple opacity-70">Lonavala → Forever</p>
                  <p className="text-xs text-muted-magenta opacity-50 mt-1">196+ days</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Reusable Desktop Nav Item Component
const DesktopNavItem = ({ item }) => (
  <NavLink
    to={item.path}
    className={({ isActive }) =>
      `relative group text-xs font-inter tracking-widest uppercase
       transition-all duration-400 pb-1 md:pb-2
       ${isActive
         ? 'text-near-white opacity-100'
         : 'text-near-white opacity-60 hover:opacity-100 hover:tracking-ultra'
       }`
    }
  >
    {({ isActive }) => (
      <>
        <span className="relative z-10">{item.label}</span>
        <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-muted-magenta
                     transition-all duration-400
                     ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
        />
      </>
    )}
  </NavLink>
)

// Reusable Mobile Nav Item Component
const MobileNavItem = ({ item }) => (
  <NavLink
    to={item.path}
    onClick={() => setMobileMenuOpen(false)}
    className={({ isActive }) =>
      `group relative flex items-center justify-between w-full
       px-6 py-5 rounded-sm overflow-hidden
       border transition-all duration-500
       ${isActive
         ? 'border-muted-magenta/40 bg-muted-magenta/10'
         : 'border-white/[0.08] hover:border-muted-magenta/30 hover:bg-white/[0.03]'
       }`
    }
  >
    <div className="absolute inset-0 bg-gradient-to-r from-muted-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative flex items-center gap-4">
      <span className="text-2xl">{item.icon}</span>
      <span className="font-inter text-lg tracking-widest uppercase text-near-white group-hover:text-muted-magenta transition-all duration-500 group-hover:tracking-ultra">
        {item.label}
      </span>
    </div>
    <svg className="w-5 h-5 text-muted-magenta/50 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </NavLink>
)

export default Navigation

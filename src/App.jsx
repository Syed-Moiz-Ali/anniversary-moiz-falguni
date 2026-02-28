import React, { lazy, Suspense, useEffect, useRef, useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import { Play, SkipForward, Music2, Pause } from 'lucide-react'

// ─── AUDIO ASSETS ─────────────────────────────────────────────────────────────
import song1  from './assets/audio/song1.mp3'
import song2  from './assets/audio/song2.mp3'
import song3  from './assets/audio/song3.mp3'
import song4  from './assets/audio/song4.mp3'
import song5  from './assets/audio/song5.mp3'
import song6  from './assets/audio/song6.mp3'
import song7  from './assets/audio/song7.mp3'
import song8  from './assets/audio/song8.mp3'
import song9  from './assets/audio/song9.mp3'
import song10 from './assets/audio/song10.mp3'
import song11 from './assets/audio/song11.mp3'
import song12 from './assets/audio/song12.mp3'

// ─── LAZY PAGES ───────────────────────────────────────────────────────────────
const Home             = lazy(() => import('./pages/Home'))
const AboutFalguni     = lazy(() => import('./pages/AboutFalguni'))
const OurStory         = lazy(() => import('./pages/OurStory'))
const Journey          = lazy(() => import('./pages/Journey'))
const IntimateMemories = lazy(() => import('./pages/IntimateMemories'))
const Places           = lazy(() => import('./pages/Places'))
const InsideWorld      = lazy(() => import('./pages/InsideWorld'))
const LoveLetter       = lazy(() => import('./pages/LoveLetter'))
const Gallery          = lazy(() => import('./pages/Gallery'))
const Reasons          = lazy(() => import('./pages/Reasons'))
const Quiz             = lazy(() => import('./pages/Quiz'))
const Future           = lazy(() => import('./pages/Future'))
const Compatibility    = lazy(() => import('./pages/Compatibility'))
const Promises         = lazy(() => import('./pages/Promises'))
const FutureTimeline   = lazy(() => import('./pages/FutureTimeline'))
const ThankYou         = lazy(() => import('./pages/ThankYou'))

// ─── PLAYLIST ─────────────────────────────────────────────────────────────────
// Sources: loveMasterData.json · meta.playlist[]
const RAW_PLAYLIST = [
  { src: song1,  name: 'Tum Se Hi'               },
  { src: song2,  name: 'Khoobsurat'              },
  { src: song3,  name: 'Zara Zara'               },
  { src: song4,  name: 'Phir Bhi Tumko Chaahunga'},
  { src: song5,  name: 'Channa Ve'               },
  { src: song6,  name: 'Ve Maahi Kesari'         },
  { src: song7,  name: 'Agar Tum Saath Ho'       },
  { src: song8,  name: 'Tera Ban Jaunga'         },
  { src: song9,  name: 'Perfect'                 },
  { src: song10, name: 'Rewrite The Stars'       },
  { src: song11, name: 'Until I Found You'       },
  { src: song12, name: 'Say You Won\'t Let Go'   },
]

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)

// ─── SCROLL TO TOP ────────────────────────────────────────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// ─── APP ──────────────────────────────────────────────────────────────────────
function App() {
  const audioRef           = useRef(null)
  const fadeRef            = useRef(null)
  const [isPlaying,        setIsPlaying]        = useState(false)
  const [showWelcome,      setShowWelcome]      = useState(true)
  const [songIndex,        setSongIndex]        = useState(0)
  const [playlist,         setPlaylist]         = useState([])
  const [currentSongName,  setCurrentSongName]  = useState('')
  const [playerExpanded,   setPlayerExpanded]   = useState(false)

  // ── Init audio element once ──
  useEffect(() => {
    const audio        = new Audio()
    audio.volume       = 0
    audioRef.current   = audio
    const shuffled     = shuffle(RAW_PLAYLIST)
    setPlaylist(shuffled)
    setCurrentSongName(shuffled[0]?.name ?? '')
    return () => {
      audio.pause()
      audio.src = ''
      clearInterval(fadeRef.current)
    }
  }, [])

  // ── Track change ──
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || playlist.length === 0) return
    const track = playlist[songIndex]
    audio.src   = track.src
    setCurrentSongName(track.name)
    if (isPlaying) audio.play().catch(() => {})
  }, [songIndex, playlist])   // intentionally excludes isPlaying

  // ── Auto-advance on track end ──
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onEnd = () => setSongIndex(i => (i + 1) % playlist.length)
    audio.addEventListener('ended', onEnd)
    return () => audio.removeEventListener('ended', onEnd)
  }, [playlist])

  // ── Fade in helper ──
  const fadeIn = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    clearInterval(fadeRef.current)
    audio.volume   = 0
    let v          = 0
    fadeRef.current = setInterval(() => {
      v = Math.min(v + 0.04, 0.4)
      audio.volume = v
      if (v >= 0.4) clearInterval(fadeRef.current)
    }, 180)
  }, [])

  // ── Fade out helper ──
  const fadeOut = useCallback((cb) => {
    const audio = audioRef.current
    if (!audio) return
    clearInterval(fadeRef.current)
    let v = audio.volume
    fadeRef.current = setInterval(() => {
      v = Math.max(v - 0.05, 0)
      audio.volume = v
      if (v <= 0) { clearInterval(fadeRef.current); cb?.() }
    }, 80)
  }, [])

  const startExperience = useCallback(() => {
    setShowWelcome(false)
    setIsPlaying(true)
    audioRef.current?.play().catch(() => {})
    fadeIn()
  }, [fadeIn])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      fadeOut(() => audio.pause())
    } else {
      audio.play().catch(() => {})
      fadeIn()
    }
    setIsPlaying(p => !p)
  }, [isPlaying, fadeIn, fadeOut])

  const skipNext = useCallback(() => {
    setSongIndex(i => (i + 1) % playlist.length)
  }, [playlist.length])

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#060608] min-h-screen text-white selection:bg-rose-500/60 selection:text-white overflow-x-hidden">

        {/* ── Welcome Gate ── */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              key="welcome"
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060608]"
              exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
            >
              {/* Ambient */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/8 rounded-full blur-[180px]" />
              </div>

              <div className="text-center px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="flex flex-col items-center"
                >
                  {/* Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="mb-8"
                  >
                    <Music2 size={40} className="text-rose-400/50" />
                  </motion.div>

                  {/* Name */}
                  <h1 className="font-serif text-5xl md:text-7xl mb-3 tracking-tight bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent">
                    Falguni
                  </h1>

                  {/* Tagline */}
                  <p className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-white/20 font-bold mb-3">
                    The Story of Us
                  </p>
                  <p className="text-[8px] tracking-[0.25em] uppercase text-white/12 mb-14">
                    Put on headphones · For your eyes only
                  </p>

                  {/* CTA */}
                  <motion.button
                    onClick={startExperience}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group px-10 py-3.5 bg-white/[0.03] border border-white/8 rounded-full hover:bg-white/[0.07] hover:border-white/15 transition-all duration-500"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/45 group-hover:text-white/70 transition-colors flex items-center gap-3">
                      <Play size={10} fill="currentColor" /> Enter World
                    </span>
                  </motion.button>

                  {/* Playlist preview */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-[8px] uppercase tracking-widest text-white/10"
                  >
                    {RAW_PLAYLIST.length} songs · shuffled · autoplay
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Floating Player ── */}
        <AnimatePresence>
          {!showWelcome && (
            <motion.div
              key="player"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
              className="fixed bottom-5 right-5 z-50"
            >
              <motion.div
                layout
                onClick={() => setPlayerExpanded(e => !e)}
                className="flex items-center gap-3 bg-[#0a0a0c]/85 backdrop-blur-2xl border border-white/5 rounded-full py-2 pl-2 pr-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:border-white/10 transition-all duration-300 cursor-pointer"
                // onClick={e => e.stopPropagation()}
              >
                {/* Play / Pause */}
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/8 flex items-center justify-center hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 shrink-0"
                >
                  {isPlaying ? (
                    <div className="flex gap-[2.5px] items-end h-3">
                      {[0, 0.1, 0.2].map((delay, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: ['3px', '11px', '3px'] }}
                          transition={{ duration: 0.7, repeat: Infinity, delay, ease: 'easeInOut' }}
                          className="w-[2px] bg-rose-400/70 rounded-full"
                        />
                      ))}
                    </div>
                  ) : (
                    <Play size={12} fill="currentColor" className="text-white/40 ml-0.5" />
                  )}
                </button>

                {/* Song info */}
                <div className="flex flex-col min-w-0 max-w-[110px]">
                  <span className="text-[7px] uppercase tracking-[0.3em] text-white/20 font-bold leading-none mb-0.5">
                    Now Playing
                  </span>
                  <span className="text-[11px] font-serif text-white/60 truncate leading-tight">
                    {currentSongName}
                  </span>
                </div>

                {/* Skip */}
                <button
                  onClick={skipNext}
                  className="text-white/20 hover:text-white/50 transition-colors duration-300 shrink-0"
                >
                  <SkipForward size={13} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Navigation ── */}
        <Navigation />

        {/* ── Routes ── */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/"            element={<Home />}             />
            <Route path="/about"       element={<AboutFalguni />}     />
            <Route path="/story"       element={<OurStory />}         />
            <Route path="/journey"     element={<Journey />}          />
            <Route path="/memories"    element={<IntimateMemories />} />
            <Route path="/places"      element={<Places />}           />
            <Route path="/inside"      element={<InsideWorld />}      />
            <Route path="/letter"      element={<LoveLetter />}       />
            <Route path="/gallery"     element={<Gallery />}          />
            <Route path="/reasons"     element={<Reasons />}          />
            <Route path="/quiz"        element={<Quiz />}             />
            <Route path="/future"      element={<Future />}           />
            <Route path="/compatibility" element={<Compatibility />}  />
            <Route path="/promises"    element={<Promises />}         />
            <Route path="/timeline"    element={<FutureTimeline />}   />
            <Route path="/thankyou"    element={<ThankYou />}         />
          </Routes>
        </Suspense>

      </div>
    </Router>
  )
}

export default App

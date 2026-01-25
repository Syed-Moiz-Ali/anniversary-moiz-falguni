import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Loader from "./components/Loader";

// Import multiple songs
import song1 from "./assets/audio/song1.mp3";
import song2 from "./assets/audio/song2.mp3";
import song3 from "./assets/audio/song3.mp3";
import song4 from "./assets/audio/song4.mp3";
import song5 from "./assets/audio/song5.mp3";
import song6 from "./assets/audio/song6.mp3";

// Lazy load ALL your pages (original + new)
const Home = lazy(() => import("./pages/Home"));
const AboutFalguni = lazy(() => import("./pages/AboutFalguni"));
const OurStory = lazy(() => import("./pages/OurStory"));
const Journey = lazy(() => import("./pages/Journey"));
const IntimateMemories = lazy(() => import("./pages/IntimateMemories"));
const Places = lazy(() => import("./pages/Places"));
const InsideWorld = lazy(() => import("./pages/InsideWorld"));
const LoveLetter = lazy(() => import("./pages/LoveLetter"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Reasons = lazy(() => import("./pages/Reasons"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Future = lazy(() => import("./pages/Future"));
const Compatibility = lazy(() => import("./pages/Compatibility"));

// NEW 3 SCREENS
const Promises = lazy(() => import("./pages/Promises"));
const Timeline = lazy(() => import("./pages/FutureTimeline"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSongName, setCurrentSongName] = useState("");
  const [controlsExpanded, setControlsExpanded] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);


  const lastScrollY = useRef(0);

  // Playlist with song names
  const playlist = [
    { src: song1, name: "Tum Se Hi" },
    { src: song2, name: "Khoobsurat" },
    { src: song3, name: "Zara Zara" },
    { src: song4, name: "Phir Bhi Tumko Chaahunga" },
    { src: song5, name: "Channa Ve" },
    { src: song6, name: "Ve Maahi Kesari" },
  ];

  // Shuffle playlist on mount
  const [shuffledPlaylist, setShuffledPlaylist] = useState([]);

  useEffect(() => {
    const shuffled = [...playlist].sort(() => Math.random() - 0.5);
    setShuffledPlaylist(shuffled);
    setCurrentSongName(shuffled[0]?.name || "");
  }, []);



  const startExperience = async () => {
    if (audioRef.current && shuffledPlaylist.length > 0) {
      try {
        audioRef.current.volume = 0.3;
        await audioRef.current.play();
        setIsPlaying(true);
        setShowWelcome(false);
      } catch (error) {
        console.log("Could not play audio:", error);
        setShowWelcome(false);
      }
    }
  };

  useEffect(() => {
    const tryAutoplay = async () => {
      if (audioRef.current && shuffledPlaylist.length > 0) {
        try {
          audioRef.current.volume = 0.3;
          await audioRef.current.play();
          setIsPlaying(true);
          setShowWelcome(false);
        } catch (error) {
          console.log("Autoplay blocked, showing welcome screen");
        }
      }
    };

    if (shuffledPlaylist.length > 0) {
      tryAutoplay();
    }
  }, [shuffledPlaylist]);

  // Auto-hide controls on scroll (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setControlsVisible(false);
        setControlsExpanded(false);
      } else if (currentScrollY < lastScrollY.current) {
        setControlsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSongEnd = () => {
    const nextIndex = (currentSongIndex + 1) % shuffledPlaylist.length;
    setCurrentSongIndex(nextIndex);
    setCurrentSongName(shuffledPlaylist[nextIndex]?.name || "");
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % shuffledPlaylist.length;
    setCurrentSongIndex(nextIndex);
    setCurrentSongName(shuffledPlaylist[nextIndex]?.name || "");
  };

  const previousSong = () => {
    const prevIndex =
      currentSongIndex === 0
        ? shuffledPlaylist.length - 1
        : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setCurrentSongName(shuffledPlaylist[prevIndex]?.name || "");
  };

  return (
    <Router>
      <div className="min-h-screen bg-almost-black overflow-hidden">
        {/* Background Audio */}
        {shuffledPlaylist.length > 0 && (
          <audio
            ref={audioRef}
            src={shuffledPlaylist[currentSongIndex]?.src}
            preload="auto"
            className="hidden"
            onEnded={handleSongEnd}
          />
        )}

        {/* Welcome Screen */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Your existing welcome screen JSX - UNCHANGED */}
              <div className="absolute inset-0 bg-almost-black/95 backdrop-blur-3xl" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted-magenta/20 rounded-full blur-[150px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-purple/20 rounded-full blur-[150px] pointer-events-none" />

              <div className="relative z-10 text-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  <motion.div
                    className="mb-8 inline-block"
                    animate={{
                      scale: [1, 1.2, 1],
                      filter: [
                        "drop-shadow(0 0 12px rgba(192, 132, 252, 0.4))",
                        "drop-shadow(0 0 24px rgba(192, 132, 252, 0.8))",
                        "drop-shadow(0 0 12px rgba(192, 132, 252, 0.4))",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        className="fill-muted-magenta"
                      />
                    </svg>
                  </motion.div>

                  <h1 className="text-5xl md:text-6xl font-cinzel tracking-wider text-near-white mb-6">
                    Welcome, Falguni
                  </h1>

                  <p className="text-xl md:text-2xl font-cinzel italic text-soft-purple opacity-80 mb-16 max-w-xl mx-auto leading-relaxed">
                    Experience our story with music (15 pages)
                  </p>

                  <motion.button
                    onClick={startExperience}
                    className="group relative px-16 py-6 bg-white/[0.08] backdrop-blur-xl
                               border-2 border-white/[0.15] rounded-lg overflow-hidden
                               hover:bg-white/[0.12] hover:border-muted-magenta/50
                               transition-all duration-500 shadow-2xl shadow-muted-magenta/20"
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-muted-magenta/20 to-soft-purple/20
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="relative flex items-center gap-4">
                      <motion.svg
                        className="w-8 h-8 text-muted-magenta"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </motion.svg>

                      <span className="font-inter text-lg md:text-xl tracking-widest uppercase text-near-white font-medium">
                        Enter Our World
                      </span>
                    </div>
                  </motion.button>

                  <motion.p
                    className="mt-12 text-sm font-inter tracking-wider uppercase text-soft-purple opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    From Lonavala to Forever • {playlist.length} Songs
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!showWelcome && controlsVisible && (
            <motion.div
              className="fixed bottom-4 right-4 z-50"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Compact Main Button */}
              <div className="relative">
                <motion.button
                  onClick={() => setControlsExpanded(!controlsExpanded)}
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center
                           bg-gradient-to-br from-muted-magenta/20 to-soft-purple/20
                           backdrop-blur-xl border border-white/[0.15] rounded-full
                           hover:from-muted-magenta/30 hover:to-soft-purple/30
                           transition-all duration-300 shadow-lg shadow-muted-magenta/20
                           active:scale-95"
                  whileTap={{ scale: 0.9 }}
                >
                  {!isMuted && isPlaying && (
                    <>
                      <span className="absolute inset-0 rounded-full border-2 border-muted-magenta/40 animate-ping" />
                      <span className="absolute inset-0 rounded-full border-2 border-muted-magenta/20 animate-pulse" />
                    </>
                  )}

                  <svg className="w-6 h-6 md:w-7 md:h-7 text-muted-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </motion.button>

                {/* Expanded Controls */}
                <AnimatePresence>
                  {controlsExpanded && (
                    <motion.div
                      className="absolute bottom-16 md:bottom-20 right-0 flex flex-col gap-2 items-end"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Now Playing Card */}
                      <motion.div
                        className="glass-card py-2 px-4 text-right min-w-[160px] max-w-[200px]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 }}
                      >
                        <p className="text-[10px] font-inter tracking-wider uppercase text-soft-purple opacity-70 mb-0.5">
                          Now Playing
                        </p>
                        <p className="text-xs font-cinzel italic text-near-white truncate">
                          {currentSongName}
                        </p>
                      </motion.div>

                      {/* Control Buttons Row */}
                      <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {/* Previous */}
                        <button
                          onClick={(e) => { e.stopPropagation(); previousSong(); }}
                          className="w-10 h-10 flex items-center justify-center
                                   bg-white/[0.05] backdrop-blur-md border border-white/[0.1] rounded-full
                                   hover:bg-white/[0.1] hover:border-muted-magenta/40
                                   transition-all duration-300 active:scale-90"
                          aria-label="Previous song"
                        >
                          <svg className="w-4 h-4 text-soft-purple" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                          </svg>
                        </button>

                        {/* Mute/Unmute */}
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                          className="w-11 h-11 flex items-center justify-center
                                   bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-full
                                   hover:bg-white/[0.12] hover:border-muted-magenta/40
                                   transition-all duration-300 active:scale-90"
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? (
                            <svg className="w-5 h-5 text-soft-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-muted-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          )}
                        </button>

                        {/* Next */}
                        <button
                          onClick={(e) => { e.stopPropagation(); nextSong(); }}
                          className="w-10 h-10 flex items-center justify-center
                                   bg-white/[0.05] backdrop-blur-md border border-white/[0.1] rounded-full
                                   hover:bg-white/[0.1] hover:border-muted-magenta/40
                                   transition-all duration-300 active:scale-90"
                          aria-label="Next song"
                        >
                          <svg className="w-4 h-4 text-soft-purple" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                          </svg>
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SCROLL-HIDING NAVIGATION */}

          <Navigation />

        {/* Main Content */}
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Your Original 12 Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutFalguni />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/memories" element={<IntimateMemories />} />
            <Route path="/places" element={<Places />} />
            <Route path="/inside" element={<InsideWorld />} />
            <Route path="/letter" element={<LoveLetter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reasons" element={<Reasons />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/future" element={<Future />} />
            <Route path="/compatibility" element={<Compatibility />} />

            {/* NEW 3 ROUTES */}
            <Route path="/promises" element={<Promises />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

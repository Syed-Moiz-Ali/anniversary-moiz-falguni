import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Loader from "./components/Loader";
import { Play, SkipForward, Music2 } from "lucide-react";

// --- 🎵 AUDIO ASSETS 🎵 ---
import song1 from "./assets/audio/song1.mp3";
import song2 from "./assets/audio/song2.mp3";
import song3 from "./assets/audio/song3.mp3";
import song4 from "./assets/audio/song4.mp3";
import song5 from "./assets/audio/song5.mp3";
import song6 from "./assets/audio/song6.mp3";
import song7 from "./assets/audio/song7.mp3";
import song8 from "./assets/audio/song8.mp3";
import song9 from "./assets/audio/song9.mp3";
import song10 from "./assets/audio/song10.mp3";
import song11 from "./assets/audio/song11.mp3";
import song12 from "./assets/audio/song12.mp3";

// --- 📦 LAZY LOADED CHAPTERS 📦 ---
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
const Promises = lazy(() => import("./pages/Promises"));
const Timeline = lazy(() => import("./pages/FutureTimeline"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// --- 🎬 SCROLL TO TOP WRAPPER 🎬 ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  // --- STATE MANAGEMENT ---
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSongName, setCurrentSongName] = useState("");
  const [shuffledPlaylist, setShuffledPlaylist] = useState([]);

  // --- PLAYLIST CONFIG ---
  const rawPlaylist = [
    { src: song1, name: "Tum Se Hi" },
    { src: song2, name: "Khoobsurat" },
    { src: song3, name: "Zara Zara" },
    { src: song4, name: "Phir Bhi Tumko Chaahunga" },
    { src: song5, name: "Channa Ve" },
    { src: song6, name: "Ve Maahi Kesari" },
    { src: song7, name: "Agar Tum Saath Ho" },
    { src: song8, name: "Tera Ban Jaunga" },
    { src: song9, name: "Perfect" },
    { src: song10, name: "Rewrite The Stars" },
    { src: song11, name: "Until I Found You" },
    { src: song12, name: "Say You Won't Let Go" },
  ];

  // --- INITIALIZATION ---
  useEffect(() => {
    const shuffled = [...rawPlaylist].sort(() => Math.random() - 0.5);
    setShuffledPlaylist(shuffled);
    setCurrentSongName(shuffled[0]?.name || "");

    audioRef.current.volume = 0.4;
    audioRef.current.onended = handleNextSong;

    return () => {
      audioRef.current.pause();
      audioRef.current.src = "";
    };
  }, []);

  // --- AUDIO LOGIC ---
  useEffect(() => {
    if (shuffledPlaylist.length > 0) {
      const audio = audioRef.current;
      const currentTrack = shuffledPlaylist[currentSongIndex];

      if (audio.src !== currentTrack.src) {
        audio.src = currentTrack.src;
        if (isPlaying) {
          audio.play().catch(e => console.log("Playback interrupted", e));
        }
      }
      setCurrentSongName(currentTrack.name);
    }
  }, [currentSongIndex, shuffledPlaylist, isPlaying]);

  const startExperience = () => {
    setShowWelcome(false);
    setIsPlaying(true);
    audioRef.current.play().catch(e => console.log("Autoplay blocked", e));

    // Fade in
    audioRef.current.volume = 0;
    let vol = 0;
    const fadeInterval = setInterval(() => {
      if (vol < 0.4) {
        vol += 0.05;
        audioRef.current.volume = vol;
      } else {
        clearInterval(fadeInterval);
      }
    }, 200);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % shuffledPlaylist.length);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen text-white selection:bg-rose-500 selection:text-white overflow-x-hidden">

        {/* --- WELCOME GATE --- */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
              exit={{ opacity: 0, transition: { duration: 1.5 } }}
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
              <div className="text-center px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <Music2 size={64} className="mx-auto text-rose-500 mb-8 animate-pulse" />
                  <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">Falguni</h1>
                  <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase opacity-50 mb-12">
                    Put on your headphones • The Story of Us
                  </p>
                  <motion.button
                    onClick={startExperience}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden hover:bg-white/10 transition-all"
                  >
                    <span className="relative z-10 text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                      <Play size={12} fill="currentColor" /> Enter World
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MINIMALIST FLOATING PLAYER --- */}
        {!showWelcome && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full py-2 px-2 pr-5 shadow-2xl hover:bg-black/80 transition-all duration-300">

              {/* Play/Pause Button with Mini Equalizer */}
              <button
                onClick={togglePlayPause}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
              >
                {isPlaying ? (
                   <div className="flex gap-[2px] items-end h-3">
                     {[1, 2, 3].map(i => (
                       <motion.div
                         key={i}
                         animate={{ height: [3, 12, 3] }}
                         transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                         className="w-[2px] bg-current rounded-full"
                       />
                     ))}
                   </div>
                ) : (
                  <Play size={14} fill="currentColor" className="ml-0.5" />
                )}
              </button>

              {/* Song Info */}
              <div className="flex flex-col max-w-[120px]">
                <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Playing</span>
                <span className="text-xs font-serif text-white/90 truncate">{currentSongName}</span>
              </div>

              {/* Skip Button */}
              <button onClick={handleNextSong} className="ml-2 text-white/40 hover:text-white transition-colors">
                <SkipForward size={14} />
              </button>
            </div>
          </motion.div>
        )}

        {/* --- GLOBAL NAVIGATION --- */}
        <Navigation />

        {/* --- MAIN PAGE CONTENT --- */}
        <Suspense fallback={<Loader />}>
          <Routes>
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

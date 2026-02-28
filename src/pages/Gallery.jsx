import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Unlock, X, ChevronLeft, ChevronRight, Image as ImageIcon, Film, Play } from 'lucide-react'

// ==========================================
// ===== ALL ORIGINAL ASSET IMPORTS =========
// ==========================================
import lonavalaImg1 from '../assets/images/lonavala/img1.jpg'
import lonavalaImg2 from '../assets/images/lonavala/img2.jpg'
import lonavalaImg3 from '../assets/images/lonavala/img3.jpg'
import lonavalaImg4 from '../assets/images/lonavala/img4.jpg'
import lonavalaImg6 from '../assets/images/lonavala/img6.jpg'
import lonavalaImg7 from '../assets/images/lonavala/img7.jpg'
import lonavalaImg8 from '../assets/images/lonavala/img8.jpg'
import lonavalaImg9 from '../assets/images/lonavala/img9.jpg'
import lonavalaImg10 from '../assets/images/lonavala/img10.jpg'
import lonavalaImg11 from '../assets/images/lonavala/img11.jpg'
import lonavalaImg12 from '../assets/images/lonavala/img12.jpg'
import lonavalaImg13 from '../assets/images/lonavala/img13.jpg'
import lonavalaImg14 from '../assets/images/lonavala/img14.jpg'
import lonavalaImg15 from '../assets/images/lonavala/img15.jpg'
import lonavalaImg16 from '../assets/images/lonavala/img16.jpg'
import lonavalaImg17 from '../assets/images/lonavala/img17.jpg'
import lonavalaVid1 from '../assets/videos/lonavala/vid1.mp4'
import lonavalaVid2 from '../assets/videos/lonavala/vid2.mp4'
import lonavalaVid3 from '../assets/videos/lonavala/vid3.mp4'
import lonavalaVid4 from '../assets/videos/lonavala/vid4.mp4'
import lonavalaVid5 from '../assets/videos/lonavala/vid5.mp4'
import lonavalaVid6 from '../assets/videos/lonavala/vid6.mp4'
import officeImg1 from '../assets/images/office/img1.jpg'
import officeVid1 from '../assets/videos/office/vid1.mp4'
import officeVid2 from '../assets/videos/office/vid2.mp4'
import officeVid3 from '../assets/videos/office/vid3.mp4'
import officeVid4 from '../assets/videos/office/vid4.mp4'
import hotelImg1 from '../assets/images/hotel/img1.jpg'
import hotelImg2 from '../assets/images/hotel/img2.jpg'
import hotelVid1 from '../assets/videos/hotel/vid1.mp4'
import hotelVid2 from '../assets/videos/hotel/vid2.mp4'
import hotelVid3 from '../assets/videos/hotel/vid3.mp4'
import hotelVid4 from '../assets/videos/hotel/vid4.mp4'
import hotelVid5 from '../assets/videos/hotel/vid5.mp4'
import hotelVid6 from '../assets/videos/hotel/vid6.mp4'
import hotelVid7 from '../assets/videos/hotel/vid7.mp4'
import hydImg1 from '../assets/images/hyderabad/img1.jpg'
import hydImg2 from '../assets/images/hyderabad/img2.jpg'
import hydImg3 from '../assets/images/hyderabad/img3.jpg'
import hydImg4 from '../assets/images/hyderabad/img4.jpg'
import hydImg5 from '../assets/images/hyderabad/img5.jpg'
import hydImg6 from '../assets/images/hyderabad/img6.jpg'
import hydImg7 from '../assets/images/hyderabad/img7.jpg'
import hydVid1 from '../assets/videos/hyderabad/vid1.mp4'
import hydVid2 from '../assets/videos/hyderabad/vid2.mp4'
import hydVid3 from '../assets/videos/hyderabad/vid3.mp4'
import hydVid4 from '../assets/videos/hyderabad/vid4.mp4'
import hydVid5 from '../assets/videos/hyderabad/vid5.mp4'
import hydVid6 from '../assets/videos/hyderabad/vid6.mp4'
import hydVid7 from '../assets/videos/hyderabad/vid7.mp4'
import hydVid8 from '../assets/videos/hyderabad/vid8.mp4'
import hydVid9 from '../assets/videos/hyderabad/vid9.mp4'
import hydVid10 from '../assets/videos/hyderabad/vid10.mp4'
import hydVid11 from '../assets/videos/hyderabad/vid11.mp4'
import hydVid12 from '../assets/videos/hyderabad/vid12.mp4'
import nagpurImg1 from '../assets/images/nagpur/img1.jpg'
import nagpurImg2 from '../assets/images/nagpur/img2.jpg'
import nagpurVid1 from '../assets/videos/nagpur/vid1.mp4'
import nagpurVid2 from '../assets/videos/nagpur/vid2.mp4'
import nagpurVid3 from '../assets/videos/nagpur/vid3.mp4'
import nagpurVid4 from '../assets/videos/nagpur/vid4.mp4'
import nagpurVid5 from '../assets/videos/nagpur/vid5.mp4'
import nagpurVid6 from '../assets/videos/nagpur/vid6.mp4'
import randomImg1 from '../assets/images/random/img1.jpg'
import randomImg2 from '../assets/images/random/img2.jpg'
import randomImg3 from '../assets/images/random/img3.jpg'
import randomImg4 from '../assets/images/random/img4.jpg'
import randomImg5 from '../assets/images/random/img5.jpg'
import randomImg6 from '../assets/images/random/img6.jpg'
import randomImg7 from '../assets/images/random/img7.jpg'
import randomImg8 from '../assets/images/random/img8.jpg'
import randomImg9 from '../assets/images/random/img9.jpg'
import randomImg10 from '../assets/images/random/img10.jpg'
import randomImg11 from '../assets/images/random/img11.jpg'
import randomImg12 from '../assets/images/random/img12.jpg'
import randomImg13 from '../assets/images/random/img13.jpg'
import randomImg14 from '../assets/images/random/img14.jpg'
import randomImg15 from '../assets/images/random/img15.jpg'
import randomImg16 from '../assets/images/random/img16.jpg'
import randomImg17 from '../assets/images/random/img17.jpg'
import randomScreenshot from '../assets/images/random/Screenshot_20250728_235156.jpg'
import randomSnap1 from '../assets/images/random/Snapchat-1644924435.jpg'
import randomSnap2 from '../assets/images/random/Snapchat-1955597668.jpg'
import randomSnap3 from '../assets/images/random/Snapchat-1996533469.jpg'
import randomSnap4 from '../assets/images/random/Snapchat-2028520715.jpg'
import randomSnap5 from '../assets/images/random/Snapchat-2119904348.jpg'
import randomSnap6 from '../assets/images/random/Snapchat-24598038.jpg'
import randomSnap7 from '../assets/images/random/Snapchat-30714153.jpg'
import randomSnap8 from '../assets/images/random/Snapchat-441880863.jpg'
import privateImg1 from '../assets/images/private/img1.jpg'
import privateImg2 from '../assets/images/private/img2.jpg'
import privateImg3 from '../assets/images/private/img3.jpg'
import privateImg4 from '../assets/images/private/img4.jpg'
import privateImg5 from '../assets/images/private/img5.jpg'
import privateImg6 from '../assets/images/private/img6.jpg'
import privateImg7 from '../assets/images/private/img7.jpg'
import privateImg8 from '../assets/images/private/img8.jpg'
import privateImg9 from '../assets/images/private/img9.jpg'

// ==========================================
// ===== ALBUM DATA — JSON-ENRICHED =========
// ==========================================
// Meanings and symbolism sourced from places[] and journey[] in loveMasterData.json

const publicAlbums = [
  {
    id: 1, key: 'lonavala',
    title: 'Lonavala Beginnings',
    date: 'July 2025',
    phase: 'Conflict → Curiosity',
    meaning: 'Where friction turned into destiny.',
    symbolism: 'The ignition point.',
    cover: lonavalaImg1,
    accentColor: 'from-amber-500/20',
    media: [
      { type: 'image', src: lonavalaImg1, caption: 'The hills where our story began.' },
      { type: 'image', src: lonavalaImg2, caption: 'Company team — we barely knew each other.' },
      { type: 'video', src: lonavalaVid1, thumbnail: lonavalaImg3, caption: 'Company trip video — enjoying the hills.' },
      { type: 'image', src: lonavalaImg3, caption: 'The evening of truth and dare.' },
      { type: 'image', src: lonavalaImg4, caption: 'Where the misunderstanding happened.' },
      { type: 'video', src: lonavalaVid2, thumbnail: lonavalaImg6, caption: 'Group activities and fun.' },
      { type: 'image', src: lonavalaImg6, caption: 'Beautiful Lonavala scenery.' },
      { type: 'image', src: lonavalaImg7, caption: 'Team bonding moments.' },
      { type: 'video', src: lonavalaVid3, thumbnail: lonavalaImg8, caption: 'Walking through the misty hills.' },
      { type: 'image', src: lonavalaImg8, caption: 'Little did we know this was the start.' },
      { type: 'image', src: lonavalaImg9, caption: 'More memories from Lonavala.' },
      { type: 'image', src: lonavalaImg10, caption: 'The trip that changed everything.' },
      { type: 'video', src: lonavalaVid4, thumbnail: lonavalaImg11, caption: 'Evening at the resort.' },
      { type: 'image', src: lonavalaImg11, caption: 'Sunset views.' },
      { type: 'image', src: lonavalaImg12, caption: 'Group photo moment.' },
      { type: 'video', src: lonavalaVid5, thumbnail: lonavalaImg13, caption: 'Last day at Lonavala.' },
      { type: 'image', src: lonavalaImg13, caption: 'Leaving Lonavala.' },
      { type: 'image', src: lonavalaImg14, caption: 'The beginning of something special.' },
      { type: 'image', src: lonavalaImg15, caption: 'Memories captured forever.' },
      { type: 'video', src: lonavalaVid6, thumbnail: lonavalaImg16, caption: 'Goodbye Lonavala, hello to us.' },
      { type: 'image', src: lonavalaImg16, caption: 'Journey back home.' },
      { type: 'image', src: lonavalaImg17, caption: 'Already missing this place.' },
    ]
  },
  {
    id: 2, key: 'office',
    title: 'Office Stolen Moments',
    date: 'Aug – Oct 2025',
    phase: 'Risk → Boundary Crossing',
    meaning: 'The first kiss. Reckless. Planned. Urgent.',
    symbolism: 'The moment innocence turned into intention.',
    cover: officeImg1,
    accentColor: 'from-rose-500/20',
    media: [
      { type: 'image', src: officeImg1, caption: 'The corridors where we planned secret meetings.' },
      { type: 'video', src: officeVid1, thumbnail: officeImg1, caption: 'Walking through office corridors together.' },
      { type: 'video', src: officeVid2, thumbnail: officeImg1, caption: 'Coffee break sneaking around.' },
      { type: 'video', src: officeVid3, thumbnail: officeImg1, caption: 'Lunch time moments.' },
      { type: 'video', src: officeVid4, thumbnail: officeImg1, caption: 'Late evening when everyone left.' },
    ]
  },
  {
    id: 3, key: 'hotel',
    title: 'First Hotel Room',
    date: 'Late August 2025',
    phase: 'Exploration → Intimacy',
    meaning: 'Exploration without rushing. Learning each other slowly.',
    symbolism: 'Foundation of physical and emotional understanding.',
    cover: hotelImg1,
    accentColor: 'from-purple-500/20',
    media: [
      { type: 'image', src: hotelImg1, caption: 'The hotel that became special.' },
      { type: 'video', src: hotelVid1, thumbnail: hotelImg1, caption: 'Finally alone, completely.' },
      { type: 'video', src: hotelVid2, thumbnail: hotelImg2, caption: 'Getting comfortable with each other.' },
      { type: 'image', src: hotelImg2, caption: 'Our first private space.' },
      { type: 'video', src: hotelVid3, thumbnail: hotelImg1, caption: 'Hours of exploration and conversation.' },
      { type: 'video', src: hotelVid4, thumbnail: hotelImg2, caption: 'Learning each other, slowly.' },
      { type: 'video', src: hotelVid5, thumbnail: hotelImg1, caption: 'Building tension and anticipation.' },
      { type: 'video', src: hotelVid6, thumbnail: hotelImg2, caption: 'Not ready to say goodbye.' },
      { type: 'video', src: hotelVid7, thumbnail: hotelImg1, caption: 'Planning the next time we meet.' },
    ]
  },
  {
    id: 4, key: 'hyderabad',
    title: 'Hyderabad Nights',
    date: 'October 2025',
    phase: 'Deep Intimacy → Symbolic Commitment',
    meaning: 'Where whispers turned into surrender. Sacred nights.',
    symbolism: 'Transformation from desire to emotional merging.',
    cover: hydImg1,
    accentColor: 'from-pink-500/20',
    media: [
      { type: 'image', src: hydImg1, caption: 'The city that changed everything.' },
      { type: 'video', src: hydVid1, thumbnail: hydImg1, caption: 'Arriving in Hyderabad, excited hearts.' },
      { type: 'image', src: hydImg2, caption: 'Our hotel sanctuary.' },
      { type: 'video', src: hydVid2, thumbnail: hydImg2, caption: 'First moments in the hotel room.' },
      { type: 'image', src: hydImg3, caption: 'The room where everything happened.' },
      { type: 'video', src: hydVid3, thumbnail: hydImg3, caption: 'Getting ready for the night ahead.' },
      { type: 'image', src: hydImg4, caption: 'The night we made love for the first time.' },
      { type: 'video', src: hydVid4, thumbnail: hydImg4, caption: 'After — lying together, complete.' },
      { type: 'image', src: hydImg5, caption: 'Morning after — changed forever.' },
      { type: 'video', src: hydVid5, thumbnail: hydImg5, caption: 'Morning kisses and cuddles.' },
      { type: 'image', src: hydImg6, caption: 'Hyderabad sunrise on your skin.' },
      { type: 'video', src: hydVid6, thumbnail: hydImg6, caption: 'Breakfast in bed, still glowing.' },
      { type: 'image', src: hydImg7, caption: 'Walking Hyderabad streets, hand in hand.' },
      { type: 'video', src: hydVid7, thumbnail: hydImg7, caption: 'Exploring the city together.' },
      { type: 'video', src: hydVid8, thumbnail: hydImg1, caption: 'Hyderabad evening, still inseparable.' },
      { type: 'video', src: hydVid9, thumbnail: hydImg2, caption: 'Back to the room for round two.' },
      { type: 'video', src: hydVid10, thumbnail: hydImg3, caption: "Can't keep our hands off each other." },
      { type: 'video', src: hydVid11, thumbnail: hydImg4, caption: 'Last night in Hyderabad.' },
      { type: 'video', src: hydVid12, thumbnail: hydImg5, caption: 'Goodbye Hyderabad, you changed us forever.' },
    ]
  },
  {
    id: 5, key: 'nagpur',
    title: 'Nagpur Diaries',
    date: 'Nov 2025 – Present',
    phase: 'Reunion → Ongoing Commitment',
    meaning: 'The city that became home. Reunions filled with urgency.',
    symbolism: 'From temporary meetings to emotional home.',
    cover: nagpurImg1,
    accentColor: 'from-blue-500/20',
    media: [
      { type: 'image', src: nagpurImg1, caption: 'The streets we walked hand in hand.' },
      { type: 'video', src: nagpurVid1, thumbnail: nagpurImg1, caption: 'Futala Lake — our favorite sunset spot.' },
      { type: 'image', src: nagpurImg2, caption: 'Nagpur became our sanctuary.' },
      { type: 'video', src: nagpurVid2, thumbnail: nagpurImg2, caption: 'Walking through Nagpur, finally free.' },
      { type: 'video', src: nagpurVid3, thumbnail: nagpurImg1, caption: 'Late night drives through the city.' },
      { type: 'video', src: nagpurVid4, thumbnail: nagpurImg2, caption: 'Your city became our city.' },
      { type: 'video', src: nagpurVid5, thumbnail: nagpurImg1, caption: 'Every corner holds a memory.' },
      { type: 'video', src: nagpurVid6, thumbnail: nagpurImg2, caption: 'Nagpur nights with you.' },
    ]
  },
  {
    id: 6, key: 'random',
    title: 'Spontaneous Us',
    date: 'July – Dec 2025',
    phase: 'Every Phase',
    meaning: 'Not a fixed location. A feeling.',
    symbolism: 'Home defined by presence, not geography.',
    cover: randomImg1,
    accentColor: 'from-emerald-500/20',
    media: [
      { type: 'image', src: randomImg1, caption: 'Random selfie — just us.' },
      { type: 'image', src: randomImg2, caption: 'Another moment, another memory.' },
      { type: 'image', src: randomImg3, caption: 'Candid shot of happiness.' },
      { type: 'image', src: randomImg4, caption: 'Silly faces and laughter.' },
      { type: 'image', src: randomImg5, caption: 'Just being ourselves.' },
      { type: 'image', src: randomImg6, caption: 'Your beautiful smile.' },
      { type: 'image', src: randomImg7, caption: 'My favorite person.' },
      { type: 'image', src: randomImg8, caption: 'Together, always.' },
      { type: 'image', src: randomImg9, caption: 'Random day, perfect moment.' },
      { type: 'image', src: randomImg10, caption: "Can't stop clicking photos." },
      { type: 'image', src: randomImg11, caption: 'Every angle is beautiful.' },
      { type: 'image', src: randomImg12, caption: 'Us being goofy.' },
      { type: 'image', src: randomImg13, caption: 'Captured spontaneously.' },
      { type: 'image', src: randomImg14, caption: 'Just another day in love.' },
      { type: 'image', src: randomImg15, caption: 'Your eyes, my world.' },
      { type: 'image', src: randomImg16, caption: 'Happy and in love.' },
      { type: 'image', src: randomImg17, caption: 'Forever capturing moments.' },
      { type: 'image', src: randomScreenshot, caption: 'Screenshot of a special chat.' },
      { type: 'image', src: randomSnap1, caption: 'Snapchat memory 1.' },
      { type: 'image', src: randomSnap2, caption: 'Snapchat memory 2.' },
      { type: 'image', src: randomSnap3, caption: 'Snapchat memory 3.' },
      { type: 'image', src: randomSnap4, caption: 'Snapchat memory 4.' },
      { type: 'image', src: randomSnap5, caption: 'Snapchat memory 5.' },
      { type: 'image', src: randomSnap6, caption: 'Snapchat memory 6.' },
      { type: 'image', src: randomSnap7, caption: 'Snapchat memory 7.' },
      { type: 'image', src: randomSnap8, caption: 'Snapchat memory 8.' },
    ]
  }
]

const privateAlbum = {
  id: 99, key: 'private',
  title: 'The Vault',
  date: 'For Our Eyes Only',
  phase: 'Symbolic Commitment',
  meaning: 'The moment time stopped. Confidence, vulnerability, and admiration.',
  symbolism: 'Embodied trust and admiration.',
  cover: privateImg1,
  accentColor: 'from-rose-700/30',
  media: [
    { type: 'image', src: privateImg1, caption: 'The moment we locked the door.' },
    { type: 'image', src: privateImg2, caption: 'Your nervous laugh as I pulled you closer.' },
    { type: 'image', src: privateImg3, caption: 'Learning every spot that makes you gasp.' },
    { type: 'image', src: privateImg4, caption: 'Hours of foreplay, building tension.' },
    { type: 'image', src: privateImg5, caption: 'The first time we became one.' },
    { type: 'image', src: privateImg6, caption: 'After — tangled together, breathless.' },
    { type: 'image', src: privateImg7, caption: 'You on top, taking control.' },
    { type: 'image', src: privateImg8, caption: 'Morning light on your bare skin.' },
    { type: 'image', src: privateImg9, caption: 'Our bodies memorized in the dark.' },
  ]
}

// ==========================================
// ===== MAIN COMPONENT =====================
// ==========================================

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [currentAlbum, setCurrentAlbum]   = useState(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isPrivateUnlocked, setIsPrivateUnlocked] = useState(false)
  const [password, setPassword]           = useState('')
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const videoRef = useRef(null)

  const openAlbum = (album) => {
    setCurrentAlbum(album)
    setSelectedMedia(album.media[0])
    setCurrentMediaIndex(0)
  }

  const closeLightbox = () => {
    if (videoRef.current) videoRef.current.pause()
    setSelectedMedia(null)
    setCurrentAlbum(null)
  }

  const navigateMedia = (direction) => {
    if (!currentAlbum) return
    if (videoRef.current) videoRef.current.pause()
    let newIndex = currentMediaIndex + direction
    if (newIndex < 0) newIndex = currentAlbum.media.length - 1
    if (newIndex >= currentAlbum.media.length) newIndex = 0
    setCurrentMediaIndex(newIndex)
    setSelectedMedia(currentAlbum.media[newIndex])
  }

  const handlePassword = (e) => {
    e.preventDefault()
    if (password === 'falgunimoiz2025') {
      setIsPrivateUnlocked(true)
      setShowPasswordPrompt(false)
      setPassword('')
      setPasswordError(false)
    } else {
      setPasswordError(true)
      setPassword('')
      setTimeout(() => setPasswordError(false), 2000)
    }
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedMedia) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigateMedia(1)
      if (e.key === 'ArrowLeft') navigateMedia(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedMedia, currentMediaIndex])

  return (
    <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

      {/* ── Ambient Background ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/3 backdrop-blur-md mb-8">
            <ImageIcon size={12} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">The Archives</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-4 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent">
            Visual Memories
          </h1>
          <p className="text-white/30 font-serif italic text-base">
            "A collection of moments that time can't erase."
          </p>
        </motion.div>

        {/* ── Public Albums ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {publicAlbums.map((album, index) => (
            <AlbumCard key={album.id} album={album} index={index} onClick={() => openAlbum(album)} />
          ))}
        </div>

        {/* ── Restricted Section ── */}
        <div className="border-t border-white/5 pt-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-serif text-white/80 mb-1">Restricted Access</h2>
              <p className="text-xs uppercase tracking-widest text-white/20">
                {isPrivateUnlocked ? 'You have access — for our eyes only.' : 'Password protected.'}
              </p>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-500 ${
              isPrivateUnlocked
                ? 'bg-green-500/8 text-green-400/80 border-green-500/15'
                : 'bg-red-500/8 text-red-400/60 border-red-500/15'
            }`}>
              {isPrivateUnlocked ? <Unlock size={10} /> : <Lock size={10} />}
              {isPrivateUnlocked ? 'Unlocked' : 'Locked'}
            </div>
          </div>

          {!isPrivateUnlocked ? (
            <motion.button
              onClick={() => setShowPasswordPrompt(true)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full h-56 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-5 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-14 h-14 rounded-full bg-white/3 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-rose-500/30 transition-all duration-500">
                <Lock size={18} className="text-white/30 group-hover:text-rose-400/70 transition-colors duration-500" />
              </div>
              <div className="text-center relative z-10">
                <p className="font-serif text-lg text-white/50 group-hover:text-white/70 transition-colors duration-300">Intimate Moments</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mt-1.5">Password Required</p>
              </div>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <AlbumCard album={privateAlbum} index={0} onClick={() => openAlbum(privateAlbum)} isPrivate />
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Password Modal ── */}
      <AnimatePresence>
        {showPasswordPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setShowPasswordPrompt(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-sm bg-[#0c0c0e] border border-white/8 rounded-2xl p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full border border-rose-500/20 bg-rose-500/5 flex items-center justify-center mx-auto mb-5">
                  <Lock size={18} className="text-rose-400/60" />
                </div>
                <h3 className="text-xl font-serif text-white/80 mb-1">Security Check</h3>
                <p className="text-white/30 text-xs">Enter the key to our private world.</p>
              </div>

              <form onSubmit={handlePassword} className="space-y-4">
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••••"
                    className={`w-full bg-white/3 border rounded-xl px-4 py-3 text-center text-white tracking-[0.4em] text-sm focus:outline-none transition-all duration-300 ${
                      passwordError
                        ? 'border-red-500/50 bg-red-500/5'
                        : 'border-white/8 focus:border-rose-500/40 focus:bg-white/5'
                    }`}
                    autoFocus
                  />
                  <AnimatePresence>
                    {passwordError && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-400/70 text-[10px] text-center mt-2 font-serif italic"
                      >
                        Wrong password, baby. Try again. 🥀
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => { setShowPasswordPrompt(false); setPassword(''); setPasswordError(false) }}
                    className="py-2.5 rounded-xl border border-white/8 hover:bg-white/5 text-xs uppercase tracking-widest text-white/40 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2.5 rounded-xl bg-rose-600/80 hover:bg-rose-500 text-xs uppercase tracking-widest font-bold transition-all"
                  >
                    Unlock
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedMedia && currentAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-black/98 backdrop-blur-3xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="h-14 flex items-center justify-between px-6 border-b border-white/5 shrink-0">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-white/25 tabular-nums">
                  {String(currentMediaIndex + 1).padStart(2, '0')} / {String(currentAlbum.media.length).padStart(2, '0')}
                </span>
                <div className="w-px h-3 bg-white/10" />
                <span className="text-sm font-serif text-white/50">{currentAlbum.title}</span>
                <div className="w-px h-3 bg-white/10" />
                <span className="text-[10px] uppercase tracking-widest text-white/20">{currentAlbum.phase}</span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full hover:bg-white/8 transition-colors group"
              >
                <X size={16} className="text-white/40 group-hover:text-white/80 transition-colors" />
              </button>
            </div>

            {/* Media Area */}
            <div className="flex-1 flex items-center justify-center relative px-20 py-6 min-h-0">
              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateMedia(-1) }}
                className="absolute left-4 p-3 rounded-full bg-white/3 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all z-20 group"
              >
                <ChevronLeft size={18} className="text-white/40 group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMediaIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center gap-6 max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {selectedMedia.type === 'video' ? (
                    <div className="relative">
                      <video
                        ref={videoRef}
                        src={selectedMedia.src}
                        controls
                        autoPlay
                        className="max-h-[75vh] max-w-full rounded-xl shadow-2xl"
                      />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] text-white/60 flex items-center gap-1.5 pointer-events-none border border-white/10">
                        <Film size={10} /> Video
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedMedia.src}
                      alt="Memory"
                      className="max-h-[75vh] max-w-full rounded-xl shadow-2xl object-contain"
                    />
                  )}

                  {/* Caption */}
                  <div className="text-center max-w-lg">
                    <p className="font-serif italic text-white/50 text-sm leading-relaxed">
                      "{selectedMedia.caption}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateMedia(1) }}
                className="absolute right-4 p-3 rounded-full bg-white/3 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all z-20 group"
              >
                <ChevronRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

            {/* Bottom Strip — Thumbnail Rail */}
            <div className="h-20 border-t border-white/5 flex items-center gap-2 px-6 overflow-x-auto scrollbar-hide shrink-0">
              {currentAlbum.media.map((item, i) => (
                <button
                  key={i}
                  onClick={() => { if (videoRef.current) videoRef.current.pause(); setCurrentMediaIndex(i); setSelectedMedia(item) }}
                  className={`relative shrink-0 w-12 h-12 rounded-lg overflow-hidden border transition-all duration-200 ${
                    i === currentMediaIndex ? 'border-white/50 scale-110' : 'border-white/10 opacity-40 hover:opacity-70'
                  }`}
                >
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play size={8} className="text-white fill-current" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

// ==========================================
// ===== ALBUM CARD =========================
// ==========================================

const AlbumCard = ({ album, index, onClick, isPrivate = false }) => {
  const videoCount = album.media.filter(m => m.type === 'video').length

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.8 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Cover Frame */}
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-white/5 group-hover:border-white/15 transition-all duration-500">

        {/* Cover Image */}
        <img
          src={album.cover}
          alt={album.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Accent Glow on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-b ${album.accentColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Video Count Badge */}
        {videoCount > 0 && (
          <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 border border-white/10">
            <Play size={8} className="text-white/70 fill-current" />
            <span className="text-[9px] text-white/60 font-mono">{videoCount}</span>
          </div>
        )}

        {/* Private Lock Badge */}
        {isPrivate && (
          <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-md rounded-full p-1.5 border border-rose-500/20">
            <Lock size={10} className="text-rose-400/60" />
          </div>
        )}

        {/* Bottom Info — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40">
              {album.media.length} items
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/25">
              {videoCount > 0 ? `${videoCount} videos` : 'photos only'}
            </span>
          </div>
          {/* Symbolism line — from JSON places data */}
          <p className="text-[10px] text-white/40 font-serif italic leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {album.symbolism}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-serif text-white/80 group-hover:text-white transition-colors duration-300 leading-tight">
            {album.title}
          </h3>
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-wider shrink-0 mt-0.5">{album.date}</span>
        </div>
        {/* Phase Arc — from JSON journey data */}
        <p className="text-[10px] uppercase tracking-widest text-white/20 mt-1 group-hover:text-white/35 transition-colors duration-300">
          {album.phase}
        </p>
        {/* Meaning tooltip line — from JSON places.meaning */}
        <p className="text-xs text-white/25 font-serif italic mt-1.5 leading-snug opacity-0 group-hover:opacity-100 transition-all duration-400 max-h-0 group-hover:max-h-10 overflow-hidden">
          {album.meaning}
        </p>
      </div>
    </motion.div>
  )
}

export default Gallery

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Unlock, X, ChevronLeft, ChevronRight, Image as ImageIcon, Film, Play } from 'lucide-react'

// ==========================================
// ===== ORIGINAL ASSET IMPORTS (KEPT) ======
// ==========================================

// ===== LONAVALA IMAGES (16) =====
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

// ===== LONAVALA VIDEOS (6) =====
import lonavalaVid1 from '../assets/videos/lonavala/vid1.mp4'
import lonavalaVid2 from '../assets/videos/lonavala/vid2.mp4'
import lonavalaVid3 from '../assets/videos/lonavala/vid3.mp4'
import lonavalaVid4 from '../assets/videos/lonavala/vid4.mp4'
import lonavalaVid5 from '../assets/videos/lonavala/vid5.mp4'
import lonavalaVid6 from '../assets/videos/lonavala/vid6.mp4'

// ===== OFFICE =====
import officeImg1 from '../assets/images/office/img1.jpg'
import officeVid1 from '../assets/videos/office/vid1.mp4'
import officeVid2 from '../assets/videos/office/vid2.mp4'
import officeVid3 from '../assets/videos/office/vid3.mp4'
import officeVid4 from '../assets/videos/office/vid4.mp4'

// ===== HOTEL =====
import hotelImg1 from '../assets/images/hotel/img1.jpg'
import hotelImg2 from '../assets/images/hotel/img2.jpg'
import hotelVid1 from '../assets/videos/hotel/vid1.mp4'
import hotelVid2 from '../assets/videos/hotel/vid2.mp4'
import hotelVid3 from '../assets/videos/hotel/vid3.mp4'
import hotelVid4 from '../assets/videos/hotel/vid4.mp4'
import hotelVid5 from '../assets/videos/hotel/vid5.mp4'
import hotelVid6 from '../assets/videos/hotel/vid6.mp4'
import hotelVid7 from '../assets/videos/hotel/vid7.mp4'

// ===== HYDERABAD =====
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

// ===== NAGPUR =====
import nagpurImg1 from '../assets/images/nagpur/img1.jpg'
import nagpurImg2 from '../assets/images/nagpur/img2.jpg'
import nagpurVid1 from '../assets/videos/nagpur/vid1.mp4'
import nagpurVid2 from '../assets/videos/nagpur/vid2.mp4'
import nagpurVid3 from '../assets/videos/nagpur/vid3.mp4'
import nagpurVid4 from '../assets/videos/nagpur/vid4.mp4'
import nagpurVid5 from '../assets/videos/nagpur/vid5.mp4'
import nagpurVid6 from '../assets/videos/nagpur/vid6.mp4'

// ===== RANDOM IMAGES (26) =====
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

// ===== PRIVATE IMAGES (9) =====
import privateImg1 from '../assets/images/private/img1.jpg'
import privateImg2 from '../assets/images/private/img2.jpg'
import privateImg3 from '../assets/images/private/img3.jpg'
import privateImg4 from '../assets/images/private/img4.jpg'
import privateImg5 from '../assets/images/private/img5.jpg'
import privateImg6 from '../assets/images/private/img6.jpg'
import privateImg7 from '../assets/images/private/img7.jpg'
import privateImg8 from '../assets/images/private/img8.jpg'
import privateImg9 from '../assets/images/private/img9.jpg'


const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [currentAlbum, setCurrentAlbum] = useState(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isPrivateUnlocked, setIsPrivateUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)
  const videoRef = useRef(null)

  // ==========================================
  // ===== ALBUM DATA STRUCTURE MAPPED ======
  // ==========================================

  const publicAlbums = [
    {
      id: 1,
      key: 'lonavala',
      title: 'Lonavala Beginnings',
      date: 'July 2025',
      cover: lonavalaImg1,
      caption: 'The trip that started everything.',
      media: [
        { type: 'image', src: lonavalaImg1, caption: 'The hills where our story began.' },
        { type: 'image', src: lonavalaImg2, caption: 'Company team – we barely knew each other.' },
        { type: 'video', src: lonavalaVid1, thumbnail: lonavalaImg3, caption: 'Company trip video – enjoying the hills.' },
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
        { type: 'image', src: lonavalaImg17, caption: 'Already missing this place.' }
      ]
    },
    {
      id: 2,
      key: 'office',
      title: 'Office Stolen Moments',
      date: 'Aug - Oct 2025',
      cover: officeImg1,
      caption: 'Where we "accidentally" met every day.',
      media: [
        { type: 'image', src: officeImg1, caption: 'The corridors where we planned secret meetings.' },
        { type: 'video', src: officeVid1, thumbnail: officeImg1, caption: 'Walking through office corridors together.' },
        { type: 'video', src: officeVid2, thumbnail: officeImg1, caption: 'Coffee break sneaking around.' },
        { type: 'video', src: officeVid3, thumbnail: officeImg1, caption: 'Lunch time moments.' },
        { type: 'video', src: officeVid4, thumbnail: officeImg1, caption: 'Late evening when everyone left.' }
      ]
    },
    {
      id: 3,
      key: 'hotel',
      title: 'First Hotel Room',
      date: 'Late August 2025',
      cover: hotelImg1,
      caption: 'Our first time truly alone.',
      media: [
        { type: 'image', src: hotelImg1, caption: 'The hotel that became special.' },
        { type: 'video', src: hotelVid1, thumbnail: hotelImg1, caption: 'Finally alone, completely.' },
        { type: 'video', src: hotelVid2, thumbnail: hotelImg2, caption: 'Getting comfortable with each other.' },
        { type: 'image', src: hotelImg2, caption: 'Our first private space.' },
        { type: 'video', src: hotelVid3, thumbnail: hotelImg1, caption: 'Hours of exploration and conversation.' },
        { type: 'video', src: hotelVid4, thumbnail: hotelImg2, caption: 'Learning each other, slowly.' },
        { type: 'video', src: hotelVid5, thumbnail: hotelImg1, caption: 'Building tension and anticipation.' },
        { type: 'video', src: hotelVid6, thumbnail: hotelImg2, caption: 'Not ready to say goodbye.' },
        { type: 'video', src: hotelVid7, thumbnail: hotelImg1, caption: 'Planning the next time we meet.' }
      ]
    },
    {
      id: 4,
      key: 'hyderabad',
      title: 'Hyderabad Nights',
      date: 'October 2025',
      cover: hydImg1,
      caption: 'The city where we surrendered completely.',
      media: [
        { type: 'image', src: hydImg1, caption: 'The city that changed everything.' },
        { type: 'video', src: hydVid1, thumbnail: hydImg1, caption: 'Arriving in Hyderabad, excited hearts.' },
        { type: 'image', src: hydImg2, caption: 'Our hotel sanctuary.' },
        { type: 'video', src: hydVid2, thumbnail: hydImg2, caption: 'First moments in the hotel room.' },
        { type: 'image', src: hydImg3, caption: 'The room where everything happened.' },
        { type: 'video', src: hydVid3, thumbnail: hydImg3, caption: 'Getting ready for the night ahead.' },
        { type: 'image', src: hydImg4, caption: 'The night we made love for the first time.' },
        { type: 'video', src: hydVid4, thumbnail: hydImg4, caption: 'After – lying together, complete.' },
        { type: 'image', src: hydImg5, caption: 'Morning after – changed forever.' },
        { type: 'video', src: hydVid5, thumbnail: hydImg5, caption: 'Morning kisses and cuddles.' },
        { type: 'image', src: hydImg6, caption: 'Hyderabad sunrise on your skin.' },
        { type: 'video', src: hydVid6, thumbnail: hydImg6, caption: 'Breakfast in bed, still glowing.' },
        { type: 'image', src: hydImg7, caption: 'Walking Hyderabad streets, hand in hand.' },
        { type: 'video', src: hydVid7, thumbnail: hydImg7, caption: 'Exploring the city together.' },
        { type: 'video', src: hydVid8, thumbnail: hydImg1, caption: 'Hyderabad evening, still inseparable.' },
        { type: 'video', src: hydVid9, thumbnail: hydImg2, caption: 'Back to the room for round two.' },
        { type: 'video', src: hydVid10, thumbnail: hydImg3, caption: 'Can\'t keep our hands off each other.' },
        { type: 'video', src: hydVid11, thumbnail: hydImg4, caption: 'Last night in Hyderabad.' },
        { type: 'video', src: hydVid12, thumbnail: hydImg5, caption: 'Goodbye Hyderabad, you changed us forever.' }
      ]
    },
    {
      id: 5,
      key: 'nagpur',
      title: 'Nagpur Diaries',
      date: 'Nov 2025 - Present',
      cover: nagpurImg1,
      caption: 'Our sanctuary city.',
      media: [
        { type: 'image', src: nagpurImg1, caption: 'The streets we walked hand in hand.' },
        { type: 'video', src: nagpurVid1, thumbnail: nagpurImg1, caption: 'Futala Lake – our favorite sunset spot.' },
        { type: 'image', src: nagpurImg2, caption: 'Nagpur became our sanctuary.' },
        { type: 'video', src: nagpurVid2, thumbnail: nagpurImg2, caption: 'Walking through Nagpur, finally free.' },
        { type: 'video', src: nagpurVid3, thumbnail: nagpurImg1, caption: 'Late night drives through the city.' },
        { type: 'video', src: nagpurVid4, thumbnail: nagpurImg2, caption: 'Your city became our city.' },
        { type: 'video', src: nagpurVid5, thumbnail: nagpurImg1, caption: 'Every corner holds a memory.' },
        { type: 'video', src: nagpurVid6, thumbnail: nagpurImg2, caption: 'Nagpur nights with you.' }
      ]
    },
    {
      id: 6,
      key: 'random',
      title: 'Spontaneous Us',
      date: 'July - Dec 2025',
      cover: randomImg1,
      caption: 'Selfies, snaps, and smiles.',
      media: [
        { type: 'image', src: randomImg1, caption: 'Random selfie – just us.' },
        { type: 'image', src: randomImg2, caption: 'Another moment, another memory.' },
        { type: 'image', src: randomImg3, caption: 'Candid shot of happiness.' },
        { type: 'image', src: randomImg4, caption: 'Silly faces and laughter.' },
        { type: 'image', src: randomImg5, caption: 'Just being ourselves.' },
        { type: 'image', src: randomImg6, caption: 'Your beautiful smile.' },
        { type: 'image', src: randomImg7, caption: 'My favorite person.' },
        { type: 'image', src: randomImg8, caption: 'Together, always.' },
        { type: 'image', src: randomImg9, caption: 'Random day, perfect moment.' },
        { type: 'image', src: randomImg10, caption: 'Can\'t stop clicking photos.' },
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
        { type: 'image', src: randomSnap8, caption: 'Snapchat memory 8.' }
      ]
    }
  ]

  // PRIVATE ALBUM
  const privateAlbum = {
    id: 99,
    key: 'private',
    title: 'The Vault',
    date: 'For Our Eyes Only',
    cover: privateImg1,
    caption: 'Behind closed doors.',
    media: [
      { type: 'image', src: privateImg1, caption: 'The moment we locked the door.' },
      { type: 'image', src: privateImg2, caption: 'Your nervous laugh as I pulled you closer.' },
      { type: 'image', src: privateImg3, caption: 'Learning every spot that makes you gasp.' },
      { type: 'image', src: privateImg4, caption: 'Hours of foreplay, building tension.' },
      { type: 'image', src: privateImg5, caption: 'The first time we became one.' },
      { type: 'image', src: privateImg6, caption: 'After – tangled together, breathless.' },
      { type: 'image', src: privateImg7, caption: 'You on top, taking control.' },
      { type: 'image', src: privateImg8, caption: 'Morning light on your bare skin.' },
      { type: 'image', src: privateImg9, caption: 'Our bodies memorized in the dark.' }
    ]
  }

  // ==========================================
  // ===== LOGIC HANDLERS =====================
  // ==========================================

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
    } else {
      alert("Wrong password, baby. Try again.")
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
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <ImageIcon size={14} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">The Archives</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Visual Memories
          </h1>
          <p className="text-white/50 font-serif italic text-lg">
            "A collection of moments that time can't erase."
          </p>
        </div>

        {/* Public Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {publicAlbums.map((album, index) => (
            <AlbumCard key={index} album={album} index={index} onClick={() => openAlbum(album)} />
          ))}
        </div>

        {/* Private Vault Section */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif">Restricted Access</h2>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${isPrivateUnlocked ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
              {isPrivateUnlocked ? <Unlock size={12} /> : <Lock size={12} />}
              {isPrivateUnlocked ? 'Unlocked' : 'Locked'}
            </div>
          </div>

          {!isPrivateUnlocked ? (
            <motion.button
              onClick={() => setShowPasswordPrompt(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-64 rounded-2xl border border-white/10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-white/5 flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 group-hover:border-rose-500/50 transition-colors">
                <Lock className="text-white/50 group-hover:text-rose-400 transition-colors" />
              </div>
              <div className="text-center relative z-10">
                <p className="font-serif text-xl text-white/90">Intimate Moments</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-2">Password Required</p>
              </div>
            </motion.button>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AlbumCard album={privateAlbum} index={0} onClick={() => openAlbum(privateAlbum)} isPrivate />
            </div>
          )}
        </div>
      </div>

      {/* --- PASSWORD MODAL --- */}
      <AnimatePresence>
        {showPasswordPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl"
            >
              <div className="text-center mb-8">
                <Lock className="mx-auto text-rose-500 mb-4" size={32} />
                <h3 className="text-2xl font-serif">Security Check</h3>
                <p className="text-white/40 text-sm mt-2">Enter the key to our private world.</p>
              </div>

              <form onSubmit={handlePassword} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center text-white tracking-[0.5em] focus:outline-none focus:border-rose-500/50 transition-colors"
                  autoFocus
                />
                <div className="grid grid-cols-2 gap-4">
                  <button type="button" onClick={() => setShowPasswordPrompt(false)} className="py-3 rounded-lg border border-white/10 hover:bg-white/5 text-sm uppercase tracking-wider text-white/60">Cancel</button>
                  <button type="submit" className="py-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-sm uppercase tracking-wider font-bold">Unlock</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- LIGHTBOX VIEWER --- */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/98 backdrop-blur-3xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                  {currentMediaIndex + 1} / {currentAlbum.media.length}
                </span>
                <span className="text-sm font-serif text-white/80">{currentAlbum.title}</span>
              </div>
              <button onClick={closeLightbox} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center relative p-6">
              <button onClick={(e) => { e.stopPropagation(); navigateMedia(-1); }} className="absolute left-6 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all z-20 group">
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>

              <motion.div
                key={currentMediaIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-h-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedMedia.type === 'video' ? (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      className="max-h-[80vh] rounded-lg shadow-2xl"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 px-2 py-1 rounded text-xs text-white/80 flex items-center gap-1 pointer-events-none">
                      <Film size={12} /> Video
                    </div>
                  </div>
                ) : (
                  <img src={selectedMedia.src} alt="Memory" className="max-h-[80vh] rounded-lg shadow-2xl object-contain" />
                )}

                {/* Caption overlay */}
                <div className="absolute -bottom-16 left-0 right-0 text-center">
                  <p className="font-serif italic text-white/80 text-lg">"{selectedMedia.caption}"</p>
                </div>
              </motion.div>

              <button onClick={(e) => { e.stopPropagation(); navigateMedia(1); }} className="absolute right-6 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all z-20 group">
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

// --- SUB-COMPONENT: ALBUM CARD ---
const AlbumCard = ({ album, index, onClick, isPrivate }) => {
  const videoCount = album.media.filter(m => m.type === 'video').length

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-white/30 transition-colors">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

        {/* Cover Image */}
        <img src={album.cover} alt={album.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

        {/* Video Badge */}
        {videoCount > 0 && (
          <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 border border-white/10">
            <Play size={10} className="text-white fill-current" />
            <span className="text-[10px] text-white/80">{videoCount}</span>
          </div>
        )}

        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">{album.media.length} Items</span>
            {isPrivate && <Lock size={14} className="text-rose-400" />}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-white group-hover:text-rose-400 transition-colors">{album.title}</h3>
      <p className="text-xs uppercase tracking-widest text-white/40 mt-1">{album.date}</p>
    </motion.div>
  )
}

export default Gallery

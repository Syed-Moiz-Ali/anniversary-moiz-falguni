import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [currentAlbumMedia, setCurrentAlbumMedia] = useState([])
  const [currentAlbumTitle, setCurrentAlbumTitle] = useState('')
  const [isPrivateUnlocked, setIsPrivateUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)
  const videoRef = useRef(null)

  // ==== PUBLIC ALBUMS ====
  const publicAlbums = [
    {
      id: 1,
      key: 'lonavala',
      title: 'Lonavala Company Trip',
      date: 'First Week July 2025',
      caption: 'The trip that started everything—truth and dare, misunderstandings, and the beginning of us.',
      coverImage: lonavalaImg1,
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
      title: 'Office Days',
      date: 'August – October 2025',
      caption: 'Where we "accidentally" ran into each other every single day.',
      coverImage: officeImg1,
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
      caption: 'Our first time truly alone—exploring, discovering, and building anticipation.',
      coverImage: hotelImg1,
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
      title: 'Hyderabad',
      date: 'October 2025',
      caption: 'The city where we finally surrendered completely.',
      coverImage: hydImg1,
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
      title: 'Nagpur – Our City',
      date: 'November 2025 onwards',
      caption: 'Where we could finally be ourselves, with no more hiding.',
      coverImage: nagpurImg1,
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
      title: 'Us – Random Moments',
      date: 'July – December 2025',
      caption: 'Selfies, screenshots, Snapchat memories—spontaneous moments captured together.',
      coverImage: randomImg1,
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

  // ==== PRIVATE ALBUMS ====
  const privateAlbums = [
    {
      id: 7,
      key: 'private',
      title: 'Intimate Moments',
      date: 'August – December 2025',
      caption: 'Behind closed doors—our most private, passionate memories.',
      coverImage: privateImg1,
      isPrivate: true,
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
  ]

  const allPublicMediaCount = publicAlbums.reduce((sum, a) => sum + a.media.length, 0)
  const allPrivateMediaCount = privateAlbums.reduce((sum, a) => sum + a.media.length, 0)

  const openAlbum = (album) => {
    setCurrentAlbumMedia(album.media)
    setCurrentAlbumTitle(album.title)
    setSelectedMedia(album.media[0])
    setCurrentMediaIndex(0)
  }

  const openMediaFromAlbum = (album, index) => {
    setCurrentAlbumMedia(album.media)
    setCurrentAlbumTitle(album.title)
    setSelectedMedia(album.media[index])
    setCurrentMediaIndex(index)
  }

  const closeLightbox = () => {
    if (videoRef.current) videoRef.current.pause()
    setSelectedMedia(null)
    setCurrentAlbumMedia([])
    setCurrentAlbumTitle('')
  }

  const nextMedia = () => {
    if (!currentAlbumMedia.length) return
    if (videoRef.current) videoRef.current.pause()
    const next = (currentMediaIndex + 1) % currentAlbumMedia.length
    setCurrentMediaIndex(next)
    setSelectedMedia(currentAlbumMedia[next])
  }

  const prevMedia = () => {
    if (!currentAlbumMedia.length) return
    if (videoRef.current) videoRef.current.pause()
    const prev = (currentMediaIndex - 1 + currentAlbumMedia.length) % currentAlbumMedia.length
    setCurrentMediaIndex(prev)
    setSelectedMedia(currentAlbumMedia[prev])
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === 'falgunimoiz2025') {
      setIsPrivateUnlocked(true)
      setShowPasswordPrompt(false)
      setPassword('')
    } else {
      alert('Incorrect password. Try again.')
      setPassword('')
    }
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextMedia()
      if (e.key === 'ArrowLeft') prevMedia()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMedia, currentMediaIndex, currentAlbumMedia])

  return (
    <section className="min-h-screen section-padding pt-32">
      <div className="container-custom max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-cinzel tracking-ultra text-center mb-6 text-near-white">
          Gallery
        </h2>
        <p className="text-center text-soft-purple opacity-80 font-cinzel italic text-lg mb-3">
          From Lonavala to Hyderabad to Nagpur—98 memories in photos and videos.
        </p>
        <p className="text-center text-near-white opacity-50 text-xs tracking-widest uppercase mb-12">
          {publicAlbums.length} Public Albums • {allPublicMediaCount} Items
          {isPrivateUnlocked && ` • ${privateAlbums.length} Private Album • ${allPrivateMediaCount} Items`}
        </p>

        {/* PUBLIC ALBUM GRID */}
        <div className="mb-24">
          <h3 className="text-3xl font-cinzel tracking-widest text-center mb-10 text-near-white">
            Our Journey Together
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {publicAlbums.map((album, index) => {
              const videoCount = album.media.filter(m => m.type === 'video').length
              return (
                <motion.article
                  key={album.id}
                  className="group relative overflow-hidden rounded-md cursor-pointer
                             border border-white/10 hover:border-muted-magenta/40
                             hover:shadow-[0_0_30px_rgba(192,132,252,0.25)]
                             transition-all duration-500 bg-white/[0.02]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => openAlbum(album)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openAlbum(album)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {videoCount > 0 && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-muted-magenta" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        <span className="text-[11px] text-near-white font-inter">{videoCount} videos</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-cinzel text-lg text-near-white tracking-wide">
                      {album.title}
                    </h4>
                    <p className="text-xs text-soft-purple opacity-80 tracking-wider font-inter">
                      {album.date}
                    </p>
                    <p className="text-xs text-near-white opacity-70 font-inter leading-relaxed line-clamp-2">
                      {album.caption}
                    </p>
                    <p className="text-[11px] text-soft-purple/70 tracking-widest uppercase mt-1">
                      {album.media.length} items
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        {/* PRIVATE VAULT */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-cinzel tracking-ultra mb-4 text-muted-magenta">
              Private Vault
            </h3>
            <p className="text-sm text-soft-purple opacity-80 tracking-wider mb-2">
              {isPrivateUnlocked ? 'Unlocked • For our eyes only' : 'Locked • Protected content'}
            </p>
            <p className="text-xs text-near-white opacity-60 italic font-cinzel">
              The memories we keep just between us.
            </p>
          </div>

          {!isPrivateUnlocked ? (
            <div className="max-w-md mx-auto">
              <div className="glass-card p-8 border border-muted-magenta/40 rounded-md bg-black/40">
                <div className="mb-6 text-center">
                  <svg className="w-14 h-14 mx-auto mb-3 text-muted-magenta/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="font-cinzel italic text-sm text-near-white opacity-80">
                    Enter our secret password to unlock the intimate album.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPasswordPrompt(true)}
                  className="w-full px-6 py-3 border border-muted-magenta/60 rounded-sm
                             font-inter text-xs tracking-[0.25em] uppercase text-near-white
                             hover:bg-muted-magenta/20 hover:border-muted-magenta
                             transition-all duration-400"
                >
                  Unlock Private Gallery
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {privateAlbums.map((album, index) => (
                <motion.article
                  key={album.id}
                  className="group relative overflow-hidden rounded-md cursor-pointer
                             border border-muted-magenta/40 hover:border-muted-magenta
                             hover:shadow-[0_0_32px_rgba(192,132,252,0.35)]
                             transition-all duration-500 bg-muted-magenta/5"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => openAlbum(album)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openAlbum(album)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md rounded-full p-2 flex items-center gap-1 border border-muted-magenta/40">
                      <svg className="w-4 h-4 text-muted-magenta" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[11px] text-near-white uppercase tracking-wider">Private</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-cinzel text-lg text-near-white tracking-wide italic">
                      {album.title}
                    </h4>
                    <p className="text-xs text-muted-magenta/90 tracking-wider font-inter">
                      {album.date}
                    </p>
                    <p className="text-xs text-near-white opacity-75 font-inter leading-relaxed line-clamp-2">
                      {album.caption}
                    </p>
                    <p className="text-[11px] text-muted-magenta/80 tracking-widest uppercase mt-1">
                      {album.media.length} items
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* PASSWORD MODAL */}
      <AnimatePresence>
        {showPasswordPrompt && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[70] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPasswordPrompt(false)}
          >
            <motion.div
              className="bg-deep-black border border-muted-magenta/40 rounded-md p-8 md:p-10 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-muted-magenta/15 rounded-full mb-3">
                  <svg className="w-8 h-8 text-muted-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-cinzel tracking-widest mb-2 text-near-white">
                  Enter Password
                </h3>
                <p className="text-xs text-soft-purple opacity-80 tracking-wide font-cinzel italic">
                  Our secret code unlocks our intimate world.
                </p>
              </div>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/[0.18] rounded-sm px-4 py-3
                             font-inter text-sm tracking-wider text-near-white text-center
                             focus:outline-none focus:border-muted-magenta/70 focus:bg-white/[0.08]
                             transition-all duration-300 placeholder:text-white/30"
                  placeholder="••••••••••"
                  autoFocus
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-muted-magenta/25 border border-muted-magenta/70 rounded-sm
                               font-inter text-xs tracking-[0.25em] uppercase text-near-white
                               hover:bg-muted-magenta/35 transition-all duration-300"
                  >
                    Unlock
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPasswordPrompt(false)}
                    className="flex-1 py-3 border border-white/[0.2] rounded-sm
                               font-inter text-xs tracking-[0.25em] uppercase text-near-white
                               hover:bg-white/[0.08] transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            id="media-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={currentAlbumTitle || 'Media viewer'}
            tabIndex={-1}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Prev */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevMedia(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4
                         bg-white/5 backdrop-blur-md border border-white/15 rounded-full
                         hover:bg-white/10 hover:border-muted-magenta/40 transition-all duration-200 z-[90]"
              aria-label="Previous media"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-near-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextMedia(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4
                         bg-white/5 backdrop-blur-md border border-white/15 rounded-full
                         hover:bg-white/10 hover:border-muted-magenta/40 transition-all duration-200 z-[90]"
              aria-label="Next media"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-near-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 md:top-6 right-4 md:right-6 p-3
                         bg-white/5 backdrop-blur-md border border-white/15 rounded-full
                         hover:bg-red-500/25 hover:border-red-500/50 transition-all duration-200 z-[90]"
              aria-label="Close viewer"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-near-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter + type */}
            <div className="absolute top-4 md:top-6 left-4 md:left-6 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/15 rounded-full flex items-center gap-3 z-[90]">
              <span className="text-xs text-near-white tracking-widest font-inter">
                {currentMediaIndex + 1} / {currentAlbumMedia.length}
              </span>
              {selectedMedia.type === 'video' && (
                <span className="flex items-center gap-1 text-[11px] text-muted-magenta font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  VIDEO
                </span>
              )}
            </div>

            {/* MAIN MEDIA */}
            <motion.div
              className="max-w-6xl w-full mx-4 md:mx-8"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex flex-col items-center">
                {selectedMedia.type === 'image' ? (
                  <motion.img
                    key={currentMediaIndex}
                    src={selectedMedia.src}
                    alt={selectedMedia.caption}
                    className="max-h-[80vh] max-w-[100vw] w-auto h-auto object-contain mx-auto rounded-md"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                  />
                ) : (
                  <motion.video
                    key={currentMediaIndex}
                    ref={videoRef}
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    muted
                    className="max-h-[80vh] max-w-[100vw] w-auto h-auto object-contain mx-auto rounded-md"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                  />
                )}

                <motion.div
                  className="w-full mt-4 px-4 md:px-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.25 }}
                >
                  <div className="bg-black/70 backdrop-blur-md border border-white/15 rounded-md px-4 py-3 md:py-4">
                    {currentAlbumTitle && (
                      <p className="text-[11px] md:text-xs text-soft-purple/80 tracking-widest uppercase mb-1">
                        {currentAlbumTitle}
                      </p>
                    )}
                    <p className="text-sm md:text-base font-cinzel italic text-near-white leading-relaxed">
                      {selectedMedia.caption}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery

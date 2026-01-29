import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Calendar, Building2, BedDouble, Coffee, Car, Smartphone, MessageCircle, Heart } from 'lucide-react'

const Places = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // --- DATA (Preserved & Enhanced with Icon Keys) ---
  const places = [
    {
      name: "Lonavala",
      date: "July 2025",
      type: "travel",
      descriptor: "Where it all started—a company trip, a truth and dare game, a misunderstanding that became the beginning of us.",
      memories: ["First company trip", "The fight that sparked it all", "Unknowing beginnings"]
    },
    {
      name: "Office Corridors",
      date: "July - Oct 2025",
      type: "office",
      descriptor: "Where stolen glances turned into secret touches—the hallways where we 'accidentally' met every day.",
      memories: ["Mouse-like glances", "Timing coffee breaks", "Memorizing schedules"]
    },
    {
      name: "Office Washroom",
      date: "Mid-August 2025",
      type: "secret",
      descriptor: "Our first kiss—not romantic, but unforgettable. Hearts racing, forbidden, the moment everything changed.",
      memories: ["Planned on WhatsApp", "Urgent & reckless", "The turning point"]
    },
    {
      name: "Office After Hours",
      date: "Aug - Sept 2025",
      type: "office",
      descriptor: "Late evenings when everyone left—you in my lap, hands exploring, pushing every boundary.",
      memories: ["Empty building echoes", "Conference room secrets", "Building anticipation"]
    },
    {
      name: "First Hotel Room",
      date: "Late August 2025",
      type: "hotel",
      descriptor: "Our first time completely alone—exploring, discovering, learning each other's bodies.",
      memories: ["Everything except sex", "Hours of exploration", "Tangled & breathless"]
    },
    {
      name: "Lunch Spots",
      date: "July - Oct 2025",
      type: "food",
      descriptor: "Cafeteria dates that evolved from awkward small talk to planning our next hotel room in hushed voices.",
      memories: ["Hands under the table", "Sitting too close", "Secret smiles"]
    },
    {
      name: "Hyderabad Hotels",
      date: "October 2025",
      type: "hotel",
      descriptor: "Where we finally surrendered—nights of passion, every fantasy realized, rooms that became sacred.",
      memories: ["First time making love", "Morning light on skin", "Untouched room service"]
    },
    {
      name: "Office Parking Lot",
      date: "Late Oct 2025",
      type: "car",
      descriptor: "Your last day—the goodbye kiss that lasted too long, holding you like I could stop time.",
      memories: ["Public & reckless", "Holding on tight", "The painful goodbye"]
    },
    {
      name: "Nagpur Streets",
      date: "Nov 2025+",
      type: "city",
      descriptor: "Your city became our city—walking hand in hand, finally not hiding, feeling free to just be us.",
      memories: ["Futala Lake evenings", "Your favorite cafés", "Freedom"]
    },
    {
      name: "Your Nagpur Room",
      date: "Nov - Dec 2025",
      type: "home",
      descriptor: "Our sanctuary—where distance dissolved, weeks of longing exploded, and we could be as loud as we wanted.",
      memories: ["Explosive reunions", "All-day sessions", "Bed became home"]
    },
    {
      name: "Video Calls",
      date: "Nov 2025+",
      type: "digital",
      descriptor: "When distance tried to separate us—virtual intimacy that kept the fire burning.",
      memories: ["Sleeping on call", "Virtual intimacy", "Morning faces"]
    },
    {
      name: "WhatsApp",
      date: "July 2025+",
      type: "digital",
      descriptor: "Our lifeline—from innocent texts to dark fantasies, from good mornings to 2 AM confessions.",
      memories: ["First confessions", "Explicit texts", "Endless voice notes"]
    }
  ]

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px]" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <MapPin size={14} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">The Atlas</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-white via-rose-100 to-white bg-clip-text text-transparent">
            Sacred Coordinates
          </h1>
          <p className="text-white/50 font-serif italic text-lg max-w-2xl mx-auto">
            "Locations are just coordinates until we made them memories."
          </p>
        </div>

        {/* --- JOURNEY PATH CONTAINER --- */}
        <div className="relative">

          {/* Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {places.map((place, index) => (
              <PlaceCard key={index} place={place} index={index} />
            ))}
          </div>

        </div>

        {/* --- FOOTER SUMMARY --- */}
        <div className="mt-32 text-center border-t border-white/10 pt-16">
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                <MapPin className="text-rose-500/50" size={20} />
              </motion.div>
            ))}
          </div>
          <p className="font-serif italic text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            "From Lonavala hills to Nagpur streets—every location is marked with our memories.
            These aren't just places on a map; they're chapters in our story."
          </p>
        </div>

      </div>
    </section>
  )
}

// --- HELPER: ICON SELECTOR ---
const getIcon = (type) => {
  switch (type) {
    case 'travel': return <MapPin />;
    case 'office': return <Building2 />;
    case 'secret': return <Heart />;
    case 'hotel': return <BedDouble />;
    case 'food': return <Coffee />;
    case 'car': return <Car />;
    case 'city': return <MapPin />;
    case 'home': return <BedDouble />;
    case 'digital': return <Smartphone />;
    default: return <MapPin />;
  }
}

// --- SUB-COMPONENT: PLACE CARD ---
const PlaceCard = ({ place, index }) => {
  const isLeft = index % 2 === 0

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

      {/* 1. CONTENT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 md:px-12"
      >
        <div className={`relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-rose-500/30 hover:bg-white/10 transition-all duration-500
          ${isLeft ? 'text-left' : 'md:text-right'}
        `}>
          {/* Metadata Header */}
          <div className={`flex items-center gap-3 mb-6 text-xs uppercase tracking-widest text-white/40 ${isLeft ? '' : 'md:justify-end'}`}>
            <span className="flex items-center gap-2">
              <Calendar size={12} /> {place.date}
            </span>
            <span>•</span>
            <span className="text-rose-400">LOC-{String(index + 1).padStart(3, '0')}</span>
          </div>

          {/* Title & Icon */}
          <div className={`flex items-center gap-4 mb-4 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
            <div className="p-3 rounded-full bg-white/5 text-rose-400 border border-white/10 group-hover:scale-110 transition-transform duration-500">
              {React.cloneElement(getIcon(place.type), { size: 24 })}
            </div>
            <h3 className="text-2xl font-serif text-white group-hover:text-rose-200 transition-colors">
              {place.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/70 font-serif leading-relaxed mb-6">
            {place.descriptor}
          </p>

          {/* Memories Tags */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? '' : 'md:justify-end'}`}>
            {place.memories.map((mem, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-black/30 border border-white/5 text-[10px] uppercase tracking-wide text-white/50">
                {mem}
              </span>
            ))}
          </div>

        </div>
      </motion.div>

      {/* 2. CENTER NODE (Desktop Only) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12">
        <div className="w-3 h-3 bg-black border-2 border-rose-500 rounded-full z-10" />
        <div className="absolute w-8 h-8 bg-rose-500/20 rounded-full blur-md animate-pulse" />
      </div>

      {/* 3. EMPTY SPACER SIDE */}
      <div className="w-full md:w-1/2" />

    </div>
  )
}

export default Places

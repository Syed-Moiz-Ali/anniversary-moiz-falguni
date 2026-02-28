import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Calendar, Building2, BedDouble,
  Coffee, Car, Smartphone, Heart, Home
} from 'lucide-react'

// ─── DATA — FROM loveMasterData.json ──────────────────────────────────────────
// Sources: places.locations[] + journey.timeline + ourStory.chapters
// spatialEmotionMapping: conflictZone, riskZone, intimacyZone, sanctuaryZone, connectionZone

const PLACES = [
  {
    id: 1,
    name: 'Lonavala',
    date: 'July 2025',
    type: 'travel',
    phase: 'Conflict',
    intensityLevel: 0.82,
    symbolism: 'The ignition point of the relationship.',
    spatialZone: 'Conflict Zone',
    descriptor: "Where friction turned into destiny. A truth and dare game, a misunderstanding, a fight that neither of us expected would become the foundation of everything. We started with raised voices and stubborn pride — unaware that destiny had already chosen us.",
    memories: ['Truth & Dare ignition', 'The fight that sparked it all', 'Unknowing beginnings', 'Fate setup'],
    accentColor: 'amber',
  },
  {
    id: 2,
    name: 'Office Corridors',
    date: 'July – Oct 2025',
    type: 'office',
    phase: 'Secret Intimacy',
    intensityLevel: 0.87,
    symbolism: 'Thrill of secrecy and shared risk.',
    spatialZone: 'Risk Zone',
    descriptor: "Stolen glances. Pressed against walls. Almost getting caught. The hallways where tension built, anticipation crackled, and every 'accidental' meeting was perfectly planned.",
    memories: ['Mouse-like shy glances', 'Timing coffee breaks', 'Memorizing schedules', 'Walls & whispers'],
    accentColor: 'indigo',
  },
  {
    id: 3,
    name: 'Office Washroom',
    date: 'Mid-August 2025',
    type: 'secret',
    phase: 'Boundary Crossing',
    intensityLevel: 0.93,
    symbolism: 'The moment innocence turned into intention.',
    spatialZone: 'Risk Zone',
    descriptor: "The first kiss. Not romantic — reckless. Planned over WhatsApp the night before, executed with hammering hearts. A line crossed that made everything afterward irreversible. Urgent and forbidden and perfect.",
    memories: ['Planned on WhatsApp', 'Urgent & reckless', 'The turning point', 'Irreversible'],
    accentColor: 'rose',
  },
  {
    id: 4,
    name: 'Office After Hours',
    date: 'Aug – Sept 2025',
    type: 'office',
    phase: 'Hidden Moments',
    intensityLevel: 0.87,
    symbolism: 'Building toward something inevitable.',
    spatialZone: 'Risk Zone',
    descriptor: "Late evenings when the building emptied — you in my lap, the anticipation torture. Every boundary explored except the last. We were building toward something we both knew was inevitable.",
    memories: ['Empty building echoes', 'Conference room secrets', 'Building anticipation', 'Delicious tension'],
    accentColor: 'slate',
  },
  {
    id: 5,
    name: 'First Hotel Room',
    date: 'Late August 2025',
    type: 'hotel',
    phase: 'Exploration',
    intensityLevel: 0.88,
    symbolism: 'Foundation of physical and emotional understanding.',
    spatialZone: 'Intimacy Zone',
    descriptor: "Our first time completely alone. Not rushing to sex — rushing to intimacy. Hours of exploration, discovering the language of each other's bodies. Building something that would later deepen into passion. It was the first time I felt truly at home.",
    memories: ['Everything except sex', 'Hours of exploration', 'Learning each other', 'First sanctuary'],
    accentColor: 'purple',
  },
  {
    id: 6,
    name: 'Lunch Spots',
    date: 'July – Oct 2025',
    type: 'food',
    phase: 'Curiosity',
    intensityLevel: 0.78,
    symbolism: 'Curiosity evolved into desire over shared meals.',
    spatialZone: 'Conflict Zone',
    descriptor: "From awkward cafeteria small-talk to planning hotel escapades in hushed voices over food. Hands finding each other under the table. Sitting too close. Lunch hours compressed into lifetimes.",
    memories: ['Hands under the table', 'Sitting too close', 'From apologies to plans', 'Secret smiles'],
    accentColor: 'emerald',
  },
  {
    id: 7,
    name: 'Hyderabad Hotels',
    date: 'October 2025',
    type: 'hotel',
    phase: 'Deep Intimacy',
    intensityLevel: 0.96,
    symbolism: 'Transformation from desire to emotional merging.',
    spatialZone: 'Intimacy Zone',
    descriptor: "Where connection deepened. Where whispers turned into surrender. All the fantasies we whispered about became real — hotel rooms turning into sacred spaces. It wasn't just physical. It was emotional, intense, unforgettable.",
    memories: ['First time making love', 'Morning light on skin', 'Sacred spaces', 'Emotional merging'],
    accentColor: 'pink',
  },
  {
    id: 8,
    name: 'Last Hyderabad Hotel',
    date: 'Late Oct 2025',
    type: 'hotel',
    phase: 'Symbolic Commitment',
    intensityLevel: 0.95,
    symbolism: 'Embodied trust and admiration.',
    spatialZone: 'Intimacy Zone',
    descriptor: "The gift. The promise. The moment you stepped out wearing black lace and time stopped. Confidence radiating from every inch of you. I couldn't speak. That night became one of the most powerful memories of our entire story — seared permanently.",
    memories: ['Black lace gift', 'Time stopped', 'Breathless admiration', 'Eternal image'],
    accentColor: 'rose',
  },
  {
    id: 9,
    name: 'Office Goodbye',
    date: 'Late Oct 2025',
    type: 'car',
    phase: 'Separation',
    intensityLevel: 0.87,
    symbolism: 'The goodbye that proved the love.',
    spatialZone: 'Risk Zone',
    descriptor: "Your last day. I cried. Losing daily access to you felt like losing oxygen. The goodbye that lasted too long, holding you like I could stop time. What felt like an ending became a transition into something deeper.",
    memories: ['Holding on tight', 'The painful goodbye', 'Love realization', 'Transition point'],
    accentColor: 'slate',
  },
  {
    id: 10,
    name: 'Nagpur',
    date: 'Nov 2025 – Present',
    type: 'city',
    phase: 'Reunion & Stability',
    intensityLevel: 0.94,
    symbolism: 'From temporary meetings to emotional home.',
    spatialZone: 'Sanctuary Zone',
    descriptor: "Your city became our city. Reunions after weeks apart felt electric — every knock on your door felt like returning to where I truly belonged. Futala Lake evenings, your favorite cafés, finally free to just be us.",
    memories: ['Futala Lake evenings', 'Your favorite cafés', 'No more hiding', 'Finally free'],
    accentColor: 'emerald',
  },
  {
    id: 11,
    name: 'Your Nagpur Room',
    date: 'Nov 2025 – Present',
    type: 'home',
    phase: 'Deep Bonding',
    intensityLevel: 0.97,
    symbolism: 'The room that became our universe.',
    spatialZone: 'Sanctuary Zone',
    descriptor: "Our sanctuary — where distance dissolved and weeks of longing combusted the second the door closed. That mid-November all-day session where we forgot the world existed. Nagpur taught me that home isn't a place. It's wherever you are.",
    memories: ['Explosive reunions', 'The all-day session', 'Bed became home', 'World forgotten'],
    accentColor: 'blue',
  },
  {
    id: 12,
    name: 'Video Call Screens',
    date: 'Nov 2025 – Present',
    type: 'digital',
    phase: 'Long Distance Adaptation',
    intensityLevel: 0.89,
    symbolism: 'Distance conquered by intention.',
    spatialZone: 'Connection Zone',
    descriptor: "Late nights. Shared silence. Virtual closeness that kept the fire alive. Your face on a screen being enough to get through another week apart. Shopping together online, sleeping on call — distance collapsed through intention.",
    memories: ['Sleeping on call', 'Virtual intimacy', 'Shopping together', 'Morning faces'],
    accentColor: 'purple',
  },
  {
    id: 13,
    name: 'WhatsApp',
    date: 'July 2025 – Present',
    type: 'digital',
    phase: 'Foundation',
    intensityLevel: 0.90,
    symbolism: 'Digital space transformed into sacred confessional.',
    spatialZone: 'Connection Zone',
    descriptor: "Our lifeline. From innocent texts to dark 2 AM fantasies. From clearing the air to never stopping. The conversation that started with an apology and never ended — this is where we became us.",
    memories: ['First confessions', '2 AM vulnerabilities', 'Endless voice notes', 'Our beginning'],
    accentColor: 'indigo',
  },
  {
    id: 14,
    name: 'Delivery Doorsteps',
    date: 'Nov 2025 – Present',
    type: 'home',
    phase: 'Acts of Love',
    intensityLevel: 0.86,
    symbolism: 'Love expressed through action across cities.',
    spatialZone: 'Connection Zone',
    descriptor: "Packages arriving with her handwriting. Distance shrinking through thoughtfulness. T-shirts chosen from Nagpur, notes saying 'For my favorite person' — every ordinary package transformed into a love letter.",
    memories: ['Handwritten notes', '"For my favorite person"', 'Chosen with care', 'Distance bridged'],
    accentColor: 'emerald',
  },
]

const ACCENT = {
  rose:   { dot: 'bg-rose-500',    bar: 'bg-rose-500/60',    tag: 'bg-rose-500/8 text-rose-300/50 border-rose-500/12',    zone: 'text-rose-400/40',   border: 'hover:border-rose-500/20'   },
  amber:  { dot: 'bg-amber-400',   bar: 'bg-amber-400/60',   tag: 'bg-amber-500/8 text-amber-300/50 border-amber-500/12', zone: 'text-amber-400/40',  border: 'hover:border-amber-500/20'  },
  indigo: { dot: 'bg-indigo-400',  bar: 'bg-indigo-400/60',  tag: 'bg-indigo-500/8 text-indigo-300/50 border-indigo-500/12', zone: 'text-indigo-400/40', border: 'hover:border-indigo-500/20'},
  purple: { dot: 'bg-purple-400',  bar: 'bg-purple-400/60',  tag: 'bg-purple-500/8 text-purple-300/50 border-purple-500/12', zone: 'text-purple-400/40', border: 'hover:border-purple-500/20'},
  pink:   { dot: 'bg-pink-400',    bar: 'bg-pink-400/60',    tag: 'bg-pink-500/8 text-pink-300/50 border-pink-500/12',    zone: 'text-pink-400/40',   border: 'hover:border-pink-500/20'   },
  emerald:{ dot: 'bg-emerald-400', bar: 'bg-emerald-400/60', tag: 'bg-emerald-500/8 text-emerald-300/50 border-emerald-500/12', zone: 'text-emerald-400/40', border: 'hover:border-emerald-500/20'},
  slate:  { dot: 'bg-slate-400',   bar: 'bg-slate-400/60',   tag: 'bg-slate-500/8 text-slate-300/50 border-slate-500/12', zone: 'text-slate-400/40',  border: 'hover:border-slate-500/20'  },
  blue:   { dot: 'bg-blue-400',    bar: 'bg-blue-400/60',    tag: 'bg-blue-500/8 text-blue-300/50 border-blue-500/12',    zone: 'text-blue-400/40',   border: 'hover:border-blue-500/20'   },
}

const ICON_MAP = {
  travel:  MapPin,
  office:  Building2,
  secret:  Heart,
  hotel:   BedDouble,
  food:    Coffee,
  car:     Car,
  city:    MapPin,
  home:    Home,
  digital: Smartphone,
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const Places = () => (
  <section className="min-h-screen bg-[#060608] text-white py-32 relative overflow-hidden">

    {/* ── Ambient ── */}
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-rose-900/8 rounded-full blur-[160px]" />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-indigo-900/8 rounded-full blur-[160px]" />
    </div>

    <div className="container max-w-6xl mx-auto px-6 relative z-10">

      {/* ── Header ── */}
      <div className="text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-md mb-8"
        >
          <MapPin size={11} className="text-rose-400/70" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">The Atlas</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-serif mb-5 bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent"
        >
          Sacred Coordinates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/30 font-serif italic text-base max-w-xl mx-auto mb-10"
        >
          "Locations are just coordinates until we made them memories."
        </motion.p>

        {/* Spatial zone legend — from places.spatialEmotionMapping */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {['Conflict Zone', 'Risk Zone', 'Intimacy Zone', 'Sanctuary Zone', 'Connection Zone'].map((zone) => (
            <span key={zone} className="px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border border-white/5 bg-white/[0.02] text-white/20">
              {zone}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Timeline ── */}
      <div className="relative">
        {/* Spine */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/4 -translate-x-1/2" />

        <div className="space-y-10 md:space-y-20">
          {PLACES.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} />
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-32 text-center border-t border-white/5 pt-16"
      >
        <div className="flex justify-center gap-3 mb-8">
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MapPin className="text-rose-500/20" size={16} />
            </motion.div>
          ))}
        </div>
        <p className="font-serif italic text-lg md:text-xl text-white/35 max-w-2xl mx-auto leading-relaxed">
          "From Lonavala hills to Nagpur streets — every location is marked with our memories.
          These aren't just coordinates on a map. They're chapters in our story."
        </p>
      </motion.div>

    </div>
  </section>
)

// ─── PLACE CARD ───────────────────────────────────────────────────────────────
const PlaceCard = ({ place, index }) => {
  const isLeft = index % 2 === 0
  const accent = ACCENT[place.accentColor] || ACCENT.rose
  const Icon = ICON_MAP[place.type] || MapPin

  return (
    <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-0 ${isLeft ? '' : 'md:flex-row-reverse'}`}>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 md:px-10"
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className={`group relative p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 ${accent.border}`}
        >

          {/* Top row */}
          <div className={`flex items-start justify-between gap-3 mb-5 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
            <div>
              <div className={`flex items-center gap-2 mb-1 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/20">
                  LOC-{String(place.id).padStart(3, '0')}
                </span>
                <span className="text-white/10">·</span>
                <span className={`text-[9px] font-bold uppercase tracking-widest ${accent.zone}`}>
                  {place.spatialZone}
                </span>
              </div>
              <div className={`flex items-center gap-1.5 text-[9px] text-white/15 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                <Calendar size={9} />
                <span>{place.date}</span>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-all shrink-0">
              <Icon size={14} className="text-white/35 group-hover:text-white/60 transition-colors" />
            </div>
          </div>

          {/* Title + Phase */}
          <div className={`mb-1 ${isLeft ? '' : 'md:text-right'}`}>
            <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/20 mb-1">{place.phase}</p>
            <h3 className="text-xl md:text-2xl font-serif text-white/80 group-hover:text-white transition-colors">
              {place.name}
            </h3>
          </div>

          {/* Descriptor */}
          <p className={`text-white/40 font-serif leading-relaxed text-sm mt-3 mb-5 group-hover:text-white/60 transition-colors duration-300 ${isLeft ? '' : 'md:text-right'}`}>
            {place.descriptor}
          </p>

          {/* Intensity bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[8px] uppercase tracking-widest text-white/12">Intensity</span>
              <span className="text-[8px] font-bold text-white/18">{Math.round(place.intensityLevel * 100)}%</span>
            </div>
            <div className="h-px bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${place.intensityLevel * 100}%` }}
                transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
                className={`h-full ${accent.bar} rounded-full`}
              />
            </div>
          </div>

          {/* Memory tags */}
          <div className={`flex flex-wrap gap-1.5 mb-3 ${isLeft ? '' : 'md:justify-end'}`}>
            {place.memories.map((mem) => (
              <span key={mem} className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wide border ${accent.tag}`}>
                {mem}
              </span>
            ))}
          </div>

          {/* Symbolism */}
          <p className={`text-[9px] text-white/12 font-serif italic ${isLeft ? '' : 'md:text-right'}`}>
            ✦ {place.symbolism}
          </p>
        </motion.div>
      </motion.div>

      {/* ── Center Node (desktop) ── */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 z-10">
        <div className={`w-2.5 h-2.5 rounded-full ${accent.dot} z-10`} />
        <div className={`absolute w-6 h-6 rounded-full ${accent.dot} opacity-15 blur-md`} />
      </div>

      {/* ── Spacer ── */}
      <div className="hidden md:block w-1/2" />
    </div>
  )
}

export default Places

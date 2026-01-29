import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Flame, Lock, Eye, Star } from 'lucide-react';

const IntimateMemories = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Categorized memories for better UX
  const memories = [
    { type: 'passionate', text: "The way you bit your lip before you kissed me in that office washroom—nervous and excited all at once." },
    { type: 'passionate', text: "Your hands tracing fire down my spine in the Hyderabad hotel, discovering every spot that made me shiver." },
    { type: 'emotional', text: "That night you whispered my name like a prayer, over and over, until it was the only word that mattered." },
    { type: 'passionate', text: "The urgent press of your body against mine in the washroom—our first kiss, reckless and perfect." },
    { type: 'passionate', text: "Your eyes, half-closed, lost in the rhythm we created together in that Nagpur bedroom." },
    { type: 'emotional', text: "The taste of you still lingering on my lips hours later, making me crave more." },
    { type: 'passionate', text: "How you shiver when I kiss that spot on your neck, the one that makes you forget to breathe." },
    { type: 'playful', text: "Your breathless laugh when we finally stopped to catch our breath after round three." },
    { type: 'emotional', text: "The way you pull me closer, wrapping your legs around me like you can't get enough." },
    { type: 'passionate', text: "Your skin, warm and electric beneath my fingertips, responding to every touch." },
    { type: 'emotional', text: "That Nagpur morning when we forgot the world existed—just us, tangled in sheets, not wanting to move." },
    { type: 'passionate', text: "The hunger in your kiss when we'd been apart too long, weeks of need exploding the moment our lips met." },
    { type: 'passionate', text: "Your fingers tangled in my hair, pulling me deeper into the kiss, controlling the pace." },
    { type: 'passionate', text: "The sound you make when I find that perfect spot—half gasp, half moan, completely intoxicating." },
    { type: 'emotional', text: "How your body remembers mine even before we touch, arching toward me in anticipation." },
    { type: 'emotional', text: "The way you say my name when you're on the edge, desperate and beautiful." },
    { type: 'playful', text: "Your 'Bhai saab' tease right before you kiss me, that playful smile I can never resist." },
    { type: 'playful', text: "How you steal my shirt after and parade around in it, claiming it's 'ours' now." },
    { type: 'passionate', text: "The concentrated face you make when you're on top, focused and gorgeous." },
    { type: 'passionate', text: "That time in the hotel when you pushed me onto the bed and took complete control." },
    { type: 'emotional', text: "Your sleepy voice at 2 AM saying 'come closer' and pulling me into your warmth." },
    { type: 'playful', text: "The way you demand attention when I'm on my phone, climbing into my lap until I give in." },
    { type: 'playful', text: "Your competitive side when you said 'I bet I can make you lose control first' and you won." },
    { type: 'emotional', text: "How you look at me right after—vulnerable, satisfied, and somehow still hungry for more." },
    { type: 'passionate', text: "The morning you woke me up with kisses trailing down my chest, refusing to let me sleep." },
    { type: 'playful', text: "Your hand finding mine under the restaurant table, that secret touch that said 'later'." },
    { type: 'playful', text: "The way you bite your lip when you're trying not to smile after I say something dirty." },
    { type: 'passionate', text: "That Hyderabad shower where we meant to get clean but ended up even more dirty." },
    { type: 'passionate', text: "Your breathless 'don't stop' whispered against my ear, driving me absolutely wild." },
    { type: 'emotional', text: "How you pull the covers over us and create our own world, just you and me and nothing else." },
    { type: 'passionate', text: "The scratch marks you left on my back that one intense Nagpur night." },
    { type: 'playful', text: "Your challenge: 'Make me forget my own name' and the hours we spent trying." },
    { type: 'emotional', text: "The way you cuddle after, all soft and clingy, completely different from moments before." },
    { type: 'passionate', text: "Your midnight texts: 'I'm touching myself thinking about you' that made me lose my mind." },
    { type: 'emotional', text: "How you look in the morning light—hair messy, lips swollen, eyes still heavy with sleep and satisfaction." },
    { type: 'passionate', text: "That time you kissed me in the office parking lot, not caring who might see." },
    { type: 'playful', text: "Your gasp when I surprised you with that thing you'd only mentioned once in passing." },
    { type: 'emotional', text: "The way you grab my face when you kiss me, like you're claiming me as yours." },
    { type: 'emotional', text: "How we communicate with just looks now—one glance and I know exactly what you want." },
    { type: 'playful', text: "Your satisfied smile after, the one that says 'I won' because you absolutely did." },
    { type: 'passionate', text: "The moment I handed you the black lace lingerie gift and your eyes lit up with excitement." },
    { type: 'passionate', text: "When you stepped out of the bathroom wearing that black lace set—time literally stopped." },
    { type: 'passionate', text: "How absolutely stunning you looked in that black lingerie—beauty, sexiness, perfection all at once." },
    { type: 'passionate', text: "The confidence radiating from you as you moved toward me in that lace, knowing exactly what you were doing." },
    { type: 'emotional', text: "My heart racing seeing you in the gift I chose, looking even more breathtaking than I'd imagined." },
    { type: 'emotional', text: "The packages arriving at my door in Hyderabad—t-shirts and shirts you ordered from Nagpur." },
    { type: 'playful', text: "Sending you photos of me wearing the clothes you sent, just to hear your voice on the call immediately after." },
    { type: 'emotional', text: "Your voice saying 'that color looks perfect on you' when I modeled the shirt you picked." },
    { type: 'playful', text: "Shopping online together on video call, arguing playfully about which style suits me better." },
    { type: 'emotional', text: "Opening a surprise package from you and finding that shirt I'd mentioned wanting weeks ago." },
    { type: 'emotional', text: "How you remember my sizes, my favorite colors, what styles I like—paying attention to every detail." },
    { type: 'playful', text: "The excitement in your voice when you'd ask 'Did it arrive yet?' waiting for my reaction." },
    { type: 'emotional', text: "Wearing your gifts and feeling connected to you even when we're cities apart." },
    { type: 'playful', text: "That video call where you made me do a full fashion show of everything you'd sent." },
    { type: 'emotional', text: "How shopping for each other became our love language across the distance." },
    { type: 'playful', text: "Your laugh when the package arrived on the wrong day and I had to wait another 24 hours." },
    { type: 'emotional', text: "The notes you'd ask them to include: 'For my favorite person' that made my whole day." },
    { type: 'emotional', text: "How even simple t-shirts became precious because they came from you, chosen by you, sent with love." }
  ];

  const filteredMemories = filter === 'all' ? memories : memories.filter(m => m.type === filter);

  return (
    <section className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* --- AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Lock size={14} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">The Vault</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
          >
            Intimate Memories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 font-serif italic text-lg max-w-2xl mx-auto mb-10"
          >
            "Moments that live rent-free in my mind. Hover to unlock the memory."
          </motion.p>

          {/* --- FILTER TABS --- */}
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'passionate', 'emotional', 'playful'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  filter === type
                    ? 'bg-rose-500 text-white border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                    : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* --- MEMORY GRID --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredMemories.map((memory, index) => (
              <MemoryCard
                key={index}
                memory={memory}
                index={index}
                isHovered={hoveredIndex === index}
                setHovered={setHoveredIndex}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- STATS FOOTER --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-32 pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem value={memories.length} label="Captured Moments" />
            <StatItem value="∞" label="Unwritten Memories" />
            <StatItem value="2" label="Cities Apart" />
            <StatItem value="1" label="Eternal Bond" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT: MEMORY CARD ---
const MemoryCard = ({ memory, index, isHovered, setHovered }) => {
  const getIcon = () => {
    switch (memory.type) {
      case 'passionate': return <Flame size={16} className="text-orange-400" />;
      case 'emotional': return <Heart size={16} className="text-rose-400" />;
      case 'playful': return <Sparkles size={16} className="text-yellow-400" />;
      default: return <Star size={16} className="text-blue-400" />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="relative group h-64 perspective-1000"
    >
      <div className={`
        relative w-full h-full rounded-2xl border transition-all duration-500 overflow-hidden
        ${isHovered
          ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
          : 'bg-white/5 border-white/10'
        }
      `}>

        {/* BLURRED COVER (Initial State) */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'}`}>
          <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform">
            <Lock size={24} className="text-white/50" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-white/30">
            Memory #{String(index + 1).padStart(3, '0')}
          </span>
          <div className="mt-4 flex gap-2">
            {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white/20" />)}
          </div>
        </div>

        {/* REVEALED CONTENT (Hover State) */}
        <div className={`absolute inset-0 p-8 flex flex-col justify-between transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md">
              {getIcon()}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 ${
              memory.type === 'passionate' ? 'text-orange-300' :
              memory.type === 'emotional' ? 'text-rose-300' : 'text-yellow-300'
            }`}>
              {memory.type}
            </span>
          </div>

          <p className="font-serif text-lg leading-relaxed text-white/90 drop-shadow-md">
            "{memory.text}"
          </p>

          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

      </div>
    </motion.div>
  );
};

// --- SUB-COMPONENT: STAT ITEM ---
const StatItem = ({ value, label }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
    <div className="text-4xl md:text-5xl font-serif text-white mb-2">{value}</div>
    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{label}</div>
  </div>
);

export default IntimateMemories;

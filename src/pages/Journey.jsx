import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  MapPin, Flame, Moon, Gift, Home,
  Smartphone, Infinity as InfinityIcon,
  Heart, Calendar, Star, Sparkles
} from 'lucide-react';

const Journey = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timelineData = [
    {
      month: "July 2025",
      title: "The Ignition",
      icon: <MapPin size={24} />,
      color: "text-blue-400",
      fragment: "Lonavala changed everything. A fight born from misunderstanding sparked conversations that turned into confessions. We went from strangers to conspirators, planning our first forbidden kiss in an office washroom."
    },
    {
      month: "August 2025",
      title: "The First Touch",
      icon: <Flame size={24} />,
      color: "text-orange-500",
      fragment: "The washroom kiss that started it all—urgent, reckless, perfect. Then our first hotel room, learning each other's bodies without crossing the final line. WhatsApp became our playground for dark fantasies we'd never shared with anyone else."
    },
    {
      month: "September 2025",
      title: "Forbidden Office",
      icon: <Moon size={24} />,
      color: "text-indigo-400",
      fragment: "Office nights after everyone left. You in my lap, hands exploring under clothes, pushing every boundary except the last one. The anticipation was torture—the most delicious kind. We were building toward something inevitable."
    },
    {
      month: "October 2025",
      title: "Hyderabad & Lace",
      icon: <Gift size={24} />,
      color: "text-rose-500",
      fragment: "Hyderabad finally gave us what we'd been craving. Hotel room doors closing, no more waiting. We made love for the first time. Before you left, I gifted you black lace lingerie. When you wore it for me, you looked absolutely breathtaking—no words could capture it."
    },
    {
      month: "November 2025",
      title: "Nagpur Sanctuary",
      icon: <Home size={24} />,
      color: "text-emerald-400",
      fragment: "You left the office, but Nagpur became our sanctuary. After months apart, our reunion was explosive. From Nagpur, you'd order t-shirts for me in Hyderabad, little surprises that made the distance bearable. Your city became our secret world."
    },
    {
      month: "December 2025",
      title: "Digital Desire",
      icon: <Smartphone size={24} />,
      color: "text-purple-400",
      fragment: "Distance made us bolder. Video calls turned into virtual intimacy. Every Nagpur visit was combustion. Shopping for each other online, staying connected in every way possible. Your name became my favorite prayer, whispered against your skin."
    },
    {
      month: "January 2026",
      title: "The Beginning",
      icon: <InfinityIcon size={24} />,
      color: "text-white",
      fragment: "Six months since it all began. From that Lonavala fight to black lace surprises to packages arriving at each other's doors—we've built something extraordinary. This isn't an ending—it's just the beginning of every tomorrow I want to wake up tangled in you."
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white relative overflow-hidden py-32">

      {/* --- AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Calendar size={14} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">The Chronology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-serif mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
          >
            The Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-serif italic text-white/60 max-w-2xl mx-auto"
          >
            "Seven months. Two cities. Infinite memories."
          </motion.p>
        </div>

        {/* --- TIMELINE --- */}
        <div className="relative">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500 via-purple-500 to-blue-500 md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-24 md:space-y-32">
            {timelineData.map((item, index) => (
              <TimelineCard key={index} data={item} index={index} />
            ))}
          </div>
        </div>

        {/* --- STATS GRID --- */}
        <div className="mt-40 border-t border-white/10 pt-20">
          <h3 className="text-center font-serif text-3xl md:text-4xl mb-16">By The Numbers</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatBox value="196+" label="Days Together" delay={0} />
            <StatBox value="3000+" label="Messages Sent" delay={0.1} />
            <StatBox value="∞" label="Kisses Shared" delay={0.2} />
            <StatBox value="2" label="Cities Conquered" delay={0.3} />
            <StatBox value="10+" label="Hotel Nights" delay={0.4} />
            <StatBox value="1" label="Black Lace Gift" delay={0.5} highlight />
            <StatBox value="∞" label="Gifts Exchanged" delay={0.6} className="col-span-2" />
          </div>
        </div>

        {/* --- FOOTER QUOTE --- */}
        <div className="mt-32 text-center max-w-3xl mx-auto p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
           <Heart className="mx-auto text-rose-500 mb-6 animate-pulse" fill="currentColor" />
           <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-white/90">
             "Distance tested us, desire brought us closer, and love kept us coming back for more.
             This isn't an ending—it's just the beginning."
           </p>
        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT: TIMELINE CARD ---
const TimelineCard = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''} md:justify-between pl-12 md:pl-0 group`}>

      {/* Node on Line */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <div className={`w-2 h-2 rounded-full ${data.color.replace('text-', 'bg-')}`} />
      </div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="w-full md:w-[45%]"
      >
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl">

          <div className="flex items-center justify-between mb-6">
            <span className={`text-xs font-bold uppercase tracking-widest ${data.color}`}>{data.month}</span>
            <div className={`p-2 rounded-full bg-white/5 ${data.color}`}>
              {data.icon}
            </div>
          </div>

          <h3 className="text-3xl font-serif mb-4 group-hover:text-white transition-colors">{data.title}</h3>

          <p className="text-white/60 leading-relaxed font-sans text-sm md:text-base group-hover:text-white/80 transition-colors">
            {data.fragment}
          </p>

        </div>
      </motion.div>

      {/* Empty Side for Spacing */}
      <div className="hidden md:block w-[45%]" />

    </div>
  );
};

// --- SUB-COMPONENT: STAT BOX ---
const StatBox = ({ value, label, delay, highlight, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className={`p-6 md:p-8 rounded-2xl border text-center transition-all duration-300 ${highlight ? 'bg-rose-500/10 border-rose-500/30' : 'bg-white/5 border-white/10 hover:bg-white/10'} ${className}`}
  >
    <div className={`text-3xl md:text-5xl font-serif mb-2 ${highlight ? 'text-rose-400' : 'text-white'}`}>
      {value}
    </div>
    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
      {label}
    </div>
  </motion.div>
);

export default Journey;

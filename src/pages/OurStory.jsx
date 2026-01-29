import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Calendar, MapPin, Heart, Clock, Lock, Sparkles, MessageCircle } from 'lucide-react';

const OurStory = () => {
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

  const milestones = [
    {
      icon: <MapPin size={20} />,
      title: "The Spark in the Storm",
      date: "July 2025 • Lonavala",
      text: "It didn't start with a smile. It started with a war. That Truth & Dare game in Lonavala set off a chain reaction. You confronted me in the office, eyes blazing, accusing me of spreading rumors. I was innocent, but I was also captivated. In your anger, I saw a fire I wanted to burn in."
    },
    {
      icon: <MessageCircle size={20} />,
      title: "Digital Confessions",
      date: "Late July 2025 • WhatsApp",
      text: "The fight turned into texts to clear the air. Then texts to check in. Then texts at 2 AM about our deepest fears and darkest fantasies. You typed 'I keep thinking about you,' and my world shifted on its axis. We went from colleagues to conspirators in the dark."
    },
    {
      icon: <Lock size={20} />,
      title: "The Washroom Secret",
      date: "August 2025 • The Office",
      text: "Reckless. Dangerous. Perfect. We planned it over lunch—meeting in the quiet corridor washroom. My heart hammered against my ribs as I walked in. You were there, nervous energy radiating. One look, and we collided. Hands in hair, bodies pressed close, a desperate, hungry kiss that tasted like forbidden fruit."
    },
    {
      icon: <Clock size={20} />,
      title: "Stolen Hours",
      date: "August 2025 • First Hotel",
      text: "We needed more than stolen corners. We booked a room. Walking in together felt like stepping into a sanctuary. We didn't rush to sex; we rushed to intimacy. We lay tangled for hours, exploring every inch of skin, learning the map of each other's bodies. It was the first time I felt truly at home."
    },
    {
      icon: <Heart size={20} />,
      title: "Hyderabad Nights",
      date: "October 2025 • Hyderabad",
      text: "The work trip that became our honeymoon. No more hiding. We spent nights exploring the city and exploring each other. The morning light hitting your face on the hotel pillow remains one of my favorite memories. We were building a universe, one night at a time."
    },
    {
      icon: <Sparkles size={20} />,
      title: "The Black Lace Promise",
      date: "Late Oct 2025 • Farewell Gift",
      text: "Before you left for Nagpur, I gave you a box. Inside: the black lace set. When you wore it for me later, stepping out of the bathroom with that shy, confident smile, time stopped. You were breathtaking. That image is burned into my retina forever."
    },
    {
      icon: <MapPin size={20} />,
      title: "Nagpur Weekends",
      date: "Nov 2025 - Present • Nagpur",
      text: "Distance couldn't stop us. It only made the hunger sharper. My first trip to Nagpur. The way we tore at each other's clothes the moment the door closed. The lazy weekends playing house, ordering food, wearing my shirts. Nagpur isn't just a city anymore; it's our hideout."
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white py-32 relative overflow-hidden">

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-4xl mx-auto px-6 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md mb-6"
          >
            <Calendar size={12} className="text-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              The Chronology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent"
          >
            Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/60 font-serif italic text-lg max-w-2xl mx-auto"
          >
            "From a fight in Lonavala to finding home in each other.
            Every text, every touch, every mile traveled."
          </motion.p>
        </div>

        {/* --- TIMELINE --- */}
        <div className="relative pl-8 md:pl-0">

          {/* Progress Bar (Liquid Light) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 via-purple-500 to-rose-500 origin-top hidden md:block"
          />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10 md:hidden" />

          {milestones.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}

        </div>

        {/* --- FOOTER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <Sparkles className="mx-auto text-rose-400 mb-6" size={24} />
          <p className="font-serif text-xl md:text-3xl italic text-white/90 leading-relaxed mb-6">
            "We are just getting started, Falguni.
            The best chapters are yet to be written."
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-white/40">
            To Be Continued...
          </p>
        </motion.div>

      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center justify-between mb-16 md:mb-24 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Spacer for Desktop Layout */}
      <div className="hidden md:block w-5/12" />

      {/* Center Node */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black border border-white/20 z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
      </div>

      {/* Content Card */}
      <div className="w-full pl-12 md:pl-0 md:w-5/12">
        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-white/5 text-rose-400 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
              {item.date}
            </span>
          </div>

          <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-rose-200 transition-colors">
            {item.title}
          </h3>

          <p className="text-white/70 leading-relaxed text-sm md:text-base font-sans">
            {item.text}
          </p>
        </div>
      </div>

    </motion.div>
  );
};

export default OurStory;

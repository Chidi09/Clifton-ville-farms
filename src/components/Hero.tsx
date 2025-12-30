"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { MaskedText } from "./ui/MaskedText";
import VideoModal from "./ui/VideoModal";

export default function Hero() {
  const { scrollY } = useScroll();
  // Parallax for video: It moves slower than the scroll
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
        
        {/* 1. THE VIDEO BACKGROUND LAYER */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="object-cover w-full h-full scale-105" // Scale ensures no white edges during scroll
          >
            <source src="/videos/hero-farm.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="/images/seedlings.jpg" 
              alt="Cliftonville Farm" 
              className="object-cover w-full h-full"
            />
          </video>
          
          {/* 2. The Cinematic Overlay (Dark Green tint) */}
          {/* This ensures white text is readable even over bright parts of the video */}
          <div className="absolute inset-0 bg-primary-dark/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/30" />
        </motion.div>

        {/* 3. Content Layer */}
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-white font-medium text-xs tracking-widest uppercase">
                Live from Abeokuta
              </span>
            </motion.div>

            {/* Heading */}
            <div className="text-fluid-h1 font-serif font-bold text-white leading-[0.9]">
              <MaskedText className="block">Real Farming.</MaskedText>
              <MaskedText className="block text-accent" delay={0.2}>Real Harvest.</MaskedText>
            </div>
            
            <div className="max-w-lg text-lg text-gray-200 leading-relaxed">
              <MaskedText delay={0.4} className="text-lg">
                See the scale of our operations. From our mechanized tractors to our export-ready containers, Cliftonville is feeding the nation.
              </MaskedText>
            </div>
            
            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="bg-accent text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center gap-3 group">
                Explore Products
                <ArrowRight size={20} />
              </button>
              
              {/* Watch Story Button */}
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 rounded-full font-medium text-white border border-white/30 hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-sm"
              >
                <PlayCircle size={20} />
                <span>Watch Our Story</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Empty for video visibility on desktop, or maybe a stat card */}
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}

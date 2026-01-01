"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react"; 
import { MaskedText } from "./ui/MaskedText";
import { useEffect, useRef } from "react"; // Import useRef and useEffect

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // FORCE iOS AUTOPLAY
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Crucial: Set property directly
      videoRef.current.play().catch((error) => {
        console.error("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      
      {/* VIDEO BACKGROUND */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0">
        <video 
          ref={videoRef} // Attach ref
          autoPlay 
          loop 
          muted 
          playsInline 
          className="object-cover w-full h-full scale-105"
          // This CSS hides the default play button on iOS if it fails to load
          style={{ pointerEvents: 'none' }} 
        >
          <source src="/videos/hero-farm.mp4" type="video/mp4" />
        </video>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-primary-dark/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/30" />
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          
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

          <div className="text-fluid-h1 font-serif font-bold text-white leading-[0.9]">
            <MaskedText className="block">Real Farming.</MaskedText>
            <MaskedText className="block text-accent" delay={0.2}>Real Harvest.</MaskedText>
          </div>
          
          <div className="max-w-lg text-lg text-gray-200 leading-relaxed">
            <MaskedText delay={0.4} className="text-lg">
              See the scale of our operations. From our mechanized tractors to our export-ready containers, Cliftonville is feeding the nation.
            </MaskedText>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="bg-accent text-primary-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center gap-3">
              Explore Products
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

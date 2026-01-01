"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { MaskedText } from "./ui/MaskedText";

export default function ProductShowcase() {
  const containerRef = useRef(null);

  // 1. Scroll Physics hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 2. Parallax calculations
  // The spring makes the parallax feel "heavy" and smooth, not jittery
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  
  // Left column moves slightly up
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]); 
  // Right column moves significantly up (creating the offset/shearing effect)
  const y2 = useTransform(smoothProgress, [0, 1], [100, -200]);

  return (
    <section ref={containerRef} id="products" className="py-32 bg-surface-light relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE: The Content (Sticky) */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block py-1 px-3 border border-primary/20 rounded-full mb-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">From Soil to Table</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-dark mb-8 leading-[0.95]">
              <MaskedText>Freshness</MaskedText>
              <MaskedText className="text-primary" delay={0.1}>Redefined.</MaskedText>
            </h2>

            <div className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
              <MaskedText delay={0.2}>
                Our produce is cultivated with precision in Ogun State's finest greenhouses. 
                We ensure every Pepper and Palm Kernel meets international export standards.
              </MaskedText>
            </div>

            {/* Feature List with Staggered Reveal */}
            <div className="space-y-5 mb-12">
              {[
                "Premium Peppers (Red, Yellow, Green)",
                "High-Grade Palm Kernel Oil",
                "Sustainable Packaging Solutions"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-primary-dark font-medium text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <button className="bg-primary-dark text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition-all flex items-center gap-4 group">
              View Wholesale Prices
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} />
              </div>
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE: The Parallax Grid */}
        <div className="h-[800px] w-full relative grid grid-cols-2 gap-6">
          
          {/* Column 1 (Slower) */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-6 pt-20">
            <ProductCard 
              img="/images/pepper-farm-1.jpg" 
              title="Peppers" 
              subtitle="Crisp & Colorful"
              height="h-[400px]"
            />
            <ProductCard 
              img="/images/palm-aerial.jpg" 
              title="Palm Kernel" 
              subtitle="Industrial Grade"
              height="h-[300px]"
            />
          </motion.div>

          {/* Column 2 (Faster - Creates Depth) */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-6">
             <ProductCard 
              img="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=1000&auto=format&fit=crop" 
              title="Vegetables" 
              subtitle="Organic & Clean"
              height="h-[300px]"
            />
            <ProductCard 
              img="/images/garlic.jpg" 
              title="Garlic" 
              subtitle="Premium Quality"
              height="h-[400px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for clean code and reusable hover effects
function ProductCard({ img, title, subtitle, height }: { img: string, title: string, subtitle: string, height: string }) {
  return (
    <div className={`relative w-full ${height} rounded-[2rem] overflow-hidden group cursor-pointer`}>
      {/* Image with zoom effect */}
      <img 
        src={img} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          // Fallback to a placeholder if image doesn't exist
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563565375-f3fdfdbefa66?q=80&w=1000&auto=format&fit=crop";
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
      
      {/* Text Content - Slides up on hover */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white font-serif font-bold text-2xl mb-1">{title}</h3>
        <div className="flex items-center justify-between">
            <p className="text-white/70 text-sm font-light">{subtitle}</p>
            <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <ArrowUpRight size={14} />
            </div>
        </div>
      </div>
    </div>
  )
}

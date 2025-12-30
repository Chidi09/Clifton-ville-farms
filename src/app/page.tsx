"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MaskedText } from "@/components/ui/MaskedText";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-light overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeSection />
      {/* Changed background to Dark to fix visibility issues */}
      <HomeServices /> 
      <HomeProductSlider />
      <HomeCTA />
      <Footer />
      <MobileCTA />
    </main>
  );
}

/* --- SUB-COMPONENTS --- */

// 1. MARQUEE (Button Removed)
function MarqueeSection() {
  return (
    <section className="py-16 bg-white overflow-hidden whitespace-nowrap relative border-b border-gray-100">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 opacity-30">
             <span className="text-8xl font-serif font-bold text-primary-dark stroke-text">SUSTAINABLE</span>
             <span className="w-4 h-4 rounded-full bg-accent"></span>
             <span className="text-8xl font-serif font-bold text-primary-dark">ORGANIC</span>
             <span className="w-4 h-4 rounded-full bg-accent"></span>
             <span className="text-8xl font-serif font-bold text-primary-dark stroke-text">PRECISION</span>
             <span className="w-4 h-4 rounded-full bg-accent"></span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// 2. HOME SERVICES (Dark Background for Visibility)
function HomeServices() {
  return (
    <section className="py-32 px-6 bg-primary-dark text-white relative">
      {/* Background Texture */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4">
              Integrated <span className="text-accent">Farming.</span>
            </h2>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 text-white/80 hover:text-accent transition-colors pb-2 border-b border-white/20 hover:border-accent">
            View Full Process <ArrowRight size={18} />
          </Link>
        </div>

        {/* High Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <ServiceCard 
             title="Greenhouse" 
             desc="Climate-controlled environments for consistent year-round Bell Pepper production."
             link="/services"
             delay={0}
           />
           <ServiceCard 
             title="Processing" 
             desc="Industrial-grade Palm Kernel Oil extraction and sustainable byproduct management."
             link="/services"
             delay={0.2}
           />
           <ServiceCard 
             title="Consultancy" 
             desc="Expert advisory for investors entering the Nigerian agricultural sector."
             link="/services"
             delay={0.4}
           />
        </div>

        <div className="mt-12 md:hidden">
          <Link href="/services" className="flex items-center gap-2 text-accent font-bold">
            View Full Process <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, desc, link, delay }: { title: string, desc: string, link: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="bg-white text-primary-dark p-10 rounded-[2rem] shadow-2xl hover:shadow-accent/20 transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-serif font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed h-20">{desc}</p>
        <Link href={link} className="inline-flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-wider">
          Learn More <ArrowRight size={14} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  )
}

// 3. PRODUCT SLIDER (PC View Enhanced)
function HomeProductSlider() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={targetRef} className="bg-surface-sand h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 w-full mb-16">
           <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-dark">
             Fresh Harvest.
           </h2>
           <p className="text-gray-600 mt-6 text-xl max-w-lg">
             Scroll to explore our premium produce available for bulk purchase.
           </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 w-max pl-[10vw]">
           <ProductSlide img="/images/bell-peppers.jpg" title="Bell Peppers" tag="Best Seller" />
           <ProductSlide img="/images/palm-kernel.jpg" title="Palm Kernel Oil" tag="Industrial" />
           <ProductSlide img="/images/seedlings.jpg" title="Nursery Seedlings" tag="Organic" />
           <ProductSlide img="/images/livestock.jpg" title="Livestock" tag="Free Range" />
        </motion.div>
        
        <div className="absolute bottom-10 left-10 md:left-20">
           <Link href="/products" className="bg-primary-dark text-white px-10 py-5 rounded-full font-bold hover:bg-accent transition-colors shadow-xl">
             View Price List
           </Link>
        </div>
      </div>
    </section>
  )
}

function ProductSlide({ img, title, tag }: { img: string, title: string, tag: string }) {
  return (
    <div className="relative w-[85vw] md:w-[35vw] h-[50vh] rounded-[3rem] overflow-hidden flex-shrink-0 group shadow-lg cursor-pointer">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-8 left-8 text-white">
        <span className="bg-accent text-primary-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
          {tag}
        </span>
        <h3 className="text-3xl md:text-5xl font-serif font-bold">{title}</h3>
      </div>
    </div>
  )
}

// 4. CTA
function HomeCTA() {
  return (
    <section className="py-32 px-6 bg-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-primary-dark">
          Start Your Order.
        </h2>
        <p className="text-xl text-gray-500 mb-12">
          From local markets to industrial processing, we have the capacity.
        </p>
        <Link href="/contact" className="bg-accent text-primary-dark px-12 py-6 rounded-full font-bold text-xl hover:bg-primary-dark hover:text-white transition-all shadow-xl">
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

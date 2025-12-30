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
      
      {/* 1. HERO (Video) */}
      <Hero />

      {/* 2. THE "HYPE" MARQUEE (About Teaser) */}
      <MarqueeSection />

      {/* 3. SERVICES SNAPSHOT (Condensed) */}
      <HomeServices />

      {/* 4. PRODUCT GLIMPSE (Parallax Slider) */}
      <HomeProductSlider />

      {/* 5. FINAL CTA */}
      <HomeCTA />

      <Footer />
      <MobileCTA />
    </main>
  );
}

/* --- SUB-COMPONENTS FOR THIS PAGE ONLY --- */

// 2. MARQUEE SECTION
function MarqueeSection() {
  return (
    <section className="py-20 bg-primary-dark overflow-hidden whitespace-nowrap relative">
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      {/* Moving Text Track */}
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 opacity-50">
             <span className="text-8xl font-serif font-bold text-transparent stroke-text">SUSTAINABLE</span>
             <span className="w-4 h-4 rounded-full bg-accent"></span>
             <span className="text-8xl font-serif font-bold text-white">ORGANIC</span>
             <span className="w-4 h-4 rounded-full bg-accent"></span>
             <span className="text-8xl font-serif font-bold text-transparent stroke-text">PRECISION</span>
             <span className="w-4 h-4 rounded-full bg-accent"></span>
          </div>
        ))}
      </motion.div>

      {/* Floating "Read More" Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
         <Link href="/about" className="pointer-events-auto bg-accent hover:bg-white text-primary-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-110 shadow-xl">
           Our Story <ArrowRight size={20} />
         </Link>
      </div>
    </section>
  );
}

// 3. HOME SERVICES (Teaser Grid)
function HomeServices() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-xl">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-primary-dark">
            <MaskedText>Integrated Farming.</MaskedText>
          </h2>
        </div>
        <Link href="/services" className="hidden md:flex items-center gap-2 text-primary-dark font-medium hover:text-accent transition-colors pb-2 border-b border-primary-dark hover:border-accent">
          View Full Process <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Card 1 */}
         <ServiceCard 
           title="Greenhouse" 
           desc="Climate-controlled environments for year-round Bell Pepper production."
           link="/services"
           delay={0}
         />
         {/* Card 2 */}
         <ServiceCard 
           title="Processing" 
           desc="Industrial-grade Palm Kernel Oil extraction and byproduct management."
           link="/services"
           delay={0.2}
         />
         {/* Card 3 */}
         <ServiceCard 
           title="Consultancy" 
           desc="Expert advisory for new investors in the Nigerian agricultural sector."
           link="/services"
           delay={0.4}
         />
      </div>
      
      {/* Mobile-only Link */}
      <div className="mt-8 md:hidden">
        <Link href="/services" className="flex items-center gap-2 text-primary-dark font-medium">
          View Full Process <ArrowRight size={18} />
        </Link>
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
      className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all group"
    >
      <div className="w-12 h-12 bg-primary-light/20 rounded-full mb-6 group-hover:bg-accent transition-colors"></div>
      <h3 className="text-2xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
      <Link href={link} className="inline-flex items-center text-sm font-bold text-primary-dark group-hover:text-accent transition-colors">
        LEARN MORE <ArrowRight size={14} className="ml-1" />
      </Link>
    </motion.div>
  )
}


// 4. PARALLAX PRODUCT SLIDER (The "Glimpse")
function HomeProductSlider() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

  return (
    <section ref={targetRef} className="py-24 bg-surface-sand overflow-hidden h-[300vh] relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
           <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-dark">
             Fresh from the Farm.
           </h2>
           <p className="text-gray-600 mt-4 max-w-md">
             Scroll to explore our premium harvest available for wholesale.
           </p>
        </div>

        {/* The Horizontal Moving Strip */}
        <motion.div style={{ x }} className="flex gap-10 px-6 w-max">
           {/* Product 1 */}
           <ProductSlide 
             img="/images/bell-peppers.jpg" 
             title="Bell Peppers" 
             tag="Top Seller"
           />
           {/* Product 2 */}
           <ProductSlide 
             img="/images/palm-kernel.jpg" 
             title="Palm Kernel Oil" 
             tag="Industrial"
           />
           {/* Product 3 */}
           <ProductSlide 
             img="/images/seedlings.jpg" 
             title="Nursery Seedlings" 
             tag="Organic"
           />
           {/* Product 4 */}
           <ProductSlide 
             img="/images/livestock.jpg" 
             title="Livestock" 
             tag="Free Range"
           />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 w-full mt-12">
           <Link href="/products" className="inline-flex items-center gap-2 bg-primary-dark text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors">
             View All Products <ArrowUpRight size={18} />
           </Link>
        </div>
      </div>
    </section>
  )
}

function ProductSlide({ img, title, tag }: { img: string, title: string, tag: string }) {
  return (
    <div className="relative w-[80vw] md:w-[600px] h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden flex-shrink-0 group shadow-2xl">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
      <div className="absolute bottom-10 left-10 text-white">
        <span className="bg-accent text-primary-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
          {tag}
        </span>
        <h3 className="text-4xl font-serif font-bold">{title}</h3>
      </div>
    </div>
  )
}


// 5. HOME CTA
function HomeCTA() {
  return (
    <section className="py-32 px-6 bg-primary-dark text-white text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
          Ready to Order?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Whether you need 50 tons of Palm Kernel or a weekly supply of Bell Peppers, we have the capacity to deliver.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-accent text-primary-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-colors">
            Contact Sales
          </Link>
          <Link href="/products" className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            Browse Price List
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MaskedText } from "@/components/ui/MaskedText";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-light overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <HomeServices /> 
      <HomeProductSlider />
      <HomeCTA />
      <Footer />
      <MobileCTA />
    </main>
  );
}

// 1. MARQUEE
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

// 2. HOME SERVICES
function HomeServices() {
  return (
    <section className="py-32 px-6 bg-primary-dark text-white relative">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <ServiceCard title="Greenhouse" desc="Climate-controlled environments for consistent year-round production." link="/services" delay={0} />
           <ServiceCard title="Processing" desc="Industrial-grade Palm Kernel Oil extraction and byproduct management." link="/services" delay={0.2} />
           <ServiceCard title="Consultancy" desc="Expert advisory for investors entering the Nigerian agricultural sector." link="/services" delay={0.4} />
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

function ServiceCard({ title, desc, link, delay }: any) {
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

// 3. PRODUCT SLIDER (Seamless Marquee - No Gaps)
function HomeProductSlider() {
  return (
    <section className="bg-surface-sand py-24 relative overflow-hidden">
      
      <div className="px-6 max-w-7xl mx-auto mb-12">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-dark">
            Fresh Harvest.
          </h2>
          <p className="text-gray-600 mt-6 text-xl max-w-lg">
            Our premium produce available for bulk purchase in Ogun State.
          </p>
      </div>

      {/* CONTINUOUS SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 w-max">
           {/* We double the array to create a seamless loop effect */}
           <SlidingContent />
           <SlidingContent />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16">
           <Link href="/products" className="bg-primary-dark text-white px-10 py-5 rounded-full font-bold hover:bg-accent transition-colors shadow-xl">
             View Price List
           </Link>
      </div>
    </section>
  )
}

function SlidingContent() {
  return (
    <motion.div 
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      className="flex gap-8 px-4"
    >
      <ProductCard 
        img="/images/pepper-farm-1.jpg" 
        title="Peppers" 
        tag="Best Seller" 
      />
      <ProductCard 
        img="/images/palm-aerial.jpg" 
        title="Palm Kernel" 
        tag="Industrial" 
      />
      <ProductCard 
        img="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=1000&auto=format&fit=crop" 
        title="Vegetables" 
        tag="Organic" 
      />
      <ProductCard 
        img="https://images.unsplash.com/photo-1615477916527-31e9c855a9c9?q=80&w=1000&auto=format&fit=crop" 
        title="Garlic" 
        tag="Spice" 
      />
      <ProductCard 
        img="/images/pepper-farm-2.jpg" 
        title="Nursery" 
        tag="Seedlings" 
      />
    </motion.div>
  )
}

function ProductCard({ img, title, tag }: any) {
  return (
    <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[500px] rounded-[3rem] overflow-hidden flex-shrink-0 group shadow-lg cursor-pointer border border-white/20">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
      <div className="absolute bottom-8 left-8 text-white">
        <span className="bg-accent text-primary-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
          {tag}
        </span>
        <h3 className="text-3xl font-serif font-bold">{title}</h3>
      </div>
    </div>
  )
}

// 4. CTA
function HomeCTA() {
  return (
    <section className="py-24 px-6 bg-white text-center relative overflow-hidden">
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

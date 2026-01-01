"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MaskedText } from "@/components/ui/MaskedText";
import { Leaf, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-light text-primary-dark overflow-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          <h1 className="text-fluid-h1 font-serif font-bold mb-8 text-primary-dark leading-[0.85] md:leading-[0.9]">
            <MaskedText className="block">Cultivating the Future</MaskedText>
            <MaskedText className="block text-primary -mt-1 md:-mt-2" delay={0.2}>of African Agriculture.</MaskedText>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Cliftonville Farms is Ogun State's premier automated greenhouse facility, bridging the gap between traditional farming and modern food security.
          </p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group"
          >
            <img 
              src="/images/seedlings.jpg" 
              alt="Cliftonville Seedlings" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent flex items-end p-10">
              <div className="text-white">
                <p className="font-bold text-2xl">Ogun State Site</p>
                <p className="opacity-80">100 Acres of Operational Land</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side (Updated Content) */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-primary-dark">More Than Just a Farm.</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Cliftonville Farms was established with a singular mission: to solve the food crisis in Africa through precision agriculture. We operate exclusively in Ogun State, utilizing the fertile land to feed the nation.
              </p>
              <p>
                We don't just grow food; we engineer nutrition. Our controlled environments allow us to produce export-grade Peppers, Garlic, and Vegetables all year round, defying the seasons.
              </p>
              <p>
                We also specialize in Palm Kernel Processing, turning raw harvest into high-grade industrial oil and sustainable by-products.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <Stat label="Annual Harvest" value="25M+ Tons" />
              <Stat label="Partner Farms" value="50+" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUES GRID */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
             <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Ethos</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Why We Are Different.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Leaf />} 
              title="Sustainability" 
              desc="We use 90% less water than traditional farming through our closed-loop drip irrigation systems." 
            />
            <ValueCard 
              icon={<Award />} 
              title="Global Quality" 
              desc="Our peppers and garlic match the crispness, size, and shelf-life of international imports." 
            />
            <ValueCard 
              icon={<Users />} 
              title="Community" 
              desc="We train local farmers in Ogun State in modern agronomy, lifting communities out of poverty." 
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Sub-components
function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="border-l-2 border-accent pl-6">
      <h4 className="text-3xl font-bold text-white md:text-primary-dark">{value}</h4>
      <p className="text-gray-400 md:text-gray-500 text-sm uppercase tracking-wide mt-1">{label}</p>
    </div>
  )
}

function ValueCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl"
    >
      <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

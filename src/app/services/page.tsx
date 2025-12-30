"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MaskedText } from "@/components/ui/MaskedText";
import { ArrowRight, Sprout, Tractor, Package, Truck } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface-light text-primary-dark">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-fluid-h1 font-serif font-bold mb-6">
          <MaskedText>Precision</MaskedText> <MaskedText className="text-accent" delay={0.2}>Farming.</MaskedText>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We don't just grow crops; we offer end-to-end agricultural solutions.
        </p>
      </section>

      {/* 2. THE PROCESS (Timeline) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl font-serif font-bold mb-16 text-center">From Seed to Supermarket</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Line (Desktop Only) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

              <ProcessStep 
                number="01" 
                icon={<Sprout size={24} />} 
                title="Nursery" 
                desc="Seeds are nurtured in our controlled nursery units using imported substrates." 
              />
              <ProcessStep 
                number="02" 
                icon={<Tractor size={24} />} 
                title="Cultivation" 
                desc="Transplanted to greenhouses with automated fertigation systems." 
              />
              <ProcessStep 
                number="03" 
                icon={<Package size={24} />} 
                title="Processing" 
                desc="Sorting, cleaning, and packaging in our sterile facility." 
              />
              <ProcessStep 
                number="04" 
                icon={<Truck size={24} />} 
                title="Logistics" 
                desc="Refrigerated transport ensures produce arrives fresh within 24 hours." 
              />
           </div>
        </div>
      </section>

      {/* 3. CONSULTANCY CARD */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary-dark rounded-[3rem] overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 md:p-20 items-center relative z-10">
            <div className="text-white">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">B2B Services</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Want to Build Your Own Greenhouse?</h2>
              <p className="text-gray-300 text-lg mb-8">
                We offer turnkey consultancy for investors looking to enter the agricultural space. From feasibility studies to construction and staff training.
              </p>
              <a href="/contact" className="inline-block bg-white text-primary-dark px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors">
                Book a Consultation
              </a>
            </div>
            {/* You can add another image here if you have one, or keep it text focused */}
            <div className="h-64 md:h-full bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
               <p className="text-white/50 text-center px-4">Image: Consulting/Training Session</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProcessStep({ number, icon, title, desc }: { number: string, icon: any, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
    >
      <div className="w-12 h-12 bg-primary-light/10 text-primary-dark rounded-full flex items-center justify-center mb-4 text-xl font-bold">
        {number}
      </div>
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

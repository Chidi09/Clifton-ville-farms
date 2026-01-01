"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MaskedText } from "@/components/ui/MaskedText";
import { Sprout, Tractor, Package, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface-light text-primary-dark">
      <Navbar />

      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-fluid-h1 font-serif font-bold mb-6">
          <MaskedText>Precision</MaskedText> <MaskedText className="text-accent">Farming.</MaskedText>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From our nursery to our processing mill, every step is optimized for quality.
        </p>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>
              <ProcessStep number="01" icon={<Sprout />} title="Nursery" desc="Seeds are nurtured in controlled units." />
              <ProcessStep number="02" icon={<Tractor />} title="Cultivation" desc="Transplanted to our 100-acre facility." />
              <ProcessStep number="03" icon={<Package />} title="Processing" desc="Oil extraction and sorting." />
              <ProcessStep number="04" icon={<Truck />} title="Logistics" desc="Fresh delivery within the state and beyond." />
           </div>
        </div>
      </section>

      {/* CONSULTANCY */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Services</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-white">Farm Setup & Training</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              We offer consultancy for new farm setups. Get expert advice on irrigation, seed selection, and farm construction.
            </p>
            <button className="bg-white text-primary-dark px-10 py-4 rounded-full font-bold hover:bg-accent transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Cards (Matching Home Page style but deeper) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Updated Description: No "Bell" */}
             <ServiceCard title="Greenhouse" desc="Climate-controlled environments for consistent year-round pepper production." link="/services" delay={0} />
             <ServiceCard title="Processing" desc="Industrial-grade Palm Kernel Oil extraction and byproduct management." link="/services" delay={0.2} />
             <ServiceCard title="Consultancy" desc="Expert advisory for investors entering the Nigerian agricultural sector." link="/services" delay={0.4} />
          </div>
      </section>

      <Footer />
    </main>
  );
}

function ProcessStep({ number, icon, title, desc }: any) {
  return (
    <motion.div whileHover={{ y: -10 }} className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center md:text-left">
      <div className="w-12 h-12 bg-accent/20 text-primary-dark rounded-full flex items-center justify-center mb-4 text-xl font-bold mx-auto md:mx-0">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
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
        className="bg-white text-primary-dark p-10 rounded-[2rem] shadow-2xl hover:shadow-accent/20 transition-all group relative overflow-hidden border border-gray-100"
      >
        <div className="relative z-10">
          <h3 className="text-3xl font-serif font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed h-20">{desc}</p>
        </div>
      </motion.div>
    )
}

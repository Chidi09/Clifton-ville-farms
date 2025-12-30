"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-surface-light text-primary-dark">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-primary-dark">
            Our Harvest.
          </h1>
        </div>
      </section>

      {/* 2. PRODUCT 1: BELL PEPPERS */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
             <span className="text-accent font-bold tracking-widest uppercase">Best Seller</span>
             <h2 className="text-4xl font-serif font-bold mt-2 mb-6">Colored Bell Peppers</h2>
             <p className="text-lg text-gray-600 mb-8">
               Grown in climate-controlled environments for maximum crunch, thick walls, and vibrant color. Available in Red, Yellow, and Green variants.
             </p>

             {/* SPEC TABLE */}
             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
               <Row label="Varieties" value="Red, Yellow, Green" />
               <Row label="Packaging" value="5kg, 10kg Crates" />
               <Row label="Shelf Life" value="14 Days (Refrigerated)" />
               <Row label="Availability" value="Year-Round" />
             </div>

             <a href="/contact" className="inline-block bg-primary-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-colors">
               Request Wholesale Price <ArrowUpRight size={18} />
             </a>
          </div>
          <div className="order-1 lg:order-2 h-[500px] bg-gray-200 rounded-[2.5rem] overflow-hidden relative">
             <img src="/images/bell-peppers.jpg" className="w-full h-full object-cover" alt="Bell Peppers" />
          </div>
        </div>
      </section>

       {/* 3. PRODUCT 2: PALM KERNEL */}
       <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="h-[500px] bg-gray-200 rounded-[2.5rem] overflow-hidden relative">
             <img src="/images/palm-kernel.jpg" className="w-full h-full object-cover" alt="Palm Kernel" />
          </div>
          <div>
             <span className="text-accent font-bold tracking-widest uppercase">Industrial</span>
             <h2 className="text-4xl font-serif font-bold mt-2 mb-6">Palm Kernel Oil (PKO)</h2>
             <p className="text-lg text-gray-600 mb-8">
               High-quality extracted oil for industrial use (soap making, cosmetics) and palm kernel cake for animal feed.
             </p>

             {/* SPEC TABLE */}
             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
               <Row label="Grade" value="Industrial / Edible" />
               <Row label="FFA Content" value="< 5%" />
               <Row label="Packaging" value="25L, 200L Drums" />
               <Row label="By-Product" value="Palm Kernel Cake (PKC)" />
             </div>

             <a href="/contact" className="inline-block bg-primary-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-colors">
               Request Quote <ArrowUpRight size={18} />
             </a>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT 3: LIVESTOCK */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
             <span className="text-accent font-bold tracking-widest uppercase">Premium</span>
             <h2 className="text-4xl font-serif font-bold mt-2 mb-6">Livestock</h2>
             <p className="text-lg text-gray-600 mb-8">
               Healthy, well-raised livestock from our farms. Raised with care and following best practices for animal welfare.
             </p>

             {/* SPEC TABLE */}
             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
               <Row label="Types" value="Poultry, Goats, Cattle" />
               <Row label="Certification" value="Organic Standards" />
               <Row label="Availability" value="Seasonal" />
               <Row label="Delivery" value="Live or Processed" />
             </div>

             <a href="/contact" className="inline-block bg-primary-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-colors">
               Request Information <ArrowUpRight size={18} />
             </a>
          </div>
          <div className="order-1 lg:order-2 h-[500px] bg-gray-200 rounded-[2.5rem] overflow-hidden relative">
             <img src="/images/livestock.jpg" className="w-full h-full object-cover" alt="Livestock" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Row({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-primary-dark font-bold">{value}</span>
    </div>
  )
}

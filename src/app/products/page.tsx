"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-surface-light text-primary-dark">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent font-bold tracking-widest uppercase">Our Harvest</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 mt-4">
            Fresh & Local.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Sourced directly from our 100-acre facility in Ogun State. No middlemen, just fresh produce.
          </p>
        </div>
      </section>

      {/* PRODUCT 1 */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <h2 className="text-4xl font-serif font-bold mb-6">Bell Peppers</h2>
             <p className="text-lg text-gray-600 mb-8">
               Premium quality Red, Yellow, and Green peppers grown in our greenhouses. Ideal for supermarkets, hotels, and restaurants.
             </p>

             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
               <Row label="Type" value="Hybrid Bell" />
               <Row label="Colors" value="Red, Yellow, Green" />
               <Row label="Packaging" value="5kg / 10kg Crates" />
               <Row label="Availability" value="Daily Harvest" />
             </div>

             <a href="/contact" className="inline-block bg-primary-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-colors">
               Check Availability <ArrowUpRight size={18} />
             </a>
          </div>
          <div className="order-1 lg:order-2 h-[500px] rounded-[2.5rem] overflow-hidden">
             <img src="/images/bell-peppers.jpg" className="w-full h-full object-cover" alt="Bell Peppers" />
          </div>
        </div>
      </section>

       {/* PRODUCT 2 */}
       <section className="py-20 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="h-[500px] rounded-[2.5rem] overflow-hidden bg-gray-100 relative">
              <img src="/images/palm-kernel.jpg" className="w-full h-full object-cover" alt="Palm Kernel" />
          </div>
          <div>
             <h2 className="text-4xl font-serif font-bold mb-6">Palm Kernel Oil (PKO)</h2>
             <p className="text-lg text-gray-600 mb-8">
               Pure extracted oil for industrial applications. We also supply Palm Kernel Cake (PKC) for livestock feed formulation.
             </p>

             <div className="bg-surface-light rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
               <Row label="Product" value="Crude PKO" />
               <Row label="By-Product" value="PKC (Cake)" />
               <Row label="Supply" value="Bulk / Drums" />
               <Row label="Origin" value="Cliftonville Mill" />
             </div>

             <a href="/contact" className="inline-block bg-primary-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-colors">
               Request Quote <ArrowUpRight size={18} />
             </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Row({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between py-3 border-b border-gray-200 last:border-0">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-primary-dark font-bold">{value}</span>
    </div>
  )
}

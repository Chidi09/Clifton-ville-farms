"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

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
            Sourced directly from our facility in Ogun State. No middlemen, just fresh produce.
          </p>
        </div>
      </section>

      {/* 1. PEPPERS */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-start">
             <h2 className="text-5xl font-serif font-bold">Peppers</h2>
          </div>
          <div className="order-1 lg:order-2 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
             <img src="/images/pepper-farm-1.jpg" className="w-full h-full object-cover" alt="Peppers" />
          </div>
        </div>
      </section>

       {/* 2. PALM KERNEL OIL */}
       <section className="py-20 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="h-[500px] rounded-[2.5rem] overflow-hidden bg-gray-100 relative shadow-2xl">
              <img src="/images/palm-aerial.jpg" className="w-full h-full object-cover" alt="Palm Kernel" />
          </div>
          <div className="flex flex-col justify-center items-start">
             <h2 className="text-5xl font-serif font-bold mb-6">Palm Kernel Oil (PKO)</h2>
             <p className="text-lg text-gray-600">
               Pure extracted oil for industrial applications and feed formulation.
             </p>
          </div>
        </div>
      </section>

      {/* 3. VEGETABLES & GARLIC */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-start">
             <h2 className="text-5xl font-serif font-bold mb-6">Vegetables & Garlic</h2>
             <p className="text-lg text-gray-600">
               Organic vegetables and high-quality garlic grown in nutrient-rich soil.
             </p>
          </div>
          <div className="order-1 lg:order-2 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
             <img src="/images/garlic closeup image.jpg" className="w-full h-full object-cover" alt="Garlic" />
          </div>
        </div>
      </section>

       {/* 4. NURSERY SEEDLINGS */}
       <section className="py-20 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="h-[500px] rounded-[2.5rem] overflow-hidden bg-gray-100 relative shadow-2xl">
              <img src="/images/pepper-farm-2.jpg" className="w-full h-full object-cover" alt="Seedlings" />
          </div>
          <div className="flex flex-col justify-center items-start">
             <h2 className="text-5xl font-serif font-bold mb-6">Nursery Seedlings</h2>
             <p className="text-lg text-gray-600">
               Disease-resistant, high-yield seedlings raised in our controlled nursery environment.
             </p>
          </div>
        </div>
      </section>

      {/* CONTACT SALES BUTTON */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <Link href="/contact" className="bg-primary-dark text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-accent transition-all shadow-xl inline-block">
            Contact Sales
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

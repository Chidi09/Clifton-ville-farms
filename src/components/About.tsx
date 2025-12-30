"use client";
import { motion } from "framer-motion";
import { Target, Heart, TrendingUp, Sun } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary text-white relative overflow-hidden">
      
      {/* Background Pattern (Subtle leaves/organic shape) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Who We Are
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold">
            Cultivating Excellence <br /> Since Inception
          </h2>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto">
            Dominion Integrated Farms was established to solve food crises in Africa. Today, as Cliftonville Farms, we continue that legacy with modernized sustainable practices.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-b border-white/10 py-10">
          {[
            { label: "Tonnes Harvested", value: "25M+", icon: <TrendingUp className="text-accent" /> },
            { label: "Acres of Greenhouses", value: "150+", icon: <Sun className="text-accent" /> },
            { label: "Happy Clients", value: "2,000+", icon: <Heart className="text-accent" /> },
            { label: "Expert Farmers", value: "50+", icon: <Target className="text-accent" /> },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3 opacity-80">{stat.icon}</div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission Section with Real Farm Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
          
          {/* The Real Farm Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src="/images/seedlings.jpg" 
              alt="Cliftonville Seedlings" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Badge on the image */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
              <p className="text-white font-bold">100% Organic Seedlings</p>
              <p className="text-accent text-sm">Abeokuta Farm Site</p>
            </div>
          </motion.div>

          {/* Vision/Mission Text (Stacked on Right) */}
          <div className="space-y-8">
            {/* Vision Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Sun className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To meet the nutritional demands of the vast human population reasonably through the utilization of modern agricultural technology for sustainable production.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl"
            >
               <div className="w-14 h-14 bg-green-400/20 rounded-full flex items-center justify-center mb-6">
                <Target className="text-green-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To establish and operate the largest greenhouse farming and livestock production, enhanced through the employment of professionals in the field of agriculture.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

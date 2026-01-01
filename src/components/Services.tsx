"use client";
import { motion } from "framer-motion";
import { Sprout, Tractor, Droplets, ArrowRight, Sun } from "lucide-react";
import { MaskedText } from "./ui/MaskedText";

const services = [
  {
    title: "Pepper Farming",
    description: "Specialized greenhouse cultivation of premium Red, Yellow, and Green Peppers tailored for the Nigerian market.",
    icon: <Sprout strokeWidth={1.5} size={32} />,
    color: "text-green-600",
    bg: "bg-green-100/50",
  },
  {
    title: "Vegetable Cultivation",
    description: "Sustainable farming of diverse organic vegetables, ensuring fresh, nutrient-rich produce from soil to table.",
    icon: <Droplets strokeWidth={1.5} size={32} />,
    color: "text-teal-600",
    bg: "bg-teal-100/50",
  },
  {
    title: "Palm Kernel Processing",
    description: "Advanced processing of palm kernel into high-quality oil and by-products for industrial and domestic use.",
    icon: <Tractor strokeWidth={1.5} size={32} />,
    color: "text-orange-600",
    bg: "bg-orange-100/50",
  },
];

// 1. The Container Variant (The Conductor)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This creates the "wave" effect (0.2s delay between each card)
    },
  },
};

// 2. The Child Variant (The Dancers)
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start lower
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const, // Physics-based movement (bouncy but subtle)
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  },
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      
      {/* Background Decor: A giant subtle letter 'C' or organic shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <Sun size={16} className="text-accent animate-spin-slow" />
            <span className="text-accent font-semibold tracking-[0.2em] uppercase text-xs">
              Our Expertise
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary-dark mb-6 leading-tight">
            <MaskedText>Modern Farming.</MaskedText> 
            <MaskedText delay={0.2} className="text-primary-light">Sustainable Future.</MaskedText>
          </h2>
          
          <div className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
            <MaskedText delay={0.4}>
              Combining traditional agricultural wisdom with modern technology to deliver the finest produce in Nigeria.
            </MaskedText>
          </div>
        </div>

        {/* The Container - Changes behavior based on screen size */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            /* DESKTOP (md+): Grid layout */
            md:grid md:grid-cols-3 md:gap-8 lg:gap-12
            
            /* MOBILE: Horizontal Scroll (Snap) */
            flex gap-6 overflow-x-auto snap-x snap-mandatory 
            pb-12 -mx-4 px-4 scrollbar-hide
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Lift on hover (desktop only)
              className="
                /* DESKTOP: Normal width */
                md:w-auto 
                
                /* MOBILE: Fixed width card that snaps to center */
                min-w-[85vw] snap-center
                group relative
              "
            >
              {/* The Card */}
              <div className="h-full bg-white/60 backdrop-blur-md border border-white/40 p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                
                {/* Hover Gradient Glow (Only appears on hover) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Mobile Hint: Show a tiny arrow on the first card only to suggest swiping */}
                {index === 0 && (
                  <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 opacity-20 animate-pulse">
                    <ArrowRight size={24} />
                  </div>
                )}
                
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.bg} group-hover:scale-110 transition-transform duration-500 ease-out relative z-10`}>
                  <div className={`${service.color} group-hover:rotate-12 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary-dark mb-4 font-serif relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed font-light relative z-10">
                  {service.description}
                </p>

                {/* Animated Link */}
                <a href="#" className="inline-flex items-center text-primary-dark font-medium group/link relative z-10">
                  <span className="relative">
                    Learn More
                    {/* The Underline Animation */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-accent group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300 text-accent" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Get scroll position
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // 2. Define "Bottom Zone" (last 800px of the site where Footer/CTA lives)
      const isNearBottom = scrollY + windowHeight >= docHeight - 800;
      
      // 3. Logic: Show if scrolled past Hero (600px) BUT NOT near bottom
      if (scrollY > 600 && !isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
          <div className="bg-primary-dark/95 backdrop-blur-xl text-white p-2 pl-6 rounded-full shadow-2xl border border-white/10 flex items-center justify-between">
            <span className="font-medium text-sm">Need fresh produce?</span>
            <div className="flex gap-2">
              <a 
                href="tel:+2348001234567"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Phone size={18} />
              </a>
              <a 
                href="/contact"
                className="px-5 h-10 bg-accent text-primary-dark rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
              >
                Order
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show this button after scrolling past the Hero section
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
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
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden" // MD:HIDDEN ensures it's only for mobile
        >
          <div className="bg-primary-dark/90 backdrop-blur-lg text-white p-2 rounded-full shadow-2xl border border-white/10 flex items-center justify-between pl-6">
            <span className="font-medium text-sm">Need fresh produce?</span>
            <div className="flex gap-2">
              <a 
                href="tel:+2348001234567"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Phone size={18} />
              </a>
              <a 
                href="#contact"
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

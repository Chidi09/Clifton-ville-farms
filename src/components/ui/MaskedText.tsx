"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MaskedTextProps {
  children: React.ReactNode; // Using ReactNode to allow string or elements
  className?: string;
  delay?: number;
}

export function MaskedText({ children, className = "", delay = 0 }: MaskedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Ensure children is a string before splitting
  const text = typeof children === "string" ? children : "";

  // If children is not a string, just render it wrapped (fallback)
  if (!text) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Split text into words for the staggered effect
  const words = text.split(" ");

  return (
    <div ref={ref} className={`overflow-hidden flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, index) => (
        <div key={index} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1], // Custom bezier for "luxury" feel
              delay: delay + index * 0.03, // Stagger effect
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

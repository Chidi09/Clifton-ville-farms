"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sprout } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get current page

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // REAL ROUTES now, not anchors
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper to check active state
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || pathname !== "/" // Always solid background on inner pages
          ? "bg-primary-dark/95 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Logo Image */}
            <img 
              src="/images/logo.png" 
              alt="Cliftonville Farms" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                // Hide image and show icon fallback
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Fallback Icon (shown if logo fails to load) */}
            <div className="bg-primary p-2 rounded-full text-white group-hover:bg-accent transition-colors hidden group-[.logo-fallback]:flex">
              <Sprout size={24} /> 
            </div>
            <span className={`font-serif text-2xl font-bold tracking-tight ${pathname === "/" ? 'text-primary-dark' : 'text-white'}`}>
              Cliftonville<span className="text-accent">Farms</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative hover:text-accent ${
                  isActive(link.href) ? "text-accent" : pathname === "/" ? "text-primary-dark" : "text-white/90"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={pathname === "/" ? "text-primary-dark hover:text-accent transition-colors" : "text-white hover:text-accent transition-colors"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${pathname === "/" ? "bg-white border-t border-gray-100" : "bg-primary-dark border-t border-white/10"} overflow-hidden`}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-medium ${pathname === "/" ? "text-gray-700 hover:bg-gray-50" : "text-white/90 hover:bg-white/10"} hover:text-accent rounded-md`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* DESKTOP & MOBILE WRAPPER */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-7xl bg-primary-dark/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
               <img src="/images/logo.png" alt="Cliftonville" className="h-full w-full object-contain" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight">
              Cliftonville
            </span>
          </Link>

          {/* Desktop Links (Always Visible White Text) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative hover:text-accent ${
                  isActive(link.href) ? "text-accent" : "text-white"
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-accent transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 bg-primary-dark/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 border-b border-white/10 ${
                    isActive(link.href) ? "text-accent" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

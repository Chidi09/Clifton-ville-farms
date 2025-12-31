import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Changed grid to 3 columns since we removed one */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/images/logo.png" alt="Cliftonville" className="h-full w-full object-contain mix-blend-screen" />
               </div>
               <span className="font-serif text-2xl font-bold">Cliftonville</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nigeria's trusted source for fresh peppers, livestock, and palm kernel processing. Committed to quality and sustainability.
            </p>
            {/* Socials Placeholder */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                 <Instagram size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Our Products</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-accent" size={18} />
                <span>Itori, Ewekoro LGA<br/>Abeokuta, Ogun State</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent" size={18} />
                <span>+234 812 593 5055</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent" size={18} />
                <span>info@cliftonvillefarms.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Cliftonville Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <Sprout className="text-accent" size={32} />
               <span className="font-serif text-2xl font-bold">Cliftonville</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nigeria's trusted source for fresh bell peppers, livestock, and palm kernel processing. Committed to quality and sustainability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
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

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Products</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Bell Peppers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Palm Kernel Oil</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Livestock</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Vegetables</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 text-accent" size={18} />
                <span>Itori, Ewekoro LGA<br/>Abeokuta, Ogun State<br/>Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent" size={18} />
                <div className="flex flex-col">
                  <span>+234 8125935055</span>
                  <span className="text-xs">+447846324245</span>
                </div>
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
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

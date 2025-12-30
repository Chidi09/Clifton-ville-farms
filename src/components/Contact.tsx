"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { MaskedText } from "./ui/MaskedText";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary-dark relative overflow-hidden">
      
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Text */}
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <MaskedText>Let's Grow</MaskedText> 
              <br />
              <MaskedText className="text-accent" delay={0.2}>Together.</MaskedText>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              Interested in bulk purchase or partnership? 
              Visit our farm in Lekki or send us a message directly.
            </p>

            <div className="space-y-8">
              <ContactItem icon={<MapPin size={20} />} title="Visit Us" text="Lekki-Epe Expressway, Lagos State" />
              <ContactItem icon={<Mail size={20} />} title="Email" text="sales@cliftonvillefarms.com" />
              <ContactItem icon={<Phone size={20} />} title="Call" text="+234 800 123 4567" />
            </div>
          </div>

          {/* Right: The Glass Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="First Name" placeholder="Jane" />
                <InputGroup label="Last Name" placeholder="Doe" />
              </div>
              <InputGroup label="Email Address" placeholder="jane@company.com" type="email" />
              <InputGroup label="Interest" placeholder="Select an option" />
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button type="button" className="w-full py-5 bg-accent text-primary-dark rounded-2xl font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 mt-4 group">
                Send Message 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white text-lg">{title}</h4>
        <p className="text-gray-400 group-hover:text-white transition-colors">{text}</p>
      </div>
    </div>
  )
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300 ml-1">{label}</label>
      <input 
        type={type} 
        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
        placeholder={placeholder} 
      />
    </div>
  )
}

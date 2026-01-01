"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { MaskedText } from "./ui/MaskedText";

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Peppers (Wholesale)", // Default value
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", interest: "Peppers (Wholesale)", message: "" }); // Reset
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-primary-dark relative overflow-hidden">
      
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <MaskedText>Let's Grow</MaskedText> 
              <br />
              <MaskedText className="text-accent" delay={0.2}>Together.</MaskedText>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              Interested in bulk purchase or partnership? 
              Visit our farm in Ogun State or send us a message directly.
            </p>

            <div className="space-y-8">
              <ContactItem icon={<MapPin size={20} />} title="Visit Us" text="Itori, Ewekoro LGA, Ogun State" />
              <ContactItem icon={<Mail size={20} />} title="Email" text="info@cliftonvillefarms.com" />
              <ContactItem icon={<Phone size={20} />} title="Call" text="+234 812 593 5055" />
            </div>
          </div>

          {/* Right: The Functional Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem]"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 text-white">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for contacting Cliftonville. We will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-accent font-bold hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                  <input 
                    id="name" required value={formData.name} onChange={handleChange}
                    type="text" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Jane Doe" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Phone Number</label>
                    <input 
                      id="phone" required value={formData.phone} onChange={handleChange}
                      type="tel" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="+234..." 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                    <input 
                      id="email" required type="email" value={formData.email} onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="jane@company.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Interest</label>
                  <select 
                    id="interest" value={formData.interest} onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all [&>option]:bg-primary-dark"
                  >
                    <option>Peppers (Wholesale)</option>
                    <option>Palm Kernel Oil</option>
                    <option>Seedlings</option>
                    <option>Vegetables & Garlic</option>
                    <option>Partnership/Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                  <textarea 
                    id="message" required rows={4} value={formData.message} onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button 
                  disabled={status === "loading"}
                  type="submit" 
                  className="w-full py-5 bg-accent text-primary-dark rounded-2xl font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 mt-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>Sending... <Loader2 className="animate-spin" /></>
                  ) : (
                    <>Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
                
                {status === "error" && (
                  <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for contact items
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

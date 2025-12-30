import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductShowcase from "@/components/ProductShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-light">
      <Navbar />
      <Hero />
      <Services />
      <ProductShowcase />
      <About />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary-dark">
      <Navbar />
      
      {/* Add a spacer so content isn't hidden behind fixed navbar */}
      <div className="pt-32 pb-20">
        <About />
      </div>
      
      <Footer />
    </main>
  );
}

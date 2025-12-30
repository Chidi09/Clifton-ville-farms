import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface-light">
      <Navbar />
      <div className="pt-24">
        <Services />
      </div>
      <Footer />
    </main>
  );
}

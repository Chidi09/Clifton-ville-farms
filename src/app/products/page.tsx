import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-surface-light">
      <Navbar />
      <div className="pt-24">
        <ProductShowcase />
      </div>
      <Footer />
    </main>
  );
}

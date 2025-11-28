import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Features />
        <Testimonials />
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}

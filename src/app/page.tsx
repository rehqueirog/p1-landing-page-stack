import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Features />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
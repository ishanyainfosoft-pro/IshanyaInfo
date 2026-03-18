import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import SlideShowSection from "@/components/SlideShowSection";
import MESSection from "@/components/MESSection";
import ERPInfographicSection from "@/components/ERPInfographicSection";
import BillingSoftwareSection from "@/components/BillingSoftwareSection";
import ECommerceSection from "@/components/ECommerceSection";
import FlagshipSection from "@/components/FlagshipSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setModalOpen(true);
    }, 120000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif", background: "linear-gradient(to bottom, #c8ecec 0%, #f0f0f0 18%, #fde0c0 35%, #f0f0f0 50%, #c8ecec 65%, #f0f0f0 78%, #f9d0a0 88%, #c8ecec 94%, #d8d8d8 100%)" }}>
      <Navbar onGetStarted={() => setModalOpen(true)} />

      {/* Hero — always visible, no reveal */}
      <HeroSection />

      <ScrollReveal direction="up">
        <SlideShowSection />
      </ScrollReveal>

      <ERPInfographicSection />

      <div style={{ height: 80 }} />

      <ScrollReveal direction="up">
        <MESSection />
      </ScrollReveal>

      <div style={{ height: 80 }} />

      <ScrollReveal direction="up">
        <ECommerceSection />
      </ScrollReveal>

      <div style={{ height: 80 }} />

      <ScrollReveal direction="up">
        <BillingSoftwareSection />
      </ScrollReveal>

      <div style={{ height: 80 }} />

      <ScrollReveal direction="up">
        <FlagshipSection />
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <ClientsSection />
      </ScrollReveal>

      <TestimonialsSection />

      <ScrollReveal direction="up">
        <FAQSection onOpenModal={() => setModalOpen(true)} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <LeadershipSection />
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <ContactSection />
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <Footer />
      </ScrollReveal>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

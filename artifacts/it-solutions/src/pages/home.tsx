import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import SlideShowSection from "@/components/SlideShowSection";
import MESSection from "@/components/MESSection";
import CoreOfferingSection from "@/components/CoreOfferingSection";
import BillingSoftwareSection from "@/components/BillingSoftwareSection";
import ECommerceSection from "@/components/ECommerceSection";
import FlagshipSection from "@/components/FlagshipSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setModalOpen(true);
    }, 55000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif", background: "linear-gradient(to bottom, #c8ecec 0%, #f0f0f0 18%, #fde0c0 35%, #f0f0f0 50%, #c8ecec 65%, #f0f0f0 78%, #f9d0a0 88%, #c8ecec 94%, #d8d8d8 100%)" }}>
      <Navbar onGetStarted={() => setModalOpen(true)} />
      <HeroSection />
      <SlideShowSection />
      <MESSection />
      <CoreOfferingSection />
      <BillingSoftwareSection />
      <ECommerceSection />
      <FlagshipSection />
      <ClientsSection />
      <FAQSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

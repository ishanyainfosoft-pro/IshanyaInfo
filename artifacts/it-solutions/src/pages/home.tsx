import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import SlideShowSection from "@/components/SlideShowSection";
import MESSection from "@/components/MESSection";
import BillingSoftwareSection from "@/components/BillingSoftwareSection";
import FlagshipSection from "@/components/FlagshipSection";
import MoreOfferingsSection from "@/components/MoreOfferingsSection";
import ClientsSection from "@/components/ClientsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif", background: "linear-gradient(to bottom, #e8f7f7 0%, #ffffff 18%, #fff4e8 35%, #ffffff 50%, #e8f7f7 65%, #ffffff 78%, #fce8d0 88%, #e8f7f7 94%, #f0f0f0 100%)" }}>
      <Navbar onGetStarted={() => setModalOpen(true)} />
      <HeroSection />
      <LeadershipSection />
      <SlideShowSection />
      <MESSection />
      <BillingSoftwareSection />
      <FlagshipSection />
      <MoreOfferingsSection />
      <ClientsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

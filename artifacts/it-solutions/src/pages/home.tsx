import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SlideShowSection from "@/components/SlideShowSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import CoreOfferingSection from "@/components/CoreOfferingSection";
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
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
      <Navbar onGetStarted={() => setModalOpen(true)} />
      <HeroSection />
      <SlideShowSection />
      <AboutSection />
      <LeadershipSection />
      <CoreOfferingSection />
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

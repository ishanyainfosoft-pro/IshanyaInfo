import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import CoreOfferingSection from "@/components/CoreOfferingSection";
import FlagshipSection from "@/components/FlagshipSection";
import MoreOfferingsSection from "@/components/MoreOfferingsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
      <Navbar onGetStarted={() => setModalOpen(true)} />
      <HeroSection onGetStarted={() => setModalOpen(true)} />
      <AboutSection />
      <LeadershipSection />
      <CoreOfferingSection />
      <FlagshipSection />
      <MoreOfferingsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

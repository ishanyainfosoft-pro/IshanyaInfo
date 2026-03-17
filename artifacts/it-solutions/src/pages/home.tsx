import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MESSection from "@/components/MESSection";
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
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif", background: "linear-gradient(to bottom, #002e2e 0%, #030303 15%, #280818 22%, #C1277A 38%, #fce8d0 50%, #ffffff 62%, #fce8d0 72%, #d9f2f2 82%, #030303 93%, #000000 100%)" }}>
      <Navbar onGetStarted={() => setModalOpen(true)} />
      <HeroSection />
      <AboutSection />
      <MESSection />
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

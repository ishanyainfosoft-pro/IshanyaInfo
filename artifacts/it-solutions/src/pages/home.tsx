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
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif", background: "linear-gradient(to bottom, #002e2e 0%, #030303 12%, #020202 22%, #001515 28%, #009999 36%, #280818 42%, #C1277A 48%, #3d1e00 53%, #F7941D 59%, #fce8d0 64%, #ffffff 72%, #fce8d0 80%, #d9f2f2 87%, #030303 93%, #000000 100%)" }}>
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

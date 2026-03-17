import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
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

const LIGHT_GRADIENT = "linear-gradient(to bottom, #c8ecec 0%, #f0f0f0 18%, #fde0c0 35%, #f0f0f0 50%, #c8ecec 65%, #f0f0f0 78%, #f9d0a0 88%, #c8ecec 94%, #d8d8d8 100%)";
const DARK_GRADIENT  = "linear-gradient(to bottom, #0a1a2e 0%, #0f2540 15%, #1a1a2e 30%, #0f2010 48%, #0a1a2e 62%, #1a0a20 76%, #1a1510 88%, #0a1a2e 94%, #050d18 100%)";

function HomeInner() {
  const { isDark } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setModalOpen(true);
    }, 55000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={isDark ? "dark-mode" : ""}
      style={{
        fontFamily: "'Inter', 'Space Grotesk', sans-serif",
        background: isDark ? DARK_GRADIENT : LIGHT_GRADIENT,
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Navbar onGetStarted={() => setModalOpen(true)} />
      <HeroSection />
      <LeadershipSection />
      <SlideShowSection />
      <MESSection />
      <CoreOfferingSection />
      <BillingSoftwareSection />
      <ECommerceSection />
      <FlagshipSection />
      <ClientsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeInner />
    </ThemeProvider>
  );
}

import ERPPricingSection from "@/components/ERPPricingSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif", background: "#E7DCCB", minHeight: "100vh" }}>
      <Navbar onGetStarted={() => setModalOpen(true)} />
      <div style={{ paddingTop: "80px" }}>
        <ERPPricingSection />
      </div>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

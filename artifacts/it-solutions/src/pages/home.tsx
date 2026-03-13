import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import CoreOfferingSection from "@/components/CoreOfferingSection";
import FlagshipSection from "@/components/FlagshipSection";
import MoreOfferingsSection from "@/components/MoreOfferingsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full" style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <CoreOfferingSection />
      <FlagshipSection />
      <MoreOfferingsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

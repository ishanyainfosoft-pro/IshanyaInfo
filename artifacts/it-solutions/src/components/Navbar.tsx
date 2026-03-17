import { useState, useEffect } from "react";
import logoImg from "@assets/WhatsApp_Image_2026-03-09_at_4.33.45_PM_1773388136859.jpeg";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const BG = { beige: "#E7DCCB", cream: "#F3EBDD", accent: "#D9C4A5" };

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetStarted = () => {
    setMenuOpen(false);
    onGetStarted();
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? `${BG.cream}F5` : "transparent",
        boxShadow: scrolled ? `0 2px 20px rgba(209,196,165,0.5)` : "none",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${BG.accent}` : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                overflow: "hidden",
                background: BRAND.white,
                flexShrink: 0,
                boxShadow: `0 0 0 2.5px ${BRAND.orange}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logoImg}
                alt="Ishanya Infosoft logo"
                style={{
                  width: "170%",
                  height: "170%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  flexShrink: 0,
                }}
              />
            </div>

            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "0",
                color: scrolled ? BRAND.teal : BRAND.white,
                transition: "color 0.3s",
              }}
            >
              Ishanya Infosoft
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {[
              { label: "About Us", id: "about" },
              { label: "Services", id: "core-offering" },
              { label: "Verticals", id: "more-offerings" },
              { label: "Clients", id: "clients" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium transition-all duration-300 hover:opacity-70"
                style={{
                  color: scrolled ? BRAND.teal : "rgba(255,255,255,0.88)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleGetStarted}
              className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${BRAND.orange}, #e8820e)`,
                boxShadow: "0 4px 15px rgba(247,148,29,0.35)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: scrolled ? BRAND.teal : BRAND.white,
                  transform:
                    i === 0 && menuOpen ? "rotate(45deg) translate(5px,5px)"
                    : i === 2 && menuOpen ? "rotate(-45deg) translate(5px,-5px)"
                    : "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 py-4 flex flex-col gap-4"
          style={{
            background: BG.cream,
            borderTop: `1px solid ${BG.accent}`,
          }}
        >
          {[
            { label: "About Us", id: "about" },
            { label: "Services", id: "core-offering" },
            { label: "Verticals", id: "more-offerings" },
            { label: "Clients", id: "clients" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-left transition-opacity hover:opacity-70"
              style={{ color: BRAND.teal, fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleGetStarted}
            className="py-2.5 rounded-xl text-sm font-semibold text-white text-center transition-all hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${BRAND.orange}, #e8820e)`,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}

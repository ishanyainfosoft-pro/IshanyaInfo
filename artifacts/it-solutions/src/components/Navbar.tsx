import { useState, useEffect } from "react";
import logoImg from "@assets/WhatsApp_Image_2026-03-09_at_4.33.45_PM_1773388136859.jpeg";

// Brand colors
const BRAND = {
  teal: "#009999",
  orange: "#F7941D",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

export default function Navbar() {
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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm flex-shrink-0">
              <img src={logoImg} alt="Ishanya Infosoft Logo" className="w-full h-full object-cover" />
            </div>
            <span
              className="text-lg font-bold"
              style={{
                color: scrolled ? "#1a1a1a" : BRAND.white,
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Ishanya Infosoft
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", id: "about" },
              { label: "Solutions", id: "core-offering" },
              { label: "Products", id: "more-offerings" },
              { label: "Clients", id: "clients" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: scrolled ? BRAND.gray : "rgba(255,255,255,0.9)" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: BRAND.orange }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-6 h-0.5 transition-all block"
                style={{
                  background: scrolled ? BRAND.gray : BRAND.white,
                  transform:
                    i === 0 && menuOpen
                      ? "rotate(45deg) translate(5px,5px)"
                      : i === 2 && menuOpen
                      ? "rotate(-45deg) translate(5px,-5px)"
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
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {[
            { label: "About", id: "about" },
            { label: "Solutions", id: "core-offering" },
            { label: "Products", id: "more-offerings" },
            { label: "Clients", id: "clients" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-left"
              style={{ color: BRAND.gray }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: BRAND.orange }}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

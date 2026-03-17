import { useState, useEffect } from "react";
import logoImg from "@assets/WhatsApp_Image_2026-03-09_at_4.33.45_PM_1773388136859.jpeg";
import { useTheme } from "@/context/ThemeContext";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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

  const navBg = scrolled
    ? isDark ? "rgba(10,20,40,0.97)" : "rgba(255,255,255,0.97)"
    : "transparent";

  const linkColor = isDark ? "rgba(255,255,255,0.75)" : BRAND.gray;
  const logoTextColor = isDark ? "#ffffff" : "#1a1a1a";
  const mobileBg = isDark ? "#0a1428" : "#ffffff";
  const mobileBorder = isDark ? "#1e2d4a" : "#f0f0f0";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: navBg,
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
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
                style={{ width: "170%", height: "170%", objectFit: "cover", objectPosition: "center center", flexShrink: 0 }}
              />
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "-0.02em", color: logoTextColor }}>
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
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: linkColor }}
              >
                {item.label}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)"}`,
                fontSize: "18px",
              }}
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            <button
              onClick={handleGetStarted}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: BRAND.orange }}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)",
                fontSize: "16px",
              }}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <button className="p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-6 h-0.5 transition-all"
                  style={{
                    background: linkColor,
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4" style={{ background: mobileBg, borderColor: mobileBorder }}>
          {[
            { label: "About Us", id: "about" },
            { label: "Services", id: "core-offering" },
            { label: "Verticals", id: "more-offerings" },
            { label: "Clients", id: "clients" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="text-sm font-medium text-left" style={{ color: linkColor }}>
              {item.label}
            </button>
          ))}
          <button onClick={handleGetStarted} className="py-2 rounded-lg text-sm font-semibold text-white text-center" style={{ background: BRAND.orange }}>
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}

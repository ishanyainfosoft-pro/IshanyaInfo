import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import logoImg from "@assets/Ishanya_Info_Main_Logo_1773864691760.png";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetStarted = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    onGetStarted();
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(32,32,32,0.97)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
            </div>

            <span
              style={{
                fontFamily: "'Bahamas', 'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "32px",
                letterSpacing: "0.01em",
                color: BRAND.orange,
              }}>
              Ishanya Infosoft
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 relative">
            {/* Services with dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-sm font-medium transition-opacity hover:opacity-60 flex items-center gap-1"
                style={{ color: "#ffffff" }}
              >
                Services
                <span style={{ fontSize: "10px" }}>▼</span>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 rounded-lg shadow-lg z-40"
                  style={{
                    background: "rgba(32,32,32,0.98)",
                    border: `1px solid rgba(247,148,29,0.3)`,
                    backdropFilter: "blur(12px)",
                    minWidth: 200,
                  }}
                >
                  {[
                    { label: "Customized ERP", id: "erp-solution" },
                    { label: "Customized MES", id: "mes-offering" },
                    { label: "E-Commerce Shop", id: "ecommerce" },
                    { label: "Bespoke IT Solutions", id: "flagship" },
                    { label: "Billing Software", id: "billing-software" },
                  ].map((item) => (
                    <button
                      key={item.id + item.label}
                      onClick={() => scrollTo(item.id)}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-gray-700 border-b border-gray-700 last:border-b-0"
                      style={{ color: "#ffffff" }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: "Clients", id: "clients" },
              { label: "FAQ", id: "faq" },
              { label: "About Us", id: "leadership" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "#ffffff" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleGetStarted}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: BRAND.orange }}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all"
                style={{
                  background: "#ffffff",
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
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4" style={{ background: "#202020", borderColor: "#3a3a3a" }}>
          {/* Services dropdown for mobile */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-sm font-medium text-left w-full"
              style={{ color: "#ffffff" }}
            >
              Services {dropdownOpen ? "▲" : "▼"}
            </button>
            {dropdownOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {[
                  { label: "Customized ERP", id: "erp-solution" },
                  { label: "Customized MES", id: "mes-offering" },
                  { label: "E-Commerce Shop", id: "ecommerce" },
                  { label: "Bespoke IT Solutions", id: "flagship" },
                  { label: "Billing Software", id: "billing-software" },
                ].map((item) => (
                  <button
                    key={item.id + item.label}
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-left"
                    style={{ color: "#aaaaaa" }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Clients", id: "clients" },
            { label: "FAQ", id: "faq" },
            { label: "About Us", id: "leadership" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="text-sm font-medium text-left" style={{ color: "#ffffff" }}>
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

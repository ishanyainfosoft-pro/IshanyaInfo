import { useState, useEffect } from "react";

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
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)" }}
              >
                II
              </div>
              <span
                className="text-lg font-bold"
                style={{
                  color: scrolled ? "#111827" : "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Ishanya Infosoft
              </span>
            </div>
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
                className="text-sm font-medium transition-colors"
                style={{ color: scrolled ? "#374151" : "rgba(255,255,255,0.9)" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)" }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="w-6 h-0.5 transition-all"
              style={{ background: scrolled ? "#374151" : "#fff", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }}
            />
            <span
              className="w-6 h-0.5 transition-all"
              style={{ background: scrolled ? "#374151" : "#fff", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="w-6 h-0.5 transition-all"
              style={{ background: scrolled ? "#374151" : "#fff", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }}
            />
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
              className="text-sm font-medium text-gray-700 text-left"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)" }}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

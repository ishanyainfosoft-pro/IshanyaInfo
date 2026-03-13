export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}
    >
      {/* Hero background image overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://pdf-text-extractor--aviratk.replit.app/assets/hero-bg-BgaErTfm.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.5) 50%, rgba(15,23,42,0.8) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {["Customer Centric", "Trust", "Reliable Service Support"].map((tag, i) => (
            <span key={i} className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
              {i < 2 && <span className="text-blue-400">•</span>}
            </span>
          ))}
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
        >
          State-of-the-Art{" "}
          <br className="hidden sm:block" />
          <span
            style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            IT System Solutions
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
          style={{ opacity: 0.9 }}
        >
          "We strive to be the most trusted partner for our clients by delivering solutions and services that foster synergy, drive collective growth."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("core-offering")}
            className="px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)",
              boxShadow: "0 4px 20px rgba(26,86,219,0.4)",
            }}
          >
            Explore Solutions
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:bg-white hover:text-gray-900"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/50">Scroll down</span>
        <div
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1"
        >
          <div
            className="w-1 h-2 rounded-full bg-white/60"
            style={{ animation: "bounce 2s infinite" }}
          />
        </div>
      </div>
    </section>
  );
}

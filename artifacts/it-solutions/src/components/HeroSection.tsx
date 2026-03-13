const BRAND = {
  teal: "#009999",
  tealDeep: "#003535",
  orange: "#F7941D",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: BRAND.tealDeep }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://pdf-text-extractor--aviratk.replit.app/assets/hero-bg-BgaErTfm.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Teal gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,53,53,0.85) 0%, rgba(0,100,100,0.4) 50%, rgba(0,30,30,0.9) 100%)",
        }}
      />

      {/* Decorative blobs — brand colors only */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full blur-3xl"
        style={{ background: BRAND.teal, opacity: 0.18 }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl"
        style={{ background: BRAND.orange, opacity: 0.18 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: BRAND.wine, opacity: 0.06 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {["Customer Centric", "Trust", "Reliable Service Support"].map((tag, i) => (
            <span key={i} className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
              {i < 2 && <span style={{ color: BRAND.orange }}>•</span>}
            </span>
          ))}
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.03em",
            color: BRAND.white,
          }}
        >
          State-of-the-Art{" "}
          <br className="hidden sm:block" />
          <span style={{ color: BRAND.orange }}>IT System</span>{" "}
          <span style={{ color: BRAND.teal }}>Solutions</span>
        </h1>

        {/* Quote */}
        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          "We strive to be the most trusted partner for our clients by delivering solutions and services that foster synergy, drive collective growth."
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("core-offering")}
            className="px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90"
            style={{
              background: BRAND.orange,
              boxShadow: "0 4px 24px rgba(247,148,29,0.38)",
            }}
          >
            Explore Solutions
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:bg-white hover:text-gray-800"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: BRAND.white,
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(8px)",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Scroll down</span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center p-1"
          style={{ border: "1px solid rgba(255,255,255,0.18)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: BRAND.orange, animation: "bounce 2s infinite" }}
          />
        </div>
      </div>
    </section>
  );
}

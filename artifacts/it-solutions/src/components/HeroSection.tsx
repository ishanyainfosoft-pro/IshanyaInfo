const BRAND = {
  orange: "#F7941D",
  orangeDark: "#0d0800",
  orangeMid: "#1f1000",
  teal: "#009999",
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
      style={{ background: BRAND.orangeDark }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://pdf-text-extractor--aviratk.replit.app/assets/hero-bg-BgaErTfm.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />

      {/* Orange gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,8,0,0.92) 0%, rgba(247,148,29,0.12) 50%, rgba(13,8,0,0.95) 100%)",
        }}
      />

      {/* Glowing orbs — orange dominant */}
      <div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: BRAND.orange, opacity: 0.15 }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: BRAND.orange, opacity: 0.12 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-3xl"
        style={{ background: BRAND.teal, opacity: 0.06 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {["Customer Centric", "Trust", "Reliable Service Support"].map((tag, i) => (
            <span key={i} className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(247,148,29,0.12)",
                  color: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(247,148,29,0.25)",
                }}
              >
                {tag}
              </span>
              {i < 2 && <span style={{ color: BRAND.orange }}>•</span>}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em", color: BRAND.white }}
        >
          State-of-the-Art{" "}
          <br className="hidden sm:block" />
          <span style={{ color: BRAND.orange }}>IT System</span>{" "}
          <span style={{ color: BRAND.teal }}>Solutions</span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          "We strive to be the most trusted partner for our clients by delivering solutions and services that foster synergy, drive collective growth."
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("core-offering")}
            className="px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: BRAND.orange, boxShadow: "0 6px 28px rgba(247,148,29,0.45)" }}
          >
            Explore Solutions
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:bg-white hover:text-gray-800"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: BRAND.white,
              border: "1px solid rgba(247,148,29,0.3)",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Scroll down</span>
        <div className="w-5 h-8 rounded-full flex items-start justify-center p-1" style={{ border: "1px solid rgba(247,148,29,0.3)" }}>
          <div className="w-1 h-2 rounded-full" style={{ background: BRAND.orange, animation: "bounce 2s infinite" }} />
        </div>
      </div>
    </section>
  );
}

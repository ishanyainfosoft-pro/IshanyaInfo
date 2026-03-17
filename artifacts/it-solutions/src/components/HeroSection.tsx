const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Simple linear gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #009999 0%, #1a0a12 50%, #F7941D 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "120px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ===  Content === */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {["Customer Centric", "Trust", "Reliable Service Support"].map((tag, i) => (
            <span key={i} className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
              {i < 2 && <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em", color: BRAND.white }}
        >
          <span style={{ color: BRAND.orange }}>Customized ERP</span>{" "}
          <span style={{ color: BRAND.teal }}>&amp; MES Solutions</span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.68)" }}
        >
          Our highly customized ERP system offers a comprehensive suite of modules, each equipped with robust features to streamline operations, enhance efficiency, and provide actionable insights.
        </p>

      </div>
    </section>
  );
}

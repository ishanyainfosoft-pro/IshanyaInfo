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
      {/* === Rich multi-colour gradient backdrop === */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 40%, rgba(0,153,153,0.55) 0%, transparent 55%),
            radial-gradient(ellipse 70% 55% at 85% 30%, rgba(247,148,29,0.50) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 50% 85%, rgba(193,39,122,0.40) 0%, transparent 55%),
            linear-gradient(160deg, #030d0d 0%, #08040a 50%, #0d0600 100%)
          `,
        }}
      />

      {/* Background image — very low opacity for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://pdf-text-extractor--aviratk.replit.app/assets/hero-bg-BgaErTfm.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
          mixBlendMode: "luminosity",
        }}
      />

      {/* Noise / grain overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Sharp colour beams (decorative lines) */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `
            linear-gradient(105deg, transparent 30%, rgba(0,153,153,0.06) 30.2%, transparent 30.5%),
            linear-gradient(105deg, transparent 45%, rgba(247,148,29,0.05) 45.2%, transparent 45.5%),
            linear-gradient(105deg, transparent 60%, rgba(193,39,122,0.05) 60.2%, transparent 60.5%)
          `,
        }}
      />

      {/* Bottom blend into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "160px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)",
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

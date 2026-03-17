const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
};

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "78vh" }}>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {["Customer Centric", "Trust", "Reliable Service Support"].map((tag, i) => (
            <span key={i} className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(247,148,29,0.10)",
                  color: BRAND.orange,
                  border: "1px solid rgba(247,148,29,0.25)",
                }}
              >
                {tag}
              </span>
              {i < 2 && <span style={{ color: "rgba(0,0,0,0.2)" }}>•</span>}
            </span>
          ))}
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em", color: "#1a1a1a" }}
        >
          <span style={{ color: BRAND.orange }}>Customized ERP</span>{" "}
          <span style={{ color: BRAND.teal }}>&amp; MES Solutions</span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#555555" }}
        >
          Our highly customized ERP system offers a comprehensive suite of modules, each equipped with robust features to streamline operations, enhance efficiency, and provide actionable insights.
        </p>

      </div>
    </section>
  );
}

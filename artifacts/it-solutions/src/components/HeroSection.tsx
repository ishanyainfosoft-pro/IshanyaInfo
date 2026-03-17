import logoImg from "@assets/WhatsApp_Image_2026-03-09_at_4.33.45_PM_1773388136859.jpeg";

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

        {/* Big centered logo */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              overflow: "hidden",
              background: "#ffffff",
              flexShrink: 0,
              boxShadow: `0 0 0 4px ${BRAND.orange}55, 0 8px 32px rgba(247,148,29,0.18)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoImg}
              alt="Ishanya Infosoft logo"
              style={{
                width: "170%",
                height: "170%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 42px)",
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
            }}
          >
            Ishanya Infosoft
          </span>
        </div>

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
          <span style={{ color: BRAND.orange }}>Customized ERP &amp; MES Solutions</span>
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

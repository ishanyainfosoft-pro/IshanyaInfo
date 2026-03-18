import MESDashboardImg from "@assets/MES_Dashboard_1773855753164.png";
import ScrollReveal from "@/components/ScrollReveal";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
};

const features = [
  "Process Digitalization",
  "Real-Time Production Monitoring",
  "Quality & Customer Interface System",
  "Production Tracking",
  "Multi User + Multi Plant",
  "Barcode / QR Code Integration",
  "Data Traceability",
  "Manufacturing Analytics",
];

const ACCENT = BRAND.teal;

export default function MESSection() {
  return (
    <section id="mes-offering" className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left — text (40%) */}
          <ScrollReveal direction="left" className="w-full" style={{ flex: "2" }}>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: ACCENT }}
            >
              Customized{" "}
              <span style={{ color: ACCENT }}>MES</span>{" "}Solutions
            </h2>
            <p className="mb-8 leading-relaxed text-base sm:text-lg" style={{ color: "#555555" }}>
              Our highly customized MES system helps manufacturers monitor shop-floor operations, improve production visibility, enhance quality management, and streamline manufacturing processes.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    color: "#333333",
                    border: `1px solid rgba(0,153,153,0.25)`,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND.orange }} />
                  {f}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — image (60%) */}
          <ScrollReveal direction="right" delay={1} className="relative pb-8 w-full" style={{ flex: "3" }}>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl opacity-30" style={{ background: ACCENT }} />
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: `3px solid rgba(0,153,153,0.25)` }}>
              <img
                src={MESDashboardImg}
                alt="MES Manufacturing Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl px-6 py-4 shadow-2xl"
              style={{ background: ACCENT, color: "#ffffff" }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>+40%</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.85)" }}>Productivity</div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>🏭</div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
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
    <section id="mes-offering" className="py-10 sm:py-14" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — image */}
          <div className="relative order-1">
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl opacity-40" style={{ background: ACCENT }} />

            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: `3px solid rgba(0,153,153,0.2)` }}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                alt="MES Manufacturing Dashboard"
                className="w-full h-72 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80";
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl px-6 py-4 shadow-2xl"
              style={{ background: ACCENT, color: BRAND.white }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>+40%</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.8)" }}>Productivity</div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>🏭</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-2">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ background: "rgba(0,153,153,0.12)", color: ACCENT }}
            >
              Core Offering
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}
            >
              Customized{" "}
              <span style={{ color: ACCENT }}>MES </span> Solutions
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: BRAND.gray }}>
              Our highly customized MES system helps manufacturers monitor shop-floor operations, improve production visibility, enhance quality management, and streamline manufacturing processes.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:shadow-md"
                  style={{
                    background: BRAND.white,
                    color: "#1a1a1a",
                    border: `1px solid rgba(0,153,153,0.25)`,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                  {f}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

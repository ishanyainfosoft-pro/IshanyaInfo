const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const features = ["Multi User + Multi Plant", "Simple, User Friendly", "Bar Code / QR Code", "Auto Emails / SMS", "WhatsApp Integration", "Tally Integration"];

export default function CoreOfferingSection() {
  return (
    <section
      id="core-offering"
      className="py-14 sm:py-20 relative overflow-hidden"
      style={{ background: "#020d0d" }}
    >
      {/* Simple teal gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #005f5f 0%, #009999 50%, #00cccc 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
              style={{
                background: "rgba(0,153,153,0.25)",
                color: BRAND.white,
                border: "1px solid rgba(0,153,153,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              Core Offering
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: BRAND.white }}
            >
              Customized{" "}
              <span style={{ color: BRAND.orange }}>ERP</span>{" "}Solutions
            </h2>
            <p className="mb-8 leading-relaxed text-base sm:text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Our highly customized ERP system offers a comprehensive suite of modules, each equipped with robust features to streamline operations, enhance efficiency, and provide actionable insights.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: "rgba(0,153,153,0.18)",
                    color: BRAND.white,
                    border: "1px solid rgba(0,153,153,0.35)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND.orange }} />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="relative pb-8">
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl opacity-20" style={{ background: BRAND.teal }} />
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(0,153,153,0.35)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,153,153,0.15)",
              }}
            >
              <img
                src="https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-1.jpg"
                alt="ERP Dashboard"
                className="w-full h-72 object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"; }}
              />
            </div>
            <div
              className="absolute -bottom-2 -right-4 sm:-right-6 rounded-2xl px-6 py-4"
              style={{ background: BRAND.white, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: BRAND.teal }}>+34%</div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: BRAND.gray }}>Efficiency Gain</div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(0,153,153,0.12)" }}>📈</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

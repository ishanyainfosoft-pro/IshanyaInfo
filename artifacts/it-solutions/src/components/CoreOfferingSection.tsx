const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const BG = { beige: "#E7DCCB", cream: "#F3EBDD", accent: "#D9C4A5" };

const features = ["Multi User + Multi Plant", "Simple, User Friendly", "Bar Code / QR Code", "Auto Emails / SMS", "WhatsApp Integration", "Tally Integration"];

export default function CoreOfferingSection() {
  return (
    <section id="core-offering" className="py-14 sm:py-20" style={{ background: BG.beige, borderTop: `1px solid ${BG.accent}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ background: `rgba(247,148,29,0.15)`, color: BRAND.orange, border: `1px solid rgba(247,148,29,0.3)` }}
            >
              Core Offering
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: BRAND.teal }}
            >
              Customized{" "}
              <span style={{ color: BRAND.orange }}>ERP</span>{" "}
              <span style={{ color: BRAND.wine }}>Solutions</span>
            </h2>
            <p className="mb-8 leading-relaxed text-base" style={{ fontFamily: "'Inter', sans-serif", color: BRAND.teal, opacity: 0.85 }}>
              Our highly customized ERP system offers a comprehensive suite of modules, each equipped with robust features to streamline operations, enhance efficiency, and provide actionable insights.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: BG.cream,
                    color: BRAND.teal,
                    border: `1px solid ${BG.accent}`,
                    boxShadow: "0 2px 8px rgba(0,153,153,0.08)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND.orange }} />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl opacity-30" style={{ background: BRAND.orange }} />
            <div
              className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(247,148,29,0.2)]"
              style={{ border: `3px solid ${BG.accent}` }}
            >
              <img
                src="https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-1.jpg"
                alt="ERP Dashboard"
                className="w-full h-72 object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"; }}
              />
            </div>
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl px-6 py-4 shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${BRAND.orange}, #e8820e)`, color: BRAND.white }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>+34%</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.85)" }}>Efficiency</div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>📈</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

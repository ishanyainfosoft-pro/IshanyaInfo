const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const BG = { beige: "#E7DCCB", cream: "#F3EBDD", accent: "#D9C4A5" };

const needs = [
  "Ease of logging / Linkage to customer portal",
  "Short term actions for quick resolution",
  "Comprehensive 8D report generation",
  "Tracking of actions till completion",
  "Warranty / recall / field failure management",
  "End-to-end audit compliant process",
];

const outputs = [
  "Multi user, Multi plant, User friendly",
  "Secured data with on-premise server",
  "SAP / S4 HANA Integration",
  "Transparent LT tracker for each step",
  "CAPA in 8D / any customer format",
  "Action tracker with Auto Emails/SMS & Escalations",
  "Data traceability & customized analysis",
];

export default function FlagshipSection() {
  return (
    <section id="flagship" className="py-14 sm:py-20" style={{ background: BG.cream, borderTop: `1px solid ${BG.accent}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(193,39,122,0.1)", color: BRAND.wine, border: `1px solid rgba(193,39,122,0.2)` }}
          >
            Flagship Product
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: BRAND.wine }}
          >
            Customer{" "}
            <span style={{ color: BRAND.teal }}>Complaints</span>{" "}
            Processing System
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ fontFamily: "'Inter', sans-serif", color: BRAND.teal, opacity: 0.85 }}>
            Successfully developed and deployed a fully customized, end-to-end processing system for a reputed multinational client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Needs */}
          <div
            className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: BG.beige,
              border: `1px solid ${BG.accent}`,
              boxShadow: "0 4px 20px rgba(209,196,165,0.4)",
            }}
          >
            <h3
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', serif", color: BRAND.wine }}
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "rgba(247,148,29,0.15)", color: BRAND.orange }}>📋</span>
              Needs &amp; Expectations
            </h3>
            <ol className="space-y-3">
              {needs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: BRAND.orange }}
                  >{i + 1}</span>
                  <span className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: BRAND.teal }}>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Solution */}
          <div
            className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: `linear-gradient(135deg, #1a0a00 0%, #0d1a1a 100%)`,
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <h3
              className="text-lg font-bold text-white mb-2 flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "rgba(247,148,29,0.15)", color: BRAND.orange }}>✅</span>
              Our Solution Output
            </h3>
            <div className="h-0.5 w-12 mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${BRAND.orange}, ${BRAND.teal})` }} />
            <ul className="space-y-3">
              {outputs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: BRAND.orange }}>✓</span>
                  <span className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.78)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

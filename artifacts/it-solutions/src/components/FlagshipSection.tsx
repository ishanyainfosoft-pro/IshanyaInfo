const BRAND = {
  orange: "#F7941D",
  orangeDark: "#0d0800",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

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
    <section id="flagship" className="py-20 sm:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(193,39,122,0.1)", color: BRAND.wine }}
          >
            Flagship Product
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            Customer{" "}
            <span style={{ color: BRAND.wine }}>Complaints</span> Processing System
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: BRAND.gray }}>
            Successfully developed and deployed a fully customized, end-to-end processing system for a reputed multinational client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Needs */}
          <div className="p-8 rounded-2xl border" style={{ background: "#f9fafb", borderColor: "#f0f0f0" }}>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "rgba(247,148,29,0.1)", color: BRAND.orange }}>📋</span>
              Needs &amp; Expectations
            </h3>
            <ol className="space-y-3">
              {needs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: BRAND.orange }}>{i + 1}</span>
                  <span className="text-sm leading-relaxed" style={{ color: BRAND.gray }}>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Solution — dark orange background */}
          <div className="p-8 rounded-2xl" style={{ background: BRAND.orangeDark }}>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "rgba(247,148,29,0.15)", color: BRAND.orange }}>✅</span>
              Our Solution Output
            </h3>
            <div className="h-0.5 w-12 mb-6 rounded-full" style={{ background: BRAND.orange }} />
            <ul className="space-y-3">
              {outputs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0" style={{ color: BRAND.orange }}>✓</span>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

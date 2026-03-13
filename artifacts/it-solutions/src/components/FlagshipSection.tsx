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
    <section
      id="flagship"
      className="py-20 sm:py-28"
      style={{ background: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "#eff6ff", color: "#1a56db" }}
          >
            Flagship Product
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Customer Complaints Processing System
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Successfully developed and deployed a fully customized, end-to-end processing system for a reputed multinational client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Needs */}
          <div
            className="p-8 rounded-2xl border border-gray-100"
            style={{ background: "#f8fafc" }}
          >
            <h3
              className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: "#eff6ff", color: "#1a56db" }}
              >
                📋
              </span>
              Needs &amp; Expectations
            </h3>
            <ol className="space-y-3">
              {needs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#1a56db" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Solution output */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
            }}
          >
            <h3
              className="text-lg font-bold text-white mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: "rgba(96,165,250,0.15)" }}
              >
                ✅
              </span>
              Our Solution Output
            </h3>
            <ul className="space-y-3">
              {outputs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm text-blue-100/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

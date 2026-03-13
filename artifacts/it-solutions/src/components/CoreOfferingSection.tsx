const features = [
  "Multi User + Multi Plant",
  "Simple, User Friendly",
  "Bar Code / QR Code",
  "Auto Emails / SMS",
  "WhatsApp Integration",
  "Tally Integration",
];

export default function CoreOfferingSection() {
  return (
    <section id="core-offering" className="py-20 sm:py-28" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ background: "#eff6ff", color: "#1a56db" }}
            >
              Core Offering
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              Customized ERP &amp; MES Solutions
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our highly customized ERP system offers a comprehensive suite of modules, each equipped with robust features to streamline operations, enhance efficiency, and provide actionable insights.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                  style={{
                    background: "#fff",
                    color: "#1e40af",
                    border: "1px solid #dbeafe",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#1a56db" }}
                  />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Right - dashboard image + stat */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-1.jpg"
                alt="ERP Dashboard"
                className="w-full h-72 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80";
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl px-6 py-4 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)",
                color: "white",
              }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    +34%
                  </div>
                  <div className="text-xs text-blue-200 mt-0.5">Efficiency</div>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  📈
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

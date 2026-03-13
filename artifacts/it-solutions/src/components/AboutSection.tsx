const features = [
  {
    icon: "🖥️",
    title: "Simple & User-Friendly",
    desc: "Creating intuitive and efficient systems designed around client needs.",
  },
  {
    icon: "🎯",
    title: "Best-in-Class Support",
    desc: "Ensuring seamless operation and ongoing client satisfaction.",
  },
  {
    icon: "🔒",
    title: "Robust Data Security",
    desc: "Offering comprehensive safeguards while keeping data fully in client's control.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    desc: "Delivering premium-quality solutions at a cost-effective offer.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "#eff6ff", color: "#1a56db" }}
          >
            About Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Established in 2010 as a Premier
            <br className="hidden sm:block" /> Software Solutions Provider
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            We specialize in custom-designed, modular ERP / MES solutions tailored to meet the unique needs of MSME and MNC clients.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group"
              style={{ background: "#f9fafb" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "#eff6ff" }}
              >
                {f.icon}
              </div>
              <h3
                className="text-base font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

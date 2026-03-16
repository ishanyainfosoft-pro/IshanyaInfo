const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const features = [
  { icon: "🎯", color: BRAND.orange, bg: "rgba(247,148,29,0.09)", title: "Best-in-Class Support", desc: "Ensuring seamless operation and ongoing client satisfaction." },
  { icon: "🔒", color: BRAND.teal,   bg: "rgba(0,153,153,0.08)",   title: "Robust Data Security", desc: "Offering comprehensive safeguards while keeping data fully in client's control." },
  { icon: "💰", color: BRAND.wine,   bg: "rgba(193,39,122,0.08)",  title: "Competitive Pricing", desc: "Delivering premium-quality solutions at a cost-effective offer." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(247,148,29,0.12)", color: BRAND.orange }}
          >
            About Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            Established in 2010 as a{" "}
            <span style={{ color: BRAND.orange }}>Premier Software</span> Solutions Provider
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: BRAND.gray }}>
            We specialize in custom-designed, modular ERP / MES solutions tailored to meet the unique needs of MSME and MNC clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border hover:shadow-lg transition-all" style={{ background: "#f9fafb", borderColor: "#f0f0f0" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: f.bg }}>
                {f.icon}
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.gray }}>{f.desc}</p>
              <div className="mt-4 h-0.5 w-8 rounded-full" style={{ background: f.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

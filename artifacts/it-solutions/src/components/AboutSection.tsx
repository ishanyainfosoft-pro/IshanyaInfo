const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};


export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 pt-[0.1px] pb-[0.1px]" style={{ background: BRAND.white }}>
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

      </div>
    </section>
  );
}

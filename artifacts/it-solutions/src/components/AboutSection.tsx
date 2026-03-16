const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};


export default function AboutSection() {
  return (
    <section id="about" className="py-1" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(247,148,29,0.12)", color: BRAND.orange }}
          >
            About Us
          </span>
        </div>

      </div>
    </section>
  );
}

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
};

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "78vh" }}>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            { label: "Customized ERP",      bg: BRAND.teal,   text: "#ffffff", delay: "0s"    },
            { label: "Customized MES",      bg: BRAND.wine,   text: "#ffffff", delay: "0.9s"  },
            { label: "E-Commerce Shop",     bg: BRAND.orange, text: "#ffffff", delay: "1.8s"  },
            { label: "Customized Software", bg: "#888888",    text: "#ffffff", delay: "2.7s"  },
          ].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
              style={{
                background: tag.bg,
                color: tag.text,
                boxShadow: `0 2px 8px ${tag.bg}55`,
                animation: `pill-star 3.6s ease-in-out ${tag.delay} infinite`,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em", color: "#1a1a1a" }}
        >
          <span style={{ color: "#1a1a1a" }}>Customized Software Solutions,{" "}</span>
          <span
            style={{ color: "#6D6E71", fontSize: "55px", fontStyle: "italic", fontWeight: 700 }}>curated to your business needs</span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#555555" }}
        >
          Our fully customized, modular solutions are designed to fit your specific operations and guarantee a seamless digital transformation
        </p>

      </div>
    </section>
  );
}

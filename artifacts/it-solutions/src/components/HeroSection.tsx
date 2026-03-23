const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-4 md:pt-0 md:pb-0 md:min-h-[78vh]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {[
            { label: "Customized ERP",      border: BRAND.teal,   id: "mes-offering",      delay: "0s"    },
            { label: "Customized MES",      border: BRAND.wine,   id: "mes-offering",      delay: "0.9s"  },
            { label: "E-Commerce Shop",     border: BRAND.orange, id: "ecommerce",         delay: "1.8s"  },
            { label: "Customized Software", border: "#000000",    id: "billing-software",  delay: "2.7s"  },
          ].map((tag, i) => (
            <button
              key={i}
              onClick={() => scrollTo(tag.id)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all hover:opacity-80 active:scale-95"
              style={{
                background: "#888888",
                color: "#ffffff",
                border: `2px solid ${tag.border}`,
                boxShadow: `0 2px 8px rgba(136,136,136,0.3)`,
                animation: `pill-star 3.6s ease-in-out ${tag.delay} infinite`,
                cursor: "pointer",
              }}
            >
              {tag.label}
            </button>
          ))}
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em", color: "#1a1a1a", lineHeight: "1.05" }}
        >
          <span style={{ color: "#1a1a1a" }}>Customized Software Solutions{" "}</span>
          <span
            style={{ color: "#6D6E71", fontSize: "40px", fontWeight: 700, display: "block", marginTop: "-4px" }}>curated to your business needs</span>
        </h1>

        <p
          className="text-base sm:text-xl max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed"
          style={{ color: "#555555" }}
        >
          Our fully customized, modular solutions are designed to fit your specific operations and guarantee a seamless digital transformation
        </p>

      </div>
    </section>
  );
}

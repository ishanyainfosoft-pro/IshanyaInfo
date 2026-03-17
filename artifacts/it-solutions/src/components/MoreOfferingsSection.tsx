const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const BG = { beige: "#E7DCCB", cream: "#F3EBDD", accent: "#D9C4A5" };

const softwareProducts = [
  {
    title: "E-Commerce Platform",
    features: ["Product listing & Management", "Promotions & Scheme engines", "Seller's Customized Store", "Advanced Cart Management", "WhatsApp Integration"],
    icon: "🛒",
    color: BRAND.teal,
    bg: "rgba(0,153,153,0.08)",
  },
];

const successStories = [
  { title: "Trade Calculators", image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-1.jpg", accent: BRAND.orange },
  { title: "Complaint Processing System", image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-2.jpg", accent: BRAND.teal },
  { title: "ERP for Grampanchayat", image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-3.jpg", accent: BRAND.wine },
];

const verticals = ["Paper and Printing", "Ceramics and Metals", "Food and Beverages", "Wood working, Furniture", "Polymers and Packaging", "Trading and Distribution"];

export default function MoreOfferingsSection() {
  return (
    <section id="more-offerings" className="py-14 sm:py-20" style={{ background: BG.beige, borderTop: `1px solid ${BG.accent}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(247,148,29,0.15)", color: BRAND.orange, border: `1px solid rgba(247,148,29,0.3)` }}
          >
            More Offerings
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: BRAND.teal }}
          >
            <span style={{ color: BRAND.orange }}>Software</span>{" "}
            <span style={{ color: BRAND.wine }}>Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {softwareProducts.map((product, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: BG.cream,
                border: `1px solid ${BG.accent}`,
                boxShadow: "0 4px 16px rgba(209,196,165,0.35)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: product.bg }}
              >{product.icon}</div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: BRAND.teal }}
              >{product.title}</h3>
              <ul className="space-y-2.5">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ fontFamily: "'Inter', sans-serif", color: BRAND.teal }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 h-0.5 rounded-full" style={{ background: `linear-gradient(to right, ${product.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: BRAND.wine }}
          >
            Success Stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ border: `2px solid ${BG.accent}`, boxShadow: "0 4px 16px rgba(209,196,165,0.3)" }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,8,0,0.85) 0%, transparent 60%)" }} />
                </div>
                <div className="px-4 py-3 flex items-center gap-2" style={{ background: BG.cream }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: story.accent }} />
                  <p className="text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: BRAND.teal }}>{story.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif", color: BRAND.wine }}
          >
            Industry Verticals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {verticals.map((v, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-105"
                style={{
                  background: BG.cream,
                  color: BRAND.orange,
                  borderColor: BG.accent,
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 2px 8px rgba(209,196,165,0.3)",
                }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

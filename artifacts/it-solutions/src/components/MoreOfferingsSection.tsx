const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const softwareProducts = [
  {
    title: "Billing Software",
    features: ["Seamless invoicing", "Payment Tracking", "Stock Tracking", "User friendly interface", "Highly Scalable"],
    icon: "🧾",
    color: BRAND.orange,
    bg: "rgba(247,148,29,0.09)",
  },
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
    <section id="more-offerings" className="py-20 sm:py-28" style={{ background: "#f9fafb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(247,148,29,0.12)", color: BRAND.orange }}>
            More Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}>
            <span style={{ color: BRAND.orange }}>Software</span> Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {softwareProducts.map((product, i) => (
            <div key={i} className="p-8 rounded-2xl border hover:shadow-lg transition-all" style={{ background: BRAND.white, borderColor: "#f0f0f0" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: product.bg }}>{product.icon}</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}>{product.title}</h3>
              <ul className="space-y-2.5">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: BRAND.gray }}>
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
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}>
            Success Stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all" style={{ border: `2px solid ${story.accent}30` }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,8,0,0.85) 0%, transparent 60%)" }} />
                </div>
                <div className="px-4 py-3 flex items-center gap-2" style={{ background: BRAND.white }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: story.accent }} />
                  <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{story.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}>
            Industry Verticals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {verticals.map((v, i) => (
              <span key={i} className="px-5 py-2.5 rounded-xl text-sm font-medium border transition-all hover:shadow-sm"
                style={{ background: BRAND.white, color: BRAND.orange, borderColor: "rgba(247,148,29,0.25)" }}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

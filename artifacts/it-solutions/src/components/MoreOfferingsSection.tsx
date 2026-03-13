const softwareProducts = [
  {
    title: "Billing Software",
    features: [
      "Seamless invoicing",
      "Payment Tracking",
      "Stock Tracking",
      "User friendly interface",
      "Highly Scalable",
    ],
    icon: "🧾",
  },
  {
    title: "E-Commerce Platform",
    features: [
      "Product listing & Management",
      "Promotions & Scheme engines",
      "Seller's Customized Store",
      "Advanced Cart Management",
      "WhatsApp Integration",
    ],
    icon: "🛒",
  },
];

const successStories = [
  {
    title: "Trade Calculators",
    image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-1.jpg",
  },
  {
    title: "Complaint Processing System",
    image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-2.jpg",
  },
  {
    title: "ERP for Grampanchayat",
    image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/success-3.jpg",
  },
];

const verticals = [
  "Paper and Printing",
  "Ceramics and Metals",
  "Food and Beverages",
  "Wood working, Furniture",
  "Polymers and Packaging",
  "Trading and Distribution",
];

export default function MoreOfferingsSection() {
  return (
    <section id="more-offerings" className="py-20 sm:py-28" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "#eff6ff", color: "#1a56db" }}
          >
            More Offerings
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Software Products
          </h2>
        </div>

        {/* Software products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {softwareProducts.map((product, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              style={{ background: "#fff" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "#eff6ff" }}
              >
                {product.icon}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {product.title}
              </h3>
              <ul className="space-y-2">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#1a56db" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Success stories */}
        <div className="mb-20">
          <h3
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Success Stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.background = "linear-gradient(135deg, #1a56db, #0ea5e9)";
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white text-sm font-semibold">{story.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Verticals */}
        <div>
          <h3
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Industry Verticals
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {verticals.map((v, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-xl text-sm font-medium"
                style={{
                  background: "#fff",
                  color: "#374151",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
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

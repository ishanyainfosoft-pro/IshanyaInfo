import ECommerceDashboard from "@assets/E-Commerce_TCPL_1773857073413.png";
import ScrollReveal from "@/components/ScrollReveal";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
};

const ecomFeatures = [
  "Multi-Category Product Catalogue",
  "Smart Shopping Cart & Wishlist",
  "Secure Payment Gateway Integration",
  "Real-Time Order & Delivery Tracking",
  "UPI, WhatsApp, Tally Integration",
  "Discount, Coupon & Offers flash",
  "Multi-Vendor & Seller Management",
  "Sales Analytics & Reports Dashboard",
];

export default function ECommerceSection() {
  return (
    <section
      id="ecommerce"
      className="py-10 sm:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left — image like Billing */}
          <ScrollReveal direction="left" className="relative pb-8 w-full" style={{ flex: "2" }}>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl opacity-30" style={{ background: BRAND.teal }} />
            {/* Offset backing plate behind the image card */}
            <div
              className="absolute rounded-2xl"
              style={{
                top: 10, left: 10, right: -10, bottom: -10,
                background: BRAND.teal,
                opacity: 0.12,
                zIndex: 0,
              }}
            />
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: "3px solid rgba(0,153,153,0.25)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src={ECommerceDashboard}
                alt="E-Commerce Platform"
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              className="absolute -bottom-2 -right-4 sm:-right-6 rounded-2xl px-6 py-4"
              style={{ background: "#ffffff", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: BRAND.teal }}>+55%</div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: BRAND.gray }}>Sales Growth</div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(0,153,153,0.10)" }}>🛒</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — text (40%) like ERP */}
          <ScrollReveal direction="right" delay={1} className="w-full" style={{ flex: "2" }}>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: BRAND.teal }}
            >
              Customized{" "}
              <span style={{ color: BRAND.teal, whiteSpace: "nowrap" }}>E-Commerce</span>{" "}Solution
            </h2>
            <p className="mb-8 leading-relaxed text-base sm:text-lg" style={{ color: "#555555" }}>
              Our tailored E-Commerce platform helps businesses sell online with confidence — from product listing and order management to payment processing and customer engagement, all in one fully integrated solution.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {ecomFeatures.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    color: "#333333",
                    border: "1px solid rgba(0,153,153,0.25)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BRAND.orange }} />
                  {f}
                </span>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

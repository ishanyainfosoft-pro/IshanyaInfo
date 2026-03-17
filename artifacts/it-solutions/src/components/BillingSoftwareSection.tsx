import BillingDashboard from "@assets/ChatGPT6_1773735384919.png";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const billingFeatures = [
  "GST Billing & Tax Compliance",
  "Invoice & Quotation Management",
  "Multi-User Access",
  "Real-Time Reports & Analytics",
  "Inventory Linked Billing",
  "Customer & Vendor Management",
  "Barcode / QR Code Billing",
  "Auto Email / SMS Notifications",
  "WhatsApp Invoice Sharing",
  "Tally Integration",
];

export default function BillingSoftwareSection() {
  return (
    <section
      id="billing-software"
      className="py-14 sm:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #d97a0c 0%, #F7941D 45%, #ffaa44 100%)",
      }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ background: "rgba(0,0,0,0.12)", color: BRAND.white, border: "1px solid rgba(0,0,0,0.1)" }}
            >
              Billing Solutions
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: BRAND.white }}
            >
              Customized{" "}
              <span style={{ color: "#1a1a1a" }}>Billing</span>{" "}Software
            </h2>
            <p className="mb-8 leading-relaxed text-base sm:text-lg" style={{ color: "rgba(255,255,255,0.9)" }}>
              Our customized Billing Software is designed to simplify invoicing, streamline financial operations, and improve accuracy across your business. It offers a complete solution for billing, taxation, reporting, and customer management tailored to your workflow.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {billingFeatures.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: "rgba(0,0,0,0.1)",
                    color: BRAND.white,
                    border: "1px solid rgba(0,0,0,0.12)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#1a1a1a" }} />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="relative pb-8">
            {/* Decorative block */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl opacity-20" style={{ background: "#1a1a1a" }} />

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(255,255,255,0.3)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <img
                src={BillingDashboard}
                alt="Billing Software Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-2 -right-4 sm:-right-6 rounded-2xl px-6 py-4"
              style={{
                background: BRAND.white,
                boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: BRAND.orange }}>+40%</div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: BRAND.gray }}>Faster Billing</div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(247,148,29,0.1)" }}>💰</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

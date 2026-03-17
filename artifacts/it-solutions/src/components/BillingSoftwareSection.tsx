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
    <section id="billing-software" className="py-10 sm:py-14" style={{ background: BRAND.orange }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ background: "rgba(255,255,255,0.2)", color: BRAND.white }}
            >
              Billing Solutions
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: BRAND.white }}
            >
              Customized{" "}
              <span style={{ color: "#1a1a1a" }}>Billing </span> Software
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
              Our customized Billing Software is designed to simplify invoicing, streamline financial operations, and improve accuracy across your business. It offers a complete solution for billing, taxation, reporting, and customer management tailored to your workflow.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {billingFeatures.map((f, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                  style={{ background: "rgba(255,255,255,0.18)", color: BRAND.white, border: "1px solid rgba(255,255,255,0.3)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#1a1a1a" }} />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Decorative block */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl opacity-30" style={{ background: BRAND.white }} />

            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "3px solid rgba(255,255,255,0.3)" }}>
              <img
                src={BillingDashboard}
                alt="Billing Software Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl px-6 py-4 shadow-2xl"
              style={{ background: BRAND.white, color: BRAND.orange }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: BRAND.orange }}>+40%</div>
                  <div className="text-xs mt-0.5" style={{ color: BRAND.gray }}>Faster Billing</div>
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

import { useState } from "react";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
};

const BG = "#E7DCCB";
const CARD = "#F3EBDD";
const ACCENT = "#D9C4A5";

export default function ERPPricingSection() {
  const [billingType, setBillingType] = useState<"standard" | "custom">("standard");
  const [expandAll, setExpandAll] = useState(false);
  const [hideCommon, setHideCommon] = useState(false);

  return (
    <section
      id="erp-pricing"
      style={{
        background: `linear-gradient(135deg, ${BG} 0%, #ede3d3 50%, ${BG} 100%)`,
        padding: "72px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle overlay orbs */}
      <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: `${BRAND.teal}10`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -40, left: -40, width: 220, height: 220, borderRadius: "50%", background: `${BRAND.orange}0d`, pointerEvents: "none" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>

        {/* Hero */}
        <div className="text-center mb-12">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: BRAND.teal, textTransform: "uppercase", marginBottom: 16 }}>
            ERP / PRICING
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', 'Space Grotesk', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#1a1a1a",
              marginBottom: 20,
              maxWidth: 720,
              margin: "0 auto 20px",
            }}
          >
            ERP pricing that's{" "}
            <span style={{ color: BRAND.teal }}>straightforward</span>,{" "}
            <span style={{ color: BRAND.wine }}>flexible</span>, and{" "}
            <span style={{ color: BRAND.teal }}>future-ready</span>
          </h2>

          {/* Sub-points */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-6"
            style={{ marginTop: 24 }}
          >
            {[
              { icon: "◆", text: "No hidden charges" },
              { icon: "◆", text: "One-time cost model" },
              { icon: "◆", text: "Scalable for growing businesses" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ color: BRAND.orange, fontSize: 8 }}>{item.icon}</span>
                <span style={{ fontSize: 14, color: BRAND.gray, fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: ACCENT, marginBottom: 40, opacity: 0.6 }} />

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Left – Billing Model */}
          <div
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: CARD,
              border: `1px solid ${ACCENT}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: BRAND.wine, textTransform: "uppercase", marginBottom: 8 }}>
              Billing Model
            </p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", marginBottom: 20 }}>
              How we price our ERP
            </h3>

            {/* Toggle */}
            <div
              className="flex rounded-xl overflow-hidden mb-6"
              style={{ border: `1px solid ${ACCENT}`, background: "#ede3d3" }}
            >
              {(["standard", "custom"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setBillingType(type)}
                  className="flex-1 py-2 text-sm font-semibold capitalize transition-all duration-200"
                  style={{
                    background: billingType === type ? BRAND.orange : "transparent",
                    color: billingType === type ? "#fff" : BRAND.gray,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Info */}
            <div className="space-y-3 mb-6">
              {billingType === "standard" ? (
                <>
                  <div className="flex items-start gap-3">
                    <span style={{ color: BRAND.teal, marginTop: 2 }}>✦</span>
                    <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>One-Time Payment — no subscriptions or recurring fees</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{ color: BRAND.teal, marginTop: 2 }}>✦</span>
                    <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>Price based on number of modules selected</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{ color: BRAND.teal, marginTop: 2 }}>✦</span>
                    <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>Includes deployment, training & onboarding support</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <span style={{ color: BRAND.wine, marginTop: 2 }}>✦</span>
                    <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>Fully scoped pricing based on business complexity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{ color: BRAND.wine, marginTop: 2 }}>✦</span>
                    <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>Covers multi-site, integrations & custom workflows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span style={{ color: BRAND.wine, marginTop: 2 }}>✦</span>
                    <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>Dedicated project manager & priority support</span>
                  </div>
                </>
              )}
            </div>

            {/* Checkboxes */}
            <div style={{ borderTop: `1px solid ${ACCENT}`, paddingTop: 16 }} className="space-y-3">
              {[
                { label: "Expand all features", value: expandAll, set: setExpandAll },
                { label: "Hide common features", value: hideCommon, set: setHideCommon },
              ].map(({ label, value, set }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => set(!value)}
                >
                  <div
                    className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
                    style={{
                      border: `2px solid ${value ? BRAND.teal : ACCENT}`,
                      background: value ? BRAND.teal : "transparent",
                    }}
                  >
                    {value && <span style={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 12, color: BRAND.gray }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center – Standard Solution (highlighted) */}
          <div
            className="rounded-2xl p-6 transition-all duration-300 relative"
            style={{
              background: "#fff",
              border: `2px solid ${BRAND.orange}55`,
              boxShadow: "0 8px 32px rgba(247,148,29,0.15)",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-6px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {/* Popular badge */}
            <div
              style={{
                position: "absolute",
                top: -14,
                left: "50%",
                transform: "translateX(-50%)",
                background: BRAND.orange,
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.12em",
                padding: "4px 14px",
                borderRadius: 20,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Most Popular
            </div>

            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: BRAND.orange, textTransform: "uppercase", marginBottom: 8, marginTop: 8 }}>
              Standard Solution
            </p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>
              ₹ Custom Quote
            </h3>
            <p style={{ fontSize: 12, color: BRAND.gray, marginBottom: 20, lineHeight: 1.6 }}>
              One-time cost based on modules, customization, and deployment scope
            </p>

            <div style={{ height: 1, background: ACCENT, marginBottom: 20, opacity: 0.5 }} />

            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: 24 }}>
              Ideal for <strong style={{ color: BRAND.teal }}>MSMEs and manufacturing businesses</strong> looking for a complete ERP system without recurring subscription costs.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Production & Inventory Management",
                "Sales, Purchase & Finance Modules",
                "Quality Management System",
                "HR & Payroll Integration",
                "Custom Reporting & Dashboards",
                "Cloud / On-Premise Deployment",
              ].map((feat, i) => (
                (!hideCommon || i > 2) && (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: BRAND.teal, fontSize: 12 }}>✓</span>
                    <span style={{ fontSize: 12, color: "#555" }}>{feat}</span>
                  </div>
                )
              ))}
            </div>

            <button
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ background: BRAND.orange, boxShadow: "0 4px 16px rgba(247,148,29,0.3)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(247,148,29,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(247,148,29,0.3)"; }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request Quote
            </button>
          </div>

          {/* Right – Advanced / Enterprise */}
          <div
            className="rounded-2xl p-6 transition-all duration-300"
            style={{
              background: CARD,
              border: `1px solid ${ACCENT}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: BRAND.wine, textTransform: "uppercase", marginBottom: 8 }}>
              Advanced / Enterprise
            </p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>
              Contact for Pricing
            </h3>
            <p style={{ fontSize: 12, color: BRAND.gray, marginBottom: 20, lineHeight: 1.6 }}>
              Scoped and tailored to your organization's scale
            </p>

            <div style={{ height: 1, background: ACCENT, marginBottom: 20, opacity: 0.6 }} />

            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: 24 }}>
              Designed for <strong style={{ color: BRAND.wine }}>large-scale enterprises</strong> requiring advanced integrations, MES capabilities, and multi-plant management.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Everything in Standard",
                "MES & Shop-Floor Integration",
                "Multi-Plant & Multi-Entity Support",
                "Advanced Analytics & BI",
                "ERP–IoT & API Integrations",
                "Dedicated Implementation Team",
                "SLA-backed Support & Maintenance",
              ].map((feat, i) => (
                (!hideCommon || i > 0) && (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: BRAND.wine, fontSize: 12 }}>✓</span>
                    <span style={{ fontSize: 12, color: "#555" }}>{feat}</span>
                  </div>
                )
              ))}
            </div>

            <button
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "transparent",
                border: `2px solid ${BRAND.teal}`,
                color: BRAND.teal,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = BRAND.teal; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 24px ${BRAND.teal}44`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = BRAND.teal; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "none"; }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10" style={{ fontSize: 12, color: BRAND.gray, opacity: 0.8 }}>
          All pricing includes a detailed requirement discussion, scoping document, and a no-obligation quote. &nbsp;
          <span
            style={{ color: BRAND.orange, fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Talk to our team →
          </span>
        </p>
      </div>
    </section>
  );
}

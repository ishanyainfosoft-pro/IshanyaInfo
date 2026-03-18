import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
};

const testimonials = [
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772945661088-BrJcES39.png",
    company: "Sparker Piezoceramics",
    industry: "Manufacturing",
    name: "Mr. Rajesh Kulkarni",
    role: "Managing Director",
    rating: 5,
    accent: BRAND.orange,
    text: "Ishanya Infosoft's ERP solution completely transformed our production planning and inventory management. We now have real-time visibility across all departments, and our order fulfilment accuracy has improved by over 60%. Their team was hands-on from day one — truly a partner, not just a vendor.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895032674-SWZQyy1X.png",
    company: "Hendge Impex",
    industry: "Import & Export",
    name: "Mr. Suresh Nair",
    role: "CEO",
    rating: 5,
    accent: BRAND.teal,
    text: "We struggled for years with disconnected spreadsheets and manual billing. After deploying Ishanya's Billing Software, our invoice processing time dropped by 40% and reconciliation errors are almost zero. The customization they offered perfectly matched our trade compliance requirements.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895062575-CRO96Qha.png",
    company: "Excel Micron Poona",
    industry: "Precision Engineering",
    name: "Mr. Anand Deshpande",
    role: "Operations Head",
    rating: 5,
    accent: BRAND.wine,
    text: "The MES platform gave us shop-floor traceability we never thought possible at our scale. Every machine, every operator, every batch — all tracked live. Defect rates fell by 35% in the first quarter post-deployment. The Ishanya team's domain knowledge in manufacturing is exceptional.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895191996-Brusp16H.png",
    company: "SV Group",
    industry: "Diversified Conglomerate",
    name: "Ms. Priya Sharma",
    role: "IT Director",
    rating: 5,
    accent: BRAND.orange,
    text: "Rolling out an ERP across four business units simultaneously is no small feat, but Ishanya made it seamless. Their implementation methodology, training support, and post-go-live handholding set a benchmark. Our group-level MIS reporting is now fully automated and available in real time.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895238284-BmXx9CSs.png",
    company: "Refractory Shapes Limited",
    industry: "Refractory Manufacturing",
    name: "Mr. Vinod Patil",
    role: "Plant Manager",
    rating: 5,
    accent: BRAND.teal,
    text: "Quality and compliance are non-negotiable in our industry. The Complaint Management System from Ishanya Infosoft gave us end-to-end audit trails and automated 8D reporting, which saved us countless man-hours during customer audits. We achieved zero NCRs in our last three customer quality reviews.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/Tools_County_1772904162265-BybJ4DOy.jpeg",
    company: "Tools County",
    industry: "Tools & Hardware",
    name: "Mr. Kiran Mehta",
    role: "Founder & Director",
    rating: 5,
    accent: BRAND.wine,
    text: "Our e-commerce portal built by Ishanya is fast, scalable, and perfectly integrated with our warehouse ERP. Sales grew 55% within six months of launch. The product catalogue management, automated order routing, and customer dashboards are exactly what we envisioned — and they delivered it on time.",
  },
];

function StarRating({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < count ? color : "#e5e7eb"}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-14 sm:py-20 relative overflow-hidden">

      {/* Subtle decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: BRAND.teal, filter: "blur(80px)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: BRAND.orange, filter: "blur(80px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: `rgba(247,148,29,0.12)`, color: BRAND.orange, border: `1px solid rgba(247,148,29,0.3)` }}
            >
              Client Stories
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}
            >
              Trusted by{" "}
              <span style={{ color: BRAND.orange }}>Industry Leaders</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#555555" }}>
              Real results. Real businesses. See what our clients say about working with Ishanya Infosoft.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={i}
              direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
              delay={(i % 3) as 0 | 1 | 2 | 3 | 4 | 5}
            >
              <div
                className="rounded-2xl p-6 h-full flex flex-col gap-5 transition-all duration-300 cursor-default"
                style={{
                  background: active === i
                    ? `rgba(255,255,255,0.92)`
                    : "rgba(255,255,255,0.60)",
                  backdropFilter: "blur(12px)",
                  border: `1.5px solid ${active === i ? t.accent : "rgba(255,255,255,0.7)"}`,
                  boxShadow: active === i
                    ? `0 20px 50px rgba(0,0,0,0.13), 0 0 0 3px ${t.accent}22`
                    : "0 4px 24px rgba(0,0,0,0.07)",
                  transform: active === i ? "translateY(-4px)" : "none",
                }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Quote icon */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M9.333 20C7.493 20 6 18.507 6 16.667V12c0-3.682 2.985-6.667 6.667-6.667h.666v2.667h-.666C10.507 8 8.667 9.84 8.667 12v1.333H12A2.667 2.667 0 0 1 14.667 16v.667A3.333 3.333 0 0 1 11.333 20H9.333zm12 0c-1.84 0-3.333-1.493-3.333-3.333V12c0-3.682 2.985-6.667 6.667-6.667h.666v2.667h-.666C22.507 8 20.667 9.84 20.667 12v1.333H24A2.667 2.667 0 0 1 26.667 16v.667A3.333 3.333 0 0 1 23.333 20h-2z"
                    fill={t.accent}
                    opacity="0.7"
                  />
                </svg>

                {/* Testimonial text */}
                <p className="flex-1 leading-relaxed text-sm sm:text-base" style={{ color: "#444444" }}>
                  "{t.text}"
                </p>

                {/* Stars */}
                <StarRating count={t.rating} color={t.accent} />

                {/* Divider */}
                <div style={{ height: 1, background: `rgba(0,0,0,0.07)` }} />

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div
                    className="rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      background: "rgba(255,255,255,0.9)",
                      border: `1.5px solid ${t.accent}33`,
                      padding: 6,
                    }}
                  >
                    <img
                      src={t.logo}
                      alt={t.company}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = "none";
                        if (el.parentElement) {
                          el.parentElement.innerHTML = `<span style="font-size:10px;font-weight:700;color:${t.accent};text-align:center;line-height:1.3;">${t.company.slice(0, 2).toUpperCase()}</span>`;
                        }
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <div
                      className="font-bold text-sm leading-tight truncate"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs mt-0.5 font-medium" style={{ color: t.accent }}>
                      {t.role}
                    </div>
                    <div className="text-xs mt-0.5 truncate" style={{ color: BRAND.gray }}>
                      {t.company} · {t.industry}
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom stats strip */}
        <ScrollReveal direction="up" delay={2}>
          <div
            className="mt-16 rounded-2xl px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(12px)",
              border: "1.5px solid rgba(255,255,255,0.7)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            }}
          >
            {[
              { value: "50+", label: "Happy Clients", color: BRAND.orange },
              { value: "98%", label: "Client Retention", color: BRAND.teal },
              { value: "15+", label: "Years Experience", color: BRAND.wine },
              { value: "5★", label: "Avg. Satisfaction", color: BRAND.orange },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm mt-1 font-medium" style={{ color: BRAND.gray }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

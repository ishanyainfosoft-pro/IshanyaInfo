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
    name: "Mr. Vivek Sangolagi",
    role: "Plant Manager",
    rating: 5,
    accent: BRAND.orange,
    text: "Ishanya Infosoft's ERP solution completely transformed our production planning and inventory management. We now have real-time visibility across all departments, and our order fulfilment accuracy has improved significantly. Their team was hands-on from day one — truly a partner, not just a vendor.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895032674-SWZQyy1X.png",
    company: "Hendge Impex",
    industry: "Import & Export",
    name: "Hendge",
    role: "Director",
    rating: 5,
    accent: BRAND.teal,
    text: "We struggled for years with disconnected spreadsheets and manual billing. After deploying Ishanya Infosoft's Billing Software, our invoice processing time dropped by 40% and reconciliation errors are almost zero. The customization they offered perfectly matched our trade compliance requirements.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895062575-CRO96Qha.png",
    company: "Excel Micron Poona",
    industry: "Precision Engineering",
    name: "Shetty",
    role: "Director",
    rating: 5,
    accent: BRAND.wine,
    text: "Data security is paramount for us — we could not risk our sensitive business data on a cloud platform. Ishanya Infosoft understood our concern immediately and delivered the entire ERP solution on an on-premises server within our facility. Having full control over our data has given us genuine peace of mind, and we have not looked back since.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895191996-Brusp16H.png",
    company: "SV Group",
    industry: "Diversified Conglomerate",
    name: "Mr. Babanrao Gagare",
    role: "Managing Director",
    rating: 5,
    accent: BRAND.orange,
    text: "Rolling out an ERP across four business units simultaneously is no small feat, but Ishanya Infosoft made it seamless. Their implementation methodology, training support, and post-go-live handholding set a benchmark. Our group-level MIS reporting is now fully automated and available in real time.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895238284-BmXx9CSs.png",
    company: "Refractory Shapes Limited",
    industry: "Refractory Manufacturing",
    name: "Mr. J P Shetty",
    role: "Plant Manager",
    rating: 5,
    accent: BRAND.teal,
    text: "The MES platform gave us shop-floor traceability we never thought possible at our scale. Every machine, every operator, every batch — all tracked live. Ishanya Infosoft's domain knowledge in manufacturing is exceptional.",
  },
  {
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/Tools_County_1772904162265-BybJ4DOy.jpeg",
    company: "Tools County",
    industry: "Tools & Hardware",
    name: "Mr. Milind Rishi",
    role: "Managing Director",
    rating: 5,
    accent: BRAND.wine,
    text: "Our e-commerce portal built by Ishanya Infosoft is fast, scalable, and perfectly integrated with our pre-existing system. E-commerce site has helped us to serve remote customers and helped us grew sales. The product catalogue management, automated order routing, and customer dashboards are exactly what we envisioned — delivered on time.",
  },
];

function StarRating({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill={i < count ? color : "#e5e7eb"}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300"
      style={{
        width: 340,
        background: "rgba(255,255,255,0.68)",
        backdropFilter: "blur(12px)",
        border: `1.5px solid rgba(255,255,255,0.75)`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >
      {/* Quote mark */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path
          d="M9.333 20C7.493 20 6 18.507 6 16.667V12c0-3.682 2.985-6.667 6.667-6.667h.666v2.667h-.666C10.507 8 8.667 9.84 8.667 12v1.333H12A2.667 2.667 0 0 1 14.667 16v.667A3.333 3.333 0 0 1 11.333 20H9.333zm12 0c-1.84 0-3.333-1.493-3.333-3.333V12c0-3.682 2.985-6.667 6.667-6.667h.666v2.667h-.666C22.507 8 20.667 9.84 20.667 12v1.333H24A2.667 2.667 0 0 1 26.667 16v.667A3.333 3.333 0 0 1 23.333 20h-2z"
          fill={t.accent}
          opacity="0.65"
        />
      </svg>

      {/* Text */}
      <p className="flex-1 text-sm leading-relaxed" style={{ color: "#444444" }}>
        "{t.text}"
      </p>

      {/* Stars */}
      <StarRating count={t.rating} color={t.accent} />

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(0,0,0,0.07)" }} />

      {/* Client info */}
      <div className="flex items-center gap-3">
        <div
          className="rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden"
          style={{
            width: 52,
            height: 52,
            background: "rgba(255,255,255,0.95)",
            border: `1.5px solid ${t.accent}33`,
            padding: 5,
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
                el.parentElement.innerHTML = `<span style="font-size:11px;font-weight:700;color:${t.accent};text-align:center;line-height:1.3;">${t.company.slice(0, 2).toUpperCase()}</span>`;
              }
            }}
          />
        </div>
        <div className="min-w-0">
          <div className="font-bold text-sm leading-tight truncate" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}>
            {t.name}
          </div>
          <div className="text-xs mt-0.5 font-semibold" style={{ color: t.accent }}>
            {t.role}
          </div>
          <div className="text-xs mt-0.5 truncate" style={{ color: BRAND.gray }}>
            {t.company} · {t.industry}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  /* Triple for seamless loop */
  const all = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-14 sm:py-20 relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: BRAND.teal, filter: "blur(80px)" }} />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: BRAND.orange, filter: "blur(80px)" }} />

      {/* Section header */}
      <ScrollReveal direction="up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(247,148,29,0.12)", color: BRAND.orange, border: "1px solid rgba(247,148,29,0.3)" }}
          >
            Client Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: BRAND.orange }}
          >
            Trusted by Clients{" "}
            <span style={{ color: BRAND.orange }}>Across Industry</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#555555" }}>
            Real results. Real businesses. See what our clients say about working with us.
          </p>
        </div>
      </ScrollReveal>

      {/* Marquee — overflow hidden is essential */}
      <div className="relative" style={{ overflow: "hidden" }}>

        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(200,236,236,0.85), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(216,216,216,0.85), transparent)" }}
        />

        <div
          className="flex gap-6 animate-marquee-slow"
          style={{ width: "max-content", paddingBottom: 8 }}
        >
          {all.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <ScrollReveal direction="up" delay={1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div
            className="rounded-2xl px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
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
                <div className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm mt-1 font-medium" style={{ color: BRAND.gray }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
}

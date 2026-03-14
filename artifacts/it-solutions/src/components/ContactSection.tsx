import logoImg from "@assets/WhatsApp_Image_2026-03-09_at_4.33.45_PM_1773388136859.jpeg";

const BRAND = {
  orange: "#F7941D",
  white: "#FFFFFF",
};

const contactItems = [
  {
    label: "Address",
    lines: ["Probo Prolix Pride, Shinde vasti, Ravet", "Pune 412 101"],
    href: "https://maps.google.com/?q=Ravet,Pune",
  },
  {
    label: "Phone",
    lines: ["+91 98231 72231"],
    href: "tel:+919823172231",
  },
  {
    label: "Email",
    lines: ["Info@ishanyainfosoft.com", "mrunal.kulkarni79@gmail.com"],
    href: "mailto:Info@ishanyainfosoft.com",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-5 sm:py-6" style={{ background: "rgba(0,0,0,0.8)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 lg:gap-10">

          {/* Logo + Name */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                overflow: "hidden",
                background: BRAND.white,
                flexShrink: 0,
                boxShadow: `0 0 0 2.5px ${BRAND.orange}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logoImg}
                alt="Ishanya Infosoft"
                style={{
                  width: "170%",
                  height: "170%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  flexShrink: 0,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                color: BRAND.white,
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              Ishanya Infosoft
            </span>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: 44, background: "rgba(255,255,255,0.15)" }} className="hidden sm:block" />

          {/* Contact items strip */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-10">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="no-underline transition-opacity hover:opacity-80"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-0.5 text-center sm:text-left"
                  style={{ color: BRAND.orange, fontSize: "10px" }}
                >
                  {item.label}
                </p>
                {item.lines.map((line, j) => (
                  <p key={j} className="leading-snug text-center sm:text-left whitespace-nowrap" style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>
                    {line}
                  </p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

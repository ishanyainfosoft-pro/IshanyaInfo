import logoImg from "@assets/Gemini_Generated_Image_8nstoo8nstoo8nst-removebg-preview_1773397224117.png";

const BRAND = {
  orange: "#F7941D",
  orangeDark: "#0d0800",
  orangeMid: "#1a0f00",
  teal: "#009999",
  wine: "#C1277A",
  white: "#FFFFFF",
};

const contactItems = [
  {
    icon: "📍",
    label: "Address",
    lines: ["Probo Prolix Pride,", "Shinde vasti, Ravet", "Pune 412 101"],
    href: "https://maps.google.com/?q=Ravet,Pune",
    color: BRAND.orange,
  },
  {
    icon: "📞",
    label: "Phone",
    lines: ["+91 98231 72231"],
    href: "tel:+919823172231",
    color: BRAND.teal,
  },
  {
    icon: "✉️",
    label: "Email",
    lines: ["Info@ishanyainfosoft.com", "mrunal.kulkarni79@gmail.com"],
    href: "mailto:Info@ishanyainfosoft.com",
    color: BRAND.wine,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: BRAND.orangeDark }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto mb-4 lg:mb-0">
            <img
              src={logoImg}
              alt="Ishanya Infosoft"
              style={{
                maxWidth: 200,
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 0 20px rgba(247,148,29,0.3))",
              }}
            />
          </div>

          {/* Contact details */}
          <div className="flex-1">
            <h3
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact <span style={{ color: BRAND.orange }}>Details</span>
            </h3>

            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl group transition-all duration-200 cursor-pointer no-underline"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${item.color}18`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  {/* Icon bubble */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${item.color}20` }}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div
                    className="ml-auto self-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1"
                    style={{ color: item.color }}
                  >
                    →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

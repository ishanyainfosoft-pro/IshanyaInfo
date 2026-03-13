import logoImg from "@assets/Gemini_Generated_Image_8nstoo8nstoo8nst-removebg-preview_1773397224117.png";

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
    <section id="contact" className="py-12 sm:py-16" style={{ background: "rgba(0,0,0,0.8)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-8 lg:gap-12">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoImg}
              alt="Ishanya Infosoft"
              style={{
                maxWidth: 250,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: 60, background: "rgba(255,255,255,0.15)" }} className="hidden sm:block" />

          {/* Contact items strip */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="no-underline transition-opacity hover:opacity-80"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1 text-center sm:text-left"
                  style={{ color: BRAND.orange }}
                >
                  {item.label}
                </p>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-sm leading-relaxed text-center sm:text-left whitespace-nowrap" style={{ color: "rgba(255,255,255,0.7)" }}>
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

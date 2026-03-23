import logoImg from "@assets/Ishanya_Info_Main_Logo_1773864691760.png";

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
    lines: ["ishanya.infosoft@gmail.com"],
    href: "mailto:ishanya.infosoft@gmail.com",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ishanya-infosoft",
    bg: "#0077B5",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ishanyainfosoft",
    bg: "#1877F2",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@IshanyaInfosoft-e8i",
    bg: "#FF0000",
    svg: (
      <svg width="18" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-6 sm:py-0" style={{ minHeight: "120px", background: "#2b3a4f" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ minHeight: "120px", display: "flex", alignItems: "center" }}>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-6 lg:gap-10 w-full py-4 sm:py-0">

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
                boxShadow: `0 0 0 2px ${BRAND.orange}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logoImg}
                alt="Ishanya Infosoft"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                color: "#ffffff",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              Ishanya Infosoft
            </span>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: 60, background: "rgba(255,255,255,0.18)" }} className="hidden sm:block" />

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
                  className="font-semibold uppercase tracking-wider mb-0.5 text-center sm:text-left text-[18px]"
                  style={{ color: BRAND.orange, fontSize: "10px" }}
                >
                  {item.label}
                </p>
                {item.lines.map((line, j) => (
                  <p key={j} className="leading-snug text-center sm:text-left whitespace-nowrap" style={{ color: "rgba(255,255,255,0.80)", fontSize: "16px" }}>
                    {line}
                  </p>
                ))}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: 60, background: "rgba(255,255,255,0.18)" }} className="hidden sm:block" />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-all hover:scale-110"
                title={link.label}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: link.bg,
                  }}
                >
                  {link.svg}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

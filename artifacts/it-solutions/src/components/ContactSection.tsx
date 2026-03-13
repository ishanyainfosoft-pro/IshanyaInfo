import logoImg from "@assets/Gemini_Generated_Image_8nstoo8nstoo8nst-removebg-preview_1773397224117.png";

const BRAND = {
  orange: "#F7941D",
  orangeDark: "#0d0800",
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
    <section id="contact" className="py-20 sm:py-28" style={{ background: BRAND.orangeDark }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">

          {/* Logo */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <img
              src={logoImg}
              alt="Ishanya Infosoft"
              style={{
                maxWidth: 160,
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Contact details */}
          <div className="flex-1 w-full">
            <h3
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
            >
              Contact <span style={{ color: BRAND.orange }}>Details</span>
            </h3>

            <div className="space-y-5">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block no-underline transition-opacity hover:opacity-80"
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: BRAND.orange }}
                  >
                    {item.label}
                  </p>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {line}
                    </p>
                  ))}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

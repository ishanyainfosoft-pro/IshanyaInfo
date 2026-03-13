const BRAND = {
  orange: "#F7941D",
  orangeDark: "#0d0800",
  white: "#FFFFFF",
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: BRAND.orangeDark }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div>
          <h3
            className="text-xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contact Details
          </h3>

          <div className="space-y-5">
            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5" style={{ color: BRAND.orange }}>📍</span>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Probo Prolix Pride,<br />
                Shinde vasti, Ravet<br />
                Pune 412 101
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="text-lg" style={{ color: BRAND.orange }}>📞</span>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>+91 98231 72231</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5" style={{ color: BRAND.orange }}>✉️</span>
              <div className="text-sm space-y-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                <p>Info@ishanyainfosoft.com</p>
                <p>mrunal.kulkarni79@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

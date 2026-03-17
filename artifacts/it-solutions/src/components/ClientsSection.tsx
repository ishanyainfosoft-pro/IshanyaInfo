const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const BG = { beige: "#E7DCCB", cream: "#F3EBDD", accent: "#D9C4A5" };

const clients = [
  { name: "Sparker Piezoceramics", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772945661088-BrJcES39.png" },
  { name: "Hendge Impex", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895032674-SWZQyy1X.png" },
  { name: "Excel Micron Poona", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895062575-CRO96Qha.png" },
  { name: "SV Group", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895191996-Brusp16H.png" },
  { name: "Refractory Shapes Limited", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895238284-BmXx9CSs.png" },
  { name: "Tools County", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/Tools_County_1772904162265-BybJ4DOy.jpeg" },
];

export default function ClientsSection() {
  const all = [...clients, ...clients];

  return (
    <section id="clients" className="py-14 sm:py-20 overflow-hidden" style={{ background: BG.cream, borderTop: `1px solid ${BG.accent}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: "rgba(247,148,29,0.15)", color: BRAND.orange, border: `1px solid rgba(247,148,29,0.3)` }}
        >
          Trusted By
        </span>
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif", color: BRAND.teal }}
        >
          Our Esteemed{" "}<span style={{ color: BRAND.orange }}>Clients</span>
        </h2>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BG.cream}, transparent)` }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${BG.cream}, transparent)` }}
        />

        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {all.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 py-4 rounded-2xl flex-shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                background: BG.beige,
                border: `1px solid ${BG.accent}`,
                minWidth: 180,
                height: 100,
                boxShadow: "0 2px 12px rgba(209,196,165,0.3)",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-32 object-contain"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  if (el.parentElement)
                    el.parentElement.innerHTML = `<span style="font-size:11px;color:${BRAND.teal};text-align:center;padding:0 8px;font-family:'Inter',sans-serif;">${client.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

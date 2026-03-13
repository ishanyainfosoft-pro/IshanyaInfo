// Brand colors
const BRAND = {
  teal: "#009999",
  orange: "#F7941D",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const clients = [
  {
    name: "Sparker Piezoceramics",
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772945661088-BrJcES39.png",
  },
  {
    name: "Hendge Impex",
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895032674-SWZQyy1X.png",
  },
  {
    name: "Excel Micron Poona",
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895062575-CRO96Qha.png",
  },
  {
    name: "SV Group",
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895191996-Brusp16H.png",
  },
  {
    name: "Refractory Shapes Limited",
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895238284-BmXx9CSs.png",
  },
  {
    name: "Tools County",
    logo: "https://pdf-text-extractor--aviratk.replit.app/assets/Tools_County_1772904162265-BybJ4DOy.jpeg",
  },
];

export default function ClientsSection() {
  const allClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 sm:py-28 overflow-hidden" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(193,39,122,0.08)", color: BRAND.wine }}
          >
            Our Network
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
            }}
          >
            Our Esteemed{" "}
            <span style={{ color: BRAND.wine }}>Clients</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BRAND.white}, transparent)` }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${BRAND.white}, transparent)` }}
        />

        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {allClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 py-4 rounded-2xl flex-shrink-0 hover:shadow-md transition-all"
              style={{
                background: "#f9fafb",
                border: "1px solid #f0f0f0",
                minWidth: "180px",
                height: "100px",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-32 object-contain"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span style="font-size:11px;color:${BRAND.gray};text-align:center;padding:0 8px;">${client.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

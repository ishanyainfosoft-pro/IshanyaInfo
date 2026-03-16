const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

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
    <section id="clients" className="py-20 sm:py-28 overflow-hidden" style={{ background: BRAND.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}>
          Our Esteemed{" "}<span style={{ color: BRAND.orange }}>Clients</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BRAND.white}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${BRAND.white}, transparent)` }} />

        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {all.map((client, i) => (
            <div key={i} className="flex items-center justify-center px-8 py-4 rounded-2xl flex-shrink-0 hover:shadow-md transition-all"
              style={{ background: "#f9fafb", border: `1px solid rgba(247,148,29,0.15)`, minWidth: 180, height: 100 }}>
              <img src={client.logo} alt={client.name} className="max-h-12 max-w-32 object-contain"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  if (el.parentElement) el.parentElement.innerHTML = `<span style="font-size:11px;color:${BRAND.gray};text-align:center;padding:0 8px;">${client.name}</span>`;
                }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

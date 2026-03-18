const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const clients = [
  { name: "Sparker Piezoceramics", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772945661088-BrJcES39.png", url: "https://www.sparklerceramics.com/" },
  { name: "Hendge Impex", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895032674-SWZQyy1X.png", url: "" },
  { name: "Excel Micron Poona", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895062575-CRO96Qha.png", url: "https://www.excelmicron.com/" },
  { name: "SV Group", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895191996-Brusp16H.png", url: "" },
  { name: "Refractory Shapes Limited", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/image_1772895238284-BmXx9CSs.png", url: "https://refshape.com/" },
  { name: "Tools County", logo: "https://pdf-text-extractor--aviratk.replit.app/assets/Tools_County_1772904162265-BybJ4DOy.jpeg", url: "https://www.toolscounty.com/" },
];

export default function ClientsSection() {
  const all = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}
        >
          <span style={{ color: BRAND.orange }}>Our Esteemed Clients</span>
        </h2>
      </div>

      <div className="relative" style={{ overflow: "hidden" }}>

        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(200,236,236,0.85), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(216,216,216,0.85), transparent)" }}
        />

        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {all.map((client, i) => {
            const card = (
              <div
                className="flex items-center justify-center px-4 py-3 rounded-xl flex-shrink-0 transition-all hover:shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid rgba(247,148,29,0.2)`,
                  width: 160,
                  height: 90,
                  cursor: client.url ? "pointer" : "default",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    if (el.parentElement) {
                      el.parentElement.innerHTML = `<span style="font-size:12px;font-weight:600;color:${BRAND.gray};text-align:center;padding:0 8px;line-height:1.4;">${client.name}</span>`;
                    }
                  }}
                />
              </div>
            );

            return client.url ? (
              <a
                key={i}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                title={client.name}
                style={{ textDecoration: "none" }}
              >
                {card}
              </a>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import refractoryLogo   from "@assets/Refractory_Shapes_Ltd_1774267125634.png";
import sparklerLogo     from "@assets/Sparkler_1774267125635.png";
import excelMicronLogo  from "@assets/Excel_Micron_1774267125630.png";
import toolsCountyLogo  from "@assets/Tools_County_Pvt_Ltd_1774267125637.png";
import omPackagingLogo  from "@assets/OM_Packaging_1774267125633.jpeg";
import svGroupLogo      from "@assets/SV_Group_1774267125636.png";
import hendgeLogo       from "@assets/Hendge_Impex_1774267125632.png";
import padmavatiLogo    from "@assets/Padmavati_Automobiles_1774267125634.jpeg";
import gyanHouzLogo     from "@assets/GyanHouz_1774267125631.jpeg";

const BRAND = {
  orange: "#F7941D",
  teal:   "#009999",
  wine:   "#C1277A",
  gray:   "#6D6E71",
};

/* ── Industry vertical SVG icons (simple, single-colour) ─────────── */
const icons: Record<string, JSX.Element> = {
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c.8 0 1.5-.3 2-.8V21s-4 1-4-3.5c0-1.5.5-2.5 1-3z"/>
      <path d="M12 2C6 6 4 12 8 16c0 0 1-4 4-6 0 0-1 4 2 6 4-2 5-7 3-10l-2 1c0-2-1-4-3-5z"/>
    </svg>
  ),
  molecule: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6"  cy="18" r="2.5"/>
      <circle cx="18" cy="18" r="2.5"/>
      <circle cx="12" cy="6"  r="2.5"/>
      <line x1="7.5"  y1="16.5" x2="10.5" y2="7.5"/>
      <line x1="13.5" y1="7.5"  x2="16.5" y2="16.5"/>
      <line x1="8.5"  y1="18"   x2="15.5" y2="18"/>
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
  utensils: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
      <path d="M7 2v20"/>
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1"/>
      <path d="M16 8h4l3 5v4h-7V8z"/>
      <circle cx="5.5"  cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  car: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-1"/>
      <circle cx="7"  cy="17" r="2"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  ),
  grad: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
};

const VERTICALS = [
  { label: "Engineering Goods",       icon: "gear",      color: BRAND.teal   },
  { label: "Ceramics and Metals",     icon: "flame",     color: BRAND.orange },
  { label: "Plastics / Polymers",     icon: "molecule",  color: BRAND.wine   },
  { label: "Engineering Tools",       icon: "wrench",    color: BRAND.teal   },
  { label: "Printing and Packaging",  icon: "box",       color: BRAND.orange },
  { label: "Food and Beverages",      icon: "utensils",  color: BRAND.wine   },
  { label: "Trading and Distribution",icon: "truck",     color: BRAND.teal   },
  { label: "EduTech",                 icon: "grad",      color: BRAND.wine   },
];

const CLIENTS = [
  { name: "Refractory Shapes Limited",      logo: refractoryLogo,  url: "https://refshape.com/"          },
  { name: "Sparkler Piezoceramics Pvt Ltd", logo: sparklerLogo,    url: "https://www.sparklerceramics.com/" },
  { name: "Excel Micron Poona Ltd",         logo: excelMicronLogo, url: "https://www.excelmicron.com/"    },
  { name: "Tools County Pvt Ltd",           logo: toolsCountyLogo, url: "https://www.toolscounty.com/"    },
  { name: "Om Packaging",                   logo: omPackagingLogo, url: ""                                },
  { name: "S V Group of Industries",        logo: svGroupLogo,     url: ""                                },
  { name: "Hendge Impex Pvt Ltd",           logo: hendgeLogo,      url: ""                                },
  { name: "Padmavati Automobiles",          logo: padmavatiLogo,   url: ""                                },
  { name: "GyanHouz Learning Hub",          logo: gyanHouzLogo,    url: ""                                },
];

const marqueeClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-12 sm:py-16"
      style={{
        background: "linear-gradient(135deg, rgba(200,236,236,0.4) 0%, rgba(255,255,255,0.65) 35%, rgba(253,224,192,0.35) 65%, rgba(255,255,255,0.55) 100%)",
      }}
    >
      {/* ── Section header ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: BRAND.orange }}
        >
          Industries We Serve &amp;{" "}
          <span style={{ color: BRAND.orange }}>Our Esteemed Clients</span>
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: BRAND.gray }}>
          We partner with businesses across diverse sectors, delivering tailored digital solutions
          that drive measurable growth and operational excellence.
        </p>
      </div>

      {/* ── Two-column body ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── LEFT: Industry Verticals ──────────────────────────── */}
          <div
            className="flex-none lg:w-80 rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,153,153,0.15)",
              boxShadow: "0 4px 24px rgba(0,153,153,0.08)",
            }}
          >
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: BRAND.teal, fontFamily: "'Space Grotesk', sans-serif", paddingBottom: "6px", borderBottom: `2px solid ${BRAND.teal}40` }}
            >
              Industry Verticals
            </h3>

            <ul className="flex flex-col gap-3 mt-4">
              {VERTICALS.map((v) => (
                <li key={v.label} className="flex items-center gap-3">
                  <span
                    className="flex-none flex items-center justify-center rounded-lg"
                    style={{
                      width: 34,
                      height: 34,
                      background: `${v.color}18`,
                      color: v.color,
                    }}
                  >
                    <span style={{ width: 18, height: 18, display: "flex" }}>
                      {icons[v.icon]}
                    </span>
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#2a2a2a" }}>
                    {v.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: Client logo grid ───────────────────────────── */}
          <div className="flex-1">
            <h3
              className="text-lg font-bold mb-1"
              style={{ color: BRAND.orange, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Clients
            </h3>
            <p className="text-xs mb-5" style={{ color: BRAND.gray }}>
              Trusted by industry leaders across Pune and beyond
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CLIENTS.map((client) => {
                const card = (
                  <div
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(247,148,29,0.18)",
                      minHeight: 110,
                    }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{ width: "100%", height: 64 }}
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        style={{
                          maxWidth: "100%",
                          maxHeight: 64,
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>
                    <span
                      className="text-center text-xs font-medium leading-tight"
                      style={{ color: BRAND.gray }}
                    >
                      {client.name}
                    </span>
                  </div>
                );

                return client.url ? (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    {card}
                  </a>
                ) : (
                  <div key={client.name}>{card}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom marquee ──────────────────────────────────────────── */}
      <div className="relative" style={{ overflow: "hidden" }}>
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(200,236,236,0.85), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(253,224,192,0.85), transparent)" }}
        />

        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {marqueeClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 py-3 rounded-xl flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(247,148,29,0.2)",
                width: 160,
                height: 90,
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

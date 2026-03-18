import { useState, useEffect } from "react";

const BRAND = { orange: "#F7941D", teal: "#009999", wine: "#C1277A" };

type Mod = { id: string; name: string; emoji: string; color: string; features: string[] };

const MODULES: Mod[] = [
  { id: "purchase",   name: "Purchase",   emoji: "🛒", color: BRAND.orange,
    features: ["Vendor Master", "Material Master", "Purchase Request", "Purchase Order"] },
  { id: "planning",   name: "Planning",   emoji: "📋", color: BRAND.teal,
    features: ["BOM, MRP", "Job Routing", "Capacity Planning", "Daily Scheduling"] },
  { id: "production", name: "Production", emoji: "⚙️", color: BRAND.orange,
    features: ["Machine Performance", "Productivity Tracking", "Downtime Monitoring", "Quality Control"] },
  { id: "warehouse",  name: "Warehouse",  emoji: "🏭", color: BRAND.wine,
    features: ["GRN, Picking List", "Stock Tracking", "Replenishment", "Ewaybill", "Logistics Mgmt"] },
  { id: "quality",    name: "Quality",    emoji: "✅", color: BRAND.teal,
    features: ["Quality Control", "Inspection", "Compliance Tracking", "Defect Management"] },
  { id: "accounts",   name: "Accounts",   emoji: "💰", color: BRAND.orange,
    features: ["General Ledger", "Account Payable", "Account Receivables", "GST Reports"] },
  { id: "sales",      name: "Sales",      emoji: "📈", color: BRAND.wine,
    features: ["Quotation", "Sales Order Processing", "Invoicing & Payments", "Sales Returns"] },
  { id: "crm",        name: "CRM",        emoji: "👥", color: BRAND.teal,
    features: ["Lead Management", "Inquiry + Quotes", "Customer Support", "Task Management", "WhatsApp Integration", "Analysis + Reports"] },
];

const CX       = 265;   // container half-width / center
const ORBIT_R  = 198;   // radius of orbit
const HEX_W    = 108;                        // hexagon width
const HEX_H    = Math.round(108 * 0.866);   // perfect regular hexagon height ≈ 94
const CLIP     = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
const STEP_MS  = 5000;  // orbit step interval
const TRANS_MS = 1500;  // orbit transition duration

export default function ERPInfographicSection() {
  const [orbitDeg,  setOrbitDeg]  = useState(0);
  const [active,    setActive]    = useState<Mod | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  /* ── Orbit clock ── */
  useEffect(() => {
    const t = setInterval(() => setOrbitDeg(d => d + 45), STEP_MS);
    return () => clearInterval(t);
  }, []);

  /* position of satellite i in px offset from center */
  const hexPos = (i: number) => {
    const rad = ((i * 45 + orbitDeg) * Math.PI) / 180;
    return {
      left: CX + Math.sin(rad) * ORBIT_R - HEX_W / 2,
      top:  CX - Math.cos(rad) * ORBIT_R - HEX_H / 2,
    };
  };

  const toggle = (mod: Mod) =>
    setActive(prev => (prev?.id === mod.id ? null : mod));

  return (
    <section
      className="py-14 sm:py-20 overflow-hidden"
      style={{ background: "#E7DCCB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(247,148,29,0.15)", color: BRAND.orange, border: "1px solid rgba(247,148,29,0.35)" }}
          >Customized ERP Solution</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#2a2a2a" }}
          >
            ERP <span style={{ color: BRAND.orange }}>Modules</span> &amp; Key Features
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#6b6b6b" }}>Our highly customized ERP system offers a comprehensive suite of modules, each equipped with robust features to streamline operations, enhance efficiency, and provide actionable insights.</p>
        </div>

        {/* ── Main layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">

          {/* ── Orbital diagram (desktop) ── */}
          <div
            className="relative flex-shrink-0"
            style={{ width: CX * 2, height: CX * 2 }}
          >
            {/* SVG: orbit ring + rotating connection lines */}
            <svg
              viewBox={`0 0 ${CX * 2} ${CX * 2}`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
            >
              {/* Orbit path circle */}
              <circle
                cx={CX} cy={CX} r={ORBIT_R}
                fill="none"
                stroke="rgba(247,148,29,0.18)"
                strokeWidth={2}
                strokeDasharray="8 9"
              />
              {/* Rotating group of radial connection lines */}
              <g
                style={{
                  transform: `rotate(${orbitDeg}deg)`,
                  transformOrigin: `${CX}px ${CX}px`,
                  transition: `transform ${TRANS_MS}ms ease-in-out`,
                }}
              >
                {MODULES.map((_, i) => {
                  const rad = (i * 45 * Math.PI) / 180;
                  return (
                    <line
                      key={i}
                      x1={CX} y1={CX}
                      x2={CX + Math.sin(rad) * ORBIT_R}
                      y2={CX - Math.cos(rad) * ORBIT_R}
                      stroke="rgba(247,148,29,0.30)"
                      strokeWidth={1.5}
                      strokeDasharray="5 6"
                    />
                  );
                })}
              </g>
              {/* Dot markers at each orbital position */}
              {MODULES.map((_, i) => {
                const rad = (i * 45 * Math.PI) / 180;
                return (
                  <circle
                    key={i}
                    cx={CX + Math.sin(rad) * ORBIT_R}
                    cy={CX - Math.cos(rad) * ORBIT_R}
                    r={3}
                    fill="rgba(247,148,29,0.3)"
                  />
                );
              })}
            </svg>

            {/* Central ERP hexagon */}
            <div
              style={{
                position: "absolute",
                left: CX, top: CX,
                width: 152, height: 132,
                transform: "translate(-50%, -50%)",
                clipPath: CLIP,
                background: "linear-gradient(145deg, #f7941d 0%, #c86000 100%)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                zIndex: 10,
                filter: "drop-shadow(0 10px 28px rgba(247,148,29,0.50))",
              }}
            >
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 900, color: "#fff", letterSpacing: "-1px", lineHeight: 1 }}
              >ERP</span>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.80)", fontWeight: 600, letterSpacing: "0.14em", marginTop: 4 }}>SYSTEM</span>
            </div>

            {/* Satellite hexagons */}
            {MODULES.map((mod, i) => {
              const { left, top } = hexPos(i);
              const isHov = hoveredId === mod.id;
              const isAct = active?.id === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => toggle(mod)}
                  onMouseEnter={() => setHoveredId(mod.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    position: "absolute",
                    left, top,
                    width: HEX_W, height: HEX_H,
                    clipPath: CLIP,
                    background: isAct ? mod.color : "#F3EBDD",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: 4,
                    cursor: "pointer",
                    zIndex: isHov || isAct ? 20 : 5,
                    transform: `scale(${isHov || isAct ? 1.12 : 1})`,
                    transition: `left ${TRANS_MS}ms ease-in-out, top ${TRANS_MS}ms ease-in-out, transform 0.25s ease, filter 0.25s`,
                    filter: isHov || isAct
                      ? `drop-shadow(0 6px 22px ${mod.color}70)`
                      : "drop-shadow(0 3px 10px rgba(0,0,0,0.14))",
                  }}
                >
                  <span style={{ fontSize: 26, lineHeight: 1 }}>{mod.emoji}</span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 11, fontWeight: 700,
                      color: isAct ? "#fff" : mod.color,
                      textAlign: "center", lineHeight: 1.1,
                      padding: "0 8px",
                    }}
                  >{mod.name}</span>
                </div>
              );
            })}
          </div>

          {/* ── Right panel ── */}
          <div style={{ flex: 1, minWidth: 260, maxWidth: 380 }}>

            {active ? (
              /* Detail card */
              (<div
                className="rounded-2xl p-7"
                style={{
                  background: "#F3EBDD",
                  border: `2px solid ${active.color}55`,
                  boxShadow: `0 16px 48px ${active.color}28`,
                }}
              >
                <div style={{ textAlign: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 50, lineHeight: 1 }}>{active.emoji}</span>
                  <h3
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 800, color: active.color, marginTop: 10 }}
                  >{active.name}</h3>
                </div>
                <ul className="space-y-3 mt-4">
                  {active.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: active.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#444" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setActive(null)}
                  className="mt-6 w-full py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ background: `${active.color}1a`, color: active.color, border: `1.5px solid ${active.color}44` }}
                >✕ Close</button>
              </div>)
            ) : (
              /* Module list */
              (<div className="space-y-2.5">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: BRAND.orange }}
                >Click any module to explore</p>
                {MODULES.map((mod) => (
                  <div
                    key={mod.id}
                    onClick={() => toggle(mod)}
                    className="flex items-center gap-4 rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: "rgba(243,235,221,0.70)",
                      border: "1px solid rgba(247,148,29,0.20)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{mod.emoji}</span>
                    <div>
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: mod.color }}>{mod.name}</p>
                      <p style={{ fontSize: 11.5, color: "#888", marginTop: 1 }}>{mod.features.slice(0, 2).join(" • ")}</p>
                    </div>
                    <span style={{ marginLeft: "auto", fontSize: 14, color: mod.color, opacity: 0.7 }}>›</span>
                  </div>
                ))}
              </div>)
            )}
          </div>
        </div>

        {/* ── Mobile grid (hidden on lg+) ── */}
        <div className="lg:hidden mt-10">
          <div className="flex justify-center mb-6">
            <div
              style={{
                width: 110, height: 95,
                clipPath: CLIP,
                background: "linear-gradient(145deg, #f7941d, #c86000)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                filter: "drop-shadow(0 6px 16px rgba(247,148,29,0.40))",
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 900, color: "#fff" }}>ERP</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {MODULES.map((mod) => (
              <div
                key={mod.id}
                onClick={() => toggle(mod)}
                className="flex flex-col items-center"
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    width: 76, height: 66,
                    clipPath: CLIP,
                    background: active?.id === mod.id ? mod.color : "#F3EBDD",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
                    transition: "background 0.25s",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{mod.emoji}</span>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: mod.color, marginTop: 4, textAlign: "center" }}>{mod.name}</span>
              </div>
            ))}
          </div>

          {/* Mobile detail */}
          {active && (
            <div className="mt-6 rounded-2xl p-6" style={{ background: "#F3EBDD", border: `1.5px solid ${active.color}44` }}>
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontSize: 32 }}>{active.emoji}</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: active.color }}>{active.name}</h3>
              </div>
              <ul className="space-y-2">
                {active.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#555" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: active.color, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => setActive(null)} className="mt-4 text-sm font-semibold px-4 py-1.5 rounded-lg"
                style={{ background: `${active.color}18`, color: active.color }}>✕ Close</button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

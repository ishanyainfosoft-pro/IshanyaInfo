import { useState, useEffect, type ReactNode } from "react";
import ECommerce from "@assets/Gemini_Generated_Image_d845lld845lld845_1773862659154.png";
import Reports from "@assets/Gemini_Generated_Image_7s4wl87s4wl87s4w_1773862498200.png";
import Dashboard from "@assets/Gemini_Generated_Image_fuisz6fuisz6fuis_1773862498202.png";
import BillingSoftware from "@assets/Billing_Software_1773862569156.png";
import ComplaintManagement from "@assets/Complaint_Mgmt_1773862577083.png";
import MESDashboard from "@assets/MES_Dashboard_1773862589929.png";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const slides = [
  { image: Dashboard, title: "ERP Dashboard" },
  { image: Reports, title: "Reports" },
  { image: MESDashboard, title: "MES Dashboard" },
  { image: ECommerce, title: "E-Commerce" },
  { image: ComplaintManagement, title: "Complaint Management" },
  { image: BillingSoftware, title: "Billing Software" },
];

type Feature = { label: string; logo?: ReactNode };

const WhatsAppLogo = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SapLogo = () => (
  <span style={{
    fontSize: 9, fontWeight: 900, lineHeight: 1,
    background: "#0080A6", color: "#fff",
    padding: "2px 5px", borderRadius: 3,
    fontFamily: "'Arial', sans-serif",
    letterSpacing: "0.04em",
    flexShrink: 0,
  }}>SAP</span>
);

const TallyLogo = () => (
  <span style={{
    fontSize: 9, fontWeight: 900, lineHeight: 1,
    background: "#e8670a", color: "#fff",
    padding: "2px 5px", borderRadius: 3,
    fontFamily: "'Arial', sans-serif",
    letterSpacing: "0.02em",
    flexShrink: 0,
  }}>Tally</span>
);

const features: Feature[] = [
  { label: "No Subscription Fees" },
  { label: "Data Security" },
  { label: "Reliable Service Support" },
  { label: "SAP / S4 HANA Integration", logo: <SapLogo /> },
  { label: "No Hidden Costs" },
  { label: "Fully Customized" },
  { label: "WhatsApp Integration", logo: <WhatsAppLogo /> },
  { label: "Competitive Pricing" },
  { label: "Multi User, Multi Plant" },
  { label: "User Friendly" },
  { label: "Tally Integration", logo: <TallyLogo /> },
];

const BOX_H   = 50;
const GAP     = 10;
const PER     = BOX_H + GAP;   // 60px per slot
const VISIBLE = 9;
const MIDDLE  = 4;              // 0-indexed middle position (5th)
const ANIM_MS = 350;            // slide transition ms
const STEP_MS = 1700;           // interval between advances

export default function SlideShowSection() {
  const [current,     setCurrent]     = useState(0);
  const [autoPlay,    setAutoPlay]    = useState(true);
  const [windowStart, setWindowStart] = useState(0);
  const [sliding,     setSliding]     = useState(false);
  const [tickKey,     setTickKey]     = useState(0);   // changing key re-mounts = replays animation
  const [flashActive, setFlashActive] = useState(false);

  /* ── Slideshow auto-advance ── */
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [autoPlay]);

  /* ── Conveyor belt ── */
  useEffect(() => {
    const t = setInterval(() => {
      // 1. Start slide-up animation
      setSliding(true);

      setTimeout(() => {
        // 2. Teleport list back & advance window
        setWindowStart(p => (p + 1) % features.length);
        setSliding(false);

        // 3. Tick pop on new middle item
        setTickKey(k => k + 1);

        // 4. Flash glow shortly after tick
        setTimeout(() => {
          setFlashActive(true);
          setTimeout(() => setFlashActive(false), 500);
        }, 180);
      }, ANIM_MS);
    }, STEP_MS);
    return () => clearInterval(t);
  }, []);

  const prev = () => {
    setCurrent(p => (p - 1 + slides.length) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };
  const next = () => {
    setCurrent(p => (p + 1) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  /* VISIBLE + 1 items so new item slides in from bottom during animation */
  const visibleItems = Array.from({ length: VISIBLE + 1 }, (_, i) =>
    features[(windowStart + i) % features.length]
  );

  const containerH = VISIBLE * BOX_H + (VISIBLE - 1) * GAP;

  return (
    <section
      className="w-full relative"
      style={{ background: "transparent", paddingTop: 0, paddingBottom: 48, marginTop: -200 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">

          {/* ─── LEFT: Slideshow (aligned left) ─── */}
          <div
            className="w-full"
            style={{ flex: "2.2" }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/5", background: "#f4f4f4" }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-700 flex items-center justify-center"
                  style={{ opacity: i === current ? 1 : 0 }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
              ))}

              {/* Gradient top */}
              <div
                className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
                style={{ height: 80, background: "linear-gradient(to bottom, rgba(0,0,0,0.40), transparent)" }}
              />
              {/* Frame border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ border: "2px solid rgba(247,148,29,0.15)" }}
              />

              {/* Prev */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 shadow-lg transition-all"
                style={{ background: BRAND.orange, color: "#fff", fontSize: 24 }}
                aria-label="Previous slide"
              >‹</button>

              {/* Next */}
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 shadow-lg transition-all"
                style={{ background: BRAND.orange, color: "#fff", fontSize: 24 }}
                aria-label="Next slide"
              >›</button>

              {/* Title overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 z-10"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.40), transparent)" }}
              >
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {slides[current].title}
                </h3>
              </div>
            </div>

            {/* Dots — left-aligned */}
            <div className="flex justify-start gap-3 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setAutoPlay(false); setTimeout(() => setAutoPlay(true), 10000); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 36 : 10,
                    height: 10,
                    background: i === current ? BRAND.orange : "rgba(0,0,0,0.18)",
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ─── RIGHT: Vertical Conveyor Belt ─── */}
          <div
            className="w-full flex flex-col"
            style={{ flex: "0.85", paddingTop: 4, paddingRight: 15, marginLeft: "auto" }}
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-5">
              <div style={{ flex: 1, height: 1, background: "rgba(247,148,29,0.35)" }} />
              <span
                className="text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  background: "rgba(247,148,29,0.12)",
                  color: BRAND.orange,
                  border: "1px solid rgba(247,148,29,0.35)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Why Choose Us
              </span>
              <div style={{ flex: 1, height: 1, background: "rgba(247,148,29,0.35)" }} />
            </div>

            {/* Belt outer frame */}
            <div
              className="relative w-full"
              style={{
                height: containerH,
                overflow: "hidden",
                borderRadius: 18,
                border: "1.5px solid rgba(247,148,29,0.22)",
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Fade — top */}
              <div
                className="absolute top-0 left-0 right-0 pointer-events-none z-20"
                style={{ height: 64, background: "linear-gradient(to bottom, rgba(218,238,238,0.96), transparent)" }}
              />
              {/* Fade — bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none z-20"
                style={{ height: 64, background: "linear-gradient(to top, rgba(210,218,218,0.96), transparent)" }}
              />

              {/* Left track stripe */}
              <div
                className="absolute left-0 top-0 bottom-0 z-30 pointer-events-none"
                style={{
                  width: 4,
                  background: `linear-gradient(to bottom,
                    transparent 0%,
                    rgba(247,148,29,0.3) 20%,
                    ${BRAND.orange} 45%,
                    ${BRAND.orange} 55%,
                    rgba(247,148,29,0.3) 80%,
                    transparent 100%
                  )`,
                }}
              />

              {/* Middle spotlight bar */}
              <div
                className="absolute left-0 right-0 pointer-events-none z-10"
                style={{
                  top: MIDDLE * PER,
                  height: BOX_H,
                  background: flashActive
                    ? "rgba(247,148,29,0.16)"
                    : "rgba(247,148,29,0.05)",
                  borderTop:    `1.5px solid rgba(247,148,29,${flashActive ? "0.7" : "0.3"})`,
                  borderBottom: `1.5px solid rgba(247,148,29,${flashActive ? "0.7" : "0.3"})`,
                  transition: "background 0.2s, border-color 0.2s",
                }}
              />

              {/* Scrolling track */}
              <div
                style={{
                  position: "absolute",
                  left: 0, right: 0, top: 0,
                  transform: sliding ? `translateY(-${PER}px)` : "translateY(0)",
                  transition: sliding ? `transform ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1)` : "none",
                }}
              >
                {visibleItems.map((item, i) => {
                  const isMid = i === MIDDLE;
                  return (
                    <div
                      key={i}
                      className={isMid && flashActive ? "flash-box" : ""}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        paddingLeft: 16,
                        paddingRight: 16,
                        height: BOX_H,
                        marginBottom: i < visibleItems.length - 1 ? GAP : 0,
                        borderRadius: 11,
                        background: isMid
                          ? (flashActive ? "rgba(247,148,29,0.20)" : "rgba(247,148,29,0.11)")
                          : "rgba(255,255,255,0.55)",
                        border: isMid
                          ? `1.5px solid rgba(247,148,29,${flashActive ? "0.65" : "0.38"})`
                          : "1px solid rgba(255,255,255,0.55)",
                        boxShadow: isMid
                          ? "0 4px 18px rgba(247,148,29,0.22)"
                          : "0 1px 4px rgba(0,0,0,0.05)",
                        transform: isMid ? "scale(1.045)" : "scale(1)",
                        transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {/* Bullet / Tick circle */}
                      <span
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isMid ? BRAND.orange : "rgba(247,148,29,0.18)",
                          boxShadow: isMid ? "0 2px 10px rgba(247,148,29,0.40)" : "none",
                          transition: "background 0.25s, box-shadow 0.25s",
                        }}
                      >
                        {isMid ? (
                          /* Re-mounting via key forces animation replay each step */
                          <span
                            key={tickKey}
                            className="tick-pop"
                            style={{
                              color: "#fff",
                              fontSize: 15,
                              fontWeight: "bold",
                              display: "inline-block",
                              lineHeight: 1,
                            }}
                          >✓</span>
                        ) : (
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: BRAND.orange, display: "block" }} />
                        )}
                      </span>

                      {/* Label + optional logo */}
                      <span
                        style={{
                          display: "flex", alignItems: "center", gap: 7,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 13.5,
                          fontWeight: isMid ? 700 : 500,
                          color: isMid ? "#1a1a1a" : "#555",
                          transition: "color 0.25s, font-weight 0.25s",
                          userSelect: "none",
                          flex: 1,
                        }}
                      >
                        {item.label}
                        {item.logo && item.logo}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

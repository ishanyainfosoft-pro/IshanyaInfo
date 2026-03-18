import { useState, useEffect } from "react";
import Dashboard from "@/assets/Dashboard.png";
import Report from "@/assets/Report.png";
import ECommerce from "@/assets/ECommerce.png";
import ComplaintManagement from "@/assets/ComplaintManagement.png";
import MESDashboard from "@/assets/MESDashboard.png";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const slides = [
  { image: Dashboard, title: "Dashboard" },
  { image: Report, title: "Report" },
  { image: ECommerce, title: "E-Commerce" },
  { image: ComplaintManagement, title: "Complaint Management" },
  { image: MESDashboard, title: "MES Dashboard" },
];

const features = [
  "No Subscription Fees",
  "Data Security",
  "Reliable Service Support",
  "SAP / S4 HANA Integration",
  "No Hidden Costs",
  "Fully Customized",
  "WhatsApp Integration",
  "Competitive Pricing",
  "Multi User, Multi Plant",
  "User Friendly",
  "Tally Integration",
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
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ─── LEFT: Slideshow (aligned left) ─── */}
          <div
            className="w-full"
            style={{ flex: "1.6" }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/3", background: "#000" }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0 }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}

              {/* Gradient top */}
              <div
                className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
                style={{ height: 80, background: "linear-gradient(to bottom, rgba(0,0,0,0.95), transparent)" }}
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
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)" }}
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
            style={{ flex: "1", paddingTop: 4, paddingRight: 15 }}
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

                      {/* Label */}
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 13.5,
                          fontWeight: isMid ? 700 : 500,
                          color: isMid ? "#1a1a1a" : "#555",
                          transition: "color 0.25s, font-weight 0.25s",
                          userSelect: "none",
                        }}
                      >
                        {item}
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

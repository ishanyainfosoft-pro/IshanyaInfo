import { useState, useEffect } from "react";
import Dashboard from "@/assets/Dashboard.png";
import Report from "@/assets/Report.png";
import ECommerce from "@/assets/ECommerce.png";
import ComplaintManagement from "@/assets/ComplaintManagement.png";
import MESDashboard from "@/assets/MESDashboard.png";

const BRAND = {
  orange: "#F7941D",
  white: "#FFFFFF",
};

const slides = [
  { image: Dashboard, title: "Dashboard" },
  { image: Report, title: "Report" },
  { image: ECommerce, title: "E-Commerce" },
  { image: ComplaintManagement, title: "Complaint Management" },
  { image: MESDashboard, title: "MES Dashboard" },
];

export default function SlideShowSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section
      className="w-full py-4 sm:py-6 flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #000000 0%, #1a3a3a 50%, #000000 100%)`,
      }}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ width: "65%" }}>
        {/* Main slide container */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
          style={{
            aspectRatio: "4/3",
            background: "#fafafa",
          }}
        >
          {/* Slides */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700 flex items-center justify-center"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  maxWidth: "105%",
                  maxHeight: "105%",
                  width: "auto",
                  height: "auto",
                  aspectRatio: "3/2",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}

          {/* Gradient overlay on top */}
          <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none" style={{ height: "80px", background: "linear-gradient(to bottom, rgba(0,0,0,0.95), transparent)" }} />

          {/* Floating frame effect */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: `2px solid rgba(247,148,29,0.15)`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.2)`,
            }}
          />

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            style={{ background: BRAND.orange, color: BRAND.white }}
            aria-label="Previous slide"
          >
            <span style={{ fontSize: "24px" }}>‹</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            style={{ background: BRAND.orange, color: BRAND.white }}
            aria-label="Next slide"
          >
            <span style={{ fontSize: "24px" }}>›</span>
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)" }}>
            <h3
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {slides[current].title}
            </h3>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 10000);
              }}
              className="rounded-full transition-all duration-300 hover:scale-125"
              style={{
                width: i === current ? "36px" : "10px",
                height: "10px",
                background: i === current ? BRAND.orange : "rgba(255,255,255,0.3)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

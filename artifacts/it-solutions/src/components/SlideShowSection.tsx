import { useState, useEffect } from "react";

const BRAND = {
  orange: "#F7941D",
  white: "#FFFFFF",
};

const slides = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    title: "Manufacturing Dashboard",
    alt: "Manufacturing Dashboard",
  },
  {
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80",
    title: "Production Monitoring",
    alt: "Production Monitoring System",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "Quality Management",
    alt: "Quality Management Interface",
  },
  {
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    title: "Real-Time Analytics",
    alt: "Real-Time Analytics",
  },
];

export default function SlideShowSection() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <section className="py-10 sm:py-14" style={{ background: "#f9fafb" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group" style={{ height: "400px" }}>
          {/* Slides */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            style={{ background: "rgba(247,148,29,0.9)" }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <span style={{ color: BRAND.white, fontSize: "20px" }}>‹</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            style={{ background: "rgba(247,148,29,0.9)" }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <span style={{ color: BRAND.white, fontSize: "20px" }}>›</span>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setAutoPlay(false);
                }}
                className="rounded-full transition-all"
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  background: i === current ? BRAND.orange : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

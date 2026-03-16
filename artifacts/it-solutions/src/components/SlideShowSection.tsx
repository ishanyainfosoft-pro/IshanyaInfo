import { useState, useEffect } from "react";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  white: "#FFFFFF",
};

const slides = [
  { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90", title: "Dashboard" },
  { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90", title: "Report" },
  { image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=90", title: "E-Commerce" },
  { image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&q=90", title: "Complaint Management" },
  { image: "https://images.unsplash.com/photo-1633356122544-f134324ef6f2?w=1200&q=90", title: "MES Dashboard" },
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
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,153,153,0.1) 50%, rgba(0,0,0,0.95) 100%)",
      }}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Blurred background slide */}
      {slides.map((slide, i) => (
        <div
          key={`bg-${i}`}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: i === current ? 1 : 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px) scale(1.1)",
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          {/* Main slide container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
            {/* Slides */}
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                />
              </div>
            ))}

            {/* Floating frame effect */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                border: `2px solid rgba(247,148,29,0.2)`,
                boxShadow: `0 0 60px rgba(0,153,153,0.15), inset 0 0 30px rgba(193,39,122,0.05)`,
              }}
            />

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 hover:scale-110"
              style={{ background: BRAND.orange, color: BRAND.white }}
              aria-label="Previous slide"
            >
              <span style={{ fontSize: "24px" }}>‹</span>
            </button>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 hover:scale-110"
              style={{ background: BRAND.orange, color: BRAND.white }}
              aria-label="Next slide"
            >
              <span style={{ fontSize: "24px" }}>›</span>
            </button>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white"
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

          {/* Slide counter */}
          <div className="text-center mt-6">
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
              {current + 1} / {slides.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

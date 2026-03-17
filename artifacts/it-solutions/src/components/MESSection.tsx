const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};


export default function MESSection() {
  return (
    <section
      id="mes-offering"
      className="py-14 sm:py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">

          {/* Image */}
          <div className="relative pb-8 w-full max-w-2xl">
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl opacity-20" style={{ background: BRAND.wine }} />
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(193,39,122,0.35)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(193,39,122,0.15)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                alt="MES Manufacturing Dashboard"
                className="w-full h-72 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80";
                }}
              />
            </div>
            <div
              className="absolute -bottom-2 -right-4 sm:-right-6 rounded-2xl px-6 py-4"
              style={{ background: BRAND.white, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: BRAND.wine }}>+40%</div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: BRAND.gray }}>Productivity Gain</div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(193,39,122,0.1)" }}>🏭</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

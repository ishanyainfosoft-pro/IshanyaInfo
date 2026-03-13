const BRAND = {
  teal: "#009999",
  tealDeep: "#003535",
  tealMid: "#005050",
  orange: "#F7941D",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const leaders = [
  {
    name: "Mrunal Kulkarni",
    role: "Director / Founder",
    image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/team_1.jpg",
    accentColor: BRAND.teal,
    points: [
      "20+ years of IT / ITES Experience",
      "Full Stack Development",
      "Customized applications across India & APAC",
    ],
    tagLabel: "Tech Stack",
    tags: ["React JS", "Node JS", "Python", "SQL Server", "Flutter"],
  },
  {
    name: "Shailendra Kulkarni",
    role: "Partner",
    image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/team_2.jpg",
    accentColor: BRAND.orange,
    points: [
      "25+ years Industrial Experience",
      "VP Mfg / Plant Head / Board Member",
      "Director of Operation Excellence",
    ],
    tagLabel: "Specialization",
    tags: ["Process Digitalization", "MES", "Quality Systems", "Customer Interface"],
  },
];

const additionalTeam = [
  "UI/UX Specialist",
  "API Specialist",
  "Data / Security Architect",
  "QA Test Engineer",
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-20 sm:py-28"
      style={{ background: BRAND.tealDeep }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(0,153,153,0.18)", color: BRAND.teal }}
          >
            Our Leadership
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Backed by{" "}
            <span style={{ color: BRAND.orange }}>Subject Matter Experts</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            We are backed up with a strong, committed team of subject matter experts dedicated to delivering excellence.
          </p>
        </div>

        {/* Leader cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: BRAND.tealMid,
                border: `1px solid rgba(0,153,153,0.2)`,
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${BRAND.tealDeep} 0%, transparent 60%)`,
                  }}
                />
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: leader.accentColor }}
                />
                <div className="absolute bottom-4 left-5">
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {leader.name}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: leader.accentColor }}>
                    {leader.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="mb-5 space-y-2">
                  {leader.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: leader.accentColor }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: leader.accentColor }}
                >
                  {leader.tagLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {leader.tags.map((tag, k) => (
                    <span
                      key={k}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: `${leader.accentColor}20`,
                        color: leader.accentColor,
                        border: `1px solid ${leader.accentColor}35`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional roles */}
        <div className="flex flex-wrap justify-center gap-3">
          {additionalTeam.map((role, i) => (
            <div
              key={i}
              className="px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{
                background: "rgba(0,153,153,0.12)",
                border: "1px solid rgba(0,153,153,0.2)",
                color: BRAND.white,
              }}
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

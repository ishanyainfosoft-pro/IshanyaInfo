const leaders = [
  {
    name: "Mrunal Kulkarni",
    role: "Director / Founder",
    image: "https://pdf-text-extractor--aviratk.replit.app/src/assets/images/team_1.jpg",
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
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(96,165,250,0.15)", color: "#60a5fa" }}
          >
            Our Leadership
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Backed by Subject Matter Experts
          </h2>
          <p className="text-blue-200/70 max-w-2xl mx-auto">
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
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
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
                    background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-5">
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {leader.name}
                  </h3>
                  <p className="text-blue-300 text-sm">{leader.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="mb-5 space-y-2">
                  {leader.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-blue-100/80">
                      <span className="text-blue-400 mt-0.5">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                    {leader.tagLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leader.tags.map((tag, k) => (
                      <span
                        key={k}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          background: "rgba(96,165,250,0.12)",
                          color: "#93c5fd",
                          border: "1px solid rgba(96,165,250,0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional team roles */}
        <div className="flex flex-wrap justify-center gap-3">
          {additionalTeam.map((role, i) => (
            <div
              key={i}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-white"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
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

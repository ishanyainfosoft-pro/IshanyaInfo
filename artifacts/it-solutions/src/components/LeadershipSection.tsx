import mrunalImg from "@/assets/Mrunal_Headshot_Mar_2026_1773665556253.png";
import shailendraImg from "@/assets/Shailendra_New_Mar_2026_Small_1773665583989.png";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const leaders = [
  {
    name: "Mrunal Kulkarni",
    role: "Director / Founder",
    image: mrunalImg,
    accent: BRAND.orange,
    points: ["20+ years of IT / ITES Experience", "Full Stack Development", "Customized applications across India & APAC"],
    tagLabel: "Tech Stack",
    tags: ["React JS", "Node JS", "Python", "SQL Server", "Flutter", "ASP.Net"],
  },
  {
    name: "Shailendra Kulkarni",
    role: "Partner",
    image: shailendraImg,
    accent: BRAND.teal,
    points: ["25+ years Industrial Experience", "VP Mfg / Plant Head / Board Member", "Director of Operation Excellence"],
    tagLabel: "Specialization",
    tags: ["Process Digitalization", "MES", "Quality Systems", "Customer Interface"],
  },
];

const additionalTeam = ["UI/UX Specialist", "API Specialist", "Data / Security Architect", "QA Test Engineer"];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 sm:py-28 pt-[40px] pb-[122px]" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(247,148,29,0.12)", color: BRAND.orange }}
          >
            About Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: BRAND.white }}
          >
            A <span style={{ color: BRAND.orange }}>Trusted Software Solution</span> Provider Since 2010
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(0,0,0,0.1)", border: `1px solid rgba(247,148,29,0.15)` }}
            >
              <div className="relative overflow-hidden" style={{ height: "420px" }}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)` }} />
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: leader.accent }} />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{leader.name}</h3>
                  <p className="text-sm mt-0.5" style={{ color: leader.accent }}>{leader.role}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="mb-5 space-y-2">
                  {leader.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: leader.accent }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: leader.accent }}>{leader.tagLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {leader.tags.map((tag, k) => (
                    <span key={k} className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ background: `${leader.accent}20`, color: leader.accent, border: `1px solid ${leader.accent}35` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2
          className="sm:text-3xl font-bold text-white text-center mb-4 text-[25px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
        >
          Our Team Of{" "}
          <span style={{ color: BRAND.orange }}>Subject Matter Experts</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {additionalTeam.map((role, i) => (
            <div key={i} className="px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: "rgba(247,148,29,0.1)", border: "1px solid rgba(247,148,29,0.18)", color: BRAND.white }}>
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

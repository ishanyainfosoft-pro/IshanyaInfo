import mrunalImg from "@/assets/Mrunal_Headshot_Mar_2026_1773665556253.png";
import shailendraImg from "@/assets/Shailendra_New_Mar_2026_Small_1773665583989.png";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
};

const leaders = [
  {
    name: "Mrunal Kulkarni",
    role: "Director / Founder",
    image: mrunalImg,
    accent: BRAND.orange,
    points: ["20+ years of IT / ITES Experience", "Full Stack Development Expert", "ERP Architect / Consultant"],
    tagLabel: "Tech Stack",
    tags: ["React JS", "Node JS", "Python", "SQL Server", "Flutter", "ASP.Net"],
  },
  {
    name: "Shailendra Kulkarni",
    role: "Partner",
    image: shailendraImg,
    accent: BRAND.teal,
    points: ["25+ years Industrial Experience as Senior Leader", "Hands-on experience as Plant Head of a German MNC", "Regional Director of Operation Excellence for Asia"],
    tagLabel: "Specialization",
    tags: ["Process Digitalization", "OpEx Consultant", "MES Architect", "Industry 4.0"],
  },
];

const additionalTeam = ["UI/UX Specialist", "API Specialist", "Data / Security Architect", "QA Test Engineer"];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-10 sm:py-14 pt-[40px] pb-[60px]">
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
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}
          >
            <span style={{ color: BRAND.teal }}>A Trusted Software Solution Provider Since 2010</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: `1px solid rgba(247,148,29,0.18)`,
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              }}
            >
              <div className="h-1 w-full" style={{ background: leader.accent }} />
              <div className="flex flex-col items-start pt-6 pb-2 px-6">
                <div className="rounded-xl overflow-hidden mb-4" style={{ width: "160px", height: "160px" }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}>{leader.name}</h3>
                <p className="text-sm mt-1 mb-2" style={{ color: leader.accent }}>{leader.role}</p>
              </div>
              <div className="p-6 pt-2">
                <ul className="mb-5 space-y-2">
                  {leader.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#555555" }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: leader.accent }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: leader.accent }}>{leader.tagLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {leader.tags.map((tag, k) => (
                    <span key={k} className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ background: `${leader.accent}18`, color: leader.accent, border: `1px solid ${leader.accent}40` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2
          className="sm:text-3xl font-bold text-center mb-4 text-[25px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}
        >
          <span style={{ color: BRAND.orange }}>Our Team Of Subject Matter Experts</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {additionalTeam.map((role, i) => (
            <div key={i} className="px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(247,148,29,0.22)", color: "#333333", backdropFilter: "blur(6px)" }}>
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

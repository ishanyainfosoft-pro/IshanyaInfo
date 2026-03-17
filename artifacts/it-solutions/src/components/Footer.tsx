const BRAND = { orange: "#F7941D", wine: "#C1277A", white: "#FFFFFF" };

export default function Footer() {
  return (
    <footer className="py-6 text-center" style={{ background: "#070400", borderTop: "1px solid rgba(247,148,29,0.12)" }}>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
        © 2026 Ishanya Infosoft, All Rights Reserved
      </p>
      <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
        Developed By Ishanya Infosoft
      </p>
    </footer>
  );
}

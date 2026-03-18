const BRAND = { orange: "#F7941D", wine: "#C1277A", white: "#FFFFFF" };

export default function Footer() {
  return (
    <footer className="py-6 text-center" style={{ background: "#000000", borderTop: "1px solid rgba(247,148,29,0.4)" }}>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
        © 2026 Ishanya Infosoft, All Rights Reserved
      </p>
      <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
        Developed By Ishanya Infosoft
      </p>
    </footer>
  );
}

const BRAND = { orange: "#F7941D", wine: "#C1277A", white: "#FFFFFF" };

export default function Footer() {
  return (
    <footer className="py-6 text-center" style={{ background: "#070400", borderTop: "1px solid rgba(247,148,29,0.12)" }}>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
        Made with <span style={{ color: BRAND.wine }}>❤</span>{" "}
        <span style={{ color: "rgba(255,255,255,0.45)" }}>Replit</span>
      </p>
    </footer>
  );
}

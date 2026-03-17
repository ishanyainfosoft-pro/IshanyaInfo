const BRAND = { orange: "#F7941D", wine: "#C1277A", teal: "#009999", white: "#FFFFFF" };

export default function Footer() {
  return (
    <footer
      className="py-6 text-center"
      style={{
        background: "#070400",
        borderTop: `1px solid rgba(247,148,29,0.15)`,
      }}
    >
      <p
        className="text-sm"
        style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif" }}
      >
        © 2026 Ishanya Infosoft, All Rights Reserved
      </p>
      <p
        className="text-sm mt-2"
        style={{ color: "rgba(255,255,255,0.38)", fontFamily: "'Inter', sans-serif" }}
      >
        Developed By{" "}
        <span style={{ color: BRAND.orange }}>Ishanya Infosoft</span>
      </p>
    </footer>
  );
}

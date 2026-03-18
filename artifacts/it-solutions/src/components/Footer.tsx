const BRAND = { orange: "#F7941D", wine: "#C1277A", white: "#FFFFFF" };

export default function Footer() {
  return (
    <footer className="py-6 text-center" style={{ background: "transparent", borderTop: "1px solid rgba(247,148,29,0.3)" }}>
      <p className="text-sm" style={{ color: "#6D6E71" }}>
        © 2026 Ishanya Infosoft, All Rights Reserved
      </p>
      <p className="text-sm mt-2" style={{ color: "#aaaaaa" }}>
        Developed By Ishanya Infosoft
      </p>
    </footer>
  );
}

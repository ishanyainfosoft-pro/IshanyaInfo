export default function Footer() {
  return (
    <footer
      className="py-6 text-center"
      style={{ background: "#0a1220", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
        Made with{" "}
        <span className="text-red-400">❤</span>{" "}
        <span style={{ color: "rgba(255,255,255,0.5)" }}>Replit</span>
      </p>
    </footer>
  );
}

const BRAND = {
  teal: "#009999",
  tealDeep: "#002424",
  orange: "#F7941D",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

export default function Footer() {
  return (
    <footer
      className="py-6 text-center"
      style={{
        background: BRAND.tealDeep,
        borderTop: "1px solid rgba(0,153,153,0.15)",
      }}
    >
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
        Made with <span style={{ color: BRAND.wine }}>❤</span>{" "}
        <span style={{ color: "rgba(255,255,255,0.5)" }}>Replit</span>
      </p>
    </footer>
  );
}

import { useState, useEffect } from "react";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};


const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(247,148,29,0.3)",
  color: "#fff",
  borderRadius: 10,
  padding: "11px 14px",
  fontSize: 14,
  width: "100%",
  outline: "none",
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ fullName: "", workEmail: "", phone: "", requirements: "" });
  const [submitted, setSubmitted] = useState(false);

  /* Lock body scroll while modal is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      /* Reset form when modal closes */
      setTimeout(() => { setForm({ fullName: "", workEmail: "", phone: "", requirements: "" }); setSubmitted(false); }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Close on Escape key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: "rgba(0,0,0,0.1)",
          border: "1px solid rgba(247,148,29,0.25)",
          maxHeight: "90vh",
          overflowY: "auto",
          animation: "modalSlideIn 0.25s ease-out",
        }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-5" style={{ borderBottom: "1px solid rgba(247,148,29,0.15)" }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1 }}
          >
            ✕
          </button>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ background: "rgba(247,148,29,0.2)", color: BRAND.orange }}
          >
            Contact Us
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            <span style={{ color: BRAND.orange }}>Let's start the conversation</span>
          </h2>
          <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Thank You!</h3>
              <p style={{ color: "rgba(255,255,255,0.5)" }}>We've received your message and will get back to you shortly.</p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: BRAND.orange }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">

              {[
                { key: "fullName", type: "text", placeholder: "Full Name", required: true },
                { key: "workEmail", type: "email", placeholder: "Work Email", required: true },
                { key: "phone", type: "tel", placeholder: "Phone Number", required: false },
              ].map(({ key, type, placeholder, required }) => (
                <div key={key}>
                  <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              ))}

              <div>
                <textarea
                  placeholder="Describe your requirements"
                  rows={3}
                  className="resize-none"
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: BRAND.orange, boxShadow: "0 4px 20px rgba(247,148,29,0.35)" }}
              >
                Submit
              </button>

              <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                By clicking Submit, you agree to our{" "}
                <a href="#" className="underline" style={{ color: "rgba(247,148,29,0.7)" }}>Privacy Policy</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

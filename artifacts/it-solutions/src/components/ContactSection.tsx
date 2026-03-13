import { useState } from "react";

const BRAND = {
  teal: "#009999",
  tealDeep: "#003535",
  tealMid: "#004d4d",
  orange: "#F7941D",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const industries = [
  "Manufacturing", "Information Technology", "Retail & Distribution",
  "Food & Beverages", "Healthcare", "Finance", "Other",
];

const companySizes = [
  "Startup (1-50)", "Small (51-200)", "Medium (201-1000)", "Large (1000+)",
];

const inputStyle = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(0,153,153,0.3)",
  color: BRAND.white,
  borderRadius: 12,
  padding: "12px 16px",
  fontSize: 14,
  width: "100%",
  outline: "none",
};

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: "", workEmail: "", phone: "", website: "",
    industry: "", companySize: "", requirements: "", robot: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28"
      style={{ background: BRAND.tealDeep }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(0,153,153,0.2)", color: BRAND.teal }}
          >
            Contact
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Let's start the{" "}
            <span style={{ color: BRAND.orange }}>conversation</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl p-12 text-center"
            style={{
              background: "rgba(0,153,153,0.1)",
              border: "1px solid rgba(0,153,153,0.2)",
            }}
          >
            <div className="text-5xl mb-4">✅</div>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Thank You!
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)" }}>
              We've received your message and will get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 space-y-5"
            style={{
              background: BRAND.tealMid,
              border: "1px solid rgba(0,153,153,0.25)",
            }}
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Full Name
              </label>
              <input
                type="text" placeholder="Full Name" required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Work Email
              </label>
              <input
                type="email" placeholder="Work Email" required
                value={form.workEmail}
                onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Phone Number
              </label>
              <input
                type="tel" placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Company Website
              </label>
              <input
                type="url" placeholder="Company Website"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Industry
              </label>
              <select
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className="appearance-none"
                style={{ ...inputStyle, color: form.industry ? BRAND.white : "rgba(255,255,255,0.4)" }}
              >
                <option value="">Select Industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind} style={{ background: BRAND.tealMid, color: BRAND.white }}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Company Size */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Company Size
              </label>
              <select
                value={form.companySize}
                onChange={(e) => setForm({ ...form, companySize: e.target.value })}
                className="appearance-none"
                style={{ ...inputStyle, color: form.companySize ? BRAND.white : "rgba(255,255,255,0.4)" }}
              >
                <option value="">Select Company Size</option>
                {companySizes.map((s) => (
                  <option key={s} value={s} style={{ background: BRAND.tealMid, color: BRAND.white }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                Describe your requirements
              </label>
              <textarea
                placeholder="Describe your requirements" rows={4}
                value={form.requirements}
                onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                className="resize-none"
                style={inputStyle}
              />
            </div>

            {/* Captcha */}
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer flex-shrink-0 transition-all"
                style={{
                  borderColor: form.robot ? BRAND.teal : "rgba(255,255,255,0.25)",
                  background: form.robot ? BRAND.teal : "transparent",
                }}
                onClick={() => setForm({ ...form, robot: !form.robot })}
              >
                {form.robot && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                I'm not a robot (Captcha verification)
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90"
              style={{
                background: BRAND.orange,
                boxShadow: "0 4px 20px rgba(247,148,29,0.35)",
              }}
            >
              Submit
            </button>

            <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              By clicking Submit button, you agree to our{" "}
              <a href="#" className="underline" style={{ color: "rgba(0,153,153,0.9)" }}>
                Privacy Policy
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

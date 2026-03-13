import { useState } from "react";

const industries = [
  "Manufacturing",
  "Information Technology",
  "Retail & Distribution",
  "Food & Beverages",
  "Healthcare",
  "Finance",
  "Other",
];

const companySizes = [
  "Startup (1-50)",
  "Small (51-200)",
  "Medium (201-1000)",
  "Large (1000+)",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    requirements: "",
    robot: false,
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
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(96,165,250,0.15)", color: "#60a5fa" }}
          >
            Contact
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            Let's start the conversation
          </h2>
          <p className="text-blue-200/70">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl p-12 text-center"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="text-5xl mb-4">✅</div>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Thank You!
            </h3>
            <p className="text-blue-200/70">We've received your message and will get back to you shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 space-y-5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              />
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">Work Email</label>
              <input
                type="email"
                placeholder="Work Email"
                value={form.workEmail}
                onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              />
            </div>

            {/* Company Website */}
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">Company Website</label>
              <input
                type="url"
                placeholder="Company Website"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">Industry</label>
              <select
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: form.industry ? "white" : "rgba(255,255,255,0.4)",
                }}
              >
                <option value="">Select Industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind} style={{ background: "#1e3a5f", color: "white" }}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Company Size */}
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">Company Size</label>
              <select
                value={form.companySize}
                onChange={(e) => setForm({ ...form, companySize: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: form.companySize ? "white" : "rgba(255,255,255,0.4)",
                }}
              >
                <option value="">Select Company Size</option>
                {companySizes.map((s) => (
                  <option key={s} value={s} style={{ background: "#1e3a5f", color: "white" }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">
                Describe your requirements
              </label>
              <textarea
                placeholder="Describe your requirements"
                value={form.requirements}
                onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              />
            </div>

            {/* Captcha checkbox */}
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer flex-shrink-0"
                style={{
                  borderColor: form.robot ? "#1a56db" : "rgba(255,255,255,0.25)",
                  background: form.robot ? "#1a56db" : "transparent",
                }}
                onClick={() => setForm({ ...form, robot: !form.robot })}
              >
                {form.robot && <span className="text-white text-xs">✓</span>}
              </div>
              <span className="text-sm text-blue-200/70">I'm not a robot (Captcha verification)</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)",
                boxShadow: "0 4px 20px rgba(26,86,219,0.4)",
              }}
            >
              Submit
            </button>

            <p className="text-center text-xs text-blue-200/50">
              By clicking Submit button, you agree to our{" "}
              <a href="#" className="underline text-blue-300/70 hover:text-blue-300">
                Privacy Policy
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

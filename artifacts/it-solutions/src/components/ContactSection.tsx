import { useState, useEffect } from "react";
import contactDetailsImg from "@assets/image_1773396456226.png";

const BRAND = {
  orange: "#F7941D",
  orangeDark: "#0d0800",
  orangeMid: "#1f1200",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const industries = ["Manufacturing", "Information Technology", "Retail & Distribution", "Food & Beverages", "Healthcare", "Finance", "Other"];
const companySizes = ["Startup (1-50)", "Small (51-200)", "Medium (201-1000)", "Large (1000+)"];

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(247,148,29,0.28)",
  color: "#fff",
  borderRadius: 12,
  padding: "12px 16px",
  fontSize: 14,
  width: "100%",
  outline: "none",
};

export default function ContactSection() {
  const [form, setForm] = useState({ fullName: "", workEmail: "", phone: "", website: "", industry: "", companySize: "", requirements: "", robot: false });
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setShowForm(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: BRAND.orangeDark }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Details + Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details Side */}
          <div className="flex flex-col items-center lg:items-start">
            <img src={contactDetailsImg} alt="Contact Details" className="max-w-xs w-full" />
          </div>

          {/* Form Side */}
          <div>
            {showForm && (
              <>
                <div className="text-center lg:text-left mb-8" style={{ animation: "fadeIn 0.5s ease-in" }}>
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ background: "rgba(247,148,29,0.2)", color: BRAND.orange }}>
                    Contact
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}>
                    Let's start the{" "}<span style={{ color: BRAND.orange }}>conversation</span>
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.45)" }}>Fill out the form below and we'll get back to you shortly</p>
                </div>

                {submitted ? (
                  <div className="rounded-2xl p-12 text-center" style={{ background: "rgba(247,148,29,0.08)", border: "1px solid rgba(247,148,29,0.2)" }}>
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Thank You!</h3>
                    <p style={{ color: "rgba(255,255,255,0.5)" }}>We've received your message and will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="rounded-2xl p-8 space-y-5"
                    style={{ background: BRAND.orangeMid, border: "1px solid rgba(247,148,29,0.2)" }}>

                    {[
                      { label: "Full Name", key: "fullName", type: "text", placeholder: "Full Name", required: true },
                      { label: "Work Email", key: "workEmail", type: "email", placeholder: "Work Email", required: true },
                      { label: "Phone Number", key: "phone", type: "tel", placeholder: "Phone Number", required: false },
                      { label: "Company Website", key: "website", type: "url", placeholder: "Company Website", required: false },
                    ].map(({ label, key, type, placeholder, required }) => (
                      <div key={key}>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.65)" }}>{label}</label>
                        <input type={type} placeholder={placeholder} required={required}
                          value={(form as any)[key]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          style={inputStyle} />
                      </div>
                    ))}

                    {[
                      { label: "Industry", key: "industry", options: industries, placeholder: "Select Industry" },
                      { label: "Company Size", key: "companySize", options: companySizes, placeholder: "Select Company Size" },
                    ].map(({ label, key, options, placeholder }) => (
                      <div key={key}>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.65)" }}>{label}</label>
                        <select className="appearance-none" value={(form as any)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          style={{ ...inputStyle, color: (form as any)[key] ? "#fff" : "rgba(255,255,255,0.38)" }}>
                          <option value="">{placeholder}</option>
                          {options.map((o) => <option key={o} value={o} style={{ background: BRAND.orangeMid }}>{o}</option>)}
                        </select>
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.65)" }}>Describe your requirements</label>
                      <textarea placeholder="Describe your requirements" rows={4} className="resize-none"
                        value={form.requirements}
                        onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                        style={inputStyle} />
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer flex-shrink-0 transition-all"
                        style={{ borderColor: form.robot ? BRAND.orange : "rgba(255,255,255,0.22)", background: form.robot ? BRAND.orange : "transparent" }}
                        onClick={() => setForm({ ...form, robot: !form.robot })}>
                        {form.robot && <span className="text-white text-xs font-bold">✓</span>}
                      </div>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>I'm not a robot (Captcha verification)</span>
                    </div>

                    <button type="submit" className="w-full py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: BRAND.orange, boxShadow: "0 4px 20px rgba(247,148,29,0.35)" }}>
                      Submit
                    </button>

                    <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                      By clicking Submit button, you agree to our{" "}
                      <a href="#" className="underline" style={{ color: "rgba(247,148,29,0.8)" }}>Privacy Policy</a>
                    </p>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

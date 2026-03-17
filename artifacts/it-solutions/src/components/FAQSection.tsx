import { useState, useEffect, useRef } from "react";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const faqs = [
  {
    question: "What makes your ERP system customizable?",
    answer: "Our ERP system is built with a modular architecture that allows us to customize every aspect according to your business requirements. We work closely with your team to understand your processes and configure the system accordingly.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation timelines vary based on complexity and scope. Most projects range from 3-8 months. We provide a detailed project plan during the discovery phase to give you accurate estimates.",
  },
  {
    question: "Do you offer training and support?",
    answer: "Yes, we provide comprehensive training programs for your team and ongoing 24/7 technical support. Our support team is available via phone, email, and live chat to assist with any issues.",
  },
  {
    question: "Can the system integrate with our existing software?",
    answer: "Absolutely. Our ERP system can integrate with most existing software through APIs and custom connectors. We assess your current tech stack and design integration solutions accordingly.",
  },
  {
    question: "What about data security and compliance?",
    answer: "Security is paramount. We implement enterprise-grade encryption, regular backups, role-based access control, and comply with ISO 27001, GDPR, and industry-specific regulations.",
  },
  {
    question: "Is cloud hosting available?",
    answer: "Yes, we offer both on-premises and cloud-based deployment options. Cloud hosting provides benefits like scalability, automatic updates, and reduced infrastructure costs.",
  },
  {
    question: "How do you handle system upgrades?",
    answer: "We provide scheduled upgrades with zero downtime for cloud deployments. For on-premises installations, we coordinate with your team to ensure smooth transitions.",
  },
  {
    question: "What reporting capabilities does the system have?",
    answer: "Our system includes advanced reporting and analytics tools with customizable dashboards, real-time data visualization, and the ability to create industry-specific reports.",
  },
  {
    question: "Can we scale the system as our business grows?",
    answer: "Yes, scalability is built into our architecture. Whether you're growing your operations, adding new modules, or expanding to multiple locations, our system grows with you.",
  },
  {
    question: "How do you ensure system performance?",
    answer: "We optimize database queries, implement caching strategies, and conduct regular performance audits. Load balancing and resource allocation are continuously monitored.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full py-16 sm:py-20 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Background shapes */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5"
        style={{ background: BRAND.teal, transform: "translate(50%, -50%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-5"
        style={{ background: BRAND.wine, transform: "translate(-50%, 50%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: BRAND.gray }}
          >
            Get answers to common questions about our ERP and MES solutions
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Questions Panel */}
          <div
            className={`transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Active Question Number Display */}
            <div className="mb-8">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl font-bold text-4xl"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.orange})`,
                  color: BRAND.white,
                }}
              >
                {activeIndex + 1}
              </div>
              <p className="mt-3 text-sm font-semibold" style={{ color: BRAND.gray }}>
                Question {activeIndex + 1} of {faqs.length}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className="w-full text-left p-4 rounded-xl transition-all duration-300"
                  style={{
                    background:
                      activeIndex === i
                        ? BRAND.teal
                        : "rgba(0,153,153,0.05)",
                    color: activeIndex === i ? BRAND.white : "#000000",
                    border:
                      activeIndex === i
                        ? `2px solid ${BRAND.teal}`
                        : `2px solid transparent`,
                    boxShadow:
                      activeIndex === i
                        ? `0 8px 24px rgba(0,153,153,0.2)`
                        : "none",
                  }}
                >
                  <span className="font-semibold text-sm sm:text-base">
                    {i + 1}. {faq.question}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Answer Panel */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className="relative rounded-2xl p-6 sm:p-8 min-h-96 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(0,153,153,0.05) 0%, rgba(255,255,255,0.5) 100%)`,
                border: `2px solid rgba(0,153,153,0.1)`,
                boxShadow: "0 8px 32px rgba(0,153,153,0.08)",
              }}
            >
              {/* Animated background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20"
                style={{ background: BRAND.teal, transform: "translate(30%, -30%)" }}
              />

              {/* Answer content */}
              <div
                key={activeIndex}
                className="relative z-10 animate-fadeInUp"
                style={{
                  animation: "fadeInUp 0.5s ease-out",
                }}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold mb-4"
                  style={{
                    color: BRAND.teal,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {faqs[activeIndex].question}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: BRAND.gray }}
                >
                  {faqs[activeIndex].answer}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="mt-8 lg:hidden">
          <p
            className="text-center text-sm"
            style={{ color: BRAND.gray }}
          >
            Click on questions above to see answers
          </p>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

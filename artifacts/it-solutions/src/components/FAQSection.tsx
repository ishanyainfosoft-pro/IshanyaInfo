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
    question: "Is the ERP system already pre-built, tested and suitable for our application?",
    answer: "Our ERP system is a customized solution designed around the specific needs of each client. However, many general-purpose modules are already pre-built and thoroughly tested, based on our experience across multiple industries. During implementation, these proven modules are adapted and integrated with client-specific workflows, ensuring faster deployment while still meeting your unique business requirements.",
  },
  {
    question: "Is the ERP system easy to use for shop-floor and office teams?",
    answer: "Yes. Our ERP system is designed to be simple, practical and user-friendly, especially considering the working environment of MSME organizations and manufacturing teams. We focus on simple screens and intuitive navigation, minimal data entry effort, practical workflows aligned with real shop-floor processes, and quick training for operators, supervisors and office staff. This ensures smooth adoption by users and faster system deployment.",
  },
  {
    question: "Can our existing records, forms and processes continue in the new system?",
    answer: "Yes. Our approach is to adapt the ERP system to your existing processes wherever practical, instead of forcing you to change everything. We can incorporate existing business forms, standard reports, current approval workflows, and existing operational processes. At the same time, we help streamline and digitize processes where improvements are beneficial.",
  },
  {
    question: "Can the ERP be customized according to our business process?",
    answer: "Yes. The ERP is fully customizable and designed as a modular system. This allows us to configure the system to match your operational workflows, industry-specific requirements, management reporting needs, and customer-specific documentation. This flexibility ensures the ERP works exactly the way your business operates.",
  },
  {
    question: "Can the ERP support multiple plants, branches or users?",
    answer: "Yes. The system supports multi-user, multi-plant and multi-site operations. As your business grows, the ERP can scale to manage multiple manufacturing plants, multiple warehouses or offices, and large numbers of users across departments. This ensures the system remains future-ready and scalable as your business expands.",
  },
  {
    question: "Can the ERP integrate with our existing software or systems?",
    answer: "Yes. Our ERP supports integration with a wide range of systems, including Tally Accounting Software, SAP / SAP S4 HANA, SCADA or machine data systems, Barcode / QR code systems, WhatsApp integration, and Email and SMS alerts. We can also integrate with other existing business software or customer portals, ensuring seamless data flow across systems.",
  },
  {
    question: "How does the ERP help improve manufacturing productivity?",
    answer: "Our ERP includes Smart Production and MES capabilities that help manufacturers monitor and optimize operations. Key features include production planning and scheduling, machine performance monitoring, productivity tracking, downtime monitoring, and quality control and traceability. This enables management to identify bottlenecks, improve efficiency and make data-driven decisions.",
  },
  {
    question: "How secure is our business data in the ERP system?",
    answer: "Data security and ownership are very important for our clients. For maximum control and security, we generally recommend and implement on-premise servers at the client's location, ensuring that data ownership remains fully with the client. However, cloud deployment is also possible if the client prefers cloud-based infrastructure.",
  },
  {
    question: "What is the pricing model for the ERP system?",
    answer: "We charge all-inclusive one-time fees for development and deployment, based on the scope and terms defined in the contract. This pricing typically covers system design and development, customization, deployment and implementation, and user training. This model provides cost transparency and avoids recurring subscription costs.",
  },
  {
    question: "What support does Ishanya Infosoft provide after implementation?",
    answer: "We provide reliable after-sales service and long-term support to ensure smooth system operation. Our support includes ERP implementation and training, system customization and enhancements, technical support and troubleshooting, and continuous improvement and upgrades. Our objective is to be a long-term digital transformation partner for our clients.",
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
      className="w-full py-8 sm:py-10 relative overflow-hidden"
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

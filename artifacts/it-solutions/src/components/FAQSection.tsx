import { useState, useRef, useEffect } from "react";

const BRAND = {
  orange: "#F7941D",
  teal: "#009999",
  tealDark: "#007a7a",
  wine: "#C1277A",
  gray: "#6D6E71",
  white: "#FFFFFF",
};

const faqs = [
  {
    question: "Is the ERP system already pre-built, tested and suitable for our application?",
    answer:
      "Our ERP system is a customized solution designed around the specific needs of each client. Many general-purpose modules are already pre-built and thoroughly tested, based on our experience across multiple industries. During implementation, these proven modules are adapted and integrated with client-specific workflows, ensuring faster deployment while still meeting your unique business requirements.",
  },
  {
    question: "Is the ERP system easy to use for shop-floor and office teams?",
    answer:
      "Yes — our ERP is designed to be simple, practical and user-friendly, especially for MSME organizations and manufacturing teams. We focus on:\n• Simple screens and intuitive navigation\n• Minimal data entry effort\n• Practical workflows aligned with real shop-floor processes\n• Quick training for operators, supervisors and office staff\n\nThis ensures smooth adoption and faster system deployment.",
  },
  {
    question: "Can our existing records, forms and processes continue in the new system?",
    answer:
      "Yes. Our approach is to adapt the ERP to your existing processes wherever practical — instead of forcing you to change everything. We can incorporate:\n• Existing business forms and standard reports\n• Current approval workflows\n• Existing operational processes\n\nAt the same time, we help streamline and digitize processes where improvements are beneficial.",
  },
  {
    question: "Can the ERP be customized according to our business process?",
    answer:
      "Yes. The ERP is fully customizable and designed as a modular system. This allows us to configure:\n• Operational workflows\n• Industry-specific requirements\n• Management reporting needs\n• Customer-specific documentation\n\nThis flexibility ensures the ERP works exactly the way your business operates.",
  },
  {
    question: "Can the ERP support multiple plants, branches or users?",
    answer:
      "Yes. The system supports multi-user, multi-plant and multi-site operations. As your business grows, the ERP can scale to manage:\n• Multiple manufacturing plants\n• Multiple warehouses or offices\n• Large numbers of users across departments\n\nThis ensures the system remains future-ready and scalable as your business expands.",
  },
  {
    question: "Can the ERP integrate with our existing software or systems?",
    answer:
      "Yes. Our ERP supports integration with a wide range of systems, including:\n• Tally Accounting Software\n• SAP / SAP S4 HANA\n• SCADA or machine data systems\n• Barcode / QR code systems\n• WhatsApp, Email and SMS alerts\n\nWe can also integrate with other existing business software or customer portals, ensuring seamless data flow.",
  },
  {
    question: "How does the ERP help improve manufacturing productivity?",
    answer:
      "Our ERP includes Smart Production and MES capabilities that help manufacturers monitor and optimize operations. Key features include:\n• Production planning and scheduling\n• Machine performance monitoring\n• Productivity and downtime tracking\n• Quality control and traceability\n\nThis enables management to identify bottlenecks, improve efficiency and make data-driven decisions.",
  },
  {
    question: "How secure is our business data in the ERP system?",
    answer:
      "Data security and ownership are very important to us. For maximum control and security, we generally recommend on-premise servers at the client's location — ensuring that data ownership remains fully with the client. However, cloud deployment is also possible if the client prefers cloud-based infrastructure.",
  },
  {
    question: "What is the pricing model for the ERP system?",
    answer:
      "We charge all-inclusive one-time fees for development and deployment, based on the scope defined in the contract. This typically covers:\n• System design and development\n• Customization and configuration\n• Deployment and implementation\n• User training\n\nThis model provides full cost transparency and avoids recurring subscription fees.",
  },
  {
    question: "What support does Ishanya Infosoft provide after implementation?",
    answer:
      "We provide reliable after-sales service and long-term support to ensure smooth system operation. Our support includes:\n• ERP implementation and training\n• System customization and enhancements\n• Technical support and troubleshooting\n• Continuous improvement and upgrades\n\nOur objective is to be a long-term digital transformation partner for our clients.",
  },
];

function formatAnswer(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("•")) {
      return (
        <div key={i} className="flex items-start gap-2 mt-1">
          <span style={{ color: BRAND.orange, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>›</span>
          <span>{line.slice(1).trim()}</span>
        </div>
      );
    }
    return line ? <p key={i} className="mt-2 first:mt-0">{line}</p> : null;
  });
}

function AccordionItem({
  faq,
  globalIndex,
  isOpen,
  onToggle,
  isVisible,
  delay,
}: {
  faq: { question: string; answer: string };
  globalIndex: number;
  isOpen: boolean;
  onToggle: () => void;
  isVisible: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const barBg = isOpen || hovered ? BRAND.wine : BRAND.teal;

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: isOpen
          ? "0 8px 28px rgba(193,39,122,0.18)"
          : "0 2px 10px rgba(0,153,153,0.10)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Question bar — fixed min-height so all bars are visually consistent */}
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full flex items-center justify-between gap-3 text-left"
        style={{
          background: barBg,
          color: BRAND.white,
          padding: "16px 20px",
          border: "none",
          outline: "none",
          cursor: "pointer",
          transition: "background 0.3s ease",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "0.9rem",
          lineHeight: 1.45,
          borderRadius: isOpen ? "12px 12px 0 0" : "12px",
          flex: "none",
        }}
      >
        <span style={{ flex: 1 }}>
          {globalIndex + 1}. {faq.question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "rgba(247,148,29,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            fontWeight: 900,
            color: BRAND.orange,
            transition: "transform 0.35s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      {/* Answer panel */}
      <div
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out",
        }}
      >
        <div
          style={{
            background: `linear-gradient(160deg, ${BRAND.tealDark} 0%, #006666 100%)`,
            padding: "18px 20px 22px",
            borderRadius: "0 0 12px 12px",
            color: BRAND.white,
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.88rem",
            lineHeight: 1.75,
            animation: isOpen ? "faqFadeIn 0.35s ease-out" : "none",
          }}
        >
          {formatAnswer(faq.answer)}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
      },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleLeft  = (i: number) => setOpenLeft(openLeft === i ? null : i);
  const toggleRight = (i: number) => setOpenRight(openRight === i ? null : i);

  /* Interleave left[0..4] and right[0..4] into a flat paired array for the grid.
     Grid is 2-col, so pairs sit on the same CSS row → rows auto-size to the tallest
     item in that row, keeping both columns horizontally aligned at every step. */
  const rows = Array.from({ length: 5 }, (_, i) => i);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="w-full py-14 sm:py-20 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Background blobs */}
      <div className="absolute pointer-events-none" style={{ top: "5%", right: "-6%", width: 340, height: 340, borderRadius: "50%", background: BRAND.teal, opacity: 0.04, filter: "blur(60px)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "5%", left: "-6%", width: 280, height: 280, borderRadius: "50%", background: BRAND.wine, opacity: 0.05, filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: BRAND.orange, fontFamily: "'Inter', sans-serif" }}>
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em", color: "#1a1a1a" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: BRAND.gray, fontFamily: "'Inter', sans-serif" }}>
            Everything you need to know about our ERP &amp; MES solutions.
          </p>
          <div className="flex justify-center mt-5 gap-1">
            <div style={{ width: 48, height: 3, borderRadius: 2, background: BRAND.teal }} />
            <div style={{ width: 12, height: 3, borderRadius: 2, background: BRAND.orange }} />
            <div style={{ width: 6,  height: 3, borderRadius: 2, background: BRAND.wine }} />
          </div>
        </div>

        {/*
          Single CSS grid — 2 equal columns, items placed L then R per row.
          Each row height = tallest item in that row → perfect horizontal alignment.
        */}
        <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", alignItems: "start" }}>
          {rows.map((i) => (
            <>
              {/* Left item (Q1–Q5) */}
              <AccordionItem
                key={`l${i}`}
                faq={faqs[i]}
                globalIndex={i}
                isOpen={openLeft === i}
                onToggle={() => toggleLeft(i)}
                isVisible={isVisible}
                delay={80 + i * 55}
              />
              {/* Right item (Q6–Q10) */}
              <AccordionItem
                key={`r${i}`}
                faq={faqs[i + 5]}
                globalIndex={i + 5}
                isOpen={openRight === i}
                onToggle={() => toggleRight(i)}
                isVisible={isVisible}
                delay={110 + i * 55}
              />
            </>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm mt-10"
          style={{ color: BRAND.gray, fontFamily: "'Inter', sans-serif", opacity: isVisible ? 1 : 0, transition: "opacity 1s ease 1s" }}>
          Still have questions?{" "}
          <a href="#contact" style={{ color: BRAND.teal, fontWeight: 600, textDecoration: "underline" }}>
            Contact our team
          </a>{" "}
          — we're happy to help.
        </p>
      </div>

      <style>{`
        @keyframes faqFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 639px) {
          #faq .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

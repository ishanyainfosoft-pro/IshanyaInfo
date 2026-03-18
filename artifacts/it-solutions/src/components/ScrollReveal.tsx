import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale" | "fade";
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
        } else {
          el.classList.remove("sr-visible");
        }
      },
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = `sr-${direction}`;
  const delayClass = delay > 0 ? `sr-delay-${delay}` : "";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`sr ${dirClass} ${delayClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}

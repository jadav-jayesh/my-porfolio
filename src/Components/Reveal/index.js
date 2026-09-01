import React, { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll wrapper: fades and lifts its children into view the first
 * time they enter the viewport. Falls back to instantly visible for
 * reduced-motion users. Once shown, it stays shown (observer disconnects).
 */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(48px)",
        transition: `opacity 700ms ease ${delay}ms, transform 800ms cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;

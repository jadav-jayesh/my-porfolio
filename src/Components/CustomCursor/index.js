import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

/**
 * Minimalist Smooth Custom Cursor:
 * - A sharp 6px center dot snapping to pointer
 * - An elegant 32px smooth lagging ring with lerp interpolation
 * - Smooth expansion effect over clickable elements (links, buttons)
 * - Auto-disabled on mobile / touch / reduced-motion devices
 */
const CustomCursor = () => {
  const { themeData } = useSelector((state) => state.auth);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 960;
    const canHover = window.matchMedia("(any-hover: hover)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isMobile || !canHover || reduceMotion) return;

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Instant dot positioning
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check if hovering over clickable element
      const target = e.target;
      const isClickable =
        target.closest("a, button, [role='button'], input, textarea, select, .MuiButtonBase-root, .cursor-pointer");
      setIsHovered(Boolean(isClickable));
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth Lerp loop for outer ring
    const render = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const accentColor = themeData?.accent || "#22d3ee";

  return (
    <>
      {/* Sharp Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? 4 : 6,
          height: isHovered ? 4 : 6,
          backgroundColor: accentColor,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
          willChange: "transform",
        }}
      />

      {/* Smooth Lagging Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? 46 : 30,
          height: isHovered ? 46 : 30,
          border: `1.5px solid ${accentColor}`,
          backgroundColor: isHovered ? `${accentColor}18` : "transparent",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: isVisible ? (isHovered ? 0.9 : 0.6) : 0,
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          transition: "width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease, opacity 0.2s ease, border-color 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;

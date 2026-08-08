import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const TRAIL = 14;

/**
 * Gradient trail-streak cursor:
 * - A head dot + a fading streak that follows the pointer's actual path
 *   (each frame the newest point is pushed, oldest dropped).
 * - Uses the theme gradient (teal -> cyan), fading in size and opacity.
 * Native cursor is hidden while active. Skipped on pure-touch / reduced-motion.
 */
const CustomCursor = () => {
  const { themeData } = useSelector((state) => state.auth);
  const headRef = useRef(null);
  const trailRefs = useRef([]);
  const path = useRef(
    Array.from({ length: TRAIL }, () => ({ x: -100, y: -100 }))
  );
  const visible = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia("(any-hover: hover)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!canHover || reduceMotion) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e) => {
      visible.current = 1;
      // shift the recorded path toward the newest pointer position
      const p = path.current;
      p.shift();
      p.push({ x: e.clientX, y: e.clientY });
    };
    const onLeave = () => (visible.current = 0);
    const onEnter = () => (visible.current = 1);

    const loop = () => {
      const p = path.current;
      for (let i = 0; i < TRAIL; i++) {
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate(${p[i].x}px, ${p[i].y}px) translate(-50%, -50%)`;
          el.style.opacity = visible.current
            ? String(Math.max(0, 1 - i / TRAIL))
            : "0";
        }
      }
      const head = headRef.current;
      if (head) {
        head.style.transform = `translate(${p[TRAIL - 1].x}px, ${p[TRAIL - 1].y}px) translate(-50%, -50%)`;
        head.style.opacity = visible.current ? "1" : "0";
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const base = {
    position: "fixed",
    top: 0,
    left: 0,
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 10000,
    opacity: 0,
    transform: "translate(-100px, -100px)",
    willChange: "transform, opacity",
  };

  return (
    <>
      {/* head dot */}
      <div
        ref={headRef}
        aria-hidden="true"
        style={{
          ...base,
          width: 10,
          height: 10,
          background: themeData.gradient,
          boxShadow: `0 0 12px ${themeData.accent}`,
          transition: "opacity 120ms ease",
        }}
      />
      {/* fading gradient streak along the recorded path */}
      {Array.from({ length: TRAIL }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          aria-hidden="true"
          style={{
            ...base,
            width: 8 - i * 0.5,
            height: 8 - i * 0.5,
            background: themeData.gradient,
            transition: "opacity 150ms ease",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;

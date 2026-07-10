import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const TRAIL = 6; // number of comet-trail dots

/**
 * Animated comet-trail cursor:
 * - A ring that eases toward the pointer and expands over interactive elements.
 * - A head dot + a fading tail of follower dots, each easing toward the one
 *   in front (classic comet / snake trail) for clear, fluid motion.
 * Native cursor is hidden while active. Skipped on pure-touch / reduced-motion.
 */
const CustomCursor = () => {
  const { themeData } = useSelector((state) => state.auth);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const target = useRef({ x: -100, y: -100 });
  const pts = useRef(
    Array.from({ length: TRAIL }, () => ({ x: -100, y: -100 }))
  );
  const ringPos = useRef({ x: -100, y: -100 });
  const scale = useRef(1);
  const targetScale = useRef(1);
  const visible = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    // Enable whenever any input can hover (desktop mouse / touch-laptop + mouse)
    const canHover = window.matchMedia("(any-hover: hover)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!canHover || reduceMotion) return;

    document.body.classList.add("custom-cursor-active");
    let hovering = false;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      visible.current = 1;
      const interactive = e.target.closest(
        "a, button, .MuiButtonBase-root, [role='button'], input, textarea, .MuiTab-root"
      );
      hovering = !!interactive;
      targetScale.current = hovering ? 2.6 : 1;
    };
    const onDown = () => (targetScale.current *= 0.75);
    const onUp = () => (targetScale.current = hovering ? 2.6 : 1);
    const onLeave = () => (visible.current = 0);
    const onEnter = () => (visible.current = 1);

    const loop = () => {
      // head chases the pointer; each dot chases the one in front of it
      const p = pts.current;
      p[0].x += (target.current.x - p[0].x) * 0.5;
      p[0].y += (target.current.y - p[0].y) * 0.5;
      for (let i = 1; i < TRAIL; i++) {
        p[i].x += (p[i - 1].x - p[i].x) * 0.35;
        p[i].y += (p[i - 1].y - p[i].y) * 0.35;
      }
      for (let i = 0; i < TRAIL; i++) {
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate(${p[i].x}px, ${p[i].y}px) translate(-50%, -50%)`;
          el.style.opacity = visible.current ? String(1 - i / TRAIL) : "0";
        }
      }

      // ring eases toward the pointer and scales toward its target
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      scale.current += (targetScale.current - scale.current) * 0.18;
      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) scale(${scale.current})`;
        ring.style.opacity = visible.current ? (hovering ? 0.95 : 0.65) : 0;
        ring.style.backgroundColor = hovering ? themeData.glow : "transparent";
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeData]);

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
      {/* trailing outlined ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...base,
          width: 40,
          height: 40,
          border: `2px solid ${themeData.accent}`,
          boxShadow: `0 0 14px ${themeData.glow}`,
          transition: "opacity 200ms ease, background-color 200ms ease",
        }}
      />
      {/* comet trail: head dot (index 0) is largest/brightest, tail fades */}
      {Array.from({ length: TRAIL }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          aria-hidden="true"
          style={{
            ...base,
            width: 10 - i * 1.2,
            height: 10 - i * 1.2,
            background: themeData.gradient,
            boxShadow: i === 0 ? `0 0 10px ${themeData.accent}` : "none",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;

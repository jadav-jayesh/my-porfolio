import React from "react";
import { useSelector } from "react-redux";

const TECH = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "Redux",
  "Zustand",
  "Node.js",
  "SQL",
  "Redis",
  "BullMQ",
  "Firebase",
  "REST APIs",
  "Material UI",
  "Git",
  "AI-Assisted Development",
  "Claude",
  "ChatGPT",
];

/**
 * Infinite horizontal marquee of the tech stack. The item list is rendered
 * twice back-to-back so the CSS translateX(-50%) loop is seamless.
 * Pauses on hover; the animation is disabled for reduced-motion users via CSS.
 */
const Marquee = () => {
  const { themeData } = useSelector((state) => state.auth);
  const loop = [...TECH, ...TECH];

  return (
    <div
      style={{
        borderTop: `1px solid ${themeData.glassBorder}`,
        borderBottom: `1px solid ${themeData.glassBorder}`,
        background: themeData.surfaceAlt,
        overflow: "hidden",
        padding: "clamp(12px, 2vw, 18px) 0",
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        {loop.map((tech, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "clamp(12px, 2.5vw, 22px)",
              padding: "0 clamp(12px, 2.5vw, 22px)",
              fontFamily: themeData.mono,
              fontSize: "clamp(13.5px, 2.5vw, 18px)",
              fontWeight: 600,
              letterSpacing: "0.5px",
              whiteSpace: "nowrap",
              color: themeData.text,
            }}
          >
            {tech}
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: themeData.gradient,
                display: "inline-block",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

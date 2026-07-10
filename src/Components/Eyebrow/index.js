import React from "react";
import { useSelector } from "react-redux";

/**
 * Small monospace "kicker" label shown above section titles.
 * e.g.  // 02 — SKILLS
 * Uses the theme gradient so it glows in Aurora Dark and stays teal in light.
 */
const Eyebrow = ({ index, label, center = true }) => {
  const { themeData } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        justifyContent: center ? "center" : "flex-start",
        marginBottom: 10,
      }}
    >
      <span
        style={{
          fontFamily: themeData.mono,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          background: themeData.gradient,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {index ? `// ${index} — ` : "// "}
        {label}
      </span>
      <span
        aria-hidden="true"
        style={{
          width: 40,
          height: 2,
          borderRadius: 2,
          background: themeData.gradient,
          opacity: 0.7,
        }}
      />
    </div>
  );
};

export default Eyebrow;

import React from "react";
import { useSelector } from "react-redux";

/**
 * Small monospace "kicker" label shown above section titles.
 * e.g.  // 02 — SKILLS
 * Uses the theme gradient so it glows in Aurora Dark and stays teal in light.
 */
const Eyebrow = ({ index, label, center = true }) => {
  const { themeData } = useSelector((state) => state.auth);
  const color =
    themeData.headerText === "#FFFFFF"
      ? themeData.accent || "#22d3ee"
      : themeData.primary || "#005653";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: center ? "center" : "flex-start",
        marginBottom: 14,
        width: center ? "100%" : "auto",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          fontFamily:
            "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: color,
          padding: "4px 12px",
          borderRadius: 20,
          backgroundColor: `${color}18`,
          border: `1px solid ${color}38`,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}`,
            flexShrink: 0,
          }}
        />
        {index ? `${index} // ` : ""}
        {label}
      </span>
    </div>
  );
};

export default Eyebrow;

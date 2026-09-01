import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function MainLogo() {
  const { themeData } = useSelector((state) => state.auth);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/* Geometric hexagonal gem mark */}
      <div style={{ position: "relative", width: 46, height: 46, flexShrink: 0 }}>
        {/* slow-rotating gradient ring behind the gem */}
        <div
          style={{
            position: "absolute",
            inset: -4,
            borderRadius: "50%",
            border: `2px dashed ${themeData.accent}`,
            opacity: 0.55,
            animation: "logoSpin 14s linear infinite",
          }}
        />
        {/* hexagon gem */}
        <div
          style={{
            position: "absolute",
            inset: 2,
            background: themeData.gradient,
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 6px 20px -6px ${themeData.glow}`,
          }}
        >
          {/* </> code glyph */}
          <Typography
            style={{
              color: themeData.white,
              fontWeight: 900,
              fontSize: 17,
              letterSpacing: "-1px",
              lineHeight: 1,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              transform: "translateY(-1px)",
            }}
          >
            {"</>"}
          </Typography>
        </div>
        {/* accent facet highlight */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 14,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: themeData.white,
            opacity: 0.85,
            boxShadow: `0 0 8px ${themeData.white}`,
          }}
        />
      </div>

      {/* Compact wordmark */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="tableTitle"
          style={{
            color: themeData.white,
            fontWeight: 800,
            letterSpacing: "clamp(1px, 0.3vw, 2px)",
            fontSize: "clamp(13px, 3.8vw, 16px)",
            lineHeight: 1.1,
            whiteSpace: "nowrap",
          }}
        >
          JAYESH
          <span style={{ color: themeData.accent }}> JADAV</span>
        </Typography>
        <Typography
          variant="subTitle"
          style={{
            color: themeData.textSecondary,
            fontSize: "clamp(8.5px, 2.2vw, 10px)",
            fontWeight: 600,
            letterSpacing: "clamp(1px, 0.4vw, 2.5px)",
            textTransform: "uppercase",
            lineHeight: 1,
            marginTop: 2,
            whiteSpace: "nowrap",
          }}
        >
          Front-End Engineer
        </Typography>
      </div>
    </div>
  );
}

export default MainLogo;

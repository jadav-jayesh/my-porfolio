import React from "react";
import Images from "../../Config/images";

function MainLogo({ variant = "horizontal" }) {
  if (variant === "stacked") {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          lineHeight: 0,
        }}
      >
        <img
          src={Images.logoStacked}
          alt="Jayesh Jadav — Front-End Developer"
          style={{
            height: "clamp(60px, 8vw, 85px)",
            width: "auto",
            objectFit: "contain",
            filter: "drop-shadow(0 4px 14px rgba(0, 180, 216, 0.25))",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        lineHeight: 0,
      }}
    >
      <img
        src={Images.logoMain}
        alt="Jayesh Jadav — Front-End Developer"
        style={{
          height: "clamp(34px, 4.2vw, 42px)",
          width: "auto",
          maxWidth: "100%",
          objectFit: "contain",
          filter: "drop-shadow(0 2px 8px rgba(0, 180, 216, 0.2))",
          transition: "transform 0.25s ease, filter 0.25s ease",
        }}
      />
    </div>
  );
}

export default MainLogo;

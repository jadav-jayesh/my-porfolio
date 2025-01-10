import { Divider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function MainLogo() {
  const { themeData } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="tableTitle"
        style={{
          color: themeData.white,
        }}
      >
        Jayesh Jadav
      </Typography>
      <Divider
        style={{
          backgroundColor: themeData.textSecondary,
          width: "100%",
          opacity: 0.6,
          margin: "1px 0px",
        }}
      />
      <Typography
        variant="subTitle"
        style={{
          color: themeData.white,
        }}
      >
        Front-End Developer
      </Typography>
    </div>
  );
}

export default MainLogo;

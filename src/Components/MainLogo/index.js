import { Divider, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../Config/theme";

function MainLogo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: colors.white,
      }}
    >
      <Typography variant="tableTitle">Jayesh Jadav</Typography>
      <Divider
        style={{
          backgroundColor: colors.textSecondary,
          width: "100%",
          opacity: 0.6,
          margin: "1px 0px",
        }}
      />
      <Typography variant="subTitle">Front-End Developer</Typography>
    </div>
  );
}

export default MainLogo;

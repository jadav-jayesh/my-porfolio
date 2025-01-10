import { Divider, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import {
  ArrowUpward,
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import useStyles from "./styles";
import MainLogo from "../MainLogo";
import { useSelector } from "react-redux";

function Footer(props) {
  const { themeData } = useSelector((state) => state.auth);
  const { handleScrollToSection = () => null } = props;
  const classes = useStyles(themeData)();

  return (
    <Grid
      container
      style={{
        padding: "20px 0px",
        backgroundColor: themeData.primary,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid size={{ xs: 11, md: 9 }}>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <MainLogo />
          <IconButton
            onClick={(event) => handleScrollToSection(event, "home")}
            className={classes.arrow}
          >
            <ArrowUpward />
          </IconButton>
        </Grid>
        <Divider
          style={{
            margin: "20px 0px",
            backgroundColor: themeData.textSecondary,
          }}
        />
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ color: themeData.white, fontSize: 16, fontWeight: 700 }}
          >
            Copyright © 2024 All rights reserved
          </Typography>
          <Grid className={classes.socialContainer}>
            <div className={classes.iconButton}>
              <Instagram className={classes.socialIcon} />
              <Typography variant="subTitle" className={classes.socialText}>
                Instagram
              </Typography>
            </div>
            <div className={classes.iconButton}>
              <Facebook className={classes.socialIcon} />
              <Typography variant="subTitle" className={classes.socialText}>
                Facebook
              </Typography>
            </div>
            <div className={classes.iconButton}>
              <LinkedIn className={classes.socialIcon} />
              <Typography variant="subTitle" className={classes.socialText}>
                Inked In
              </Typography>
            </div>
            <div className={classes.iconButton}>
              <XIcon
                // style={{ backgroundColor: "#1D1D1D" }}
                className={classes.socialIcon}
              />
              <Typography variant="subTitle" className={classes.socialText}>
                Twitter
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;

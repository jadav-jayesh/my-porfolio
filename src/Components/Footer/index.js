import { Divider, IconButton, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import {
  ArrowUpward,
  Facebook,
  GitHub,
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
      <Grid size={{ xs: 11.5, sm: 11, md: 9 }}>
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
            aria-label="Scroll to top"
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
        <Grid className={classes.bottomRow}>
          <Typography className={classes.copyrightText}>
            Copyright © {new Date().getFullYear()} Jayesh Jadav. All rights
            reserved
          </Typography>
          <Grid className={classes.socialContainer}>
            <Link
              href="https://github.com/jayesh-jadav"
              target="_blank"
              className={classes.iconButton}
            >
              <GitHub className={classes.socialIcon} />
              <Typography variant="subTitle" className={classes.socialText}>
                GitHub
              </Typography>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jayesh-jadav-809570222"
              target="_blank"
              className={classes.iconButton}
            >
              <LinkedIn className={classes.socialIcon} />
              <Typography variant="subTitle" className={classes.socialText}>
                LinkedIn
              </Typography>
            </Link>
            <Link
              href="https://www.instagram.com/jadavjayesh16?igsh=MWhrb3BjZDYwbTllcQ=="
              target="_blank"
              className={classes.iconButton}
            >
              <Instagram className={classes.socialIcon} />
              <Typography variant="subTitle" className={classes.socialText}>
                Instagram
              </Typography>
            </Link>
            <Link
              href="https://www.facebook.com/share/162es1DTNE/"
              target="_blank"
              className={classes.iconButton}
            >
              <Facebook className={classes.socialIcon} />
              <Typography variant="subTitle" className={classes.socialText}>
                Facebook
              </Typography>
            </Link>
            <Link
              href="https://x.com/JadavJayeshSur3?t=D6VypV7GKwND01eWK9FsUA&s=08"
              target="_blank"
              className={classes.iconButton}
            >
              <XIcon className={classes.socialIcon} />
              <Typography variant="subTitle" className={classes.socialText}>
                Twitter
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;

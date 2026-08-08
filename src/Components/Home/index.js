import { Avatar, Button, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import useStyles from "./styles";
import Typewriter from "../TypeWriter";
import {
  Download,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Images from "../../Config/images";
import XIcon from "@mui/icons-material/X";
import { services } from "../../Config/static_data";
import { useSelector } from "react-redux";
import Eyebrow from "../Eyebrow";

const Home = () => {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();

  // Smooth-scroll to a section by id (used by the hero call-to-action buttons)
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Grid container className={className.container}>
      <div className={className.auroraBlob3} aria-hidden="true" />
      <Grid size={{ xs: 11, md: 9 }} className={className.section}>
        <Grid size={8}>
          <Eyebrow label="Product-Focused Front-End Engineer · Available for hire" center={false} />
          <Typography variant="h1">
            Hi, I'm{" "}
            <span className={className.nameGradient}>Jayesh Jadav</span>
          </Typography>
          <div id="typeWriter">
            <Typography
              variant="title"
              style={{
                color: themeData.accent,
                margin: "20px 0px",
              }}
            >
              <Typewriter
                text={services}
                delay={100}
                infinite={true}
                speed={2000}
              />
            </Typography>
          </div>
          <div className={className.subText}>
            <Typography variant="subText">
              Product-focused front-end engineer with 3.8+ years building fast,
              responsive web and mobile apps with React, React Native and
              Next.js — from UI/UX designs to production. I work across the
              stack (APIs, databases, queues) and use AI-first workflows to
              ship reliable, polished products faster.
            </Typography>
          </div>
          <div className={className.ctaContainer}>
            <Button
              variant="contained"
              component="a"
              href={process.env.PUBLIC_URL + "/resume.pdf"}
              download
              startIcon={<Download />}
            >
              Download Resume
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollTo("project")}
              className={className.ctaOutline}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollTo("contact")}
              className={className.ctaOutline}
            >
              Contact Me
            </Button>
          </div>
          <div id="social" className={className.socialMain}>
            <Typography variant="head">Find me on</Typography>
            <Grid className={className.socialContainer}>
              <Link
                href="https://github.com/jayesh-jadav"
                target="_blank"
                className={className.iconButton}
              >
                <GitHub className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  GitHub
                </Typography>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jayesh-jadav-809570222"
                target="_blank"
                className={className.iconButton}
              >
                <LinkedIn className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  LinkedIn
                </Typography>
              </Link>
              <Link
                href="https://www.instagram.com/jadavjayesh16?igsh=MWhrb3BjZDYwbTllcQ=="
                target="_blank"
                className={className.iconButton}
              >
                <Instagram className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Instagram
                </Typography>
              </Link>
              <Link
                href="https://www.facebook.com/share/162es1DTNE/"
                target="_blank"
                className={className.iconButton}
              >
                <Facebook className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Facebook
                </Typography>
              </Link>
              <Link
                href="https://x.com/JadavJayeshSur3?t=D6VypV7GKwND01eWK9FsUA&s=08"
                target="_blank"
                className={className.iconButton}
              >
                <XIcon className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Twitter
                </Typography>
              </Link>
            </Grid>
          </div>
          <div className={className.workContainer}>
            <div className={className.card}>
              <Typography variant="head">3.8+</Typography>
              <Typography variant="subText">Years of experience</Typography>
            </div>
            <div className={className.card}>
              <Typography variant="head">8+</Typography>
              <Typography variant="subText">Projects shipped</Typography>
            </div>
          </div>
        </Grid>
        <div className={className.borderWrapper}>
          <Avatar src={Images.profile} className={className.img} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;

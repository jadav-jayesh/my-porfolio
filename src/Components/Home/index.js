import { Avatar, Button, Link, Typography, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import Typewriter from "../TypeWriter";
import {
  Check,
  ContentCopy,
  Download,
  Email,
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
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jadav241198@gmail.com");
    setCopied(true);
    setSnackbarOpen(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={className.container}>
      <div className={className.auroraBlob3} aria-hidden="true" />
      <div className={className.section}>
        <div className={className.contentLeft}>
          <Eyebrow label="Product-Focused Front-End Engineer · Available for hire" center={false} />
          <Typography variant="h1" className={className.mainHeading}>
            Hi, I'm{" "}
            <span className={className.nameGradient}>Jayesh Jadav</span>
          </Typography>
          <div id="typeWriter" className={className.typeWriterWrapper}>
            <Typography
              variant="title"
              style={{
                color: themeData.accent,
                lineHeight: 1.3,
                fontSize: "clamp(20px, 3.5vw, 32px)",
              }}
            >
              <Typewriter
                text={services}
                delay={80}
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
              onClick={handleCopyEmail}
              className={className.ctaOutline}
              startIcon={copied ? <Check sx={{ color: "#22d3ee" }} /> : <ContentCopy />}
            >
              {copied ? "Email Copied!" : "Copy Email"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollTo("project")}
              className={className.ctaOutline}
            >
              View Projects
            </Button>
          </div>

          <div id="social" className={className.socialMain}>
            <Typography variant="head">Find me on</Typography>
            <div className={className.socialContainer}>
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
                href="mailto:jadav241198@gmail.com"
                className={className.iconButton}
              >
                <Email className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Email
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
                href="https://x.com/JadavJayeshSur3?t=D6VypV7GKwND01eWK9FsUA&s=08"
                target="_blank"
                className={className.iconButton}
              >
                <XIcon className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Twitter
                </Typography>
              </Link>
            </div>
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
        </div>

        <div className={className.borderWrapper}>
          <Avatar src={Images.profile} alt="Jayesh Jadav" className={className.img} />
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ backgroundColor: "#0f766e", color: "#ffffff", fontWeight: 600 }}
        >
          Email copied to clipboard (jadav241198@gmail.com)
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home;

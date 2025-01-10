import { Avatar, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import useStyles from "./styles";
import Typewriter from "../TypeWriter";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import Images from "../../Config/images";
import XIcon from "@mui/icons-material/X";
import { services } from "../../Config/static_data";
import { useSelector } from "react-redux";

const Home = () => {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();
  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 9 }} className={className.section}>
        <Grid size={8}>
          {/* <Typography variant="h1">Hi, I'm Jayesh Jadav</Typography> */}
          <Typography variant="h1">
            Hi, I'm{" "}
            <span style={{ color: themeData.primary }}>Jayesh Jadav</span>
          </Typography>
          <div id="typeWriter">
            <Typography
              variant="title"
              style={{
                color: themeData.primary,
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
              A creative front-end developer with expertise in React,
              JavaScript, and responsive design, dedicated to delivering smooth
              and user-friendly interfaces. I believe in the power of clean
              code, elegant design, and continuous learning to shape the future
              of technology.
            </Typography>
          </div>
          <div id="social" className={className.socialMain}>
            <Typography variant="head">Find me on</Typography>
            <Grid className={className.socialContainer}>
              <Link
                href="#"
                // target="_blank"
                className={className.iconButton}
              >
                <Instagram className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Instagram
                </Typography>
              </Link>
              <div className={className.iconButton}>
                <Facebook className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Facebook
                </Typography>
              </div>
              <div className={className.iconButton}>
                <LinkedIn className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Inked In
                </Typography>
              </div>
              <div className={className.iconButton}>
                <XIcon className={className.socialIcon} />
                <Typography variant="subTitle" className={className.socialText}>
                  Twitter
                </Typography>
              </div>
            </Grid>
          </div>
          <div className={className.workContainer}>
            <div className={className.card}>
              <Typography variant="head">2+</Typography>
              <Typography variant="subText">Years of experience</Typography>
            </div>
            <div className={className.card}>
              <Typography variant="head">7+</Typography>
              <Typography variant="subText">Numbers of project</Typography>
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

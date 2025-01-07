import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import useStyles from "./styles";
import { colors } from "../../Config/theme";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CodeIcon from "@mui/icons-material/Code";
import StyleIcon from "@mui/icons-material/Style";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";

function Services() {
  const className = useStyles();
  const services = [
    {
      title: "Web Development",
      description:
        "Full-stack web development with modern frameworks and best practices.",
      icon: <WebIcon sx={{ fontSize: 30 }} />,
      gradient: "linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%)",
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile application development.",
      icon: <PhoneIphoneIcon sx={{ fontSize: 30 }} />,
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)",
    },
    {
      title: "TypeScript",
      description:
        "Type-safe development with TypeScript for scalable applications.",
      icon: <CodeIcon sx={{ fontSize: 30 }} />,
      gradient: "linear-gradient(135deg, #007ACC 0%, #66B2FF 100%)",
    },
    {
      title: "Material UI",
      description:
        "Beautiful and responsive UI components with Material Design.",
      icon: <StyleIcon sx={{ fontSize: 30 }} />,
      gradient: "linear-gradient(135deg, #00B0FF 0%, #0081CB 100%)",
    },
    {
      title: "Next.js",
      description:
        "Server-side rendering and static site generation with Next.js.",
      icon: <DeveloperModeIcon sx={{ fontSize: 30 }} />,
      gradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
    },
    // {
    //   title: "Landing Pages",
    //   description: "Converting landing pages that drive user engagement.",
    //   icon: <LandscapeIcon sx={{ fontSize: 30 }} />,
    //   gradient: "linear-gradient(135deg, #FF57B9 0%, #A704FD 100%)",
    // },
    {
      title: "HTML",
      description: "Semantic and accessible HTML5 markup for modern web.",
      icon: <HtmlIcon sx={{ fontSize: 30 }} />,
      gradient: "linear-gradient(135deg, #E44D26 0%, #F16529 100%)",
    },
    {
      title: "JavaScript",
      description: "Dynamic and interactive web experiences with JavaScript.",
      icon: <JavascriptIcon sx={{ fontSize: 30 }} />,
      gradient: "linear-gradient(135deg, #F7DF1E 0%, #C4B404 100%)",
    },
    {
      title: "CSS",
      description: "Modern styling with CSS3, Flexbox, and Grid layouts.",
      icon: <CssIcon sx={{ fontSize: 30 }} />,
      gradient: "linear-gradient(135deg, #264DE4 0%, #2965F1 100%)",
    },
  ];

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 9 }}>
        <Grid className={className.mainHeader}>
          <Typography variant="title" style={{ color: colors.primary }}>
            My Services
          </Typography>
        </Grid>

        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item size={{ xs: 12, sm: 3 }} key={index}>
              <Card className={className.card}>
                <CardContent
                  className={className.cardContent}
                  sx={{
                    "&::before": {
                      background: service.gradient,
                    },
                  }}
                >
                  <Box
                    className="icon-container"
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: service.gradient,
                      color: "white",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography variant="subTitle">{service.title}</Typography>

                  <Typography>{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;

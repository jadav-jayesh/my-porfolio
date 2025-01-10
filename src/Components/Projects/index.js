import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import useStyles from "./styles";
import { useSelector } from "react-redux";

const projects = [
  {
    name: "Fleet kaptan",
    description:
      "A logistics and fleet management system designed to optimize delivery operations and monitor vehicles in real-time.",
    technologies: ["React", "Redux", "Material-UI", "Firebase"],
  },
  {
    name: "Oculabs",
    description:
      "A healthcare analytics platform providing insights and data-driven solutions for clinics and hospitals.",
    technologies: ["React", "Redux", "MUI", "Firebase"],
  },
  {
    name: "Scrapc",
    description:
      "A healthcare analytics platform providing insights and data-driven solutions for clinics and hospitals.",
    technologies: ["React", "Redux", "MUI", "Firebase"],
  },
  {
    name: "Reanlo for Readers",
    description:
      "An e-commerce platform with a focus on user experience, featuring a secure payment gateway and a responsive design.",
    technologies: ["React Native", "Firebase", "Redux"],
  },
  {
    name: "Prarambh",
    description:
      "An e-commerce platform with a focus on user experience, featuring a secure payment gateway and a responsive design.",
    technologies: ["React Native", "Firebase", "Redux"],
  },
  {
    name: "Shywon",
    description:
      "An e-commerce platform with a focus on user experience, featuring a secure payment gateway and a responsive design.",
    technologies: ["React Native", "Firebase", "Redux"],
  },
];

const Projects = () => {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 9 }}>
        <Grid style={{ textAlign: "center", marginBottom: 30 }}>
          <Typography variant="title" style={{ color: themeData.headerText }}>
            Projects
          </Typography>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  backgroundColor: themeData.background,
                  color: themeData.text,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: themeData.shadow,
                }}
              >
                <CardContent>
                  <Typography
                    variant="head"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {project.name}
                  </Typography>
                  <Typography variant="subText" gutterBottom>
                    {project.description}
                  </Typography>
                  <Typography
                    variant="subTitle"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    Technologies:{" "}
                    <Typography
                      variant="subText"
                      style={{ display: "inline-block" }}
                    >
                      {project.technologies.join(", ")}
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;

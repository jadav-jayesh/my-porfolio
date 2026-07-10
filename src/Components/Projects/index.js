import React from "react";
import { Card, CardActions, CardContent, Chip, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { GitHub, Launch } from "@mui/icons-material";

import useStyles from "./styles";
import { useSelector } from "react-redux";
import Eyebrow from "../Eyebrow";

// NOTE: `github` / `live` default to placeholders. Replace with each project's
// real repo and live-demo URL. Leave `live` as "" to hide the Live Demo button.
const projects = [
  {
    name: "Fleet Kaptan",
    description:
      "Built a real-time fleet-tracking dashboard in React + Redux with live map monitoring, helping dispatchers optimize routes and cut idle vehicle time.",
    technologies: ["React", "Redux", "Material-UI", "Firebase"],
    github: "https://github.com/jayesh-jadav",
    live: "",
  },
  {
    name: "Oculabs",
    description:
      "Developed a healthcare analytics platform that turns raw clinical data into interactive dashboards, enabling faster, data-driven decisions for clinics.",
    technologies: ["React", "Redux", "MUI", "Firebase"],
    github: "https://github.com/jayesh-jadav",
    live: "",
  },
  {
    name: "Scrapc",
    description:
      "Engineered a data-scraping dashboard that collects, cleans and visualizes web data into filterable, exportable reports — replacing hours of manual work.",
    technologies: ["React", "Redux", "MUI", "Firebase"],
    github: "https://github.com/jayesh-jadav",
    live: "",
  },
  {
    name: "Reanlo for Readers",
    description:
      "Shipped a React Native reading app with book browsing, secure checkout and a personalized library, delivering a smooth cross-platform experience.",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/jayesh-jadav",
    live: "",
  },
  {
    name: "Prarambh",
    description:
      "Built a community + events mobile app with member profiles, activity feeds and RSVP flows to drive engagement between users.",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/jayesh-jadav",
    live: "",
  },
  {
    name: "Shywon",
    description:
      "Created a mobile shopping app with catalog, cart, wishlist and secure payments, focused on a fast, frictionless checkout.",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/jayesh-jadav",
    live: "",
  },
];

const Projects = () => {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();

  // Skip the tilt/spotlight on touch screens and for reduced-motion users
  const motionOff =
    typeof window !== "undefined" &&
    (window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // Tilt the card toward the cursor and move the spotlight highlight
  const handleMove = (e) => {
    if (motionOff) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -8;
    const rotateY = (x / rect.width - 0.5) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 9 }}>
        <Grid style={{ textAlign: "center", marginBottom: 30 }}>
          <Eyebrow index="03" label="Selected Work" />
          <Typography variant="title" style={{ color: themeData.headerText }}>
            Projects
          </Typography>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                className={className.card}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
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
                  <div className={className.chipRow}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        className={className.chip}
                      />
                    ))}
                  </div>
                </CardContent>
                <CardActions className={className.actions}>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className.projectLink}
                    >
                      <GitHub fontSize="small" /> Code
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className.projectLink}
                    >
                      <Launch fontSize="small" /> Live Demo
                    </Link>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;

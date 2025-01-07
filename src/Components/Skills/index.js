import React, { useEffect, useState } from "react";
import { Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { colors } from "../../Config/theme";
import useStyles from "./styles";
import { categoryLabels, skills } from "../../Config/static_data";

function Skills() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState({});
  const className = useStyles();

  useEffect(() => {
    const handleScroll = (entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5,
    });

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const updatedProgress = { ...prevProgress };
          Object.keys(skills).forEach((category) => {
            skills[category].forEach((skill) => {
              const current = updatedProgress[skill.name] || 0;
              if (current < skill.level) {
                updatedProgress[skill.name] = current + 1;
              }
            });
          });
          return updatedProgress;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 9 }}>
        <Grid className={className.mainHeader}>
          <Typography variant="title" style={{ color: colors.primary }}>
            Skills
          </Typography>
        </Grid>
        <Grid container className={className.cardContainer} spacing={3}>
          {Object.keys(skills).map((category) => (
            <Grid
              className={className.card}
              size={{ xs: 12, md: 6 }}
              key={category}
            >
              <Typography className={className.cardHeader} variant="subTitle">
                {categoryLabels[category]}
              </Typography>
              {skills[category].map((skill) => (
                <Grid size={{ xs: 12 }} key={skill.name}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="tableTitle">{skill.name}</Typography>
                    <Typography variant="tableTitle">
                      {progress[skill.name] || 0}%
                    </Typography>
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={progress[skill.name] || 0}
                    className={className.progress}
                  />
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;

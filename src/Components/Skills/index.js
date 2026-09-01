import React from "react";
import { Typography, Chip } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./styles";
import { categoryLabels, skills } from "../../Config/static_data";
import { useSelector } from "react-redux";
import Eyebrow from "../Eyebrow";

function Skills() {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11.5, sm: 11, md: 9 }}>
        <Grid className={className.mainHeader}>
          <Eyebrow index="01" label="Tech Stack & Capabilities" />
          <Typography variant="title" style={{ color: themeData.headerText }}>
            Production Skills & Tooling
          </Typography>
          <Typography
            variant="subText"
            style={{
              maxWidth: 620,
              margin: "8px auto 0",
              color: themeData.textSecondary,
            }}
          >
            Real-world capabilities built through 4+ years of shipping
            production web, mobile, and AI applications.
          </Typography>
        </Grid>
        <Grid
          container
          className={className.cardContainer}
          spacing={{ xs: 2, sm: 2.5, md: 3 }}
        >
          {Object.keys(skills).map((category) => {
            const meta = categoryLabels[category] || {
              title: category,
              caption: "",
            };
            return (
              <Grid
                className={className.card}
                size={{ xs: 12, md: 6 }}
                key={category}
              >
                <div className={className.cardHeaderRow}>
                  <Typography className={className.categoryTitle}>
                    {meta.title}
                  </Typography>
                  {meta.caption && (
                    <Typography className={className.categoryCaption}>
                      {meta.caption}
                    </Typography>
                  )}
                </div>
                <div className={className.skillList}>
                  {skills[category].map((skill) => (
                    <div className={className.skillItem} key={skill.name}>
                      <div className={className.skillTopRow}>
                        <Typography className={className.skillName}>
                          {skill.name}
                        </Typography>
                        <div className={className.badgeGroup}>
                          <Chip
                            label={skill.tier}
                            size="small"
                            className={className.tierBadge}
                          />
                          <Chip
                            label={skill.experience}
                            size="small"
                            className={className.expBadge}
                          />
                        </div>
                      </div>
                      <Typography className={className.highlightText}>
                        {skill.highlight}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;


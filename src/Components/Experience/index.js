import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { colors } from "../../Config/theme";
import useStyles from "./styles";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";

export default function Experience() {
  const className = useStyles();

  const array = [
    {
      title: "Frontend Developer",
      company: "Groovy Technoweb",
      description:
        "I create and manage responsive user interfaces for company web applications using React.js and Redux. I develop cross-platform mobile apps for iOS and Android with React Native, collaborating closely with UI/UX designers to implement design concepts into functional and visually appealing web pages. I work with backend developers to ensure seamless integration between front-end and back-end systems. Additionally, I optimize website and app performance to enhance loading speed and improve user experience across various devices.",
      date: "Aug 2022 - Present",
    },
    {
      title: "Intern Frontend Developer",
      company: "Groovy Technoweb",
      description:
        "As a frontend developer intern, I gained a strong foundation in HTML, CSS, JavaScript, React, and React Native. I also worked extensively with Material UI and Ant Design CSS frameworks. During my internship, I translated design mock-ups into interactive and responsive web applications, ensuring cross-browser compatibility and adhering to best practices in web development.",
      date: "Feb 2022 - Aug 2022",
    },
  ];

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 9 }}>
        <Grid style={{ textAlign: "center", marginBottom: 30 }}>
          <Typography variant="title" style={{ color: colors.primary }}>
            Experiences
          </Typography>
        </Grid>
        <VerticalTimeline lineColor={colors.primary}>
          {array?.map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index + "test"}
                date={item?.date}
                icon={<AirplayOutlinedIcon />}
                iconStyle={{
                  background: colors.white,
                  color: colors.black,
                }}
                contentStyle={{
                  backgroundColor: colors.primary,
                  color: colors.white,
                }}
                dateClassName={className.date}
                contentArrowStyle={{
                  borderRight: `7px solid ${colors.primary}`,
                }}
              >
                <Typography variant="head">{item?.title}</Typography>
                <Typography variant="subTitle">{item?.company}</Typography>
                <Typography variant="subText">{item?.description}</Typography>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Grid>
    </Grid>
  );
}

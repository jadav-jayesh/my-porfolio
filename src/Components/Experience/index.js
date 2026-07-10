import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useStyles from "./styles";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import { useSelector } from "react-redux";
import Eyebrow from "../Eyebrow";

export default function Experience() {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();

  // Achievement-focused bullets (X-Y-Z / action-verb framing).
  // TODO: swap the soft phrases for real numbers where you have them
  // (e.g. "cut load time by X%", "used by X+ users") for maximum impact.
  const array = [
    {
      title: "Frontend Developer",
      company: "Groovy Technoweb",
      date: "Aug 2022 - Present",
      points: [
        "Built and shipped responsive React.js + Redux web apps, turning UI/UX designs into production interfaces across multiple company products.",
        "Developed cross-platform iOS & Android apps with React Native from a shared codebase, speeding up feature delivery.",
        "Optimized front-end performance and load speed for a smoother experience on low-end devices.",
        "Partnered with backend developers to integrate REST APIs and ensure reliable front-to-back data flow.",
      ],
    },
    {
      title: "Intern Frontend Developer",
      company: "Groovy Technoweb",
      date: "Feb 2022 - Aug 2022",
      points: [
        "Built a strong foundation in HTML, CSS, JavaScript, React and React Native over a 6-month intensive internship.",
        "Converted design mock-ups into interactive, responsive web apps with full cross-browser compatibility.",
        "Shipped polished, component-driven UIs using Material UI and Ant Design.",
      ],
    },
  ];

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 9 }}>
        <Grid style={{ textAlign: "center", marginBottom: 30 }}>
          <Eyebrow index="02" label="Career Journey" />
          <Typography variant="title" style={{ color: themeData.headerText }}>
            Experiences
          </Typography>
        </Grid>
        <VerticalTimeline lineColor={themeData.primary}>
          {array?.map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index + "test"}
                date={item?.date}
                icon={<AirplayOutlinedIcon />}
                iconStyle={{
                  background: themeData.gradient,
                  color: themeData.white,
                  boxShadow: `0 0 0 4px ${themeData.glow}`,
                }}
                contentStyle={{
                  backgroundColor: themeData.primary,
                  color: themeData.white,
                  border: `1px solid ${themeData.glassBorder}`,
                  borderRadius: 14,
                  boxShadow: themeData.shadow,
                }}
                dateClassName={className.date}
                contentArrowStyle={{
                  borderRight: `7px solid ${themeData.primary}`,
                }}
              >
                <Typography variant="head" style={{ color: themeData.white }}>
                  {item?.title}
                </Typography>
                <Typography
                  variant="subTitle"
                  style={{ color: themeData.white }}
                >
                  {item?.company}
                </Typography>
                <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
                  {item?.points?.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        color: themeData.white,
                        marginBottom: 6,
                        lineHeight: 1.5,
                      }}
                    >
                      <Typography
                        variant="subText"
                        component="span"
                        style={{ color: themeData.white }}
                      >
                        {point}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Grid>
    </Grid>
  );
}

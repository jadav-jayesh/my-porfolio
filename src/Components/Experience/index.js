import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useStyles from "./styles";
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StorageIcon from "@mui/icons-material/Storage";
import ExtensionIcon from "@mui/icons-material/Extension";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useSelector } from "react-redux";
import Eyebrow from "../Eyebrow";

export default function Experience() {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();

  // Phase-based journey timeline: shows growth from frontend to
  // product/system/AI engineering at the same company.
  // TODO: swap the soft phrases for real numbers where you have them
  // (e.g. "cut load time by X%", "used by X+ users") for maximum impact.
  const array = [
    {
      title: "Frontend Developer",
      company: "Groovy Technoweb",
      date: "Aug 2022 - Aug 2023",
      icon: <CodeIcon />,
      points: [
        "React JS: built and shipped responsive React.js + Redux web apps, turning UI/UX designs into production interfaces.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Groovy Technoweb",
      date: "Aug 2023 - Present",
      icon: <CodeIcon />,
      points: [
        "React Native: developed cross-platform iOS & Android apps from a shared codebase, speeding up feature delivery.",
        "Next JS: expanded into server-rendered, production-ready applications.",
      ],
    },
    {
      title: "Product Engineer",
      company: "Groovy Technoweb",
      date: "2023 - 2024",
      icon: <BusinessCenterIcon />,
      points: [
        "Moved beyond UI screens to build real-world features across HRMS and SaaS products: attendance, leave management, regularization, and role-based permissions.",
        "Delivered resource, asset, and organization management plus subscriptions and payments features end-to-end.",
        "Learned to turn business requirements into reliable technical solutions — spotting edge cases and collaborating across the whole application.",
      ],
    },
    {
      title: "System Engineer",
      company: "Groovy Technoweb",
      date: "2024",
      icon: <StorageIcon />,
      points: [
        "Expanded beyond the frontend with hands-on Redis, BullMQ, and SQL — building background jobs, cron jobs, and webhooks.",
        "Integrated Stripe and Razorpay payment flows and automated CI/CD with Azure Pipelines.",
        "Debugged production issues across UI, APIs, databases, queues, caching, and infrastructure to see how the layers work together.",
      ],
    },
    {
      title: "Engineering for Scale",
      company: "Groovy Technoweb",
      date: "2024 - 2025",
      icon: <ExtensionIcon />,
      points: [
        "Built reusable components and packages with Next.js, TypeScript, Rollup, and Yalc.",
        "Applied a strong focus on code quality, reusability, maintainability, and performance across products.",
        "Designed features that work across different parts of a product rather than one-off UI screens.",
      ],
    },
    {
      title: "AI-First Engineer",
      company: "Groovy Technoweb",
      date: "Recent",
      icon: <AutoAwesomeIcon />,
      points: [
        "Adopted an AI-first workflow with Claude and other tools to dramatically increase development speed — from prototyping to shipping features faster.",
        "Use AI throughout the engineering process: code generation, refactoring, debugging, and writing tests, while keeping quality and correctness high.",
        "Stay focused on building experiences that feel useful, polished, intentional, and human-made — not just AI output.",
      ],
    },
  ];

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11.5, sm: 11, md: 9 }}>
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
                icon={item?.icon}
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
                <Typography
                  variant="head"
                  style={{
                    color: themeData.white,
                    fontSize: "clamp(17px, 3.5vw, 22px)",
                    lineHeight: 1.25,
                  }}
                >
                  {item?.title}
                </Typography>
                <Typography
                  variant="subTitle"
                  style={{
                    color: themeData.white,
                    fontSize: "clamp(13px, 2.5vw, 15px)",
                    marginTop: 2,
                  }}
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
        <Typography
          variant="subText"
          style={{
            textAlign: "center",
            display: "block",
            marginTop: 30,
            color: themeData.textSecondary,
          }}
        >
          Frontend → Product → Systems → Scale → AI-First Engineering
        </Typography>
      </Grid>
    </Grid>
  );
}

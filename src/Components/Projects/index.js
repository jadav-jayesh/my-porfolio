import React, { useState } from "react";
import { Card, CardActions, CardContent, Chip, Link, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { GitHub, Launch, Star, Code, SmartToy, PhoneIphone, Public, Apps } from "@mui/icons-material";

import useStyles from "./styles";
import { useSelector } from "react-redux";
import Eyebrow from "../Eyebrow";

import gvoiceImg from "../../Assets/Images/Projects/gvoice.jpg";
import gstrideImg from "../../Assets/Images/Projects/gstride.jpg";
import fleetImg from "../../Assets/Images/Projects/fleet_kaptan.jpg";
import oculabsImg from "../../Assets/Images/Projects/oculabs.jpg";
import boloImg from "../../Assets/Images/Projects/bolo_english.jpg";
import reanloImg from "../../Assets/Images/Projects/reanlo.jpg";
import npmImg from "../../Assets/Images/Projects/dropdown_picker.jpg";
import saayamImg from "../../Assets/Images/Projects/saayam.jpg";
import goraqtImg from "../../Assets/Images/Projects/goraqt.jpg";

const filterCategories = [
  { id: "all", label: "All Projects", count: 9, icon: <Apps fontSize="small" /> },
  { id: "ai", label: "AI & Full-Stack", count: 3, icon: <SmartToy fontSize="small" /> },
  { id: "react", label: "React & Next.js", count: 5, icon: <Code fontSize="small" /> },
  { id: "mobile", label: "React Native & Mobile", count: 4, icon: <PhoneIphone fontSize="small" /> },
  { id: "oss", label: "Open Source", count: 1, icon: <Public fontSize="small" /> },
];

const projects = [
  {
    name: "Gvoice — AI Meeting Intelligence",
    tagline: "Live Bot & Real-Time Transcription Platform",
    category: ["all", "ai", "react"],
    description:
      "Full-stack meeting intelligence system where Playwright bots join Google Meet, Zoom & Teams to capture live audio and transcribe through Whisper & Sarvam APIs with auto-generated action items.",
    technologies: ["React", "TypeScript", "Node.js", "BullMQ", "Redis", "Whisper AI", "Playwright"],
    image: gvoiceImg,
    badge: "AI Platform",
    github: "",
    live: "https://gvoice.groovyweb.ai/",
  },
  {
    name: "GoRaqt — Racquet Sports Mobile App",
    tagline: "Cross-Platform React Native App for Gear & Bookings",
    category: ["all", "mobile"],
    description:
      "Cross-platform React Native mobile application connecting tennis and pickleball players to instant courtside gear checkout, live swing performance tracking, court reservations, and player matching.",
    technologies: ["React Native", "TypeScript", "React Query", "Redux Toolkit", "REST APIs", "Mobile UI/UX"],
    image: goraqtImg,
    badge: "Mobile App",
    github: "",
    live: "https://goraqt.com/",
  },
  {
    name: "Saayam — Social Impact & Relief",
    tagline: "Community Crowdfunding & Transparent Giving Platform",
    category: ["all", "react"],
    description:
      "Full-featured crowdfunding and disaster relief platform with verified campaign creation, Google Maps cause discovery, multi-gateway payments (Cashfree & Aautipay), and real-time beneficiary impact tracking.",
    technologies: ["Next.js", "React", "TypeScript", "Redux", "Google Maps API", "Cashfree"],
    image: saayamImg,
    badge: "Production Platform",
    github: "",
    live: "https://staging.saayam.com/",
  },
  {
    name: "Gstride — Workforce Analytics",
    tagline: "Enterprise Productivity & Time Tracking",
    category: ["all", "ai", "react"],
    description:
      "Enterprise workforce monitoring platform featuring AI tool detection (17+ tools), automated activity heatmaps, desktop screenshot capture, and HRMS reporting dashboards.",
    technologies: ["React", "TypeScript", "Redux", "NestJS", "MySQL", "Electron"],
    image: gstrideImg,
    badge: "Enterprise",
    github: "",
    live: "https://gstride.ai/",
  },
  {
    name: "Bolo English — AI Language Tutor",
    tagline: "Interactive Voice & Quiz AI App",
    category: ["all", "ai", "react"],
    description:
      "Language-learning web & mobile app featuring audio pronunciation scoring, gamified quizzes, streak tracking, and a Google Gemini-powered AI tutor explaining concepts in native languages.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Gemini"],
    image: boloImg,
    badge: "AI Product",
    github: "https://github.com/jayesh-jadav/bolo-english",
    live: "",
  },
  {
    name: "Fleet Kaptan — Logistics PWA",
    tagline: "Real-Time Fleet Operations Dashboard",
    category: ["all", "react"],
    description:
      "Progressive Web App for fleet tracking with live telemetry markers, offline sync, route efficiency analytics, and role-based access control (RBAC) cutting dashboard load times by ~20%.",
    technologies: ["React.js", "Redux Toolkit", "Material-UI", "PWA", "Service Workers"],
    image: fleetImg,
    badge: "Production PWA",
    github: "",
    live: "",
  },
  {
    name: "Oculabs — Healthcare Portal",
    tagline: "Clinical Diagnostic & Patient Management",
    category: ["all", "react", "mobile"],
    description:
      "Dual-platform hospital administration dashboard and patient-facing mobile application designed for diagnostic workflows, doctor scheduling, and real-time medical lab reporting.",
    technologies: ["React.js", "React Native", "Material-UI", "REST APIs"],
    image: oculabsImg,
    badge: "Healthcare",
    github: "",
    live: "",
  },
  {
    name: "rn-month-year-dropdown-picker",
    tagline: "Open Source React Native npm Package",
    category: ["all", "mobile", "oss"],
    description:
      "Zero-dependency, customizable month & year picker dropdown component published to npm with 12+ releases, full TypeScript definitions, and active developer adoption.",
    technologies: ["React Native", "TypeScript", "npm Package", "Open Source"],
    image: npmImg,
    badge: "Open Source",
    github: "https://github.com/jayesh-jadav/rn-month-year-dropdown-picker",
    live: "https://www.npmjs.com/package/rn-month-year-dropdown-picker",
  },
  {
    name: "Reanlo for Readers",
    tagline: "Cross-Platform Mobile Reading App",
    category: ["all", "mobile"],
    description:
      "Cross-platform mobile reading application built in React Native with gesture-based page flipping, offline chapter storage engine, dark mode, and reading progress synchronization.",
    technologies: ["React Native", "TypeScript", "AsyncStorage", "React Navigation"],
    image: reanloImg,
    badge: "Mobile App",
    github: "",
    live: "",
  },
];

const Projects = () => {
  const { themeData } = useSelector((state) => state.auth);
  const className = useStyles(themeData)();
  const [activeCategory, setActiveCategory] = useState("all");

  const motionOff =
    typeof window !== "undefined" &&
    (window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const handleMove = (e) => {
    if (motionOff) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -6;
    const rotateY = (x / rect.width - 0.5) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  const filteredProjects = projects.filter((p) => p.category.includes(activeCategory));

  return (
    <div className={className.container}>
      <Grid container justifyContent="center" sx={{ width: "100%", maxWidth: "1280px", px: { xs: 2, md: 4 } }}>
        <Grid size={12} sx={{ textAlign: "center", mb: 3 }}>
          <Eyebrow index="03" label="Featured Engineering Work" />
          <Typography variant="h1" sx={{ fontSize: "clamp(28px, 4vw, 42px) !important", fontWeight: "700 !important", color: themeData.headerText, mt: 1 }}>
            Featured Projects
          </Typography>
          <Typography variant="subText" sx={{ color: themeData.textSecondary, mt: 1, maxWidth: "600px", mx: "auto" }}>
            Real-world systems, AI platforms, and open-source packages shipped to production.
          </Typography>
        </Grid>

        {/* Category Filter Tabs */}
        <Grid size={12} sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.2, mb: 4 }}>
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                startIcon={cat.icon}
                sx={{
                  padding: "7px 16px !important",
                  borderRadius: "24px !important",
                  fontSize: "13px !important",
                  fontWeight: "600 !important",
                  textTransform: "none",
                  backgroundColor: isActive ? `${themeData.primary} !important` : `${themeData.surface} !important`,
                  color: isActive ? `${themeData.white} !important` : `${themeData.text} !important`,
                  border: `1px solid ${isActive ? themeData.accent : themeData.glassBorder} !important`,
                  boxShadow: isActive ? `0 4px 14px ${themeData.glow}` : "none",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: isActive ? themeData.primary : themeData.secondary,
                    borderColor: themeData.accent,
                  },
                }}
              >
                {cat.label} ({cat.count})
              </Button>
            );
          })}
        </Grid>

        <Grid container spacing={3.5} justifyContent="center" sx={{ width: "100%" }}>
          {filteredProjects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.name} sx={{ display: "flex" }}>
              <Card
                className={`${className.card} project-card-border`}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
              >
                <div className={className.imageWrapper}>
                  <img src={project.image} alt={project.name} className={className.image} loading="lazy" />
                  {project.badge && (
                    <Chip label={project.badge} size="small" className={className.badge} icon={<Star sx={{ fontSize: "14px !important", color: "#22d3ee !important" }} />} />
                  )}
                </div>

                <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "18.5px !important", fontWeight: "700 !important", color: themeData.headerText, mb: 0.5 }}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="subTitle"
                    sx={{ fontSize: "12.5px !important", color: themeData.accent, fontWeight: "600 !important", display: "block", mb: 1.5 }}
                  >
                    {project.tagline}
                  </Typography>
                  <Typography variant="subText" sx={{ fontSize: "13.5px !important", lineHeight: 1.55, color: themeData.text, mb: 2 }}>
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
                      <Launch fontSize="small" /> Live App
                    </Link>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;

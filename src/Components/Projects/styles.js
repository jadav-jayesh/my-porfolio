import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    container: {
      padding: "80px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: themeData.surfaceAlt,
    },
    mainHeader: {
      textAlign: "center",
    },
    card: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: `${themeData.glassBg} !important`,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      color: `${themeData.text} !important`,
      border: `1px solid ${themeData.glassBorder}`,
      height: "100%",
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: `${themeData.shadow} !important`,
      borderRadius: "12px !important",
      borderTop: `4px solid ${themeData.primary}`,
      transformStyle: "preserve-3d",
      willChange: "transform",
      transition: "transform 250ms ease, box-shadow 300ms ease !important",
      // spotlight glow that follows the cursor inside the card
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        background: `radial-gradient(220px circle at var(--mx, 50%) var(--my, 0%), ${themeData.glow}, transparent 65%)`,
        opacity: 0,
        transition: "opacity 300ms ease",
        pointerEvents: "none",
        zIndex: 0,
      },
      "&:hover::before": {
        opacity: 1,
      },
      "& .MuiCardContent-root, & .MuiCardActions-root": {
        position: "relative",
        zIndex: 1,
      },
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: `0px 18px 34px -10px ${themeData.glow} !important`,
      },
    },
    chipRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 14,
    },
    chip: {
      backgroundColor: `${themeData.secondary} !important`,
      color: `${themeData.headerText} !important`,
      fontWeight: "700 !important",
    },
    actions: {
      padding: "0px 16px 16px 16px !important",
      gap: 20,
    },
    projectLink: {
      display: "flex !important",
      alignItems: "center",
      gap: 6,
      color: `${themeData.primary} !important`,
      fontWeight: "700 !important",
      fontSize: 14,
      transition: "opacity 200ms ease",
      "&:hover": {
        opacity: 0.7,
      },
    },
    date: {
      color: themeData.text,
      "@media (max-width:1171px)": {
        color: themeData.white,
      },
    },
  }));

export default useStyles;

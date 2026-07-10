import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    container: {
      padding: "110px 0px 90px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      // drifting aurora glow blobs behind the hero
      "&::before": {
        content: '""',
        position: "absolute",
        top: "-140px",
        right: "-60px",
        width: 460,
        height: 460,
        borderRadius: "50%",
        background: themeData.heroGlow1,
        filter: "blur(110px)",
        zIndex: 0,
        pointerEvents: "none",
        animation: "auroraDrift1 18s ease-in-out infinite",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-160px",
        left: "-90px",
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: themeData.heroGlow2,
        filter: "blur(110px)",
        zIndex: 0,
        pointerEvents: "none",
        animation: "auroraDrift2 22s ease-in-out infinite",
      },
    },
    auroraBlob3: {
      position: "absolute",
      top: "20%",
      left: "38%",
      width: 340,
      height: 340,
      borderRadius: "50%",
      background: themeData.heroGlow3,
      filter: "blur(120px)",
      zIndex: 0,
      pointerEvents: "none",
      animation: "auroraDrift3 26s ease-in-out infinite",
    },
    nameGradient: {
      background: themeData.gradient,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
    },
    section: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 50,
      position: "relative",
      zIndex: 1,
      "@media (max-width:900px)": {
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: "column-reverse",
        textAlign: "center",
      },
    },
    borderWrapper: {
      display: "inline-block",
      position: "relative",
      padding: 5,
      borderRadius: "50%",
      zIndex: 1,
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "50%",
        boxShadow: `0px 0px 30px 10px ${themeData.primary}`,
        animation: "$rotateShadowEffect 5s linear infinite",
        zIndex: -1,
      },
    },
    img: {
      borderRadius: "50%",
      minHeight: "30vw", // Adjust the size as per your requirement
      minWidth: "30vw",
      display: "block",
      "@media (max-width:900px)": {
        minHeight: "40vw", // Adjust the size as per your requirement
        minWidth: "40vw",
      },
    },
    "@keyframes rotateShadowEffect": {
      "0%": {
        boxShadow: `10px 0px 30px 10px ${themeData.primary}`,
      },
      "25%": {
        boxShadow: `0px 10px 30px 10px ${themeData.primary}`,
      },
      "50%": {
        boxShadow: `-10px 0px 30px 10px ${themeData.primary}`,
      },
      "75%": {
        boxShadow: `0px -10px 30px 10px ${themeData.primary}`,
      },
      "100%": {
        boxShadow: `10px 0px 30px 10px ${themeData.primary}`,
      },
    },
    ctaContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: 15,
      marginTop: 25,
      "@media (max-width:900px)": {
        justifyContent: "center",
      },
    },
    ctaOutline: {
      color: `${themeData.text} !important`,
      backgroundColor: `${themeData.transparent} !important`,
      border: `1.5px solid ${themeData.accent} !important`,
      "&:hover": {
        color: `${themeData.background} !important`,
        backgroundColor: `${themeData.accent} !important`,
        boxShadow: `0 0 18px -2px ${themeData.glow} !important`,
      },
    },
    socialMain: {
      margin: "20px 0px",
    },
    socialContainer: {
      display: "flex",
      gap: 20,
      marginTop: 5,
      "@media (max-width:900px)": {
        justifyContent: "center",
        gap: 10,
      },
    },
    iconButton: {
      display: "flex !important",
      alignItems: "center !important",
      height: 40,
      width: 40,
      borderRadius: "50px",
      color: `${themeData.white} !important`,
      fontWeight: 700,
      backgroundColor: themeData.primary,
      transition: "all 0.5s ease-out !important",
      boxShadow: themeData.chipShadow,
      overflow: "hidden",
      "&:hover": {
        width: "150px !important",
        "& $socialText": {
          display: "block !important",
        },
      },
      "@media (hover: none)": {
        "&:hover": {
          width: "40px !important", // Keep original size
          "& $socialText": {
            display: "none", // Hide text on touch devices
          },
        },
      },
    },
    socialIcon: {
      transition: "linear 0.5s !important",
      float: "left",
      margin: 10,
      borderRadius: 50,
      height: "20px !important",
      width: "20px !important",
      alignItem: "center",
      color: themeData.white,
    },
    socialText: {
      display: "none !important",
      color: `${themeData.white} !important`,
    },
    subText: {
      margin: "10px 0px",
    },
    workContainer: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      marginTop: 28,
      "@media (max-width:900px)": {
        justifyContent: "center",
      },
    },
    card: {
      padding: "16px 26px",
      borderRadius: 16,
      backgroundColor: themeData.glassBg,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: `1px solid ${themeData.glassBorder}`,
      boxShadow: themeData.shadow,
      transition: "transform 250ms ease, box-shadow 250ms ease",
      "& .MuiTypography-head": {
        background: themeData.gradient,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: `0px 16px 30px -12px ${themeData.glow}`,
      },
    },
  }));

export default useStyles;

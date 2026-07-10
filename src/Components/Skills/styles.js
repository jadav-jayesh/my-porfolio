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
      marginBottom: 20,
    },
    cardContainer: {
      marginTop: 20,
    },
    card: {
      position: "relative",
      backgroundColor: themeData.glassBg,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: `1px solid ${themeData.glassBorder}`,
      boxShadow: themeData.shadow,
      padding: 26,
      borderRadius: 16,
      overflow: "hidden",
      transition: "transform 300ms ease, box-shadow 300ms ease",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: themeData.gradient,
      },
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: `0px 16px 30px -12px ${themeData.glow}`,
      },
    },
    cardHeader: {
      color: themeData.primary,
      marginBottom: "16px !important",
      letterSpacing: "1px !important",
      textTransform: "uppercase",
    },
    progress: {
      width: "100%",
      height: "8px !important",
      borderRadius: "8px !important",
      marginBottom: "20px !important",
      marginTop: "4px",
      backgroundColor: `${themeData.glassBorder} !important`,
      "& .MuiLinearProgress-bar": {
        borderRadius: "8px",
        background: themeData.gradient,
      },
    },
  }));

export default useStyles;

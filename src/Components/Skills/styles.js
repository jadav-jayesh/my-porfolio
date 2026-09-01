import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    container: {
      padding: "80px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: themeData.surfaceAlt,
      "@media (max-width:768px)": {
        padding: "48px 0px",
      },
    },
    mainHeader: {
      textAlign: "center",
      marginBottom: 30,
      "@media (max-width:768px)": {
        marginBottom: 20,
      },
    },
    cardContainer: {
      marginTop: 10,
    },
    card: {
      position: "relative",
      backgroundColor: themeData.glassBg,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: `1px solid ${themeData.glassBorder}`,
      boxShadow: themeData.shadow,
      padding: "24px 22px",
      borderRadius: 16,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      boxSizing: "border-box",
      transition:
        "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
      "@media (max-width:600px)": {
        padding: "16px 14px",
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: themeData.gradient,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      },
      "&:hover": {
        transform: "translateY(-4px)",
        borderColor: themeData.primary,
        boxShadow: `0px 16px 32px -12px ${themeData.glow}`,
      },
    },
    cardHeaderRow: {
      marginBottom: 16,
      paddingBottom: 12,
      borderBottom: `1px solid ${themeData.glassBorder}`,
    },
    categoryTitle: {
      color: themeData.headerText,
      fontWeight: "700 !important",
      fontSize: "17px !important",
      letterSpacing: "-0.01em",
    },
    categoryCaption: {
      color: themeData.textSecondary,
      fontSize: "12.5px !important",
      marginTop: "2px",
      lineHeight: 1.4,
    },
    skillList: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    skillItem: {
      padding: "10px 12px",
      borderRadius: 10,
      backgroundColor: themeData.surface,
      border: `1px solid ${themeData.glassBorder}`,
      transition: "background-color 200ms ease, border-color 200ms ease",
      "&:hover": {
        borderColor: themeData.borderLight || themeData.primary,
      },
    },
    skillTopRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 4,
    },
    skillName: {
      color: themeData.headerText,
      fontWeight: "600 !important",
      fontSize: "14px !important",
      letterSpacing: "-0.01em",
      "@media (max-width:480px)": {
        fontSize: "13px !important",
      },
    },
    badgeGroup: {
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
    tierBadge: {
      fontSize: "11px !important",
      fontWeight: "700 !important",
      padding: "2px 8px !important",
      height: "20px !important",
      borderRadius: "6px !important",
      backgroundColor: `${themeData.primary}18 !important`,
      color: `${themeData.primary} !important`,
      border: `1px solid ${themeData.primary}33 !important`,
      letterSpacing: "0.02em",
    },
    expBadge: {
      fontSize: "11px !important",
      fontWeight: "600 !important",
      padding: "2px 8px !important",
      height: "20px !important",
      borderRadius: "6px !important",
      backgroundColor: `${themeData.glassBorder} !important`,
      color: `${themeData.textSecondary} !important`,
    },
    highlightText: {
      color: themeData.textSecondary,
      fontSize: "12px !important",
      lineHeight: 1.4,
      fontFamily: "'Plus Jakarta Sans', sans-serif !important",
    },
  }));

export default useStyles;


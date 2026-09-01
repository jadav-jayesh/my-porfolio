import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    container: {
      padding: "80px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: themeData?.surfaceAlt,
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
    section: {
      marginTop: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 50,
    },
    formCard: {
      width: "100%",
      boxSizing: "border-box",
      padding: "40px",
      borderRadius: 20,
      backgroundColor: themeData?.glassBg,
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      border: `1px solid ${themeData?.glassBorder}`,
      boxShadow: themeData?.shadow,
      "@media (max-width:768px)": {
        padding: "24px",
        borderRadius: 16,
      },
      "@media (max-width:480px)": {
        padding: "18px 14px",
      },
    },
  }));

export default useStyles;

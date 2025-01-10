import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    container: {
      padding: "50px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: themeData.secondary,
    },
    mainHeader: {
      textAlign: "center",
    },
    cardContainer: {
      marginTop: 20,
    },
    card: {
      backgroundColor: themeData.background,
      boxShadow: themeData.shadow,
      padding: 20,
      borderRadius: 12,
      transition: "0.3s, transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    cardHeader: {
      color: themeData.primary,
      marginBottom: "10px !important",
    },
    progress: {
      width: "100%",
      height: "6px !important",
      borderRadius: "5px !important",
      marginBottom: "20px !important",
    },
  }));

export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    container: {
      padding: "80px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: themeData?.background,
    },
    mainHeader: {
      textAlign: "center",
    },
    date: {
      color: themeData?.text,
      "@media (max-width:1171px)": {
        color: themeData?.white,
      },
    },
  }));

export default useStyles;

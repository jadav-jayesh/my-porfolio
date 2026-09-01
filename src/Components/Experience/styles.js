import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    container: {
      padding: "80px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: themeData?.background,
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
    date: {
      color: `${themeData?.text} !important`,
      fontWeight: "600 !important",
      fontSize: "13.5px !important",
      "@media (max-width:1170px)": {
        color: `${themeData?.white} !important`,
        padding: "0 !important",
        marginTop: "8px !important",
        display: "inline-block !important",
        opacity: 0.9,
      },
    },
    "@global": {
      ".vertical-timeline": {
        width: "100% !important",
        maxWidth: "100% !important",
        padding: "12px 0 !important",
      },
      "@media (max-width: 768px)": {
        ".vertical-timeline-element-icon": {
          width: "36px !important",
          height: "36px !important",
          left: "2px !important",
          "& svg": {
            width: "18px !important",
            height: "18px !important",
            margin: "9px !important",
          },
        },
        ".vertical-timeline-element-content": {
          marginLeft: "50px !important",
          padding: "16px 14px !important",
          borderRadius: "12px !important",
        },
        ".vertical-timeline-element-content-arrow": {
          display: "none !important",
        },
      },
    },
  }));

export default useStyles;

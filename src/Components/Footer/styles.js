import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    bottomRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      width: "100%",
      "@media (max-width:800px)": {
        flexDirection: "column-reverse",
        textAlign: "center",
        gap: 16,
      },
    },
    copyrightText: {
      color: `${themeData.white} !important`,
      fontSize: "14px !important",
      fontWeight: "600 !important",
      lineHeight: "1.5 !important",
      "@media (max-width:480px)": {
        fontSize: "12.5px !important",
      },
    },
    socialContainer: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      justifyContent: "center",
      "@media (max-width:480px)": {
        gap: 10,
      },
    },
    iconButton: {
      display: "flex !important",
      alignItems: "center !important",
      height: 40,
      width: 40,
      borderRadius: "50px",
      backgroundColor: themeData.white,
      color: `${themeData.primary} !important`,
      fontWeight: 700,
      transition: "all 0.4s ease-out !important",
      overflow: "hidden",
      "&:hover": {
        width: "140px !important",
        "& $socialText": {
          display: "block !important",
        },
      },
      "@media (hover: none)": {
        "&:hover": {
          width: "40px !important",
          "& $socialText": {
            display: "none",
          },
        },
      },
    },
    socialIcon: {
      display: "flex",
      transition: "linear 0.4s !important",
      float: "left",
      margin: 10,
      height: "20px !important",
      width: "20px !important",
    },
    socialText: {
      display: "none !important",
      color: `${themeData.primary} !important`,
    },

    arrow: {
      transition: "all 0.3s ease !important",
      height: 44,
      width: 44,
      backgroundColor: `${themeData.white} !important`,
      color: `${themeData.black} !important`,
      "&:hover": {
        backgroundColor: `${themeData.hoverColor} !important`,
        color: `${themeData.white} !important`,
      },
      "@media (max-width:480px)": {
        height: 38,
        width: 38,
      },
    },
  }));

export default useStyles;

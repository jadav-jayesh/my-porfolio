import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    socialContainer: {
      display: "flex",
      gap: 20,
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
      transition: "all 0.5s ease-out !important",
      overflow: "hidden",
      "&:hover": {
        width: "150px !important",
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
      transition: "linear 0.5s !important",
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
      transition: "0.5s",
      height: 50,
      width: 50,
      backgroundColor: `${themeData.white} !important`,
      color: `${themeData.black} !important`,
      "&:hover": {
        backgroundColor: `${themeData.hoverColor} !important`,
        color: `${themeData.white} !important`,
      },
    },
  }));

export default useStyles;

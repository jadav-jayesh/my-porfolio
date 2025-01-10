import { makeStyles } from "@mui/styles";

const useStyles = (themeData) =>
  makeStyles(() => ({
    tab: {
      position: "relative",
      fontSize: "14px !important",
      color: `${themeData.white} !important`,
      textDecoration: "none",
      padding: "4px 10px !important",
      minWidth: "0px !important",
      transition: "color 0.5s ease",
      zIndex: 1,
      fontWeight: "700 !important",
      "&::after": {
        content: '""',
        position: "absolute",
        top: -8,
        width: "100%",
        height: "100%",
        zIndex: 1,
        borderBottom: `2px solid ${themeData.white}`,
        borderRadius: "15px",
        transform: "scale(0) translateY(50px)",
        transition: "transform 0.5s ease, opacity 0.5s ease",
        opacity: 0,
      },
      "&:hover::after": {
        transform: "scale(1) translateY(0)",
        opacity: 1,
      },
      "@media (max-width:1000px)": {
        padding: "4px 5px !important",
      },
      // "&.Mui-selected": {
      //   "&::after": {
      //     transform: "scale(1) translateY(0)",
      //     opacity: 1,
      //   },
      // },
      // "@media (max-width:900px)": {
      //   color: `${themeData.primary} !important`,
      // },
    },
    switchContainer: {
      "@media (max-width:900px)": {
        display: "none",
      },
    },
    iconContainer: {
      transition: "3s",
      gap: 10,
      alignItems: "center",
      display: "none",
      "@media (max-width:900px)": {
        display: "flex",
      },
    },
    menuIcon: {
      color: `${themeData.white} !important`,
      transition: "5s",
      display: "none",
      "@media (max-width:900px)": {
        display: "block",
      },
    },
  }));

export default useStyles;

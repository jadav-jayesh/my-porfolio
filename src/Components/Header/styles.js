import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  tab: {
    position: "relative",
    fontSize: "1.1em",
    color: `${colors.white} !important`,
    textDecoration: "none",
    padding: "4px 20px !important",
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
      borderBottom: `2px solid ${colors.white}`,
      borderRadius: "15px",
      transform: "scale(0) translateY(50px)",
      transition: "transform 0.5s ease, opacity 0.5s ease",
      opacity: 0,
    },
    "&:hover::after": {
      transform: "scale(1) translateY(0)",
      opacity: 1,
    },
    // "&.Mui-selected": {
    //   "&::after": {
    //     transform: "scale(1) translateY(0)",
    //     opacity: 1,
    //   },
    // },
    // "@media (max-width:900px)": {
    //   color: `${colors.primary} !important`,
    // },
  },
  indicator: {
    display: "none",
  },
}));

export default useStyles;

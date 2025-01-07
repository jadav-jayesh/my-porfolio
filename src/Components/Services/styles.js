import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  container: {
    padding: "50px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  mainHeader: {
    textAlign: "center",
  },
  card: {
    height: "100%",
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px !important",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out !important",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
      "& .MuiCardContent-root": {
        "&::before": {
          opacity: 0.8,
        },
      },
      "& .icon-container": {
        transform: "scale(1.1)",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
      },
    },
  },
  cardContent: {
    height: "100%",
    position: "relative",
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      transition: "opacity 0.3s ease-in-out",
      zIndex: -1,
    },
  },
}));

export default useStyles;

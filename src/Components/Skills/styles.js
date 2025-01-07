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
  cardContainer: {
    marginTop: 20,
  },
  card: {
    backgroundColor: colors.white,
    boxShadow: colors.shadow,
    padding: 20,
    borderRadius: 12,
    transition: "0.3s, transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardHeader: {
    color: colors.primary,
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

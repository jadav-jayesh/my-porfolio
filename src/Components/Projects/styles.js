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
  date: {
    color: colors.text,
    "@media (max-width:1171px)": {
      color: colors.white,
    },
  },
}));

export default useStyles;

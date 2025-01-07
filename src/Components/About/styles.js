import { makeStyles } from "@mui/styles";
import { colors } from "../../Config/theme";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex !important",
    alignItems: "center",
    flexWrap: "nowrap !important",
    gap: "100px !important",
    padding: "0px 7rem 0px 7rem",
    // backgroundColor: colors.surface,
  },
}));

export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cardList: {
    width: " 300px",
    margin: "0px auto",
  },

  card: {
    userSelect: "none",
    // transition: "backgroundColor 0.3s",
    transition: "backgroundColor 0.3s, transform 0.3s ease",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
}));

export default useStyles;

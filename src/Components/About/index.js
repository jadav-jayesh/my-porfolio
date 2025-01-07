import React from "react";
import useStyles from "./styles";
import {
  Button,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { colors } from "../../Config/theme";

function About(props) {
  const { handleChange } = props;
  const className = useStyles();
  return (
    <Grid2 container className={className.container}>
      {/* <Grid2 item size={4} className={className.borderWrapper}>
        <Avatar className={className.img} />
        <img src={Images.profile} className={className.img} />
      </Grid2> */}
      <Grid2 item size={8}>
        <Typography variant="h1" gutterBottom>
          Hi, I'm <span style={{ color: colors.primary }}>Jayesh Jadav</span> 👋
        </Typography>
        <Typography variant="subText" style={{ marginBottom: "1rem" }}>
          I’m a frontend developer specializing in React, JavaScript, and
          creating user-friendly web applications. Passionate about technology
          and always eager to learn.
        </Typography>
        <div>
          <Typography variant="title">Skills:</Typography>
          <List sx={{ width: "100%" }}>
            <ListItem>
              <ListItemText>React, JavaScript, Redux</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>HTML, CSS, Material-UI</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Firebase, Redux Toolkit</ListItemText>
            </ListItem>
          </List>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => handleChange("contact")}
        >
          Let’s Collaborate
        </Button>
      </Grid2>
    </Grid2>
  );
}

export default About;

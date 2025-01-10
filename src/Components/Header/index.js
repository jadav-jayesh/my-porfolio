import { Tab, Tabs, Drawer, IconButton, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import useStyles from "./styles";
import { colors, darkColors } from "../../Config/theme";
import MainLogo from "../MainLogo";
import MaterialUISwitch from "../Switch";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../Redux/Reducer/auth/action";

const Header = (props) => {
  const dispatch = useDispatch();
  const { themeData, switchBool } = useSelector((state) => state.auth);
  const { setThemeData, setSwitchBool } = authActions;
  const { value = "home", handleChange = () => null } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles(themeData)();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // this function is used to handle switch changed
  const handleSwitch = (e) => {
    dispatch(setSwitchBool(e.target.checked));
    if (e.target.checked) {
      dispatch(setThemeData(darkColors));
    } else {
      dispatch(setThemeData(colors));
    }
  };

  return (
    <Grid
      container
      style={{
        justifyContent: "center",
        padding: "10px 0px",
        backgroundColor: themeData.primary,
      }}
    >
      <Grid
        size={{ xs: 11, md: 9 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MainLogo />
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Tabs
            value={value}
            onChange={(event, newValue) => handleChange(event, newValue)}
            sx={{ display: { xs: "none", md: "flex" }, gap: 10 }}
          >
            <Tab value={"home"} label="Home" className={classes.tab} />
            <Tab value={"skills"} label="Skills" className={classes.tab} />
            {/* <Tab value={"services"} label="Services" className={classes.tab} /> */}
            <Tab
              value={"experience"}
              label="Experiences"
              className={classes.tab}
            />
            <Tab value={"project"} label="projects" className={classes.tab} />
            <Tab value={"contact"} label="Contact" className={classes.tab} />
          </Tabs>
          <Grid className={classes.switchContainer}>
            <MaterialUISwitch onChange={handleSwitch} checked={switchBool} />
          </Grid>
        </Grid>
        {/* Icon Button for Mobile Menu */}
        <Grid className={classes.iconContainer}>
          <MaterialUISwitch onChange={handleSwitch} checked={switchBool} />
          <IconButton onClick={toggleDrawer(true)} className={classes.menuIcon}>
            <Menu />
          </IconButton>
        </Grid>

        {/* Drawer for Mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              backgroundColor: themeData.primary,
              height: "100%",
              paddingTop: "30px",
            }}
          >
            <IconButton
              sx={{
                display: {
                  color: themeData.white,
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
              }}
              onClick={toggleDrawer(false)}
            >
              <Close />
            </IconButton>
            <Tabs
              value={value}
              onChange={(event, newValue) => handleChange(event, newValue)}
              orientation="vertical"
              sx={{ width: 250 }}
            >
              <Tab value={"home"} label="Home" className={classes.tab} />
              <Tab value={"skills"} label="Skills" className={classes.tab} />
              {/* <Tab value={"services"} label="Services" className={classes.tab} /> */}
              <Tab
                value={"experience"}
                label="Experience"
                className={classes.tab}
              />
              <Tab value={"project"} label="projects" className={classes.tab} />
              <Tab value={"contact"} label="Contact" className={classes.tab} />
            </Tabs>
          </Box>
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default Header;

import { Tab, Tabs, Drawer, IconButton, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { flushSync } from "react-dom";
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

  // this function is used to handle switch changed with ripple animation
  const handleSwitch = (e) => {
    const nextChecked = e.target.checked;
    const nextTheme = nextChecked ? darkColors : colors;

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      dispatch(setSwitchBool(nextChecked));
      dispatch(setThemeData(nextTheme));
      return;
    }

    const el = e.target.closest?.(".MuiSwitch-root") || e.target;
    const rect = el?.getBoundingClientRect?.() || {
      left: window.innerWidth / 2,
      top: 0,
      width: 0,
      height: 0,
    };
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const right = window.innerWidth - x;
    const bottom = window.innerHeight - y;
    const maxRadius = Math.hypot(
      Math.max(x, right),
      Math.max(y, bottom)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        dispatch(setSwitchBool(nextChecked));
        dispatch(setThemeData(nextTheme));
      });
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 550,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {});
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

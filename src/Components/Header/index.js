import { Tab, Tabs, Drawer, IconButton, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import useStyles from "./styles";
import { colors } from "../../Config/theme";
import MainLogo from "../MainLogo";

const Header = (props) => {
  const { value = "home", handleChange = () => null } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Grid
      container
      style={{
        justifyContent: "center",
        padding: "10px 0px",
        backgroundColor: colors.primary,
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
            gap: 30,
          }}
        >
          <Tabs
            value={value}
            onChange={(event, newValue) => handleChange(event, newValue)}
            classes={{ indicator: classes.indicator }}
            sx={{ display: { xs: "none", md: "flex" } }}
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
        </Grid>
        {/* Icon Button for Mobile Menu */}
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            display: {
              xs: "block",
              md: "none",
              color: colors.white,
              transition: "1s",
            },
          }}
        >
          <Menu />
        </IconButton>

        {/* Drawer for Mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              backgroundColor: colors.primary,
              height: "100%",
              paddingTop: "30px",
            }}
          >
            <IconButton
              sx={{
                display: {
                  color: colors.white,
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
              classes={{ indicator: classes.indicator }}
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

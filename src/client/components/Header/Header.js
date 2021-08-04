import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { contentLayout } from "../layoutCss";

import LoginBtn from "../LoginBtn/LoginBtn";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 0,
    position: "fixed",
    width: "100%",
    zIndex: 999,
    borderRadius: 0,
  },
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const linkCss = contentLayout()();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/" className={linkCss.link}>
          <Tabs value={false}>
            <Tab label="MiDai" />
          </Tabs>
        </Link>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <LoginBtn />
      </Grid>
    </Paper>
  );
};

export default Header;

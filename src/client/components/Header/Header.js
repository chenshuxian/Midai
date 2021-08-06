/* eslint-disable react/jsx-key */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { contentLayout } from "../layoutCss";
import { useDispatch, useSelector } from "react-redux";

import LoginBtn from "../LoginBtn/LoginBtn";
import { setPagePosition } from "../../redux/Commons/Commons.actions";
import { HOME } from "../../const";
import { homeSection } from "../data";

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
  const linkCss = contentLayout()();
  const page = useSelector((state) => state.common.page);
  const dispatch = useDispatch();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link
          to="/"
          className={linkCss.link}
          onClick={() => {
            dispatch(setPagePosition(HOME));
          }}
        >
          <Tabs value={false}>
            <Tab label="MiDai" />
          </Tabs>
        </Link>
        <div style={{ display: "flex" }}>
          {page == "home"
            ? homeSection.map((item, index) => {
                return (
                  <a key={index} href={"#" + item.id} className={linkCss.link}>
                    <Tabs value={false}>
                      <Tab label={item.title} />
                    </Tabs>
                  </a>
                );
              })
            : null}
        </div>
        <LoginBtn />
      </Grid>
    </Paper>
  );
};

export default Header;

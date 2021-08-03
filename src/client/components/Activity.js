/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Header from "./Header";
import CardList from "./CardList";
import { Grid, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { activity, activityList, activityType } from "./data";
import { contentLayout } from "./layoutCss";

const ChipRe = (props) => {
  const [bgColor, setbgColor] = useState("outlined");

  const handleClick = () => {
    if (bgColor == "outlined") setbgColor("default");
    else setbgColor("outlined");
  };

  return (
    <Chip
      variant={bgColor}
      size="medium"
      label={props.label}
      onClick={handleClick}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
    borderBottom: "1px solid rgba(0, 0, 0, 0.1) !important",
    paddingBottom: 10,
  },
}));

const Activity = () => {
  const classes = contentLayout()();
  const chipCss = useStyles();

  return (
    <Grid container>
      <Header />
      <Grid item xs className={classes.root}>
        <div style={{ marginTop: 40 }}></div>
        <CardList items={activity.data} title={activity.title} />
        <Grid item className={chipCss.root}>
          <Chip variant="outlined" size="medium" label="地區" />
          <Chip variant="outlined" size="medium" label="日期選擇" />
          <span
            style={{ borderLeft: "1px solid grey", marginLeft: 8, height: 36 }}
          ></span>
          {activityType.map((item) => {
            return <ChipRe key={item.id} label={item.name} />;
          })}
        </Grid>
        <CardList items={activityList.data} title={activityList.title} md={2} />
      </Grid>
      {/* <Grid item xs>
            <CardList items={activity.data} title={activity.title}/>
            </Grid> */}
    </Grid>
  );
};

export default Activity;

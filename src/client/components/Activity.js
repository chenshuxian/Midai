/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import CardList from "./CardList";
import { Grid, Chip, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { activity, newactivityList, activityType } from "./data";
import { contentLayout } from "./layoutCss";
import { getActivityList } from "../redux/Activitys/Activitys.actions";

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

export default function Activity() {
  const classes = contentLayout()();
  const chipCss = useStyles();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.activity.activityList);

  return (
    <Grid container>
      <Header />
      <Grid item xs className={classes.root}>
        <div style={{ marginTop: 40 }}></div>
        {/* 近期活動區 */}
        <CardList items={activity.data} title={activity.title} />
        {/* 類別過濾區 */}
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
        {/* 全部活動區 */}
        <CardList
          items={items.data}
          title={items.title}
          md={2}
          id="activityAll"
        />
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              dispatch(getActivityList(newactivityList));
            }}
          >
            載入更多活動
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

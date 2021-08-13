import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header";
import Footer from "../Footer";
import { contentLayout } from "../layoutCss";
import { Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InfoIcon from "@material-ui/icons/Info";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EventNoteIcon from "@material-ui/icons/EventNote";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import ShareIcon from "@material-ui/icons/Share";
import { setPagePosition } from "../../redux/Commons/Commons.actions";
import CardList from "../CardList";
import { activityList } from "../data";

const useStyles = makeStyles({
  cardFirst: {
    borderRadius: "10px 0 0 10px",
  },
  cardEnd: {
    borderRadius: "0 10px 10px 0",
  },
});

const data = [
  {
    name: "地點",
    obj: <LocationOnIcon />,
  },
  {
    name: "報名方式",
    obj: <PhoneIcon />,
  },
  {
    name: "時間",
    obj: <EventNoteIcon />,
  },
  {
    name: "查詢",
    obj: <InfoIcon />,
  },
  {
    name: "價格",
    obj: <MonetizationOnIcon />,
  },
  {
    name: "網址",
    obj: <LanguageIcon />,
  },
];

const Detail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPagePosition(location.pathname));
  }, []);

  const classes = contentLayout()();
  const card = useStyles();
  const imgHeight = 516;
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="column" spacing={2} className={classes.root}>
          <Grid item>
            <Typography variant="h4">活動主題</Typography>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Grid container>
                  <FavoriteBorderIcon />
                  <Typography>100</Typography>
                  <Typography> 金湖 ・ 休閒</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <ShareIcon />
                  <Typography>分享</Typography>
                  <FavoriteBorderIcon />
                  <Typography>儲存</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* 圖片呈現 */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <CardMedia
                  component="img"
                  height={imgHeight}
                  src="https://source.unsplash.com/featured/?kid"
                  classes={{ root: card.cardFirst }}
                ></CardMedia>
              </Grid>
              <Grid item xs={12} md={3}>
                <CardMedia
                  component="img"
                  height={imgHeight}
                  src="https://source.unsplash.com/featured/?fruit"
                ></CardMedia>
              </Grid>
              <Grid item xs={12} md={2}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <CardMedia
                      component="img"
                      height="250"
                      src="https://source.unsplash.com/featured/?boy"
                    ></CardMedia>
                  </Grid>
                  <Grid item xs={12}>
                    <CardMedia
                      component="img"
                      height="250"
                      src="https://source.unsplash.com/featured/?girl"
                    ></CardMedia>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <CardMedia
                  component="img"
                  height={imgHeight}
                  src="https://source.unsplash.com/featured/?gov"
                  classes={{ root: card.cardEnd }}
                ></CardMedia>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.basicLine}></div>
          {/* 活動資訊 */}
          <Grid item xs>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4">活動資訊</Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={3}>
                  {data.map((item, index) => {
                    return (
                      <Grid key={index} item xs={6}>
                        <Grid container alignItems="center">
                          {item.obj}
                          <Typography>{item.name} :</Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* 活動內容 */}
          <div className={classes.basicLine}></div>
          <Grid item xs>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4">活動內容</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  Coaching a phenom is a discussion with John Henwood, New
                  Zealand Olympian and coach, and Mary Cain, long-distance
                  running champion. Learn how to be a leader through this
                  conversation that shows how coaching leadership transfers to
                  business leadership. In other words, you have to look at the
                  whole athlete (or employee) to maximize performance. This
                  experience shows the transferability of healthy sport to
                  healthy leadership.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* 更多活動 */}
          <div className={classes.basicLine}></div>
          <Grid item xs>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4">更多活動</Typography>
              </Grid>
              <Grid item>
                <CardList
                  items={activityList.data}
                  title={activityList.title}
                  md={2}
                  xs={6}
                  id="activityAll"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Detail;

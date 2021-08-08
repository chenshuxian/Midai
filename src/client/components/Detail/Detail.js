import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header";
import { contentLayout } from "../layoutCss";
import { Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

const Detail = (props) => {
  const classes = contentLayout()();
  return (
    <Grid container>
      <Header />
      <Grid item xs className={classes.root}>
        {/* 圖片區 */}
        <Grid container direction="column" spacing={2}>
          <Typography variant="h2">活動主題</Typography>
          <Grid
            container
            justifyContent="space-between"
            style={{ width: "unset" }}
          >
            <Grid container>
              <FavoriteBorderIcon />
              <Typography>100</Typography>
              <Typography> 金湖 ・ 休閒</Typography>
            </Grid>
            <Grid container>
              <ShareIcon />
              <Typography>分享</Typography>
              <FavoriteBorderIcon />
              <Typography>儲存</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* 活動資訊 */}
        {/* 活動內容 */}
        {/* 更多活動 */}
      </Grid>
    </Grid>
  );
};

export default Detail;

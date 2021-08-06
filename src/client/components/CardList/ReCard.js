import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { contentLayout } from "../layoutCss";

export const ReCard = (props) => {
  const linkCss = contentLayout()();
  return props.items.map((item, index) => {
    return (
      <Grid key={index} item md={props.md}>
        <Card className={linkCss.card}>
          <Link to="activity" className={linkCss.link}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                alt="Contemplative Reptile"
                src={item.Image}
                title={item.Items ? item.Item.Name : null}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {item.Title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.Descrption}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
    );
  });
};

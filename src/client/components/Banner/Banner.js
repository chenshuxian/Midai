/* eslint-disable react/no-array-index-key */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardMedia } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 0,
    position: "fixed",
    width: "100%",
    zIndex: 999,
    borderRadius: 0,
  },
  card: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
});

const items = [
  {
    Name: "Macbook Pro",
    Image: "https://source.unsplash.com/featured/?macbook",
    Url: "http://www.google.com",
  },
  {
    Name: "iPhone",
    Image: "https://source.unsplash.com/featured/?iphone",
    Url: "activity",
  },
  {
    Name: "Washing Machine WX9102",
    Image: "https://source.unsplash.com/featured/?washingmachine",
    Url: "",
  },
];

const Banner = () => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Grid>
      <Carousel
        next={() => {
          /* Do stuff */
        }}
        prev={() => {
          /* Do other stuff */
        }}
        indicators={false}
        navButtonsAlwaysVisible
        timeout={1000}
      >
        {items.map((item, index) => {
          if (item.Url !== "") {
            return (
              <a key={index} target="_blank" href={item.Url} rel="noreferrer">
                <CardMedia
                  className={classes.card}
                  component="img"
                  alt="Contemplative Reptile"
                  src={item.Image}
                  title={item.Image}
                />
              </a>
            );
          } else {
            return (
              <CardMedia
                key={index}
                className={classes.card}
                component="img"
                alt="Contemplative Reptile"
                src={item.Image}
                title={item.Image}
              />
            );
          }
        })}
      </Carousel>
    </Grid>
  );
};

export default Banner;

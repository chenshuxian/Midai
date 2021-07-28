import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, CardMedia } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';

import LoginBtn from '../LoginBtn/LoginBtn';
import { showRegPhoneModal } from '../../redux/Users/Users.actions';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 0,
    position: "absolute",
    width: "100%",
    zIndex: 999
  },
  card: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    zIndex: -1
  }
});

const items = [

  {
    Name: "Macbook Pro",
    Image: "https://source.unsplash.com/featured/?macbook"
  },
  {
    Name: "iPhone",
    Image: "https://source.unsplash.com/featured/?iphone"
  },
  {
    Name: "Washing Machine WX9102",
    Image: "https://source.unsplash.com/featured/?washingmachine"
  }
]

const Banner = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Paper className={classes.root}>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Tabs value={false}>
            <Tab label="MiDai" />
          </Tabs>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Item One" onClick={() => dispatch(showRegPhoneModal())} />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          <LoginBtn />
        </Grid>
      </Paper>
      <Carousel
        next={() => {/* Do stuff */ }}
        prev={() => {/* Do other stuff */ }}
        indicators={false}
        navButtonsAlwaysVisible={true}
        timeout={1000}
      >
        {
          items.map((item, index) => {
            return <CardMedia
              className={classes.card}
              component="img"
              alt="Contemplative Reptile"
              src={item.Image}
              title="item.Items.Name"
            />
          })
        }
      </Carousel>
    </Grid>
  );
};

export default Banner;
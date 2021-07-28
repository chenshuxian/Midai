import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from "@material-ui/core";

import LoginBtn from '../LoginBtn/LoginBtn';
import { showRegPhoneModal } from '../../redux/Users/Users.actions';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 0
  },
});

const Banner = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
  );
};

export default Banner;
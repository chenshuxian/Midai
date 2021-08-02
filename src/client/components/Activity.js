import React from 'react';
import Header from './Header';
import CardList from './CardList';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { activity } from './data'; 
import { contentLayout } from './layoutCss';
import SingleLineImageList from './SingleLineImageList';

const Activity = () => {
    const classes = contentLayout()();
    return (
        <Grid container>
            <Grid item xs>
            <Header />
            </Grid>
            <Grid item xs className={classes.root}>
            <div style={{marginTop:40}}></div>
            <CardList items={activity.data} title={activity.title}/>
            </Grid>
            <Grid item xs>
            <SingleLineImageList />
            </Grid>
        </Grid>
    );
};

export default Activity;
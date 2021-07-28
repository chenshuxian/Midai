import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, CardMedia, Typography } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';

import LoginBtn from '../LoginBtn/LoginBtn';
import { showRegPhoneModal } from '../../redux/Users/Users.actions';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: 40,
        marginBottom: 40,
        paddingLeft: 80,
        paddingRight: 80
    },
    Typo: {
        marginBottom: 20
    },
    card: {
        borderRadius: 16,
        marginBottom: 8,
        boxShadow: "8px 6px 10px grey"
    }
});

const items = [

    {
        Type: "休閒活動",
        Descrption: "親子、手作、文化、自然活動",
        Image: "https://source.unsplash.com/featured/?macbook"
    },
    {
        Type: "教育學習",
        Descrption: "技能、才藝學習",
        Image: "https://source.unsplash.com/featured/?iphone"
    },
    {
        Type: "政府資訊",
        Descrption: "補助申請、政令宣導",
        Image: "https://source.unsplash.com/featured/?washingmachine"
    }
]

const Activity = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Grid container className={classes.root}>
            <Typography variant="h3" className={classes.Typo}>
                發現周邊好玩新鮮事
            </Typography>
            <Grid container spacing={2}>
                {
                    items.map((item, index) => {
                        return (
                            <Grid item xs >
                                <CardMedia
                                    key={index}
                                    className={classes.card}
                                    height="50%"
                                    component="img"
                                    alt="Contemplative Reptile"
                                    src={item.Image}
                                    title="item.Items.Name"
                                />
                                <Typography variant="h6">{item.Type}</Typography>
                                <Typography >{item.Descrption}</Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Grid>
    );
};

export default Activity;
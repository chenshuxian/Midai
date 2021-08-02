import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, Box } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: 40,
        marginBottom: 40,
        overflow: "auto",
        flexWrap: "nowrap"

    },
    Typo: {
        marginBottom: 20,
        fontWeight: 900,
    },
    card: {
        marginBottom: 8,
        boxShadow: "8px 6px 10px grey",
        minWidth: 400
    },
    bigPicture: {
        fontWeight: 900,
        color: "white"
    },
    box: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
});

const CardList = (props) => {

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <Box>
            <Typography variant="h4" className={classes.Typo}>
                {props.title}
            </Typography>

            <Grid container className={classes.root} spacing={2} >
                {
                    props.items.map((item, index) => {
                        return (
                            <Grid key={index} item xs >
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
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
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box >
    );
};

export default CardList;
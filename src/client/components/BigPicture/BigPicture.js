import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, Box } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: 40,
        marginBottom: 40,
    },
    Typo: {
        marginBottom: 20,
        fontWeight: 900,
    },
    card: {
        marginBottom: 8,
        boxShadow: "8px 6px 10px grey",
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

const BigPicture = (props) => {
    const classes = useStyles();
    return (
        <Box>
            <Grid container className={classes.root}>
                <Grid container spacing={2}>
                    {
                        props.items.map((item, index) => {
                            return (
                                <Grid key={index} item xs>
                                    <Card className={classes.card}>
                                        <CardActionArea href="https://google.com">
                                            <CardMedia
                                                component="img"
                                                height="500"
                                                alt="Contemplative Reptile"
                                                src={item.Image}
                                                title={item.Items ? item.Item.Name : null}
                                            />
                                            <Grid container className={classes.box}>
                                                <Box>
                                                    <Typography variant="h4" className={classes.bigPicture}>
                                                        {item.Title}
                                                    </Typography>
                                                    <Typography className={classes.bigPicture}>
                                                        {item.Descrption}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Box >
    );
};

export default BigPicture;
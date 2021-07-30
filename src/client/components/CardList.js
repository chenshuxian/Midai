import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: 40,
        marginBottom: 40,
        paddingLeft: 80,
        paddingRight: 80
    },
    Typo: {
        marginBottom: 20,
        fontWeight: 900,
    },
    card: {
        marginBottom: 8,
        boxShadow: "8px 6px 10px grey",
        minWidth: 400
    }
});

const CardList = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Typography variant="h4" className={classes.Typo}>
                {props.title}
            </Typography>
            <Grid container spacing={2}>
                {
                    props.items.map((item, index) => {
                        return (
                            <Grid key={index} item xs={12} md={4}>
                                <Card className={classes.card}>
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            height={item.NoContent ? "500" : "300"}
                                            alt="Contemplative Reptile"
                                            src={item.Image}
                                            title={item.Items ? item.Item.Name : null}
                                        />
                                        {item.NoContent ? null : (
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="h2">
                                                    {item.Title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {item.Descrption}
                                                </Typography>
                                            </CardContent>
                                        )}
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Grid>
    );
};

export default CardList;
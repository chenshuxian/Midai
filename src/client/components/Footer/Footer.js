import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';


const useStyles = makeStyles({
    root: {
        minHeight: 50,
        backgroundColor: grey[100]
    }
});

const Footer = () => {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (
        <Grid className={classes.root} container justifyContent="center" alignItems="center">
            <Typography>© {year} Midai, Inc </Typography>
        </Grid>
    )
}

export default Footer;
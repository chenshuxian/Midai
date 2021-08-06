/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import { ReCard } from "./ReCard";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
    overflow: "auto",
    flexWrap: "wrap",
  },
  Typo: {
    marginBottom: 10,
    fontWeight: 900,
  },
  card: {
    marginBottom: 8,
    boxShadow: "8px 6px 10px grey",
    minWidth: "0%",
    minHeight: "0%",
  },
  bigPicture: {
    fontWeight: 900,
    color: "white",
  },
  box: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
});

const CardList = (props) => {
  const classes = useStyles();
  //const linkCss = contentLayout()();
  const md = props.md ? props.md : 4;

  return (
    <Box>
      {props.title ? (
        <Typography variant="h4" className={classes.Typo}>
          {props.title}
        </Typography>
      ) : null}

      <Grid container className={classes.root} spacing={2} id={props.id}>
        <ReCard items={props.items} md={md} />
      </Grid>
    </Box>
  );
};

export default CardList;

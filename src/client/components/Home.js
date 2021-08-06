/* eslint-disable react/jsx-key */
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Header from "./Header";
import Banner from "./Banner";
import CardList from "./CardList";
import RegModal from "./Modal/Regist/RegModal";
import WelcomeModal from "./Modal/Regist/WelcomeModal";
import PhoneModal from "./Modal/Regist/PhoneModal";
import PhotoModal from "./Modal/Regist/PhotoModal";
import Footer from "./Footer";
import BigPicture from "./BigPicture";

import { wish, homeSection } from "./data";
import { contentLayout } from "./layoutCss";
const Home = () => {
  const useStyles = contentLayout();

  const classes = useStyles();
  return (
    <Grid>
      <Header />
      <Banner />
      <Box className={classes.root}>
        {homeSection.map((item, index) => {
          return (
            <CardList
              id={item.id}
              key={index}
              items={item.data}
              title={item.title}
            />
          );
        })}
        <BigPicture items={wish.data} title={wish.title} />
      </Box>
      <Footer />
      <RegModal />
      <WelcomeModal />
      <PhoneModal />
      <PhotoModal />
    </Grid>
  );
};

export default Home;

import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Banner from './Banner';
import CardList from "./CardList";
import RegModal from './Modal/Regist/RegModal';
import WelcomeModal from './Modal/Regist/WelcomeModal';
import PhoneModal from './Modal/Regist/PhoneModal';
import PhotoModal from './Modal/Regist/PhotoModal';
import Footer from "./Footer";
import BigPicture from "./BigPicture";

import { consumer, activity, wish } from "./data";
import { contentLayout } from "./layoutCss";

const Home = () => {

  // const theme = useTheme();
  // const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  // const padding = downSm ? 20 : 80;

  // const useStyles = makeStyles({
  //   root: {
  //     flexGrow: 1,
  //     marginTop: 40,
  //     marginBottom: 40,
  //     paddingLeft: padding,
  //     paddingRight: padding
  //   },
  // })
  
  const useStyles = contentLayout();

  const classes = useStyles();
  return (
    <Grid>
      <Header />
      <Banner />
      <Box className={classes.root}>
        <CardList items={activity.data} title={activity.title} />
        <CardList items={consumer.data} title={consumer.title} />
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

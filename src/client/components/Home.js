import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Banner from './Banner/Banner';
import CardList from "../components/CardList";
import RegModal from '../components/Modal/Regist/RegModal';
import WelcomeModal from '../components/Modal/Regist/WelcomeModal';
import PhoneModal from '../components/Modal/Regist/PhoneModal';
import PhotoModal from '../components/Modal/Regist/PhotoModal';
import Footer from "../components/Footer/Footer";
import BigPicture from "./BigPicture";

const consumer = {
  title: "生活消費",
  data: [
    {
      Title: "食物",
      Descrption: "親子、手作、文化、自然",
      Image: "https://source.unsplash.com/featured/?food"
    },
    {
      Title: "生活用品",
      Descrption: "技能、才藝學習",
      Image: "https://source.unsplash.com/featured/?desk"
    },
    {
      Title: "生鮮蔬果",
      Descrption: "補助申請、政令宣導",
      Image: "https://source.unsplash.com/featured/?fruit"
    }]
}

const activity = {
  title: "發現周邊好玩新鮮事",
  data: [
    {
      Title: "休閒活動",
      Descrption: "親子、手作、文化、自然",
      Image: "https://source.unsplash.com/featured/?family"
    },
    {
      Title: "教育學習",
      Descrption: "技能、才藝學習",
      Image: "https://source.unsplash.com/featured/?education"
    },
    {
      Title: "政府資訊",
      Descrption: "補助申請、政令宣導",
      Image: "https://source.unsplash.com/featured/?policy"
    }]
}

const wish = {
  title: "",
  data: [{
    Title: "寫下你的願望",
    Descrption: "我們將盡力為您實現",
    Image: "https://source.unsplash.com/featured/?kid",
    NoContent: true,
  }]
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 40,
    marginBottom: 40,
    paddingLeft: 80,
    paddingRight: 80
  },
})


const Home = () => {
  const classes = useStyles();
  return (
    <Grid>
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

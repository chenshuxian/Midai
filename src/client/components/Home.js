import React from "react";
import Banner from './Banner/Banner';
import CardList from "../components/CardList";

const consumer = {
  title: "生活消費",
  data: [
    {
      Type: "食物",
      Descrption: "親子、手作、文化、自然活動",
      Image: "https://source.unsplash.com/featured/?food"
    },
    {
      Type: "生活用品",
      Descrption: "技能、才藝學習",
      Image: "https://source.unsplash.com/featured/?desk"
    },
    {
      Type: "生鮮蔬果",
      Descrption: "補助申請、政令宣導",
      Image: "https://source.unsplash.com/featured/?fruit"
    }]
}

const activity = {
  title: "發現周邊好玩新鮮事",
  data: [
    {
      Type: "休閒活動",
      Descrption: "親子、手作、文化、自然活動",
      Image: "https://source.unsplash.com/featured/?family"
    },
    {
      Type: "教育學習",
      Descrption: "技能、才藝學習",
      Image: "https://source.unsplash.com/featured/?education"
    },
    {
      Type: "政府資訊",
      Descrption: "補助申請、政令宣導",
      Image: "https://source.unsplash.com/featured/?policy"
    }]
}



const Home = () => {
  return (
    <>
      <Banner />
      <CardList items={activity.data} title={activity.title} />
      <CardList items={consumer.data} title={consumer.title} />
    </>
  );
};

export default Home;

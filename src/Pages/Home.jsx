import React from "react";
import "../styles/home.scss";
import In from "../Components/UI/In/In";
import Map from "../Components/UI/Map/Map";
import Video from "../Components/UI/Video/Video";
import Business from "../Components/UI/Business/Business";
import Team from "../Components/Team/Team";
import Intro from "../Components/UI/Intro/Intro";
import Stats from "../Components/Stats/Stats";
import Clients from "../Components/UI/Clients/Clients";
import Comments from "../Components/Comments/Comments";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Map />
      <In />
      <Video />
      <Business />
      <Team />
      <Stats />
      <Clients />
      <Contact />
      <Comments />
    </div>
  );
};

export default Home;

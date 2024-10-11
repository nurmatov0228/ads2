import React from "react";
import "../styles/home.scss";
import In from "../Components/UI/In/In";
import Map from "../Components/UI/Map/Map";
import Video from "../Components/UI/Video/Video";
import Business from "../Components/UI/Business/Business";

const Home = () => {
  return (
    <div className="home">
      home
      <Map />
      <In />
      <Video />
      <Business />
    </div>
  );
};

export default Home;

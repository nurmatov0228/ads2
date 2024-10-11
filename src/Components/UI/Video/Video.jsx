import React from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./video.scss"; // SCSS faylingiz
import carpet from "../../../img/carpet.jpeg";
import song from "../../../img/bydsong.png";
import cloud from "../../../img/cloud.png";
import lg from "../../../img/lg.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { NavLink } from "react-router-dom";

const Video = () => {
  const images = [
    { id: 1, src: carpet, alt: "Image 1" },
    { id: 2, src: song, alt: "Image 2" },
    { id: 3, src: cloud, alt: "Image 3" },
    { id: 4, src: lg, alt: "Image 4" },
    { id: 5, src: song, alt: "Image 5" },
    { id: 6, src: carpet, alt: "Image 6" },
    { id: 7, src: song, alt: "Image 7" },
    { id: 8, src: cloud, alt: "Image 8" },
    { id: 9, src: lg, alt: "Image 9" },
    { id: 10, src: song, alt: "Image 10" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="video-slider">
      <div className="container">
        <div className="video-slider__container">
          <h2>Video</h2>
          <NavLink to={"allvideos"}>
            <button className="all-videos-button btn">Barcha videolar</button>
          </NavLink>
        </div>
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id} className="video-slider__item">
              <img
                src={image.src}
                alt={image.alt}
                className="video-slider__image"
              />
              <IconButton className="play-button">
                <PlayCircleIcon style={{ fontSize: "50px", color: "#fff" }} />
              </IconButton>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom arrows
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <KeyboardArrowRightIcon />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <KeyboardArrowLeftIcon />
    </div>
  );
};

export default Video;

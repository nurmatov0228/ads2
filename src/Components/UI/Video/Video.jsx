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
import { useTranslation } from "react-i18next"; // import t o'zgaruvchisi

const Video = () => {
  const { t } = useTranslation(); // t o'zgaruvchisini chaqirish

  const images = [
    { id: 1, src: carpet, alt: t("video.image1") }, // JSON faylidan tarjima olish
    { id: 2, src: song, alt: t("video.image2") },
    { id: 3, src: cloud, alt: t("video.image3") },
    { id: 4, src: lg, alt: t("video.image4") },
    { id: 5, src: song, alt: t("video.image5") },
    { id: 6, src: carpet, alt: t("video.image6") },
    { id: 7, src: song, alt: t("video.image7") },
    { id: 8, src: cloud, alt: t("video.image8") },
    { id: 9, src: lg, alt: t("video.image9") },
    { id: 10, src: song, alt: t("video.image10") },
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
          <h2>{t("title")}</h2> {/* JSON faylidan tarjima olish */}
          <NavLink to={"allvideos"}>
            <button className="all-videos-button btn">{t("allVideos")}</button>{" "}
            {/* JSON faylidan tarjima olish */}
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

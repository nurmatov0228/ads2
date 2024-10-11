import React from "react";
import "../styles/videos.scss";
import carpet from "../img/carpet.jpeg";
import song from "../img/bydsong.png";
import cloud from "../img/cloud.png";
import lg from "../img/lg.jpg";
import { IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Videos = () => {
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
  return (
    <div className="videos">
      <div className="container">
        <h2>Video</h2>
        <div className="videos__container video-slider">
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
        </div>
      </div>
    </div>
  );
};

export default Videos;

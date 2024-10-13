import React, { useState, useRef } from "react";
import "./intro.scss";
import video1 from "../../../img/video1.mp4";
import video2 from "../../../img/video2.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const videos = [
  {
    title: "Yangi natijalarga erisha olasiz!",
    video: video1,
  },
  {
    title: "Xizmatlarimiz bilan to'liq tanishib chiqing",
    video: video2,
  },
];

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [dragStart, setDragStart] = useState(0);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleDragStart = (e) => {
    setDragStart(e.clientX);
  };

  const handleDragEnd = (e) => {
    const dragEnd = e.clientX;
    if (dragEnd - dragStart > 100) {
      // O'ngga surish - oldingi videoga o'tish
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? videos.length - 1 : prevIndex - 1
      );
    } else if (dragStart - dragEnd > 100) {
      // Chapga surish - keyingi videoga o'tish
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="intro">
      <div className="intro2">
        <div className="container">
          <div className="intro__container">
            <div className="intro__flex">
              <h1 className="intro__title">{videos[currentIndex].title}</h1>
              <button>
                <a class="btn intro__btn">Konsultatsiya olish</a>
              </button>
            </div>
            <div
              className="intro__video-container"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
            >
              <video
                className="intro__video"
                ref={videoRef}
                src={videos[currentIndex].video}
                loop
              />
              <div className="intro__play-pause" onClick={handlePlayPause}>
                {isPlaying ? (
                  <PauseIcon style={{ fontSize: 60 }} />
                ) : (
                  <PlayArrowIcon style={{ fontSize: 60 }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

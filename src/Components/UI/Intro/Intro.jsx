import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next"; // Tarjima uchun
import "./intro.scss";
import video1 from "../../../img/video1.mp4";
import video2 from "../../../img/video2.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Modal, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import axios from "axios";

const videos = [
  {
    title: "video1_title", // Tarjima kaliti
    video: video1,
  },
  {
    title: "video2_title", // Tarjima kaliti
    video: video2,
  },
];

const Intro = () => {
  const { t } = useTranslation(); // Tarjima hook
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settingName = (e) => setName(e.target.value);
  const settingEmail = (e) => setEmail(e.target.value);
  const settingNumber = (e) => setNumber(e.target.value);
  const settingText = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim().length &&
      number.trim().length &&
      text.trim().length &&
      name.trim().length
    ) {
      const token = `7224174930:AAHfX4xYMCiylsXEZPRrKF395SLBmv3XdcU`;
      const chat_id = 1308395281;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      axios({
        url: url,
        method: "post",
        data: {
          chat_id: chat_id,
          text: `Ism: ${name}, Email: ${email}, Raqam: ${number}, Xabar: ${text}`,
        },
      })
        .then((data) => {
          toast.success(`${name} ${t("welcome_message")}`, {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => {
          toast.error(t("error_message"), {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });

      e.target.reset();
    } else {
      toast.warning(t("invalid_data_warning"));
    }
  };

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
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? videos.length - 1 : prevIndex - 1
      );
    } else if (dragStart - dragEnd > 100) {
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
              <h1 className="intro__title">{t(videos[currentIndex].title)}</h1>
              <button onClick={handleOpen}>
                <a className="btn intro__btn">{t("consultation_button")}</a>
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

          {/* Modal Oynasi */}
          <Modal open={open} onClose={handleClose} className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>{t("become_client")}</h2>
                <CloseIcon className="close-icon" onClick={handleClose} />
              </div>
              <form className="modal-form" onSubmit={handleSubmit}>
                <TextField
                  label={t("name_label")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  onChange={settingName}
                />
                <TextField
                  label={t("email_label")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  onChange={settingEmail}
                />
                <TextField
                  label={t("phone_label")}
                  type="number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  onChange={settingNumber}
                />
                <TextField
                  label={t("message_label")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  onChange={settingText}
                />
                <button type="submit" className="btn modal__btn">
                  {t("send_button")}
                </button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Intro;

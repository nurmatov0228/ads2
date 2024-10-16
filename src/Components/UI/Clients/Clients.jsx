import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./clients.scss";
import { Modal, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import axios from "axios";
import click from "../../../img/click.jpg";
import payme from "../../../img/payme.png";
import uzum from "../../../img/uzum.jpg";
import fanta from "../../../img/fanta.png";
import pepsi from "../../../img/pepsi.png";
import joyda from "../../../img/joyda.jpg";
import cola from "../../../img/cola.png";
import turan from "../../../img/turan.png";
import teamturan from "../../../img/teamturan.png";
import turanu from "../../../img/turanu.jpeg";
import dpt from "../../../img/dpt.png";
import { useTranslation } from "react-i18next";

// Logolar ro'yxati
const logos = [
  { imgSrc: click, alt: "Turan Grand Hotel", link: "https://click.uz/ru" },
  { imgSrc: payme, alt: "Team Turan", link: "https://payme.uz/home/main" },
  { imgSrc: uzum, alt: "Turan University", link: "https://uzum.uz/uz/" },
  {
    imgSrc: fanta,
    alt: "Fanta",
    link: "https://www.coca-cola.com/us/en/brands/fanta",
  },
  { imgSrc: pepsi, alt: "Pepsi", link: "https://www.pepsi.com/" },
  { imgSrc: joyda, alt: "Joyda", link: "https://joyda.uz/" },
  { imgSrc: cola, alt: "Coca Cola", link: "https://www.coca-cola.com/uz/uz" },
  { imgSrc: turan, alt: "Turan University", link: "https://www.turan-edu.kz/" },
  {
    imgSrc: teamturan,
    alt: "Turan Drilling",
    link: "https://www.turandrilling.com/whoweare/Pages/Turan-management.aspx",
  },
  {
    imgSrc: turanu,
    alt: "Grzegorz Turnau",
    link: "https://www.grzegorzturnau.pl/",
  },
  {
    imgSrc: dpt,
    alt: "Tashkent State Pedagogical University",
    link: "https://www.tdpu.uz/",
  },
];

const Clients = () => {
  const { t } = useTranslation();
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
          text: `${t("clients.name")}: ${name}, ${t(
            "clients.email"
          )}: ${email}, ${t("clients.number")}: ${number}, ${t(
            "clients.message"
          )}: ${text}`,
        },
      })
        .then((data) => {
          toast.success(`${name} ${t("clients.welcome")}`, {
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
          toast.error(t("clients.error"), {
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
      toast.warning(t("clients.warning"));
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="clients-section">
      <div className="container">
        <div className="clients-header">
          <div className="clients__flex">
            <h2>{t("clients.trusted_clients")}</h2>
            <p>{t("clients.continue")}</p>
          </div>
          <button className="become-client-btn btn" onClick={handleOpen}>
            {t("clients.become_client")}
          </button>
        </div>
        <Slider {...settings} className="clients-slider">
          {logos.map((logo, index) => (
            <a key={index} className="client-logo" href={logo?.link}>
              <img src={logo?.imgSrc} alt={logo?.alt} />
            </a>
          ))}
        </Slider>

        {/* Modal Oynasi */}
        <Modal open={open} onClose={handleClose} className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{t("clients.become_client")}</h2>
              <CloseIcon className="close-icon" onClick={handleClose} />
            </div>
            <form className="modal-form" onSubmit={handleSubmit}>
              <TextField
                label={t("clients.name")}
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={settingName}
              />
              <TextField
                label={t("clients.email_or_telegram")}
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={settingEmail}
              />
              <TextField
                label={t("clients.phone_number")}
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={settingNumber}
              />
              <TextField
                label={t("clients.your_message")}
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
                onChange={settingText}
              />
              <button type="submit" className="btn modal__btn">
                {t("contact1.submit")}
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Clients;

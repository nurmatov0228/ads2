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

// Logolar ro'yxati
const logos = [
  { imgSrc: click, alt: "Turan Grand Hotel", link: "https://click.uz/ru" },
  {
    imgSrc: payme,
    alt: "Team Turan",
    link: "https://payme.uz/home/main",
  },
  { imgSrc: uzum, alt: "Turan University", link: "https://uzum.uz/uz/" },
  {
    imgSrc: fanta,
    alt: "Turan Volleyball",
    link: "https://www.coca-cola.com/us/en/brands/fanta",
  },
  {
    imgSrc: pepsi,
    alt: "Turan Volleyball",
    link: "https://www.pepsi.com/",
  },
  {
    imgSrc: joyda,
    alt: "Turan Volleyball",
    link: "https://joyda.uz/",
  },
  {
    imgSrc: cola,
    alt: "Turan Volleyball",
    link: "https://www.coca-cola.com/uz/uz",
  },
  {
    imgSrc: turan,
    alt: "Turan Volleyball",
    link: "https://www.turan-edu.kz/",
  },
  {
    imgSrc: teamturan,
    alt: "Turan Volleyball",
    link: "https://www.turandrilling.com/whoweare/Pages/Turan-management.aspx",
  },
  {
    imgSrc: turanu,
    alt: "Turan Volleyball",
    link: "https://www.grzegorzturnau.pl/",
  },
  {
    imgSrc: dpt,
    alt: "Turan Volleyball",
    link: "https://www.tdpu.uz/",
  },
];

const Clients = () => {
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
          text:
            "Ism: " +
            name +
            ", Email: " +
            email +
            ", Raqam: " +
            number +
            ", Xabar: " +
            text,
        },
      })
        .then((data) => {
          toast.success(name + " xush kelibsiz", {
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
          toast.error("Kirishda xatolik bor", {
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
      toast.warning("Kiritilgan ma'lumot noto'g'ri");
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
            <h2>Ishonchli mijozlar</h2>
            <p>Davom etilmoqda... Sizning logoyingiz uchun ham joy mavjud</p>
          </div>
          <button className="become-client-btn btn" onClick={handleOpen}>
            Mijoz bo'lish
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
              <h2>Mijoz bo'lish</h2>
              <CloseIcon className="close-icon" onClick={handleClose} />
            </div>
            <form className="modal-form" onSubmit={handleSubmit}>
              <TextField
                label="Ism"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={settingName}
              />
              <TextField
                label="Elektron pochta yoki Telegram"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={settingEmail}
              />
              <TextField
                label="Telefon raqami"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={settingNumber}
              />
              <TextField
                label="Sizning xabaringiz"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
                onChange={settingText}
              />
              <button type="submit" className="btn modal__btn">
                Yuborish
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Clients;

import React, { useState } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.scss";
import admin from "../img/admin.png";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const settingName = (e) => {
    setName(e.target.value);
  };

  const settingEmail = (e) => {
    setEmail(e.target.value);
  };

  const settingNumber = (e) => {
    setNumber(e.target.value);
  };

  const settingText = (e) => {
    setText(e.target.value);
  };

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
            "Name: " +
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
          toast.success("Ma'lumotlar jo'natildi", {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        })
        .catch((error) => {
          toast.error("Jo'natishda xatolik bor", {
            position: "top-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        });

      e.target.reset();
    } else {
      toast.warning("Kiritilgan ma'lumot noto'g'ri");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__form-container">
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <h2 className="contact-page__title">
              Bizga qanday savolingiz bor?
            </h2>
            <div className="contact-page__form-group">
              <label htmlFor="name">Ism</label>
              <input
                type="text"
                id="name"
                required
                name="name"
                onChange={settingName}
              />
            </div>
            <div className="contact-page__form-group">
              <label htmlFor="emailOrTelegram">
                Elektron pochta yoki Telegram
              </label>
              <input
                type="text"
                id="emailOrTelegram"
                required
                onChange={settingEmail}
                name="email"
              />
            </div>
            <div className="contact-page__form-group">
              <label htmlFor="phone">Telefon raqami</label>
              <input
                type="number"
                id="phone"
                required
                name="number"
                onChange={settingNumber}
              />
            </div>
            <div className="contact-page__form-group">
              <label htmlFor="message">Sizning xabaringiz</label>
              <textarea
                id="message"
                required
                name="text"
                onChange={settingText}
              ></textarea>
            </div>
            <button type="submit" className="contact-page__submit">
              Yuborish
            </button>
          </form>
        </div>
        <div className="contact-page__image">
          <img src={admin} alt="Customer Service" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

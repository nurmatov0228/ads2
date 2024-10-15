import React, { useState } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next"; // i18next dan useTranslation ni import qilish
import "../styles/contact.scss";
import admin from "../img/admin.png";

const Contact = () => {
  const { t } = useTranslation(); // useTranslation hookini chaqirish
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
          toast.success(t("contact1.success_message"), {
            // t funksiyasidan foydalanish
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
          toast.error(t("contact1.error_message"), {
            // t funksiyasidan foydalanish
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
      toast.warning(t("contact1.warning_message")); // t funksiyasidan foydalanish
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__form-container">
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <h2 className="contact-page__title">{t("contact1.question")}</h2>{" "}
            {/* t funksiyasi */}
            <div className="contact-page__form-group">
              <label htmlFor="name">{t("contact1.name")}</label>{" "}
              {/* t funksiyasi */}
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
                {t("contact1.email_or_telegram")} {/* t funksiyasi */}
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
              <label htmlFor="phone">{t("contact1.phone_number")}</label>{" "}
              {/* t funksiyasi */}
              <input
                type="number"
                id="phone"
                required
                name="number"
                onChange={settingNumber}
              />
            </div>
            <div className="contact-page__form-group">
              <label htmlFor="message">{t("contact1.your_message")}</label>{" "}
              {/* t funksiyasi */}
              <textarea
                id="message"
                required
                name="text"
                onChange={settingText}
              ></textarea>
            </div>
            <button type="submit" className="btn contact-page__submit">
              {t("contact1.submit")} {/* t funksiyasi */}
            </button>
          </form>
        </div>
        <div className="contact-page__image">
          <img src={admin} alt={t("contact1.alt_text")} /> {/* t funksiyasi */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

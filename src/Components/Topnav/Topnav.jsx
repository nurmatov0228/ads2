import React, { useEffect } from "react";
import "./topnav.scss";
import uz from "../../img/uz.png";
import en from "../../img/en.png";
import ru from "../../img/ru.png";
import logo from "../../img/Screenshot 2024-10-08 191403.png";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Topnav = () => {
  const { t, i18n } = useTranslation();

  // Tilni o'zgartirish funksiyasi
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Tilni o'zgartirish
    localStorage.setItem("language", lng); // Tanlangan tilni localStorage'ga saqlash
  };

  useEffect(() => {
    // Dastlabki yuklanishda localStorage'dan tilni o'qish va o'sha tilga o'zgartirish
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="header-top p-2">
      <div className="container">
        <div className="logo-wrapper">
          <a href="/" className="logo">
            <img alt="in out" width="83" height="72" src={logo} />
          </a>
          <div className="header-top-wrapper">
            <div className="advertasing"></div>
            <div className="link">
              <a
                target="_blank"
                className="link-btn one"
                href="https://t.me/My_VALLEY"
              >
                <img
                  src="https://www.inoutads.uz/_nuxt/telegram.61463358.svg"
                  alt="telegram"
                  width="20"
                  height="20"
                />
                <p className="link-text">{t("telegram")}</p>
              </a>
              <button className="link-btn three">
                <img
                  src="https://www.inoutads.uz/_nuxt/download.5c2f07e8.svg"
                  alt="download"
                  width="20"
                  height="20"
                />
                <p className="link-text">{t("presentation")}</p>
              </button>
              <a href="#registration" className="link-btn three">
                <img
                  src="https://www.inoutads.uz/_nuxt/sms.32d91e6a.svg"
                  alt="sms"
                  width="20"
                  height="20"
                />
                <p className="link-text">{t("applyNow")}</p>
              </a>
            </div>
          </div>
        </div>
        <div className="languages desktop">
          <div className="menu-languages">
            <a
              onClick={() => changeLanguage("uz")}
              className={`language-item ${
                i18n.language === "uz" ? "active" : ""
              }`}
            >
              <img src={uz} alt="flag" /> uz
            </a>
            <a
              onClick={() => changeLanguage("en")}
              className={`language-item ${
                i18n.language === "en" ? "active" : ""
              }`}
            >
              <img src={en} alt="flag" /> en
            </a>
            <a
              onClick={() => changeLanguage("ru")}
              className={`language-item ${
                i18n.language === "ru" ? "active" : ""
              }`}
            >
              <img src={ru} alt="flag" /> ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;

import React from "react";
import "../styles/about.scss";
import logo from "../img/Screenshot 2024-10-08 191403.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(); // i18next dan tarjimalarni olish uchun

  return (
    <div className="about">
      <div className="container">
        <div className="about__main">
          <div className="img__wrapper">
            <img src={logo} alt="in-out" width="714" height="403" />
          </div>
          <div className="about__main__text__wrapper">
            <h3 className="about__main__title">{t("about.title")}</h3>
            <p className="about__main__text">
              {t("about.description.part1")}
              <h3>{t("about.description.part2")}</h3>
              {t("about.description.part3")}
              <h3></h3>
            </p>
          </div>
          <div className="about__main__bottom">
            <h3 className="about__main__bottom__title">
              {t("about.statistics.title")}
            </h3>
            <div className="about__main__bottom__list">
              <div className="about__main__botton__item">
                <p className="about__main__bottom__num numbers__counter">0</p>
                <p className="about__main__bottom__item__bottom__text">
                  {t("about.statistics.successful_teams")}
                </p>
              </div>
              <div className="about__main__botton__item">
                <p className="about__main__bottom__num numbers__counter">0</p>
                <p className="about__main__bottom__item__bottom__text">
                  {t("about.statistics.working_in_company")}
                </p>
              </div>
              <div className="about__main__botton__item">
                <p className="about__main__bottom__num numbers__counter">0</p>
                <p className="about__main__bottom__item__bottom__text">
                  {t("about.statistics.promoted_in_social_media")}
                </p>
              </div>
              <div className="about__main__botton__item">
                <p className="about__main__bottom__num numbers__counter">0</p>
                <p className="about__main__bottom__item__bottom__text">
                  {t("about.statistics.developed_and_launched")}
                </p>
              </div>
              <div className="about__main__botton__item">
                <p className="about__main__bottom__num numbers__counter">0</p>
                <p className="about__main__bottom__item__bottom__text">
                  {t("about.statistics.products_in_graph")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about__app">
          <h4 className="about__app__title">{t("about.find_us")}</h4>
          <div className="about__app__list">
            <a
              href="https://t.me/inout_group"
              target="_blank"
              rel="noopener noreferrer"
              className="about__app-item"
            >
              <img
                src="https://admin.inoutads.uz/uploads/images/media/2/preview-64c740aa02c7d.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about__app-item"
            >
              <img
                src="https://admin.inoutads.uz/uploads/images/media/8/preview-64c744416b525.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__app-item"
            >
              <img
                src="https://admin.inoutads.uz/uploads/images/media/9/preview-64c7444cd09b6.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__app-item"
            >
              <img
                src="https://admin.inoutads.uz/uploads/images/media/11/preview-64c7445ac0991.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about__app-item"
            >
              <img
                src="https://admin.inoutads.uz/uploads/images/media/12/preview-64c74089b56ec.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about__app-item"
            >
              <img
                src="https://admin.inoutads.uz/uploads/images/media/13/preview-64c743ec9717e.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
            <a
              href="http://wikipedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__app-item"
            >
              <img
                src="https://admin.inoutads.uz/uploads/images/media/14/preview-64c74424f17ab.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./footer.scss";
import { AccessTime, LocationOn, Email } from "@mui/icons-material";
import discord from "../../img/discord.png";
import Telegram from "../../img/telegramrasm.png";
import WhatsApp from "../../img/whatsapp.png";
import YouTube from "../../img/youtube.png";
import Instagram from "../../img/instagram.png";
import Facebook from "../../img/facebook.png";
import vk from "../../img/vk.png";
import logo from "../../img/Screenshot 2024-10-08 191403.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__flex">
          <div className="footer__top">
            <NavLink className="footer__logo" to={"/"}>
              <img
                src={logo}
                alt={t("footer.logoAlt")}
                className="footer__logo-img"
              />
            </NavLink>
            <div className="footer__info">
              <div className="footer__info-item">
                <AccessTime className="footer__info-icon" />
                <p>
                  9:00-17:00 <br /> {t("footer.days")}
                </p>
              </div>
              <div className="footer__info-item">
                <a
                  href="https://maps.google.com/?q=42.606544,61.757882"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LocationOn className="footer__info-icon" />
                  <p>{t("footer.location")}</p>
                </a>
              </div>
              <div className="footer__info-item">
                <Email className="footer__info-icon" />
                <p>
                  <a href="mailto:info@inoutgroup.uz">info@inoutgroup.uz</a>{" "}
                  <br />
                  <a href="mailto:inoutadsagency@gmail.com">
                    inoutadsagency@gmail.com
                  </a>
                </p>
              </div>
              <div className="footer__info-item">
                <p>{t("footer.socials")}</p>
                <div className="footer__socials">
                  <a
                    href="https://t.me/yourtelegramchannel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Telegram} alt="Telegram" />
                  </a>
                  <a
                    href="https://wa.me/yourwhatsappnumber"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={WhatsApp} alt="WhatsApp" />
                  </a>
                  <a
                    href="https://www.facebook.com/yourfacebookpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/yourinstagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a
                    href="https://www.youtube.com/?hl=ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={YouTube} alt="YouTube" />
                  </a>
                  <a
                    href="https://discord.com/invite/yourdiscord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={discord} alt="Discord" />
                  </a>
                  <a
                    href="https://vk.com/yourvk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={vk} alt="VK" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <NavLink to={"/"}>
            <img
              src={logo}
              alt={t("footer.logoAlt")}
              className="footer__logo-img1"
            />
          </NavLink>
          <p>{t("footer.team")}</p>
          <p>
            {t("footer.copyright")} {new Date().getFullYear()}{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

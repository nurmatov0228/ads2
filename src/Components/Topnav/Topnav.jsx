import React from "react";
import "./topnav.scss";
import uz from "../../img/uz.png";
import en from "../../img/en.png";
import ru from "../../img/ru.png";
import logo from "../../img/Screenshot 2024-10-08 191403.png";

const Topnav = () => {
  return (
    <div className="header-top p-2">
      <div className="container">
        <div className="logo-wrapper">
          <a
            aria-current="page"
            href="/"
            className="router-link-active router-link-exact-active logo"
          >
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
                <p className="link-text">Telegram</p>
              </a>
              <button className="link-btn three">
                <img
                  src="https://www.inoutads.uz/_nuxt/download.5c2f07e8.svg"
                  alt="download"
                  width="20"
                  height="20"
                />
                <p className="link-text">Taqdimot (35 mb)</p>
              </button>
              <a href="#registration" className="link-btn three">
                <img
                  src="https://www.inoutads.uz/_nuxt/sms.32d91e6a.svg"
                  alt="download"
                  width="20"
                  height="20"
                />
                <p className="link-text">Arizangizni yuboring</p>
              </a>
            </div>
          </div>
        </div>
        <div className="languages desktop">
          <div className="menu-languages">
            <a
              aria-current="page"
              href="/#comments"
              className="router-link-active router-link-exact-active language-item"
            >
              <img src={uz} alt="flag" /> uz
            </a>
            <a href="/en#comments" className="language-item">
              <img src={en} alt="flag" /> en
            </a>
            <a href="/ru#comments" className="language-item">
              <img src={ru} alt="flag" /> ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;

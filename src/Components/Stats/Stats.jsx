import React from "react";
import "./stats.scss";
import raketa from "../../img/raketa.png";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();

  return (
    <div className="stats">
      <div className="container">
        <div className="stats__container">
          <h2 className="stats__title">
            {t("stats.title")} <span>{t("stats.subtitle")}</span>
          </h2>
          <div className="stats__items">
            <div className="stats__item">
              <span className="stats__number">
                20 <p>+</p>
              </span>
              <p className="stats__description">{t("stats.employees")}</p>
            </div>
            <div className="stats__item">
              <span className="stats__number">
                1,672 <p>+</p>
              </span>
              <p className="stats__description">{t("stats.ad_campaigns")}</p>
            </div>
            <div className="stats__item">
              <span className="stats__number">
                1,660 <p>+</p>
              </span>
              <p className="stats__description">{t("stats.success_cases")}</p>
            </div>
            <img src={raketa} alt="Rocket" className="stats__rocket" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

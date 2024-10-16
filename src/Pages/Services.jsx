import React from "react";
import { useNavigate } from "react-router-dom"; // Routing uchun
import "../styles/services.scss";
import image1 from "../img/assalam.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // useNavigate hook'ini chaqiramiz

  const item = [
    {
      id: 1,
      image: image1,
      title: t("business.title1"), // JSON faylidan tarjima olish
      description: t("business.description1"), // JSON faylidan tarjima olish
    },
  ];

  const handleMoreClick = (id) => {
    navigate(`/oneitem/${id}`); // OneItem sahifasiga o'tish
  };

  return (
    <div className="business-slider">
      <div className="container">
        <h2>{t("business.title")}</h2>
        {item.map((item) => (
          <div key={item.id} className="business-slider__item">
            <img
              src={item.image}
              alt={item.title}
              className="business-slider__image"
            />
            <div className="business-slider__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                className="more-button btn1"
                onClick={() => handleMoreClick(item.id)}
              >
                {t("business.more")} {/* JSON faylidan tarjima olish */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

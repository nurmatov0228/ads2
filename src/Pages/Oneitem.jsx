import React from "react";
import { useParams } from "react-router-dom";
import "../styles/oneitem.scss";
import image1 from "../img/assalam.jpg"; // Rasm fayllari
import image2 from "../img/bydsong.png"; // Rasm fayllari
import image3 from "../img/3dd.jpg";
import image4 from "../img/snakers.jpg";
import image5 from "../img/3d.jpeg";
import image6 from "../img/kat.png";
import image7 from "../img/bus.jpeg";
import { useTranslation } from "react-i18next";

const OneItem = () => {
  const { t } = useTranslation();
  const { id } = useParams(); // URL dan id ni olish

  // O'zingizning ma'lumotlar ro'yxatingizdan id ga mos keladigan ma'lumotlarni olish uchun

  const items = [
    {
      id: 1,
      image: image1,
      title: t("business.title1"), // JSON faylidan tarjima olish
      description: t("business.description1"), // JSON faylidan tarjima olish
    },
    {
      id: 2,
      image: image2,
      title: t("business.title2"),
      description: t("business.description2"),
    },
    {
      id: 3,
      image: image3,
      title: t("business.title3"),
      description: t("business.description3"),
    },
    {
      id: 4,
      image: image4,
      title: t("business.title4"),
      description: t("business.description4"),
    },
    {
      id: 5,
      image: image5,
      title: t("business.title5"),
      description: t("business.description5"),
    },
    {
      id: 6,
      image: image6,
      title: t("business.title6"),
      description: t("business.description6"),
    },
    {
      id: 7,
      image: image7,
      title: t("business.title7"),
      description: t("business.description7"),
    },
  ];

  const item = items.find((item) => item.id === parseInt(id));

  return (
    <div className="oneitem-container">
      <div className="oneitem-header">
        <img src={item?.image} alt="Salom Dunyo" className="oneitem-image" />
      </div>
      <div className="oneitem-content">
        <h1 className="oneitem-title">{item?.title}</h1>
        <p className="oneitem-description">{item?.description}</p>
      </div>
    </div>
  );
};

export default OneItem;

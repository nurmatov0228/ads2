import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Routing uchun
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./business.scss"; // SCSS faylingiz
import image1 from "../../../img/assalam.jpg"; // Rasm fayllari
import image2 from "../../../img/bydsong.png"; // Rasm fayllari
import image3 from "../../../img/3dd.jpg";
import image4 from "../../../img/snakers.jpg";
import image5 from "../../../img/3d.jpeg";
import image6 from "../../../img/kat.png";
import image7 from "../../../img/bus.jpeg";

const Business = () => {
  const navigate = useNavigate(); // useNavigate hook'ini chaqiramiz

  const items = [
    {
      id: 1,
      image: image1,
      title: "Salom Dunyo",
      description:
        "In fiction, the planet Mars, fourth from the Sun, has appeared as a setting in at least 5,000 works, portrayed...",
    },
    {
      id: 2,
      image: image2,
      title: "Yo'l bo'yida",
      description:
        "In Gabon, President Ali Bongo Ondimba is deposed by a military coup shortly after his re-election...",
    },
    {
      id: 3,
      image: image3,
      title: "4K Monitor",
      description:
        "Z-Edge U27P4K 27-дюймовый игровой монитор Ultra HD 4K, частота",
    },
    {
      id: 4,
      image: image4,
      title: "HD Ekran",
      description:
        "Z-Edge 4K monitor, U28I4K 28 dyuymli IPS monitor Ultra HD 3840x2160 IPS oʻyin monitori, 300 cd/m², 60Hz yangilanish...",
    },
    {
      id: 5,
      image: image5,
      title: "Reklama xizmati",
      description:
        "Kompaniya tashqi reklama sohasida eng keng ko'lamli xizmatlarni taqdim etishga, poligrafiya, poligrafiya va...",
    },
    {
      id: 6,
      image: image6,
      title: "LED ekranlarda reklama",
      description:
        "Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum sanoat bo'lgan ...",
    },
    {
      id: 7,
      image: image7,
      title: "Avtobusda Tashqi Tomon",
      description:
        "Shaxar Avtobuslarining tashqi tomoniga raklaangizni joylashtirib beraiz Toshkent shahridagi “MAN” va...",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handleMoreClick = (id) => {
    navigate(`/oneitem/${id}`); // OneItem sahifasiga o'tish
  };

  return (
    <div className="business-slider">
      <div className="container">
        <h2>Biz nima qilamiz?</h2>
        <Slider {...settings}>
          {items.map((item) => (
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
                  Ko'proq
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Business;

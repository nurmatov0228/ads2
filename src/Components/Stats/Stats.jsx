import React from "react";
import "./stats.scss";
import raketa from "../../img/raketa.png";

const Stats = () => {
  return (
    <div className="stats">
      <div className="container">
        <div className="stats__container">
          <h2 className="stats__title">
            Bizda <span>raqamlar mavjud</span>
          </h2>
          <div className="stats__items">
            <div className="stats__item">
              <span className="stats__number">
                20 <p>+</p>
              </span>
              <p className="stats__description">Xodimlar soni</p>
            </div>
            <div className="stats__item">
              <span className="stats__number">
                1,672 <p>+</p>
              </span>
              <p className="stats__description">
                reklama kampaniyalarini boshladi
              </p>
            </div>
            <div className="stats__item">
              <span className="stats__number">
                1,660 <p>+</p>
              </span>
              <p className="stats__description">muvaffaqiyatli holatlar</p>
            </div>
            <img src={raketa} alt="Rocket" className="stats__rocket" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

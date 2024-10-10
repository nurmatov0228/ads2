import React from "react";
import "../styles/about.scss";
import logo from "../img/Screenshot 2024-10-08 191403.png";

const About = () => {
  return (
    <div class="about">
      <div class="container">
        <div class="about__main">
          <div class="img__wrapper">
            <img src={logo} alt="in-out" width="714" height="403" />
          </div>
          <div class="about__main__text__wrapper">
            <h3 class="about__main__title">
              Biz <span>haqimizda</span>
            </h3>
            <p class="about__main__text">
              <p></p>

              <p>
                InOut reklama joylashtirish xizmatlarining keng assortimentini
                taklif etadi, eng ko'p talab qilinadigani Toshkentdagi tashqi
                reklamadir.Siz buyurtma berishingiz va reklamalarni LED
                ekranlarga, shuningdek, laytboks va bannerlarga
                joylashtirishingiz mumkin.Reklama imkon qadar tezroq, kafolatli
                va hamyonbop narxda amalga oshiriladi.
              </p>

              <h3>ANIQ FOYDA</h3>

              <p>
                <strong>Tashqi reklama</strong>maqsadli auditoriyani kerakli
                ma'lumotlar bilan ta'minlashning arzon va juda samarali
                usulidir.Dastlabki ma'lumotlarni taqdim etish uchun tashrif
                qog'ozidan foydalanish maqsadli auditoriyangizning e'tiborini
                jalb qilish imkonini beradi.
                <strong>LED ekranlardan</strong>tashqi reklama sifatida
                foydalanisheng istiqbolli formatlardan biri bo'lib, ayni paytda
                o'z tovarlarini (xizmatlarini) reklama qiluvchi kompaniya yoki
                tashkilotning yuqori maqomini ko'rsatadi.
              </p>

              <h3></h3>
            </p>
          </div>
          <div class="about__main__bottom">
            <h3 class="about__main__bottom__title">
              Bizning <span>qisqa statistika</span>
            </h3>
            <div class="about__main__bottom__list">
              <div class="about__main__botton__item">
                <p class="about__main__bottom__num numbers__counter">0</p>
                <p class="about__main__bottom__item__bottom__text">
                  Muvaffaqiyatli jamoaviy ish
                </p>
              </div>
              <div class="about__main__botton__item">
                <p class="about__main__bottom__num numbers__counter">0</p>
                <p class="about__main__bottom__item__bottom__text">
                  Bizning kompaniyamizda ishlash
                </p>
              </div>
              <div class="about__main__botton__item">
                <p class="about__main__bottom__num numbers__counter">0</p>
                <p class="about__main__bottom__item__bottom__text">
                  Ijtimoiy tarmoqlarda targ'ib qilingan
                </p>
              </div>
              <div class="about__main__botton__item">
                <p class="about__main__bottom__num numbers__counter">0</p>
                <p class="about__main__bottom__item__bottom__text">
                  Ishlab chiqilgan va ishga tushirilgan
                </p>
              </div>
              <div class="about__main__botton__item">
                <p class="about__main__bottom__num numbers__counter">0</p>
                <p class="about__main__bottom__item__bottom__text">
                  Ijtimoiy tarmoqlarda targ'ib qilingan
                </p>
              </div>
              <div class="about__main__botton__item">
                <p class="about__main__bottom__num numbers__counter">0</p>
                <p class="about__main__bottom__item__bottom__text">
                  grafanadagi mahsulotlar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="about__app">
          <h4 class="about__app__title">Bizni ijtimoiy tarmoqlarda toping</h4>
          <div class="about__app__list">
            <a
              href="https://t.me/inout_group"
              target="blank"
              class="about__app-item"
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
              target="blank"
              class="about__app-item"
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
              target="blank"
              class="about__app-item"
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
              target="blank"
              class="about__app-item"
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
              target="blank"
              class="about__app-item"
            >
              <img
                src="https://admin.inoutads.uz/uploads/images/media/12/preview-64c74089b56ec.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
            <a href="https://dicord.com" target="blank" class="about__app-item">
              <img
                src="https://admin.inoutads.uz/uploads/images/media/13/preview-64c743ec9717e.png"
                alt="icone"
                width="32"
                height="32"
              />
            </a>
            <a
              href="http://wikipedia.com/"
              target="blank"
              class="about__app-item"
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

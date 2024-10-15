import React from "react";
import "../styles/vacancy.scss"; // SCSS faylingizni ulash
import { useTranslation } from "react-i18next"; // i18next dan tarjima olish uchun

const vacancies = [
  {
    title: "vacancy1.call_center_operator", // Tarjima kaliti
    skills: ["vacancy1.education: среднее специальное;"], // Tarjima kaliti
  },
  {
    title: "vacancy1.web_designer", // Tarjima kaliti
    skills: ["vacancy1.experience: 3 года"], // Tarjima kaliti
  },
  {
    title: "vacancy1.logistician", // Tarjima kaliti
    skills: ["vacancy1.skills: ddddddd"], // Tarjima kaliti
  },
];

const VacancyCard = ({ title, skills }) => {
  const { t } = useTranslation(); // i18next dan tarjimalarni olish uchun

  return (
    <div className="vacancy-card">
      <h3 className="vacancy-card__title">{t(title)}</h3>{" "}
      {/* Tarjima olingan nom */}
      <div className="vacancy-card__skills">
        <h4>{t("vacancy1.required_skills")}</h4>{" "}
        {/* Tarjima olingan sarlavha */}
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <span className="checkmark">&#10003;</span> {t(skill)}{" "}
              {/* Tarjima olingan ko'nikmalar */}
            </li>
          ))}
        </ul>
      </div>
      <button className="vacancy-card__button btn">{t("vacancy1.more")}</button>{" "}
      {/* Tarjima olingan tugma matni */}
    </div>
  );
};

const VacancyPage = () => {
  const { t } = useTranslation(); // i18next dan tarjimalarni olish uchun

  return (
    <div className="vacancy">
      <h1 className="vacancy__title">{t("vacancy1.title")}</h1>{" "}
      {/* Tarjima olingan sarlavha */}
      <div className="vacancy__list">
        {vacancies.map((vacancy, index) => (
          <VacancyCard key={index} {...vacancy} />
        ))}
      </div>
    </div>
  );
};

export default VacancyPage;

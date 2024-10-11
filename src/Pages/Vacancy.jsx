import React from "react";
import "../styles/vacancy.scss"; // SCSS faylingizni ulash

const vacancies = [
  {
    title: "qo'ng'iroqlar markazi operatori",
    skills: ["Ma'lumoti: o'rta maxsus;"],
  },
  {
    title: "Web dizayner",
    skills: ["3 yillik tajriba"],
  },
  {
    title: "Logist",
    skills: ["dddddd"],
  },
];

const VacancyCard = ({ title, skills }) => (
  <div className="vacancy-card">
    <h3 className="vacancy-card__title">{title}</h3>
    <div className="vacancy-card__skills">
      <h4>Kerakli ko'nikmalar</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="checkmark">&#10003;</span> {skill}
          </li>
        ))}
      </ul>
    </div>
    <button className="vacancy-card__button btn">Ko'proq</button>
  </div>
);

const VacancyPage = () => (
  <div className="vacancy">
    <h1 className="vacancy__title">Ish joylari</h1>
    <div className="vacancy__list">
      {vacancies.map((vacancy, index) => (
        <VacancyCard key={index} {...vacancy} />
      ))}
    </div>
  </div>
);

export default VacancyPage;

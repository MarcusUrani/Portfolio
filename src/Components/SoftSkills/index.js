import React from "react";
import "./style.css";

const SoftSkills = () => {
  return (
    <article className="soft--skills__container">
      <h2 className="title">Soft Skills</h2>
      <ul className="soft--skills__list">
        <li className="soft--skills__item">Apreciação de desafios</li>
        <li className="soft--skills__item">
          Boa capacidade de trabalhar em equipe
        </li>
        <li className="soft--skills__item">Comunicação eficiente</li>
        <li className="soft--skills__item">
          Facilidade de lidar e aprender com feedbacks
        </li>
        <li className="soft--skills__item">Gerenciamento de tempo</li>
        <li className="soft--skills__item">Inglês avançado</li>
        <li className="soft--skills__item">Organização</li>
        <li className="soft--skills__item">Positividade</li>
      </ul>
    </article>
  );
};

export default SoftSkills;

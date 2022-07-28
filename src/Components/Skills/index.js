import React from "react";
import "./style.css";
import skillList from "../../Services/skills.json";

const Skills = () => {
  return (
    <article className="about__container">
      <h2 className="title">Habilidades Técnicas e Ferramentas</h2>
      <ul className="about__list">
        {skillList.map((item) => {
          return (
            <li className="about__item" key={item.id}>
              <img
                className="about__item__icon"
                src={item.icon}
                alt="Ícone da ferramenta"
                title={item.skill}
              />
              {item.skill}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Skills;

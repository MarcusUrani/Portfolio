import React from "react";
import "./style.css";
import skillList from "../../Services/skills.json";

const Skills = () => {
  return (
    <article className="about__container">
      <h2 className="title">Habilidades Técnicas e Ferramentas</h2>
      <ul className="about__list">
        {skillList.map((skill) => {
          return (
            <li className="about__item" key={skill.id}>
              <img
                className="about__item__icon"
                src={skill.icon}
                alt="Ícone da ferramenta"
              />
              {skill.skill}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Skills;

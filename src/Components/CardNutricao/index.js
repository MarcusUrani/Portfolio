import React from "react";
import { ProjectsItens } from "../ProjectsItens";
import Nutricao from "../../img/nutricao.png";

const CardNutricao = () => {
  return (
    <div className="projects__card">
      <figure className="card__img">
        <img src={Nutricao} alt="Página inicial aparecida nutrição" />
      </figure>
      <article className="card__texts">
        <h3 className="card__tech">{ProjectsItens.projectNutricao.tech} </h3>
        <h2 className="card__title">{ProjectsItens.projectNutricao.name}</h2>
        <p className="card__description">
          {ProjectsItens.projectNutricao.description}
        </p>
        <a
          href={ProjectsItens.projectNutricao.link}
          target="_blank"
          rel="noreferrer"
          className="card__link"
        >
          Visitar Página
        </a>
      </article>
    </div>
  );
};

export default CardNutricao;

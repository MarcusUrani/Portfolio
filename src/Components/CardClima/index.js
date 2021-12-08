import React from "react";
import { ProjectsItens } from "../ProjectsItens";
import Clima from "../../img/clima.png";

const CardClima = () => {
  return (
    <div className="projects__card">
      <figure className="card__img">
        <img src={Clima} alt="Página inicial aparecida nutrição" />
      </figure>
      <article className="card__texts">
        <h3 className="card__tech">{ProjectsItens.projectClima.tech} </h3>
        <h2 className="card__title">{ProjectsItens.projectClima.name}</h2>
        <p className="card__description">
          {ProjectsItens.projectClima.description}
        </p>
        <a
          href={ProjectsItens.projectClima.link}
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

export default CardClima;

import React from "react";
import { ProjectsItens } from "../ProjectsItens";
import Aluraflix from "../../img/aluraflix.png";

const CardAluraflix = () => {
  return (
    <div className="projects__card">
      <figure className="card__img">
        <img src={Aluraflix} alt="Página inicial aparecida nutrição" />
      </figure>
      <article className="card__texts">
        <h3 className="card__tech">{ProjectsItens.projectAluraflix.tech} </h3>
        <h2 className="card__title">{ProjectsItens.projectAluraflix.name}</h2>
        <p className="card__description">
          {ProjectsItens.projectAluraflix.description}
        </p>
        <a
          href={ProjectsItens.projectAluraflix.link}
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

export default CardAluraflix;

import React from "react";
import { ProjectsItens } from "../ProjectsItens";
import Trunfo from "../../img/Trunfo.png";

const CardTrunfo = () => {
  return (
    <div className="projects__card">
      <figure className="card__img">
        <img src={Trunfo} alt="Página inicial do quiz feito em react" />
      </figure>
      <article className="card__texts">
        <h3 className="card__tech">{ProjectsItens.projectTrunfo.tech} </h3>
        <h2 className="card__title">{ProjectsItens.projectTrunfo.name}</h2>
        <p className="card__description">
          {ProjectsItens.projectTrunfo.description}
        </p>
        <a
          href={ProjectsItens.projectTrunfo.link}
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

export default CardTrunfo;

import React from "react";
import { ProjectsItens } from "../ProjectsItens";
import Pontuacao from "../../img/pontuacao.png";

const CardPontuacao = () => {
  return (
    <div className="projects__card">
      <figure className="card__img">
        <img src={Pontuacao} alt="Página inicial do quiz feito em react" />
      </figure>
      <article className="card__texts">
        <h3 className="card__tech">{ProjectsItens.projectPontuacao.tech} </h3>
        <h2 className="card__title">{ProjectsItens.projectPontuacao.name}</h2>
        <p className="card__description">
          {ProjectsItens.projectPontuacao.description}
        </p>
        <a
          href={ProjectsItens.projectPontuacao.link}
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

export default CardPontuacao;

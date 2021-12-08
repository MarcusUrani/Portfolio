import React from "react";
import { ProjectsItens } from "../ProjectsItens";
import ReactQuiz from "../../img/react-quiz.png";

const CardQuiz = () => {
  return (
    <div className="projects__card">
      <figure className="card__img">
        <img src={ReactQuiz} alt="Página inicial do quiz feito em react" />
      </figure>
      <article className="card__texts">
        <h3 className="card__tech">{ProjectsItens.projectQuiz.tech} </h3>
        <h2 className="card__title">{ProjectsItens.projectQuiz.name}</h2>
        <p className="card__description">
          {ProjectsItens.projectQuiz.description}
        </p>
        <a
          href={ProjectsItens.projectQuiz.link}
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

export default CardQuiz;

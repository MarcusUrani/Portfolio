import React from "react";
import "./style.css";
import cards from "./cards.json";

const Projects = () => {
  return (
    <main className="projects">
      <h1 className="title">Projetos</h1>
      <section className="projects__container">
        {cards.map((card) => (
          <div className="projects__card" key={card.id}>
            <figure className="card__img">
              <img src={`/assets/${card.image}.png`} alt="Logo do projeto" />
            </figure>
            <article className="card__texts">
              <h3 className="card__tech">{card.tech} </h3>
              <h2 className="card__title">{card.name}</h2>
              <p className="card__description">{card.description}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className="card__link"
              >
                Visitar Página
              </a>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;

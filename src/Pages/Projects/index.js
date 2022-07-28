import React from "react";
import "./style.css";
import cards from "../../Services/cards.json";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main className="projects">
      <h1 className="title">Projetos</h1>
      <section className="projects__container">
        {cards.map((card) => (
          <div className="projects__card" key={card.id}>
            <figure className="card__img">
              <img src={card.image} alt="Logo do projeto" title={card.name} />
            </figure>
            <article className="card__texts">
              <h3 className="card__tech">{card.tech} </h3>
              <h2 className="card__title">{card.name}</h2>
              <p className="card__description">{card.description}</p>
              <Link
                to={`/projects/${card.slug}`}
                className="card__link"
                title="Ver mais"
                onClick={() => {
                  window.scroll({
                    top: 0,
                  });
                }}
              >
                Ver mais
              </Link>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;

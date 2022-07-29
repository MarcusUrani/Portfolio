import "./style.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

const ProjectBody = ({ project, itemTechs, itemImages }) => {
  return (
    <section className="project__body">
      <article className="project__body__content">
        <span className="project__body__content__description">
          {project.description}
        </span>
      </article>
      <section className="project__body__techs">
        <h2 className="project__body__techs__title">Tecnologias utilizadas:</h2>
        <ul className="project__body__techs__list">
          {itemTechs.map((tech) => (
            <li className="project__body__techs__list__item" key={tech.id}>
              {tech.image && (
                <img
                  className="project__body__techs__list__item__img"
                  src={tech.image}
                  alt={tech.name}
                  title={tech.name}
                />
              )}
              {tech.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="project__body__media">
        <h3 className="project__body__media__title">Imagens do projeto:</h3>
        <figure className="project__body__media__container">
          {itemImages.map((item) => (
            <img
              className="project__body__media__container__image"
              src={item.image}
              alt={item.title}
              title={item.title}
              key={item.id}
            />
          ))}
        </figure>
      </section>
      {project.body.assets.video && (
        <section className="project__body__video">
          <h3 className="project__body__video__title">Vídeo:</h3>
          <Player>
            <Youtube videoId={project.body.assets.video} cookies={true} />
            <DefaultUi />
          </Player>
        </section>
      )}
    </section>
  );
};

export default ProjectBody;

import "./style.css";

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
      <section className="project__body__development">
        <h3 className="project__body__development__title">Desenvolvimento:</h3>
      </section>
    </section>
  );
};

export default ProjectBody;

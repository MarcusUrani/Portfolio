import "./style.css";

const ProjectBody = ({ project, itemTechs }) => {
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
                />
              )}
              {tech.name}
            </li>
          ))}
        </ul>
        <h3>Prints do projeto:</h3>
        <img src={project.body.assets.image} alt={project.name} />
      </section>
    </section>
  );
};

export default ProjectBody;

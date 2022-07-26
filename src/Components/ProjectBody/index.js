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
              {tech.name}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ProjectBody;

import "./style.css";
import GitHub from "../../img/github.png";

const ProjectHeader = ({ project }) => {
  return (
    <section
      className="project__header"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="project__header__shadow--container">
        <article className="project__header__shadow--container__content">
          <h3 className="title intern__title">{project.name}</h3>
          <p className="project__header__shadow--container__content__description">
            {project.shortDesc}
          </p>
          <nav className="project__header__shadow--container__content__links">
            <a
              className="project__header__shadow--container__content__links__link"
              target={"_blank"}
              rel="noreferrer"
              href={project.link}
              title="Acessar projeto"
            >
              Acessar projeto
            </a>
            <a
              className="project__header__shadow--container__content__links__repo--link"
              target={"_blank"}
              rel="noreferrer"
              title="Repositório do projeto"
              href={project.repository}
            >
              <img
                src={GitHub}
                alt="GitHub logo"
                className="project__header__shadow--container__content__links__repo--link__logo"
                title="Repositório do projeto"
              />
              Repositório
            </a>
          </nav>
        </article>
      </section>
    </section>
  );
};

export default ProjectHeader;

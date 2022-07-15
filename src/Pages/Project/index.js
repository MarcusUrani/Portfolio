import "./style.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../Services/cards.json";
import { useEffect } from "react";
import GitHub from "../../img/github.png";

const Project = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getProjectBySlug = projects.find((project) => project.slug === slug);
    setItem(getProjectBySlug);
  }, [slug]);

  return (
    <main className="project">
      {item ? (
        <section
          className="project__header"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="project__header__shadow--container">
            <article className="project__header__shadow--container__content">
              <h3 className="title intern__title">{item.name}</h3>
              <a
                className="project__header__shadow--container__content__repo--link"
                target={"_blank"}
                rel="noreferrer"
                href={item.repository}
              >
                <img
                  src={GitHub}
                  alt="GitHub logo"
                  className="project__header__shadow--container__content__repo--link__logo"
                />
                Repositório
              </a>
            </article>
          </section>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Project;

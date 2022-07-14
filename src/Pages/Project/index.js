import "./style.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../Services/cards.json";
import { useEffect } from "react";

const Project = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getProjectBySlug = projects.find((project) => project.slug === slug);
    setItem(getProjectBySlug);
  });

  return (
    <main className="project">
      <section className="project__header">
        <section className="project__header__shadow">
          {item ? (
            <h3
              className="project__header__title"
              style={{
                textAlign: "center",
                paddingTop: "100px",
              }}
            >
              {item.name}
            </h3>
          ) : (
            <h3>Carregando...</h3>
          )}
        </section>
      </section>
    </main>
  );
};

export default Project;

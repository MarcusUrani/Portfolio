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
          }}
        >
          <section className="project__header__container">
            <h3 className="project__header__title">{item.name}</h3>
          </section>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Project;

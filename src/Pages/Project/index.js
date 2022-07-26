import "./style.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../Services/cards.json";
import { useEffect } from "react";
import ProjectHeader from "../../Components/ProjectHeader";
import ProjectBody from "../../Components/ProjectBody";

const Project = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [itemTechs, setItemTechs] = useState([]);

  const getItemTechs = (item) => {
    const techs = [];
    Object.keys(item.body.techs).map((tech) => {
      techs.push(item.body.techs[tech]);
      setItemTechs(techs);
    });
  };

  useEffect(() => {
    const getProjectBySlug = projects.find((project) => project.slug === slug);
    setItem(getProjectBySlug);
    if (item) {
      getItemTechs(item);
      console.log(itemTechs);
    }
  }, [slug, item]);

  return (
    <main className="project">
      {item ? (
        <section>
          <ProjectHeader project={item} />
          <ProjectBody project={item} itemTechs={itemTechs} />
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Project;

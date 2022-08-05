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
  const [itemImages, setItemImages] = useState([]);

  const getItemTechs = (item) => {
    const techs = [];
    // eslint-disable-next-line
    Object.keys(item.body.techs).map((tech) => {
      techs.push(item.body.techs[tech]);
      setItemTechs(techs);
    });
  };

  const getItemImages = (item) => {
    const images = [];
    // eslint-disable-next-line
    Object.keys(item.body.assets.images).map((image) => {
      images.push(item.body.assets.images[image]);
      setItemImages(images);
    });
  };

  useEffect(() => {
    const getProjectBySlug = projects.find((project) => project.slug === slug);
    setItem(getProjectBySlug);
    if (item) {
      getItemTechs(item);
      getItemImages(item);
    }
  }, [slug, item]);

  return (
    <main className="project">
      {item ? (
        <section>
          <ProjectHeader project={item} />
          <ProjectBody
            project={item}
            itemTechs={itemTechs}
            itemImages={itemImages}
          />
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Project;

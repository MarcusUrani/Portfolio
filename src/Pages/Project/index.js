import "./style.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../../Services/cards.json";
import { useEffect } from "react";
import ProjectHeader from "../../Components/ProjectHeader";

const Project = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getProjectBySlug = projects.find((project) => project.slug === slug);
    setItem(getProjectBySlug);
  }, [slug]);

  return (
    <main className="project">
      {item ? <ProjectHeader project={item} /> : <div>Loading...</div>}
    </main>
  );
};

export default Project;

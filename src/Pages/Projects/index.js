import React from "react";
import "./style.css";
import CardQuiz from "../../Components/CardQuiz";
import CardNutricao from "../../Components/CardNutricao";
import CardClima from "../../Components/CardClima";
import CardAluraflix from "../../Components/CardAluraflix";
import CardPontuacao from "../../Components/CardPontuacao";
import CardTrunfo from "../../Components/CardTrunfo";

const Projects = () => {
  return (
    <main className="projects">
      <h1 className="title">Projetos</h1>
      <section className="projects__container">
        <CardQuiz />
        <CardNutricao />
        <CardClima />
        <CardAluraflix />
        <CardPontuacao />
        <CardTrunfo />
      </section>
    </main>
  );
};

export default Projects;

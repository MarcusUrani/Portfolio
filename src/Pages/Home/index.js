import React from "react";
import "./style.css";
import Profile from "../../img/eu.jfif";
import Github from "../../img/github.png";
import AboutMe from "../../Components/AboutMe";
import Skills from "../../Components/Skills";
import SoftSkills from "../../Components/SoftSkills";

const Home = () => {
  return (
    <main className="about">
      <section className="about__info">
        <img
          className="about__photo"
          src={Profile}
          alt="Marcus Urani"
          title={"Marcus Urani"}
        />
        <article className="about__texts">
          <h1 className="about__name">Marcus Vinícius Gomes Urani</h1>
          <p className="about__role">Desenvolvedor front-end</p>
          <a
            className="about__contain"
            href="https://github.com/MarcusUrani"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github" title="Github" />
            <p className="about__github" title="Github">
              MarcusUrani
            </p>
          </a>
        </article>
      </section>
      <AboutMe />
      <Skills />
      <SoftSkills />
    </main>
  );
};

export default Home;

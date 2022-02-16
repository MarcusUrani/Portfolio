import React from "react";
import "./style.css";
import Profile from "../../img/eu.jfif";
import Github from "../../img/github.png";
import AboutMe from "../../Components/AboutMe";
import Habilities from "../../Components/Habilities";
import SoftSkills from "../../Components/SoftSkills";

const Home = () => {
  return (
    <main className="about">
      <section className="about__info">
        <img className="about__photo" src={Profile} alt="Marcus Urani" />
        <article className="about__texts">
          <h1 className="about__name">Marcus Vinícius Gomes Urani</h1>
          <p className="about__role">Desenvolvedor front-end</p>
          <div className="about__contain">
            <img src={Github} alt="Github" />
            <a
              className="about__github"
              href="https://github.com/MarcusUrani"
              target="_blank"
              rel="noreferrer"
            >
              MarcusUrani
            </a>
          </div>
        </article>
      </section>
      <AboutMe />
      <Habilities />
      <SoftSkills />
    </main>
  );
};

export default Home;

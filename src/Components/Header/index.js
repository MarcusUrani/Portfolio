import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <section className="header__container">
        <h3 className="header__title">Marcus Urani</h3>
      </section>
      <article className="header__links">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/projects" className="header__link">
          Projetos
        </Link>
        <Link to="/contact" className="header__link">
          Contato
        </Link>
      </article>
    </header>
  );
};

export default Header;

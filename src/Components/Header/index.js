import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <section className="header__container">
          <h3 className="header__title" title="Marcus Urani">
            Marcus Urani
          </h3>
        </section>
        <article className="header__links">
          <Link
            to="/"
            className={`header__link `}
            title="Home"
            onClick={() => {
              handleToTop();
            }}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`header__link `}
            title="Projetos"
            onClick={() => {
              handleToTop();
            }}
          >
            Projetos
          </Link>
          <Link
            to="/contact"
            className={`header__link `}
            title="Contato"
            onClick={() => {
              handleToTop();
            }}
          >
            Contato
          </Link>
        </article>
      </nav>
    </header>
  );
};

export default Header;

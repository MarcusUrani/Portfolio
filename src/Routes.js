import React from "react";
import { Route, Routes as Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

export default function Routes() {
  let location = useLocation();

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="transition" timeout={500}>
          <Switch location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:slug" element={<h1>Olá</h1>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

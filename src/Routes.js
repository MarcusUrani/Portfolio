import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

const Routes = () => {
  return (
    <Router>
      <Header />
      <TransitionGroup>
        <CSSTransition>
          <Switch>
            <Route exact path="/" element={<Home />} />
          </Switch>
          <Switch>
            <Route path="/projects" element={<Projects />} />
          </Switch>
          <Switch>
            <Route path="/contact" element={<Contact />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </Router>
  );
};

export default Routes;

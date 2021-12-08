import React from "react";
import "./style.css";
import LinkedIn from "../../Components/LinkedIn";
import Gmail from "../../Components/Gmail";
import Instagram from "../../Components/Instagram";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact__container">
        <h3 className="title">Contato</h3>
        <LinkedIn />
        <Gmail />
        <Instagram />
      </section>
    </main>
  );
};

export default Contact;

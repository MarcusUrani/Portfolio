import React from "react";
import "./style.css";
import Contacts from "./contact.json";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact__container">
        <h3 className="title">Contato</h3>
        {Contacts.map((contact) => (
          <a
            className="contact__item"
            href={contact.href}
            target="blank"
            rel="noreferrer"
          >
            <img src={`/assets/${contact.image}.png`} alt={contact.alt} />
            {contact.name}
          </a>
        ))}
      </section>
    </main>
  );
};

export default Contact;

import React from "react";
import "./style.css";
import Contacts from "../../Services/contact.json";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact__container">
        <h3 className="title">Contato</h3>
        {Contacts.map((contact) => (
          <a
            key={contact.id}
            className="contact__item"
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            title={contact.name}
          >
            <img src={contact.image} alt={contact.alt} />
            {contact.name}
          </a>
        ))}
      </section>
    </main>
  );
};

export default Contact;

import React from "react";
import GmailIcon from "../../img/gmail.png";

const Gmail = () => {
  return (
    <a
      className="contact__item"
      href="mailto:marcus.urani20@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      <img src={GmailIcon} alt="Gmail" className="contact__img" />
      Enviar Email
    </a>
  );
};

export default Gmail;

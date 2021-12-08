import React from "react";
import LinkedInIcon from "../../img/linkedin.png";

const LinkedIn = () => {
  return (
    <a
      className="contact__item"
      href="https://www.linkedin.com/in/marcusurani/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={LinkedInIcon} alt="LinkedIn" className="contact__img" />
      LinkedIn
    </a>
  );
};

export default LinkedIn;

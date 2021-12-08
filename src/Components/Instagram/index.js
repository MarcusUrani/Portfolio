import React from "react";
import InstagramIcon from "../../img/instagram.png";

const Instagram = () => {
  return (
    <a
      className="contact__item"
      href="https://www.instagram.com/marcusvgu/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={InstagramIcon} />
      Instagram
    </a>
  );
};

export default Instagram;

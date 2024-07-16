import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <h1>Find me on : </h1>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:deepraajdas@email.com" target="_blank">deepraajdas@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/deepraj-das-146890208/" target="_blank">linkedin.com/deepraj-das</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ManiacOne" target="_blank">github.com/ManiacOne</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gitlab.png")} alt="Gitlab icon" />
          <a href="https://gitlab.com/Maniac001" target="_blank">gitlab.com/Maniac001</a>
        </li>
      </ul>
    </footer>
  );
};

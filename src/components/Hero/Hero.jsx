import React from "react";
import video from "../../../assets/hero/avatar.mp4";
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deepraj</h1>
        <p className={styles.description}>
          Your friendly neigbourhood developer  
        </p>
        <a href="mailto:deepraajdas@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <video autoPlay loop className={styles.heroVideo}>
        <source src={video} type="video/mp4"/>
      </video>
      {/* <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      {/* <div className={styles.topBlur} /> */}
      <div className={styles.bottomBlur} />
    </section>
  );
};

import React from "react";
import styles from "./JoinUs.module.css";

const JoinUs = () => {
  return (
    <div className={`${styles.joinUs} container`}>
      <div className={styles.join}>JOIN US</div>
      <div className={styles.boxWrapper}>
        <div className={styles.box}>
          <h4 className={styles.title}>1. Download the game</h4>
          <p className={styles.text}>
            You need to buy then install the Minecraft Java game for PC: <br />
            <a
              href="https://myrelia.fr/store/."
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              https://myrelia.fr/store/.
            </a>
          </p>
          <p className={styles.text}>After installing the game, launch it.</p>
        </div>
        <div className={styles.box}>
          {" "}
          <h4 className={styles.title}>2. Login to MYRELIA</h4>
          <p className={`${styles.text} ${styles.list}`}>
            <span className={styles.circle}></span>
            On the game, go to Multiplayer , then New Server
          </p>
          <p className={`${styles.text} ${styles.list}`}>
            <span className={styles.circle}></span>
            Enter myrelia.fr in the Address box and validate.
          </p>
          <div className={styles.button}>MYRELIA.FR</div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

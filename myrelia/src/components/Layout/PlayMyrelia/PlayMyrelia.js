import React from "react";
import styles from "./PlayMyrelia.module.css";

const PlayMyrelia = () => {
  return (
    <div className={`${styles.buttonContainer} container`}>
      <div className={styles.button}>
        {" "}
        <span className={styles.circle}></span>{" "}
        <span className={styles.text}>PLAY.MYRELIA.FR</span>
      </div>
    </div>
  );
};

export default PlayMyrelia;

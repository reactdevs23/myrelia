import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, to, button }) => {
  return (
    <>
      {button ? (
        <button className={styles.button}>
          <span className={styles.text}>{children}</span>
        </button>
      ) : (
        <a href={to} className={styles.button}>
          <span className={styles.text}>{children}</span>
        </a>
      )}
    </>
  );
};

export default Button;

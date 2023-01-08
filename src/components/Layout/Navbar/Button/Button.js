import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, to }) => {
  return (
    <a href={to} className={styles.button}>
      <span className={styles.text}>{children}</span>
    </a>
  );
};

export default Button;

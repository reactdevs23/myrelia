import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.play}>
        <div>
          <p className={styles.text}>This server is ready! </p>
          <h6 className={styles.heading}>PLAY.MYRELIA</h6>
        </div>
        <AiOutlineClose className={styles.icon} />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>SHOP</button>
      </div>
      <div className={`${styles.play} ${styles.registered}`}>
        <IoIosPeople className={styles.icon} />
        <div>
          <p className={styles.text}>3693 registered on our site</p>
          <h6 className={styles.heading}>Registered Members</h6>
        </div>
      </div>
    </div>
  );
};

export default Header;

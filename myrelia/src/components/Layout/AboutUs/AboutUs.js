import React from "react";
import logo from "../../../images/logo.png";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const lists = ["SHOP", "VOTE", "DISCORD"];
  return (
    <div className={styles.aboutUsWrapper}>
      <div className="container">
        <div className={`${styles.aboutUs} `}>
          <div className={styles.wrapper}>
            <img src={logo} alt="#" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.wrapper}>
              <div>
                <h3 className={styles.title}>ABOUT US</h3>
                <p className={styles.text}>
                  Join the adventure of MYRELIA a 100% stable PvP/ <br />{" "}
                  Factions Farm2Win server with a CashPrize of 950€ <br /> which
                  is available every month!{" "}
                </p>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div>
                <h3 className={styles.title}>USEFUL LINKS</h3>
                {lists.map((el, i) => (
                  <div className={styles.list} key={i}>
                    {" "}
                    <span className={styles.circle}></span>{" "}
                    <a
                      href="#/"
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.listItem} ${styles.text}`}
                    >
                      {el}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p className={styles.copyRightText}>
            Copyright © 2022 Myrelia - All rights reserved.
          </p>
          <p className={styles.copyRightText}>
            {" "}
            Powered by Myrelia. | Theme made by Myrelia{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

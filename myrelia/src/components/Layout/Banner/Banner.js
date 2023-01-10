import React from "react";
import banner from "../../../images/banner.png";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div>
      <img src={banner} alt="#" className={styles.banner} />
    </div>
  );
};

export default Banner;

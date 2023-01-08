import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navArray = [
    {
      navItem: "Home",
      to: "/",
    },
    {
      navItem: "Join Us",
      to: "/joinus",
    },
    {
      navItem: "Ranking",
      to: "/ranking",
    },
    {
      navItem: "FAQ",
      to: "/faq",
    },
  ];

  return (
    <section className={`${styles.navbar} `}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.navbarWrapper}>
          <Button to="https://www.google.com/" button="true">
            SHOP
          </Button>
          <div
            className={`${styles.navContainer} ${
              sidebar && styles.showNavItems
            }`}
          >
            {navArray.map((el, i) => (
              <NavLink
                to={el.to}
                key={i}
                onClick={() => setSidebar(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.navItem}`
                    : styles.navItem
                }
              >
                {el.navItem}
              </NavLink>
            ))}
            {sidebar && (
              <MdClose
                color="#FDAF27"
                className={`${styles.hamburgerIcon} ${styles.closeIcon}`}
                onClick={() => setSidebar((prev) => !prev)}
              />
            )}
          </div>
          <Button to="https://www.google.com/">DISCORD</Button>
        </div>
        <RxHamburgerMenu
          color="#FDAF27"
          className={styles.hamburgerIcon}
          onClick={() => setSidebar((prev) => !prev)}
        />
      </div>
    </section>
  );
};

export default Navbar;

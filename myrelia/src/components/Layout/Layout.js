import React from "react";
import PlayMyrelia from "./PlayMyrelia/PlayMyrelia";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <PlayMyrelia />
      <Navbar />
      <Banner />
      {children}
      <AboutUs />
    </>
  );
};

export default Layout;

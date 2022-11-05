import React, { useState } from "react";
import "./styles.css";
import BackGround from "./background.jpg";
import { Button, DatePicker, message } from "antd";
// import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";

const Banner = ({ handleScrollMenu }) => {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="content-main">
            <h1>Domino's online ordering</h1>
            <p>Yummy pizza delivered fast & fresh</p>
            <Button onClick={handleScrollMenu}>
              View Menu <i className="fas fa-long-arrow-alt-right"></i>
            </Button>
          </div>
        </div>
        <img className="header-img" src={BackGround} alt="banner" />
      </header>
    </>
  );
};

export default Banner;

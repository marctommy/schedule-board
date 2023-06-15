import React from "react";
import styles from "./Header.module.css";
import slogan from "../assets/slogan.png";
export const Footer = () => {
  return (
    <div className={styles.slogan}>
      <center>
        <img className={styles.slogan} src={slogan} alt={slogan} />
      </center>
    </div>
  );
};

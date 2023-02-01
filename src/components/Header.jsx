import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/Street_College_Logo.png";
import DateTime from "./DateTime";

export default function Header() {
  return (
    <div>
      <div className={styles.time}>
        <DateTime />
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

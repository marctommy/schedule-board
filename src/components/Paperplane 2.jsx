import React from "react";
import paperplane from "../assets/paperplane.png";
import styles from "./Header.module.css";

export const Paperplane = () => {
  return (
    <div>
      <img className={styles.paperplane} src={paperplane} alt={paperplane} />
    </div>
  );
};

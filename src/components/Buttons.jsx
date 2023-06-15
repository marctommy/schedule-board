import styles from "./Buttons.module.css";
import React from "react";

export const Buttons = () => {
  return (
    <div>
      {" "}
      <div className={styles.container}>
        <button className={styles.classes}>Kurse</button>
      </div>
      <div>
        <button className={styles.teachers}>Leute</button>
      </div>
    </div>
  );
};

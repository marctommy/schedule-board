import React from "react";
import styles from "./Header.module.css";

import DateTime from "./DateTime";

export default function Header() {
  return (
    <div>
      <div className={styles.time}>
        <DateTime />
      </div>
    </div>
  );
}

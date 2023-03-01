import React from "react";
import styles from "./Header.module.css";
import { Footer } from "./Footer";
import { Paperplane } from "./Paperplane";

import DateTime from "./DateTime";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.time}>
        <DateTime />
      </div>
      <Footer />
      <Paperplane />
    </div>
  );
}

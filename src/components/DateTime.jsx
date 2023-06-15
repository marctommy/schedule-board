import React, { useState, useEffect } from "react";
import clock from "../assets/uhrzeit.png";
import calendar from "../assets/kalender.png";
import logo from "../assets/transparent_logo.png";

import styles from "./Header.module.css";

export const DateTime = () => {
  const options = { weekday: "long" };
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="bold-text">
      <img className={styles.logo} src={logo} alt="logo" />

      <div>
        {" "}
        <p>
          <img className={styles.clock} src={calendar} alt="clock" />
          Heute ist {new Intl.DateTimeFormat("de-DE", options).format(
            date
          )}{" "}
        </p>
        <p className="very-bold-text">
          {" "}
          <img className={styles.clock} src={clock} alt="clock" />
          {date.toLocaleTimeString([], { timeStyle: "short" })} Uhr
        </p>{" "}
      </div>
    </div>
  );
};

export default DateTime;

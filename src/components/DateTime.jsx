import React, { useState, useEffect } from "react";
import { format } from "date-fns";

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
    <div>
      <p>Uhrzeit: {date.toLocaleTimeString("de-DE")}</p>
      <p>Tag: {new Intl.DateTimeFormat("de-DE", options).format(date)}</p>
      {/* <p>
        Datum:
        {(new Intl.DateTimeFormat("de-DE", options).format(date), "mm/dd/yyyy")}
      </p> */}
    </div>
  );
};

export default DateTime;

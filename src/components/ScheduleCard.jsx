import React from "react";
import "./TeacherCard.css";

export default function Schedulecard({ items }) {
  return (
    <>
      {items.map((item) => (
        <div className="schedule-list">
          <div className="schedule-item">
            {" "}
            <div className="header text-xl">
              {" "}
              {item.name}
              <p>Uhrzeit: {item.event} </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

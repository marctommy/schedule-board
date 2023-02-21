import React from "react";
import "./TeacherCard.css";

export default function Schedulecard({ items }) {
  return (
    <>
      {items.map((item) => (
        <div>
          <p className="text-xl">{item.name}</p>
        </div>
      ))}
    </>
  );
}

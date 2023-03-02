import React from "react";
import "./TeacherCard.css";

export default function TeacherCard({ items }) {
  return (
    <>
      {items.map((item) => (
        <div className="card-container">
          {/* <img
            className="img-container"
            src={require(`../assets/${item.name}.jpg`)}
            alt={item.name}
          /> */}
          <p className="text-xl">{item.name}</p>
          <p>{item.subject}</p>
        </div>
      ))}
    </>
  );
}

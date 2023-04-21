import React from "react";
import "./TeacherCard.css";
import { useEffect, useState } from "react";

export default function TeacherCard({ items }) {
  return (
    <>
      {items.map((item) => (
        <div className="card-container">
          <img
            className="img-container"
            src={require(`../assets/${item.name}.jpg`)}
            alt={item.name}
          />
          <p className="text-xl">{item.name}</p>
          <p>{item.subject}</p>
        </div>
      ))}
    </>
  );
}
// conditional rendering

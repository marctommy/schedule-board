import React from "react";
import "./ProfileCard.css";
import photo from "../assets/franzi.jpg";

export default function ProfileCard() {
  return (
    <div className="card-container">
      <header>
        <img src={photo} alt="photo-name" />
      </header>
      <h1 className="bold-text">Name:</h1>
      <h1 className="normal-text">Subject:</h1>
    </div>
  );
}

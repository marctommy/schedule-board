import React from "react";
import "./ProfileCard.css";
import photo from "../assets/franzi.jpg";

export default function ProfileCard() {
  return (
    <div className="card-container">
      <div className="img-container">
        {" "}
        <img src={photo} alt="photo-name" />
      </div>
      <h1 className="bold-text">Name :</h1>
      <h1 className="normal-text">Subject:</h1>
    </div>
  );
}

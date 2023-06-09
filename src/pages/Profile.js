import React from "react";
import { Link, useParams } from "react-router-dom";
import { students } from "../data";

const Student = () => {
  const { id } = useParams();
  const ids = parseInt(id);

  const specifistudent = students.find((student) => student.id === ids);
  const { name, image, snack, emojis, grade } = specifistudent;
  return (
    <div className="container-profile">
      <div className="card2">
        <div className="cover-photo">
          <img src={image} alt="Pic" className="profile" />
        </div>
        <h3 className="profile-name">{name}</h3>
        <ul>
          <li>Grade : {grade}</li>
          <li>Snack : {snack}</li>
          <li>Emoji : {emojis}</li>
        </ul>

        <div className="icons">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <Link to="/">
          <button className="btn2">Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default Student;

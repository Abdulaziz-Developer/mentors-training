import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ id, name, title, avatar }) => {
  return (
    <div className="card">
      <div className="info">
        <div className="sub">{name}</div>
        <div className="title">{title}</div>
        <Link to={`/student/` + id}>
          <button className="btn">
            <FontAwesomeIcon icon={faUserCircle} />
          </button>
        </Link>
        <a className="btn" href="mailto:someone@example.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="image">
        <img src={avatar} alt="avatar NOT HERE !" />
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Card = ({ name, title, avatar, snack, grade, emojis }) => {
  return (
    <div className="card">
      <div className="info">
        <div className="sub">{name}</div>
        <div className="title">{title}</div>
        <a className="btn link" href="mailto:webmaster@example.com">
          Email
        </a>
        <button className="btn">Grade: {grade}</button>
        <button className="btn">Favourite Snacks: {snack}</button>
        <button className="btn">Best emoji: 😬</button>
      </div>
      <div className="image">
        <img src={avatar} alt="avatar NOT HERE !" />
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./Card";
import "./cards.css";
import { students } from "../../data";

const Cards = ({ search }) => {
  return (
    <div className="wrapper2">
      <div className="container2">
        <div className="row">
          {students
            .filter((student) => {
              return search.toLowerCase() === ""
                ? student
                : student.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((student) => (
              <Card
                key={student.id}
                id={student.id}
                name={student.name}
                title={student.title}
                avatar={student.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

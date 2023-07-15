import "./Cards.css";
import React from "react";

const Cards = ({ amount, description, bgcolor }) => {
  return (
    <div className="cards">
      <div className="cards__outer">
        <div className="cards__inner" style={{ backgroundColor: `${bgcolor}` }}>
          <h4>$ {amount}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

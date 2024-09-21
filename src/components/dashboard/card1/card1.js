import React from "react";
import "./card1.css";

export default function Card1({ heading, number, data, bgColor, dataColor }) {
  return (
    <div className="card1" style={{ backgroundColor: bgColor }}>
      <p className="heading">{heading}</p>
      <p className="number">{number}</p>
      <p className="data" style={{ color: dataColor }}>
        {data}
      </p>
    </div>
  );
}

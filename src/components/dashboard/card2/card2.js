import React from "react";
import "./card2.css";

export default function Card2({ heading, number, src, men, women, percent }) {
  return (
    <div className="card2">
      <p className="heading">{heading}</p>
      <div className="graph-number">
        <p className="number">{number}</p>
        <img src={src} alt="graph" className="graph" />
      </div>
      <div className="data">
        <div className="personData">
          <p className="men">{men} Men</p>
          <p className="women">{women} Women</p>{" "}
          {/* Ensure different class for women */}
        </div>
        <p className="percent">{percent} Past Month</p>
      </div>
    </div>
  );
}

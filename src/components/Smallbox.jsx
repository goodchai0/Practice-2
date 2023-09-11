import React from "react";
import "./Smallbox.css";
const Smallbox = (value) => {
  return (
    <div className="mainSBox" style={{ backgroundColor: value.color }}>
      <h3>{value.title}</h3>
      <h3>{value.figure}</h3>
    </div>
  );
};

export default Smallbox;

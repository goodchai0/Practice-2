import React from "react";
import "./Bigbox.css";
const BigBox = () => {
  return (
    <div id="mainTab">
      <div id="tab">
        <div id="tabs">
          <div id="onediv" style={{ color: "black" }}>
            YOUR INFO
          </div>
          <div>BOOKMARKS</div>
          <div>SETTINGS</div>
        </div>
        <div id="details">
          <h3>Your information</h3>
          <br></br>
          <p>
            <b>Name </b>: Amit Kewot
          </p>
          <br></br>
          <p>
            <b>Email </b>: amitkewot59@gmail.com
          </p>
          <br></br>
          <p>
            <b>Phone </b>: 900009099
          </p>
          <br></br>
          <p>
            <b>Marks </b>: 500.00
          </p>

          <div id="nextButton">
            <button>NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBox;

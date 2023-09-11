import React from "react";
import Smallbox from "./Smallbox";
import "./Box.css";
import Bigbox from "./BigBox";
import "react-sticky";
import Sidebar from "./Sidebar";
const Box = () => {
  return (
    <div id="mainBox">
      <div id="oneBox">
        <img src="./images/one.svg" alt="computer"></img>
        <textarea>
          It's not only writers who can benefit from this free online tool. If
          you're a programmer who's working on a ......
        </textarea>
        <Sidebar />
      </div>
      <div id="MainTotalBox">
        <div id="smallBox">
          <Smallbox title="Total Question’s" figure="200,000" color="#929DFF" />
          <Smallbox title="Total Answer’s" figure="105,000" color="#734CF2" />
          <Smallbox title="Participated" figure="10,000" color="#D288FF" />
          <Smallbox title="Total Passed" figure="6,000" color="#000000" />
        </div>
      </div>
      <Bigbox />
      <img src="/images/chat.svg" id="chat"></img>
    </div>
  );
};

export default Box;

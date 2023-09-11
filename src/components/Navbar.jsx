import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Main">
      <div id="one">
        <p>Dapper</p>
      </div>
      <div id="two">
        <li>
          <ul>Home</ul>
          <ul>About Us</ul>
          <ul>Information</ul>
          <ul>More</ul>
          <ul>
            <div id="searchbox">
              <input id="search" placeholder="Search..."></input>
              <i className="fa fa-search"></i>
            </div>
          </ul>
        </li>
      </div>
      <div id="three">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">{/* <a href="/">Home</a> */}</li>
        <li className="nav-item">{/* <a href="/camera">Camera</a> */}</li>
        <li className="nav-item">{/* <a href="/events">Events</a> */}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
